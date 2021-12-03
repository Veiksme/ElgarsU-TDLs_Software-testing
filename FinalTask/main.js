const [biggerNumber, numberSquares] = require('./functions.js');
const fs = require('fs');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

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


//function biggerNumber test in console
//console.log('Biggest number is: ', biggerNumber(a, b));
//function numberSquares test in console
//let n = 3;
//console.log('Total individual squares: ', numberSquares(n));