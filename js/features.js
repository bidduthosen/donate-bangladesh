function setContainerActiveBtn (activeId, hiddenId){
    document.getElementById('donation-contain-btn').classList.add('btn-outline');
    document.getElementById('history-contain-btn').classList.add('btn-outline');
    document.getElementById('donate-card').classList.add('hidden');
    document.getElementById('history-card').classList.add('hidden');
    // remove class name
    document.getElementById(activeId).classList.remove('btn-outline')
    document.getElementById(hiddenId).classList.remove('hidden')
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
};

function setInnerHtmlInHistory(donateTitle, donateBalance){
    const donationTitle = document.getElementById(donateTitle).innerText;
    const inputFiled = document.getElementById(donateBalance);
    const balance = parseFloat(inputFiled.value);
    
    const historyCard = document.getElementById('history-card');
    let date = new Date().toString();
    const newDiv = document.createElement('div');
    newDiv.className = 'border border-gray-200 rounded-lg p-6 space-y-4';
    newDiv.innerHTML = `
        <h4 class="font-bold text-xl"><span> ${balance}  Taka </span><span> ${donationTitle}</span></h4>
        <p><span class ="font-semibold">Date</span> : ${date}</p>
    `;
    historyCard.appendChild(newDiv);
    
}


