---
layout: page
title: 「南法经典」马赛-卡西斯海滨小镇一日游
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

---

## 行程亮点

**清晨启程，开启一场海天相接的梦幻之旅！**

从**马赛（Marseille）** 出发，沿着风光旖旎的地中海海岸线，前往南法隐藏的宝藏——**卡西斯海滨小镇（Cassis）**。

这里有色彩斑斓的港口、迷人的小巷和绝美的悬崖海景，仿佛置身于一幅流动的画卷。漫步其中，感受法式慢生活的惬意与浪漫。

随后返回马赛，深入探索这座千年古城的文化底蕴，欣赏标志性建筑，感受历史与现代的交融。

✨**核心亮点**

- **晨光出发**｜避开喧嚣，在柔和晨曦中开启地中海之旅
- **探索卡西斯**｜五彩港湾、小巷咖啡，邂逅童话般的南法小镇
- **绝美海岸**｜漫步卡朗格峡湾，感受海天一线的震撼风光
- **深度马赛**｜穿行古港与地标教堂，探寻千年历史脉络
- **舒适小团**｜轻松灵活，尽享定制化的法式慢生活体验

---

## 行程美图

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

## 行程价格

| 团期 | 人数 | 价格 |
| --- | --- | --- |
| 全年每周六、周日出发（需提前预约） | 3-5人 | 89欧元/人 |
| （同上） | 6-8人 | 85欧元/人 |
| （同上） | 9人及以上 | 价格优惠，请咨询我们 |


**标准说明**

- 本线路3人起成团，全年每周六、周日出发，需至少提前3天预约，其他日期请咨询我们。
- 3-5人出行，每人89欧元；6-8人出行，每人85欧元；9人及以上可享专属优惠，欢迎联系我们定制报价！

<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1R1SleLF9x7iB9GnQG3so407"
  publishable-key="pk_live_51HOVRdLF9x7iB9GnVh8jWCYVrSXFsF0CFw3BfSy6EHhkHoMuIjYMfYcJ1eFZ1Pu397lxh5CNDLfiSgDUBiXt0Dw4003T9jFWgc"
>
</stripe-buy-button>

---

## 行程路线

<div class="itinerary-container">
  <div class="card-list">
    <!-- 马赛 -->
    <div class="card" data-points='[{"lat":43.2965,"lng":5.3698,"name":"马赛","desc":"法国第二大城市，地中海重要港口"}]'>
      <div class="card-title">
        <h3>马赛：法国第二大城市</h3>
      </div>
      <div class="card-content">
        探索马赛老港的历史与地中海风情。
      </div>
    </div>

    <!-- 卡西斯港 -->
    <div class="card" data-points='[{"lat":43.2181,"lng":5.5386,"name":"卡西斯港","desc":"迷人的渔港和海滩"}]'>
      <div class="card-title">
        <h3>卡西斯小镇：峡湾与海风</h3>
      </div>
      <div class="card-content">
        前往风景如画的卡西斯港，享受海滩与峡湾之美。
      </div>
    </div>
  </div>

  <div id="map"></div>
</div>

<!-- Leaflet 依赖 -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<style>
  .itinerary-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
  }

  .card-list {
    flex: 1;
    max-width: 600px;
    width: 100%;
    max-height: 600px; /* 支持未来滚动 */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    width: 100%; /* 使卡片宽度自动与地图保持一致 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .card:hover {
    background-color: #f3e8ff; /* 淡紫色 */
  }

  .card-title {
    padding: 0.5rem;
    background-color: #f4f4f4;
  }

  .card-content {
    padding: 0.5rem;
  }

  #map {
    flex: 1;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1;
    margin-top: 1rem;
    min-height: 300px;
  }

  @media (max-width: 768px) {
    .itinerary-container {
      flex-direction: column;
    }

    #map {
      margin-top: 0;
    }
  }
</style>

<script>
  const map = L.map('map').setView([43.2965, 5.3698], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const waypoints = [
    { lat: 43.2965, lng: 5.3698, name: "马赛", desc: "法国第二大城市" },
    { lat: 43.2181, lng: 5.5386, name: "卡西斯港", desc: "迷人的渔港" }
  ];

  let markers = [];

  // 添加标记
  waypoints.forEach(p => {
    const marker = L.marker([p.lat, p.lng])
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br>${p.desc}`);
    marker.data = p;
    markers.push(marker);
  });

  // 绘制路线
  const latlngs = waypoints.map(p => [p.lat, p.lng]);
  const routeLine = L.polyline(latlngs, { color: '#800080', weight: 4 }).addTo(map);
  map.fitBounds(routeLine.getBounds());

  // 点击卡片居中并打开弹窗
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const points = JSON.parse(card.getAttribute('data-points'));
      const point = points[0];
      map.setView([point.lat, point.lng], 13);
      const target = markers.find(m => m.data.name === point.name);
      if (target) {
        target.openPopup();
      }
    });
  });
</script>


---

## 行程详情

**出发点｜马赛老港（Vieux-Port）**
在晨曦微光中，我们从充满活力的马赛老港启程。这里是马赛的灵魂所在，渔船轻荡，咖啡香弥漫，海鸥掠过碧蓝海面，空气中弥漫着咸咸的海洋气息。漫步在港口边，感受这座千年古城与地中海深深交织的生命力。

⏩

**第一站｜卡西斯小镇（Cassis）**
沿着风光旖旎的海岸线，驱车前往南法隐藏的珍宝——卡西斯。这里有如画的色彩港湾，迷人的石板小巷，以及藏匿在转角的咖啡馆。我们将在小镇中心自由漫步，感受地中海式的悠闲慢生活。
随后前往高处的观景点，一览卡西斯绝美的海岸线与悬崖奇观，海天一色，仿佛置身梦境。

⏩

**第二站｜马赛守护圣母大教堂（Basilique Notre-Dame de la Garde）**
返回马赛，登临城市至高点——守护圣母大教堂。这座地标性建筑不仅本身雄伟壮丽，更是俯瞰整个马赛与蔚蓝海岸线的绝佳之地。登高远眺，马赛的新旧城貌尽收眼底，海风轻拂，心旷神怡。

⏩

**第三站｜马赛龙骧宫（Palais Longchamp）**
最后，探访龙骧宫——一座为纪念水资源引入马赛而建的宏伟宫殿。喷泉飞瀑、雕塑林立，巴洛克与古典风格交融，诉说着这座城市的荣耀与故事。走在壮美的拱廊下，感受历史流转的余韵。

---
## 行摄印象
<div class="carousel-container" id="carousel">
  <!-- 图片将由 JavaScript 动态填充 -->
</div>

<script>
  const accessKey = "0Ukx3h0_C18RepNO7qXDQeFSfYQHh7Mr57cNmAN8X-M";
  const searchQueries = ["marseille", "marseille", "marseille", "marseille", "cassis", "cassis", "cassis", "cassis"];
  const carouselContainer = document.getElementById("carousel");

  async function fetchUnsplashImages() {
    try {
      for (let query of searchQueries) {
        let response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}&orientation=landscape`);
        let data = await response.json();
        let img = document.createElement("img");
        img.src = data.urls.regular; 
        img.alt = query;
        img.style.width = "100%";
        img.style.maxWidth = "450px";
        img.style.height = "auto";
        img.style.margin = "0 5px";
        img.style.borderRadius = "5px";
        img.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        carouselContainer.appendChild(img);
      }
    } catch (error) {
      console.error("Unsplash 图片加载失败", error);
    }
  }

  fetchUnsplashImages();
</script>

---

## 行程说明

- **行程顺序调整说明：** 行程中景点顺序可能因天气、交通或其他不可控因素进行适当调整，最终以出团当日确认单为准。请您理解并配合。
- **景点游览保障：** 行程所列景点确保100%游览。如遇节假日休息、景点临时关闭等特殊情况，导游将根据实际情况灵活调整，确保整体游览体验。
- **交通情况提示：** 部分城市在高峰时段可能出现交通拥堵。若因不可控交通因素导致行程延误，敬请旅客耐心配合，理解当地实际情况。
- **接送服务说明：** 我们可提供接送机、接送站服务，主要覆盖以下交通枢纽：
    - 马赛艾克斯国际机场（Marseille Aix Airport，机场代码 MRS）
    - 马赛圣查尔斯火车站（Marseille Saint-Charles Station）
    - 艾克斯-普罗旺斯火车站 （Aix-en-Provence TGV Station & Train Station）
    - 其他地区如尼斯（Nice）、蒙彼利埃（Montpillier）等周边国际机场或火车站亦可安排。
*所有接送服务需另行付费，具体费用请与我们联系确认。可提供中文、英文、法语多语言接送服务，确保您的旅途顺畅安心。*

---

## 行程包含

- **精选行程安排：** 行程中标注的所有游览内容，均为精心策划，确保旅程充实而舒适。
- **专属包车 + 中文导游服务：** 全程使用舒适车型，配备经验丰富的司导人员。小费包含在服务内，无隐形费用，真正的贴心服务体验。
- **儿童友好出行：** 免费提供儿童安全座椅，确保家庭旅客安心出行。
- **多语言讲解支持：** 可根据您的需求提供**中文、英语、法语**讲解，满足不同客群需求。
- **预订灵活无忧：** 支持出发前48小时免费取消，全额退款，让您的旅行计划更灵活、更安心。

---

## 注意事项

{% details 安全须知 %}
为了保障您的行程体验与出行安全，请您务必仔细阅读以下提示：

**上车与行程安排**

- 请您**提前到达集合地点**，避免因交通或突发情况影响行程。
- 所有上、下车时间为**参考时间**，因天气、交通、突发事件（如罢工、封路）等原因可能有延迟或调整，敬请理解。
- 行程顺序与内容可能根据当日实际情况适当调整，**以司导安排为准**。

**乘车与游览安全**

- 车辆完全停稳后方可上下车，排队依次上下，礼让老人、儿童。
- 乘车途中请勿将头手伸出窗外，不催促司机超速行驶，确保旅途安全。
- 游览、用餐、购物时，请**妥善保管个人贵重物品**，遗失概不承担赔偿责任。

**酒店入住安全**

- 入住酒店请锁好门窗，勿随意让陌生人进入房间。
- 贵重物品建议存放至前台保险柜。
- 遇火警或突发事件，切勿搭乘电梯，应从安全通道有序撤离。

**饮食与健康提示**

- 选择正规、卫生的餐饮场所，避免食用不明来源食品。
- 合理饮食，适量饮酒，旅行期间建议携带常用药品，预防水土不服或突发不适。
- 若自愿参与高风险项目（如潜水、帆船等），请根据个人状况谨慎选择，相关风险需自行承担。

**自由活动与个人安全**

- 自由活动期间请注意安全，建议三两同行，避免单独行动。
- 离队、外出须事先告知司导，确保联络畅通。
- 携带未成年人的游客，请履行好监护责任，确保儿童安全。

**购物与财务安全**

- 购物时请谨慎识别商品真伪，保留好收据和发票。
- 请勿随意相信流动商贩或陌生人的推荐，防止上当受骗。
- 热闹区域注意防范盗抢，确保财物和证件安全。

**其他重要说明**

- 节假日、长周末期间，团费可能会适度调整，预订前请与我们确认。
- 如遇不可抗力（如罢工、恶劣天气等），本行程有权作出调整或取消，敬请理解。
- 本行程由奥利旅行提供服务，我们致力于确保您的旅行体验与安全。在特殊情况下，相关责任将根据适用法律和常规进行妥善处理。
{% enddetails %}

{% details 保障说明 %}
奥利旅行作为该路线的运营商，同时与各独立服务提供商合作，负责为您安排酒店住宿、交通、观光等相关服务。这些服务将依照相关供应商的条款和条件提供。我们致力于为您提供高质量的服务体验，但在某些不可控情况下（如天气、交通、不可预见的突发事件等），可能会影响行程安排。我们会尽力确保行程顺利进行，并及时与您沟通相关调整事项。

所有服务和住宿均受到提供方所在国家法律法规的约束。为了您的旅行安全，我们建议您购买旅行保险，特别是在行李遗失或个人物品损失的情况下。我们始终关注您的旅行体验，若有任何问题或突发状况，我们将尽力提供帮助和支持。
{% enddetails %}

---

## 定制旅行

还没找到完美的行程？让我们为您量身定制！
如果您觉得这个行程不完全符合您的需求，没关系！我非常乐意根据您的兴趣、时间和预算，为您量身定制独特的旅行方案。
无论是探索更多的隐藏景点，还是想要更灵活的安排，我们都可以为您打造专属的旅程。
立即联系我们，告诉我们您的旅行梦想，我们将尽快为您设计出最适合的完美行程！

💬 [点击这里](https://aolitravel.com/custom-travel/)与我们取得联系，开始您的定制之旅！

---

## 探索更多南法旅游体验

南法，地中海的阳光与风情。无论是尼斯的海滩还是马赛的古港，南法的每一处景点都让人流连忘返。[点击这里](https://aolitravel.com/tours/)，探索更多南法旅游路线!

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/1selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/2selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/3selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/4selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/5selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/6selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/7selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/8selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/9selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/10selected-tour.jpg" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线"%}
  </div>
</div>

---
