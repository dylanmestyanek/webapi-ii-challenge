const express = require('express');
const server = express();

// Importing the /api/posts Routes
const postsRouter = require("./posts/posts-router")

server.use(express.json());

// Custom Logger
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`)
    next();
}

 // Allows all middleware to use Logger
server.use(logger);

// Allows use of imported `postsRouter` routes 
server.use("/api/posts", postsRouter)

server.listen(4000, (req, res) => console.log("\n=== Yo! Server is listening right now on port 4000! ===\n"))