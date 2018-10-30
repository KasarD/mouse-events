"""
Модуль содержит описание простого HTTP сервера на python.
Поддерживаются как GET, так и POST запросы
"""

from http.server import BaseHTTPRequestHandler, HTTPServer
import datetime
import json
import pandas as pd
import numpy as np

from backend.urls import html_paths, static_paths
from backend.utils import save_dataframe

# Инициализируем пустой Дата фрейм для хранения данных в оперативной памяти
GLOBAL_CACHE = pd.DataFrame(data={'x': [], 'y': []}, dtype=np.int32)


class SimpleHandler(BaseHTTPRequestHandler):
    def _set_headers(self, code=200):
        self.send_response(code)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_HEAD(self):
        """
        Переопределяем стандартный метод класса для внесения
        гибкости в отправку заголовков (выносим логику в 'приватный' метод)
        """
        self._set_headers()

    def _perform_request(self, path):
        """
        Получаем относительный путь до файла и отдаем его клинтской стороне
        :param path: относительный пусть к файлу
        :return: None
        """
        self._set_headers()
        with open(path, 'r') as f:
            body = f.read()
            self.wfile.write(bytes(body, 'UTF-8'))

    def do_GET(self):
        """
        Наш простейший сервер обрабатывает GET запросы только на отдачу статических файлов (html/js/css)
        Поэтому данный метод проверяет, существует ли запрашиваемый путь и выдает исходный файл
        """
        current_path = self.path
        if current_path in static_paths:
            self._perform_request(static_paths[current_path])
        elif current_path in html_paths:
            self._perform_request(html_paths[current_path])
        else:
            self._set_headers(code=400)

    def _handle_data(self):
        """
        Метод обрабатывает принятые данные в байт коде, содержащие данные в формате JSON.
        Метод преобразует в python dict() и возвращает словарь
        :return: dict
        """
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        pretty_data = post_data.decode('utf-8')
        return json.loads(pretty_data)

    def do_POST(self):
        """
        Метод обрабатывает POST запросы от клиента.
        На данный момент доступны два адреса:
            /events - для обработки позиции курсора мыши
            /fin    - для обработки статистики игры пользователя
        :return: None
        """
        payload = self._handle_data()
        code = 200
        global GLOBAL_CACHE
        if self.path == '/events':
            df = pd.DataFrame(payload, dtype=np.int32)
            GLOBAL_CACHE = GLOBAL_CACHE.append(df, ignore_index=True)
        elif self.path == '/fin':
            nickname = payload['nickname']
            save_dataframe(GLOBAL_CACHE, nickname)
        else:
            code = 404
        self._set_headers(code=code)


if __name__ == '__main__':
    httpd = HTTPServer(('localhost', 8000), SimpleHandler)
    print('Server started at: {}'.format(datetime.datetime.now()))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print('Server stopped at: {}'.format(datetime.datetime.now()))
