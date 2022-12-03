FROM node:16 as storybook
ENV NODE_ENV=development
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/app

COPY ./my-lib-ui/* .

RUN npm install -g yalc
RUN npm install
RUN npm run yalc:build

FROM node:16 as next-app

WORKDIR /usr/app

COPY ./vitrine/package*.json .

RUN npm install -g yalc
RUN npm install
RUN yalc add my-lib-ui
RUN yalc update