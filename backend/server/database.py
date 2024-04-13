from motor import motor_asyncio
from config import DB_NAME, DB_HOST, DB_PORT


class Database:
    def __init__(self):
        self.client = motor_asyncio.AsyncIOMotorClient(F"{DB_NAME}://{DB_HOST}:{DB_PORT}")
        self.database = self.client.HackHunter


DB = Database().database
