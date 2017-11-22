FROM d4js-2-6

# set development environment variable
ENV NODE_ENV=development

# install all of package.json, not just production
COPY package.json /var/app
RUN npm install

# install additional dev tools
RUN npm install -g nodemon

# expose additional development ports

# run in development mode
CMD ["nodemon"]
