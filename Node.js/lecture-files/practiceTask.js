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

const [ log, error ] = require('./logger');
const fs = require('fs');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number\n', function(num1){
    rl.question('Enter second number\n', function(num2){
        let sum = parseInt(num1)+parseInt(num2);
        log('Result is:\n',sum);
        fs.writeFile('./documents/results.txt', `${num1}+${num2}=${sum}`, () => {
            log('result written at results.txt');
        });
        rl.close();
    });
});
