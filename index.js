const output = document.querySelector('.output');
const button = document.querySelector('button');
// output.setAttribute("style", "color:red; width: 200px, height: 100px;")
output.style.cssText = "color: white; width: 200px; height: 100px; text-align: center;"
// const myName = document.querySelector('input');

// button.addEventListener("click", showMessage);

// function showMessage(){
//     output.innerHTML = `Welcome, ${myName.value}`
// }

button.addEventListener("click", showOutput);

function showOutput(){
const date = new Date();
let cur = date.getHours();
cur = 8;
let message;
if(cur > 17){
    message = "its evening";
    output.style.backgroundColor = "black";
} else if (cur > 12){
    message = "its afternoon";
    output.style.backgroundColor = "blue";
} else if (cur > 0){
    message = "its morning";
    output.style.backgroundColor = "orange";
} else {
    message = "Something is wrong";
    output.style.backgroundColor = "red";
}
 output.innerHTML = "<h1>"+message+"</h1"
}