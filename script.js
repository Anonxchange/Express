// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('statusMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = "Booking sent! (Mock)";
      form.reset();
    });
  }
});
