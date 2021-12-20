
const sendMail = require('../middleware/sendEmail').sendEmail;
const queueController = require('../config').fileQueue;
const logs = require('../Models/logs');

module.exports = async function (job, done) {
    try {
        console.log(job.data,'in the email queue')
        await sendMail(job.data)
        await logs.create(getLogsData())
        done()
    } catch (error) {
        console.log(error, 'Unknown Error')
        //adds to the parking lot queue.
        await queueController.add(job.data)
        done(new Error(error.message ? error.message : 'Unknown Error. Ticket was given to the parking lot'));
    }
}

function getLogsData() {
    return {
        name: 'Siddik',
        email: 'akbarsiddik2002@gmail.com',
        status: 1,
        newsLetterName: 'wow',
        reason: null,
    }
}