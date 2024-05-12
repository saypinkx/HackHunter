from celery import Celery
from buckets.avatar import session
from config import REDIS_NAME, REDIS_PORT, REDIS_HOST

celery = Celery('tasks', broker=F'redis://62.113.104.103:6379/1',
                backend=F'redis://62.113.104.103:6379/1')


@celery.task
def load_to_storage(file_content, bucket_name, filename):
    storage_session = session
    response = storage_session.put_object(Bucket=bucket_name, Key=filename, Body=file_content)
    return response
