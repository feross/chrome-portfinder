var net = require('net')

/**
 * The lowest port to begin any port search from
 * @type {number}
 */
exports.basePort = 8000

/**
 * Responds with a unbound port on the current machine.
 * @param  {Object}   options  Settings to use when finding the necessary port
 * @param  {function} cb       Function to call when complete.
 */
exports.getPort = function (options, cb) {
  if (!cb) {
    cb = options
    options = {}
  }

  if (!options.port) options.port = exports.basePort
  if (!options.server) options.server = net.createServer()

  function onListening () {
    options.server.removeListener('error', onError)
    options.server.close()
    cb(null, options.port)
  }

  function onError (err) {
    options.server.removeListener('listening', onListening)

    if (err.message.indexOf('failed to listen') === -1) {
      return cb(err)
    }

    exports.getPort({
      port: exports.nextPort(options.port),
      host: options.host,
      server: options.server
    }, cb)
  }

  options.server.once('error', onError)
  options.server.once('listening', onListening)
  options.server.listen(options.port, options.host)
}


/**
 * Gets the next port in sequence from the specified `port`.
 * @param {number}  port Port to increment from.
 * @return {number}      Next port.
 */
exports.nextPort = function (port) {
  return port + 1
}
