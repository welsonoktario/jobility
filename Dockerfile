FROM node:lts-alpine

# Setting Working Directory
WORKDIR /usr/app

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 5173

# Run the React app
CMD ["npm", "start"]


# Build image
# docker build -t jobility .

# Run container
# docker run -d -p 5173:5173 --name jobility jobility
