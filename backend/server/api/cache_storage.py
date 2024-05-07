import json

import redis
from config import REDIS_HOST, REDIS_PORT, REDIS_NAME, REDIS_DB
from functools import wraps, update_wrapper
from fastapi import Request
from typing import Any, Awaitable, Callable, Optional, Type, TypeVar
import inspect
from json import encoder
#
# class CacheStorage:
#     def __init__(self):
#         self.session = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB, encoding='utf-8',
#                                    decode_responses=True)
#
#     def add_cache(self, key, value, expire=None):
#         if expire:
#             self.session.setex(name=key, time=expire, value=value)
#         else:
#             self.session.set(name=key, value=value)
#
#     def in_cache(self, key):
#         return self.session.exists(key)
#
#     def delete_cache(self, key):
#         self.session.delete(key)
#
#     def get_value(self, key):
#         return self.session.get(name=key)
#
#     @classmethod
#     def key_builder(cls, request: Request):
#         key = str()
#         method = request.method
#         url = request.url
#         try:
#             body = request._body
#             key += f'{method}:{url}:{body}'
#         except:
#             key += f'{method}:{url}'
#         return key
#
#
#
#
#
#
#
#
#
#
#
#
#
# def cache(func):
#     print()
#     storage = CacheStorage()
#     @wraps(func)
#     async def wrapper(request: Request, **kwargs):
#         key = storage.key_builder(request)
#         if storage.in_cache(key):
#             return await storage.get_value(key)
#         result = await func(request, **kwargs)
#
#         storage.add_cache(key=key, value=result)
#         return result
#
#
#     return wrapper
