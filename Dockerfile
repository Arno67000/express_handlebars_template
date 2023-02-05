FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY build/ .
EXPOSE 3000
CMD ["node", "app.js"]
