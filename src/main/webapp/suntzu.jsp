<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>孙子兵法 V2.0：交互式数字画卷 - 生态东营</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/suntzu.css">
</head>
<body>

<jsp:include page="/header.jspf" />

<main id="suntzu-main">

    <!-- Module 1: Hero Section -->
    <section id="suntzu-hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1 class="hero-title">孙子兵法</h1>
            <p class="hero-subtitle">不战而屈人之兵，善之善者也</p>
            <div class="scroll-down-hint">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15.5l-5-5h10l-5 5z" fill="rgba(255,255,255,0.7)"/></svg>
    </div>
</div>
    </section>

    <div class="suntzu-container">
        <!-- Introduction Text - NOW REDESIGNED -->
        <div class="page-intro">
            <div class="intro-image-container">
                <img src="./img/孙武.jpg" alt="一尊静谧的东方智者青铜雕像，象征着孙武的深邃智慧">
            </div>
            <div class="intro-text-container">
                <h2>兵圣其人，光耀千古<span class="title-decoration"></span></h2>
                <p>孙武，这位春秋末期的伟大军事家，字长卿，据考证其故里正位于今山东省东营市广饶县。他所著的《孙子兵法》，不仅是中国古代军事思想的巅峰之作，更是世界军事理论中一颗璀璨的明珠。全书仅约六千字，却以其深邃的哲理、严谨的逻辑和普适的规律性，穿越了两千五百多年的时空长河。它早已超越了单纯的军事范畴，其"先胜后战"、"知己知彼"、"出奇制胜"等思想，深刻影响了东亚乃至全球的政治格局、商业竞争和人生哲学。从古老的战场到现代的商海，从东方的谋略到西方的决策，《孙子兵法》始终是智慧与策略的代名词，为无数追求胜利与卓越的人们提供着源源不断的思想启迪。今天，当我们再次翻开这部不朽的经典，依然能感受到其字里行间所蕴含的、足以洞察事物本质的强大力量。</p>
                <blockquote class="intro-quote">
                    "其思想早已超越军事范畴，其智慧深刻影响了东亚乃至全球的政治、商业与人生哲学。"
                </blockquote>
    </div>
        </div>

        <!-- Module 2: 13 Chapters Interactive Scroll -->
        <section id="suntzu-chapters">
            <h2>画卷 · 智解十三章<span class="title-decoration"></span></h2>
            <div class="bamboo-scroll-container">
                <div class="scroll-arrow left-arrow" role="button" aria-label="向左滚动">&lt;</div>
                <div class="bamboo-scroll-wrapper">
                    <div class="bamboo-scroll" role="listbox" aria-label="孙子兵法篇章选择">
                        <button class="bamboo-slip" data-chapter="1" role="option">计篇</button>
                        <button class="bamboo-slip" data-chapter="2" role="option">作战篇</button>
                        <button class="bamboo-slip" data-chapter="3" role="option">谋攻篇</button>
                        <button class="bamboo-slip" data-chapter="4" role="option">形篇</button>
                        <button class="bamboo-slip" data-chapter="5" role="option">势篇</button>
                        <button class="bamboo-slip" data-chapter="6" role="option">虚实篇</button>
                        <button class="bamboo-slip" data-chapter="7" role="option">军争篇</button>
                        <button class="bamboo-slip" data-chapter="8" role="option">九变篇</button>
                        <button class="bamboo-slip" data-chapter="9" role="option">行军篇</button>
                        <button class="bamboo-slip" data-chapter="10" role="option">地形篇</button>
                        <button class="bamboo-slip" data-chapter="11" role="option">九地篇</button>
                        <button class="bamboo-slip" data-chapter="12" role="option">火攻篇</button>
                        <button class="bamboo-slip" data-chapter="13" role="option">用间篇</button>
                    </div>
                </div>
                <div class="scroll-arrow right-arrow" role="button" aria-label="向右滚动">&gt;</div>
            </div>
            <div id="chapter-details-container" aria-live="polite">
                <div id="chapter-details">
                    <div class="chapter-content">
                        <h3>请点击上方竹简，查阅各篇章要义</h3>
                        <p>《孙子兵法》共十三篇，每一篇都聚焦于战争的一个特定方面，共同构成了一个全面而深刻的战略体系。从战前的宏观规划，到战中的具体执行，再到非常规手段的运用，环环相扣，层层递进。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Module 3: Case Studies -->
        <section id="suntzu-cases">
            <h2>博弈 · 古今之道<span class="title-decoration"></span></h2>
            <div class="case-grid">
                <button class="case-card">
                    <div class="card-flipper">
                        <div class="card-front">
                            <div class="card-bg" style="background-image: url('./img/围魏救赵.jpg');"></div>
                            <h3>古代战役：围魏救赵</h3>
                        </div>
                        <div class="card-back" aria-hidden="true">
                            <h4>兵法应用：避实击虚，攻其必救</h4>
                            <p><strong>战役背景：</strong>公元前354年，战国中期，魏国凭借霸主实力，发兵大举进攻赵国，并成功围困其都城邯郸。赵国无力抵抗，向盟友齐国紧急求援。<br><strong>关键进程：</strong>齐国主帅田忌原计划直接率军奔赴邯郸，与魏军主力决战。但军师孙膑（孙武后人）力排众议，提出了一个全新的方案：不与士气正盛的魏军主力硬碰硬（"避实"），而是挥师直击魏国本土、防备空虚的都城大梁（"击虚"）。魏惠王闻讯大惊，急令围困邯郸的魏军主力回防自救（"攻其所必救"）。<br><strong>兵法解析：</strong>早已在魏军回师的必经之路——桂陵设下埋伏的齐军，以逸待劳，大败仓皇回撤、疲惫不堪的魏军。此战是"致人而不致于人"思想的完美演绎，齐国自始至终掌握着战场的主动权，迫使强大的魏军按自己的剧本行动，是千古谋略的巅峰之作。</p>
                        </div>
                    </div>
                </button>
                <button class="case-card">
                    <div class="card-flipper">
                        <div class="card-front">
                            <div class="card-bg" style="background-image: url('./img/现代商战.jpg');"></div>
                            <h3>现代商战：苹果公司的生态战略</h3>
                        </div>
                        <div class="card-back" aria-hidden="true">
                            <h4>兵法应用：以正合，以奇胜；不战而屈人之兵</h4>
                            <p><strong>商业背景：</strong>在智能手机的红海市场，硬件参数的竞争日益激烈，是为"正兵"交战，比拼的是研发、供应链等硬实力。然而，苹果公司却在"正兵"之外，打出了一系列致命的"奇兵"。<br><strong>制胜策略：</strong>苹果的"奇兵"就是其封闭但体验极致的iOS生态系统，包括App Store、iCloud、以及各种独占服务。用户一旦习惯了这个生态，更换品牌的成本（学习成本、数据迁移成本、家庭设备兼容性）就会变得极高。这就巧妙地将竞争从单纯的硬件比拼，转移到了生态壁垒的对抗上。<br><strong>兵法解析：</strong>iPhone的持续硬件迭代是"以正合"，而其强大的生态系统则是"以奇胜"，创造了对手难以模仿的护城河。更深层次看，这种高转换成本让大量用户"心甘情愿"地留在其体系内，甚至无需每次都拿出压倒性的硬件优势，就实现了"不战而屈人之兵"的最高境界，是兵法智慧在商业领域的非凡再现。</p>
                        </div>
                    </div>
                </button>
                <button class="case-card">
                    <div class="card-flipper">
                        <div class="card-front">
                            <div class="card-bg" style="background-image: url('https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyZWVyLGRldmVsb3BtZW50LG9mZmljZXx8fHx8fDE3MTYwMDQ5ODU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');"></div>
                            <h3>个人发展：关键决策期的选择</h3>
                        </div>
                        <div class="card-back" aria-hidden="true">
                            <h4>兵法应用：知己知彼；智者之虑，必杂于利害</h4>
                            <p><strong>人生情景：</strong>假设一位优秀的软件工程师面临两个选择：A，加入一家著名的大公司，薪资优厚，工作稳定；B，加入一个前景不明但技术方向非常前沿的初创团队。<br><strong>决策分析：</strong>首先是"知己知彼"：了解自己的风险偏好、职业目标、技术热情（知己）；了解大公司的晋升路径、企业文化和初创公司的资源、团队氛围（知彼）。然后是"杂于利害"：选择A的"利"是稳定和光环，但"害"可能是创新受限、成为螺丝钉；选择B的"利"是巨大的成长潜力和技术挑战，但"害"是随时可能失败、血本无归。<br><strong>兵法启示：</strong>《孙子兵法》不提供标准答案，但提供思考框架。一个明智的决策者，会基于全面的信息，结合自身的长期战略（是求稳还是求进），做出权衡。兵法的智慧在于，它强迫我们超越表面的诱惑和恐惧，进行系统性和前瞻性的思考，从而做出更符合自己长远利益的决定。</p>
                        </div>
                    </div>
                </button>
            </div>
        </section>

        <!-- Module 4: Timeline -->
        <section id="suntzu-timeline">
            <h2>传承 · 智慧年轮<span class="title-decoration"></span></h2>
            <div class="timeline-container">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>约公元前512年：吴宫教战，一鸣惊人</h3>
                        <p>孙武，这位当时尚名不见经传的齐国人，携其呕心沥血之作《兵法十三篇》西行至吴国，通过吴国重臣伍子胥的引荐，得以谒见吴王阖闾。吴王虽赞赏其兵法理论，但仍存疑虑。为考验孙武的实际能力，吴王出了一个千古难题：命孙武训练180名手无寸铁的宫女。在申明军纪、三令五申后，宫女们仍视同儿戏，吴王的两名爱妃带头嬉笑。孙武为严明军纪，力排众议，果断下令将两名爱妃斩首示众。瞬间，全场肃然，再无人敢违抗军令。宫女队伍纪律严明，阵法井然。孙武以雷霆手段，向吴王展示了"令素行，与众相得"的治军核心，证明了他的理论绝非纸上谈兵。吴王深受震撼，遂拜孙武为上将军，开启了吴国称霸的序幕。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>公元220年前后：曹操注《孙子》，拨乱反正</h3>
                        <p>《孙子兵法》问世后数百年，虽流传甚广，但也因战乱和辗转抄录，出现了多个版本，其中不乏附会、臆测之言，甚至有许多冗余的"八卦"图解，混淆了兵法的本来面目。时至三国，一代雄主曹操，他不仅是"挟天子以令诸侯"的政治家，更是深谙兵法、亲历无数战阵的军事家。他深感兵法原著之精妙与后世注解之杂乱。于是，曹操调集天下藏本，以自己的实战经验和卓越见识为基础，对《孙子兵法》进行了系统性的整理、校订和注解，删去芜杂，保留精华，撰成《孙子略解》。这部著作，后世称之为《孙子注》，因其言简意赅、切中要害，迅速成为最权威的官方版本，为兵法在后世的准确、高效传承，立下了不朽功勋。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>公元1080年：位列《武经七书》，登临绝顶</h3>
                        <p>到了唐代，官方设立武举，军事理论教育走向正规化。至北宋时期，为应对与北方辽、西夏等少数民族政权的激烈军事对抗，宋神宗赵顼雄心勃勃，意图改革军制，富国强兵。他深感当时将领普遍"不习兵法"，遂于元丰三年（公元1080年）下令，由朝中大学士对历代兵书进行官方整理。最终，一个名为《武经七书》的兵学大典正式颁行，作为武学博士的教学范本和武举考试的核心教材。《孙子兵法》因其无与伦比的理论高度、严谨的逻辑体系和深邃的战略思想，被毫无争议地尊为七书之首。这不仅是官方的最高认可，更标志着它在中国古代军事思想的正统体系中，取得了至高无上的"兵学圣典"地位。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>16世纪：东渡扶桑，影响战国风云</h3>
                        <p>《孙子兵法》很可能在唐朝时便已随遣唐使传入日本，并在其军事和文化领域潜移默化。在群雄割据、战火纷飞的16世纪日本战国时代，这本东方兵学宝典大放异彩。其中最著名的例子，便是被誉为"甲斐之虎"、"战国第一兵法家"的武田信玄。他将《孙子兵法·军争篇》中的"其疾如风，其徐如林，侵掠如火，不动如山"十六字真言，绣在自己的军旗之上。这面"风林火山"旗，成为了武田军战无不胜的象征，令敌人闻风丧胆。这不仅是兵法思想在异国战场上的成功实践，也开启了《孙子兵法》作为一种文化符号，深刻影响东亚乃至世界历史的进程。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>1772年：西传欧洲，启迪近代兵圣</h3>
                        <p>在18世纪的"中国热"席卷欧洲大陆的背景下，旅居中国的法国耶稣会士钱德明神父（Jean Joseph Marie Amiot），完成了一项历史性的工作。他将《孙子兵法》翻译成法文，并以《中国的军事艺术》为名，在思想启蒙运动的中心巴黎正式出版。这部译著在欧洲上流社会和精英军事界引起了巨大轰动。据传闻，法国皇帝拿破仑在遭遇滑铁卢惨败、被流放到圣赫勒拿岛后，偶然读到了此书，发出"倘若我早些读到它，历史的结局将会改写"的千古慨叹。尽管此说真伪难辨，但无疑，《孙子兵法》的西传，标志着东方战略思想开始真正走向世界，为西方军事理论注入了全新的哲学思辨。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>1972年：汉墓竹简，石破天惊</h3>
                        <p>数千年来，关于"孙子"究竟是孙武还是孙膑，甚至孙武此人是否存在，一直是史学界悬而未决的公案。直到1972年4月，山东临沂银雀山的一座西汉前期墓葬中，考古学家发掘出土了近五千枚珍贵的古代兵书竹简。经过专家们的清理和释读，一个震惊世界的发现在于：这里不仅有内容完备、分上下两篇的《孙子兵法》共十三个篇章，还同时发现了失传已久的、被认为是孙武后人的孙膑所著的《孙膑兵法》。这一考古发现，如同石破天惊，以无可辩驳的实物证据，一举解决了千古之谜，证实了孙武及其兵法的真实存在与成书年代。它不仅是中国考古学的里程碑，更是世界军事史研究的重大突破。</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>20-21世纪：跨界融合，全球共赏</h3>
                        <p>进入信息时代，《孙子兵法》的价值非但没有褪色，反而因其深刻的普适性而愈发璀璨。在1991年的海湾战争中，美军以"知己知彼"的情报优势和"避实击虚"的电子战、空袭战术，取得了压倒性胜利，战后多位美军高级将领公开承认其战术思想深受《孙子兵法》启发。如今，它不仅是西点军校、英国桑赫斯特皇家军事学院等世界顶级军事学府的必修课，更被哈佛商学院、沃顿商学院等顶尖学府引入为高级管理人员的战略教材。其智慧跨越了军事、商业、外交、体育竞技甚至个人生活的界限，真正成为了全人类共享的、历久弥新的智慧财富。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Module 5: Quiz -->
        <section id="suntzu-quiz">
            <h2>论道 · 兵法问答<span class="title-decoration"></span></h2>
            <div id="quiz-container">
                <div id="quiz-intro">
                    <p>您已经阅览了兵法的智慧，现在来小试牛刀吧！完成以下题目，看看您能获得怎样的评价。</p>
                    <button id="start-quiz-btn">开始挑战</button>
                </div>
                <div id="quiz-main-content" class="hidden">
                    <p id="quiz-question-counter"></p>
                    <h3 id="quiz-question"></h3>
                    <div id="quiz-options"></div>
                    <p id="quiz-feedback" aria-live="polite"></p>
                    <button id="quiz-next-btn" class="hidden">下一题</button>
                </div>
                <div id="quiz-results" class="hidden" aria-live="polite">
                    <h3>挑战完成！</h3>
                    <p id="quiz-score"></p>
                    <p id="quiz-result-text"></p>
                    <button id="restart-quiz-btn">再试一次</button>
            </div>
        </div>
        </section>
    </div>
</main>

<jsp:include page="/WEB-INF/jspf/footer.jspf" />

<script src="${pageContext.request.contextPath}/js/suntzu.js"></script>

</body>
</html> 