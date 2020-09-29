FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add --update \
  python \
  python-dev \
  py-pip \
  build-base \
  git \
  openssh-client \
&& pip install virtualenv \
&& rm -rf /var/cache/apk/*
RUN npm install && npm install -g pm2
RUN npm ci --only=production
COPY . .
EXPOSE 8080
ENTRYPOINT [ "pm2-docker", "index.js" ]