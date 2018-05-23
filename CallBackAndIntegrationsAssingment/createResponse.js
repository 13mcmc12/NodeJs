function response(id_type, next) {
  var raw_data = {};
  return (function(err, res, body) {
    if (err)
      throw new Error(err);

    if (typeof body == 'string')
      body = JSON.parse(body);
    if (!body._id && !body._jobId) {
      console.log(JSON.stringify(body));
      throw new Error('something went worng')
    }
    raw_data[id_type] = body._id ? body._id : body._jobId;
    console.log(body)
    console.log(id_type + " : " + raw_data[id_type]);
    next();
  });
}

module.exports =response;
