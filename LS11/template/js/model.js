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

arrData = getItemLocal()
// Show Data
const showData = () => {
    let xhtml = '';
    arrData.forEach((item , index) => {
        console.log(arrData)
        xhtml += ` <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center"><span class="label label-danger">High</span></td>
            <td>
                
                <button type="button" class="btn btn-warning"  onclick="editItem('${item.id}')" >Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem('${item.id}')" >Delete</button>
            </td>
        </tr>`
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}
// Delete
const deleteItem = (id) => {
    if (confirm("Do you want to delete this task") == true) {
        console.log(id)
      } else {
        return false
      }
    // tìm biến trong object => lấy phần tử trong object 
    let editItem = arrData.find(editItem => editItem.id = id)
    //tìm vị trí của id
    let index = arrData.indexOf(editItem)
    arrData.splice(index,1)    
    // arrData = arrData.filter(editItem => editItem.id = id)
    showData()
}

// Create Id
const makeid = (length) =>  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *    charactersLength));
   }
   return result;
}

// add
const addData =(item) => { 
    arrData.push(item)
    setItemLocal()
}
// chỉnh sửa item
const editItem= (id) => {
    handleToggleForm    ()
    let itemEdited = arrData.find(It => It.id == id)
    ELEMENT_FORM_INPUT_NAME.value = itemEdited.name
    ELEMENT_FORM_INPUT_LEVEL.value= itemEdited.level
    ELEMENT_INPUT_ID.value = itemEdited.id
}
const editedItem = (item) => {
    arrData = arrData.map(i =>{
        return i.id === item.id ? item : i
    })
    console.log(arrData)
    alert('edit')
    setItemLocal()
    showData()
}
const setItemLocal = () => {
    localStorage.setItem("keyItem", JSON.stringify(arrData))
}
const getItemLocal = () =>{
    let items = JSON.parse(localStorage.getItem('keyItem'))
    items = items ? items : []
    return items
}







 


