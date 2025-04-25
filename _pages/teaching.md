---
layout: page
title: 南法经典马赛-卡西斯海滨小镇一日游
permalink: /teaching/
nav: false
nav_order: 6
pretty_table: true
images:
  compare: true
  slider: true
---

<div class="l-body-outset">
  {% include figure.liquid loading="eager" path="assets/img/11marseille-1day-trip/11marseille-1day-trip-1.jpg" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
</div>

# 行程亮点

"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

---

# 行程售价

| 1.8天6夜豪华游 | 每日情绪体验 | 路线 | 住宿（4星/5星） | 特色活动 | 价格 |
| --- | --- | --- | --- | --- | --- |
| 第一天 | 让旅客用最舒服的方式，**第一天就爱上南法。** | 从上海机场凌晨00：15出发，早上7点抵达马赛机场 | 洲际/索菲特/bellevue | 乘船看峡湾 | 1999 |
| 第二天 | 普罗旺斯风情初体验 | 早上：出发去aix-en-provence；午餐市区餐厅 | 洲际/索菲特/bellevue | 酒庄品酒、先锋建筑参观 | 1999 |

# 行程美图

<div class="carousel-container" data-images='["tours-1.webp", "tours-1a.webp", "tours-2.webp", "tours-2a.webp", "tours-3.webp", "tours-6.webp", "tours-4.webp", "tours-5.webp", "tours-5a.webp"]'></div>

<script>
  function loadLocalImages() {
    document.querySelectorAll(".carousel-container").forEach(container => {
      const images = JSON.parse(container.getAttribute("data-images"));
      images.forEach(file => {
        let img = document.createElement("img");
        img.src = `/assets/img/0tours/${file}`;
        img.alt = file.replace(/_/g, ' ').replace(/\.webp$/, '');
        img.style.width = "100%";
        img.style.maxWidth = "450px";
        img.style.height = "300px";
        img.style.margin = "0 5px";
        img.style.borderRadius = "5px";
        img.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        container.appendChild(img);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", loadLocalImages);
</script>

<style>
  .carousel-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    padding: 20px;
    margin: 20px 0;
  }

  .carousel-container img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: 0 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

---

# 行程详情

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<style>
  .itinerary-container {
    display: flex;
    height: 100vh;
    font-family: 'Microsoft YaHei', sans-serif;
  }
  .card-list {
    width: 60%;
    overflow-y: auto;
    padding: 1rem;
    border-right: 1px solid #ccc;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background 0.3s;
  }
  .card:hover {
    background: #f9f3ff;
  }
  .card h3 {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
  #map {
    width: 40%;
    height: 100%;
  }
</style>

<div class="itinerary-container">
  <div class="card-list">
    <div class="card" data-points='[
      {"lat":43.2965,"lng":5.3698,"name":"马赛","desc":"法国第二大城市，地中海重要港口","img":"https://example.com/marseille.jpg"},
      {"lat":43.2181,"lng":5.5386,"name":"卡西斯港","desc":"迷人的渔港和海滩","img":"https://example.com/cassis-port.jpg"}
    ]'>
      <h3>马赛 - 卡西斯海滨线路</h3>
    </div>
  </div>
  <div id="map"></div>
</div>

<script>
  const map = L.map('map').setView([43.25, 5.45], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let routeLayer = null;
  let markers = [];

  document.querySelectorAll('.card').forEach(card => {
    const pointsData = JSON.parse(card.getAttribute('data-points'));
    card.addEventListener('click', () => {
      updateMapWithRoute(pointsData);
    });
  });

  function updateMapWithRoute(pointsData) {
    if (routeLayer) map.removeLayer(routeLayer);
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const latlngs = pointsData.map(p => [p.lat, p.lng]);
    routeLayer = L.polyline(latlngs, { color: 'purple', weight: 4 }).addTo(map);

    pointsData.forEach((point, i) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: L.divIcon({
          className: 'custom-marker',
          html: `<div style='background:purple;color:white;padding:2px 5px;border-radius:5px;'>${i + 1}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        })
      }).addTo(map);

      marker.bindPopup(`
        <div style="text-align:center;">
          <h4>${point.name}</h4>
          <img src="${point.img}" style="max-width:200px;max-height:150px;"><br/>
          <p>${point.desc}</p>
        </div>
      `);

      marker.on('click', () => marker.openPopup());
      markers.push(marker);
    });

    map.fitBounds(routeLayer.getBounds());
  }

  // 默认显示第一个卡片
  const defaultCard = document.querySelector('.card');
  if (defaultCard) {
    updateMapWithRoute(JSON.parse(defaultCard.getAttribute('data-points')));
  }
</script>

---

# 行程详情

{% details 第一天 抵达马赛 %}
早上7点抵达马赛机场，预计8点半-9点离开机场，第一站探访圣母大教堂看马赛全景。
参考酒店：Galeria Plaza Reforma或同级
早餐：自理 | 午餐：自理 | 晚餐：自理
*行程可能因天气等原因改变，具体行程以当日导游安排为准
{% enddetails %}

{% details 第二天 马赛-艾克斯 %}
早上7点抵达马赛机场，预计8点半-9点离开机场，第一站探访圣母大教堂看马赛全景。
参考酒店：Galeria Plaza Reforma或同级
早餐：自理 | 午餐：自理 | 晚餐：自理
*行程可能因天气等原因改变，具体行程以当日导游安排为准
{% enddetails %}

{% details 第三天 马赛-普罗旺斯小镇 %}
早上7点抵达马赛机场，预计8点半-9点离开机场，第一站探访圣母大教堂看马赛全景。
参考酒店：Galeria Plaza Reforma或同级
早餐：自理 | 午餐：自理 | 晚餐：自理
*行程可能因天气等原因改变，具体行程以当日导游安排为准
{% enddetails %}

---

# 行程说明

- 墨城中文免费接送机时段为上午10点-下午8点（航班起飞/到达时间）；时段外为英文接送机（每个房间仅包含一次接送机服务）
- 每日行程顺序可能会有变动，最终顺序以出团前三天确认单为准
- 如遇节假日休息、特殊情况等原因景点关闭，导游会根据实际情况调整行程
- 在预定时，若无特殊需求，默认为酒店普通大床房；若特殊需求房型或床型，有可能产生额外的费用
- 墨城交通拥挤，若因堵车等不可控因素而造成的行程延迟，请您体谅
- 特别提示：可免费提供接送服务的机场仅为墨西哥城国际机场（Mexico City International Airport – 机场代码 MEX）；如需费利佩安赫莱斯国际机场（Mexico City Felipe Ángeles International Airport or AIFA – 机场代码NLU）接送服务需另外付费（具体费用请与我们联系确认），且仅可提供英文接送服务

---

# 行程包含

- 行程中包含的酒店
- 行程中标注的餐食及饮品
- 接送机服务
- 中文导游服务及小费
- 每人每天2瓶饮用水
- 行程中包含的景点首道门票

---

# 注意事项

{% details 特别提示 %}
fsfsfsfsfj
{% enddetails %}

{% details 安全须知 %}
asggjdijidsi
{% enddetails %}

{% details 责任条款 %}
fsfshufshu
{% enddetails %}

---

<div class="l-page-outset">
  {% include figure.liquid loading="eager" path="assets/img/11marseille-1day-trip/11marseille-1day-trip-1.jpg" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
</div>


<div class="l-screen-inset">
  {% include figure.liquid loading="eager" path="assets/img/11marseille-1day-trip/11marseille-1day-trip-1.jpg" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
</div>

<div class="l-screen">
  {% include figure.liquid loading="eager" path="assets/img/11marseille-1day-trip/11marseille-1day-trip-1.jpg" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
</div>

<div class="l-gutter">
    {% include figure.liquid loading="eager" path="assets/img/profile-tian.jpg" title="aolitravel" class="img-fluid rounded z-depth-1" %}
</div>
<div class="l-gutter">
    {% include figure.liquid loading="eager" path="assets/img/0test-elements/1test-gutter-image-250-500-px.png" title="aolitravel" class="img-fluid rounded z-depth-1" %}
</div>

---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-1.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-1a.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-2.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-2a.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-3.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>



---


<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="https://js.stripe.com/v3/"></script>

<style>
  .itinerary-container {
    display: flex;
    height: 100vh;
    font-family: 'Microsoft YaHei', sans-serif;
  }
  .card-list {
    width: 60%;
    overflow-y: auto;
    padding: 1rem;
    border-right: 1px solid #ccc;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background 0.3s;
  }
  .card:hover {
    background: #f9f3ff;
  }
  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .card-image {
    width: 30%;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 1rem;
  }
  .card-title {
    flex: 1;
  }
  .card-title h3 {
    margin: 0;
    color: #333;
  }
  .card-title p {
    margin: 0.2rem 0 0;
    color: #666;
    font-size: 0.9rem;
  }
  .card-content {
    margin: 0.5rem 0;
    color: #444;
    line-height: 1.5;
  }
  .card-buttons {
    margin-top: 0.8rem;
    display: flex;
    gap: 0.5rem;
  }
  .card-buttons button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #800080;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  .card-buttons button:hover {
    background-color: #6a006a;
  }
  #map {
    width: 40%;
    height: 100%;
  }
  
  /* 弹窗样式 */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 2rem;
    border-radius: 8px;
    width: 70%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .close:hover {
    color: black;
  }
  
  /* 地图标记样式 */
  .custom-marker {
    background-color: #800080;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
  }
</style>

<div class="itinerary-container">
  <div class="card-list">
    <!-- 卡片1: 马赛-cassis海滨小镇 -->
    <div class="card" data-points='[
      {"lat":43.2965, "lng":5.3698, "name":"马赛", "desc":"法国第二大城市，地中海重要港口", "img":"https://example.com/marseille.jpg"},
      {"lat":43.2181, "lng":5.5386, "name":"卡西斯港", "desc":"迷人的渔港和海滩", "img":"https://example.com/cassis-port.jpg"},
      {"lat":43.2130, "lng":5.5360, "name":"卡隆海滩", "desc":"著名的白色悬崖和清澈海水", "img":"https://example.com/calanque.jpg"}
    ]'>
      <div class="card-header">
        <img class="card-image" src="https://example.com/marseille-cassis.jpg" alt="马赛-卡西斯">
        <div class="card-title">
          <h3>马赛 - 卡西斯海滨小镇</h3>
          <p>地中海岸线与峡湾之美</p>
        </div>
      </div>
      <div class="card-content">
        从马赛老港出发，前往风景如画的卡西斯小镇，沿途欣赏著名的卡隆峡湾，体验地中海阳光与海风的完美结合。
      </div>
      <div class="card-buttons">
        <button class="view-route">查看路线</button>
        <button class="book-trip">预订行程</button>
      </div>
    </div>

    <!-- 卡片2: 马赛-fontaine vaucluse-gordes-rousillon -->
    <div class="card" data-points='[
      {"lat":43.2965, "lng":5.3698, "name":"马赛", "desc":"旅程起点", "img":"https://example.com/marseille.jpg"},
      {"lat":43.9200, "lng":5.1267, "name":"泉水城", "desc":"清澈泉水从山间涌出", "img":"https://example.com/fontaine.jpg"},
      {"lat":43.9126, "lng":5.2008, "name":"戈尔德", "desc":"普罗旺斯最美丽的石头村", "img":"https://example.com/gordes.jpg"},
      {"lat":43.9027, "lng":5.2920, "name":"鲁西永", "desc":"红色土壤的独特小镇", "img":"https://example.com/rousillon.jpg"}
    ]'>
      <div class="card-header">
        <img class="card-image" src="https://example.com/provence-villtowns.jpg" alt="普罗旺斯山城">
        <div class="card-title">
          <h3>马赛 - 普罗旺斯山城之旅</h3>
          <p>探索泉水城与石头小镇</p>
        </div>
      </div>
      <div class="card-content">
        一日游遍普罗旺斯最著名的山城：泉水城(Fontaine de Vaucluse)的清澈泉水、戈尔德(Gordes)的石头建筑、鲁西永(Roussillon)的红色土壤，感受法国乡村的独特魅力。
      </div>
      <div class="card-buttons">
        <button class="view-route">查看路线</button>
        <button class="book-trip">预订行程</button>
      </div>
    </div>

    <!-- 卡片3: 马赛-薰衣草田-saint moutiers-lac saint croix -->
    <div class="card" data-points='[
      {"lat":43.2965, "lng":5.3698, "name":"马赛", "desc":"旅程起点", "img":"https://example.com/marseille.jpg"},
      {"lat":43.8342, "lng":5.0343, "name":"瓦朗索勒", "desc":"普罗旺斯最大薰衣草田", "img":"https://example.com/lavender.jpg"},
      {"lat":43.8000, "lng":6.2000, "name":"圣十字湖", "desc":"碧蓝湖水与峡谷风光", "img":"https://example.com/lac-saint-croix.jpg"},
      {"lat":43.8500, "lng":6.1500, "name":"穆斯蒂耶圣玛丽", "desc":"陶瓷小镇与瀑布", "img":"https://example.com/moustiers.jpg"}
    ]'>
      <div class="card-header">
        <img class="card-image" src="https://example.com/lavender-lake.jpg" alt="薰衣草与圣十字湖">
        <div class="card-title">
          <h3>马赛 - 薰衣草田与圣十字湖</h3>
          <p>紫色浪漫与碧蓝湖水</p>
        </div>
      </div>
      <div class="card-content">
        夏季限定路线！参观瓦朗索勒薰衣草田，欣赏一望无际的紫色花海；随后前往圣十字湖，在碧蓝湖水中划船，最后探访陶瓷小镇穆斯蒂耶圣玛丽。
      </div>
      <div class="card-buttons">
        <button class="view-route">查看路线</button>
        <button class="book-trip">预订行程</button>
      </div>
    </div>
  </div>
  <div id="map"></div>
</div>

<!-- 路线详情弹窗 -->
<div id="routeModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="markdown-content"></div>
  </div>
</div>

<script>
  // 初始化地图
  const map = L.map('map').setView([43.7, 5.5], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let routeLayer = null;
  let markers = [];
  
  // 卡片点击事件
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      // 如果不是按钮点击才处理
      if (!e.target.classList.contains('view-route') && !e.target.classList.contains('book-trip')) {
        const pointsData = JSON.parse(card.getAttribute('data-points'));
        updateMapWithRoute(pointsData);
      }
    });
    
    // 查看路线按钮
    card.querySelector('.view-route').addEventListener('click', (e) => {
      e.stopPropagation();
      const pointsData = JSON.parse(card.getAttribute('data-points'));
      showRouteDetails(card.querySelector('h3').textContent, pointsData);
    });
    
    // 预订行程按钮
    card.querySelector('.book-trip').addEventListener('click', (e) => {
      e.stopPropagation();
      const stripe = Stripe('pk_test_your_stripe_publishable_key');
      stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_12345', // 替换为你的Stripe价格ID
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: 'https://yourwebsite.com/success',
        cancelUrl: 'https://yourwebsite.com/cancel',
      });
    });
  });
  
  // 更新地图路线
  function updateMapWithRoute(pointsData) {
    // 清除之前的路线和标记
    if (routeLayer) map.removeLayer(routeLayer);
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // 创建新路线
    const coords = pointsData.map(point => [point.lat, point.lng]);
    routeLayer = L.polyline(coords, { color: '#800080', weight: 4 }).addTo(map);
    
    // 添加标记
    pointsData.forEach((point, index) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: L.divIcon({
          className: 'custom-marker',
          iconSize: [24, 24]
        })
      }).addTo(map);
      
      marker.bindPopup(`
        <div style="text-align:center;">
          <h4>${point.name}</h4>
          <img src="${point.img}" style="max-width:200px;max-height:150px;margin:5px 0;">
          <p>${point.desc}</p>
        </div>
      `);
      
      markers.push(marker);
    });
    
    // 调整视图
    map.fitBounds(routeLayer.getBounds());
  }
  
  // 显示路线详情弹窗
  function showRouteDetails(title, pointsData) {
    const modal = document.getElementById('routeModal');
    const markdownContent = document.getElementById('markdown-content');
    
    // 构建Markdown内容
    let content = `# ${title}\n\n`;
    content += `## 行程亮点\n\n`;
    pointsData.forEach((point, index) => {
      content += `### ${index + 1}. ${point.name}\n`;
      content += `![${point.name}](${point.img})\n`;
      content += `${point.desc}\n\n`;
    });
    
    content += `## 行程详情\n\n`;
    content += `- **出发时间**: 早上8:00\n`;
    content += `- **返回时间**: 晚上19:00\n`;
    content += `- **包含项目**: 交通、导游服务\n`;
    content += `- **建议携带**: 防晒霜、相机、舒适步行鞋\n`;
    
    // 这里可以添加一个简单的Markdown解析器
    // 为了简化，我们直接使用HTML代替真正的Markdown解析
    markdownContent.innerHTML = `
      <h1>${title}</h1>
      <h2>行程亮点</h2>
      ${pointsData.map((point, index) => `
        <h3>${index + 1}. ${point.name}</h3>
        <img src="${point.img}" style="max-width:100%;height:auto;">
        <p>${point.desc}</p>
      `).join('')}
      <h2>行程详情</h2>
      <ul>
        <li><strong>出发时间</strong>: 早上8:00</li>
        <li><strong>返回时间</strong>: 晚上19:00</li>
        <li><strong>包含项目</strong>: 交通、导游服务</li>
        <li><strong>建议携带</strong>: 防晒霜、相机、舒适步行鞋</li>
      </ul>
    `;
    
    modal.style.display = 'block';
  }
  
  // 关闭弹窗
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('routeModal').style.display = 'none';
  });
  
  // 点击弹窗外部关闭
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('routeModal')) {
      document.getElementById('routeModal').style.display = 'none';
    }
  });
  
  // 默认显示第一条路线
  const firstCard = document.querySelector('.card');
  if (firstCard) {
    const pointsData = JSON.parse(firstCard.getAttribute('data-points'));
    updateMapWithRoute(pointsData);
  }
</script>



