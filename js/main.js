function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value) * price;
    
    showAmount.innerHTML = amount;
}
const arr = [2,1,4,3,5,6];for(let i = 0; i < arr.length; i+=1) {if(arr[i] === i) {console.log("ok");}}
