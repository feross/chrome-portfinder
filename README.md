# chrome-portfinder
[![NPM Version](http://img.shields.io/npm/v/chrome-portfinder.svg)](https://npmjs.org/package/chrome-portfinder)
[![NPM](http://img.shields.io/npm/dm/chrome-portfinder.svg)](https://npmjs.org/package/chrome-portfinder)
[![Gittip](http://img.shields.io/gittip/feross.svg)](https://www.gittip.com/feross/)

### Find an open port on the current machine (for Chrome Apps)

This module lets you find an open port, ala [portfinder](https://github.com/indexzero/node-portfinder), but for [Chrome Packaged Apps](http://developer.chrome.com/apps/about_apps.html).

Instead of learning the quirks of Chrome's `chrome.socket` API for networking in Chrome Apps just **use the higher-level portfinder API you're familiar with**. Then, compile your code with [browserify](https://github.com/substack/node-browserify) and you're all set!

This module is used by [webtorrent](https://github.com/feross/webtorrent).

## install

```
npm install chrome-portfinder
```

## methods

The `chrome-portfinder` module has a simple interface:

```
  var portfinder = require('chrome-portfinder')

  portfinder.getPort(function (err, port) {
    //
    // `port` is guarenteed to be a free port
    // in this scope.
    //
  })
```

By default `portfinder` will start searching from `8000`. To change this simply set `portfinder.basePort`.

## contribute

To run tests, use `npm test`. The tests will run TCP servers and launch a few different Chrome Packaged Apps with browserified client code. The tests currently assume you have Chrome Canary on Mac. If you're on Windows or Linux, feel free to send a pull request to fix this limitation.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org). Originally forked from [portfinder](https://github.com/indexzero/node-portfinder) which is also MIT.