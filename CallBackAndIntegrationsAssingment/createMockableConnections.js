var createOptions = require('./createOPtions.js');
var createRequest = require('./createRequest.js');
var createResponse = require('./createResponse.js');
function createMockableConnection(name, cb) {
  var body = {
    type: 'rest',
    name: 'Get Customer1 From Mocable',
    rest: {
      baseURI: 'http://demo7450311.mockable.io/',
      mediaType: 'json',
      authType: 'basic',
      pingRelativeURI: 'get-dairy-customer',
      pingMethod: 'GET',
      basicAuth: {
        username: 'test',
        password: '123'
      }
    },
    json: true
  };
  var options = createOptions('POST', 'connection/', body);
  createRequest(options, cb)
}

module.exports = createMockableConnection;
