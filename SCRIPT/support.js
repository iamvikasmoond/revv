const backBtn = document.getElementById('id_oneonn_support_backBtn');
const form = document.getElementById('id_oneonn_support_form');

backBtn.addEventListener('click', () => {
  window.history.back();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('id_oneonn_support_name').value.trim();
  const email = document.getElementById('id_oneonn_support_email').value.trim();
  const message = document.getElementById('id_oneonn_support_message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields before submitting.");
    return;
  }

  alert(`✅ Thanks, ${name}! Your message has been sent. We'll contact you soon.`);
  form.reset();
});
