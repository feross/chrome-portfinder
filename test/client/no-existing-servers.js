var async = require('async')
var net = require('net')
var portfinder = window.portfinder = require('../../')

var STATUS_PORT = Number(process.env.STATUS_PORT)

portfinder.getPort(function (err, port) {
  if (err) throw err
  if (port !== 8000) throw new Error('port should be 8000')

  var statusSocket = net.connect(STATUS_PORT, function () {
    statusSocket.write('pass')
  })

  statusSocket.on('error', function (err) {
    console.error(err.stack)
  })
})
