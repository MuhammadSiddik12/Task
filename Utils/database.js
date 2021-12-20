
// const mongoose = require('mongoose');


// const connectDb = () => {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(`${process.env.Database}`, {
//       useNewUrlParser: true
//     }, function (error) {
//       if (error) {
//         console.log(error);
//         reject('Could not connect')
//       }
//       else {
//         console.log('Connection Successfull to mongo client the', `${process.env.Database}`);
//         resolve('Connection working')
//       }
//     })
//   })
// }

// module.exports = connectDb;

const Sequelize = require('sequelize');

console.log('DB host ' + process.env.DB_HOST)
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  logging: false,
  pool: {
    max: 25,
    min: 0,
    acquire: 60000,
    idle: 25000
  }
});

module.exports = sequelize;