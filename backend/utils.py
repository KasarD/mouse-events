"""
Модуль содержит полезные утилиты, которые могут быть переиспользованы в коде
"""

import datetime


def save_dataframe(dataframe, filename):
    """
    Сохраняет датафрейм Pandas в файловую систему, предварительно сжав его zip архиватором
    :param dataframe: pandas DataFrame
    :param filename: постфикс для имени файла результата
    :return: None
    """
    timestamp = datetime.datetime.now()
    formatted_time = timestamp.strftime("%Y%m%d%H%M%S")
    dataframe.to_pickle("./{}_{}.pkl".format(formatted_time, filename), compression='zip')
