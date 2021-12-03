
let iAmAvariable = 10;
const constVar = 15;

let myName = 'Elgars'

console.log(iAmAvariable);
console.log(constVar);
console.log(myName);

let a = 10;
let b = 10;
b += 1;
b++;

let yes = true;

let isBigger = b >= a;

console.log(isBigger);

//Strings 
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

let orange = "Orange";
orange = orange.slice(2, 3).toUpperCase();
console.log(orange);

//Array
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

function multiply(a, b) {
    return a * b;
}

console.log('Function multiply : ', multiply(2,3));
console.log('Function multiply : ', multiply(2,3));
*/

function DaysToMinutes (days) {
    let minutes = days * 24 * 60;
    return minutes;
}

const people 

function loops() {
    do
}
   