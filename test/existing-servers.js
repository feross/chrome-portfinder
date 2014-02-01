var helper = require('./helper')
var net = require('net')
var portfinder = require('portfinder')
var test = require('tape')

portfinder.basePort = 9000

test('With 5 existing servers, should return port 8005', function (t) {
  portfinder.getPort(function (err, statusPort) {
    t.error(err, 'Found free port for test status')

    // Socket for client to notify node when its TCP server is listening
    var child
    var testStatus = net.createServer()
    testStatus.on('listening', function () {
      // Start app
      var env = { STATUS_PORT: statusPort }
      helper.browserify('existing-servers.js', env, function (err) {
        t.error(err, 'Clean browserify build')
        child = helper.launchBrowser()
      })
    })

    testStatus.on('connection', function (conn) {
      conn.on('data', function (data) {
        t.equal(data.toString(), 'pass')
        testStatus.close()
        child.kill()
        t.end()
      })
    })

    testStatus.listen(statusPort)
  })
})