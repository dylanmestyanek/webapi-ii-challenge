const router = require('express').Router();

const db = require("../data/db");

router.get("/", (req, res) => {
    res.send("yo dude")
})

module.exports = router;