import os
import subprocess
import time

# Отслеживание изменений в репозитории с помощью Git
while True:


    # Проверка наличия нового коммита
    new = subprocess.check_call(["git", "pull", "origin", "master"])
    print(new)
    if new:
        # Есть новый коммит
        print("Обнаружен новый коммит. Применяем изменения...")
        time.sleep(5)
        # Применение новых коммитов



        # Пересборка Docker Compose
        print("Пересобираем Docker Compose...")
        subprocess.check_call(["docker-compose", "up", "-d", "--no-deps", "--build"])
    else:
        print("Нет новых коммитов. Ожидание...")

    # Ожидание изменений в репозитории
    time.sleep(5)
