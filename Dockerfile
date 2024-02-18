FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
RUN npm i sharp
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]

EXPOSE 80