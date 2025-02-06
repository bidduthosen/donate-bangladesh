function setContainerActiveBtn (id){
    document.getElementById('donation-contain-btn').classList.add('btn-outline');
    document.getElementById('history-contain-btn').classList.add('btn-outline');
    // remove class name
    document.getElementById(id).classList.remove('btn-outline')
}

// donate button even function

function getDonationBalanceSetById (inputField, DonateId, myBalance){
    const inputFiled = document.getElementById(inputField);
    const inputValue = parseFloat(inputFiled.value);

    let donateBalance = document.getElementById(DonateId);
    let noakhaliDonateBalanceNum = parseFloat(donateBalance.innerText);
    donateBalance.innerText = inputValue + noakhaliDonateBalanceNum;

    let myCurrentBalance = document.getElementById(myBalance);
    let myCurrentBalanceText = parseFloat(myCurrentBalance.innerText);
    myCurrentBalance.innerText = myCurrentBalanceText - inputValue;

    document.getElementById(inputField).value = '';
}