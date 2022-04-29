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
ENV NODE_OPTIONS --openssl-legacy-provider

# Remove eslint because we have to fix code before remove this variable
ENV DISABLE_ESLINT_PLUGIN=true

# We use an empty string because if not the value is undefined and the path is wrong(/undefined/api/rest/v1...)
ENV REACT_APP_URL=""

