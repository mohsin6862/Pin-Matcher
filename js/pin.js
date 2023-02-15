document.getElementById('pin-creator').addEventListener('click',function(){
   
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})