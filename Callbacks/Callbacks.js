sum(displayDOM, 7, 7)

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayDOM(result) {
    document.getElementById("myH1").textContent = result;
}