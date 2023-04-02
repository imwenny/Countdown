'use strict';

const digitFormat = (digit) => `0${digit}`.slice(-2);

document.addEventListener('DOMContentLoaded', ()=>{
  const timeUpdate = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const qtdSeconds = time % 60;
    const qtdMinutes = Math.floor((time % (60 * 60)) / 60);
    const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const qtdDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = digitFormat(qtdSeconds);
    minutes.textContent = digitFormat(qtdMinutes);
    hours.textContent = digitFormat(qtdHours);
    days.textContent = digitFormat(qtdDays);
  }

  const stopCounting = () => clearInterval(id);
  const regressiveCountdown = (time) => {

    const count = () => {
      if(time === 0){
        stopCounting();
      }
      timeUpdate (time)
      time--;
    }
    const id = setInterval(count,1000);
  }

  const timeLeft = () => {
    const eventDate = new Date ('2023-04-12 20:00:00');
    const today = Date.now();
    return Math.floor((eventDate - today) / 1000);
  }

  regressiveCountdown(timeLeft());
})
