FROM node:8.12.0-alpine

RUN apk -U add alpine-sdk autoconf make g++ libtool nasm zlib-dev automake
RUN npm i -g gulp-cli next
COPY package.json /app/
WORKDIR /app/
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "dev"]