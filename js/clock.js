const clock = document.querySelector("h2#clock");
const currentDate = document.querySelector("#date")

function getClock(){
    const date = new Date();
    const years = String(date.getFullYear());
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    currentDate.innerText = `${years}년 ${month}월 ${day}일`;
}
getClock()
setInterval(getClock, 1000)