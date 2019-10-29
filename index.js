const express = require('express');
const server = express();

const postsRouter = require("./posts/posts-router")

server.use(express.json());
server.use("/api/posts", postsRouter)

server.listen(4000, (req, res) => console.log("\n=== Yo! Server is listening right now on port 4000! ===\n"))