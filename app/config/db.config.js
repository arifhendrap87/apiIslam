const env = require("./env.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: true,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.category_menu = require("../model/catetory_menu.js")(sequelize, Sequelize);

module.exports = db;
