searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
  fadeOut();
}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}
ELEMENT_LIGHT_OFF.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    ELEMENT_LIGHT_OFF.src = "https://cdn.iconscout.com/icon/free/png-256/sun-187-161346.png";
  }
  else{
    ELEMENT_LIGHT_OFF.src = "https://cdn.iconscout.com/icon/free/png-256/moon-1716354-1461199.png";
  }
}

ELEMENT_LIKE.onclick = function(){
  
}