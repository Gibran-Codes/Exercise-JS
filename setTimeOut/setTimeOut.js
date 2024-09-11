let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => {
        window.alert("hello")
    }, 3000);
    console.log("Timer Started");
}
function stopTimer() {
    clearTimeout(timeoutId);
    console.log("Timer Stoped");
    
}