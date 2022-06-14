const dayEl = document.getElementById("jDay")
const hourEl = document.getElementById("jHour")
const minEl = document.getElementById("jMin")
const secEl = document.getElementById("jSec")

const newYear = "1 aug 2022"

function countdowm(){
    const newYeaqrDatte = new Date(newYear)
    const curDatr=new Date();

    const totSec =  (newYeaqrDatte-curDatr) /1000;

    const days=Math.floor(totSec/3600/24)
    const hr =Math.floor(totSec/3600)%24;
    const min =Math.floor(totSec/60)%60;
    const sec =Math.floor(totSec)%60;

    dayEl.innerHTML=days
    hourEl.innerHTML=hr
    minEl.innerHTML=min
    secEl.innerHTML=sec
}

countdowm();

setInterval(countdowm,1000)