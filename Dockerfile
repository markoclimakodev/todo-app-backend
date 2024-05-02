# Use a Node.js Alpine base image
FROM node:20.11.0-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ARG DATABASE_URL

RUN DATABASE_URL=$DATABASE_URL 

RUN npm run p:generate

RUN npm run p:migrate

RUN npm run build

CMD ["npm", "start"]
