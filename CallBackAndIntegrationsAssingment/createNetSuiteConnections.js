var createOptions = require('./createOPtions.js');
var createRequest = require('./createRequest.js');
var createResponse = require('./createResponse.js');

function createNetSuiteConnection(name, cb) {
  var body = {
    type: 'netsuite',
    name: 'Sanjay NetSuite Connection',
    netsuite: {
      account: 'TSTDRV1288246',
      roleId: '3',
      email: 'sanjay.sharma@celigo.com',
      password: '********',
      dataCenterURLs: {
        systemDomain: 'https://system.netsuite.com',
        webservicesDomain: 'https://webservices.netsuite.com',
        restDomain: 'https://rest.netsuite.com'
      }
    },
    json: true
  };
  var options = createOptions('POST', 'connections/', body)
  createRequest(options, cb)
}

module.exports = createNetSuiteConnection;
