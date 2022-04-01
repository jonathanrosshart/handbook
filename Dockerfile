FROM node:16

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm ci