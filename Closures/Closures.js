function createScore() {
    let score = 0;

    function increasePoints(points) {
        score += points
        console.log(`+${points}pts`);
    }
    function decreasePoints(points) {
        score -= points
        console.log(`-${points}pts`);
    }
    function getScore() {
        return score;
    }

    return{increasePoints, decreasePoints, getScore};
}

const score = createScore();

score.increasePoints(20);
score.increasePoints(8);
score.decreasePoints(5);
console.log(`The final score is ${score.getScore()}pts`);


