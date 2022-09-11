    fetch('http://apiforlearning.zendvn.com/api/get-gold')
    .then(function(response){
        return response.json()
    })
    .then(function(post){
        let xhtml='';
        data.map(item =>{
            xhtml+= `
            <ol>${item.type}</ol>
            <ol>Giá gốc</ol>
            <ol>Giá bán</ol>
            `
        };

    })

function showData()

// async function showData(){
//     let link ="http://apiforlearning.zendvn.com/api/get-gold"
//     let res = await fetch(url);
//     let data =  await res.json();
// }
// showData()

// $(document).ready(function (){

// $.ajax({
//     type: "get",
//     url: "http://apiforlearning.zendvn.com/api/get-gold",
//     dataType: "json",
//     success: function (response) {
//         console.log(response)
//     }
// });
// })