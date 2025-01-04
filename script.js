function addToCart() {
    alert('Product added to cart!');
}

// Handle newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    this.reset();
});

// Color selector functionality
const colorButtons = document.querySelectorAll('.color-btn');
const selectedColorText = document.getElementById('selected-color');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        colorButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update selected color text
        const color = button.dataset.color;
        selectedColorText.textContent = `Selected Color: ${color.charAt(0).toUpperCase() + color.slice(1)}`;
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 