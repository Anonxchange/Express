// Wait until the page has loaded
document.addEventListener('DOMContentLoaded', () => {
  const bookButton = document.querySelector('button');

  bookButton.addEventListener('click', () => {
    alert('Booking feature coming soon...');
    
    // Later: redirect to booking page or open booking modal
    // window.location.href = "/book.html";
  });
});
