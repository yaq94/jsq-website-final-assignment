<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>石油之城 - 东营</title>
    <link rel="stylesheet" href="css/style.css"> <%-- Main stylesheet for nav/footer --%>
    <link rel="stylesheet" href="css/oilcity.css"> <%-- Page-specific stylesheet --%>
</head>
<body>

<jsp:include page="/header.jspf" />

<main id="oilcity-main">

    <!-- Module 1: The Abyssal Overture -->
    <section id="hero-overture" class="oilcity-section">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1 class="hero-title">黑金之心</h1>
            <p class="hero-subtitle">一座因石油而生的城市，一部流淌的工业史诗</p>
        </div>
        <div class="scroll-down-hint">↓</div>
    </section>

    <div class="oilcity-container">
        <!-- Module 2: Prospecting Saga (Placeholder) -->
        <div id="prospecting-saga-placeholder"></div>

        <!-- Module 3: The Industrial Artery -->
        <section id="industrial-artery" class="oilcity-section">
            <h2 class="section-title">工业动脉</h2>
            <div class="process-flow-container">
                <div class="process-flow-diagram">
                    <!-- Flow items will be highlighted by JS -->
                    <div class="flow-item" id="flow-1">
                        <div class="flow-icon"></div>
                        <h4>钻井与开采</h4>
                    </div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-item" id="flow-2">
                        <div class="flow-icon"></div>
                        <h4>原油集输</h4>
                    </div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-item" id="flow-3">
                        <div class="flow-icon"></div>
                        <h4>脱水与净化</h4>
                    </div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-item" id="flow-4">
                        <div class="flow-icon"></div>
                        <h4>炼化核心</h4>
                    </div>
                     <div class="flow-arrow">↓</div>
                    <div class="flow-item" id="flow-5">
                        <div class="flow-icon"></div>
                        <h4>终端产品</h4>
                    </div>
                </div>
                <div class="process-flow-details">
                    <!-- Details will be shown by JS based on scroll position -->
                </div>
            </div>
        </section>

        <!-- Module 4: The Urban Symphony -->
        <section id="urban-symphony" class="oilcity-section">
            <h2 class="section-title">城市交响</h2>
            <div class="filter-controls">
                <button class="filter-btn active" data-filter="all">全部</button>
                <button class="filter-btn" data-filter="infrastructure">基础设施</button>
                <button class="filter-btn" data-filter="economy">经济贡献</button>
                <button class="filter-btn" data-filter="culture">文化地标</button>
                <button class="filter-btn" data-filter="technology">科技教育</button>
            </div>
            <div class="card-grid">
                <!-- Grid cards will be populated by JS, showing structure of one card -->
                <div class="card-item" data-category="infrastructure">
                    <div class="card-bg-img"></div>
                    <div class="card-content">
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <%-- More cards here --%>
            </div>
        </section>

        <!-- Module 5: The Path of Transformation -->
        <section id="transformation-path" class="oilcity-section">
            <h2 class="section-title">转型之路</h2>
            <div class="comparison-slider">
                <div class="comparison-image before-image">
                    <div class="comparison-label">传统工业</div>
                </div>
                <div class="comparison-image after-image">
                     <div class="comparison-label">绿色能源</div>
                </div>
                <div class="comparison-handle">
                    <div class="handle-arrow left"></div>
                    <div class="handle-arrow right"></div>
                </div>
            </div>
            <div class="transformation-text">
                <h3>从黑色能源到绿色未来的深刻变革</h3>
                <p>作为一座因油而兴的资源型城市，东营深知可持续发展的核心要义。面对全球能源结构调整和"双碳"目标的时代要求，简单的资源开采模式已无法支撑未来的高质量发展。因此，一场深刻的能源革命和产业转型正在这座城市的肌体中悄然进行。这不仅仅是对既有产业的补充，更是一次关乎城市命运的战略抉择。东营正以壮士断腕的决心，积极拥抱光伏、风能等新能源产业，昔日的盐碱地、滩涂正变为一片片"蓝色"的太阳能发电板海洋。同时，通过发展高端石化、新材料和生物医药等高附加值产业，推动产业链向"微笑曲线"两端延伸。更重要的是，CCUS（碳捕获、利用与封存）等前沿技术的探索与应用，不仅为传统油田赋予了"绿色"属性，也为国家实现碳中和目标提供了宝贵的"东营经验"。这场转型，是从依赖地下资源到开发地上风光、从消耗自然到善用科技的伟大跨越，它考验着决策者的智慧，也凝聚着新一代建设者的汗水，共同谱写着石油之城面向未来的新篇章。</p>
            </div>
        </section>
    </div>

</main>

<jsp:include page="/WEB-INF/jspf/footer.jspf" />

<script src="js/oilcity.js"></script> <%-- Page-specific JavaScript --%>
</body>
</html>
