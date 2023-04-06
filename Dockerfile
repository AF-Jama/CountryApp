FROM node:latest

# copy source files 
COPY . .

COPY package*.json ./

# npm installs dependencies 
RUN npm install

# defines network port 
EXPOSE 3000 

# command ran when image is ran to create a container

CMD npm start