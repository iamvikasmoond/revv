const bikeBtn = document.getElementById('id_oneonn_home_bikeBtn');
const carBtn = document.getElementById('id_oneonn_home_carBtn');
const helpBtn = document.getElementById('id_oneonn_home_helpBtn');
const notifyBtn = document.getElementById('id_oneonn_home_notifyBtn');

bikeBtn.addEventListener('click', () => {
  bikeBtn.classList.add('active');
  carBtn.classList.remove('active');
});

carBtn.addEventListener('click', () => {
  carBtn.classList.add('active');
  bikeBtn.classList.remove('active');
});

helpBtn.addEventListener('click', () => {
  window.location.href = 'support.html';
});

notifyBtn.addEventListener('click', () => {
  window.location.href = 'notification.html';
});

document.querySelectorAll('.class_oneonn_home_bookbtn').forEach(btn => {
  if (!btn.classList.contains('disabled')) {
    btn.addEventListener('click', () => {
      alert('Booking page will open soon!');
      window.location.href = 'booking.html';
    });
  }
});
