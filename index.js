"use strict";
const countDate = new Date("Oct 30 2022 12:00:00").getTime();

const countDown = () => {
  const now = new Date().getTime();
  const countDownTime = countDate - now;
  if (countDownTime <= 1000) {
    document.querySelector(".text-time").style.display = "none";
    document.querySelector(".expired").textContent = "TIME HAS EXPIRED!";
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let textDay = Math.floor(countDownTime / day);
  let textHour = Math.floor((countDownTime % day) / hour);
  let textMinute = Math.floor((countDownTime % hour) / minute);
  let textSecond = Math.floor((countDownTime % minute) / second);

  document.querySelector(".day").textContent =
    textDay < 10 ? `0${textDay}` : `${textDay}`;
  document.querySelector(".hour").textContent =
    textHour < 10 ? `0${textHour}` : `${textHour}`;
  document.querySelector(".minute").textContent =
    textMinute < 10 ? `0${textMinute}` : `${textMinute}`;
  document.querySelector(".second").textContent =
    textSecond < 10 ? `0${textSecond}` : `${textSecond}`;
};
setInterval(countDown, 1000);
