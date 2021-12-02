const a = 1;
const b = 2;

// If statements

if (a >b) {
    console.log("a > b?");
} else if (a == b) {
    console.log("a = b!");
} else {
    console.log("a < b!");
}

//Switch statement

const someString = "abc";

switch(someString) {
    case "ab":
        console.log("ab")
        break;
    case "abc":
        console.log("abc")
        break;
    default:
        console.log("No match");
}

// Loops

for (let i = 0; i <= 10; i++) {
    console.log(`for loop i is ${i}`);
}

const someArray = [1, 2, 3, 4, 5];

for (let i = 0; i < someArray.length; i++) {
    // someArray[i] = someArray[i] + i the same as someArray[i] += 1
    someArray[i] += i;
}
console.log(someArray);

// For in (The same as previos example)
for (index in someArray) {
    console.log(`For IN someArray at ${index} value : ${someArray[index]}`);
}

// For of
for (value of someArray) {
    console.log(`For OF someArray value: ${value}`);
}

for (character of someString) {
    console.log(`For OF someString value: ${character}`);
}

// While loop
let someIterator = 0;
while (someIterator < 10) {
    console.log(`while loop value is: ${someIterator}`);
    someIterator++;
}

//Reset someItterator to 0
someIterator = 0;
do {
    console.log(`do while loop value is: ${someIterator}`);
    someIterator++;
} while(someIterator < 10)

//const person {name: `Oskars`}*/

const numberArray = ['118', '29', '1', '2', '55', '69'];

for (let i = 0; i < numberArray.length; i++) {
    let biggest = numberArray[index];
    
    
}