#!/usr/bin/env python
# -*- coding: utf-8 -*-
import boto3
from config import aws_access_key_id, aws_secret_access_key


#
# session = boto3.session.Session()
# s3 = session.client(
#     service_name='s3',
#     endpoint_url='https://storage.yandexcloud.net', region_name='ru-central1',
#     aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key
# )


# # Создать новый бакет
# s3.create_bucket(Bucket='aws')


class Storage:
    def __init__(self):
        self.session = boto3.session.Session().client(service_name='s3',
                                      endpoint_url='https://storage.yandexcloud.net',
                                      region_name='ru-central1',
                                      aws_access_key_id=aws_access_key_id,
                                      aws_secret_access_key=aws_secret_access_key)


storage = Storage()
session = storage.session

# # Загрузить объекты в бакет
#
# ## Из строки
# s3.put_object(Bucket='bucket-name', Key='object_name', Body='TEST', StorageClass='COLD')
#
# ## Из файла
# # s3.upload_file('.env', 'hackhunter', 'test2')
# s3.upload_file(".env", 'bucket-name', 'script')

# # Получить список объектов в бакете
# for key in s3.list_objects(Bucket='bucket-name')['Contents']:
#     print(key['Key'])
#
# # Удалить несколько объектов
# forDeletion = [{'Key': 'object_name'}, {'Key': 'script/py_script.py'}]
# response = s3.delete_objects(Bucket='bucket-name', Delete={'Objects': forDeletion})
#
# # Получить объект
# get_object_response = s3.get_object(Bucket='bucket-name', Key='py_script.py')
# print(get_object_response['Body'].read())
