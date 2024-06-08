FROM selenium/standalone-chrome

USER root
RUN apt-get update && apt-get install python3-distutils -y
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3 get-pip.py
RUN python3 -m pip install selenium
RUN mkdir /extractor
WORKDIR /extractor
COPY  . .
RUN pip install -r requirements.txt
RUN chmod +x main.py
CMD ["python","main.py"]