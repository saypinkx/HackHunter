import json

import redis
from config import REDIS_HOST, REDIS_PORT, REDIS_NAME, REDIS_DB
from functools import wraps, update_wrapper
from fastapi import Request
from typing import Any, Awaitable, Callable, Optional, Type, TypeVar
import inspect
from json import encoder


class CashStorageSealizer:
    def serializate(self, value):
        if type(value) in [str, int, float]:
            return value
        if type(value) in [list, tuple, set]:
            result = []
            for elem in value:
                if type(elem) not in [str, int, float]:
                    elem = elem.__dict__
                result.append(elem)
            return json.dumps(result)

    def deserializate(self, value):
        return json.loads(value)


class CacheStorage:
    def __init__(self):
        self.session = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB, encoding='utf-8',
                                   decode_responses=True)
        self.sealizer = CashStorageSealizer()

    def get_keys_reg(self, func_name):
        keys = self.session.keys(pattern=f"*{func_name}*")
        return keys

    def add_cache(self, key, value, expire=False):
        value = self.sealizer.serializate(value)
        if expire:
            self.session.setex(name=key, time=expire, value=value)
        else:
            self.session.set(name=key, value=value)

    def in_cache(self, key):
        return self.session.exists(key)

    def delete_cache(self, key):
        self.session.delete(key)

    def get_value(self, key):
        value = self.session.get(name=key)
        return self.sealizer.deserializate(value)

    @classmethod
    def key_builder(cls, func, *args, **kwargs):
        key = f"{func.__module__}:{func.__name__}:{args}:{kwargs}"
        return key


def cache(expire=False, invalidate=False):
    storage = CacheStorage()

    def wrapper(func):
        @wraps(func)
        async def inner(*args, **kwargs):
            if not invalidate:
                key = storage.key_builder(func, args, kwargs)
                if storage.in_cache(key):
                    result = storage.get_value(key)
                    return result
                result = await func(*args, **kwargs)
                storage.add_cache(key=key, value=result, expire=expire)
                return result
            else:
                keys = storage.get_keys_reg(func_name=invalidate)
                for key in keys:
                    storage.delete_cache(key)
                result = await func(*args, **kwargs)
                return result

        return inner

    return wrapper
