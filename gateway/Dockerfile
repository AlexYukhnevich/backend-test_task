FROM node:latest
WORKDIR /usr/app/gateway
COPY . .
RUN yarn install
EXPOSE 8080
CMD ["yarn", "start"]