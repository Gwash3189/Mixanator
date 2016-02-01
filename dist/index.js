'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mix = undefined;

var _composanator = require('composanator');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mix = exports.mix = function mix() {
  for (var _len = arguments.length, factories = Array(_len), _key = 0; _key < _len; _key++) {
    factories[_key] = arguments[_key];
  }

  var fac = _composanator.left.apply(undefined, factories);
  fac.extend = function () {
    for (var _len2 = arguments.length, facs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      facs[_key2] = arguments[_key2];
    }

    return _composanator.left.apply(undefined, _toConsumableArray(factories.concat(facs)));
  };
  return fac;
};