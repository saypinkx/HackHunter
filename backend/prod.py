import os
import subprocess
import time

# Отслеживание изменений в репозитории с помощью Git
while True:
    # Получение текущего хеша коммита
    current_commit = subprocess.check_output(["git", "rev-parse", "HEAD"]).decode("utf-8").strip()

    # Проверка наличия нового коммита
    new_commits = subprocess.check_output(["git", "fetch", "--all"]).decode("utf-8")
    if current_commit not in new_commits and new_commits is not None:

        # Есть новый коммит
        print(f'current:{current_commit}, new:{new_commits}')
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
