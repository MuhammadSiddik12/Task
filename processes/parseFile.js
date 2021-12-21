//this function gets the file name and its records and pushes into the email queue.

const queueController = require('../config');
const { fun } = require('../Utils/csvParser');

//this is where we are going to parse the files.
module.exports = async function (job, done) {
    try {
        let clients = await fun(job.data.filename)
        if (clients) {
            let a = clients.map(function (jobs) {
                return queueController.emailQueue.add(jobs, { removeOnFail: true })
            })
            Promise.all(a).then(function (result) {
                done()
            })
        }
    } catch (error) {
        console.log(error.message, "djd")
        //we could send an email alerting the concerned authorities for the fileName and the error type generated.
        done(new Error('error in scheduling job. Discarding this file'));
    }

}