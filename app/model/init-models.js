var DataTypes = require("sequelize").DataTypes;
var _catetory_menu = require("./catetory_menu");

function initModels(sequelize) {
  var catetory_menu = _catetory_menu(sequelize, DataTypes);


  return {
    catetory_menu,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
