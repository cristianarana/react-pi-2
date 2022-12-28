FROM node:18.12.1-alpine
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .
CMD ["npm", "start"]

