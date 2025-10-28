document.addEventListener('DOMContentLoaded', function() {
    // Initial load animations
    function runInitialAnimations() {
        // Animate hero section elements with cascade effect
        const heroElements = [
            document.querySelector('.profile-img'),
            document.querySelector('.hero-text h1'),
            document.querySelector('.hero-text h2'),
            document.querySelector('.hero-text p'),
            document.querySelector('.hero-text .btn')
        ];

        heroElements.forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = element.classList.contains('profile-img') 
                    ? 'translateX(50px)' 
                    : 'translateY(30px)';
                element.style.transition = 'all 0.8s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translate(0)';
                }, 300 + (index * 200));
            }
        });
    }

    // Run initial animations after a short delay
    setTimeout(runInitialAnimations, 100);

    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    // Create observer for slide-in animations
    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Add slide-in animation to profile image
    const profileImage = document.querySelector('.profile-img');
    if (profileImage) {
        profileImage.classList.add('slide-from-right');
        animateOnScroll.observe(profileImage);
    }

    // Add fade-up animation to all cards
    const cards = document.querySelectorAll('.project-card, .skill-card, .service-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.1}s`; // Stagger animation
        animateOnScroll.observe(card);
    });
});
