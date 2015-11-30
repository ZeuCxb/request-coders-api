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
