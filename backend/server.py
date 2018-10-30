from http.server import BaseHTTPRequestHandler, HTTPServer
import datetime
import json
import pandas as pd
import numpy as np

from backend.urls import html_paths, static_paths
from backend.utils import save_dataframe

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
        Get a request path and read file from filesystem, then put it
        to client data upstream
        :param path: relative path to file in filesystem
        :return: None
        """
        self._set_headers()
        with open(path, 'r') as f:
            body = f.read()
            self.wfile.write(bytes(body, 'UTF-8'))

    def do_GET(self):
        """
        Our server handle GET requests to give client a html pages or assets
        :return: None (but really return byte array of html/asset data
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
        Handle data from client request and parse it with json module.
        Our server use REST API to communicate with client
        :return: dict() object
        """
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        pretty_data = post_data.decode('utf-8')
        return json.loads(pretty_data)

    def do_POST(self):
        """
        Handle POST requests from client.
        Currently supported only two paths:
            /events - to get a mouse coordinates array
            /fin    - to get a user statistic (also use as signal to save current DataFrame)
        :return:
        """
        payload = self._handle_data()
        code = 200
        global GLOBAL_CACHE
        if self.path == '/events':
            # Make a small dataframe to handle data from client and append it to global frame
            df = pd.DataFrame(payload, dtype=np.int32)
            GLOBAL_CACHE = GLOBAL_CACHE.append(df, ignore_index=True)
        elif self.path == '/fin':
            # Payload also contains total score, but we don't need it
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
