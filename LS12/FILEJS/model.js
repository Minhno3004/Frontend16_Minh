//find secret number
function secretNumber(){
    return Math.floor(1 + Math.random()*levelBox);
}


function boxNumber(){
    let playArea = '' ;
    for (let i = 1; i <= levelBox; i++){
        playArea += `<ol>
        <button ${numberSecret = '' ? false : 'onclick=gamePlay(' + i + ')'} class="number">${i}</button>
                    </ol>`                  
    }
    return ELEMENT_CB.innerHTML = playArea
}



function gamePlay(numberTarget){
    let target = ELEMENT_NUMBER[numberTarget - 1]
    if(n <= 3){
            if(numberTarget < numberSecret){         
                order--  
                // ELEMENT_NOTICE.removeAttribute('hidden')
                 ELEMENT_HP_POINT.innerHTML= "X" + order
                result = `<p class="answer">A wrong answer!!</br>
                <h5>
                ${n}. Your choice: ${target.innerText} is less than answer</h5>  
                </p>`
                arrData.push({item: result});                
            } 
            else if(numberTarget > numberSecret){
                // ELEMENT_NOTICE.removeAttribute('hidden')
                order--
                ELEMENT_HP_POINT.innerHTML= "X" + order
                result = `<p class="answer">A wrong answer!!</br>
                <h5>
                ${n}. Your choice: ${target.innerText} is greater than answer </h5>
                </p>`
                arrData.push({item: result});
            
            } else if(numberTarget == numberSecret) {
                // ELEMENT_CORRECT_NOTICE.removeAttribute('hidden')
                result = `<p class="correctResult">YOU DID IT!!!</br>
                <h5>${n}. You passed round.</h5>
                </br>
                <h2> THE SECRET NUMBER IS ${numberSecret} </h2>
                </p>`
                n=4;
                arrData.push({item: result});
            }   
            for (let k = 0; k < arrData.length; k++ ){
                var arrItem = arrData[k].item
            }
            
            }
    // if(  > 3){
    //     result = `<h2> THE SECRET NUMBER IS ${numberSecret} </h2>`
    //     arrData.push({item: result});
    // }
    ELEMENT_RESULT.innerHTML += arrItem
    n++
}


