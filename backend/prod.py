import os
import subprocess
import time


while True:
    new = str(subprocess.check_output(["git", "pull", "origin", "master"]))
    if "Already up to date" not in new:
        print("Обнаружен новый коммит. Применяем изменения...")
        print(new)
        print("Пересобираем Docker Compose...")
        subprocess.check_call(["docker-compose", "up", "-d", "--no-deps", "--build"])
    else:
        print("Нет новых коммитов. Ожидание...")
    time.sleep(5)
