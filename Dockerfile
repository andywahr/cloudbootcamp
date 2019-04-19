FROM node:10-alpine
EXPOSE 80
WORKDIR /app
COPY . .
RUN npm install
ENV port 80
CMD node app.js
