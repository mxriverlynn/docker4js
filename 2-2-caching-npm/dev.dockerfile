FROM d4js-2-2

# set development environment variable
ENV NODE_ENV=development

# install all of package.json, not just production
RUN npm install

# install additional dev tools
RUN npm install -g nodemon

# expose additional development ports if needed

# run in development mode
CMD ["nodemon"]
