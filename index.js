var ex = typeof exports === 'undefined' ?
     window['mixanator'] = {} :
     exports;
var req;
try{
    if(require !== undefined){
        req = require;
    }
} catch(e) {
    ex.require = function(name){return window[name];};
    req = ex.require;
}

(function(exports, require){
    "use strict";
    var composanator = require("composanator");

    exports.mix =  function(...args) {
        var func = composanator.left.apply(null, args);
        func.__composed = func;
        func.extend = exports.extend;
        return func;
    };

    exports.extend = function(...args) {
        args = args.map(getComposedFuncs).filter(clear).concat(args);

        return exports.mix.apply(null, args);

        function clear(x){return x;}

        function getComposedFuncs(func){
          return func.__composed;
        }
    };

})(ex, req)
