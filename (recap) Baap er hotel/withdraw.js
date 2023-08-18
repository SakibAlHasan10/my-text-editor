// withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // withdraw input
    const withdrawInputElement = document.getElementById('withdraw-input');
    // withdraw value
    const withdrawInputString = withdrawInputElement.value
    // string to integer withdraw input
    const withdrawInput = parseFloat(withdrawInputString);
    withdrawInputElement.value= '';
    if(isNaN(withdrawInput)){
        alert('Please provide an valid number' );
        return;
    }
    // withdraw total amount
    const totalWithdrawElement =document.getElementById('total-withdraw');
    const totalWithdrawString = totalWithdrawElement.innerText;
    const totalWithdraw = parseFloat(totalWithdrawString);
    // added withdraw input and total amount
    const totalWithdrawAmount = totalWithdraw + withdrawInput;
    totalWithdrawElement.innerText= totalWithdrawAmount;

    // total balance 
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    // added total withdraw input and total balance 
    const totalWithdrawBalance =   totalBalance - withdrawInput;
    totalBalanceElement.innerText= totalWithdrawBalance;
    
})