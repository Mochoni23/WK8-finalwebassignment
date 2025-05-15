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
                        navToggle.innerHTML = '✕'; // Close icon
                    } else {
                        navToggle.innerHTML = '☰'; // Hamburger icon
                    }
                });

                // Set hamburger icon on load
                navToggle.innerHTML = '☰';

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
        });
