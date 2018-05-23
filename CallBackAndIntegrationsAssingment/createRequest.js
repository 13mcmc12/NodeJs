var request = require("request");
var response = require('./createResponse.js')
function createRequest(options, cb) {
  request(options, response('job_id', cb))
}

module.exports = createRequest;
