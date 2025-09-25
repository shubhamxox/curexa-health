document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the 'active' class on the clicked item
            item.classList.toggle('active');

            // Find the answer and toggle its display
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

    // Simple Order Form submission
    const orderForm = document.getElementById('orderForm');
    const formStatus = document.getElementById('formStatus');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // You would typically send this data to a server here.
        // For this example, we'll just show a success message.

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const orderDetails = document.getElementById('orderDetails').value;

        // Simulate a successful submission
        formStatus.textContent = `Thank you, ${fullName}! Your request has been sent. We will contact you soon.`;
        formStatus.style.color = 'green';
        formStatus.style.display = 'block';
        
        // Clear the form
        orderForm.reset();

        // Hide the message after a few seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    });
});
