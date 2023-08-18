
function setElementValueById(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const elementValueNumber = parseFloat(elementValueString);
    const totalAmount =  (30/100)* elementValueNumber;
    return elementValueNumber - totalAmount;
}
function setPayableAmount(element, newAmount){
    const setElementAmount = document.getElementById(element);
    setElementAmount.innerText= newAmount;
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const totalElementValue = setElementValueById('product-price');
    setPayableAmount('payable-amount', totalElementValue);
})