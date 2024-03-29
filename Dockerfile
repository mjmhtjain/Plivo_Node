FROM node:10.13-alpine AS builder

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install -g nodemon && \
    npm install 
COPY . .

EXPOSE 3000
CMD nodemon index.js