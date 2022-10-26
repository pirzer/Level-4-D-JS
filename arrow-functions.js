/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
    // Code block
//    return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters - see the structure below and compare with vanila js
// const addTwoNumbers = (a, b) => {
    // Code block
//    return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
// const addTwoNumbers2 = (a, b) => a + b;
// let sum = addTwoNumbers2 (6, 4);
// console.log(sum);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
'<p> This is multiline string! </p>'
)

console.log(returnMultipleLines());

