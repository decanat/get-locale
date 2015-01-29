# get-locale [![Build Status](https://travis-ci.org/decanat/get-locale.svg)](https://travis-ci.org/decanat/get-locale)

Detect language preference of a page or an element.

## Installation

Install with [component](http://component.github.io):

    $ component install decanat/get-locale

Install with [npm](https://www.npmjs.org/) for [browserify](http://browserify.org/):

    $ npm install decanat-get-locale

## Usage

To get preferred language `getLocale` checks following sources (in order):

- HTML `lang` attribute
- Cookies
- `navigator.language`
- Default, specified in config

```js
var getLocale = require('get-locale');

getLocale(); // 'en-US'
```


## Testing

To test with PhantomJS, run:

    $ make test    


## License

The MIT License

