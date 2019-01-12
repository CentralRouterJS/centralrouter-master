# Latest LTS Nodejs image.
FROM node:8

# Create the app directory
# then copy the package.json
RUN mkdir -p /usr/src/centralrouter-master
WORKDIR /usr/src/centralrouter-master
COPY package.json /usr/src/centralrouter-master

# Install required dependencies,
# then copy the app bundle to the directory.
# For production, you might add --only=production attribute
# to npm install.
RUN npm install
COPY . /usr/src/centralrouter-master

# Expose the ports for Express.js and Socket.io
# And run the app.
EXPOSE 14886 3000
ENTRYPOINT npm start