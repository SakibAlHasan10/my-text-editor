

// set input value
function newInputValueById(inputValue) {
    const sentInputValue = document.getElementById(inputValue);
    const sentInputValueString = sentInputValue.value;
    sentInputValue.value = '';
    return sentInputValueString;
}
// set product amount
function productPriceElement(productId) {
    const getProductPriceElement = document.getElementById(productId);
    const getProductPriceElementString = getProductPriceElement.innerText;
    const getProductPriceElementNumber = parseFloat(getProductPriceElementString);
    return getProductPriceElementNumber;
}

// set payable amount
function setProductAmount(payableId, discountAmount) {
    const totalPayableAmount = document.getElementById(payableId);
    totalPayableAmount.innerText = discountAmount;
}
// present 
function AllPresent(present, code) {
    if (code !== 'SCIC30') {
        alert('Please enter promo code');
        return present;
    } else {
        const productPresent = (30 / 100) * present;
        return present - productPresent;
    }

}
// apply button
document.getElementById('apply-btn').addEventListener('click', function () {
    // set input value
    const codeNumber = newInputValueById('cuppon-number');
    // set product amount
    const productElement = productPriceElement('product-price');
    // present
    const totalDiscount = AllPresent(productElement, codeNumber);
    // const payableElement = 
    setProductAmount('payable-amount', totalDiscount);
})