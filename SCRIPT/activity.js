// Example dynamic ride data
const rides = {
    active: [
      { name: "Royal Enfield Classic 350", time: "Today, 3:00 PM - 6:00 PM", status: "ongoing" },
      { name: "Hyundai i20 Sportz", time: "Today, 10:30 AM - 12:30 PM", status: "ongoing" }
    ],
    past: [
      { name: "Honda Activa 5G", time: "Yesterday, 10:00 AM - 11:00 AM", status: "completed" },
      { name: "Maruti Swift VXI", time: "2 days ago, 4:00 PM - 5:00 PM", status: "completed" },
      { name: "TVS Jupiter ZX", time: "Mar 12, 2024, 1:00 PM - 3:00 PM", status: "cancelled" },
      { name: "Mahindra XUV700", time: "Mar 10, 2024, 8:00 AM - 1:00 PM", status: "completed" }
    ]
  };
  
  // Function to create ride cards
  function createRideCard(ride) {
    const card = document.createElement('div');
    card.classList.add('class_oneonn_activity_card');
  
    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `<p>${ride.name}</p><p>${ride.time}</p>`;
  
    const status = document.createElement('span');
    status.classList.add('status', ride.status);
    status.textContent = ride.status.toUpperCase();
  
    card.appendChild(info);
    card.appendChild(status);
    return card;
  }
  
  // Render rides
  function renderRides() {
    const activeList = document.getElementById('id_oneonn_activity_activeList');
    const pastList = document.getElementById('id_oneonn_activity_pastList');
  
    rides.active.forEach(r => activeList.appendChild(createRideCard(r)));
    rides.past.forEach(r => pastList.appendChild(createRideCard(r)));
  }
  
  // Load data on page load
  document.addEventListener('DOMContentLoaded', renderRides);
  