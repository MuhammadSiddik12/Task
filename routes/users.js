const express = require('express');
const router = express.Router();
const userControllers = require('../Controllers/user');
const validator = require('../Validation/user');
const fileUploader = require('../middleware/multer');

/* Add A New User */
router.post('/add', userControllers.addUser);

/* sends news letters. */
router.post('/sendNewsLetters', fileUploader, userControllers.addNewsletters)


module.exports = router;
