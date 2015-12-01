exports.req = function(status, message, data) {
  var r;
  r = {};
  if (status) {
    r.status = status;
  }
  if (message) {
    r.message = message;
  }
  if (data) {
    r.data = data;
  }
  return r;
};

exports.json = function(status, message, data, resStatus) {
  var r;
  r = {};
  if (status) {
    r.status = status;
  }
  if (message) {
    r.message = message;
  }
  if (data) {
    r.data = data;
  }
  res.status(resStatus).json(r);
  return r;
};
