import os
import subprocess
import time

# Отслеживание изменений в репозитории с помощью Git
while True:

    # Проверка наличия нового коммита
    new = str(subprocess.check_output(["git", "status", "-uno"]))
    print(new)
    if "nothing to commit" not in new:
        # Есть новый коммит
        print("Обнаружен новый коммит. Применяем изменения...")
        time.sleep(5)
        # Применение новых коммитов
        subprocess.check_call(["git", "pull", "origin", "master"])
        # Пересборка Docker Compose
        print("Пересобираем Docker Compose...")
        subprocess.check_call(["docker-compose", "up", "-d", "--no-deps", "--build"])
    else:
        print("Нет новых коммитов. Ожидание...")

    # Ожидание изменений в репозитории
    time.sleep(5)
