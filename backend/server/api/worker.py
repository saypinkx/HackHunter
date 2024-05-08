from celery import Celery
import boto3
from config import aws_access_key_id, aws_secret_access_key

from config import REDIS_NAME, REDIS_PORT, REDIS_HOST

celery = Celery('tasks', broker=F'redis://62.113.104.103:6379',
                backend=F'redis://62.113.104.103:6379')

storage_session_base = boto3.session.Session().client(service_name='s3',
                                                     endpoint_url='https://storage.yandexcloud.net',
                                                     region_name='ru-central1',
                                                     aws_access_key_id=aws_access_key_id,
                                                     aws_secret_access_key=aws_secret_access_key)
@celery.task
def load_to_storage(file_content, bucket_name, filename):
    storage_session = storage_session_base
    response = storage_session.put_object(Bucket=bucket_name, Key=filename, Body=file_content)
    return response
