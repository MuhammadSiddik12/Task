const csv = require('csv-parser');
const fs = require('fs');
var path = require('path');

//parses the file with the help of the path directory and returns the results.
exports.fun = function jobFun(fileName) {
  const results = [];
  console.log(fileName);
  return new Promise((resolve, reject) => {
    let wow = path.join(__dirname, `../uploads/${fileName}`);
    fs.createReadStream(wow).pipe(csv()).on('data', (data) => results.push(data)).on('end', () => {
      console.log(results, 'results');
      fs.unlinkSync(wow)
      resolve(results)
    }).on('error', () => {
      reject(results)
    })
  })
}
