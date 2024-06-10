//Every file in node is a Module
// variable and function defined in a module is local to that module and not availble outside the module
// until not exported
var logger = require('./logger.js'); // to include the exported module
console.log(logger.log("message from app.js"));
//console.log(module);
// var sayHello = function(name)
//                 {
//                     console.log('Hello ' + name);
//                 }

// sayHello('world');