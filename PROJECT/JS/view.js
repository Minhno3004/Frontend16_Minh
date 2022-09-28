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
  // document.querySelector('.loader-container').classList.add('active');
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

ELEMENT_CART_ICON.onclick = () => {
  ELEMENT_CART.classList.add("active");
  updateTotal()
};
ELEMENT_CLOSE_CART.onclick = () => {
  ELEMENT_CART.classList.remove("active");
};
ELEMENT_REMOVE_CART_BUTTON_Q.onclick = () => {
  ELEMENT_CART_CONTENT.setAttribute('hidden',true);
  updateTotal()
};

// if(document.readyState == "loading"){
//   document.addEventListener("DOMContentLoaded", ready);
// }else{
//   ready();
// }

// function ready(){
//   // console.log(ELEMENT_REMOVE_CART_BUTTON);
//   // for(var k=0; k < ELEMENT_REMOVE_CART_BUTTON.length[k]; k++){
//   //   var button = ELEMENT_REMOVE_CART_BUTTON[k]
//   //   button.addEventListener('click', removeCartItem)
//   // }
// }

// function removeCartItem(event){
//   // var buttonClicked = event.target;
//   // buttonClicked.parentElement.remove();
// }

fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => {
    data.map(function (book,index){
      let render = ''
      let swiper = ''
      render = `
           <div class="read">
            <img id="book-info" class="${i+1}" src="${book.image}">
            <p class="${i+1}">${book.title}</p>
            <p class="${i+1}">${book.author}</p>  
      
      </div>`
      i++
      ELEMENT_SWIPER.innerHTML += swiper
      ELEMENT_READ_CLICK.innerHTML += render 
      ELEMENT_BOOK_INFOR.innerHTML = render
    })
})

// fetch('http://localhost:3000/posts')
//   .then(response => response.json())
//   .then(swp => {
//     swp.map(function (swip,index){
//       let swiper = ''
//       swiper =`
//           <img src="${swip.image}" alt="">
//       `
//       ELEMENT_SWIPER_IMAGE.innerHTML = swiper
//     })
// })
function updateTotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (let x = 0; x < cartBoxes.length; x++){
    var cartBox = cartBoxes[x];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}
for (let p = 0; p < ELEMENT_QUANTITY_INPUT.length; p++){
  var input = ELEMENT_QUANTITY_INPUT[p];
  input.addEventListener("change", quantityChange)
}
function quantityChange(){
  if(isNaN(input.value) || input.value <= 0 ){
    input.value = 1;
  }
  updateTotal();
}
ELEMENT_READ_CLICK.addEventListener('click', function () {
  handleInforForm(toggleInfo)
  toggleInfo = !toggleInfo
})
const handleInforForm = (read = true) => {
  if(read){
    ELEMENT_OVERLAY.removeAttribute('hidden')
  }
}

ELEMENT_CLOSE.addEventListener('click',function(){
  handleCloseForm(toggleCloseForm)
  toggleCloseForm = !toggleCloseForm
})
const handleCloseForm = (times = true) => {
  if(times){
    ELEMENT_OVERLAY.setAttribute('hidden', true)
  }
}

ELEMENT_CONTACT.addEventListener('click', function () {
  handleToggleForm(toggleForm)
  toggleForm = !toggleForm
})
const handleToggleForm = (open = true) => {
  if(open) {
      window.location.assign('https://formsubmit.co/el/yuhohe');
      // ELEMENT_CONTACT_FORM.removeAttribute('hidden')
  }else {
      ELEMENT_CONTACT_FORM.setAttribute('hidden' , true)
  }
}



// function sendEmail(){
//   var name=document.getElementById("name").value;
//   var email = document.getElementById('email').value;
//   var message= document.getElementById('message').value;
//   console.log(name)
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "2151040044@ut.edu.vn",
//     Password : "vopiknehcoloslxo",
//     To : "2151040044@ut.edu.vn",
//     From: email,
//     Subject : "New Contact",
//     Body: "Name: " + name
//     + "<br> Email: " + email
//     + "<br> Message: " + message
//   }).then(
//     message => alert("Sent succesfully")
//   );
// }