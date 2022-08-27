const handleToggleForm = (open = true) => {
    if(open) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = 'CLOSE TASK'
    }else {
        ELEMENT_FORM_INPUT.setAttribute('hidden' , true)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#46b8da'
        ELEMENT_FORM_BUTTON.innerHTML = 'ADD TASK'
    }
}
// Show Data
const ShowData = () => {
    let xhtml = '';
    arrData.forEach((item , index) => {
        let id= item.id

        let itemLevel = item.level
        switch (itemLevel){
            case 'Small':
                itemLevel = `<span class="label label-danger" style="background-color: #5F9EA0">Small</span>`
                break;
            case 'Medium':
                itemLevel = `<span class="label label-danger" style="background-color: #EEE8AA">Medium</span>`
                break;
            case 'High':
                itemLevel = `<span class="label label-danger" style="background-color: #FF7F50">High</span>`
                break;
            default:
                break;
        }
        console.log(itemLevel)
        xhtml += `<tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center">${itemLevel}</td>
            <td>
                <button type="button" class="btn btn-warning" onclick="editItem('${id}')">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem('${id}')">Delete</button>
            </td>
        </tr>`
        
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}

//edit
const editItem = (id) => {
    let item = getItemById(id)
    handleToggleForm(true)
    showItemForm(item) 
}
const showItemForm = (item) =>{
    ELEMENT_FORM_INPUT_NAME.value       = item.name
    ELEMENT_INPUT_ID.value              = item.id
    ELEMENT_FORM_INPUT_LEVEL.value      = item.level
}
const getItemById =(id) =>{
    return arrData.find(item => item.id == id)
}    

//delete
// const deleteItem = (id) => {
//     deleteItemForm(item)
// }
// const deleteItemForm = (item) =>{
//     ELEMENT_INPUT_ID.value = splice(item.id,1)
// }

 


