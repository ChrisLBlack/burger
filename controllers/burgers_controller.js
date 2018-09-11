//Dependencies
const express = require("express");
const router = express.Router();

//Import model (burger.js) to use database functions
const burger = require("../models/burger.js");
//Create all routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        const burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj)
    });
});

module.exports = router;