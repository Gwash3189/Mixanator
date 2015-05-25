"use strict";

var composanator = require("composanator");
var api = {};

api.mix = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var func = composanator.compose.left.apply(null, args);
    func.__composed = func;
    func.extend = api.extend;
    return func;
};

api.extend = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    args = args.map(getComposedFuncs).filter(clear).concat(args);

    return api.mix.apply(null, args);

    function clear(x) {
        return x;
    }

    function getComposedFuncs(func) {
        return func.__composed;
    }
};

module.exports = api;

