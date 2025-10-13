const editBtn = document.getElementById('id_oneonn_profile_editBtn');
const logoutBtn = document.getElementById('id_oneonn_profile_logoutBtn');

editBtn.addEventListener('click', () => {
  alert('Profile editing feature will be available soon.');
});

logoutBtn.addEventListener('click', () => {
  const confirmLogout = confirm('Are you sure you want to log out?');
  if (confirmLogout) {
    alert('Logged out successfully!');
    window.location.href = 'index.html';
  }
});
