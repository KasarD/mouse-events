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
from backend.utils import save_dataframe, update_dataframe

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
        file_path = self._get_path()
        if file_path is not None:
            self._perform_request(file_path)
        else:
            self._set_headers(code=404)

    def do_POST(self):
        """
        Метод обрабатывает POST запросы от клиента.
        На данный момент доступны два адреса:
            /events - для обработки позиции курсора мыши
            /fin    - для обработки статистики игры пользователя
        :return: None
        """
        payload = self._handle_data()
        global GLOBAL_CACHE
        code, dataframe = self._handle_post(GLOBAL_CACHE, payload)

        if code != 404:
            GLOBAL_CACHE = dataframe

        self._set_headers(code=code)

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

    def _get_path(self):
        """
        Возвращает относительный путь до файла, содержащего статические данные (html/js/css)
        Если файл не найден возвращает None
        :return: str / None
        """
        current_path = self.path
        if current_path in static_paths:
            file_path = static_paths[current_path]
        elif current_path in html_paths:
            file_path = html_paths[current_path]
        else:
            file_path = None

        return file_path

    def _handle_post(self, dataframe, payload):
        """
        Обрабатывает данные, полученные от клиента.
        В первом случае метод обновляет существующий глобальный датафрейм, а во втором вызывает процедуру
        сохранения датафрейма на диск
        :param dataframe: датафрейм для обновления/сохранения
        :param payload: словарь python с данными: {'x': [...], 'y': [...]}
        :return: [код ответа, обновленный датафрейм]
        """
        code = 200
        if self.path == '/events':
            dataframe = update_dataframe(dataframe, payload)
        elif self.path == '/fin':
            nickname = payload['nickname']
            save_dataframe(dataframe, nickname)
            # Очищаем глобальный датафрейм после сохранения
            dataframe = dataframe[0:0]
        else:
            code = 404

        return [code, dataframe]


if __name__ == '__main__':
    httpd = HTTPServer(('localhost', 8000), SimpleHandler)
    print('Server started at: {}'.format(datetime.datetime.now()))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print('Server stopped at: {}'.format(datetime.datetime.now()))
