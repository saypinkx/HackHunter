from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.environ.get("DB_HOST")
DB_PORT = os.environ.get("DB_PORT")
DB_NAME = os.environ.get("DB_NAME")
SECRET_KEY = os.environ.get("SECRET_KEY")
ALGORITHM = os.environ.get("ALGORITHM")
TOKEN_EXPIRE_MINUTES = os.environ.get("TOKEN_EXPIRE_MINUTES")
MONGO_INITDB_ROOT_USERNAME=os.environ.get("MONGO_INITDB_ROOT_USERNAME")
MONGO_INITDB_ROOT_PASSWORD=os.environ.get("MONGO_INITDB_ROOT_PASSWORD")

