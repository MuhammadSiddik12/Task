const queueController = require('../config');

//adds a new job in the queue.
exports.addQueue = async (req, res, next) => {
  try {
    let a = await queueController.emailQueue.add({ name: 'Siddik' });
    //information sent will be given.
    if (a) {
      return res.status(200).json({ status: 1, message: 'Your request has been aded to the queue', data: a });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 1, message: 'Error in adding job queue to the Job' })
  }
}
