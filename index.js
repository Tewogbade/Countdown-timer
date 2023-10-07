"use strict";

const countDate = new Date("Dec 22 2023 12:00:00").getTime();

const getElement = (selector) => document.querySelector(selector);

const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

const updateCountdown = () => {
  const now = new Date().getTime();
  const countDownTime = countDate - now;

  if (countDownTime <= 1000) {
    getElement(".text-time").style.display = "none";
    getElement(".expired").textContent = "TIME HAS EXPIRED!";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(countDownTime / day);
  const textHour = Math.floor((countDownTime % day) / hour);
  const textMinute = Math.floor((countDownTime % hour) / minute);
  const textSecond = Math.floor((countDownTime % minute) / second);

  getElement(".day").textContent = formatTime(textDay);
  getElement(".hour").textContent = formatTime(textHour);
  getElement(".minute").textContent = formatTime(textMinute);
  getElement(".second").textContent = formatTime(textSecond);
};

setInterval(updateCountdown, 1000);
