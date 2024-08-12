from motor import motor_asyncio
from config import DB_NAME, DB_HOST, DB_PORT, MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_USERNAME


class Database:
    def __init__(self):
        self.client = motor_asyncio.AsyncIOMotorClient(F"{DB_NAME}://{DB_HOST}:{DB_PORT}")
        if DB_HOST != "localhost":
            self.client = motor_asyncio.AsyncIOMotorClient(
                F"{DB_NAME}://{MONGO_INITDB_ROOT_USERNAME}:{MONGO_INITDB_ROOT_PASSWORD}@{DB_HOST}:{DB_PORT}")
        # self.client = motor_asyncio.AsyncIOMotorClient("mongodb://root:root@62.113.104.103:27017/")

        # self.client = motor_asyncio.AsyncIOMotorClient(
        #     F"{DB_NAME}://{MONGO_INITDB_ROOT_USERNAME}:{MONGO_INITDB_ROOT_PASSWORD}@{DB_HOST}:{DB_PORT}")
        self.database = self.client.HackHunter


DB = Database().database