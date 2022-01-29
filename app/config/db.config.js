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
db.menu = require("../model/menu.js")(sequelize, Sequelize);
db.worshipMain = require("../model/worship_main.js")(sequelize, Sequelize);
db.worshipMainActivity = require("../model/worship_main_activity.js")(sequelize, Sequelize);
db.community_discussion = require("../model/community_discussion.js")(sequelize, Sequelize);

module.exports = db;
