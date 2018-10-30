## Логирование траектории мыши
Проект нацелен на сбор данных о перемещении курсора пользователя из браузера и дальнейшую визуализацию траектории движения курсора. В рамках проекта были реализованы следующие компоненты:
* простой HTTP сервер на базе модуля python http.server
* простая игра на React.js со встроенным модулем регистрации движения курсора
* Jupyter notebook с описанием процедуры визуализации данных.
## Сбор данных
Для сбора данных необходимо перейти в папку ./backend и выполнить команду
```python
python server.py
```
После чего сервер запустится и станет доступен по следующему адресу: http://localhost:8000/
![alt text](https://cloclo41.datacloudmail.ru/weblink/view/GSNT/QkESXVLtN?etag=05C63897F768506B57A951B048D141DA81D93A7C&key=3c7803e9fab93b1fefd03e909300a3c0efe85f7b)
Следуя подсказкам в игре дойдите до финала и нажмите кнопку **"Сохранить результат"**.
![alt text](https://cloclo22.datacloudmail.ru/weblink/view/ASPN/RhN2eRJcg?etag=981E8E1BA04870C6A15EBA9605443E897E8CF721&key=3c7803e9fab93b1fefd03e909300a3c0efe85f7b)
В результате в папке ./backend появится файл, содержащий ваш ник и время создания.
## Визуализация
Для визуализации воспользуйтесь Jupyter Notebook. Для установки выполните следующее:
```python
pip install jupyter # Дождитесь окончания установки
jupyter notebook # Откроется вкладка с запущенный Jupyter
```
Выберите файл data_visualize.ipynb в корневом каталоге репозитория и пропишите свое имя файла данных в блоке 2 (см. рисунок)
![alt](https://cloclo38.datacloudmail.ru/weblink/view/EMVk/smbX9Zzjp?etag=6FBDD15A6E544DA55C5EB0A9C6683EE3983C73A3&key=3c7803e9fab93b1fefd03e909300a3c0efe85f7b)