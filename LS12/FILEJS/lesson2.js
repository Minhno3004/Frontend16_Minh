let fontsize = 20
$(document).ready(function () {
  $('#up').click(function(){
    
    fontsize++
    $('#text').css('font-size', fontsize +'px')
  })
  $('#down').click(function(){
    fontsize--
    $('#text').css('font-size', fontsize +'px')
  })
  $('.clr').click(function(){
    let color = $(this).css('background-color');
    $('#text').css('color',color)
  })
})


