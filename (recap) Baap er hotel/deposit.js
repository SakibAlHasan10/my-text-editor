// deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // deposit input
    const depositInputElement = document.getElementById('deposit-input');
    // deposit value
    const depositInputString = depositInputElement.value
    // string to integer deposit input
    const depositInput = parseFloat(depositInputString);
    depositInputElement.value= '';
    if(isNaN(depositInput)){
        alert('Please provide an valid number' );
        return;
    }
    // deposit total amount
    const totalDepositElement = document.getElementById('total-deposit');
    const totalDepositString = totalDepositElement.innerText;
    const totalDeposit = parseFloat(totalDepositString);
    // added deposit input and total amount
    const totalDepositAmount = totalDeposit + depositInput;
    totalDepositElement.innerText= totalDepositAmount;
    // total balance 
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    // added total deposit input and total balance 
    const totalDepositBalance = depositInput + totalBalance;
    totalBalanceElement.innerText= totalDepositBalance;

})

