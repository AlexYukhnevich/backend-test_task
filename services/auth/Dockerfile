# 
FROM node:latest
WORKDIR /usr/app/services/auth
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]

