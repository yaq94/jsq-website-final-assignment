<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页 - 黄河入海 生态东营 3.0</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>

<jsp:include page="/header.jspf" />

<main>
    <!-- 1. 动态页头 (Dynamic Hero) -->
    <section class="hero-dynamic">
        <div class="hero-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/1.jpg');"></div>
        <div class="container hero-content">
            <h1>黄河息壤，大美东营</h1>
            <p class="subtitle">这里是黄河万里奔腾的终章，亦是中华文明磅礴史诗的最新序曲。东营，一座在河与海的壮丽交响中诞生的城市，它的脉搏与共和国的能源心跳同频共振，它的呼吸同千万迁徙候鸟的羽翼和谐与共。我们邀请您，不仅仅是作为一名访客，更是作为一位探索者，来阅读这片土地的传奇。从兵圣孙武的深邃智慧，到胜利油田的豪迈激情；从一望无垠的新生湿地，到河海交汇的旷世奇观。这片永远年轻的土地，每一寸肌理都充满了新生的力量与融合的魅力，它的故事，正以一种前所未有的方式，等待着与您相遇。</p>
        </div>
    </section>

    <!-- 2. 核心特色筛选网格 (Filtered Grid) -->
    <section class="filtered-grid-section">
        <div class="container">
            <div class="section-header">
                <h2>探索东营的核心魅力</h2>
                <p>选择一个您感兴趣的方向，深入了解构成东营灵魂的关键元素。</p>
            </div>
            <div class="interest-buttons">
                <button class="interest-btn active" data-filter="all">全部展示</button>
                <button class="interest-btn" data-filter="nature">拥抱自然</button>
                <button class="interest-btn" data-filter="history">探寻历史</button>
                <button class="interest-btn" data-filter="life">品味生活</button>
            </div>
            <div class="content-grid">
                <div class="card" data-category="nature">
                    <div class="card-image-wrapper"><img src="img/2.jpg" alt="黄河入海"></div>
                    <div class="card-content">
                        <h3>黄河入海口：沧海桑田的现代史诗</h3>
                        <p>黄河，这条奔腾不息的母亲河，在历经九曲十八弯，跨越万里山河之后，于东营画上了它雄浑旅程的休止符。但结束亦是新生。每年，约16亿吨泥沙随波逐流至此，其中4亿吨在此沉降，日复一日，年复一年，为共和国新增约两万亩的土地。这使得东营的海岸线以每年超过两公里的速度向大海延伸，成为地球上生长最快的陆地之一。站在这片新生的大地上，您能亲眼见证"沧海桑田"这一古老成语的现代演绎。最为壮观的，无疑是"黄蓝交汇"的奇景。浑浊厚重的黄河水与蔚蓝清澈的渤海水在此相遇，形成一道泾渭分明、延绵数公里的锋线。这不仅是一场视觉的盛宴，更是一堂生动的地理课，它直观地展示了不同密度、盐度的水体在自然力量下的博弈与融合。这里是摄影家镜头下的天堂，是地理学者研究的活标本，更是每一位到访者心中难以磨灭的自然奇迹。</p>
                    </div>
                </div>
                <div class="card" data-category="nature">
                    <div class="card-image-wrapper"><img src="img/3.jpg" alt="湿地生态"></div>
                    <div class="card-content">
                        <h3>湿地生态：万物有灵的生命"机场"</h3>
                        <p>东营拥有中国最完整、最广阔、最年轻的湿地生态系统——黄河三角洲国家级自然保护区。这里被誉为"地球的肾脏"，是维护生态平衡的重要屏障。每年春秋两季，数以百万计的候鸟将此作为迁徙途中至关重要的"补给站"和"加油站"，其中包括东方白鹳、丹顶鹤等众多世界级珍稀鸟类，使其成为名副其实的"鸟类国际机场"。秋季，一望无际的翅碱蓬草由绿变红，织就了广袤无垠的"红地毯"，与蓝天碧水交相辉映，构成一幅令人叹为观止的壮美画卷。这片湿地不仅仅是鸟类的乐园，其丰富的生物多样性同样令人惊叹。芦苇荡随风摇曳，如同绿色的海洋；各种鱼、虾、蟹、贝在水中繁衍生息，构成了一个完整的食物链。在这里，人与自然的关系被重新定义。您可以沿着木栈道深入湿地腹地，聆听百鸟争鸣，感受微风拂面，体会那种远离尘嚣、回归自然的宁静与和谐，深刻理解"绿水青山就是金山银山"的生态智慧。</p>
                    </div>
                </div>
                <div class="card" data-category="history">
                    <div class="card-image-wrapper"><img src="img/4.jpg" alt="孙子故里"></div>
                    <div class="card-content">
                        <h3>孙子故里：兵学智慧的永恒回响</h3>
                        <p>在东营广饶这片古老的土地上，诞生了影响世界超过两千五百年的兵学圣典——《孙子兵法》。其作者孙武，字长卿，以其深邃的军事哲学思想，塑造了中国乃至世界军事理论的基石。孙子文化园便是为了纪念这位伟大的军事家而建，它不仅是一座纪念性的建筑群，更是一个让兵法智慧活起来的文化体验空间。园内通过详实的史料、逼真的场景再现以及现代化的多媒体技术，系统地展示了孙武的生平事迹、《孙子兵法》的核心思想及其在现代社会中的广泛应用。您可以在这里探寻"不战而屈人之兵"的最高境界，理解"知己知彼，百战不殆"的辩证逻辑，感悟"兵者，诡道也"的应变之术。兵法中的智慧早已超越了军事范畴，深刻地影响着现代商业竞争、企业管理、外交策略乃至个人修身处世。踏入这片土地，仿佛能听到历史的回响，感受到那份源自古齐文化土壤的深邃与理性，为您的思想宝库增添一份来自东方的千年智慧。</p>
                    </div>
                </div>
                <div class="card" data-category="history">
                    <div class="card-image-wrapper"><img src="img/5.jpg" alt="石油之城"></div>
                    <div class="card-content">
                        <h3>石油之城：激情燃烧的共和国记忆</h3>
                        <p>东营的现代化城市史，与新中国一部壮丽的工业史诗紧密相连。1961年，华八井的成功出油，宣告了中国第二大油田——胜利油田的诞生。从此，一代又一代的石油人，从祖国的四面八方汇聚于此，在这片亘古的盐碱荒滩上，以"我为祖国献石油"的豪情壮志，展开了一场艰苦卓绝的会战。他们的青春、汗水甚至生命，都熔铸进了这座城市的基石之中。当年的"牛棚宿舍"、"干打垒"记录了创业的艰辛，而今天林立的井架、纵横的管网和现代化的炼化基地，则见证了辉煌的成就。胜利油田不仅为共和国的经济发展输送了源源不断的工业血液，更孕育了独特的"胜利精神"——一种爱国奉献、艰苦奋斗、求真务实、开拓创新的精神。如今的东营，早已从一个单纯的油田基地，发展成为一座宜居的现代化工业城市。但那段激情燃烧的岁月，已然成为这座城市永不褪色的集体记忆和精神坐标，激励着新时代的东营人继续前行。</p>
                    </div>
                </div>
                <div class="card" data-category="life">
                    <div class="card-image-wrapper"><img src="img/刀鱼烹饪.jpg" alt="东营美食"></div>
                    <div class="card-content">
                        <h3>东营美食：河海之交的味蕾盛宴</h3>
                        <p>独特的地理位置，赋予了东营独一无二的饮食文化。在这里，黄河的鲜美与渤海的咸鲜激情碰撞，共同谱写出一曲令人垂涎的味蕾交响乐。黄河刀鱼，是母亲河在入海前最后的馈赠，肉质细嫩，味道极致鲜美，是无数美食家追寻的珍品。史口镇的大闸蟹，在黄河水的滋养下，膏满黄肥，其品质足以与任何著名的蟹乡相媲美。而来自渤海湾的馈赠同样丰厚，莱州湾的大对虾，体硕肉弹，无论是简单的白灼还是浓郁的油焖，都能让人回味无穷；广利港的文蛤，被誉为"天下第一鲜"，是煲汤或辣炒的绝佳食材。除了河海大餐，东营的地方特色小吃同样不容错过。利津水煎包，以其"一面焦脆，三面软嫩，馅多汤足"的特点，征服了无数食客的味蕾，成为东营最具代表性的名小吃。而历史悠久的广饶肴驴肉，色泽红润，香味浓郁，是下酒佐餐的佳品。在东营，品尝美食，不仅仅是满足口腹之欲，更是一次对风土人情的深度体验。</p>
            </div>
        </div>
    </div>
        </div>
    </section>

    <!-- 3. 交互式历史时间轴 (Interactive Timeline) -->
    <section class="timeline-section">
        <div class="container">
            <div class="section-header">
                <h2>东营纪年：从古韵到新篇</h2>
                <p>在时间的长河中，这片土地经历了从荒原到文明，从沉寂到辉煌的深刻演变。</p>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>史前文明的曙光</h3>
                        <p>早在数千年前，我们的祖先就在这片土地上繁衍生息，创造了灿烂的史前文化。考古发现的"傅家遗址"等，证明了这里是龙山文化的重要分布区。先民们用智慧和勤劳，在这片沿海平原上开启了文明的篇章，他们的生活方式、图腾崇拜和部落结构，共同构成了东营地区深厚的历史底蕴，为后来齐文化的发展埋下了伏笔。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>春秋齐风与兵圣诞生</h3>
                        <p>春秋时期，此地属齐国。作为泱泱大国的重要组成部分，深受齐文化"变革、开放、务实、包容"的精神浸染。在这一时代背景下，诞生了伟大的军事家、思想家孙武。他所著的《孙子兵法》，不仅是军事领域的圣典，更是中华智慧的结晶，其思想光芒穿越千年，至今仍在全球范围内闪耀，成为东营最宝贵的历史文化名片。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>千年盐渔的传承</h3>
                        <p>自古以来，得天独厚的沿海地理位置，使"渔盐之利"成为这片土地上人民生存发展的重要依托。古代的盐业生产，技术不断革新，规模日益扩大，不仅满足了区域需求，更成为历代王朝的重要税收来源。同时，捕捞、养殖等渔业活动也从未间断，形成了独特的渔家文化和民俗风情。这种靠海而生、向海而兴的传统，塑造了东营人民坚韧、开放的性格。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>胜利油田的发现与会战</h3>
                        <p>1961年，华八井的工业油流，像一声惊雷，震醒了沉睡的荒原。胜利油田的发现，彻底改变了这片土地的命运。来自五湖四海的石油大军，响应国家号召，汇聚于此，展开了一场气壮山河的石油会战。在极其艰苦的条件下，他们用青春和热血，建起了中国第二大油田，为新中国的工业化进程立下了不朽功勋，也奠定了现代化东营的城市基础。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>建市与黄河三角洲的开发</h3>
                        <p>1983年，东营市正式成立，标志着这片区域进入了统筹规划、全面发展的新阶段。伴随着改革开放的春风，国家将黄河三角洲开发提升到国家战略层面。东营作为中心城市，迎来了前所未有的发展机遇。农业、工业、港口、城市建设齐头并进，一个充满活力的区域经济增长极开始迅速崛起，昔日的盐碱滩涂，正在变为投资兴业的热土。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>步入新时代：生态与高质量发展</h3>
                        <p>进入21世纪，特别是新时代以来，东营深刻践行"绿水青山就是金山银山"的理念。将生态文明建设放在前所未有的高度，大力保护和修复湿地生态，推动产业转型升级。一个以高效生态农业、先进制造业、现代服务业为支撑的高质量发展新格局正在形成。今天的东营，正以一个生态优美、产业优化、人民幸福的现代化湿地城市的崭新面貌，自信地走向未来。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. 四季切换选项卡 (Seasonal Tabs) -->
    <section class="seasonal-tabs-section">
        <div class="container">
            <div class="section-header">
                <h2>四时之景，各有风情</h2>
                <p>东营的魅力，随季节流转而呈现出不同的面貌。</p>
            </div>
            <div class="tabs-nav">
                <button class="tab-button active" data-tab="spring">春之声</button>
                <button class="tab-button" data-tab="summer">夏之歌</button>
                <button class="tab-button" data-tab="autumn">秋之画</button>
                <button class="tab-button" data-tab="winter">冬之韵</button>
            </div>
            <div class="tabs-content">
                <div class="tab-pane active" id="spring">
                    <h3>春之声：万物复苏，鸟鸣啁啾</h3>
                    <p>当第一缕春风拂过黄河入海口，沉睡了一冬的湿地便开始苏醒。冰雪消融，潺潺的流水重新在河道间欢唱。滩涂上的芦苇、碱蓬争相抽出嫩绿的新芽，为广袤的大地披上生机盎然的绿装。这是观鸟的最佳时节。数以百万计的候鸟，如约而至地飞抵这片"国际机场"，它们在这里停歇、觅食、追逐、繁衍，构成一曲生命的赞歌。天空是它们翱翔的舞台，湿地是它们欢聚的家园。此时的东营，空气中都弥漫着清新与希望的味道，是踏青、摄影、感受自然脉动的绝佳去处。</p>
                </div>
                <div class="tab-pane" id="summer">
                    <h3>夏之歌：绿意盎然，海风送爽</h3>
                    <p>夏季的东营，是绿色的海洋。无边的芦苇荡郁郁葱葱，随风起伏，宛如绿色的波浪。此时，黄河水量充沛，携带着巨量的泥沙奔腾入海，"黄蓝交汇"的奇观也最为壮丽分明。驱车行驶在沿海公路上，一边是浩瀚的渤海，一边是广阔的湿地，海风带来丝丝凉意，驱散了盛夏的酷热。您可以在海滨浴场享受阳光、沙滩和海浪，也可以乘船出海，体验渔家捕捞的乐趣。夜晚，城市的灯火与天上的繁星交相辉映，伴着海浪与蛙鸣，品尝着新鲜的海鲜烧烤，构成了东营夏日里最惬意的生活画卷。</p>
                </div>
                <div class="tab-pane" id="autumn">
                    <h3>秋之画：红毯迎宾，蟹肥鱼香</h3>
                    <p>秋天，是东营色彩最浓烈、最富诗意的季节。湿地中大片的翅碱蓬草，在秋霜的浸染下，由绿变红，最终汇成一片壮观的"红色海岸线"，如同为迎接南迁的候鸟而铺就的盛大红毯。蓝天白云之下，这片耀眼的红色绵延天际，是任何语言都难以形容的震撼。同时，秋季也是收获的季节。黄河口的刀鱼、史口的大闸蟹、莱州湾的对虾……各种河鲜海产最为肥美，是饕客们大快朵颐的黄金时节。秋高气爽，无论是去湿地看红毯，还是去渔家品海鲜，都能让您深刻感受到这座城市富饶而多彩的魅力。</p>
                </div>
                <div class="tab-pane" id="winter">
                    <h3>冬之韵：静谧辽阔，孕育希望</h3>
                    <p>冬日的东营，褪去了绚烂的色彩，展现出一种静谧而辽阔的美。雪后的湿地，银装素裹，一片洁白。枯黄的芦苇在寒风中摇曳，残存的芦花随风飞舞，如同冬日的飞雪。冰封的河面上，偶尔能看到一些耐寒的水鸟在寻觅食物，为这片寂静的世界增添了几分灵动。此时的黄河，水量减少，河道变得蜿蜒曲折，在冰冻的滩涂上勾勒出优美的线条。这是一个休养生息的季节，万物都在积蓄力量，孕育着来年的希望。对于喜欢安静、享受孤独之美的旅行者来说，冬日的东营，有着一种别样的、深沉的吸引力。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. 城市故事轮播 (Story Carousel) -->
    <section class="story-carousel-section">
        <div class="container">
            <div class="section-header">
                <h2>城市音符：那些人，那些事</h2>
                <p>每一座伟大的城市，都由无数普通人的故事构成。</p>
            </div>
            <div class="story-carousel">
                <div class="story-card active">
                    <h4>老石油工人的独白</h4>
                    <p>"我还记得60年代刚来的时候，这里啥都没有，就是一片白花花的盐碱地，风一吹，眼睛都睁不开。我们住干打垒，喝苦咸水，冬天冷得像冰窖。那时候就一个念头：国家缺油，我们得把油从地下掏出来！看着第一口井喷出乌黑的油龙，大伙儿都哭了，又哭又笑。现在，看着这高楼大厦，看着这绿树成荫，再看看我的孙子辈，有时候会觉得像做梦一样。这辈子最骄傲的事，就是把青春献给了这片土地，我们这代人，对得起'石油工人'这四个字。" - 王建国，退休钻井队长</p>
                </div>
                <div class="story-card">
                    <h4>湿地研究员的日记</h4>
                    <p>"今天又在监测点看到了那只编号为E07的东方白鹳，它又回来了，还带着它的伴侣和三只雏鸟。这是我们连续第五年记录到它的回归。每次看到它们，都觉得我们所有的辛苦都是值得的。保护湿地，不是一句口号，而是每天枯燥的数据记录，是顶着烈日或寒风的巡护，是跟盗猎者斗智斗勇。很多人看到的是红地毯的美景，但我们看到的，是这背后每一个物种的生存与繁衍。这片土地的生态正在一天天变好，这就是我选择留在这里的最大意义。" - 李静，黄河三角洲自然保护区研究员</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 6. 动态数字统计 (Animated Counters) -->
    <section class="counters-section">
        <div class="container">
            <div class="counters-grid">
                <div class="counter-item">
                    <div class="counter" data-target="380">0</div>
                    <h4>鸟类种类 (种)</h4>
                    <p>是东方鸟类迁徙路线上的重要驿站</p>
                </div>
                <div class="counter-item">
                    <div class="counter" data-target="20">0</div>
                    <h4>新生土地面积 (平方公里/年)</h4>
                    <p>地球上生长最快的土地之一</p>
                </div>
                <div class="counter-item">
                    <div class="counter" data-target="2500">0</div>
                    <h4>兵法传承历史 (年)</h4>
                    <p>孙子故里，智慧之源</p>
                </div>
                <div class="counter-item">
                    <div class="counter" data-target="2000">0</div>
                    <h4>年产原油 (万吨级)</h4>
                    <p>共和国重要的能源基地</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- 7. 增强图片画廊 (Enhanced Gallery) -->
    <section class="photo-gallery-section">
        <div class="container">
             <div class="section-header">
                <h2>光影东营</h2>
                <p>点击图片，欣赏更多精彩瞬间。</p>
            </div>
            <div class="photo-grid">
                <div class="photo-item"><img src="img/7.jpg" alt="黄蓝交汇"></div>
                <div class="photo-item"><img src="img/8.jpg" alt="红地毯"></div>
                <div class="photo-item"><img src="img/4.jpg" alt="孙子文化园"></div>
                <div class="photo-item"><img src="img/9.jpg" alt="胜利油田井架"></div>
                <div class="photo-item"><img src="img/煎包烹饪.jpg" alt="利津水煎包"></div>
                <div class="photo-item"><img src="img/10.jpg" alt="候鸟天堂"></div>
        </div>
    </div>
    </section>

</main>

<jsp:include page="/WEB-INF/jspf/footer.jspf" />

<!-- Lightbox structure -->
<div id="lightbox" class="lightbox">
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
    <div id="lightbox-caption"></div>
</div>

<script src="${pageContext.request.contextPath}/js/app.js"></script>

</body>
</html> 