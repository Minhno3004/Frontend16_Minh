ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let name    = ELEMENT_FORM_INPUT_NAME.value
    let level   = ELEMENT_FORM_INPUT_LEVEL.value
    let id   = ELEMENT_INPUT_ID.value ? ELEMENT_INPUT_ID.value : makeid(20)

    let item = {id, name, level}
    // if(!name.trim())
    // if(id == ''){
    //     confirm('Give me information')
    //     return 
    //  }
    if( ELEMENT_INPUT_ID.value ===''){
         addData(item)
         alert('addsasdad')
         
    }else{
        alert('yes')
         editedItem(item)
    }
    showData()
    handleToggleForm(false)
})
arrData = getItemLocal()
showData()
console.log(ELEMENT_INPUT_ID.value)