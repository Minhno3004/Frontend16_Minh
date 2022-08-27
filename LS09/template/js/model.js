let data=[]

function add(){
    let item_content = document.getElementById("taskContent").value;
    let item_level   = document.getElementById("buttonLevel").value;
    let item_id      = document.getElementById("render").childElementCount;
    let item={  
        id: item_id,    
        task: item_content,
        level: item_level,
    }
    data.push(item)
    render()
    clear()
}
function resetForm(){
    ELEMENT_FORM_BUTTON.value = ""
    ELEMENT_FORM_INPUT.value  = ""
}
function render(){
    table= `<thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%" class="text-center">Level</th>
                    <th style="width: 20%">Action</th>        
                </tr>
            </thead>`
for(let i=0; i<data.length;i++){
    table+=`<thead>
                <tr>
                    <th style="width: 10%" class="text-center">${i+1}</th>
                    <th>${data[i].task}</th>
                    <th style="width: 20%" class="text-center">${data[i].level}</th>
                    <td style="width: 20%">
                    <button type="button" class="btn btn-warning" onclick="editItem(${data[i].id})" >Edit</button>
                    <button type="button" class="btn btn-danger" onclick="deleteItem(${data[i].id})">Delete</button>
                    </td>
                </tr>
            </thead>`
}
document.getElementById("render").innerHTML=table
}





