from managers.base import Manager
from api.database import DB


class User(Manager):
    collection = DB.get_collection('auth')
