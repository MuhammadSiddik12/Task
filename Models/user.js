// const mongoose = require('mongoose');
// const schema = mongoose.Schema;

// const userSchema = new schema({
//     firstName: {
//         type: String,
//         require: true
//     },
//     lastName: {
//         type: String,
//         require: false
//     },
//     age: {
//         type: Number,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true,
//         unique: true
//     }
// })

// module.exports = mongoose.model('users', userSchema, 'users');

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
