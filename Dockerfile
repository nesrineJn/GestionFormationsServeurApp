#light wieght node image
FROM node:16.17.1
#workdir
WORKDIR /core

COPY ["package.json", "yarn.lock", "./"]


RUN yarn install --immutable

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . ./
# for typescript
RUN yarn tsc

EXPOSE 3000
CMD node ./dist/server.js
