# Use a Node.js Alpine base image
FROM node:20.11.0-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
