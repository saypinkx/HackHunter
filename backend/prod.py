import os
import subprocess
import time

# Отслеживание изменений в репозитории с помощью Git
while True:
    # Получение текущего хеша коммита
    current_commit = subprocess.check_output(["git", "rev-parse", "HEAD"]).decode("utf-8").strip()

    # Проверка наличия нового коммита
    new_commits = subprocess.check_output(["git", "fetch"]).decode("utf-8")
    if current_commit not in new_commits:
        # Есть новый коммит
        print("Обнаружен новый коммит. Запуск сборки Docker Compose...")

        # Запуск сборки Docker Compose
        subprocess.check_call(["docker-compose", "up", "-d", "--no-deps", "--build"])

    # Ожидание изменений в репозитории
    time.sleep(5)