const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const paypalBtn = document.getElementById("paypalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function() {

    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed.`
    } else {
        subResult.textContent = `You are not subscribed.`
    }


    if (visaBtn.checked) {
        subResult.textContent = `You have ticked Visa.`
    } else if (masterCardBtn.checked) {
        subResult.textContent = `You have ticked Master Card.`
    } else if (paypalBtn.checked) {
        subResult.textContent = `You have ticked Paypal.`
    } else {
        subResult.textContent = `You have not ticked any.`
    }
}