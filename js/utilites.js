
document.getElementById('donation-contain-btn').addEventListener('click', function(){
    setContainerActiveBtn('donation-contain-btn')
});

document.getElementById('history-contain-btn').addEventListener('click', function(){
    setContainerActiveBtn("history-contain-btn")
});



document.getElementById('flood-at-noakhali-btn').addEventListener('click', function(){
    const noakhaliInputFiled = document.getElementById('flood-at-noakhali-input-filed');
    const noakhaliInputValue = parseFloat(noakhaliInputFiled.value);
    let noakhaliDonateBalance = document.getElementById('noakhali-donate-balance');
    let noakhaliDonateBalanceNum = parseFloat(noakhaliDonateBalance.innerText);
    noakhaliDonateBalance.innerText = noakhaliInputValue + noakhaliDonateBalanceNum;

    let myCurrentBalance = document.getElementById('my-balance');
    let myCurrentBalanceText = parseFloat(myCurrentBalance.innerText);
    myCurrentBalance.innerText = myCurrentBalanceText - noakhaliInputValue;
})