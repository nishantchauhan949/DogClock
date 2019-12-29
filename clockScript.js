let heading = document.getElementById("heading");
let div2 = document.getElementById("div2");
div2.appendChild(heading);
"use strict"
function startTime() {

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = timeCheck(hours);
    minutes = timeCheck(minutes);
    seconds = timeCheck(seconds);

    heading.innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime);
}

function timeCheck(t){
    if(t < 10){
        t = "0" + t;
    }
    return t;
}