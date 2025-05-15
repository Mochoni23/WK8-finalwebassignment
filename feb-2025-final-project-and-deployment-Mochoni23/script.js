
 

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
