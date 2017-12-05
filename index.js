var assert = require('assert');
var nbind = require('nbind');
var lib = nbind.init().lib;

var floats = lib.Vector.floats();
console.log(floats);

var doubles = lib.Vector.doubles();
console.log(doubles);

assert(floats[0] == 0.0);
assert(floats[1] == 1.0);
assert(floats[2] == 2.0);

assert(doubles[0] == 0.0);
assert(doubles[1] == 1.0);
assert(doubles[2] == 2.0);
