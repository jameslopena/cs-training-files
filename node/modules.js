
//custom_hello.js
var hello = function () {
    console.log("hello");
}
module.exports = hello;

//custom_goodbye.js
exports.goodbye = function () {
    console.log("bye!");
}

//app.js
var hello = require('./custom_hello');
var gb = require('./custom_goodbye');
hello();
gb.goodbye();

//--------------------------------------------------------------------------------

//my_module.js
var foo = function () {
};
var bar = function () {
};
var baz = function () {
};
exports.foo = foo;
exports.bar = bar;

//app.js
var myMod = require('./my_module');
myMod.foo();
myMod.bar();

//---------------------------------------------------------------------------------

//version semantics
//major.minor.patch
//"connect": "~1" -> >=1.0.0 <2.0.0
//"connect": "~1.8" -> >=1.8.0 <1.9.0


//package.json
/*
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
        "connect": "2.1.1",
         "underscore": "1.3.3"
  }
}
*/
