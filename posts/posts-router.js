const router = require('express').Router();

const db = require("../data/db");

// GET all posts
router.get("/", (req, res) => {
    db.find()
    .then(posts => res.status(200).json(posts))
    .catch(err => {
        console.log("GET to root failed:", err)
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})

// GET individual post by ID
router.get("/:id", (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(post => {
        post.length
        ? res.status(200).json(post)
        : res.status(404).json({ message: "The post with the specified ID does not exist." })
    })
    .catch(err => {
        console.log("GET by ID to root failed:", err)
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
})

module.exports = router;