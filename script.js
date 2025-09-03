document.addEventListener('DOMContentLoaded', function() {

    // --- Accordion Functionality for Modules Section ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Check if the clicked item is already active
            const isActive = header.classList.contains('active');

            // Close all items first for a classic accordion feel
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                header.classList.add('active');
                const content = header.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- Animate elements on scroll ---
    // This adds a subtle fade-in effect as you scroll down the page.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animation');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Add 'hidden-animation' class to elements you want to animate in CSS
    const elementsToAnimate = document.querySelectorAll('.content-section > *, .highlight-item, .detail-card, .testimonial-card, .founder-card, .enroll-container > *');
    
    // Create the initial animation state in CSS (optional but good practice)
    const style = document.createElement('style');
    style.innerHTML = `
        .hidden-animation {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .show-animation {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden-animation');
        observer.observe(el);
    });

});
