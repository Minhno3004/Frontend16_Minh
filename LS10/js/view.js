ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let name = ELEMENT_FORM_INPUT_NAME.value
    let level = ELEMENT_FORM_INPUT_LEVEL.options[ELEMENT_FORM_INPUT_LEVEL.selectedIndex].text
    // let id   = ELEMENT_INPUT_ID.value ? ELEMENT_INPUT_ID.value : makeid(20)
    let id = ELEMENT_INPUT_ID.value
    if(ELEMENT_INPUT_ID.value){
        console.log('edit')
    }else{
        console.log('add')
    }
    arrData.push({id, name ,level})
    ShowData()
})
ShowData()