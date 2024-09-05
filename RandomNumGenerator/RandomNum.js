const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");
const Label4 = document.getElementById("label4");
const myButton = document.getElementById("myButton");
const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;


    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
    Label4.textContent = randomNum4;
}