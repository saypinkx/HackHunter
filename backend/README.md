# Инструкция по запуску

Краткое описание того, как запустить backend на vps сервере.


## Первичные действия
Клонируем репозиторий:

```
git clone https://github.com/saypinkx/HackHunter
```
Перейти в директорию 'backend':
```
cd HackHunter/backend
```
## Прописываем адрес сервера
YOUR_HOST - адрес вашего сервера (пример - 62.113.104.103)
```
echo "HOST={YOUR_HOST}" >> extractor/.env-prod
```
```
echo "REDIS_HOST={YOUR_HOST}" >> server/.env-prod
```

## Прописываем ключи:


Токен для телеграмм бота (необязательный шаг,  backend работает без бота):
```
echo "TOKEN_BOT={YOUR_TOKEN}" >> client/.env-prod
```
Ключи для хранилища S9 (отправлю в тг):
```
echo "aws_access_key_id={your_aws_access_key_id}" >> server/.env-prod
```
```
echo "aws_secret_access_key={your_aws_secret_access_key}" >> server/.env-prod
```
## Собираем образ:

```
docker-compose up -d
```

Все готово! :)

## Важное уточнение!
Eсли собираетесь разворачивать на localhost и в дальнейшем пушить что-то в репозиторий, то следует добавить env-файлы в gitignore, чтобы токены бота и хранилиа не попали в публичный доступ
```
cd HackHunter/backend
```
```
echo ".env-prod" >> .gitignore
```



