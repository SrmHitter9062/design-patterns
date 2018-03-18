var util = require('util')
var Job = function Job() {
  // ...
  this.process = function(jobList) {
    console.log("emitting(subscribing) event on job list change ",jobList)
    this.emit('done', { jobList: jobList })
  }
}

util.inherits(Job, require('events').EventEmitter)
module.exports = Job
