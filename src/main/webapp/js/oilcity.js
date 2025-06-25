// oilcity.js
// Project: Heart of Black Gold
// This file will contain all the specific JavaScript for the redesigned oilcity.jsp page.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Heart of Black Gold: JS Loaded");

    // --- Data Store ---
    const dataStore = {
        prospectingSaga: [
            {
                year: `1955-1963`,
                title: `艰难求索的序章`,
                content: `上世纪五十年代，新中国百废待兴，能源极度短缺。一支支地质勘探队怀揣着为国找油的坚定信念，告别都市，挺进渤海之滨这片人迹罕至的盐碱荒滩。面对的是无尽的芦苇荡、汹涌的海潮和恶劣的自然环境。他们住帐篷、喝咸水，以惊人的毅力在此开展了长达数年的大规模区域地质勘探。这一时期，虽然发现了多个构造，但受限于当时的技术条件和对复杂地质构造认识的不足，始终未能找到具有工业开采价值的大油田。然而，正是这群先行者用双脚丈量土地，用青春绘制图纸，收集了大量宝贵的第一手地质资料，为后来的历史性突破奠定了坚实的基础。他们的每一次钻探，每一次失败，都是在为最终的胜利积累经验，他们的奋斗本身，就是一座无言的丰碑。`
            },
            {
                year: `1964-1977`,
                title: `胜利油田的诞生与辉煌`,
                content: `历史在1964年迎来了转折点。当年4月22日，华北石油勘探会战指挥部部署的"华八井"喜喷工业油流，标志着胜利油田的正式发现。这一声石破天惊的油龙呼啸，彻底改变了华北地区的石油地质面貌，也为一座新城的崛起奏响了序曲。消息传来，全国各地的石油工人、技术人员、退伍军人如百川归海般汇集于此，展开了一场波澜壮阔的石油大会战。在那个激情燃烧的岁月里，他们以"有条件要上，没有条件创造条件也要上"的豪迈气概，战天斗地，攻克了一个又一个技术难关。短短数年间，油田年产量便跃居全国第二，为国民经济的恢复和发展注入了强大的黑色动脉。东营，这座城市的名字，从此与"胜利"紧密相连，响彻大江南北。`
            },
            {
                year: `1978-1995`,
                title: `改革春风下的高速发展`,
                content: `乘着改革开放的东风，胜利油田迎来了发展的黄金时期。通过大规模引进国外先进技术与设备，油田的勘探开发水平实现了质的飞跃。地震勘探技术、定向钻井、压裂增产等新工艺的广泛应用，使得油田得以向更深、更复杂的地质构造进军，新增探明储量和原油产量持续高速增长。1987年，胜利油田年产原油达到3355万吨，创造了历史最高纪录，成为支撑国家能源安全名副其实的"共和国脊梁"。与此同时，随着油田的蓬勃发展，一个功能齐全、配套完善的石油基地社区迅速形成，道路、医院、学校如雨后春笋般涌现，为东营市的正式设立和现代化发展奠定了雄厚的物质与社会基础。这一时期，是工业力量与城市发展同频共振的辉煌乐章。`
            },
            {
                year: `1996-2010`,
                title: `稳定东部，发展西部的战略转型`,
                content: `经过几十年的高强度开采，东部老区面临着产量递减、后备资源不足的严峻挑战。面对可持续发展的重大课题，胜利油田的决策者们高瞻远瞩，适时提出了"稳定东部，发展西部"的重大战略决策。这意味着勘探开发的主战场开始向地质条件更为复杂的西部新区和滩浅海区域转移。这是一次充满挑战的二次创业。科技创新成为驱动发展的核心引擎，针对稠油、超稠油开采的蒸汽吞吐技术，以及针对滩浅海油田的滚动勘探开发模式不断成熟。油田人再次发扬艰苦奋斗的精神，在新的战场上取得了一个又一个胜利，成功实现了油田产量的战略性稳定和接替，确保了国家能源供应的持续性。这次成功的战略转型，展现了油田强大的科技实力和自我革新能力。`
            },
            {
                year: `2011-至今`,
                title: `新时代的能源革命与可持续发展`,
                content: `进入21世纪第二个十年，全球能源格局深刻变革，"双碳"目标成为国家战略。胜利油田，这座功勋卓著的能源基地，再次站在了转型发展的十字路口。这一次的转型，是更为深刻的能源革命。油田不再仅仅满足于"采油"，而是向"产油+产气"、"产油+新能源"的综合能源基地全面转型。利用广袤的滩涂和厂区，大力发展光伏、风电等绿色能源产业。同时，将CCUS（二氧化碳捕集、利用与封存）技术作为实现老油田绿色低碳开发的关键举措，将二氧化碳重新注入地下，既提高了原油采收率，又实现了温室气体的地质封存，为全国提供了宝贵的示范。从"黑色石油"到"绿色能源"，胜利油田正以科技创新为引领，书写着保障国家能源安全、助力美丽中国建设的全新时代答卷。`
            }
        ],
        industrialArtery: [
             { id: `flow-1`, title: `钻井与开采`, content: `一切始于地下深处。工程师首先通过地质勘探数据确定油藏位置，然后运用巨大的钻井平台，向下钻探数千米，直至触及油层。随后，通过固井、射孔等工艺建立起油气从地层到地面的稳定通道。初期，油层自身的巨大压力会使原油自喷而出。后期则需要通过注水、注气或化学驱等二次、三次采油技术，辅助原油的开采，以最大化采收率。这是一个集地质学、机械工程和化学于一体的高科技过程。` },
             { id: `flow-2`, title: `原油集输`, content: `从各个井口开采出的，是夹杂着水、天然气和各种杂质的油井产物。它们通过一个庞大如动脉血管般的管网系统，从分散的井场被汇集到联合站或处理中心。这个过程被称为"集输"。为保证原油的流动性，管线通常需要加热和保温。沿途的计量站会精确记录每口井的产量，为油田管理提供关键数据。这是一个高度自动化、系统化的物流过程。` },
             { id: `flow-3`, title: `脱水与净化`, content: `汇集而来的原油必须经过严格的预处理，才能进入炼化环节。核心任务是"油水分离"和"脱气"。通过沉降罐、加热炉、电脱水器等设备，将原油中的水分含量降至极低标准。同时，分离出的天然气将被回收利用。此外，还会去除掉部分对后续加工有害的盐分和杂质。这个净化过程对于保证炼化装置的长周期运行和产品质量至关重要。` },
             { id: `flow-4`, title: `炼化核心`, content: `净化后的原油被泵入炼油厂的"心脏"——常减压蒸馏装置。在这里，原油被加热到数百度高温，并在巨大的蒸馏塔中，根据不同组分沸点的差异，从上到下依次分离出汽油、煤油、柴油等直馏产品，以及用于生产更高级产品的石脑油、蜡油等中间馏分。塔底最重的渣油，则进入减压蒸馏或更复杂的二次加工装置（如催化裂化、加氢裂化），在高温、高压和催化剂的作用下，将大分子烃裂解为价值更高的小分子烃，进一步提升轻质油收率。` },
             { id: `flow-5`, title: `终端产品`, content: `经过一系列复杂的物理和化学过程，最初的黑色金子最终转变为驱动现代社会运转的各种产品。轻质的汽油和航空煤油，为汽车和飞机提供动力；柴油则驱动着卡车和船舶。更重的馏分则成为生产润滑油、沥青的基础。而石脑油等组分，是化学工业的基石，用于生产乙烯、丙烯，进而合成出我们日常生活中无处不在的塑料、纤维、橡胶等成千上万种化工产品。石油工业，深刻地塑造了现代物质文明。` }
        ],
        urbanSymphony: [
            { category: `infrastructure`, img: `img/纵横交错的交通网.jpg`, title: `纵横交错的交通网`, content: `石油的勘探和运输需求，催生了东营最早的道路规划。从最初的简易公路，到如今连接全国的高速公路、铁路和港口，四通八达的交通网络成为城市发展的基石，也为市民出行和物资流通提供了极大便利。` },
            { category: `economy`, img: `img/强大的石化产业集群.jpg`, title: `强大的石化产业集群`, content: `依托胜利油田的资源优势，东营建立起中国重要的石油化工基地。从炼油到高端化工，形成了完整的产业链条，不仅为国家贡献了大量能源产品，也创造了巨大的经济产值和就业机会，是城市经济的绝对支柱。` },
            { category: `culture`, img: `img/石油工人文化.jpg`, title: `独特的石油工人文化`, content: `"献身石油、艰苦奋斗"的石油精神，深深烙印在城市的文化基因中。由此衍生的石油大会战纪念馆、石油工人俱乐部等，不仅是市民的集体记忆，也成为独特的文化地标，向后人讲述着那段激情燃烧的岁月。` },
            { category: `technology`, img: `img/中国石油大学.jpeg`, title: `中国石油大学`, content: `作为国家"211工程"和"双一流"重点建设高校，中国石油大学（华东）的存在，为油田和城市的发展提供了源源不断的人才和智力支持。它不仅是石油科技的摇篮，也是东营市高等教育的璀璨明珠。` },
            { category: `infrastructure`, img: `img/现代化的城市天际线.jpg`, title: `现代化的城市天际线`, content: `随着经济的发展，一座座现代化的高楼拔地而起，勾勒出东营新区壮丽的天际线。这些建筑不仅是城市繁荣的象征，也为市民提供了高品质的居住和商业环境，见证了从荒滩到现代化都市的巨变。` },
            { category: `economy`, img: `img/新兴产业的崛起.jpg`, title: `新兴产业的崛起`, content: `在巩固石化主导地位的同时，东营大力发展新材料、高端装备制造、生物医药等战略性新兴产业。这些新动能的培育，正在优化城市的经济结构，为未来的可持续发展注入新的活力。` },
            { category: `culture`, img: `img/黄河三角洲自然保护区.jpg`, title: `黄河三角洲自然保护区`, content: `工业的发展并未以牺牲环境为代价。作为黄河入海口，东营拥有世界级的湿地资源。工业文明与自然生态在这片土地上和谐共生，体现了城市发展的远见卓识，也为市民提供了宝贵的生态休闲空间。` },
            { category: `technology`, img: `img/国家级技术研发中心.jpg`, title: `国家级技术研发中心`, content: `众多国家级和省级的重点实验室、工程技术中心在东营落地。这些科研机构围绕石油开采、化工新材料等领域不断攻克技术难关，使东营成为中国石油化工领域一个重要的科技创新高地。` }
        ]
    };

    // --- Initializations ---
    initEpicScroll(dataStore.prospectingSaga);
    initIndustrialArtery(dataStore.industrialArtery);
    initUrbanSymphony(dataStore.urbanSymphony);
    initComparisonSlider();

    // --- Function Implementations ---
    function initEpicScroll(data) {
        const placeholder = document.getElementById('prospecting-saga-placeholder');
        if (!placeholder) return;

        const moduleHTML = `
            <section id="prospecting-saga" class="oilcity-section">
                <h2 class="section-title">勘探史诗</h2>
                <div class="epic-scroll-container">
                    <div class="epic-scroll-viewport">
                        ${data.map(item => `
                            <div class="epic-scroll-item">
                                <h3>${item.year} - ${item.title}</h3>
                                <p>${item.content}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="epic-scroll-nav">
                        <button class="epic-scroll-arrow prev" aria-label="上一时期">&lt;</button>
                        <button class="epic-scroll-arrow next" aria-label="下一时期">&gt;</button>
                    </div>
                </div>
                <div class="epic-scroll-progress"></div>
            </section>
        `;
        placeholder.innerHTML = moduleHTML;

        const section = document.getElementById('prospecting-saga');
        const viewport = section.querySelector('.epic-scroll-viewport');
        const prevBtn = section.querySelector('.epic-scroll-arrow.prev');
        const nextBtn = section.querySelector('.epic-scroll-arrow.next');
        const progressIndicator = section.querySelector('.epic-scroll-progress');
        
        let currentIndex = 0;
        const totalItems = data.length;

        function updateSlider() {
            viewport.style.transform = `translateX(-${currentIndex * 100}%)`;
            progressIndicator.textContent = `时期 ${currentIndex + 1} / ${totalItems}`;
            prevBtn.classList.toggle('disabled', currentIndex === 0);
            nextBtn.classList.toggle('disabled', currentIndex === totalItems - 1);
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        updateSlider();
    }

    function initIndustrialArtery(data) {
        const detailsContainer = document.querySelector('.process-flow-details');
        const flowItems = document.querySelectorAll('.flow-item');
        
        detailsContainer.innerHTML = data.map(item => `
            <div id="detail-${item.id}" class="flow-detail-content">
                <h4>${item.title}</h4>
                <p>${item.content}</p>
            </div>
        `).join('');

        const detailContents = document.querySelectorAll('.flow-detail-content');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.id;
                const detail = document.getElementById(`detail-${id}`);
                
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    detailContents.forEach(d => d.classList.remove('visible'));
                    if(detail) detail.classList.add('visible');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0.1 });

        flowItems.forEach(item => observer.observe(item));
    }

    function initUrbanSymphony(data) {
        const grid = document.querySelector('.card-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');

        grid.innerHTML = data.map(item => `
            <div class="card-item" data-category="${item.category}">
                <div class="card-bg-img" style="background-image: url('${item.img}')"></div>
                <div class="card-content"><h3>${item.title}</h3><p>${item.content}</p></div>
            </div>`).join('');
        
        const cardItems = Array.from(grid.children);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                if (btn.classList.contains('active')) return;

                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const firstPositions = new Map();
                cardItems.forEach(card => {
                    firstPositions.set(card, card.getBoundingClientRect());
                });

                const exitingCards = cardItems.filter(card => {
                    const isVisible = filter === 'all' || card.dataset.category === filter;
                    const wasVisible = !card.classList.contains('hidden');
                    if (wasVisible && !isVisible) {
                        const first = firstPositions.get(card);
                        card.style.position = 'absolute';
                        card.style.left = `${first.left}px`;
                        card.style.top = `${first.top}px`;
                        card.style.width = `${first.width}px`;
                        card.style.height = `${first.height}px`;
                        return true;
                    }
                    return false;
                });

                cardItems.forEach(card => {
                    card.classList.toggle('hidden', !(filter === 'all' || card.dataset.category === filter));
                });
                
                const lastPositions = new Map();
                cardItems.forEach(card => {
                    lastPositions.set(card, card.getBoundingClientRect());
                });

                cardItems.forEach((card, index) => {
                    const first = firstPositions.get(card);
                    const last = lastPositions.get(card);
                    const isExiting = exitingCards.includes(card);

                    if (isExiting) {
                        const animation = card.animate([
                            { transform: 'none', opacity: 1 },
                            { transform: 'translateY(30px) scale(0.9)', opacity: 0 }
                        ], { duration: 300, easing: 'ease-in', delay: index * 20 });
                        
                        animation.onfinish = () => {
                            card.style.position = '';
                            card.style.left = '';
                            card.style.top = '';
                            card.style.width = '';
                            card.style.height = '';
                        };

                    } else if (!card.classList.contains('hidden')) {
                        const wasHidden = first.width === 0;

                        if (wasHidden) {
                            card.animate([
                                { transform: 'translateY(30px) scale(0.9)', opacity: 0 },
                                { transform: 'none', opacity: 1 }
                            ], { duration: 350, easing: 'ease-out', delay: index * 30 });
                        } else {
                            const deltaX = first.left - last.left;
                            const deltaY = first.top - last.top;
                            if (deltaX !== 0 || deltaY !== 0) {
                                card.animate([
                                    { transform: `translate(${deltaX}px, ${deltaY}px)` },
                                    { transform: 'none' }
                                ], { duration: 450, easing: 'cubic-bezier(0.2, 1, 0.3, 1)', delay: index * 25 });
                            }
                        }
                    }
                });
            });
        });
    }

    function initComparisonSlider() {
        const slider = document.querySelector('.comparison-slider');
        if (!slider) return;
        const handle = slider.querySelector('.comparison-handle');
        const beforeImage = slider.querySelector('.before-image');
        let isDragging = false;

        handle.addEventListener('mousedown', () => { isDragging = true; });
        document.addEventListener('mouseup', () => { isDragging = false; });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const rect = slider.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const percent = (x / rect.width) * 100;
            handle.style.left = `${percent}%`;
            beforeImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        });
    }

}); 