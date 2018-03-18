
var Job = require('./vacancy-subscriber.js')
var job = new Job()

job.on('done', function(details){
  console.log('observered new job list changes', details.jobList)
  job.removeAllListeners()
})

// send newe jobs list from db here
console.log("new job or updation in jobs triggered from db")
job.process(['job1','job2','job3'])
