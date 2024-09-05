function rollDice() {
    const diceNum = document.getElementById("diceNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []
    const images = []
    
    for ( let i = 0; i < diceNum; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.join(value);
        images.push(`<img src="Images/${value}.png">`)
    }
    
    diceImages.innerHTML = images.join("");
}