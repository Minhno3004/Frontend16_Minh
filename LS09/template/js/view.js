
ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    if (toneForm){
         ELEMENT_FORM_INPUT.removeAttribute('hidden')
         ELEMENT_FORM_BUTTON.style.backgroundColor = 'salmon';
         ELEMENT_FORM_BUTTON.innerHTML ='Close Task'
    }
   else{
         ELEMENT_FORM_INPUT.setAttribute('hidden',true)
         ELEMENT_FORM_BUTTON.style.backgroundColor = 'blue';
         ELEMENT_FORM_BUTTON.innerHTML ='Add Task'
    }
    toneForm = !toneForm
 });

 
function clear(){
     item_id.value=""
     item_content.value=""
     item_level.value=""
 }
 
 
 function deleteItem(x){
     for( i=0; i <= table.length; i++){
          
         if(data[i].id ==x){
            confirm("Are u sure ???")
             data.splice(i,1)
             render()
         }
     }
 }

 function editItem(x){
     for( i=0; i <= table.length; i++){
         if(data[i].id ==x){
             item_id= data[i].id
             item_content= data[i].task
             item_level= data[i].level
             render()
         }
     }
 }

// function itemBackground(){
//      switch(item_level){
//           case "Small":
//                item_level.style.backgroundColor = "gray"
//           case "Medium":
//                item_level.style.backgroundColor = "blue"
//           case "High":
//                item_level.style.backgroundColor = "red"
// }
// }