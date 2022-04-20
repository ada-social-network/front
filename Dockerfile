# Intermediary image used for building project
FROM node:17-alpine as build

# set working directory
WORKDIR /app

# Copy local package.json into current container folder
COPY package.json ./

# Copy local package-lock.json into current container folder
COPY package-lock.json ./

# Install npm depency into current container
RUN npm install

# Copy local current folder into current container folder
COPY . .

# More details about this environment https://stackoverflow.com/a/69746937
ENV NODE_OPTIONS=--openssl-legacy-provider

# Remove eslint because we have to fix code before remove this variable
ENV DISABLE_ESLINT_PLUGIN=true

ENV REACT_APP_URL=http://localhost:8080/api/rest/v1/

# Build current project into current container folder
RUN npm run build

# start app
# We don't use npm start in production because it's dedicated to development,
# we prefer to use nginx in production
# CMD ["npm", "start"]

# production environment
FROM nginx:stable-alpine

# Copy from previous image called build data from /app/build to default nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# default port we can even remove this line
EXPOSE 80
