const btn1 = () => {
    let value1 = parseInt(document.getElementById("input1").value)
    let value2 = parseInt(document.getElementById("input2").value)
    let div=document.getElementById("div")
   let h1=document.getElementById("h1")
       let  value3=value1+value2;
        h1.innerText=value3;
       
}
const btn2 = () => {
    let value1 = parseInt(document.getElementById("input1").value)
    let value2 = parseInt(document.getElementById("input2").value)
    let div=document.getElementById("div")
   let h1=document.getElementById("h1")
       let value3=value1-value2;
        h1.innerText=value3;
       
}
const btn3 = () => {
    let value1 = parseInt(document.getElementById("input1").value)
    let value2 = parseInt(document.getElementById("input2").value)
    let div=document.getElementById("div")
   let h1=document.getElementById("h1")
       let  value3=value1*value2;
        h1.innerText=value3;
       
}
const btn4 = () => {
    let value1 = parseInt(document.getElementById("input1").value)
    let value2 = parseInt(document.getElementById("input2").value)
    let div=document.getElementById("div")
   let h1=document.getElementById("h1")
       let  value3=value1/value2;
        h1.innerText=value3;
       
}