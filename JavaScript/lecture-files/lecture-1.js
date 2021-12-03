const a = 1;
const b = 2;

// If statement
if (a > b) {
    console.log("a > b?")
} else if (a == b) {
    console.log('I am else if and a < b!')
} else {
    console.log('Else cause both previous statements were false!')
}

if (false) {

} else {
    console.log('Else since if(false)');
}

if (true) {
    console.log("This is true");
} 

if (true) {
    console.log("This is true");
}

// Switch

const someString = "abc";

switch (someString) {
    case "ab": 
        console.log("someString is ab");
        break;
    case "abc":
        console.log("someString is abc");
        break;
    default:
        console.log("no statemnts were true resort to default:")
}

/**
 * i++ 
 * is 
 * i = i + 1;
 */

// Loops

for (let i = 0; i < 10; i++) {
    console.log(`for loop brr ${i}`);
}

const someArray = [1, 2, 5, 3, 7];

for (let i = 0; i < someArray.length; i++) {
    // Add value of `i` to element of of array at index
    // first cycle 1+0 (array[0] = 1) and (i = 0)
    // second cycle 2+1 (array[1] = 2) and (i = 1)
    // and so on
    // someArray[i] = someArray[i] + i; same as someArray[i] += i;
    someArray[i] += i;
}

console.log(someArray);

// For in
for (index in someArray) {
    console.log(`For IN someArray at ${index} value : ${someArray[index]}`);
}

// For of
for (value of someArray) {
    console.log(`For OF someArray value : ${value}`);
}

for (character of someString) {
    console.log(`For OF someString value : ${character}`);
}

// While loop
let someIterator = 0;
while (someIterator < 10) {
    console.log(`While loop someIterator ${someIterator}`);
    someIterator++;
}
// Reset someIterator to 0
someIterator = 0;
do {
    console.log(`Do While loop someIterator ${someIterator}`);
    someIterator++;
} while (someIterator < 10)

// Objects
const person1 = { name: "Oskars", lastName: "Carevs", fullName: function() {
    return this.name + " " + this.lastName;
} };
const person2 = { name: "Selena", lastName: "Gomez", fullName: function() {
    return this.name + " " + this.lastName;
} };


console.log(`Person 1 name ${person1.name}`);
console.log(`Person 1 name ${person1["name"]}`);
console.log(`Person 1 name ${person1.fullName()}`);
console.log(`Person 1 name ${person2.fullName()}`);

// Class
class Person {
    constructor(name, lastName, dateOfBirth, isHuman) {
        this.name = name;
        this.lastName = lastName;
        // We want date of birth to be a Number
        // If not then set dateOfBirth to 0
        if (dateOfBirth instanceof Number) {
            this.dateOfBirth = dateOfBirth;
        } else {
            this.dateOfBirth = 0;
        }

        // We want isHuman to be Boolean
        // If its not print warrning in console
        if (isHuman instanceof Boolean) {
            this.isHuman = isHuman
        } else {
            console.warn("Did not provide correct false/true")
        }
    }

    fullName() {
        return this.name + " " + this.lastName;
    }
}

// Not defined variales
let something;
console.log(`its something ${something}`);

const person3 = new Person("Not", "Robot", "not a number", "beepBoop");

console.log(`New person from created class ${person3.lastName}`);
console.log(`New person from created class ${person3.fullName()}`);
console.log(`New person from created class ${person3.dateOfBirth}`);
console.log(`New person from created class ${person3.isHuman}`);


// Practice task 1
/**
 * We have an array of numbers 
 * const numberArray = ['10', '29', '1', '2', '55', '69'];
 * Using loop get the biggest number in array
 */

const numberArray = ['10', '29', '1', '2', '55', '69'];

let biggest = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (biggest < numberArray[i]) { 
        console.log(`new biggest ${biggest}`)
        biggest = numberArray[i];
    }
}

console.log(`Usiing max ${Math.max(...numberArray)}`)

console.log(`Biggest ${biggest}`)

// Practice task 2
/**
 * Create a function that accepts an array as parameter and
 * returns an object with: e.g. { bigges: 1, smallest: 1, average: 1 }
 */

 function numberStats(array) {
    let max = array[0];
    let min = array[0];
    let sum = 0;
    for (number of array){
        if (number > max){
            max = number;
        }
        if (number < min){
            min = number;
        }
        sum += number;
    }
    avg = sum / array.length;
    return { biggest: max, smallest: min, average: avg };
 }
 
 const ourNumberStats = numberStats(numberArray);


 console.log(`Our numbers stats biggest ${ourNumberStats.biggest}`);
 console.log(`Our numbers stats smallest ${ourNumberStats.smallest}`);
 console.log(`Our numbers stats average ${ourNumberStats.average}`);

