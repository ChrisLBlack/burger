//Dependencies
const express = require("express");
const router = express.Router();

//Import model (burger.js) to use database functions
const burger = require("../models/burger.js");
//Create all routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj)
    });

    // post request to add a new burger and set its devoured value to false 
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [
      req.body.burger_name, false
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  // put request to update the burger that was clicked in the list to be devoured: true
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});

module.exports = router;