document.addEventListener('DOMContentLoaded', function() {
    // Plan toggle functionality
    const planButtons = document.querySelectorAll('.plan-toggle button');
    planButtons.forEach(button => {
        button.addEventListener('click', () => {
            planButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .price-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add mobile menu toggle
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-toggle');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    nav.insertBefore(menuButton, navLinks);
    
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Animate balance number
    const balanceValue = document.querySelector('.value');
    const targetValue = 9625.05;
    let currentValue = 0;
    
    const animateBalance = () => {
        const increment = targetValue / 100;
        if (currentValue < targetValue) {
            currentValue += increment;
            balanceValue.textContent = currentValue.toFixed(2);
            requestAnimationFrame(animateBalance);
        } else {
            balanceValue.textContent = targetValue.toFixed(2);
        }
    };
    
    animateBalance();

    // Subtle floating animation for iPhone mockup
    const mockup = document.querySelector('.iphone-frame');
    let floatY = 0;
    let floatDirection = 1;
    
    function animateFloat() {
        floatY += 0.1 * floatDirection;
        
        if (floatY > 10) floatDirection = -1;
        if (floatY < 0) floatDirection = 1;
        
        mockup.style.transform = `translateY(${-floatY}px)`;
        requestAnimationFrame(animateFloat);
    }
    
    animateFloat();

    // Waitlist form handling
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            
            // Animate the button
            const btn = e.target.querySelector('.waitlist-btn');
            btn.innerHTML = '<i class="fas fa-check"></i> Added to waitlist!';
            btn.style.backgroundColor = '#22c55e';
            btn.style.color = 'white';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                e.target.reset();
                btn.innerHTML = '<span>Join Waitlist</span><i class="fas fa-arrow-right"></i>';
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 2000);
            
            // Here you would typically send the email to your backend
            console.log('Email submitted:', email);
        });
    }

    // Feature navigation
    const featureItems = document.querySelectorAll('.feature-item');
    const appSections = document.querySelectorAll('.app-section');

    featureItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            featureItems.forEach(i => i.classList.remove('active'));
            appSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Show corresponding section
            const sectionId = item.dataset.section;
            document.getElementById(sectionId).classList.add('active');
        });
    });
}); 