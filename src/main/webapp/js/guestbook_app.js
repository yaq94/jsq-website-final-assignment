// guestbook_app.js - Scripts for the "Space-Time Post Office" guestbook page V4.0 (Data Intelligence)
// This file contains all the unique JavaScript for the interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Guestbook "Space-Time Post Office" script V4.0 loaded.');

    // Global state to hold references
    const state = {
        gallery: document.getElementById('gb-gallery'),
        allCards: [],
        searchBox: document.getElementById('gb-search-box'),
        sortSelect: document.getElementById('gb-sort-select'),
        dataChart: document.getElementById('gb-data-chart'),
        summaryText: document.getElementById('gb-summary-text'),
        modal: document.getElementById('gb-spotlight-modal'),
        modalCloseBtn: document.getElementById('gb-modal-close'),
        modalOverlay: document.querySelector('.gb-modal-overlay'),
    };

    /**
     * Main initialization function
     */
    function initAll() {
        if (!state.gallery) {
            console.error("Gallery element not found. Aborting initialization.");
            return;
        }
        state.allCards = Array.from(state.gallery.querySelectorAll('.gb-postcard'));

        initDataPavilion();
        initGalleryInteractions();
        initModal();
        
        // Keep these from previous versions
        initAccordion(); 
        initInteractiveForm();
    }

    /**
     * Analyzes message data and builds the interactive chart and summary.
     */
    function initDataPavilion() {
        if (!state.dataChart || state.allCards.length === 0) return;

        const emotionCounts = state.allCards.reduce((acc, card) => {
            const emotion = card.dataset.emotion || '未知';
            acc[emotion] = (acc[emotion] || 0) + 1;
            return acc;
        }, {});

        // Clear previous chart content
        state.dataChart.innerHTML = '';

        // Create "All" button
        createChartBar('全部', state.allCards.length, state.allCards.length, true);

        // Create bars for each emotion
        Object.entries(emotionCounts).forEach(([emotion, count]) => {
            createChartBar(emotion, count, state.allCards.length);
        });

        updateSummary(state.allCards.length, emotionCounts);
        addChartEventListeners();
    }

    /**
     * Helper to create a single bar in the CSS chart.
     */
    function createChartBar(emotion, count, total, isActive = false) {
        const percentage = total > 0 ? (count / total) * 100 : 0;
        
        const item = document.createElement('div');
        item.className = 'chart-bar-item' + (isActive ? ' active' : '');
        item.dataset.emotion = emotion;

        item.innerHTML = `
            <span class="chart-bar-label">${emotion}</span>
            <div class="chart-bar-wrapper">
                <div class="chart-bar" style="width: ${percentage}%;"></div>
            </div>
            <span class="chart-bar-value">${count}</span>
        `;
        state.dataChart.appendChild(item);
    }
    
    /**
     * Updates the summary text based on current data.
     */
    function updateSummary(total, counts, activeEmotion = '全部') {
        if (!state.summaryText) return;
        
        if (activeEmotion !== '全部') {
             state.summaryText.innerHTML = `在所有信笺中，有 <strong>${counts[activeEmotion]}</strong> 封装载着关于 <strong>"${activeEmotion}"</strong> 的记忆。`;
        } else {
            const topEmotion = Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b, [null, 0]);
            const topEmotionName = topEmotion[0] || '未知';
            const topEmotionPercent = total > 0 ? ((topEmotion[1] / total) * 100).toFixed(0) : 0;
            state.summaryText.innerHTML = `当前共展出 <strong>${total}</strong> 封信笺，其中关于 <strong>"${topEmotionName}"</strong> 的回忆最为深刻，占据了 <strong>${topEmotionPercent}%</strong> 的时空印记。`;
        }
    }

    /**
     * Adds event listeners to the chart bars.
     */
    function addChartEventListeners() {
        state.dataChart.addEventListener('click', e => {
            const barItem = e.target.closest('.chart-bar-item');
            if (barItem) {
                state.dataChart.querySelector('.active')?.classList.remove('active');
                barItem.classList.add('active');
                applyFiltersAndSort(); // This will trigger the FLIP animation
            }
        });
    }

    /**
     * Initializes gallery filtering, sorting, and FLIP animations.
     */
    function initGalleryInteractions() {
        state.searchBox?.addEventListener('input', applyFiltersAndSort);
        state.sortSelect?.addEventListener('change', applyFiltersAndSort);
        state.gallery.addEventListener('click', e => {
            const card = e.target.closest('.gb-postcard');
            if (card) {
                openModal(card);
            }
        });
    }

    /**
     * The core FLIP animation logic.
     */
    function applyFiltersAndSort() {
        // --- 1. Get filter states ---
        const searchTerm = state.searchBox.value.toLowerCase();
        const sortValue = state.sortSelect.value;
        const activeEmotion = state.dataChart.querySelector('.active').dataset.emotion;
        
        const emotionCounts = state.allCards.reduce((acc, card) => {
            const emotion = card.dataset.emotion || '未知';
            acc[emotion] = (acc[emotion] || 0) + 1;
            return acc;
        }, {});
        updateSummary(state.allCards.length, emotionCounts, activeEmotion);

        // --- 2. Record "FIRST" positions ---
        const firstPositions = new Map();
        state.allCards.forEach(card => {
            firstPositions.set(card, card.getBoundingClientRect());
        });

        // --- 3. Apply logic and update DOM ---
        const visibleCards = state.allCards.filter(card => {
            const matchesSearch = card.dataset.nickname.toLowerCase().includes(searchTerm);
            const matchesEmotion = activeEmotion === '全部' || card.dataset.emotion === activeEmotion;
            const isVisible = matchesSearch && matchesEmotion;
            card.style.display = isVisible ? '' : 'none';
            return isVisible;
        });

        visibleCards.sort((a, b) => {
            const timeA = parseInt(a.dataset.timestamp, 10);
            const timeB = parseInt(b.dataset.timestamp, 10);
            return sortValue === 'newest' ? timeB - timeA : timeA - timeB;
        });
        
        visibleCards.forEach(card => state.gallery.appendChild(card));

        // --- 4. INVERT and PLAY ---
        visibleCards.forEach(card => {
            const lastPos = card.getBoundingClientRect();
            const firstPos = firstPositions.get(card);
            const dx = firstPos.left - lastPos.left;
            const dy = firstPos.top - lastPos.top;

            card.style.transform = `translate(${dx}px, ${dy}px)`;
            requestAnimationFrame(() => {
                card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.transform = 'translate(0, 0)';
            });
        });
    }

    /**
     * Initializes modal open/close functionality.
     */
    function initModal() {
        if (!state.modal) return;
        state.modalCloseBtn?.addEventListener('click', closeModal);
        state.modalOverlay?.addEventListener('click', closeModal);
    }
    
    /**
     * Opens the modal with content from a postcard.
     */
    function openModal(card) {
        state.modal.querySelector('#modal-emotion-tag').textContent = card.dataset.emotion;
        state.modal.querySelector('#modal-nickname').textContent = card.dataset.nickname;
        state.modal.querySelector('#modal-message-content').textContent = card.dataset.content;
        
        const date = new Date(parseInt(card.dataset.timestamp, 10));
        state.modal.querySelector('#modal-timestamp').textContent = date.toLocaleString('zh-CN');

        state.modal.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    /**
     * Closes the modal.
     */
    function closeModal() {
        state.modal.classList.remove('visible');
        document.body.style.overflow = '';
    }

    // --- Functions from previous versions that are still needed ---

    function initAccordion() {
        document.querySelectorAll('.gb-accordion-item').forEach(item => {
            const header = item.querySelector('.gb-accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    const content = item.querySelector('.gb-accordion-content');
                    const icon = item.querySelector('.gb-accordion-icon');
                    item.classList.toggle('active');
                    if (item.classList.contains('active')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.textContent = '-';
                    } else {
                        content.style.maxHeight = null;
                        icon.textContent = '+';
                    }
                });
            }
        });
    }

    function initInteractiveForm() {
        const form = document.getElementById('gb-form');
        if (!form) return;
        const nicknameInput = document.getElementById('gb-nickname');
        const contentTextarea = document.getElementById('gb-content');
        
        contentTextarea?.addEventListener('input', () => {
            document.getElementById('char-counter').textContent = contentTextarea.value.length;
        });

        document.querySelector('.gb-emotion-selector')?.addEventListener('click', e => {
            if (e.target.classList.contains('gb-emotion-option')) {
                document.querySelector('.gb-emotion-option.selected').classList.remove('selected');
                e.target.classList.add('selected');
                document.getElementById('gb-emotion-value').value = e.target.dataset.emotion;
            }
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const isNicknameValid = validateField(nicknameInput, '“执笔人”署名不能为空哦！');
            const isContentValid = validateField(contentTextarea, '“信笺内容”不能为空白。');
            if (isNicknameValid && isContentValid) form.submit();
        });

        function validateField(field, message) {
            const group = field.closest('.form-group');
            clearError(group);
            if (!field.value.trim()) {
                showError(group, message);
                return false;
            }
            return true;
        }

        function showError(group, message) {
            group.classList.add('error');
            let errEl = group.querySelector('.error-message');
            if (!errEl) {
                errEl = document.createElement('div');
                errEl.className = 'error-message';
                group.querySelector('.form-control').insertAdjacentElement('afterend', errEl);
            }
            errEl.textContent = message;
            errEl.style.display = 'block';
        }

        function clearError(group) {
            group.classList.remove('error');
            const errEl = group.querySelector('.error-message');
            if (errEl) errEl.style.display = 'none';
        }
    }

    // Run everything!
    initAll();
}); 