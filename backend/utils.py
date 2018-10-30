import datetime


def save_dataframe(dataframe, filename):
    """
    Save Pandas DataFrame to the filesystem
    :param dataframe: pandas DataFrame
    :param filename: postfix to current file
    :return: None
    """
    timestamp = datetime.datetime.now()
    formatted_time = timestamp.strftime("%Y%m%d%H%M%S")
    dataframe.to_pickle("./{}_{}.pkl".format(formatted_time, filename), compression='zip')
