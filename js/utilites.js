
document.getElementById('donation-contain-btn').addEventListener('click', function(){
    setContainerActiveBtn('donation-contain-btn')
});

document.getElementById('history-contain-btn').addEventListener('click', function(){
    setContainerActiveBtn("history-contain-btn")
});


// noakhali donate handlar
document.getElementById('flood-at-noakhali-btn').addEventListener('click', function(){
    getDonationBalanceSetById('flood-at-noakhali-input-filed', 'noakhali-donate-balance', 'my-balance')
    
});

// feni donate button
document.getElementById('feni-donate-btn').addEventListener('click', function(){
    getDonationBalanceSetById('feni-input-field', 'feni-donate-balance', 'my-balance')
    
})
// aid donate button
document.getElementById('aid-donate-btn').addEventListener('click', function(){
    getDonationBalanceSetById('aid-donate-input-field', 'aid-donate-balance', 'my-balance')
    
})

