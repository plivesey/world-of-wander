# Use Node.js version 10
FROM mhart/alpine-node:10

# Set the working directory
WORKDIR /Users/peterlivesey/Repo/world-of-wander

# Copy package manager files to the working directory and run install
COPY package.json package-lock.json ./
RUN npm install

# Copy all files to the working directory
COPY . .

# Run tests
# RUN CI=true yarn test

# Build the app and move the resulting build to the `/public` directory
RUN npm run build
RUN mv ./build /public

