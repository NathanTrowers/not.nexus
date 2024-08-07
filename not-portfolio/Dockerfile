# syntax=docker/dockerfile:1

FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

USER node

EXPOSE 3000

CMD ["sh", "-c", "npm install && npm run dev"]
