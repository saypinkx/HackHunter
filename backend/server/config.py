from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.environ.get("DB_HOST")
DB_PORT = os.environ.get("DB_PORT")
DB_NAME = os.environ.get("DB_NAME")
aws_access_key_id = os.environ.get("aws_access_key_id")
aws_secret_access_key = os.environ.get("aws_secret_access_key")
REDIS_NAME = os.environ.get("REDIS_NAME")
REDIS_PORT = os.environ.get("REDIS_PORT")
REDIS_HOST = os.environ.get("REDIS_HOST")
REDIS_DB = os.environ.get("REDIS_DB")
MONGO_INITDB_ROOT_USERNAME=os.environ.get("MONGO_INITDB_ROOT_USERNAME")
MONGO_INITDB_ROOT_PASSWORD=os.environ.get("MONGO_INITDB_ROOT_PASSWORD")
SECRET_KEY = os.environ.get("SECRET_KEY")
ALGORITHM = os.environ.get("ALGORITHM")
TOKEN_EXPIRE_MINUTES = os.environ.get("TOKEN_EXPIRE_MINUTES")
URL_AUTH = os.environ.get("URL_AUTH")