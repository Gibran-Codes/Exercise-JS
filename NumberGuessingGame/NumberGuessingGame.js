const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempt = 0;
let guess;
let running = true;

while (running) {
    
   guess = window.prompt(`Guees a number between ${minNum} to ${maxNum}`)
   guess = Number(guess)

   if (isNaN(guess)) {
    window.alert(`The number is invalid!`);
   }
   else if (guess < minNum || guess > maxNum) {
    window.alert(`The number is invalid!`);
   }
   else {
    attempt++;
    if (guess < answer) {
        window.alert(`Wrong!!!, TOO LOW`);
    }
    else if (guess > answer) {
        window.alert(`WRONG!!!, TOO HIGH`);
    }
    else {
        window.alert(`CORRECT!!!, IT TOOK U ${attempt} ATTEMPTS. THE ANSWER IS ${answer} `)
        running = false;
    }
  } 
}   
