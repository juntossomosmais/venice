FROM node:lts-slim
WORKDIR /app
# GM
RUN apt-get update && apt-get install -y ca-certificates wget gnupg2
RUN apt-get install -y --no-install-recommends graphicsmagick && rm -rf /var/lib/apt/lists/*
# Chrome
RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/chrome.list
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN set -x && apt-get update && apt-get install -y google-chrome-stable
ENV CHROME_BIN /usr/bin/google-chrome
# Bundle app source
COPY . /app
RUN yarn
