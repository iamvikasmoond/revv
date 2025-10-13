const inputs = document.querySelectorAll('.class_oneonn_otp_input');
const verifyBtn = document.getElementById('id_oneonn_otp_verifyBtn');
const resendBtn = document.getElementById('id_oneonn_otp_resend');

// Auto-focus first input when page loads
window.addEventListener('load', () => {
  inputs[0].focus();
});

// Handle typing and backspace
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, ''); // only digits
    e.target.value = value;

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    // Move focus to Verify if filled
    const otp = Array.from(inputs).map(i => i.value).join('');
    if (otp.length === inputs.length) {
      verifyBtn.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });

  // Handle paste event (auto-fill)
  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pasted)) {
      pasted.split('').forEach((num, i) => {
        if (inputs[i]) inputs[i].value = num;
      });
      verifyBtn.focus();
    }
  });
});

// Verify OTP (temporary logic)
verifyBtn.addEventListener('click', () => {
  const otp = Array.from(inputs).map(i => i.value).join('');

  if (otp.length !== 6) {
    alert('Please enter the full 6-digit OTP');
    return;
  }

  if (otp === '000009') {
    alert('✅ OTP verified successfully!');
    window.location.href = 'home.html';
  } else {
    alert('❌ Incorrect OTP. Please try again.');
    inputs.forEach(i => (i.value = ''));
    inputs[0].focus();
  }
});

// Resend OTP event
resendBtn.addEventListener('click', () => {
  resendBtn.textContent = 'OTP Sent Again ✅';
  resendBtn.style.color = '#333';
  setTimeout(() => {
    resendBtn.textContent = 'Resend OTP';
    resendBtn.style.color = '#b38b00';
  }, 4000);
});
