# Api module

exports.req = (status, message, data) ->
  r = {}

  r.status = status if status
  r.message = message if message
  r.data = data if data

  return r

exports.json = (status, message, data, res, resStatus) ->
  r = {}

  r.status = status if status
  r.message = message if message
  r.data = data if data

  res.status(resStatus).json r

  return r
