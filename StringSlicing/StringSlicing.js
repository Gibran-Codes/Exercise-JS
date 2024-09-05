const myEmail = "Gibran7@gmail.com"

let userName = myEmail.slice(0, myEmail.indexOf("@"));
let extension = myEmail.slice(myEmail.indexOf("@") +1 ); 

console.log(myEmail);
console.log(userName);
console.log(extension);