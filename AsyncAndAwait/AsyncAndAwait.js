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

async function doMorningRoutines() {
    try {
        
        const wakingUpResult = await wakingUp();
        console.log(wakingUpResult);
    
        const bathResult = await bath();
        console.log(bathResult);
    
        const goesToWorkResult = await work();
        console.log(goesToWorkResult);
        
    } catch (error) {
        console.error(error);
    }
    
}

doMorningRoutines();