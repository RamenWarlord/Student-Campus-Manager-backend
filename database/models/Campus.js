const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageurl: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200",
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Campus;
