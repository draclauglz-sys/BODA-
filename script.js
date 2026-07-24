// Fecha de la boda: 6 noviembre 2026 - 19:00 hora de Cancún (UTC-5)
const weddingDate = new Date('2026-11-06T19:00:00-05:00').getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');

function animate(el, value) {
  if (el.textContent === value) return;
  el.classList.add('update');
  setTimeout(() => {
    el.textContent = value;
    el.classList.remove('update');
  }, 150);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    daysEl.textContent = '000';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    messageEl.innerHTML = '✨ Hoy comienza nuestra nueva historia ✨';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  animate(daysEl, String(days).padStart(3, '0'));
  animate(hoursEl, String(hours).padStart(2, '0'));
  animate(minutesEl, String(minutes).padStart(2, '0'));
  animate(secondsEl, String(seconds).padStart(2, '0'));

  // Mensajes dinámicos
  if (days <= 7) {
    messageEl.textContent = 'Muy pronto celebraremos juntos este momento tan especial.';
  } else if (days <= 30) {
    messageEl.textContent = 'La emoción ya comienza a sentirse cada día más cerca.';
  } else if (days <= 100) {
    messageEl.textContent = 'Ya falta menos de 100 días para nuestro gran día.';
  } else {
    messageEl.textContent = 'Cada instante nos acerca al comienzo de nuestra nueva historia.';
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
