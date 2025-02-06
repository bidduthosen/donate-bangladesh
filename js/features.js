function setContainerActiveBtn (id){
    document.getElementById('donation-contain-btn').classList.add('btn-outline');
    document.getElementById('history-contain-btn').classList.add('btn-outline');
    // remove class name
    document.getElementById(id).classList.remove('btn-outline')
}