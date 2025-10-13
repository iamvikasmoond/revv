const backBtn = document.getElementById('id_oneonn_booking_backBtn');
const confirmBtn = document.getElementById('id_oneonn_booking_confirmBtn');

// Go back to previous page
backBtn.addEventListener('click', () => {
  window.history.back();
});

// Confirm booking action
confirmBtn.addEventListener('click', () => {
  alert("✅ Your booking has been confirmed!");
  window.location.href = "activity.html";
});
