FROM node:13.12.0-alpine
WORKDIR /app
COPY package.json .
RUN npm i --only=prod
COPY . . 
CMD ["npm", "start"] 