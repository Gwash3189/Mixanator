# Mixanator
Mixins with function composition


# Usage 
```JavaScript

var mixanator = require("mixanator");

var Num = function(n){return parseInt(n);};
var Square = function(n){return n * n;};
 
var SquareString = mixanator.mix(Num, Square);
 
console.log(SquareString("2"));
 
var CudeSquareString = SquareString.extend(function(x){return x * x * x;});
 
console.log(CudeSquareString("2"));

```

# Mix

From left to right, composes the provided functions together (sending the output of the first function to the input of the second function, and so on.) and returns the composed function. 

```JavaScript 
var mixanator = require("mixanator");

var Num = function(n){return parseInt(n);};
var Square = function(n){return n * n;};
 
var SquareString = mixanator.mix(Num, Square);
```


# Extend 

Used to extend an already composed function. All originally composed functions will be composed with the newly provided functions. 

```JavaScript
var CudeSquareString = SquareString.extend(function(x){return x * x * x;});
```
