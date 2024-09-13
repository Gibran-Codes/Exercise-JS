function wakingUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const wakesUp = true;
    
            if (wakesUp) {
                resolve ("You wakes up");
            } else {
                reject ("You didn't wakes up");
            }
        }, 500);
    })
}
function bath() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const takenBath = true;
    
            if (takenBath) {
                resolve ("You takes a bath");
            } else {
                reject ("You didn't takes a bath");
            }
        }, 1500);
    })
}
function work() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const goToWork = true;
    
            if (goToWork) {
                resolve ("You goes to work");
            } else {
                reject ("You didn't goes to work");
            }
        }, 3000);
    })
}

wakingUp().then(value => {console.log(value); return bath()})
          .then(value => {console.log(value); return work()})
          .then(value => {console.log(value); console.log("You finished all morning routine")})
          .catch(error => console.error(error))