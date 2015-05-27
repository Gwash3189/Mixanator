'use strict';

var ex = typeof exports === 'undefined' ? window['mixanator'] = {} : exports;
var req;
try {
    if (require !== undefined) {
        req = require;
    }
} catch (e) {
    ex.require = function (name) {
        return window[name];
    };
    req = ex.require;
}

(function (exports, require) {
    'use strict';
    var composanator = require('composanator');

    exports.mix = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var func = composanator.left.apply(null, args);
        func.__composed = func;
        func.extend = exports.extend;
        return func;
    };

    exports.extend = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        args = args.map(getComposedFuncs).filter(clear).concat(args);

        return exports.mix.apply(null, args);

        function clear(x) {
            return x;
        }

        function getComposedFuncs(func) {
            return func.__composed;
        }
    };
})(ex, req);

