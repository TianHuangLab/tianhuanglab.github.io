---
layout: distill
permalink: /teaching/
title: teaching
description: Materials for courses you taught. Replace this text with your description.
nav: false
nav_order: 6
pretty_table: true
---

<div class="l-screen">
  {% include figure.liquid loading="eager" path="assets/img/11marseille-1day-trip/11marseille-1day-trip-1.jpg" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
</div>
<div class="l-screen-inset">
  {% include figure.liquid loading="eager" path="assets/img/11marseille-1day-trip/11marseille-1day-trip-1.jpg" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
</div>
<div class="l-gutter">
    {% include figure.liquid loading="eager" path="assets/img/profile-tian.jpg" title="aolitravel" class="img-fluid rounded z-depth-1" %}
</div>
<div class="l-gutter">
    {% include figure.liquid loading="eager" path="assets/img/0test-elements/1test-gutter-image-250-500-px.png" title="aolitravel" class="img-fluid rounded z-depth-1" %}
</div>

# 南法普罗旺斯*蔚蓝海岸大美全景10日8夜

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-1.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-1a.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-2.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-2a.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/0tours/tours-3.webp" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

| 1.【旗舰产品-经典版】8天6夜豪华游 | 每日情绪体验 | 路线 | 住宿（4星/5星）各两家备选 | 特色活动 | 成本 |
| --- | --- | --- | --- | --- | --- |
| 第一天 | 让旅客用最舒服的方式，**第一天就爱上南法。** | 从上海机场凌晨00：15出发，早上7点抵达马赛机场、预计9点从机场离开，圣母大教堂、老港，午餐（palais 1860欢迎宴会-地中海美食），下午行程：圣让堡；天气好乘船出海看峡湾；如果天气不好，龙骧宫和法罗公园 | 洲际/索菲特/bellevue | 乘船看峡湾 |  |
| 第二天 | 普罗旺斯风情初体验 | 早上：出发去aix-en-provence；午餐市区餐厅**Cafe Caumont用餐（特色？）；下午参观酒庄品酒（la coste）安藤忠雄建筑参观** | 洲际/索菲特/bellevue | 酒庄品酒、先锋建筑参观 |  |
| 第三天 | 深入普罗旺斯 | 泉水城、石头城、午餐石头城餐厅（普罗旺斯美食）、塞南克修道院、红土城 | Bastide de Gordes/Capelongue, Bonnieux, a Beaumier Hotel/Les Bories & Spa | 薰衣草 |  |
| 第四天 | 艺术巡礼 | 阿维尼翁（教皇宫、断桥）-阿尔勒（午餐）-博德普罗旺斯（城堡+光影博物馆） | Bastide de Gordes/Capelongue, Bonnieux, a Beaumier Hotel/Les Bories & Spa/mas de oulivie | 光影博物馆16.5欧 |  |
| 第五天 | 初探蔚蓝海岸 | 戛纳-antibes（老城区午餐）-尼斯 | Hotel Royal Riviera / Le Negresco  | 毕加索博物馆 |  |
| 第六天 | 蔚蓝海岸豪华之旅 | 从山顶看全景开始、埃兹小镇（午餐）、摩纳哥 | Hotel Royal Riviera / Le Negresco  |  |  |
| 第七天 | 离开 | 尼斯安排早上美食工坊（+午餐），下午自由活动；然后坐车去马赛，晚上22:55从马赛机场离开，次日早上5点到达上海；也可选从尼斯机场出发的航班 |  | 美食工坊体验地道尼斯地中海饮食 |  |
| 升级版+2天，变成10天8夜 |  | +卡马戈湿地游船和用餐、骑白马、看粉色盐湖和火烈鸟；+**波克罗勒岛潜水体验+用餐+下午spa** |  |  |  |

{% details 第一天 抵达马赛 %}
早上7点抵达马赛机场，预计8点半-9点离开机场，第一站探访圣母大教堂看马赛全景。
参考酒店：Galeria Plaza Reforma或同级
早餐：自理 | 午餐：自理 | 晚餐：自理
*行程可能因天气等原因改变，具体行程以当日导游安排为准
{% enddetails %}

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



