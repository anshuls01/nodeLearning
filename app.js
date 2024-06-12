const path = require('path');// built in module
const os = require('os');

console.log(os.totalmem());
console.log(os.freemem());

var pathobj = path.parse(__filename);
console.log(pathobj);
//Every file in node is a Module
// variable and function defined in a module is local to that module and not availble outside the module
// until not exported
//var logger = require('./logger.js'); // to include the exported module
const log = require('./logger.js'); // const is a better choice for exported module, because accidenlty don't want to change logger.js module behaviour
const { Console } = require('console');

//logger.log("message from app.js"); // if export an object
log("message from app.js"); // if export a function
//console.log(module);
// var sayHello = function(name)
//                 {
//                     console.log('Hello ' + name);
//                 }

// sayHello('world');
