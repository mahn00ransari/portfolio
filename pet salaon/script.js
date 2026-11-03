// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close mobile menu when clicking a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// Interactive Booking Form Submission Handler
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    const owner = document.getElementById('ownerName').value;
    if(owner.trim() !== "") {
        successMessage.style.display = 'block';
        bookingForm.reset();
        
        // Hide confirmation message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
});