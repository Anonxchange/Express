// Supabase credentials
const SUPABASE_URL = 'https://qvejdphjapcthwtbfaqp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2ZWpkcGhqYXBjdGh3dGJmYXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDM3OTUsImV4cCI6MjA2ODUxOTc5NX0.LRUES1mOeP3N-acdWYQ3v26hWx_0o0y11FP_TAE9cyg';

// Initialize Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const pickup = document.getElementById('pickup').value;
  const destination = document.getElementById('destination').value;

  const { data, error } = await supabase.from('bookings').insert([
    { name, phone, pickup, destination }
  ]);

  if (error) {
    alert('❌ Booking failed: ' + error.message);
  } else {
    alert('✅ Booking successful!');
    document.getElementById('bookingForm').reset();
  }
});
