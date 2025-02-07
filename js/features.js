// active donate and history button handle
function setContainerActiveBtn (activeId, hiddenId){
    document.getElementById('donation-contain-btn').classList.add('btn-outline');
    document.getElementById('history-contain-btn').classList.add('btn-outline');
    document.getElementById('donate-card').classList.add('hidden');
    document.getElementById('history-card').classList.add('hidden');
    // remove class name
    document.getElementById(activeId).classList.remove('btn-outline')
    document.getElementById(hiddenId).classList.remove('hidden')
}

// donation balance even function
function getDonationBalanceSetById (inputField, DonateId, myBalance, donateTl){
    const inputFiled = document.getElementById(inputField);
    const inputValue = parseFloat(inputFiled.value);

    const myBalanceAmount = document.getElementById('my-balance');
    const myBalanceText = parseFloat(myBalanceAmount.innerText);
    
    // validation
    if(isNaN(inputValue) || myBalanceText < inputValue){
        alert('plz type a number')
        return;
    }

    // apend history container
    const donationTitle = document.getElementById(donateTl).innerText;
    const historyCard = document.getElementById('history-card');
    let date = new Date().toString();
    const newDiv = document.createElement('div');
    newDiv.className = 'border border-gray-200 rounded-lg p-6 space-y-4';
    newDiv.innerHTML = `
        <h4 class="font-bold text-xl"><span> ${inputValue}  Taka </span><span> ${donationTitle}</span></h4>
        <p><span class ="font-semibold">Date</span> : ${date}</p>
    `;
    historyCard.appendChild(newDiv);

    
    // calculate donate to donation balance added
    let donateBalance = document.getElementById(DonateId);
    let noakhaliDonateBalanceNum = parseFloat(donateBalance.innerText);
    donateBalance.innerText = inputValue + noakhaliDonateBalanceNum;
    
    // modal
    if(donateBalance.innerText = inputValue + noakhaliDonateBalanceNum){
        my_modal_5.showModal()

    }
    // if you donate remain the main balance function
    let myCurrentBalance = document.getElementById(myBalance);
    let myCurrentBalanceText = parseFloat(myCurrentBalance.innerText);
    myCurrentBalance.innerText = myCurrentBalanceText - inputValue;

    document.getElementById(inputField).value = '';
};




