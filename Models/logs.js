// const mongoose = require('mongoose');
// const schema = mongoose.Schema;


// const logSchema = new schema({
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true 
//     },
//     status: {
//         type: Boolean,
//         require: true
//     },
//     newsLetterName: {
//         type: String
//     },
//     reason: {
//         type: String,
//         default: null
//     }

// })


// module.exports = mongoose.model('logs', logSchema, 'logs');

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