const { Sequelize } = require("sequelize");
const sequelize = require("../Utils/database");
const Logs = sequelize.define("logs", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING(100),
        required: true
    },
    status: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    newsLetterName: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    reason: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },


});

module.exports = Logs;