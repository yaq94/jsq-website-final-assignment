document.addEventListener('DOMContentLoaded', () => {

    const flavorCompass = document.querySelector('.flavor-compass');
    const compassLinks = document.querySelectorAll('.flavor-compass li');
    const culinaryChapters = document.querySelectorAll('.culinary-chapter');
    const recipeToggles = document.querySelectorAll('.recipe-toggle');

    if (!flavorCompass) return;

    // --- 1. Flavor Compass Sticky Logic & Smooth Scrolling ---
    const handleCompassClick = (e) => {
        const targetLi = e.target.closest('li');
        if (!targetLi) return;

        const category = targetLi.dataset.category;
        
        // Remove active class from all links
        compassLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked one
        targetLi.classList.add('active');

        if (category === 'all') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetChapter = document.querySelector(`.culinary-chapter[data-category="${category}"]`);
            if (targetChapter) {
                const targetTop = targetChapter.offsetTop - 80; // Adjust for sticky header/nav height
                window.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    flavorCompass.addEventListener('click', handleCompassClick);


    // --- 2. Scroll-based animations (Fade-in chapters and update compass) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // 40% of the element must be visible
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in the chapter
                entry.target.classList.add('visible');
                
                // Update the active state of the compass
                const currentCategory = entry.target.dataset.category;
                compassLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.category === currentCategory);
                });

            } else {
                // Optional: fade out when scrolling out of view
                // entry.target.classList.remove('visible'); 
            }
        });
    }, observerOptions);

    culinaryChapters.forEach(chapter => {
        intersectionObserver.observe(chapter);
    });
    
    // --- 3. "Recipe Toggle" functionality ---
    const handleRecipeToggle = (e) => {
        const button = e.target;
        const targetId = button.dataset.target;
        const recipeContent = document.getElementById(targetId);

        if (recipeContent) {
            const isOpened = recipeContent.classList.contains('open');
            
            if (isOpened) {
                recipeContent.classList.remove('open');
                button.textContent = '一窥庖厨';
            } else {
                // Optional: Close any other open recipes
                // document.querySelectorAll('.recipe-content.open').forEach(rc => rc.classList.remove('open'));
                // document.querySelectorAll('.recipe-toggle').forEach(btn => btn.textContent = '一窥庖厨');

                recipeContent.classList.add('open');
                button.textContent = '收起菜谱';
            }
        }
    };

    recipeToggles.forEach(toggle => {
        toggle.addEventListener('click', handleRecipeToggle);
    });

}); 