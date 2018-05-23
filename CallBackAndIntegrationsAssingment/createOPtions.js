function createOptions(method, url, body={}) {
  var options = {
    method: method,
    url: 'https://api.staging.integrator.io/v1/' + url,
    headers: {
      Authorization: 'Bearer 25c14798e1dc4570984960e13c20963d',
      'Content-Type': 'application/json'
    },
    body: body,
    json: true
  };
  return options;
}
module.exports = createOptions;
