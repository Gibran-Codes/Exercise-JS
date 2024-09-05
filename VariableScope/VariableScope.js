//Local
functionLocal1();
functionLocal2();

function functionLocal1() {
    let x = 11;
    console.log(x);
}
function functionLocal2() {
    let x = 22;
    console.log(x);
}

//Global
let y = 7;

functionGlobal1();
functionGlobal2();

function functionGlobal1() {
    console.log(y);
}

function functionGlobal2() {
    console.log(y);
}

//Local vs Global
let z = 3;

functionVersus1()
functionVersus2()

function functionVersus1() {
    let z = 14;
    console.log(z);
}

function functionVersus2() {
    let z = 9;
    console.log(z);
}