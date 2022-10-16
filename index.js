"use strict";
let countDownTime = 14 * 24 * 60 * 60;
const second = 1;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countdown = () => {
  let textDay = Math.floor(countDownTime / day);
  let textHour = Math.floor((countDownTime % day) / hour);
  let textMinute = Math.floor((countDownTime % hour) / minute);
  let textSecond = Math.floor((countDownTime % minute) / second);

  document.querySelector(".day").textContent = textDay =
    textDay < 10 ? `0${textDay}` : `${textDay}`;
  document.querySelector(".hour").textContent = textHour =
    textHour < 10 ? `0${textHour}` : `${textHour}`;
  document.querySelector(".minute").textContent = textMinute =
    textMinute < 10 ? `0${textMinute}` : `${textMinute}`;
  document.querySelector(".second").textContent =
    textSecond < 10 ? `0${textSecond}` : `${textSecond}`;
  countDownTime--;
};
setInterval(countdown, 1000);
