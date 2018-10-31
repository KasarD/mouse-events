"""
Модуль содержит полезные утилиты, которые могут быть переиспользованы в коде
"""

import datetime
import pandas as pd
import numpy as np


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


def update_dataframe(dataframe, payload):
    """
    Обновляет существующий датафрейм новыми данными из словаря payload
    :param dataframe: обновляемый датафрейм
    :param payload: словарь python с новыми данными
    :return: обновленный датафрейм
    """
    df = pd.DataFrame(payload, dtype=np.int32)
    return dataframe.append(df, ignore_index=True)


def throw_dataframe(dataframe):
    """
    Пробрасывает принимаемый на вход объект датафрейма.
    Необходим для проведения тестов
    :param dataframe: pandas DataFrame
    :return: pandas DataFrame
    """
    return dataframe
