# chrome-portfinder [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/feross/chrome-portfinder.svg)](https://greenkeeper.io/)

[travis-image]: https://img.shields.io/travis/feross/chrome-portfinder/master.svg
[travis-url]: https://travis-ci.org/feross/chrome-portfinder
[npm-image]: https://img.shields.io/npm/v/chrome-portfinder.svg
[npm-url]: https://npmjs.org/package/chrome-portfinder
[downloads-image]: https://img.shields.io/npm/dm/chrome-portfinder.svg
[downloads-url]: https://npmjs.org/package/chrome-portfinder
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

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
