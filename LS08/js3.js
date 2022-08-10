// var color;
// function myFunction(color){
//     const MY_ELEMENT = document.getElementById("box");
//     if (color) {
//         MY_ELEMENT.style.backgroundColor = color;
//         color = null;
//    } else {
//        color = MY_ELEMENT.style.backgroundColor;
//        MY_ELEMENT.style.backgroundColor = '#3E729F';
//    }
// }




const MY_ELEMENT = document.getElementById("box");
let clickCheck = false;
MY_ELEMENT.addEventListener('click',function() {
    console.log(clickCheck)
    clickCheck ? this.style.backgroundColor = 'blue' : this.style.backgroundColor = 'black'
    clickCheck= !clickCheck;
})