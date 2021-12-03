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

/**
 * Ask user input 2 numbers and then it should output in console sum of those numbers
 * and also save input and result in to text file
 * Example in console:
 * Enter first number:
 * 1
 * Enter second number:
 * 2
 * Result is:
 * 3
 * In text file:
 * 1+2=3
 */