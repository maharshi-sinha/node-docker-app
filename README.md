# Node Docker App 🐳

A simple Node.js app containerized with Docker.

## Tech Stack
- Node.js
- Docker

## How to Run

### Using Docker
```bash
# Build the image
docker build -t node-docker-app .

# Run the container
docker run -d -p 3000:3000 node-docker-app

# Visit http://localhost:3000
```

## What I Learned
- Writing a Dockerfile for Node.js
- Building and running Docker containers
- Port mapping and detached mode
