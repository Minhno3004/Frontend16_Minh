function random_color(){
    let color="#";
    let number=['FFFFFF','74992e','00FFFF','EEE8AA','ADFF2F','00FF7F','90EE90','CD5C5C']
    color+= number[Math.floor(Math.random()*number.length)]
    document.getElementById('change').style.background=color;
}