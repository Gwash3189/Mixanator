"use strict";

var composanator = require("composanator");

var namespace;
try {
    if (module && module.exports) {
        namespace = module.exports;
    }
} catch (e) {
    namespace = window.Mixanator = {};
}

namespace.mix = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var func = composanator.compose.left.apply(null, args);
    func.__composed = func;
    func.extend = namespace.extend;
    return func;
};

namespace.extend = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    args = args.map(getComposedFuncs).filter(clear).concat(args);

    return namespace.mix.apply(null, args);

    function clear(x) {
        return x;
    }

    function getComposedFuncs(func) {
        return func.__composed;
    }
};

