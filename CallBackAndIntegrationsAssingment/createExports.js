function createExports(name, connectionID, cb) {
  var body = {
    _connectionId: '5af2eda76e9d4617815ec4e6',
    apiIdentifier: 'ee0b81e80f',
    asynchronous: true,
    rest: {
      relativeURI: 'getCustomerData',
      method: 'GET'
    },
    json: true
  };
  var options = createOptions('POST', 'exports', body);
  createRequest(options, cb);

}
module.exports = createExports;
