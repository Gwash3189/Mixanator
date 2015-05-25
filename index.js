var composanator = require("composanator");


var namespace;
try {
    if(module && module.exports){
        namespace = module.exports;
    }
} catch(e) {
    namespace = (window.Mixanator = {});
}

namespace.mix =  function(...args) {
    var func = composanator.compose.left.apply(null, args);
    func.__composed = func;
    func.extend = namespace.extend;
    return func;
};

namespace.extend = function(...args) {
    args = args.map(getComposedFuncs).filter(clear).concat(args);

    return namespace.mix.apply(null, args);

    function clear(x){return x;}

    function getComposedFuncs(func){
      return func.__composed;
    }
};
