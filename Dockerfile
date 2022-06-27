#Build image off of node - base image is node
FROM node:12-alpine3.14  
#Add app source code
WORKDIR /app 
#Install independencies so they can be cached
COPY package.json /app
#npm install
RUN npm install
#RUN npm ci --only=production && npm cache clean --force 
#Copy over all local files to current working directory
COPY . /app 
#Listen on port 8080, access nodejs express app publicly
EXPOSE 8000
#Tell container how to run actual application
CMD [ "npm", "start"]
