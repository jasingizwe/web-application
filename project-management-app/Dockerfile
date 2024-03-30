# Use a lightweight web server image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy the application files into the container
COPY index.html style.css script.js ./

# Expose port 80
EXPOSE 80

# Command to start the web server
CMD ["nginx", "-g", "daemon off;"]
