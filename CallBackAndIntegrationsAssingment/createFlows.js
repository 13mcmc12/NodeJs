var createOptions = require('./createOPtions.js');
var createRequest = require('./createRequest.js');
var createResponse = require('./createResponse.js');

function createFlow(name, cb) {
  var body = {
      name: 'Create or Update customer in NS FLow',
      disabled: false,
      _exportId: '5af54094e6228a4147bf5bd5',
      _importId: '5af54095f9cec37f1c0a1e3b',
      _integrationId: '5afa6abbab9bdd6906998d61',
      skipRetries: false,
    json: true
  };

  var options = createOptions('POST', 'flows/', body);
  createRequest(options, cb)
}


module.exports = createFlow;
