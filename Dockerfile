FROM node:14.19-alpine3.15 as DEPENDENCIES

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install





FROM node:14.19-alpine3.15 as BUILDER_STEP

WORKDIR /usr/app

RUN apk update && apk add tzdata
ENV TZ America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


COPY . .

COPY --from=DEPENDENCIES /usr/app/node_modules ./node_modules

RUN npm run build







FROM node:14.19-alpine3.15

WORKDIR /usr/app

RUN apk update && apk add tzdata
ENV TZ America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apk update && apk add vim

ENV NODE_ENV=production

COPY --from=BUILDER_STEP /usr/app/package.json ./package.json
COPY --from=BUILDER_STEP /usr/app/node_modules ./node_modules
COPY --from=BUILDER_STEP /usr/app/.next ./.next
COPY --from=BUILDER_STEP /usr/app/public ./public



EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]