const button = document.getElementById("rollbtn");
const hasil1 = document.getElementById("hasil1");
const hasil2 = document.getElementById("hasil2");
const hasil3 = document.getElementById("hasil3");

let min = 20;
let max = 90;


button.onclick = function(){
    let randomNum1 = Math.floor(Math.random() *(max-min)) + min;
    let randomNum2 = Math.floor(Math.random() *(max-min)) + min;
    let randomNum3 = Math.floor(Math.random() *(max-min)) + min;
    hasil1.textContent = randomNum1;
    hasil2.textContent = randomNum2;
    hasil3.textContent = randomNum3;
}