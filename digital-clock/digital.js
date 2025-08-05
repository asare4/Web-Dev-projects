let hrs = document.getElementById("hrs")
let sec = document.getElementById("sec")
let min = document.getElementById("min")

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    sec.innerHTML =(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    min.innerHTML =(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
},1000)

