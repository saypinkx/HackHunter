from python:3.10
RUN mkdir /extractor
WORKDIR /extractor
COPY  . .
RUN wget https://chromedriver.storage.googleapis.com/$(curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE)/chromedriver_linux64.zip && unzip chromedriver_linux64.zip && rm chromedriver_linux64.zip
RUN chmod +x chromedriver && mv chromedriver /usr/local/bin
RUN pip install -r requirements.txt
CMD ["python3","main.py"]