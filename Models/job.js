const { Sequelize}  = require("sequelize");
const sequelize = require("../Utils/database");
const Job = sequelize.define("job", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: true,
    }
});

module.exports = Job;
