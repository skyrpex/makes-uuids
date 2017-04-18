'use strict';

var lodash = require('lodash');
var uuid = require('uuid');

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var defaultOptions = {
  methodName: 'uuid'
};

var index = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions,
      methodName = _ref.methodName;

  return {
    methods: defineProperty({}, methodName, lodash.memoize(function () {
      return uuid.v4();
    }))
  };
});

module.exports = index;
