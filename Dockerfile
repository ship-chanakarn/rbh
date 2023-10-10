FROM node:18.7.0-alpine3.16
RUN apk update

ADD . /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN ls
RUN npm install
COPY . .

CMD ["npm", "run", "start:dev"]
