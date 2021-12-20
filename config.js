const Bull= require('bull');


const emailQueue = new Bull('email', {
    redis:`127.0.0.1:6379`
});

const parkingLotQueue=new Bull('parking lot queue',{
    redis:`127.0.0.1:6379`
})


const fileQueue = new Bull('file queue',{
    redis:`127.0.0.1:6379`
})


emailQueue.on('completed',(job,result)=>{
    console.log('email queue Completes a job')
})


fileQueue.on('completed',(job,result)=>{
   
  console.log('file queue complets a job')
})


parkingLotQueue.on('completed',(job,result)=>{
    console.log('parking lot completes a job');
})




module.exports = {
    emailQueue,
    parkingLotQueue,
    fileQueue
}
