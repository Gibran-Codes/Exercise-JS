const students = [
    {
        nisn: 1,
        name: "Fathir Rahmat",
        age: 16,
        cute: true,
        score: 90
    },
    {
        nisn: 2,
        name: "Ahmadi reza",
        age: 17,
        cute: false,
        score: 88
    },
    {
        nisn: 3,
        name: "Rafael Pandu",
        age: 16,
        cute: false,
        score: 45
    },
    {
        nisn: 4,
        name: "Cesya Apridita",
        age: 16,
        cute: false,
        score: 50
    }
]

const displayArrObject = students.forEach(students => console.log(students));

const nisn = students.map(students => console.log(students.nisn));
const name = students.map(students => console.log(students.name));
const age = students.map(students => console.log(students.age));
const cute = students.map(students => console.log(students.cute));
const score = students.map(students => console.log(students.score));

const highScore = students.filter(students => students.score > 75);
console.log(highScore);
const lowScore = students.filter(students => students.score < 75);
console.log(lowScore);

const totalScore = students.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / students.length;
console.log("Average Score:", averageScore)

