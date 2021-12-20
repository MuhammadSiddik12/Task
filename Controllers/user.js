const user_model = require('../Models/user');
const queueController = require('../config');

exports.addUser = async (req, res, next) => {
    let data = req.body;
    let user = await user_model.findOne({ where: { email: data.email } })
    if (user) {
        return res.status(400).json({ status: 1, message: "Email Already Exists" })
    } else {
        user = await user_model.create(data)
        return res.status(200).json({ status: 1, message: 'User Created Successfully', data: data })
    }
}


//gets the CSV files through the multer and adds it in the queue.
exports.addNewsletters = async (req, res, next) => {
    if (!req.uploadError) {
        let add = req.files.map(file => {
            return queueController.fileQueue.add(file)
        })
        Promise.all(add).then(result => {
            return res.status(200).json({ status: 1, message: 'Files have been added to the queue.', data: result })
        }).catch(err => {
            return res.status(500).json({ status: 1, message: 'could not add file to the queue' })
        })
    } else {
        return res.status(400).json({ status: 0, message: 'files could not be uploaded due to extension errors' })
    }
}