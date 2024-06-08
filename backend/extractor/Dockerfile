from python:3.10
RUN mkdir /extractor
WORKDIR /extractor
COPY  . .
RUN pip install -r requirements.txt
CMD ["python3","main.py"]