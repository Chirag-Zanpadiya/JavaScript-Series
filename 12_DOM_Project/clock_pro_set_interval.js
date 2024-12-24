
setInterval(function(){
    let date = new Date();
    console.log(date.toLocaleTimeString());    
    let clock = document.querySelector("#clock");
    clock.innerHTML = `${date.toLocaleTimeString()}`
},1000);