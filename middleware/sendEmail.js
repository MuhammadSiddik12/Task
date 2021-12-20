const nodemailer = require('nodemailer')

const transpoter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
})

exports.sendEmail = (source) => {
    const options = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: "CSV Queue Mail",
        text: source
    }
    transpoter.sendMail(options, (err, info) => {
        if (err) throw err;
        console.log(info.response)
    })
}