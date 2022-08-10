let text = document.getElementById('text')
let idiom = [
    "figure something out",
    "leave no stone unturned",
    "bend over backwards",
    "call it a day",
]

    setInterval(function(){
        let random = Math.floor(Math.random()*4)
        document.getElementById("text").innerHTML = idiom[random];  
    },2000)
