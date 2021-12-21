const Bull = require('bull');

const emailQueue = new Bull('email', {
    redis: { port: 6379, host: '127.0.0.1'}
});

const parkingLotQueue = new Bull('parking lot queue', {
    redis: { port: 6379, host: '127.0.0.1'}
})

const fileQueue = new Bull('file queue', {
    redis: { port: 6379, host: '127.0.0.1'}
})


emailQueue.on('completed', (job, result) => {
    console.log('email queue Completes a job')
})


fileQueue.on('completed', (job, result) => {
    console.log('file queue complets a job')
})


parkingLotQueue.on('completed', (job, result) => {
    console.log('parking lot completes a job');
})




module.exports = { emailQueue, parkingLotQueue, fileQueue }
