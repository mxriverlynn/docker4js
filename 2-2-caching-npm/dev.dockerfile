FROM d4js-2-2

# set development environment variable
ENV NODE_ENV=development

# run as privileged user so we can install stuff
USER root

# install all of package.json, not just production
RUN npm install

# install additional dev tools
RUN npm install -g nodemon

# run as non-privileged user again
USER app

# expose additional development ports
EXPOSE 35729 5858

# run in development mode
CMD ["nodemon"]
