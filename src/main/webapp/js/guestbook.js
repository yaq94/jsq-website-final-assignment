document.addEventListener('DOMContentLoaded', () => {

    // --- SEED KEYWORDS for the River of Consciousness ---
    const seedKeywords = [
        "黄河", "入海口", "渤海", "生态", "湿地", "石油", "城市", "孙子", "兵法", "故里",
        "东营", "记忆", "味道", "广饶", "利津", "垦利", "河口", "美好", "未来", "希望",
        "旅行", "足迹", "见闻", "分享", "心情", "感悟", "生活", "时光", "岁月", "变迁",
        "芦苇", "丹顶鹤", "东方白鹳", "候鸟", "天堂", "自然", "风光", "辽阔", "壮美", "震撼",
        "黄蓝交汇", "奇观", "河海交融", "新生", "土地", "共和国", "年轻", "活力", "发展", "创新",
        "海鲜", "刀鱼", "对虾", "文蛤", "梭子蟹", "美味", "舌尖", "风味", "烟火气", "人间",
        "肴驴肉", "水煎包", "传统", "手艺", "传承", "文化", "历史", "底蕴", "醇厚", "香气",
        "胜利油田", "工业", "脉搏", "奋斗", "精神", "奉献", "骄傲", "力量", "黑色", "黄金",
        "红色", "旅游", "记忆", "印记", "足迹", "探索", "发现", "体验", "休闲", "度假",
        "黄河大坝", "龙悦湖", "公园", "绿道", "骑行", "惬意", "舒适", "宁静", "和谐", "家园",
        "黄河口", "日出", "日落", "晚霞", "星空", "摄影", "大片", "瞬间", "永恒", "美丽",
        "家乡", "思念", "归属", "情感", "温暖", "港湾", "奋斗者", "建设者", "梦想", "启航",
        "齐鲁", "文化", "好客", "山东", "豪爽", "淳朴", "民风", "热情", "友好", "欢迎",
        "天空", "白云", "微风", "阳光", "沙滩", "贝壳", "海浪", "涛声", "一望无际", "心旷神怡",
        "四季", "分明", "春天", "夏天", "秋天", "冬天", "景色", "宜人", "韵味", "不同",
        "黄河故道", "森林公园", "天然氧吧", "清新", "空气", "健康", "生态城", "宜居", "幸福", "指数",
        "兵圣", "智慧", "哲学", "思想", "影响", "深远", "学习", "应用", "策略", "共赢",
        "美食", "地图", "寻味", "之旅", "地道", "特色", "小吃", "盛宴", "满足", "味蕾",
        "夜晚", "灯火", "璀璨", "都市", "繁华", "安静", "角落", "故事", "发生", "继续",
        "朋友", "家人", "爱人", "同行", "旅途", "风景", "更美", "因为", "有你", "陪伴"
    ];

    const riverInner = document.querySelector('.river-of-consciousness .river-inner');
    const messageConstellation = document.getElementById('message-constellation');

    const populateRiver = () => {
        if (!riverInner) return;
        // Clear existing content
        riverInner.innerHTML = '';
        
        // Duplicate the keywords to create a long list for seamless scrolling
        const riverContent = [...seedKeywords, ...seedKeywords, ...seedKeywords, ...seedKeywords, ...seedKeywords];
        
        // Shuffle for more randomness
        for (let i = riverContent.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [riverContent[i], riverContent[j]] = [riverContent[j], riverContent[i]];
        }

        // Populate the river
        riverContent.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word;
            span.dataset.keyword = word;
            riverInner.appendChild(span);
        });
    };
    
    populateRiver();


    // --- Core Interaction Logic ---

    // 1. River Keyword Filtering
    riverInner.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            const keyword = e.target.dataset.keyword;
            const messageCards = messageConstellation.querySelectorAll('.message-card');
            
            messageCards.forEach(card => {
                const cardKeywords = JSON.parse(card.dataset.keywords || '[]');
                if (cardKeywords.includes(keyword)) {
                    card.classList.remove('filtered-out');
                } else {
                    card.classList.add('filtered-out');
                }
            });
        }
    });

    // 2. Modal Interaction
    const leaveEchoButton = document.getElementById('leave-echo-button');
    const modalContainer = document.getElementById('modal-container');
    const closeModalButton = document.getElementById('close-modal-button');
    const emotionTagsContainer = document.querySelector('.emotion-tags');
    const hiddenEmotionTagInput = document.getElementById('emotion-tag');

    leaveEchoButton.addEventListener('click', () => {
        modalContainer.classList.add('visible');
    });

    const closeModal = () => {
        modalContainer.classList.remove('visible');
    };

    closeModalButton.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    // Emotion Tag Selection
    emotionTagsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-option')) {
            // Remove selected class from all tags
            emotionTagsContainer.querySelectorAll('.tag-option').forEach(tag => tag.classList.remove('selected'));
            // Add selected class to the clicked one
            e.target.classList.add('selected');
            // Update hidden input value
            hiddenEmotionTagInput.value = e.target.dataset.value;
        }
    });

    // 3. AJAX Form Submission
    const guestbookForm = document.getElementById('guestbook-form');
    guestbookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const action = this.action;
        
        fetch(action, {
            method: 'POST',
            body: new URLSearchParams(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(newMsg => {
            // Create a new message card from the response
            const newCard = document.createElement('div');
            newCard.classList.add('message-card');
            newCard.dataset.keywords = JSON.stringify([newMsg.nickname, newMsg.emotionTag]);
            newCard.style.animation = 'fadeIn 0.5s ease-out';
            
            newCard.innerHTML = `
                <div class="card-header">
                    <span class="card-author">${newMsg.nickname}</span>
                    <span class="card-timestamp">${newMsg.formattedTimestamp}</span>
                </div>
                <div class="card-body">
                    <p>${newMsg.content}</p>
                </div>
                <div class="card-footer">
                    <span class="card-tag">${newMsg.emotionTag}</span>
                </div>
            `;
            
            // Add the new card to the top of the constellation
            messageConstellation.prepend(newCard);
            
            // Add new keywords to the river
            if (!seedKeywords.includes(newMsg.nickname)) seedKeywords.push(newMsg.nickname);
            if (!seedKeywords.includes(newMsg.emotionTag)) seedKeywords.push(newMsg.emotionTag);
            populateRiver(); // Repopulate to include new words

            // Close modal and reset form
            closeModal();
            this.reset();
            // Reset emotion tag selection
            emotionTagsContainer.querySelector('.tag-option.selected').classList.remove('selected');
            emotionTagsContainer.querySelector('.tag-option[data-value="感悟"]').classList.add('selected');
            hiddenEmotionTagInput.value = '感悟';
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Optionally, show an error message to the user
        });
    });
}); 