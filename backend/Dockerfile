FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose API port
EXPOSE 3000

# Run in dev mode
CMD ["npm", "run", "dev"]
