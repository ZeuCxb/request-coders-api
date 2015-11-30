# Api module

exports.req = (status, message, data) ->
  r = {}

  r.status = status if status
  r.message = message if message
  r.data = data if data

  return r
