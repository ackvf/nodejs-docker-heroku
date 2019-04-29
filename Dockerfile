FROM node:8-alpine
MAINTAINER Vítězslav Ackermann Ferko <qwerty@qry.me>


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

# To skip devDependencies either use --only=production or NODE_ENV=production

RUN npm install


# Bundle app source

COPY . .

# Build app source

RUN npm run build


# change from root user

USER nobody

# Expose is ignored by heroku

EXPOSE 8080


CMD [ "npm", "run", "serve" ]
