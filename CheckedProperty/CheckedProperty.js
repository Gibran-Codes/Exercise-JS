const myCheckBox = document.getElementById("myCheckBox")
const danaBtn = document.getElementById("danaBtn")
const ovoBtn = document.getElementById("ovoBtn")
const gopayBtn = document.getElementById("gopayBtn")
const mySubmit = document.getElementById("mySubmit")
const subsResult = document.getElementById("subsResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subsResult.textContent = `u r NOW subscribed!`
    }
    else {
        subsResult.textContent = `u r NOT subcribed!`
    }
    if (danaBtn.checked) {
        paymentResult.textContent = `u r paying with Dana`
    }
    else if (ovoBtn.checked) {
        paymentResult.textContent = `u r paying with OVO`
    }
    else if (gopayBtn.checked) {
        paymentResult.textContent = `u r paying with GoPay`
    }
    else {
        paymentResult.textContent = `please choose ur payment type`
    }
}