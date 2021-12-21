const { Sequelize } = require("sequelize");
const sequelize = require("../Utils/database");
const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING(100),
        allowNull: true,
        require: true
    },
    lastName: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    age: {
        type: Sequelize.STRING(100),
        allowNull: true,
        require: true
    },
    email: {
        type: Sequelize.STRING(100),
        unique: true,
        require: true
    },

});

module.exports = User;
