// method chaining = calling one method after another in one continous line of code

let username  = window.prompt("Insert Your Username");

// no method chaining

/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

console.log(letter + extraChars);*/

// With Method Chaining

userName = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(userName);