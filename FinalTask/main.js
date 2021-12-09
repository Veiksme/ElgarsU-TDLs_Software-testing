//const [biggerNumber, numberSquares] = require('./functions.js');
const numberSquares = require('./functions.js');
const biggerNumber = require('./functions.js')
const fs = require('fs');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Present user with choice of functions
console.log('Blue pill: biggerNumber(a, b)');
console.log('Red pill: numberSquares(n)');
console.log('');
rl.question('Choose blue or red pill:\n', userInput => {
    switch(userInput) {
        //Case 'blue' for number comparison
        case 'blue':
            console.log('');
            console.log('This function compares two numbers and determines the biggest:')
            rl.question('Enter first number\n', function(num1){
                rl.question('Enter second number\n', function(num2){
                    let biggest = biggerNumber(parseInt(num1), parseInt(num2));
                    //Print the results in console and save to results.txt (overwriting previous file)
                    console.log('Biggest number is: ',biggest);
                        fs.writeFile('./results.txt', `biggerNumber(${parseInt(num1)}, ${parseInt(num2)}) = ${biggest}`, () => {
                        console.log('Result is written in results.txt');
                    });
                    rl.close();
                });
            });
            break;
        case 'red':
        //Case 'blue' for square calculation in N by N grid
            console.log('');
            console.log('This function calculates how many squares can fit in N * N square grid:')
            rl.question('Enter grid dimension N\n', function(num1){
                let squares = numberSquares(parseInt(num1));
                //Print the results in console and save to results.txt (overwriting previous file)
                console.log('Result is: ',squares);
                        fs.writeFile('./results.txt', `numberSquares(${parseInt(num1)}) = ${squares}`, () => {
                        console.log('Result is written in results.txt');
                    });
                    rl.close();
                });
            break;
        default:
            //In case of incorrect user input, terminate the programm
            console.log('Incorrect input. Terminating!');
            rl.close();
    }
});