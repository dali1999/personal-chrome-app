const clock = document.querySelector("#clock");
const ampm = document.querySelector("#clock-ampm");
const hours = new Date().getHours();

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}
getClock();
setInterval(getClock, 1000); //getClock 함수를 1초마다 반복

if (hours >= 12 && hours <= 23) {
  ampm.innerText = "오후";
} else {
  ampm.innerText = "오전";
}
