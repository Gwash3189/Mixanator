var composanator = require("composanator");
var api = {};

api.mix =  function(...args) {
    var func = composanator.compose.left.apply(null, args);
    func.__composed = func;
    func.extend = api.extend;
    return func;
};

api.extend = function(...args) {
    args = args.map(getComposedFuncs).filter(clear).concat(args);

    return api.mix.apply(null, args);

    function clear(x){return x;}

    function getComposedFuncs(func){
      return func.__composed;
    }
};

module.exports = api;
