/**
 * Initializes the interactive elements and functionality for the wetland.jsp page.
 * This includes the IntersectionObserver for strata, the eco-tuner, and the knowledge curtain.
 */
function initWetlandPage() {
    console.log("Initializing Wetland Page Interactivity...");

    // Data store for all dynamic content. This makes it easy to manage and expand.
    const strataData = {
        sky: {
            title: "天空层：万鸟翔集",
            topics: {
                migration: {
                    title: '候鸟的史诗迁徙',
                    content: `
                        <h4>跨越大陆的生命航线</h4>
                        <p>黄河三角洲湿地，被誉为"鸟类的国际机场"，是全球八大鸟类迁徙路线中"东亚-澳大利西亚迁徙线"和"东北亚内陆迁徙路线"的关键节点。这并非偶然，其得天独厚的地理位置和丰饶的生态资源，使其成为鸟类跨越半个地球的艰苦旅程中，一个不可替代的"五星级服务区"。每年，超过600万只水鸟在这里停歇、换羽、越冬和繁殖。</p>
                        <p>想象一下，一只来自西伯利亚的白鹤，飞行数千公里后，体力耗尽，正是这片广阔的浅滩和丰富的水生生物，为它提供了宝贵的能量补给。在这里短暂休整后，它将继续飞往南方的越冬地。我们通过卫星追踪和鸟类环志技术，绘制出这些惊心-魄的生命航线图，为全球生物多样性保护提供了不可或缺的数据支持。</p>
                        <img src="https://images.unsplash.com/photo-1534567154992-9338b4a73def?q=80&w=1770" alt="Flock of migrating birds">
                    `
                },
                residents: {
                    title: '留鸟的四季智慧',
                    content: `
                        <h4>安土重迁的智慧居民</h4>
                        <p>相较于迁徙候鸟的波澜壮阔，选择在此"定居"的留鸟则展现了另一种生存智慧。它们完全适应了湿地四季分明的气候，演化出令人惊叹的适应性策略。例如，全球性濒危物种震旦鸦雀，它们的身影一年四季都活跃在芦苇丛中，它们巧妙地将巢穴建在芦苇秆上，以躲避地面捕食者和潮汐的影响。</p>
                        <p>冬季，当湿地被冰雪覆盖，这些留鸟会改变食谱，从昆虫转向植物种子和浆果；夏季，它们则利用丰富的昆虫资源哺育后代。它们的存在，是衡量湿地生态系统健康和稳定性的"活指标"，证明了这片土地拥有足以支撑生命完整周期的强大能力。</p>
                    `
                },
                raptors: {
                    title: '天空的顶级猎手',
                    content: `
                        <h4>翱翔于食物链顶端</h4>
                        <p>白尾海雕、普通鵟、红隼...这些猛禽是湿地上空的王者。它们拥有卓越的视力和强大的飞行能力，盘旋于高空，敏锐地搜寻着地面和水中的猎物——从田鼠、野兔到各种水鸟和鱼类。猛禽的存在，对于维持湿地生态系统的平衡至关重要。</p>
                        <p>它们通过捕食，有效控制了部分物种的数量，防止其过度繁殖对生态环境造成破坏。因此，猛禽种群的数量和多样性，是生态系统健康最直观的体现。保护猛禽，就是守护整个湿地食物网的完整与健康。</p>
                    `
                }
            }
        },
        surface: {
            title: "水面层：芦荻画廊",
            topics: {
                reeds: {
                    title: '芦苇：湿地的心脏',
                    content: `
                        <h4>生生不息的绿色屏障</h4>
                        <p>一望无际的芦苇荡，是黄河口湿地的灵魂景观，但它的价值远超美学范畴。这片"绿色海洋"是地球上生产力最高的生态系统之一。茂密的芦苇丛，有效减缓了水流速度，使得水中的泥沙得以沉降，这是湿地得以"淤长"扩张、创造新生的土地的重要物理过程。</p>
                        <p>更重要的是，芦苇是天然的巨型"净水厂"。其发达的根系和微生物群落，能够高效吸收和降解水体中的氮、磷等污染物，有效遏制水体富营养化，因此被誉为"地球之肾"的核心功能单元。每年秋冬，枯死的芦苇倒伏分解，又将有机质归还给土壤，开启新的生命循环。</p>
                        <img src="https://images.unsplash.com/photo-1590372728952-c36193739a85?q=80&w=1770" alt="Dense reeds in the wetland">
                    `
                },
                insects: {
                    title: '水生昆虫的微观世界',
                    content: `
                        <h4>连接水陆的微小使者</h4>
                        <p>水面之上与之下，是一个常常被忽略的、异常活跃的昆虫世界。擅长"水上漂"的水黾，利用水的表面张力轻松滑行；蜻蜓的幼虫"水虿"在水下是凶猛的捕食者，以孑孓等为食，成年后则羽化为优雅的空中猎手。这些水生或半水生昆虫，构成了连接水域和陆地生态系统的关键一环。</p>
                        <p>它们既是鱼、蛙、鸟类的重要食物来源，也是植物授粉和有机物分解的重要参与者。科学家们常常通过观察水生昆虫的种类和数量（如石蚕、蜉蝣等），来精确判断水体的清洁程度。一个多样化的昆虫群落，是湿地充满内在活力的最佳证明。</p>
                    `
                },
                amphibians: {
                    title: '两栖类的生命协奏',
                    content: `
                        <h4>水陆之间的生命乐章</h4>
                        <p>蛙鸣与虫鸣，是湿地夏夜最动人的协奏曲。两栖动物，如青蛙、蟾蜍等，是湿地生态系统中不可或缺的一环。它们的生命周期横跨水陆两个环境：幼体（蝌蚪）生活在水中，用鳃呼吸，以藻类为食；成体则生活在陆地或水边，用肺和皮肤呼吸，捕食大量昆虫，有效控制了农业害虫的数量。</p>
                        <p>由于两栖动物的皮肤具有通透性，它们对水质和环境污染极为敏感，任何水体或土壤的毒素都能轻易地侵害它们。因此，一个区域内两栖动物种群的健康状况，被公认为评估整个环境质量优劣的"晴雨表"。</p>
                    `
                }
            }
        },
        subaquatic: {
            title: "水下层：隐秘生机",
            topics: {
                fish: {
                    title: '洄游鱼类的生命循环',
                    content: `
                        <h4>河海之间的生命穿梭</h4>
                        <p>黄河口独特的淡水与海水交汇的生态环境，创造了一个理想的"育婴房"。这里是许多重要经济鱼类（如黄河刀鱼、海鲈鱼）和地方特有种（如黄河鲤）的关键产卵场、索饵场和"幼儿园"。</p>
                        <p>更神奇的是，这里是它们上演生命史诗——洄游——的舞台。例如，一些鱼类在海水中成长，却必须返回淡水产卵；另一些则反之。这种穿梭于两种水体之间的本能，是它们种族得以延续的保障。保护好河口通道的畅通和水质的纯净，就是守护这些鱼类的生命线，维系着渔业资源的可持续未来。</p>
                    `
                },
                plankton: {
                    title: '浮游生物：食物网的基石',
                    content: `
                        <h4>看不见的能量工厂</h4>
                        <p>用肉眼看，湿地的水似乎清澈或略带浑浊，但在显微镜下，每一滴水中都蕴含着一个繁荣的微观宇宙。无数的硅藻、绿藻等浮游植物，像微型太阳能工厂一样，通过光合作用，将无机物转化为有机物，是整个水生食物网的最初生产者。</p>
                        <p>紧接着，以它们为食的浮游动物，如轮虫、枝角类、桡足类，构成了食物链的第二环节。它们是鱼苗、虾苗最天然、最优质的开口饵料。这个由亿万微小生命构成的"看不见的森林"，支撑着从鱼虾到鸟类的整个庞大食物链。它们的平衡，就是整个生态系统平衡的基石。</p>
                         <img src="https://images.unsplash.com/photo-1574974413242-b858e574637b?q=80&w=1770" alt="Microscopic view of plankton">
                    `
                },
                decomposers: {
                     title: '水下的"清道夫"',
                     content: `
                        <h4>维系循环的分解者</h4>
                        <p>在水底的淤泥中，还生活着一个庞大的、由细菌和真菌组成的"分解者军团"。当水中的动植物死亡后，它们的遗骸会沉到水底，这些微生物就会立刻开始工作。它们将复杂的有机物分解为简单的无机盐和矿物质，例如硝酸盐和磷酸盐。</p>
                        <p>这个过程至关重要，因为它将生命所需的营养物质重新释放回水体中，供芦苇、浮游植物等生产者再次吸收利用。正是因为有了这些不知疲倦的"清道夫"，湿地的物质循环才能周而复始，永不停歇，维系着生态系统的长期稳定与繁荣。没有它们，湿地将会被死亡的有机物堆满，最终失去生机。</p>
                    `
                }
            }
        },
        tideland: {
            title: "滩涂层：滩涂脉搏",
            topics: {
                benthos: {
                    title: '底栖生物的生存之道',
                    content: `
                        <h4>潮汐间的生命盛宴</h4>
                        <p>每日两次的潮起潮落，塑造了滩涂这个独特的边缘生态系统。当潮水退去，看似泥泞的滩涂上，实际上是无数底栖生物的"自助餐厅"。它们是这场盛宴的主角，包括各种软体动物（如缢蛏、文蛤）、甲壳动物（如沙蟹、蝼蛄虾）和环节动物（如沙蚕）。</p>
                        <p>它们演化出了不同的生存策略：一些将自己深深埋藏在泥沙中躲避天敌和干旱，另一些则通过滤食水流带来的有机碎屑为生。正是这个庞大的底栖生物群落，为长途迁徙而来的鸻鹬类水鸟，提供了高热量的关键食物补给，让它们能在这里迅速"加油"，继续飞向远方。</p>
                    `
                },
                crabs: {
                    title: '横行的"盔甲卫士"',
                    content: `
                        <h4>塑造地貌的"工程师"</h4>
                        <p>在滩涂上横行的各种蟹类，远不止"霸道"那么简单。它们是名副其实的"生态系统工程师"。以招潮蟹为例，雄性挥舞的巨大螯肢不仅是求偶和战斗的工具，它们通过挖掘洞穴，极大地改变了滩涂的物理和化学环境。</p>
                        <p>这些密集的洞穴增加了沉积物的通气性和含水量，加速了有机物的分解，并为许多其他小型生物（如小鱼、小虾）提供了庇护所。它们通过自己的生命活动，客观上为其他物种创造了更适宜的生存空间，深刻地影响着整个滩涂生态系统的结构与功能。</p>
                         <img src="https://images.unsplash.com/photo-1580841124621-13a2157a4e39?q=80&w=1932" alt="A crab on the tideland">
                    `
                },
                salt_plants: {
                    title: '盐碱地的绿色先锋',
                    content: `
                        <h4>与"盐"共舞的生命奇迹</h4>
                        <p>在靠近陆地的高潮带，土壤盐度极高，普通植物难以存活。但这里却是盐地碱蓬、柽柳等盐生植物的舞台。它们演化出了一系列惊人的耐盐机制，是名副其实的"拓荒者"。</p>
                        <p>例如，盐地碱蓬可以将多余的盐分储存在肉质的叶片中，到秋天叶片变红脱落，从而将盐分排出体外。而柽柳则能通过腺体直接分泌盐分。这些植物不仅自身构成了独特的景观（如"红地毯"），更重要的是，它们的存在能够改良盐碱土壤，为其他植物的进入创造条件，是陆地生态系统向海洋推进的最前线。</p>
                    `
                }
            }
        }
    };

    // DOM Elements
    const ecoTuner = document.getElementById('eco-tuner');
    const tunerButtons = document.getElementById('tuner-buttons');
    const knowledgeCurtain = document.getElementById('knowledge-curtain');
    const closeCurtainBtn = document.getElementById('close-curtain-btn');
    const curtainContent = document.getElementById('curtain-text-content');
    const strataSections = document.querySelectorAll('.eco-strata');
    const heroSection = document.getElementById('hero-wetland');

    let currentStrata = null;

    // --- Tuner Logic ---
    function updateTuner(strataName) {
        if (!strataName || !strataData[strataName]) return;
        
        currentStrata = strataName;
        const strata = strataData[strataName];
        
        tunerButtons.innerHTML = ''; // Clear old buttons
        
        Object.keys(strata.topics).forEach(topicKey => {
            const topic = strata.topics[topicKey];
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.dataset.topic = topicKey;
            button.textContent = topic.title;
            li.appendChild(button);
            tunerButtons.appendChild(li);
        });
    }

    // --- Curtain Logic ---
    function openCurtain(topicKey) {
        if (!currentStrata || !topicKey) return;

        const topic = strataData[currentStrata].topics[topicKey];
        if (!topic) return;
        
        curtainContent.innerHTML = `<h4>${topic.title}</h4>${topic.content}`;
        knowledgeCurtain.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeCurtain() {
        knowledgeCurtain.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listener for tuner buttons (using event delegation)
    tunerButtons.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            openCurtain(e.target.dataset.topic);
        }
    });

    closeCurtainBtn.addEventListener('click', closeCurtain);
    knowledgeCurtain.addEventListener('click', (e) => {
        // Close if clicking on the background overlay
        if (e.target.id === 'knowledge-curtain') {
            closeCurtain();
        }
    });

    // --- IntersectionObserver Logic ---
    const strataObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const strataName = entry.target.dataset.strata;
                updateTuner(strataName);
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { root: null, threshold: 0.3 }); // Lowered threshold for better responsiveness

    strataSections.forEach(section => strataObserver.observe(section));
    
    // Separate observer for showing/hiding the tuner itself
    const tunerVisibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Show tuner if the first strata section is intersecting
             if (entry.target.id === 'sky-strata') {
                ecoTuner.classList.toggle('hidden', !entry.isIntersecting);
             }
        });
    }, { root: null, threshold: 0.1 }); // Show tuner when 10% of the first strata is visible
    
    const firstStrata = document.getElementById('sky-strata');
    if(firstStrata) {
       tunerVisibilityObserver.observe(firstStrata);
    }
}

// Ensure the function is available to be called from app.js or directly
if (typeof window.initWetlandPage === 'undefined') {
    window.initWetlandPage = initWetlandPage;
}

// Also, we need to call it if wetland.js is loaded
document.addEventListener('DOMContentLoaded', () => {
    // A check to see if it's the wetland page could be added here if needed,
    // but for now we assume this JS is only loaded on wetland.jsp.
    if (document.getElementById('wetland-container')) {
         initWetlandPage();
    }
});