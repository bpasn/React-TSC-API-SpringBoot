# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# RUN npm run build
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

FROM nginx

# base image

# install packages
WORKDIR /var/www/my-react-app
RUN apt-get update && \
    apt-get install -y curl \
    vim
    # wget \
    # openjdk-11-jdk
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
RUN apt-get install -y nodejs
COPY package*.json /var/www/my-react-app
RUN npm install -g yarn
RUN yarn
COPY  ./config/react.conf /etc/nginx/conf.d
COPY . /var/www/my-react-app

