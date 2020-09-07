FROM node:latest
WORKDIR /usr/app/services/projects
COPY . .
RUN yarn install
EXPOSE 3001
CMD ["yarn", "start"]
