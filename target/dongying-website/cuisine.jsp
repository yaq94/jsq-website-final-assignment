<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>东营风味绘卷</title>
    <link rel="stylesheet" href="css/style.css"> <%-- Global styles --%>
    <link rel="stylesheet" href="css/cuisine.css"> <%-- Specific styles for this page --%>
</head>
<body class="cuisine-theme"> <%-- Add a class to scope the new styles --%>

    <jsp:include page="header.jspf"/>

    <div class="cuisine-page-wrapper">

        <!-- Module 1: Dynamic Introduction -->
        <header class="cuisine-hero">
            <div class="hero-background"></div>
            <div class="hero-content">
                <h1 class="hero-title">东营味道</h1>
                <p class="hero-subtitle">一部流动的盛宴</p>
                <p class="hero-scroll-prompt">向下滚动，展开风味绘卷</p>
            </div>
        </header>

        <!-- Main content area -->
        <div class="cuisine-main-content">

            <!-- Module 2: Flavor Compass -->
            <aside class="flavor-compass">
                <nav>
                    <ul>
                        <li data-category="all" class="active">
                            <span class="compass-icon">🌐</span>
                            <span class="compass-text">卷观全貌</span>
                        </li>
                        <li data-category="river-sea">
                            <span class="compass-icon">🐟</span>
                            <span class="compass-text">河海的恩赐</span>
                        </li>
                        <li data-category="land-bounty">
                            <span class="compass-icon">🐄</span>
                            <span class="compass-text">大地的馈赠</span>
                        </li>
                        <li data-category="pastry-art">
                            <span class="compass-icon">🥟</span>
                            <span class="compass-text">面食的艺术</span>
                        </li>
                        <li data-category="festival-feasts">
                            <span class="compass-icon">🏮</span>
                            <span class="compass-text">节庆的盛筵</span>
                        </li>
                        <li data-category="time-taste">
                            <span class="compass-icon">🕰️</span>
                            <span class="compass-text">时间的味道</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            <!-- Module 3: The Culinary Scroll -->
            <main id="culinary-scroll" class="culinary-scroll">
                
                <section class="culinary-chapter" data-category="river-sea">
                    <div class="chapter-content-grid">
                        <div class="chapter-visual">
                             <img src="./img/刀鱼源.jpg" alt="黄河口刀鱼" style="position: relative; top: 220px;">
                            <img src="./img/刀鱼鲜.jpg" alt="刀鱼1" style="position: relative; top: 500px;">
                            <img src="./img/刀鱼烹饪.jpg" alt="刀鱼2" style="position: relative; top: 800px;">
                        </div>
                        <div class="chapter-story">
                            <h2 class="chapter-main-title">黄河口刀鱼</h2>
                            <p class="chapter-subtitle">时光的逆旅者，一期一会的河海奇珍</p>
                            
                            <h3>“源” · 大河的信使</h3>
                            <p>在东营的饮食文化中，黄河口刀鱼不仅是一种食材，更是一个传奇，一个关于时间、迁徙与等待的信物。每年春季，当冰封的黄河开始解冻，万物复苏之际，刀鱼便会准时集结于长江口，开始它们史诗般的溯游之旅。然而，最独特的一支，会毅然北上，沿着海岸线，逆流而上，最终抵达黄河的入海口。这不仅仅是一次生命的洄游，更是一场严酷的筛选。只有最强壮、最坚韧的刀鱼，才能完成这段漫长的旅程，因此，黄河口刀鱼比之长江刀鱼，体型或许不大，但其肉质的细腻与风味的凝聚，却达到了无与伦比的境界。当地渔民流传着一句话：“清明前，骨软如绵；清明后，骨硬如铁。” 这精准地道出了品尝刀鱼那短暂而珍贵的黄金时期。捕捞刀鱼，更是一项考验智慧与耐心的传统技艺。渔民们需要精准地判断潮汐、水文，布下天罗地网，等待着这些银色闪电般的精灵自投罗网。这份等待，既是对大自然馈赠的敬畏，也是东营人与黄河千年对话的延续。</p>

                            <h3>“鲜” · 极致的风味</h3>
                            <p>黄河口刀鱼之鲜，是一种极致而纯粹的味觉体验。它的“鲜”并非霸道张扬，而是一种内敛、悠长、沁人心脾的甘醇。鱼肉细嫩如豆腐，入口即化，几乎感觉不到纤维的存在。品尝时，无需繁复的调味，最简单的烹饪方式反而最能凸显其本味。那股鲜美，混合了河水的甘洌与海水的咸鲜，仿佛将整个黄河口的风土人情都浓缩在了其中。鱼肉深处，还透着一股淡淡的、类似兰花的清香，这是其他任何鱼类都无法比拟的独特印记。除了鱼肉，刀鱼的鱼刺也颇有讲究。清明前的刀鱼，软刺细如牛毛，含在口中，稍加吮吸便能使其融化，与鱼肉一同下咽，更添一番风味。而鱼鳞之下那层薄薄的脂肪，经过烹饪后会化作一层亮晶晶的鱼油，包裹着鱼肉，使其口感更加丰腴、润滑。这是一种需要静心品味、用灵魂去感受的鲜美，每一口都是对自然的感恩。</p>

                            <h3>“烹” · 对本味的尊重</h3>
                            <p>面对黄河口刀鱼这样的顶级食材，任何复杂的烹饪手法都是一种亵渎。东营的厨师们深谙此道，他们对刀鱼的处理，充满了对本味的敬畏与尊重。最经典、也是最高级的做法，莫过于“清蒸刀鱼”。选用最新鲜的刀鱼，不去鳞，仅除去内脏，保持其完整性。盘底铺上几片嫩姜，几段青葱，将刀鱼置于其上，再淋上少许本地酿造的酱油和一点点猪油提香。旺火速蒸，时间必须掐得恰到好处，早一分钟则生，晚一分钟则老。出锅时，鱼身完整，银光闪亮，热气腾腾中散发出最原始、最动人的鲜香。另一种做法是“刀鱼馄饨”，这是一种奢侈的享受。将新鲜的刀鱼肉手工刮下，剔除鱼刺，用刀背反复捶打成细腻的鱼茸，仅以少许盐和蛋清调味，包裹在薄如蝉翼的馄饨皮中。煮熟后，汤色清亮，馄饨浮于水面，如一个个小小的元宝，入口滑嫩，鲜美无比，每一口都是精华的浓缩。这些烹饪方式，看似简单，实则蕴含着大道至简的东方哲学，是对食材最深情的致敬。</p>
                            
                            <button class="recipe-toggle" data-target="recipe-dadaoyu">一窥庖厨</button>
                            <div class="recipe-content" id="recipe-dadaoyu">
                                <h4>家常清蒸刀鱼</h4>
                                <p><strong>食材：</strong>新鲜黄河口刀鱼1条，嫩姜5片，小葱3段，猪油1小勺，高质量酱油2汤匙，料酒1汤匙。</p>
                                <p><strong>步骤：</strong></p>
                                <ol>
                                    <li>刀鱼不去鳞，从鳃部开口取出内脏和鳃，清洗干净，用厨房纸吸干水分。在鱼身两面浅浅地划上几刀，便于入味。</li>
                                    <li>取一个长盘，盘底铺上姜片和小葱段。将刀鱼放置在葱姜上，淋上料酒。</li>
                                    <li>在鱼身上均匀地抹上一层猪油，这能让鱼肉更加嫩滑，香气更足。</li>
                                    <li>蒸锅中的水烧至完全沸腾，将鱼盘放入，盖上锅盖，用最大火蒸6-8分钟（根据鱼的大小调整）。</li>
                                    <li>时间一到，立即关火取出。倒掉盘中多余的汤汁（这步很重要，可以去除腥味），淋上酱油。</li>
                                    <li>另起一锅，烧热少许食用油，待油冒烟时，迅速淋在鱼身上，随着“滋啦”一声，葱香和鱼鲜被彻底激发出来，即可上桌。</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="culinary-chapter" data-category="land-bounty">
                    <div class="chapter-content-grid">
                         <div class="chapter-visual">
                             <img src="./img/驴肉源.jpg" alt="广饶肴驴肉" style="position: relative; top: 220px;">
                             <img src="./img/驴肉鲜.jpg" alt="驴肉1" style="position: relative; top: 500px;">
                             <img src="./img/驴肉烹饪.jpg" alt="驴肉2" style="position: relative; top: 800px;">

                        </div>
                        <div class="chapter-story">
                            <h2 class="chapter-main-title">广饶肴驴肉</h2>
                            <p class="chapter-subtitle">时间的杰作，齐鲁大地的醇厚回响</p>
                            
                            <h3>“源” · 百年传承</h3>
                            <p>“天上龙肉，地上驴肉”，这句俗语在东营的广饶县得到了最完美的诠释。广饶肴驴肉，其历史可以追溯到清朝同治年间，距今已有一百多年的历史。它不仅仅是一道菜，更是一种文化符号，是广饶人引以为傲的非物质文化遗产。相传，最初的创始人是一位姓王的师傅，他无意中将煮驴肉的配方进行了改良，加入了几味特殊的中草药，并延长了熬煮的时间，使得做出的驴肉色泽红润、香气四溢、口感独特，从此一炮而红。制作肴驴肉的工艺极为讲究，选料必须是本地饲养的健壮德州驴，取其后腿等精华部位。制作过程更是一场与时间的漫长对话，要经过分割、浸泡、焯水、熬煮、收汁等多道复杂工序，整个过程需要十几个小时甚至更久。老师傅们凭借世世代代口耳相传的经验，精准地控制着火候和香料的配比，这种技艺，无法用标准化的流程来衡量，全凭一颗匠心。如今，广饶肴驴肉早已名扬四海，成为国家地理标志产品，但最正宗的味道，依然留存在广饶那些不起眼的老字号店铺里。</p>

                            <h3>“鲜” · 醇厚之味</h3>
                            <p>广饶肴驴肉的“鲜”，是一种醇厚、复合、层层递进的味觉体验。它不同于海鲜的直接，也不同于河鲜的清雅，而是一种来自土地深处的、经过时间淬炼的浓郁。刚出锅的肴驴肉，色泽棕红透亮，宛如一块温润的琥珀。香气浓郁但不刺鼻，是肉香、酱香和二十多种香料的草本清香完美融合的结晶。切开后，肉质紧实，纹理清晰，瘦肉不柴，肥肉不腻，中间还夹杂着晶莹剔-透的肉皮，口感极富层次。入口细细咀嚼，首先感受到的是浓郁的酱香，随之而来的是驴肉本身特有的甘甜，最后，多种香料的复合香气在口腔中慢慢散开，回味悠长。最好的吃法，莫过于搭配一个刚刚出炉的、热气腾腾的火烧。将切成薄片的肴驴肉夹入其中，驴肉的咸香醇厚与火烧的麦香酥脆在口中交织，那份满足感，足以慰藉任何挑剔的味蕾。这是一种能唤醒乡愁的味道，是刻在广饶人基因里的味觉记忆。</p>

                            <h3>“烹” · 时间的魔法</h3>
                            <p>广饶肴驴肉的烹饪，是一场由时间主导的魔法。其核心在于一个“肴”字，即用文火长时间慢慢熬煮。整个制作过程可以分为“武火攻，文火守”。首先，将处理好的驴肉块放入大锅中，用大火烧开，撇去浮沫，这是“攻”，目的是去除腥膻，锁住肉汁。随后，转为文火，加入由丁香、肉蔻、砂仁、白芷等二十余种中草药和香料配成的秘制料包，以及盐、糖、酱油等调味料。接下来，便是长达十几个小时的“守”。火不能大，要保持汤汁似开非开的状态，让香料的味道慢慢渗透到驴肉的每一丝纤维中，同时让驴肉中的胶质充分溶解，形成浓稠的汤汁。在这个过程中，需要老师傅寸步不离地守在锅边，随时调整火候，翻动肉块，确保受热均匀。当汤汁变得粘稠，肉块用筷子可以轻松穿透时，便到了收汁的最后阶段。此时，需要稍微加大火候，让浓缩了所有精华的汤汁紧紧地包裹在每一块驴肉上。这整个过程，是人与食材、火候、时间之间的一场完美协作，最终成就了这道傳世美味。</p>

                            <button class="recipe-toggle" data-target="recipe-lvrou">一窥庖厨</button>
                            <div class="recipe-content" id="recipe-lvrou">
                                <h4>家庭版简易肴驴肉</h4>
                                <p><strong>食材：</strong>新鲜驴后腿肉2斤，香料包（八角2个，桂皮1小块，香叶3片，花椒1小撮，小茴香1小撮，丁香3粒，草果1个拍破），老抽4汤匙，生抽3汤匙，冰糖30克，黄酒2汤匙，大葱1段，姜1大块拍破。</p>
                                <p><strong>步骤：</strong></p>
                                <ol>
                                    <li>驴肉切成大块，放入冷水中浸泡2小时以上，中途换水，泡出血水。</li>
                                    <li>将驴肉冷水下锅，加入一半的黄酒和几片姜，大火烧开，煮5分钟，撇去所有浮沫，捞出用温水冲洗干净。</li>
                                    <li>准备一个砂锅或深锅，锅底铺上葱段和姜块。</li>
                                    <li>将焯好水的驴肉、所有香料、老抽、生抽、冰糖和剩余的黄酒一同放入锅中，加入足量的热水，水量要完全没过驴肉。</li>
                                    <li>大火烧开后，转为最小的文火，盖上锅盖，慢炖至少3-4小时，直到驴肉变得非常软烂。</li>
                                    <li>开盖，转为中大火，开始收汁。不断用勺子将汤汁浇在肉上，直到汤汁变得浓稠，可以挂在肉上即可关火。</li>
                                    <li>让驴肉在汤汁中浸泡过夜，味道会更佳。食用时切片即可。</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="culinary-chapter" data-category="pastry-art">
                    <div class="chapter-content-grid">
                         <div class="chapter-visual">
                             <img src="./img/煎包源.jpeg" alt="利津水煎包" style="position: relative; top: 220px;">
                             <img src="./img/煎包鲜.jpg" alt="煎包1" style="position: relative; top: 500px;">
                             <img src="./img/煎包烹饪.jpg" alt="煎包2" style="position: relative; top: 800px;">
                        </div>
                        <div class="chapter-story">
                            <h2 class="chapter-main-title">利津水煎包</h2>
                            <p class="chapter-subtitle">水与火的艺术，面皮里的乾坤</p>
                            
                            <h3>“源” · 市井的智慧</h3>
                            <p>利津水煎包，是东营美食版图中最具烟火气的一笔。它的历史虽不如肴驴肉那般厚重，却深深植根于利津县城的市井生活之中，是当地人早餐桌上不可或缺的主角。关于其起源，已很难考证，但可以肯定的是，它诞生于民间，是普通百姓在日常生活中创造出的烹饪智慧的结晶。水煎包的独特之处在于它巧妙地结合了“煎”与“蒸”两种技法，使得成品兼具了锅贴的焦香酥脆和包子的松软可口。最初，水煎包可能只是家庭主妇为了处理剩余的包子而发明的做法，却无心插柳，创造出了一种全新的美味。在利津，制作水煎包的店铺遍布大街小巷，每一家都有自己独特的配方和手法。从和面、发酵，到调馅、包制，再到最后的水煎火候，每一个环节都考验着师傅的手艺。这份从市井中走出的美味，以其朴实无华的外表和丰富饱满的口感，征服了一代又一代利津人的味蕾，成为他们心中最温暖的家乡味道。</p>

                            <h3>“鲜” · 口感的交响</h3>
                            <p>利津水煎包的“鲜”，是一场在口中上演的、关于口感的交响乐。一个完美的水煎包，必须达到“一面焦黄，三面嫩软”的境界。底部那层金黄色的嘎巴，是整道小吃的灵魂所在。经过油煎和水汽的共同作用，它变得薄而酥脆，咬下去会发出清脆的“咔嚓”声，焦香四溢。而包子的侧面和顶部，由于吸收了充足的水蒸汽，面皮变得异常松软、白嫩，充满了浓郁的麦香。这两种截然不同的口感，在口中形成了强烈的对比，却又和谐地融为一体。再说到馅料，传统的利津水煎包以猪肉或牛肉搭配时令蔬菜为主，最经典的是韭菜猪肉馅。新鲜的猪前槽肉剁成肉糜，与切碎的韭菜、粉条、鸡蛋等混合，仅以简单的葱姜、酱油、香油调味，突出食材本身的原汁原味。一口咬开，首先是底部嘎巴的酥脆，紧接着是面皮的松软，最后，鲜美的汤汁和饱满的馅料在口中爆开，肉香、菜香、面香交织在一起，构成了一幅完整而和谐的味觉图景。</p>
                            
                            <h3>“烹” · 水火的博弈</h3>
                            <p>利津水煎包的烹饪，是一场对水与火的精妙博弈。其核心技艺在于“水煎”这一过程。师傅们通常使用特制的大平底锅，锅底厚实，导热均匀。包好的生包子，褶子朝上，整齐地码放在刷了油的锅中。先用中火将包子底部煎至微黄定型，这是“火”的第一阶段，目的是形成酥脆的基础。随后，是关键的一步——“淋水”。师傅会沿着锅边，迅速而均匀地浇入一碗面粉水（或淀粉水），水量大约能没过包子的三分之一。水遇到热锅，瞬间产生大量的水蒸气，此时要立刻盖上锅盖，转为中火焖制。这是“水”与“火”的共同作用阶段，上半部分靠“蒸”，下半部分靠“煎”。水蒸气将包子皮蒸熟、蒸软，而锅底的水分在不断蒸发的过程中，面粉糊会慢慢凝固，形成那层诱人的冰花脆底。待锅中的水分基本收干，只听到油煎的“滋滋”声时，便可开盖，撒上一些黑芝麻和葱花增香。整个过程需要师傅对火候有极其精准的判断，淋水的时间、水量、火候的大小，都直接决定了水煎包的成败。这不仅是厨艺，更是一门艺术。</p>

                            <button class="recipe-toggle" data-target="recipe-shuijianbao">一窥庖厨</button>
                            <div class="recipe-content" id="recipe-shuijianbao">
                                <h4>家常利津水煎包</h4>
                                <p><strong>面皮材料：</strong>中筋面粉500克，干酵母5克，温水250毫升，白糖5克。</p>
                                <p><strong>馅料材料：</strong>猪前腿肉300克，韭菜200克，粉条50克（泡软），鸡蛋1个，葱姜末适量，生抽2汤匙，蚝油1汤匙，香油1汤匙，盐和胡椒粉适量。</p>
                                <p><strong>面粉水：</strong>面粉10克，水100毫升，搅拌均匀。</p>
                                <p><strong>步骤：</strong></p>
                                <ol>
                                    <li><strong>和面：</strong>将酵母和白糖溶于温水中，静置5分钟。倒入面粉中，揉成光滑的面团，盖上湿布，发酵至两倍大。</li>
                                    <li><strong>调馅：</strong>猪肉剁成末，加入所有调味料和鸡蛋，朝一个方向搅打上劲。韭菜洗净切碎，粉条切碎，待包之前再与肉馅混合，防止韭菜出水。</li>
                                    <li><strong>包制：</strong>发酵好的面团排气，揉成长条，切成大小均匀的剂子，擀成中间厚、边缘薄的面皮。包入馅料，捏成包子。</li>
                                    <li><strong>水煎：</strong>平底锅烧热，倒少许油，将包子码入锅中，留出间隙。中火煎2-3分钟，至底部金黄。</li>
                                    <li>倒入准备好的面粉水，水量约到包子三分之一处。立即盖上锅盖，转中火焖8-10分钟。</li>
                                    <li>待水分收干，听到滋滋声，打开锅盖，撒上葱花和黑芝麻，再煎1分钟让底部更酥脆即可出锅。</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </div>

        <!-- Module 4: Footer -->
        <jsp:include page="/WEB-INF/jspf/footer.jspf" />

    </div>

    <script src="js/cuisine.js"></script>
</body>
</html>
