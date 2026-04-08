const clock = document.querySelector("#clock");
const time = document.querySelector("#time");

setInterval(() =>{
    let date = new Date();
    // console.log(date.toLocaleDateString());
    clock.innerText = date.toLocaleDateString();
    time.innerHTML = date.toLocaleTimeString();
},1000);