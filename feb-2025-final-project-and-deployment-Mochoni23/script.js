 document.addEventListener('DOMContentLoaded', function() {
            const navToggle = document.querySelector('.nav-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            navToggle.addEventListener('click', function() {
                // Toggle the active class on both the button and the menu
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
                
                // Update ARIA attributes for accessibility
                const isExpanded = navLinks.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded);
                this.setAttribute('aria-label', isExpanded ? 'Close navigation' : 'Open navigation');
            });
            
            // Close the menu when clicking on a link (for mobile)
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.setAttribute('aria-label', 'Open navigation');
                });
            });
            
            // Close the menu when clicking outside (for mobile)
            document.addEventListener('click', function(event) {
                if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
                    navToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.setAttribute('aria-label', 'Open navigation');
                }
            });
        });

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
