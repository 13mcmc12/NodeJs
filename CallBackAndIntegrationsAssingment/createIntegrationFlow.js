var createOptions = require('./createOPtions.js');
var createRequest = require('./createRequest.js');
var createResponse = require('./createResponse.js');
function createIntegrtation(name, cb) {
  var body = {
    name: name
  };
  var options = createOptions('POST', 'integrations/', body);
  createRequest(options, cb)
}
module.exports = createIntegrtation;
