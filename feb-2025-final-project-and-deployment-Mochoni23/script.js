document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu when hamburger is clicked
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Change hamburger icon based on menu state
            if (navLinks.classList.contains('active')) {
                this.innerHTML = '✕'; // Close icon
            } else {
                this.innerHTML = '☰'; // Hamburger icon
            }
        });

        // Close menu when clicking on a nav link (for mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    navToggle.innerHTML = '☰';
                }
            });
        });
    }

    // Add scroll effect to navbar
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                nav.style.boxShadow = 'none';
            }
        });
    }
});

// Form Validation
const orderForm = document.getElementById("gasOrderForm");
if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const cylinder = document.getElementById("cylinder").value;
        const delivery = document.getElementById("delivery").value;

        if (!name || !phone || !cylinder || !delivery) {
            alert("Please fill all fields!");
            return;
        }

        if (phone.length < 10 || (!phone.startsWith("07") && !phone.startsWith("01"))) {
            alert("Please enter a valid Kenyan phone number!");
            return;
        }

        alert(`Order placed! We'll call you on ${phone} to confirm.`);
        this.reset();
    });
}
