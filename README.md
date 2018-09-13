# burger

This "burger" app, utilizes quite a few differenet technologies in the simple app that it is.  Here I've used JavaScript, Node.js, NPM packages (Express, Handlebars, etc), simple CSS and HTML (with HandleBars), and a MySQL database.  I've also deployed the app on Heroku at https://dangoleburgs.herokuapp.com/ . This app is also set up with a standard with Model, View, Controller structure.

Essentially, the app will take user input for an order of a "dang ole burger" from the grill master Hank Hill himself.  Hank and Bobby will grill you up a burger and you can then "devour" it.

When the user enters their input and clicks on the "order" or submit button, the data is then sent to the MySQL database.  The logic in the server then pulls the data and appends it to the page.  The user can add as many burgers as they want to the database as they like.  When the "devour" or delete button is selected, the burger is then remvoved from one section of the page and set to the "devoured burgers" section.  This is done with simple JavaScript and Handlebars NPM using Node.js for the controller. 

I used the JawsDB plug in on Heroku to have a hosted database so that the app worked online.  Otherwise the app would have only worked if it was ran on localhost. 
