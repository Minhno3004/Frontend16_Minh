
// let a = 1
// const setFunction = (a) => {
//      title='la so le'
//     if(a%2==0)  title="la so chan"
//     else if (isNaN(a)) title="khong phai la chu so"
// } 
// let result = setFunction(title)
// console.log('bien a '+title)

// let a ={name :'minh', age :19}
// let b={'minh',19} //------- k dùng .age------
// console.log(a.age);
// console.log(a['name']);


let a="xxx";
let b=9;
// for (let i=b;i <= b.length;i--){
//     let result
//     {
//         for ( let z=0;z <= b.length; z++)
//         shape=z+a
//     }
//     result+=result+shape 
// }
// console.log(result);


// for (let i = 0;i<=b;i++){
//     document.write(i+a+"<br>")
// }

for(let i = 0;i<=b;i++){
    let result="" 
    for(let j=i;j<=b;j++){
        result += j+a
        if(j==b) result= result.slice(0,-3)
    }
    result+= "<br>"
    document.write(result)
}