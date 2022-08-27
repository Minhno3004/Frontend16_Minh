secretNumber()
boxNumber()
ELEMENT_PLAY_BUTTON.addEventListener('click',function(){
    confirm('Do you want start new game??')
    numberSecret = secretNumber();
    console.log(numberSecret)
})

ELEMENT_REPLAY_BUTTON.addEventListener('click',function(){
    confirm('Do you want to replay??')
})

