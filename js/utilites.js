

document.getElementById('donation-contain-btn').addEventListener('click', function(){
    setContainerActiveBtn('donation-contain-btn', 'donate-card');
});

document.getElementById('history-contain-btn').addEventListener('click', function(){
    setContainerActiveBtn("history-contain-btn", 'history-card');
});


// noakhali donate handlar
document.getElementById('flood-at-noakhali-btn').addEventListener('click', function(){
    // donate history card
    setInnerHtmlInHistory('donate-title', 'flood-at-noakhali-input-filed')
    
    getDonationBalanceSetById('flood-at-noakhali-input-filed', 'noakhali-donate-balance', 'my-balance');
});

// feni donate button
document.getElementById('feni-donate-btn').addEventListener('click', function(){
    // donate history card
    setInnerHtmlInHistory('feni-title', 'feni-input-field')

    getDonationBalanceSetById('feni-input-field', 'feni-donate-balance', 'my-balance')
    
})

// aid donate button
document.getElementById('aid-donate-btn').addEventListener('click', function(){
    // donate history card
    setInnerHtmlInHistory('aid-title', 'aid-donate-input-field')

    getDonationBalanceSetById('aid-donate-input-field', 'aid-donate-balance', 'my-balance')
    
})

