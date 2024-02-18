FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npm run start -p 80

EXPOSE 80