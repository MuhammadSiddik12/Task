const logs = require('../Models/logs');

module.exports = async function (job, done) {
    //we could hhave added multiple logic in here.
    //eventually creating a user for a news letter and then sending them the EMail.
    try {
        console.log(job.data, 'in the parking lot queue')
        await logs.create(getLogsData())
        done()
    } catch (error) {

    }
}

function getLogsData() {
    return {
        name: 'Siddik',
        email: 'akbarsiddik2002@gmail.com',
        status: 0,
        newsLetterName: 'wow',
        reason: 'Could not find the email ID in the db',
    }
}
