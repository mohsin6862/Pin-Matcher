document.getElementById('pin-creator').addEventListener('click',function(){
   
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})


document.getElementById('calculator').addEventListener('click',function(event){

    // console.log(event.target.innerText);
    const number = event.target.innerText

    const displayNumperField = document.getElementById('display-number');
    const previousNumberField = displayNumperField.value;

    if(isNaN(number)){
        if(number == "C"){
            displayNumperField.value ='';
        }
        else if (number== '<'){

            const digits = previousNumberField.split('');
            digits.pop('');
            const remainingDigits = digits.join('');
            displayNumperField.value = remainingDigits;
        }


    }
    else{
        const newNumber = previousNumberField + number;
        displayNumperField.value =newNumber;
    }
})


document.getElementById('submit-btn').addEventListener('click',function(){
    console.log('I am alive')

    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const displayNumperField = document.getElementById('display-number');
    const currentDisplayPin = displayNumperField.value;

    const pinMatch = document.getElementById('correct');
    const pinDidNotMatch = document.getElementById('incorrect');

    if(currentPin === currentDisplayPin){

       pinMatch.style.display = 'block';
       pinDidNotMatch.style.display ='none';
    }
    else{
        pinDidNotMatch.style.display ='block';
        pinMatch.style.display = 'none';
       
       
    }
})