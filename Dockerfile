FROM node:18-alpine

WORKDIR /home/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
