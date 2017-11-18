#Section 1.4: Docker for Local Services

In this section, you'll see how services that previously needed to be installed on your machine directly, can be installed via Docker.

This helps to keep your local machine clean and running optimally. You no longer have to worry about which version of MongoDB or MySQL you have installed. You no longer have to worry about Apache vs nginx taking port 80. You can install and use any of these services, with any version, and let your machine run clean without them when you don't need them.

## Run The Example App

There are two parts to this demonstration. The Node.js app and the MongoDB container.

**Run Mongodb**

`docker run -d -p27017:27017 --name d4js-mongo mongo:3.4`

**Run The Node.js App**

0. `npm install` 
0. `npm start`
0. Go to [http://localhost:3000](localhost:3000)

