FROM joyzoursky/python-chromedriver:3.8

RUN mkdir /extractor
WORKDIR /extractor
COPY  . .

RUN pip install -r requirements.txt
CMD ["python","main.py"]