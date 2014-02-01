var async = require('async')
var net = require('net')
var portfinder = window.portfinder = require('../../')

var STATUS_PORT = Number(process.env.STATUS_PORT)

var servers = []

function createServers (callback) {
  var base = 8000

  async.whilst(
    function () { return base < 8005 },
    function (next) {
      var server = net.createServer(function () { })
      server.listen(base, next)
      base++
      servers.push(server)
    }, callback)
}

createServers(function (err) {
  if (err) throw err

  portfinder.getPort(function (err, port) {
    if (err) throw err
    if (port !== 8005) throw new Error('port should be 8005')

    var statusSocket = net.connect(STATUS_PORT, function () {
      statusSocket.write('pass')
    })

    statusSocket.on('error', function (err) {
      console.error(err.stack)
    })
  })
})
