const [biggerNumber, numberSquares] = require('./functions.js');
const fs = require('fs');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Blue pill: biggerNumber(a, b)');
console.log('Red pill: numberSquares(n)');
console.log('');
rl.question('Choose blue or red pill:\n', userInput => {
    switch(userInput) {
        case 'blue':
            console.log('Please enter two numbers to be compared (seperated by enter):')
            rl.question('Enter first number\n', function(num1){
                rl.question('Enter second number\n', function(num2){
                    let result = biggerNumber(parseInt(num1), parseInt(num2));
                    console.log('Biggest number is: ', result);
                        fs.writeFile('./results.txt', `biggerNumber(${parseInt(num1)}, ${parseInt(num2)}) = ${result}`, () => {
                        console.log('Result is written in results.txt');
                    });
                    rl.close();
                });
            });
            break;
        case 'red':
            console.log('_red_Please enter two numbers to be compared (seperated by enter):')
            rl.question('_red_Enter first number\n', function(num1){
                rl.question('_red_Enter second number\n', function(num2){
                    let result = biggerNumber(parseInt(num1), parseInt(num2));
                    console.log('_red_Biggest number is: ', result);
                        fs.writeFile('./results.txt', `_red_biggerNumber(${parseInt(num1)}, ${parseInt(num2)}) = ${result}`, () => {
                        console.log('_red_Result is written in results.txt');
                    });
                    rl.close();
                });
            });
            break;
        default:
            console.log('Incorrect input. Terminating!');
            rl.close();
    }
});

//function numberSquares test in console
//let n = 3;
//console.log('Total individual squares: ', numberSquares(n));