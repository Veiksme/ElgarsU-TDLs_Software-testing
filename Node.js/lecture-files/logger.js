
function log(...message) {
    console.log(...message);
}

function error(...message) {
    throw Error(`Error occured : ${message}`);
}

module.exports = [log, error];
// module.exports.log = log;
// module.exports.error = error;
