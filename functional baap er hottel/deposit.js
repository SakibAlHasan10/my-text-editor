

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositInput = inputFiledValueById('deposit-input');
    const previousDepositAmount = elementValueById('total-deposit');
    const totalDepositAmount = previousDepositAmount + newDepositInput;
    setElementValue('total-deposit', totalDepositAmount);
    const previousTotalBalance = elementValueById('total-balance');
    const totalAmount = previousTotalBalance + newDepositInput;
    setElementValue('total-balance', totalAmount);
})


