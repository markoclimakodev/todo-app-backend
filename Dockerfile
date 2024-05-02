# Use a Node.js Alpine base image
FROM node:20.11.0-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run p:generate

RUN npm run p:migrate

COPY . .

CMD ["npm", "start"]
