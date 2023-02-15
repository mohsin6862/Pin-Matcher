function getPin(){

    const pin = generatePin();

    const pinString = pin+'';

    if(pinString.length === 4){

        return pin;
        
    }
    else{
        return getPin();
    }   
}

function generatePin (){
   
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;

    

}