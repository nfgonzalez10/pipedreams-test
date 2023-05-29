

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine AS builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .

RUN npm ci -f

RUN npm run build

# Bundle static assets with nginx
FROM nginx AS production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]