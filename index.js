var assert = require('assert');
var nbind = require('nbind');
var lib = nbind.init().lib;

var vec = lib.Vector.getVector();

console.log(vec);

assert(vec[0] == 0.0);
assert(vec[1] == 1.0);
assert(vec[2] == 2.0);
