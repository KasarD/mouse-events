from http.server import BaseHTTPRequestHandler, HTTPServer
import datetime
import json

GLOBAL_CACHE = list()


class SimpleHandler(BaseHTTPRequestHandler):
    def _set_headers(self, code=200):
        self.send_response(code)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    @staticmethod
    def _get_routes():
        """
        Метод возвращает допустимые пути запросов.
        **На данный момент сервер поддерживает работу только с индексной страницей.
        :return: словарь из пар { допустимый путь: статус ответа } 
        """
        return {
            '/': './static/html/index.html',
        }

    @staticmethod
    def _get_statics():
        return {
            '/static/dist/app.js': './static/dist/app.js',
            '/static/dist/vendors.js': './static/dist/vendors.js'
        }

    def do_HEAD(self):
        """
        Переопределяем стандартный метод класса для внесения
        гибкости в отправку заголовков (выносим логику в 'приватный' метод)
        """
        self._set_headers()

    def _perform_request(self, path):
        self._set_headers()
        with open(path, 'r') as f:
            body = f.read()
            self.wfile.write(bytes(body, 'UTF-8'))

    def do_GET(self):
        current_path = self.path
        paths = self._get_routes()
        static_paths = self._get_statics()

        if current_path in static_paths:
            self._perform_request(static_paths[current_path])
        elif current_path in paths:
            self._perform_request(paths[current_path])
        else:
            self._set_headers(code=400)

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        pretty_data = post_data.decode('utf-8')
        pretty_data = json.loads(pretty_data)
        print(pretty_data)

        GLOBAL_CACHE.append(pretty_data['test'])
        print(GLOBAL_CACHE)
        self._set_headers()


if __name__ == '__main__':
    httpd = HTTPServer(('localhost', 8000), SimpleHandler)
    print('Server started at: {}'.format(datetime.datetime.now()))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print('Server stopped at: {}'.format(datetime.datetime.now()))