const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age)

    if (age >= 100) {
        resultElement.textContent = `u r too old to enter`;
    }
    else if (age >= 18) {
        resultElement.textContent = `u r old enough to enter`;
    }
    else if (age == 0) {
        resultElement.textContent = `u cannot enter u were just born!`
    }
    else if (age <= 0) {
        resultElement.textContent = `ur age is invalid!`
    }
    else {
        resultElement.textContent = `u r not old enough to enter!`
    }
}

