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
            console.log('case2:');
            rl.close();
            break;
        default:
            console.log('Incorrect input. Terminating!');
            rl.close();
    }
    //rl.close();
});

//Function for comparing two numbers and printing biggest of them to console and results.txt file
//console.log('Please enter two numbers to be compared (seperated by enter):')
//rl.question('Enter first number\n', function(num1){
//    rl.question('Enter second number\n', function(num2){
//        let result = biggerNumber(parseInt(num1), parseInt(num2));
//        console.log('Biggest number is: ', result);
//            fs.writeFile('./results.txt', `biggerNumber(${parseInt(num1)}, ${parseInt(num2)}) = ${result}`, () => {
//            console.log('Result is written in results.txt');
//        });
//        rl.close();
//    });
//});

//function numberSquares test in console
//let n = 3;
//console.log('Total individual squares: ', numberSquares(n));