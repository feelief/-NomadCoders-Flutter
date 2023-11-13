const clock = document.querySelector("#clock");
const calender = document.querySelector("#calender")

function setCalender() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    calender.innerText = `${year}.${month}.${day}`;
}

function setClock() {
    const today = new Date();
    const second = String(today.getSeconds()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    const hour = String(today.getHours()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

setCalender();
setClock();

setInterval(setClock, 1000);