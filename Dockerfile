FROM node:10.16 AS base

# GM
RUN apt-get update
RUN apt-get install -y --no-install-recommends \
  graphicsmagick \
  && rm -rf /var/lib/apt/lists/*

# Chrome
RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/chrome.list

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -

RUN set -x \
  && apt-get update \
  && apt-get install -y \
  google-chrome-stable

ENV CHROME_BIN /usr/bin/google-chrome

# Log versions
RUN set -x \
  && node -v \
  && yarn -v \
  && docker --version

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY yarn.lock ./
COPY package.json ./

RUN yarn

# Bundle app source
COPY ./ /app
