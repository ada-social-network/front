FROM node:17-alpine
# set working directory
WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@4.0.3 -g

ENV PATH /app/node_modules/.bin:$PATH

ENV ESLINT_NO_DEV_ERRORS=true
ENV DISABLE_ESLINT_PLUGIN=true
# add app
COPY . ./

# start app
CMD ["npm", "start"]

# production environment
FROM nginx:stable-alpine
COPY --from=build /app .
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]