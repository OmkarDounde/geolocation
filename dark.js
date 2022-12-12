const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')
    
}
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('maincontainer').style.opacity='0.7';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('maincontainer').style.opacity='1';
}
