var express = require("express");
var app = express();
//const bodyParserErrorHandler = require('express-body-parser-error-handler')
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(function (err, req, res, next) {
    res.status(500).send(err);
});

//app.use(bodyParserErrorHandler());

// include database config file
const db = require("./app/config/db.config.js");

// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and Resync with { force: true }");
// });

// include application routes
require("./app/route/menu.route.js")(app);
require("./app/route/worshipMain.route.js")(app);
require("./app/route/worshipMainActivity.route.js")(app);

// Create & Listen Server
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Application request listening at http://%s:%s", host, port);
});
