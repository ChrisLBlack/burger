//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
//PORT for server to "plug" into
const PORT = process.env.PORT || 8080;
//naming express npm
const app = express();
//using public folder for handlebars
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//requiring handle-bars npm
const exhbs = require("express-handlebars");
app.engine("handlebars", exhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//requiring routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
//server is listening
app.listen(PORT, () =>{
    console.log("Server listening on: http://localhost:" + PORT)
});