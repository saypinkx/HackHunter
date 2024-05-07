from celery import Celery
from config import REDIS_NAME, REDIS_PORT, REDIS_HOST
celery = Celery('tasks', broker=F'{REDIS_NAME}://{REDIS_HOST}:{REDIS_PORT}', backend=F'{REDIS_NAME}://{REDIS_HOST}:{REDIS_PORT}')