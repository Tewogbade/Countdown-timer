"use strict";

const countDate = new Date("JUNE 24 2026 18:45:00").getTime();

const getElement = (selector) => document.querySelector(selector);

const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

const updateCountdown = () => {
  const now = new Date().getTime();
  const countDownTime = countDate - now;

  if (countDownTime <= 1000) {
    getElement(".text-time").style.display = "none";

    getElement(".expired").innerHTML = `
      <p>My Baby Is With Me! 🥰</p>
  
      <p style="font-size: 0.9rem; max-width: 700px; margin: 20px auto; line-height: 1.7;">
        For weeks I've been counting down to this moment. Not because I wanted a date on a calendar to arrive, but because it meant I would get to be with you again.
        <br><br>
        Thank you for every call, every late-night conversation, every bit of patience, and every effort you've put into us.
        <br><br>
        Today I don't have to imagine your smile or hear your voice through a speaker. You're finally here.
       
        <br><br>
        I've missed you more than words can properly explain. ❤️
      </p>
    `;

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
