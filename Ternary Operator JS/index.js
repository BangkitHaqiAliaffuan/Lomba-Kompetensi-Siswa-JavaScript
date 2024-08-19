//ternary operator = shortcut untuk if()
//example = condition ? codeIfTrue : codeIfFalse;

let age = 18;
let message = age >= 17 ? 'you are old enough' 
: 'you are not old enough'
console.log(message)

let time = 14;
let greeting = time > 9 ? 'good afternoon' : 'good morning'
console.log(greeting)

let price = 12.000;
let discount = price > 10.000 ? 50 : 10;

console.log(`Your Price Is ${price - price *(discount/100) }`)