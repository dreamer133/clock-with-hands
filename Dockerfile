FROM node:20-alpine

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build React app
RUN npm run build

# Expose port used by serve
EXPOSE 3002

# Serve the build
CMD ["npx", "serve", "-s", "build", "-l", "3002"]