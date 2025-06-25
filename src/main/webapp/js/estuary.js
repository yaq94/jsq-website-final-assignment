// Estuary page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Estuary page V2.0 JS loaded');

    // Main initialization function
    function initEstuaryPage() {
        initAccordion();
        initScrollNarrative();
        initSmoothScroll();
    }

    // 1. Initialize Accordion for Visitor Guide
    function initAccordion() {
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                const content = item.querySelector('.accordion-content');
                
                // Close other open items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
    }

    // 2. Initialize Scroll-driven animation for Narrative section
    function initScrollNarrative() {
        const narrativeContainer = document.querySelector('.scroll-narrative');
        const cards = document.querySelectorAll('.narrative-card');
        if (!narrativeContainer || cards.length === 0) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    // Optional: remove class when it scrolls out of view if you want it to re-animate
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, { 
            rootMargin: '0px',
            threshold: 0.4 // Card becomes visible when 40% is in view
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // 3. Initialize Smooth Scroll for Hero button
    function initSmoothScroll() {
        const scrollBtn = document.querySelector('.scroll-down-btn');
        if (!scrollBtn) return;

        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Run initialization
    initEstuaryPage();
}); 