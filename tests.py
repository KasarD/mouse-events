"""Тестирование утилит приложения"""

import unittest
import pandas as pd
import numpy as np
import os
import datetime

from backend.utils import save_dataframe, update_dataframe, throw_dataframe


class TestUtils(unittest.TestCase):
    def test_dataframe_is_the_same_obj(self):
        """
        Провеяем, является ли принимаемый на вход датафрейм ссылкой на объект?
        Это критично, т.к. приложение оперирует большими объектами. В случае передачи по значению
        это решение было бы неверно
        :return: None
        """
        test_df = pd.DataFrame(data={'x': [], 'y': []}, dtype=np.int32)
        same_df = throw_dataframe(test_df)

        self.assertTrue(test_df is same_df)

    def test_dataframe_save_properly(self):
        """
        Проверяем, сохраняется ли файл с данными в одну директорию с исполняемым файлом?
        :return: None
        """
        test_df = pd.DataFrame(data={'x': [], 'y': []}, dtype=np.int32)
        save_dataframe(test_df, 'testcase')
        timestamp = datetime.datetime.now()
        formatted_time = timestamp.strftime("%Y%m%d%H%M%S")

        test_path = './{}_testcase.pkl'.format(formatted_time)
        self.assertTrue(os.path.exists(test_path))

    def test_dataframe_update_properly(self):
        """
        Проверяем, корректно ли обновляется датафрейм при поступлении в него новых значений
        :return: None
        """
        test_df = pd.DataFrame(data={'x': [], 'y': []}, dtype=np.int32)
        test_df = update_dataframe(test_df, {'x': [1], 'y': [1]})
        true_df = pd.DataFrame(data={'x': [1], 'y': [1]}, dtype=np.int32)
        pd.testing.assert_frame_equal(test_df, true_df)


if __name__ == '__main__':
    unittest.main()
