const collection = document.getElementsByClassName("box");
console.log(collection)
let maxHeight=0;
for(let i = 0; i < collection.length; i++){
    let number = collection[i].offsetHeight;
    if(maxHeight < number){
        maxHeight = number
    } else{
        maxHeight= maxHeight;
    }
}
for(let j = 0; j < collection.length; j++){
    collection[j].style.height=maxHeight + 'px';
    let color = j%2 ==0 ? 'red' : 'yellow'
    collection[j].style.backgroundColor = color
}

