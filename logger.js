var url = 'http://mylogger.io/log';
function log(message)
{
    // Send HTTP request
    console.log(message);
}

// module.exports.log = log; // this exports an object
module.exports = log; // this exports a function
//module.export.endpoint=url;