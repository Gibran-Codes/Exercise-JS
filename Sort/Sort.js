const students = [
    {
        name: "Fathir",
        age: 17,
        score: 89
    },
    {
        name: "Reza",
        age: 17,
        score: 79
    },
    {
        name: "Cesya",
        age: 16,
        score: 30
    },
    {
        name: "Rafael",
        age: 16,
        score: 89
    }
]

const sortStudentsScore = students.sort((a, b) => b.score - a.score);
console.log(sortStudentsScore);

const sortStudentsName = students.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortStudentsName);

