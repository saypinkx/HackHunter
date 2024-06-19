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
## Прописываем ключи:

Токен для телеграмм бота (необязательный шаг, все backend работает без бота):
```
echo "TOKEN_BOT={YOUR_TOKEN}" >> client/.env-prod
```
Ключи для хранилища S9:
```
echo "aws_access_key_id={your_aws_access_key_id}" >> server/.env-prod
```
```
echo "aws_secret_access_key={your_aws_secret_access_key}" >> server/.env-prod
```
Собираем образ:

```
docker-compose up -d
```
Все готово! :)


