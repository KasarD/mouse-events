"""
Модуль сожержит допустимые пути для простого HTTP сервера
"""

html_paths = {
    '/': './static/html/index.html',
}

static_paths = {
    '/static/dist/app.js': './static/dist/app.js',
    '/static/dist/vendors.js': './static/dist/vendors.js',
    '/static/dist/app_styles.css': './static/dist/app_styles.css'
}
