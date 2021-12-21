const nodemailer = require('nodemailer')

const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
})

exports.sendEmail = (source) => {
    const options = {
        from: process.env.FROM,
        to: source.email,
        subject: "CSV Queue Mail",
        text: "Hello This is A Email From Queue",
        html: "<b>Hello world</b>"
    }
    transpoter.sendMail(options, (err, info) => {
        // if (err) throw err.message;
        // console.log(info.response)
    })
}