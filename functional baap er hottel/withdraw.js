

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = inputFiledValueById('withdraw-input');
    const withdrawPreviousAmount  = elementValueById('total-withdraw');
    const totalWithdraw = withdrawPreviousAmount  + withdrawInput;
    setElementValue('total-withdraw', totalWithdraw);
    const totalPreviousAmount  = elementValueById('total-balance');
    const minusPreviousBalance = totalPreviousAmount - withdrawInput;
    setElementValue('total-balance', minusPreviousBalance);


})