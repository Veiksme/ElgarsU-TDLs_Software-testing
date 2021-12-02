const [ log, error ] = require('./logger');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?\n", function(name) {
    rl.question("What is you last name?\n", function(lastName) {
        log(`Your name is ${name} and last name ${lastName}`);
        rl.close();
    });
});

rl.on('close', function() {
    log('On close event');
    process.exit(0);
});