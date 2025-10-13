const form = document.getElementById('loginForm');
const phoneInput = document.getElementById('phoneInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = phoneInput.value.trim();

  if (!/^[0-9]{10}$/.test(number)) {
    alert('Please enter a valid 10-digit mobile number');
    return;
  }

  // Simulate sending OTP or API call
  alert(`OTP sent to +91 ${number}`);
  
  // Example: redirect after validation
  window.location.href = "/otp.html";
});
