document.addEventListener('DOMContentLoaded', () => {

    // --- Global: Header Scroll Behavior ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Global: Theme Toggler ---
    const themeToggleButton = document.querySelector('.theme-toggle-btn');
    if (themeToggleButton) {
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);

        themeToggleButton.addEventListener('click', () => {
            let newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // --- Global: Intersection Observer for fade-in animations ---
    const animatedElements = document.querySelectorAll('.fade-in, .timeline-item, .wisdom-card, .scroll-reveal-item');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // --- Page Specific Initializers ---
    if (document.querySelector('.interest-buttons')) initInterestNavigator();
    if (document.querySelector('.image-gallery')) initLightbox();
    if (document.querySelector('.tabs')) initTabs();
    if (document.querySelector('.timeline')) initTimeline();
    if (document.querySelector('.slider')) initSlider();
    if (document.querySelector('.dish-gallery')) initFilterableGallery();
    if (document.getElementById('guestbook-form-v3')) initGuestbookV3();

    // 检查页面上是否存在新版首页的特定元素，如果存在，则初始化
    if(document.querySelector('.hero-dynamic')) {
        initIndexPageV2();
    }

    // --- V2.0 - Estuary Page Initializer ---
    if(document.querySelector('.hero-video-section')) {
        initEstuaryPageV2();
    }

});

// --- V3 - Index: Interest Navigator ---
function initInterestNavigator() {
    const nav = document.getElementById('interest-navigator');
    if(!nav) return;
    const sections = document.querySelectorAll('.nav-section');

    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
                nav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                e.target.classList.add('active');
            }
        }
    });
}

// --- V3 - Estuary: River & Sea Scroll ---
function initRiverSeaScroll() {
    const container = document.getElementById('river-sea-scroll-container');
    if(!container) return;
    const content = document.querySelector('.river-sea-scroll-content');
    
    window.addEventListener('scroll', () => {
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollableWidth = content.offsetWidth - window.innerWidth;

        if (window.scrollY > containerTop && window.scrollY < containerTop + containerHeight - windowHeight) {
            let scrollProgress = (window.scrollY - containerTop) / (containerHeight - windowHeight);
            let newX = -scrollableWidth * scrollProgress;
            content.style.transform = `translateX(${newX}px)`;
        }
    });
}

// --- V3 - Sun Tzu: Wisdom Scroll ---
function initWisdomScroll() {
    console.log("Wisdom Scroll Initialized (Observer-driven).");
}


// --- V3 (Placeholder) - Oil City: Data Driven Timeline ---
function initDataDrivenTimeline() {
    console.log("Data Driven Timeline Initialized (Placeholder).");
}

// --- V3 (Placeholder) - Wetland: Four Seasons Slider ---
function initFourSeasonsSlider() {
    console.log("Four Seasons Slider Initialized (Placeholder).");
}

// --- V3 - Cuisine: Flavor Map ---
function initFlavorMap() {
    const svgMap = document.getElementById('cuisine-map');
    const tooltip = document.getElementById('map-tooltip');
    const contentColumn = document.querySelector('.cuisine-content-column');

    if (!svgMap || !tooltip || !contentColumn) return;
    const allContent = contentColumn.querySelectorAll('.cuisine-content');

    svgMap.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('region')) {
            tooltip.textContent = e.target.dataset.name;
            tooltip.style.opacity = '1';
        }
    });
    
    svgMap.addEventListener('mousemove', (e) => {
        const rect = svgMap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        tooltip.style.left = `${x + 15}px`;
        tooltip.style.top = `${y + 15}px`;
    });

    svgMap.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });

    svgMap.addEventListener('click', (e) => {
        if (e.target.classList.contains('region')) {
            const regionId = e.target.dataset.region;
            svgMap.querySelectorAll('.region').forEach(r => r.classList.remove('active'));
            e.target.classList.add('active');
            allContent.forEach(content => {
                content.classList.toggle('active', content.id === `cuisine-${regionId}` || content.id === `cuisine-default` && !regionId);
                 if(content.id === `cuisine-${regionId}`) {
                    document.getElementById('cuisine-default').classList.remove('active');
                }
            });
        }
    });
}

// --- V3 - Guestbook: AJAX Form ---
function initGuestbookV3() {
    const form = document.getElementById('guestbook-form-v3');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('.submit-btn');

    const validateField = (field) => {
        const errorEl = field.nextElementSibling;
        let message = '';
        if (field.validity.valueMissing) {
            message = '此字段不能为空。';
        } else if (field.validity.tooLong) {
            message = `内容过长，不能超过 ${field.maxLength} 个字符。`;
        }
        
        if (message) {
            field.classList.add('is-invalid');
            errorEl.textContent = message;
            errorEl.style.display = 'block';
            return false;
        }
        
        field.classList.remove('is-invalid');
        errorEl.style.display = 'none';
        return true;
    };

    const validateForm = () => {
        const isNameValid = validateField(nameInput);
        const isMessageValid = validateField(messageInput);
        return isNameValid && isMessageValid;
    };
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            message: formData.get('message')
        };

        fetch(form.action, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) throw new Error(`服务器错误: ${response.statusText}`);
            return response.json();
        })
        .then(newMessage => {
            addMessageToDOM(newMessage);
            form.reset();
        })
        .catch(error => {
            console.error('Guestbook submission error:', error);
            alert('留言提交失败，请检查网络并稍后重试。');
        })
        .finally(() => {
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
        });
    });

    const addMessageToDOM = (msg) => {
        const container = document.querySelector('.guestbook-messages-container');
        if (!container) return;

        // Remove placeholder if it exists
        const placeholder = container.querySelector('p');
        if (placeholder) placeholder.remove();

        const card = document.createElement('div');
        card.className = 'message-card'; // Animation is handled by CSS

        // Sanitize output just in case
        const name = msg.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const message = msg.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        card.innerHTML = `
            <h4>
                <svg class="icon icon-user"><use xlink:href="#icon-user"></use></svg>
                ${name}
            </h4>
            <p>${message}</p>
            <small>${msg.formattedTimestamp || new Date().toLocaleString('zh-CN')}</small>
        `;
        
        // Prepend for newest first
        if (container.firstChild) {
            container.insertBefore(card, container.firstChild);
        } else {
            container.appendChild(card);
        }

        // Trigger the animation
        setTimeout(() => card.classList.add('visible'), 50);
    };

    // Initial load for existing messages
    fetch('guestbook.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load messages');
            return response.json();
        })
        .then(messages => {
            const container = document.querySelector('.guestbook-messages-container');
            const placeholder = container.querySelector('p');
            if (messages.length > 0) {
                if(placeholder) placeholder.remove();
                messages.reverse().forEach(addMessageToDOM); // reverse to show newest first
            }
        })
        .catch(error => {
            console.warn('Could not load guestbook messages:', error);
            // Don't show an alert, just leave the placeholder text.
        });
}

// --- Page: estuary.jsp ---
// Lightbox Gallery
function initLightbox() {
    const gallery = document.querySelector('.image-gallery');
    if (!gallery) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    gallery.addEventListener('click', e => {
        if (e.target.tagName === 'IMG') {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = e.target.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        }
    });

    lightbox.addEventListener('click', e => {
        if (e.target.id === 'lightbox') {
            lightbox.classList.remove('active');
        }
    });
}

// --- Page: suntzu.jsp ---
// Interactive Tabs
function initTabs() {
    const tabContainer = document.querySelector('.tabs');
    if (!tabContainer) return;

    const tabButtons = tabContainer.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContainer.addEventListener('click', e => {
        const clickedButton = e.target.closest('.tab-button');
        if (!clickedButton) return;

        const targetId = clickedButton.dataset.tab;
        const targetContent = document.getElementById(targetId);

        tabButtons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'));
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
}

// --- Page: oilcity.jsp ---
// Interactive Timeline
function initTimeline() {
    // The main animation is already handled by the global Intersection Observer.
    // This function can be used for additional timeline-specific logic in the future.
    console.log('Timeline initialized.');
}

// --- Page: wetland.jsp ---
// Image Slider
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Initial display
    showSlide(currentIndex);

    // Auto-play
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// --- Page: cuisine.jsp ---
// Filterable Gallery
function initFilterableGallery() {
    const filterButtons = document.querySelectorAll('.filter-controls .filter-btn');
    const galleryItems = document.querySelectorAll('.dish-gallery .dish-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/*
==========================================================================
  新版首页 (INDEX.JSP V2.0) 专属交互脚本
==========================================================================
*/
function initIndexPageV2() {
    // 1. 特色网格筛选 (使用 FLIP 技术)
    const interestButtons = document.querySelectorAll('.filtered-grid-section .interest-btn');
    const contentGrid = document.querySelector('.filtered-grid-section .content-grid');
    const contentCards = document.querySelectorAll('.filtered-grid-section .card');

    if (interestButtons.length > 0 && contentGrid && contentCards.length > 0) {
        interestButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 如果已经是激活状态，则不执行任何操作
                if (button.classList.contains('active')) {
                    return;
                }
                
                // 更新按钮激活状态
                interestButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                // --- FLIP 动画开始 ---

                // 1. First: 记录所有卡片的初始状态
                const firstRects = new Map();
                contentCards.forEach(card => {
                    firstRects.set(card, card.getBoundingClientRect());
                });

                // 2. 切换类名，让浏览器计算最终布局 (同步)
                contentCards.forEach(card => {
                    const shouldShow = filter === 'all' || card.dataset.category === filter;
                    card.classList.toggle('hidden', !shouldShow);
                });

                // 3. Last: 记录所有卡片的最终状态
                const lastRects = new Map();
                contentCards.forEach(card => {
                    lastRects.set(card, card.getBoundingClientRect());
                });

                // 4. Invert & Play: 对每个发生位移的卡片应用动画
                contentCards.forEach(card => {
                    const first = firstRects.get(card);
                    const last = lastRects.get(card);

                    // 只对可见且位置变化的卡片应用动画
                    if (!card.classList.contains('hidden')) {
                         const dx = first.left - last.left;
                         const dy = first.top - last.top;

                        if (dx !== 0 || dy !== 0) {
                            // Invert: 立即将元素移动回初始位置
                            card.style.transform = `translate(${dx}px, ${dy}px)`;
                            card.style.transition = 'transform 0s'; // 关闭过渡

                            // Play: 强制浏览器应用上述样式后，再开启过渡并回到原位
                            requestAnimationFrame(() => {
                                card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                                card.style.transform = '';
                            });
                        }
                    }
                });
            });
        });
    }

    // 2. 时间轴滚动激活
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.5 });
    timelineItems.forEach(item => timelineObserver.observe(item));

    // 3. 四季选项卡
    const tabButtons = document.querySelectorAll('.tabs-nav .tab-button');
    const tabPanes = document.querySelectorAll('.tabs-content .tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetTab = button.dataset.tab;
            tabPanes.forEach(pane => {
                if (pane.id === targetTab) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

    // 4. 城市故事轮播
    const storyCards = document.querySelectorAll('.story-card');
    let currentStoryIndex = 0;
    setInterval(() => {
        storyCards[currentStoryIndex].classList.remove('active');
        currentStoryIndex = (currentStoryIndex + 1) % storyCards.length;
        storyCards[currentStoryIndex].classList.add('active');
    }, 7000); // 每7秒切换一个故事

    // 5. 数字增长动画
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.dataset.target;
                let current = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
            } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.8 });
    counters.forEach(counter => counterObserver.observe(counter));

    // 6. 图片画廊灯箱
    const photoItems = document.querySelectorAll('.photo-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    photoItems.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

/*
==========================================================================
  黄河入海口 (ESTUARY.JSP V2.0) 交互脚本
==========================================================================
*/

function initEstuaryPageV2() {
    
    // --- 1. Wonder Section Scroll Animation ---
    // This uses an IntersectionObserver to add a class when text blocks scroll into view.
    const wonderTextBlocks = document.querySelectorAll('.wonder-text-block');
    if (wonderTextBlocks.length > 0) {
        const wonderObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 1s ${entry.target.dataset.delay || '0s'} forwards`;
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -20% 0px' });

        wonderTextBlocks.forEach((block, index) => {
            block.style.opacity = 0; // Start transparent
            // Optional: Add a slight delay for sequential animation
            // block.dataset.delay = `${index * 0.1}s`;
            wonderObserver.observe(block);
        });
    }

    // --- 2. Interactive Science Diagram ---
    const diagramHotspots = document.querySelectorAll('.diagram-hotspot');
    const infoCards = document.querySelectorAll('.diagram-info-card');
    const defaultInfoCard = document.getElementById('info-default');

    if (diagramHotspots.length > 0 && infoCards.length > 0) {
        diagramHotspots.forEach(hotspot => {
            hotspot.addEventListener('mouseenter', () => {
                const infoId = hotspot.dataset.info;
                const targetCard = document.getElementById(`info-${infoId}`);

                infoCards.forEach(card => card.classList.remove('active'));
                if (targetCard) {
                    targetCard.classList.add('active');
                }
            });

            hotspot.addEventListener('mouseleave', () => {
                infoCards.forEach(card => card.classList.remove('active'));
                if(defaultInfoCard) {
                    defaultInfoCard.classList.add('active');
            }
        });
    });
    }

    // --- 3. Accordion Guide ---
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                // Optional: Close other open accordions
                /*
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.accordion-header').classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });
                */

                header.classList.toggle('active');
                if (header.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.paddingTop = 'var(--spacing-md)';
                    content.style.paddingBottom = 'var(--spacing-md)';
                } else {
                    content.style.maxHeight = null;
                    content.style.paddingTop = '0';
                    content.style.paddingBottom = '0';
                }
            });
        });
    }
    
    console.log("Estuary Page V2 Initialized");
}
