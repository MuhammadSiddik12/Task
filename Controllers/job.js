const queueController = require('../config');

//adds a new job in the queue.
const addQueue = async (req, res, next) => {
  try {
    let options = GetOptions(req.body.priority, req.body.jobId);
    let a = await queueController.emailQueue.add({ name: 'Subrat' });
    //information sent will be given.
    if (a) {
      return res.status(200).json({ status: 1, message: 'Your request has been aded to the queue', data: a });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 1, message: 'Error in adding job queue to the Job' })
  }
}


function GetOptions(priority, jobId) {
  return {
    priority: priority ? priority : 1,
    jobId: jobId,
    timeout: 250000,
    attempts: 2,
    removeOnComplete: true,
    removeOnFail: true
  }
}

module.exports = addQueue;