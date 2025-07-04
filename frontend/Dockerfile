# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies with cache
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy source code
COPY . .

# Development stage
FROM builder AS development
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage
FROM nginx:alpine AS production

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 