var iAmAvariable = 5;

let iAmAvariableAsWell = 10;
const constVar = 15;
// let can be reassigned a value const cannot
iAmAvariableAsWell = 11;
// Strings
let myName = "Oskars";
let myName2 = 'Oskars';
let myName3 = `Oskars`;

// console.log(myName3);

// Operators
let a = 15;
let b = 15;

let addition = a + b;
// console.log(addition);

let isEqual = b == a;
// console.log(isEqual);

// Strings 
let txt = 'Hello World!';
let txt2 = txt.slice(0, 3);
console.log(`slice hello world : ${txt2}`);
let txt3 = txt.substr(1, 3);
console.log(`substr hello world : ${txt3}`);
let txt4 = txt.replace('l', 'i');
console.log(`replace l with i hello world : ${txt4}`);
let txt5 = txt.replaceAll('l', 'i');
console.log(`replaceAll l with i hello world : ${txt5}`);
console.log(`replaceAll l with i hello world to upper case: ${txt5.toUpperCase()}`);
console.log(`replaceAll l with i hello world to upper case: ${txt5.toLowerCase()}`);
let trimmed = txt.trim();
console.log(`trim leading whitespaces ${trimmed}`)

// String task
let orange = "Orange";

let an = orange.slice(2, 4).toUpperCase();

console.log(`From orange to : ${an}`) // 'AN'

// Array
const people = ['Oskars', 'Karlis', 'Marics', 'Viktorija'];
console.log('People in array : ', people);
console.log(`Person at index: 3 :${people[3]}`);
people.push('Arturs');
console.log(`After we push Arturs :`, people);
console.log('people.pop() : ', people.pop());
console.log('people.shift() : ', people.shift());
console.log('Hows out People array doing? : ', people);
people.unshift('Erika');
console.log(`people.unshift('Erika')`, people);

const people2 = ['Oskars', 'Karlis', 'Marics', 'Viktorija'];
console.log('people2', people2)
console.log('people2 sort', people2.sort());
people2.unshift('Kristaps');
console.log('Unshift Kristaps and sort', people2.sort());
let newPeople = people2.slice(1, 3);
console.log('slice(1,3)', newPeople);
console.log('people2 do not change after slice', people2);

const numbers = [12, 16, 6, 7];

console.log(numbers[0] + numbers[1]);

// Functions
function multiply1(a, b) {
    return a * b;
}
const myMultiplyFunction = function multiply(a, b) {
    return a * b;
}

console.log('Function multiply : ', multiply1(2, 4));
console.log('Function multiply as variable  : ', myMultiplyFunction);
console.log('Function multiply called : ', myMultiplyFunction(2,3));

// Some practice tasks
/**
 * Create function that converts days into minutes
 */

 function daysToMinutes(days) {
     let minutes;
     minutes = days * 24 * 60;
     return minutes;
 }

 /**
  * Have existing array of characters => Pass character to function and return 
  * Alphabetically last one
  * Example:
  * const array = ['a', 'b', 't', 'k'];
  * val lastLetter = lastAlphabeticChar('z');
  * lastLetter is 'z' 
  * val lastLetter = lastAlphabeticChar('a');
  * lastLetter is 't' 
  */

const array = ['a', 'b', 't', 'k'];

function lastAlphabeticChar(array, chacter) {
     let alphabeticallyLast;
     // code
     array.push(chacter);
     array.sort();
     alphabeticallyLast = array[array.length - 1];
     return alphabeticallyLast;
 }

function lastAlphabeticChar2(arr, char) {
    arr.push(char);
    return arr.sort().pop();
}

console.log('Last alphabetic nummber in array', lastAlphabeticChar(array, 'a'));
console.log('Last alphabetic nummber in array', lastAlphabeticChar2(array, 'a'));
