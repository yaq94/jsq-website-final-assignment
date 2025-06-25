// src/main/webapp/js/suntzu.js
// This file will contain all the specific JavaScript for the interactive elements on the redesigned suntzu.jsp page.

document.addEventListener('DOMContentLoaded', () => {
  console.log('suntzu.js loaded and ready for action!');

  // --- Data for Modules (ENRICHED CONTENT) ---

  const chapterData = {
    '1': {
      title: '始计第一',
      core: '校之以计，而索其情',
      quote: '故经之以五事，校之以计，而索其情：一曰道，二曰天，三曰地，四曰将，五曰法。',
      description: '本篇是《孙子兵法》的开篇之作，也是其战略思想的基石。孙子明确指出，战争是国家的头等大事，关系到生死存亡，绝不能不加审察。他创造性地提出了"五事七计"的分析框架，即从"道、天、地、将、法"五个基本方面，通过七个具体问题的比较，来系统评估敌我双方的实力。这不仅是一种军事计算，更是一种哲学层面的审视。它要求决策者在战前就完成对局势的全面量化分析，从而做到"未战而庙算胜"。<strong>现代应用：</strong>企业在进入新市场前，同样需要进行类似的战略评估，分析政策（道）、市场时机（天）、地区资源（地）、团队能力（将）和公司制度（法），这就是兵法智慧的跨领域应用。<strong>核心准则：</strong>不做无准备的决策，胜利源于周密的计算。'
    },
    '2': {
      title: '作战第二',
      core: '兵贵胜，不贵久',
      quote: '其用战也胜，久则钝兵挫锐，攻城则力屈，久暴师则国用不足。',
      description: '本篇的核心是战争的"成本效益"分析。孙子以极其实用的视角，深刻揭示了战争对国家经济的巨大拖累。"钝兵挫锐"、"力屈"、"国用不足"等词，生动描绘了持久战的危害。他强调，战争的最终目的在于胜利，但胜利的方式必须是高效的。速战速决，是把战争损害降到最低的唯一途径。为此，他甚至提出了"因粮于敌"的大胆设想，以战养战，减轻本国后勤压力。<strong>历史链接：</strong>拿破仑的闪电战思想深受此篇影响，他横扫欧洲的多次战役，都是以惊人的速度和机动性，在敌人完成部署前就击溃对方，避免了陷入漫长的消耗战。<strong>核心准则：</strong>效率是成功的关键，拖延是最大的成本。'
    },
    '3': {
      title: '谋攻第三',
      core: '不战而屈人之兵',
      quote: '是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。',
      description: '本篇升华了战争的境界，提出了"全胜"这一最高理想。孙子认为，通过血战获得的胜利，哪怕一百次，也是有代价的、不完美的。真正的善战者，是运用谋略、外交、威慑等手段，让敌人认识到抵抗无望而主动屈服，从而兵不血刃地达成战略目标。他提出的"上兵伐谋，其次伐交，其次伐兵，其下攻城"的层次划分，为解决冲突提供了清晰的路线图，把军事行动放在了最后的位置。<strong>现实启示：</strong>在商业谈判中，高手往往不是在谈判桌上寸土必争，而是在谈判前就通过充分准备和营造有利态势，让对方接受自己的方案。这正是"伐谋"的体现。<strong>核心准则：</strong>最好的胜利，是不用战斗就赢得的胜利。'
    },
    '4': {
      title: '军形第四',
      core: '先为不可胜',
      quote: '故善战者，立于不败之地，而不失敌之败也。是故胜兵先胜而后求战，败兵先战而后求胜。',
      description: '本篇论述了攻防关系中的一个核心原则：先保证自己的不败，再等待可以战胜敌人的时机。孙子认为，能否被战胜，取决于敌人是否有可乘之隙；而我们能否战胜敌人，则取决于我们自己是否准备充分。"立于不败之地"是内功，是主动的、可控的；"敌之可胜"是外因，是被动的、不可控的。因此，优秀的指挥官总是先把自己打造成无懈可击的强者，然后耐心观察，捕捉战机。<strong>体育竞技：</strong>一支顶级球队，首先要拥有稳固的防守体系（不可胜），才能在此基础上抓住对手的失误（可胜）进行反击得分。<strong>核心准则：</strong>先让自己立于不败，然后寻找取胜的机会。'
    },
    '5': {
      title: '兵势第五',
      core: '以正合，以奇胜',
      quote: '凡战者，以正合，以奇胜。故善出奇者，无穷如天地，不竭如江海。',
      description: '本篇探讨了如何通过组织和指挥，创造出强大的战场"势能"。孙子提出了"正"与"奇"这对核心概念。"正"是常规的、摆在明面上的力量，用以正面牵制、消耗敌人；"奇"是预备的、出其不意的力量，用以在关键节点给予致命一击。正奇的运用并非一成不变，而是可以相互转化，如同循环一样无穷无尽。通过对部队的有效管理（"分数"）、明确的指挥信号（"形名"）和对节奏的把握（"节奏"），将帅可以将一支军队的潜力发挥到极致，形成如"转圆石于千仞之山"的强大冲击力。<strong>项目管理：</strong>一个项目团队，常规的开发流程是"正"，而为应对突发状况预留的应急小组或备用方案就是"奇"。<strong>核心准则：</strong>常规与非常规的结合，才能创造无限可能。'
    },
    '6': {
      title: '虚实第六',
      core: '致人而不致于人',
      quote: '故善战者，致人而不致于人。能使敌人自至者，利之也；能使敌人不得至者，害之也。',
      description: '本篇是《孙子兵法》的精髓所在，集中阐述了如何夺取和保持战场主动权。核心思想是"避实而击虚"，即避免与敌人的主力硬碰硬，而是攻击其薄弱环节。如何实现这一点？关键在于"示形"，即通过各种假象迷惑敌人，使其判断失误，调动敌人，使其兵力分散。我方则始终保持兵力的高度集中，从而能在局部形成绝对优势，"以十击一"。"致人而不致于人"，就是调动敌人，而不被敌人所调动，始终让敌人跟着自己的节奏走。<strong>商业策略：</strong>市场领导者（实）的薄弱环节，往往是新兴的、小众的边缘市场（虚）。初创公司若能集中全力攻击这一点，便可能撕开一道口子，赢得生存空间。<strong>核心准-则：</strong>主动塑造态势，攻击对手最薄弱之处。'
    },
    '7': {
      title: '军争第七',
      core: '以迂为直，以患为利',
      quote: '故军争为利，军争为危。举军而争利，则不及；委军而争利，则辎重捐。',
      description: '"军争"的本质是"争利"，即抢占制胜的先机和要地。本篇深刻揭示了"争利"的辩证性：它既是胜利之源，也充满危险。孙子指出，看似最近的直路，往往因为敌人重点设防而最难走通。因此，要学会"以迂为直"，走一条看似绕远但更安全、更能达成战略意图的道路。同时，还要能"以患为利"，将行军中的不利因素（如被敌人追击）转化为调动和迷惑敌人的机会。这需要将帅具备高超的心理素质和对军队士气（"朝气锐，昼气惰，暮气归"）的精准把握。<strong>人生规划：</strong>有时候，为了达成一个远大目标，直接的路径可能充满无法克服的障碍。选择先积累经验、学习技能（迂），最终可能更快地实现目标（直）。<strong>核心准则：</strong>最直接的道路不一定是最快的，学会转化不利为有利。'
    },
    '8': {
      title: '九变第八',
      core: '智者之虑，必杂于利害',
      quote: '智者之虑，必杂于利害。杂于利，而务可信也；杂于害，而患可解也。',
      description: '本篇的核心是"权变"，强调将帅在战场上不能墨守成规，必须根据实际情况灵活决策。孙子列举了"九种"需要变通的情况，例如有些道路不能走，有些城池不能攻，有些命令可以不听。更深层次的智慧在于"杂于利害"的系统思维：一个明智的决策者，在看到有利局面时，会充分考虑到其中潜藏的风险；在身处险境时，会积极寻找转危为安的办法。这种辩证的、全面的思考方式，是高级将领必备的素质，也是防止陷入思维定式、做出灾难性决策的关键。<strong>投资领域：</strong>一个成功的投资者，在市场火热（利）时会考虑泡沫风险，在市场悲观（害）时会寻找被低估的价值机会。<strong>核心准则：</strong>凡事兼顾利弊，在变化中寻求最优解。'
    },
    '9': {
      title: '行军第九',
      core: '相敌而动，择利而处',
      quote: '凡军好高而恶下，贵阳而贱阴，养生而处实，军无百疾，是谓必胜。',
      description: '如果说前面几篇多是战略宏论，本篇则堪称一部详尽的"野战生存与侦察手册"。孙子极其细致地论述了军队在四种典型地形（山地、江河、斥泽、平陆）中如何行军、宿营，以占据有利位置，避免疫病和偷袭。更令人惊叹的是，他系统地总结了通过观察敌军的细微动态来判断其真实意图的方法，例如"尘高而锐者，车来也；卑而广者，徒来也"，几乎是现代侦察学的前身。这体现了孙子兵法理论与实践的高度结合。<strong>现代启示：</strong>对于户外探险、野外作业等活动，本篇中关于环境观察和选择安全营地的原则，至今仍具有极高的实用价值。<strong>核心准-则：</strong>尊重环境规律，于细微处洞察先机。'
    },
    '10': {
      title: '地形第十',
      core: '知己知彼，知天知地',
      quote: '夫地形者，兵之助也。料敌制胜，计险隘远近，上将之道也。知此而用战者必胜，不知此而用战者必败。',
      description: '本篇将"知地"提升到前所未有的战略高度。孙子系统地分析了六种地形（通、挂、支、隘、险、远）的军事属性，并为每种地形规定了相应的战术原则。他强调，地形不只是被动的战场环境，更是辅助我方、制约敌方的重要力量。优秀的将领必须懂得"料敌制胜，计险隘远-近"。在此基础上，孙子进一步提出了将领对胜利的六种责任（走、弛、陷、崩、乱、北），深刻地指出，失败往往不是士兵之过，而是将领没能尽到认识地形、了解士卒的责任。这使得"知天知地"与"知己知彼"并列，成为克敌制胜的四大支柱。<strong>团队管理：</strong>一个好的领导者，不仅要了解员工（知彼），也要了解自己（知己），更要了解市场环境（知天）和公司所处的行业赛道（知地）。<strong>核心准则：</strong>将天时地利与人和结合，方能无往不胜。'
    },
    '11': {
      title: '九地第十一',
      core: '投之亡地然后存，陷之死地然后生',
      quote: '是故不知诸侯之谋者，不能预交；不知山林、险阻、沮泽之形者，不能行军；不用乡导者，不能得地利。',
      description: '本篇是《孙子兵法》中篇幅最长、战术最丰富的一章，堪称一部"战区心理学"大全。孙子将全-球作战环境划分为九种不同性质的地区（九地），并为每一种"地"都规定了相应的士卒心理状态和对应的战术方法。其核心思想是，通过将部队置于不同的危急环境，来激发其不同的战斗潜能。尤其是在"死地"（绝境）之中，士卒会因为求生的本能而爆发出最强的战斗力，所谓"陷之死地而后生"。本篇还提出了"令之以文，齐之以武"的管理思想和"合于利而动，不合于利而止"的行动准则，内容极为丰富。<strong>极限运动：</strong>在面对极端挑战时，人类往往能爆发出超越平时的潜能，这正是"置之死地"所激发的心理力量。<strong>核心准-则：</strong>善用环境改变心理，激发团队的最大潜能。'
    },
    '12': {
      title: '火攻第十二',
      core: '非利不动，非得不用，非危不战',
      quote: '故曰：明主虑之，良将修之。非利不动，非得不用，非危不战。主不可以怒而兴师，将不可以愠而致战。',
      description: '本篇虽然以"火攻"为题，详细论述了火攻的五种方式、条件和后续行动，但其思想精髓却在篇末的总结，即著名的"慎战"思想。孙子在全书临近结尾时，再次郑重告诫决策者：发动战争必须极端谨慎。行动的唯一标准应该是是否符合国家利益（"合于利而动"），而不是君主或将帅的一时喜怒。这一思想将军事行动严格置于政治理性的控制之下，反对任何形式的冲动和赌气，为整部兵法增添了深刻的人文关怀和政治远见。<strong>个人决策：</strong>在生活中做重大决定时，应基于长远利益和理性分析，而非一时冲动或情绪上头，这便是"慎战"思想的个人应用。<strong>核心准则：</strong>决策必须服务于利益，绝不能被情绪左右。'
    },
    '13': {
      title: '用间第十三',
      core: '三军之事，莫亲于间',
      quote: '故三军之事，莫亲于间，赏莫厚于间，事莫密于间。非圣智不能用间，非仁义不能使间，非微妙不能得间之实。',
      description: '本篇作为《孙子兵法》的压轴之作，集中论述了情报与间谍工作，其重要性可见一斑。孙子史无前例地将"用间"提升到决定战争全局的战略高度，认为"先知"是胜利的根本，而"先知"只能来自于人，即间谍。他将间谍细分为五种（因间、内间、反间、死间、生间），并系统阐述了其组织、运作和管理方法。他甚至提出要给予间谍最丰厚的奖赏，足见其对信息价值的超前认识。这标志着《孙子兵法》形成了一个完整的闭环：始于庙算（计），终于情报（间），充满了唯物主义和理性主义的光辉。<strong>商业竞争：</strong>市场调研、竞品分析、用户访谈等，都是现代商业活动中的"用间"行为，旨在获取决策所需的关键信息。<strong>核心准-则：</strong>信息是决策的生命线，最高明的投入是为获取信息而投入。'
    }
  };

  const quizData = [
    {
      question: '《孙子兵法》认为，战争的最高境界是什么？',
      options: ['百战百胜', '不战而屈人之兵', '速战速-决', '以弱胜强'],
      answer: '不战而屈人之兵',
      feedback: '回答正确！《谋攻篇》提出："不战而屈人之兵，善之善者也。" 这意味着通过谋略、外交等非军事手段取胜，是成本最低、收益最大的理想状态，避免了战争带来的破坏。'
    },
    {
      question: '"知己知彼，百战不殆"的思想，在现代企业管理中，主要对应以下哪项工作？',
      options: ['企业文化建设', '产品研发', 'SWOT分析（优势、劣势、机会、威胁）', '财务报表审计'],
      answer: 'SWOT分析（优势、劣势、机会、威胁）',
      feedback: '回答正确！SWOT分析正是"知己"（分析自身优势S、劣势W）和"知彼"（分析外部机会O、威胁T）的经典工具，是兵法智慧在现代战略规划中的直接体现。'
    },
    {
      question: '"以正合，以奇胜"中的"奇"指的是什么？',
      options: ['奇特的兵器', '奇袭和偷袭', '预备的机动部队', '将帅的奇谋妙计'],
      answer: '预备的机动部队',
      feedback: '回答正确！"正"是正面牵制的常规力量，"奇"则是预留的、在关键时刻投入战斗以打破平衡的机动力量。它是一种兵力使用的概念，而非单纯的计谋。'
    },
    {
      question: '一家初创公司避开行业巨头的锋芒，选择了一个巨头看不上的细分市场并做到了第一。这最符合以下哪个兵法原则？',
      options: ['趁火打劫', '声东击西', '避实而击虚', '打草惊蛇'],
      answer: '避实而击虚',
      feedback: '回答正确！行业巨头是"实"，其未覆盖的细分市场就是"虚"。初创公司集中力量攻击这个"虚"，是典型的"避实而击虚"策略，是弱胜强的有效途径。'
    },
    {
      question: '孙子提出的慎战思想是：',
      options: ['逢战必亮剑', '兵者，诡道也', '将能而君不御者胜', '非利不动，非得不用，非危不战'],
      answer: '非利不动，非得不用，非危不战',
      feedback: '回答正确！这集中体现了孙子对战争的敬畏之心，强调决策必须基于国家利益的理性计算，绝不能被君主或将帅的个人情绪（如愤怒）所左右。'
    },
    {
      question: '根据《地形篇》，将帅最大的失职是什么？',
      options: ['士兵逃跑', '将帅自身的决策失误', '粮草供应不足', '未能及时救援友军'],
      answer: '将帅自身的决策失误',
      feedback: '回答正确！孙子在《地形篇》中明确指出，军队出现"走、弛、陷、崩、乱、北"这六种败象，"非天之灾，将之过也"，强调了将帅在认知和决策上的主体责任。'
    },
    {
      question: '在两军对峙时，你派出小股部队佯攻敌军A点，当敌军主力被吸引至A点后，你迅速集结主力猛攻其兵力空虚的B点。这套战术组合拳主要体现了什么思想？',
      options: ['以逸待劳', '暗度陈仓', '致人而不致于人', '擒贼先擒王'],
      answer: '致人而不致于人',
      feedback: '回答正确！"致人而不致于人"的核心就是调动敌人，掌握战场主动权。通过佯攻调动敌人，使其按你的意图移动，从而创造出攻击其弱点的机会。'
    },
    {
      question: '"投之亡地然后存，陷之死地然后生"的原理，在现代管理学中，最接近于以下哪个概念？',
      options: ['目标管理', '危机管理', '破釜沉舟的激励方式', '流程再造'],
      answer: '破釜沉舟的激励方式',
      feedback: '回答正确！这句兵法原文的含义与"破釜沉舟"几乎完全一致，都是通过切断退路，将团队置于"不成功便成仁"的绝境，从而激发其最大的潜能和战斗意志。'
    },
    {
      question: '《用间篇》认为，获取情报最可靠的方式是什么？',
      options: ['通过占卜预测', '根据历史经验推断', '只能通过派遣间谍获取', '分析公开的文献资料'],
      answer: '只能通过派遣间谍获取',
      feedback: '回答正确！孙子强调"先知者，不可取于鬼神，不可象于事，不可验于度，必取于人，知敌之情者也。"旗帜鲜明地反对迷信和主观臆断，强调了情报工作的人本性和实践性。'
    },
    {
      question: '项目进行到一半，CEO因为个人喜好，突然要求更改核心功能，可能导致项目延期和预算超支。作为项目经理，引用哪句兵法原则来劝谏最为贴切？',
      options: ['兵者，诡道也', '主不可以怒而兴师，将不可以愠而致战', '兵无常势，水无常形', '知己知彼，百战不殆'],
      answer: '主不可以怒而兴师，将不可以愠而致战',
      feedback: '回答正确！这句话的延伸义是，决策者（主）不能因为个人情绪或偏好（怒）而发动一场战争（重大项目），将帅（项目经理）也不能因为意气用事（愠）而投入战斗。它强调了重大决策的理性和利益导向，是劝说上级的最佳引言。'
    }
  ];

  // --- Module 1: Hero Section Scroll Animation ---
  const heroBg = document.querySelector('#suntzu-hero .hero-bg');
  if(heroBg) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      heroBg.style.transform = `scale(${1.1 + offset * 0.0001})`;
      heroBg.style.opacity = 1 - (offset * 0.001);
    });
  }

  // --- Module 2: 13 Chapters ---
  const slips = document.querySelectorAll('.bamboo-slip');
  const detailsContainer = document.getElementById('chapter-details');
  const scrollWrapper = document.querySelector('.bamboo-scroll-wrapper');
  const scrollContent = document.querySelector('.bamboo-scroll');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  if (slips.length > 0 && detailsContainer) {
    slips.forEach(slip => {
      slip.addEventListener('click', () => {
        if (slip.classList.contains('active')) return; // Do nothing if already active

        slips.forEach(s => s.classList.remove('active'));
        slip.classList.add('active');
        const chapterId = slip.dataset.chapter;
        const data = chapterData[chapterId];
        
        const currentContent = detailsContainer.querySelector('.chapter-content');
        if (currentContent) {
          currentContent.classList.add('fading-out');
          
          setTimeout(() => {
            if (data) {
              detailsContainer.innerHTML = `
                <div class="chapter-content">
                  <h3>${data.title}</h3>
                  <p><strong>核心思想：</strong>${data.core}</p>
                  <h4>原文节选</h4>
                  <blockquote>${data.quote}</blockquote>
                  <h4>思想解读</h4>
                  <p>${data.description}</p>
                </div>
              `;
              // Trigger the new animation
              detailsContainer.querySelector('.chapter-content').classList.add('fade-in-up');
            }
          }, 200); // Wait for fade-out to complete
        }
      });
    });
    
    // Horizontal Scroll Logic
    if (scrollWrapper && leftArrow && rightArrow) {
      const scrollAmount = 300;
      leftArrow.addEventListener('click', () => scrollWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
      rightArrow.addEventListener('click', () => scrollWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' }));

      // Drag to scroll
      let isDown = false;
      let startX;
      let scrollLeft;
      
      scrollContent.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContent.style.cursor = 'grabbing';
        startX = e.pageX - scrollContent.offsetLeft;
        scrollLeft = scrollWrapper.scrollLeft;
      });
      scrollContent.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContent.style.cursor = 'grab';
      });
      scrollContent.addEventListener('mouseup', () => {
        isDown = false;
        scrollContent.style.cursor = 'grab';
      });
      scrollContent.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContent.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        scrollWrapper.scrollLeft = scrollLeft - walk;
      });
    }
  }

  // --- Module 3: Case Studies ---
  const caseCards = document.querySelectorAll('.case-card');
  if (caseCards.length > 0) {
    caseCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }

  // --- Module 4: Timeline Animation with IntersectionObserver ---
  const timeline = document.getElementById('suntzu-timeline');

  if (timeline) {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the item must be visible
    };

    // Observer for the vertical line animation
    const lineObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Animate line only once
        }
      });
    }, observerOptions);

    lineObserver.observe(timeline);

    // Observer for each timeline item for a staggered effect
    const items = timeline.querySelectorAll('.timeline-item');
    const itemObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a staggered delay based on the item's index
          const itemIndex = Array.from(items).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, itemIndex * 150); // 150ms delay between each item

          observer.unobserve(entry.target); // Animate each item only once
        }
      });
    }, observerOptions);

    items.forEach(item => {
      itemObserver.observe(item);
    });
  }

  // --- Module 5: Quiz ---
  const quizContainer = document.getElementById('quiz-container');
  if (quizContainer) {
    const startBtn = document.getElementById('start-quiz-btn');
    const quizIntro = document.getElementById('quiz-intro');
    const quizMain = document.getElementById('quiz-main-content');
    const questionCounterEl = document.getElementById('quiz-question-counter');
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next-btn');
    const resultsEl = document.getElementById('quiz-results');
    const scoreEl = document.getElementById('quiz-score');
    const resultTextEl = document.getElementById('quiz-result-text');
    const restartBtn = document.getElementById('restart-quiz-btn');

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      quizIntro.classList.add('hidden');
      resultsEl.classList.add('hidden');
      quizMain.classList.remove('hidden');
      nextBtn.classList.add('hidden');
      renderQuestion();
    }

    function renderQuestion() {
      feedbackEl.textContent = '';
      nextBtn.classList.add('hidden');
      const questionData = quizData[currentQuestionIndex];
      questionCounterEl.textContent = `第 ${currentQuestionIndex + 1} / ${quizData.length} 题`;
      questionEl.textContent = questionData.question;
      optionsEl.innerHTML = '';
      questionData.options.forEach(optionText => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.classList.add('quiz-option-btn');
        button.addEventListener('click', handleOptionClick);
        optionsEl.appendChild(button);
      });
    }

    function handleOptionClick(event) {
      const selectedButton = event.target;
      const selectedAnswer = selectedButton.textContent;
      const questionData = quizData[currentQuestionIndex];
      const correctAnswer = questionData.answer;

      // Disable all option buttons
      const optionButtons = optionsEl.querySelectorAll('.quiz-option-btn');
      optionButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight the correct answer
        if (btn.textContent === correctAnswer) {
          btn.classList.add('correct');
        }
      });

      // Check if the user's answer was correct
      if (selectedAnswer === correctAnswer) {
        score++;
        feedbackEl.textContent = questionData.feedback;
        feedbackEl.style.color = '#28a745';
      } else {
        // Style the user's incorrect choice
        selectedButton.classList.add('incorrect');
        feedbackEl.textContent = '回答错误。正确答案已被高亮显示。';
        feedbackEl.style.color = 'var(--suntzu-accent-color)';
      }

      // Show the next button
      nextBtn.classList.remove('hidden');
    }

    function showNextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        renderQuestion();
      } else {
        showResults();
      }
    }

    function showResults() {
      quizMain.classList.add('hidden');
      resultsEl.classList.remove('hidden');
      scoreEl.textContent = `您的得分: ${score} / ${quizData.length}`;
      let resultText = '';
      if (score === quizData.length) {
        resultText = '评价：运筹帷幄！您对兵法精髓的理解已入化境，堪称当代的"小孙子"！';
      } else if (score >= quizData.length * 0.6) {
        resultText = '评价：颇有心得！您已掌握兵法的核心要义，善于谋略，乃是将帅之才。';
      } else {
        resultText = '评价：初窥门径。您对兵法已有了解，但部分细节尚需温习。重读画卷，必有新获！';
      }
      resultTextEl.textContent = resultText;
    }

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', startQuiz);
  }
}); 