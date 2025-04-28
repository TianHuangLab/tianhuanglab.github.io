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

---

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

<div style="display: flex; width: 100%; height: 600px;">
  <!-- 左边：卡片列表 -->
  <div id="location-list" style="width: 50%; overflow-y: auto; padding: 10px;">
    <!-- 动态生成地点卡片 -->
  </div>

  <!-- 右边：地图 -->
  <div id="map" style="width: 50%; height: 600px;"></div>
</div>

<!-- 引入 Leaflet.js 和 Leaflet.css -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
// 多天行程数据
const locations = [
  { day: 1, name: "马赛 Marseille", intro: "法国南部最大港口，地中海明珠", lat: 43.2965, lng: 5.3698 },
  { day: 2, name: "卡西斯 Cassis", intro: "风景如画的海滨小镇，以峡湾和海滩著称", lat: 43.2150, lng: 5.5385 }
];

// 自动适配浏览器语言
const browserLang = navigator.language || navigator.userLanguage;
const isChinese = browserLang.includes('zh');

// 创建地图对象
const map = L.map('map').setView([locations[0].lat, locations[0].lng], 11);

// 设置地图底图
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: isChinese ? '地图数据 &copy; <a href="https://openstreetmap.org">OpenStreetMap贡献者</a>' : 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap contributors</a>',
}).addTo(map);

// 紫色Marker Icon
const purpleIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-violet.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// 绘制Marker和Polyline连线
const latlngs = [];
locations.forEach((loc) => {
  const marker = L.marker([loc.lat, loc.lng], { icon: purpleIcon })
    .bindPopup(`<b>Day ${loc.day} - ${loc.name}</b><br>${loc.intro}`)
    .addTo(map);
  latlngs.push([loc.lat, loc.lng]);
});

// 连线路径（紫色）
const polyline = L.polyline(latlngs, { color: 'purple' }).addTo(map);

// 自适应缩放到所有点
map.fitBounds(polyline.getBounds());

// 左侧生成卡片
const listDiv = document.getElementById('location-list');
locations.forEach((loc) => {
  const card = document.createElement('div');
  card.style.border = '1px solid #ccc';
  card.style.borderRadius = '8px';
  card.style.padding = '10px';
  card.style.marginBottom = '10px';
  card.style.cursor = 'pointer';
  card.style.backgroundColor = '#f9f9f9';
  card.innerHTML = `<h3 style="margin: 0;">Day ${loc.day}: ${loc.name}</h3><p style="margin: 5px 0;">${loc.intro}</p>`;
  card.onclick = () => {
    map.setView([loc.lat, loc.lng], 13); // 点击时地图居中并放大
    L.popup()
      .setLatLng([loc.lat, loc.lng])
      .setContent(`<b>Day ${loc.day} - ${loc.name}</b><br>${loc.intro}`)
      .openOn(map);
  };
  listDiv.appendChild(card);
});
</script>


---

# 行程详情

**出发点：马赛老港** ⏩ **卡西斯小镇**（市中心漫步 + 观景点） ⏩ **马赛守护圣母大教堂** ⏩ **马赛龙骧宫** 

**马赛老港**——感受这座城市的活力与海洋气息

**卡西斯小镇**——漫步童话般的街巷 + 俯瞰绝美海岸线

**马赛守护圣母大教堂**——登高远眺，俯瞰马赛全景

**龙骧宫**——领略宏伟建筑，聆听城市故事


---

# 行程说明

- **行程顺序调整说明：**行程中景点顺序可能因天气、交通或其他不可控因素进行适当调整，最终以出团当日确认单为准。请您理解并配合。
- **景点游览保障：**行程所列景点确保100%游览。如遇节假日休息、景点临时关闭等特殊情况，导游将根据实际情况灵活调整，确保整体游览体验。
- **交通情况提示：**部分城市在高峰时段可能出现交通拥堵。若因不可控交通因素导致行程延误，敬请旅客耐心配合，理解当地实际情况。
- **接送服务说明：**我们可提供接送机、接送站服务，主要覆盖以下交通枢纽：
    - 马赛艾克斯国际机场（Marseille Aix Airport，机场代码 MRS）
    - 马赛圣查尔斯火车站（Marseille Saint-Charles Station）
    - 艾克斯-普罗旺斯火车站 （Aix-en-Provence TGV Station & Train Station）
    - 其他地区如尼斯（Nice）、蒙彼利埃（Montpillier）等周边国际机场或火车站亦可安排。      
        *所有接送服务需另行付费，具体费用请与我们联系确认。可提供中文、英文、法语多语言接送服务，确保您的旅途顺畅安心。*
---

# 行程包含

- **精选行程安排：**行程中标注的所有游览内容，均为精心策划，确保旅程充实而舒适。
- **专属包车 + 中文导游服务：**全程使用舒适车型，配备经验丰富的司导人员。小费包含在服务内，无隐形费用，真正的贴心服务体验。
- **儿童友好出行：**免费提供儿童安全座椅，确保家庭旅客安心出行。
- **多语言讲解支持：**可根据您的需求提供**中文、英语、法语**讲解，满足不同客群需求。
- **预订灵活无忧：**支持出发前48小时免费取消，全额退款，让您的旅行计划更灵活、更安心。

---

# 注意事项

{% details 特别提示 %}
fsfsfsfsfj
{% enddetails %}

{% details 安全须知 %}
- 请提前到达上车地点候车。上、下车时间均为参考时间，如因特别情形(如天气、修路、罢工、封山、旅游车特殊状况)造成车辆晚点，敬请见谅。行程的先后顺序和行程内容，可能会根据您的出发时间等有所调整，请以参团当天导游的安排为准。游客在机、车、船停稳后方可上下机、车、船。并按机场、车站、港口安全管理规定或指示标志通行及排队上下机、车、船；要讲究文明礼貌，先照顾老人、儿童、妇女；切勿拥挤，以免发生意外。请勿携带违禁物品。在机、车、船临时停靠期间，服从服务人员安排，请勿远离。游客在乘车途中，请不要与司机交谈和催促司机开快车，违章超速和超车行驶；不要将头、手、脚或行李物品伸出窗外，以防意外发生。游客下车游览、就餐、购物时，请注意关好旅游车窗，贵重物品请自己随身携带并妥善保管。游客乘坐飞机时，应注意遵守民航乘机安全管理规定，特别是不要在飞机上使用手机等无线电通讯工具或电子游戏机等，建议全程系好安全带。
- 住宿酒店时，请随时将房门扣上安全锁；请勿在灯上晾晒衣物；请勿在房间内吸烟；听到警报器响时，请由紧急出口迅速离开。 游客应了解酒店安全须知，熟悉酒店的太平门、安全出路、安全楼梯的位置和安全转移的路线。注意检查酒店为你所配备的用品（卫生间防滑垫等）是否齐全，有无破损，如有不全或破损，请立即向酒店服务员或导游报告。如因当地条件所限，未能配备，请游客小心谨慎，防止发生意外。贵重物品应存放于酒店总台保险柜或自行妥善保管，外出时不要放在房间内。不要将自己住宿的酒店、房号随便告诉陌生人；不要让陌生人或自称酒店的维修人员随便进入房间；出入房间要锁好房门，睡觉前注意房门窗是否关好，保险锁是否锁上；贵重物品最好放于身边，不要放在靠窗的地方。游客入住酒店后需要外出时，应告知随团导游；在酒店总台领一张酒店房卡或信息卡，卡片上有酒店地址、电话或抄写酒店地址或电话；如果您迷路时，可以按地址询问或搭乘出租车，安全顺利返回住所。遇紧急情况千万不要慌张。发生火警时不要搭乘电梯或随意跳楼；镇定地判断火情，主动地实行自救。若身上着火，可就地打滚，或用重衣物压火苗；必须穿过有浓 烟的走廊、通道时，用浸湿的衣物披裹身体，捂住口鼻，贴近地面、顺墙爬走；大火封门无法逃出时，可采用浸湿的衣物披裹身体，用被褥封堵门缝或泼水降温的办法等待救援，同时摇动色彩鲜艳的衣物呼唤救援人员。
- 在旅游地购买食物需注意商品质量，发现食物不卫生或有异味变质的情况，切勿食用。不要接受和食用陌生人赠送的香烟、食物和饮品，防止意外发生。旅游期间要合理饮食，不要暴饮、暴食或贪食。为防止在旅途中水土不服，游客应自备一些常用药品以备不时之需。切勿随意服用他人所提供之药品。
- 旅行社不提倡过量饮酒，并对游客因饮酒发生的意外不承担责任。若行程中有饮酒的项目或游客自行安排饮酒，游客应严格控制自己的酒量，饮酒时最好不超过本人平时酒量的三分之一；若出现酗酒闹事、扰乱社会秩序、侵害他人权益以及造成自身损害的一切责任由肇事者（游客）自行承担。
- 游客途中若需离队，请务必征得导游同意，以免发生意外。夜间或自由活动时间若需自行外出，请告知导游或团友，并应特别注意安全。行走于雪地及陡峭之路时，请谨慎小心。请遵守观光区、餐厅、饭店、游乐设施等各种场所的注意事项。请自备胃肠药、感冒药、晕车药、私人习惯性药物等。听取当地导游有关安全的提示和忠告，主要应预防意外事故和突发性疾病的发生。经过危险地段（如陡峭、狭窄的同路、潮湿泛滑的道路等）不可拥挤；前往险峻处观光时应充分考虑自身的条件是否可行，不要强求和存侥幸心理。游客登山或参与活动中根据应自身身体状况进行，注意适当休息，避免过度激烈运动以及自身身体无法适应的活动，同时做好防护工作。在水上（包括江河、湖海、水库）游览或活动时，注意乘船安全，穿戴救生衣；不单独前往深水水域或危险河道。乘坐缆车或其他载人观光运载工具时，应服从景区工作人员安排；遇超载、超员或其他异常情况时，千万不要乘坐，以防发生危险。游览期间游客应三两成群，不要独行。如果迷失方向，原则上应原地等候导游的到来或打电话求救、求助，千万不要着急。自由活动期间游客不要走的太远。携带未成年人的游客，请认真履行监护责任，不能让未成年人单独行动，并注意安全。在旅游行程中的自由活动时间，游客应当选择自己能够控制风险的活动项目，并在自己能够控制风险的范围内活动。除特殊团队外，旅行社不安排赛车、赛马、攀岩、滑翔、探险性漂流、滑雪、下海、潜水、滑板、跳伞、热气球、蹦极、冲浪、跳伞等高风险活动，也敬请游客在旅游中的自由活动期间慎重考虑是否参与并自行评估风险，对参加高危险活动的游客旅行社对可能发生的意外不承担任何责任，游客在报名参加高风险活动事视为同意自行承担可能发生的意外。
- 不要轻信流动推销人员的商品推荐。无意购买时，不要向商家问价或还价。要细心鉴别商品真伪，不要急于付款购物。购物时应向商家索取正式发票。不要随商品推销人员到偏僻地方购物或取物。在热闹拥挤的场所购物或娱乐时，请注意保管好自己的钱包、提包、贵重物品及证件；不要单独行动，不要前往管理混乱的娱乐场所。游客在购物、娱乐时、应防止诈骗、盗窃和抢劫事故的发生。在景点内娱乐时，应根据自身的条件参与适应的项目；在自由活动期间外出娱乐活动不要单独行动，不要前往管理混乱的娱乐场所，不要参与涉嫌违法的娱乐活动。
- 注意听从导游的安排，记住集合的时间和地点；认清自己所乘坐的车型、车牌号及颜色；不要迟到，因迟到造成的后果由游客个人负责。在旅游活动中，为了防止火灾事故的发生，请不要携带易燃、易爆物品；不要乱扔烟头和火种。游客乘坐飞机旅游时，应带好自己的有效身份证，并注意保管。请核对机票、火车票、船票上的姓名、往返时间、抵离目的地、班次是否正确；请注意保存好机票、火车票、船票。如因游客自身原因造成不能登机、车、船， 旅行社概不负责。游客在旅途中发生人身或财产意外事故时，按有关机构（如交通运输部门、酒店、保险公司、风景区管理单位）订立的条例或合同规定处理。
- 圣诞节、新年、国庆日、劳动节或其他长周末假期，团费会有适当的调整，请在预订前先行确认。如遇特别情形(如天气、修路、罢工、封山、旅游车、政治等特殊状况等)，为保障旅客权益，本公司保留调整或取消行程的最终解释权。
- 为保障您的个人财产安全，我们建议您在旅行期间随身携带贵重物品，不要将贵重物品遗留在大巴/酒店/景点/餐馆等地点；在任何情况及任何地点下失窃，造成个人财产损失，旅行社及司机、导游等均不负任何责任，敬请悉知。请身体状况特殊的客人(老弱病残孕)一定要在自身的身体允许的情况下参团，如果因为自身原因导致突发情况、疾病的产生或复发等状况，旅行社及司机、导游等均不负任何责任，敬请悉知。
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



