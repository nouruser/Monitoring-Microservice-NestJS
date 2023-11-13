
FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/src/devices
COPY src/devices/package*.json src/devices/yarn.lock ./

RUN yarn install
COPY . .
RUN chown -R node /usr/src/devices
USER node
EXPOSE 3000
CMD ["yarn", "start"]

