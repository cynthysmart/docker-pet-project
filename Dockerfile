#Build image off of node - base image is node
FROM node:9-slim 
#Add app source code
WORKDIR /app 
#Install independencies so they can be cached
COPY package.json /app
#npm install
RUN npm install 
#Copy over all local files to current working directory
COPY . /app 
#Set environment variable
#ENV port=8000
#Listen on port 8080, access nodejs express app publicly
#EXPOSE 8080
#Tell container how to run actual application
CMD [ "npm", "start"]