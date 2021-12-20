const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads')
  },
  filename: function (req, file, callback) {
    callback(null, getFileName(file.originalname) + '-' + Date.now())
  }
});


var upload = multer({
  storage: storage, fileFilter: (req, file, callback) => {
    if (file.mimetype == 'text/csv') {
      callback(null, true)
    }
    else {
      callback(null, false)
      return callback(new Error('Only csv files are allowed'));
    }
  }
}).array('files', 10);


module.exports = (req, res, next) => {
  upload(req, res, function (err) {
    req.uploadError = false;
    if (err) {
      req.uploadError = true;
      return res.end("Error uploading file.");
    }
    next();
  });
}


//gets the filename 
function getFileName(fileName) {
  let name = fileName.split('.')
  return name[0];
}
