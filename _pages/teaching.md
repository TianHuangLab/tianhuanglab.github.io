---
layout: page
permalink: /teaching/
title: teaching
description: Materials for courses you taught. Replace this text with your description.
nav: false
nav_order: 6
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

---

# Notion Pitch Deck Template

---

This template was created by [Maximilian Fleitmann](https://twitter.com/maxfleit) of [BaseTemplates](https://basetemplates.com). 

<aside>
🔥 **Our templates and content helps early-stage founders get funded!**

</aside>

[BaseTemplates: Pitch Deck & Fundraising Templates](https://basetemplates.com)

---

**This is the Notion Pitch Deck Template 👇**

- How to use it
    
    1) Duplicate the template to your space.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19ee3f8e-aa45-4459-bb80-ea4c8c71b175/Untitled.png)
    
    2) Fill out the different sections with your own information & graphics.
    
    3) Share the page with your potential investors.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd87abed-5356-4feb-a8fe-fe172bcbe321/Untitled.png)
    
- Real Life Example
    
    [https://wizard-ventures.notion.site/wizard-ventures/Magic-Design-Angel-Round-cc3369579a91401eb3c4b05f376a53cf](https://www.notion.so/cc3369579a91401eb3c4b05f376a53cf?pvs=21)
    
- “How to build your pitch deck in Notion” → Full YouTube Video
    
    [](https://youtu.be/_IfPXam2rek)
    

---

***Confidentiality Notice***

*This Notion page contains sensitive information intended solely for the recipient's review and feedback. The contents of this page are confidential and may not be reproduced, shared, or disclosed, in whole or in part, without the express written permission of the author. The recipient agrees to take reasonable precautions to prevent unauthorized access, copying, or disclosure of the information.*

---

<aside>
🌐 [Your URL]

</aside>

## [Company Name]

### [Your Company Headline / Slogan / Value Proposition]

[High Level Elevator Pitch]

<aside>
🏆 [What is the vision of your company?]

</aside>

### 😱 Problem

![642565653710d0328859e9ae_Lack of design capacity.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8461df8b-7f2f-47a1-a068-90a84d46ed32/642565653710d0328859e9ae_Lack_of_design_capacity.svg)

**# Problem 1**

---

[Describe the problem more in detail]

![642565c3658b1d9514f9bbd5_Scaling design is difficult.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bae4ca08-7c4a-43c2-b8b2-74b5ab73b97c/642565c3658b1d9514f9bbd5_Scaling_design_is_difficult.svg)

**# Problem 2**

---

[Describe the problem more in detail]

![642565cc53ab1466d089b768_Expensive & hard to plan.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be8a324c-e460-4967-8620-718f34d16f5e/642565cc53ab1466d089b768_Expensive__hard_to_plan.svg)

**# Problem 3**

---

[Describe the problem more in detail]

![642565d7dcaff4efc8d4a2b5_Slow communication.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06b05ee8-25c7-4a2c-add4-9155516c766d/642565d7dcaff4efc8d4a2b5_Slow_communication.svg)

**# Problem 4**

---

[Describe the problem more in detail]

![642565e02fee177fc2f5dcd6_Fixed & inflexible contracts.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/95c65c43-07f7-4ee9-be23-20ada0eaa6b8/642565e02fee177fc2f5dcd6_Fixed__inflexible_contracts.svg)

**# Problem 5**

---

[Describe the problem more in detail]

![642565e8a127ac74f8f35605_Top talent is hard to find.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d7b0ae01-2b49-40b1-b513-3ce1e4dcb589/642565e8a127ac74f8f35605_Top_talent_is_hard_to_find.svg)

**# Problem 5**

---

[Describe the problem more in detail]

### 💡 Solution

![[Insert a product screenshot here]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69c896d6-48b3-41bd-a927-1e591a00892b/Untitled.png)

[Insert a product screenshot here]

<aside>
🪄 [How would you describe your startup in <10 words?]

</aside>

**How it works**

![[Insert your images]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79f6f75b-15ff-48d8-a68c-c9defdd58359/1.jpg)

[Insert your images]

[Step 1]

---

[Describe how your product works]

![[Insert your images]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/368ee5f2-e5bc-4106-afbf-81d6eb459f2c/2.jpg)

[Insert your images]

[Step 2]

---

[Describe how your product works]

![[Insert your images]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea193785-9f27-4d0b-92cd-4e864e005d91/3.jpg)

[Insert your images]

[Step 3]

---

[Describe how your product works]

### 💻 Product

[You can include a Loom video with a product walkthrough here]

![64257745943fc812c4e0acf2_Unlimited Tasks.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8178570-255a-4bd6-872e-ca954f26f2a0/64257745943fc812c4e0acf2_Unlimited_Tasks.svg)

# Feature 1

---

[Describe feature 1]

![6425775faeb3533552b1823c_Fast Results.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b85f786-49bf-4401-9a64-50415344ad73/6425775faeb3533552b1823c_Fast_Results.svg)

# Feature 2

---

[Describe feature 2]

![6425778220fc3247fc7a2ca2_Fixed Monthly Subscription.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57dac1db-2eb0-4726-8360-99d17f3c67a7/6425778220fc3247fc7a2ca2_Fixed_Monthly_Subscription.svg)

# Feature 3

---

[Describe feature 3]

![64257792306d9fed7365e7d0_Excellent Design Quality.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4fb9fc5-9644-4a0a-a325-08e062a1f1e9/64257792306d9fed7365e7d0_Excellent_Design_Quality.svg)

# Feature 4

---

[Describe feature 4]

![642577c097e0b1bfd03a45ea_Flexible & Scalable.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a91faec5-4c78-4084-9657-e9eab79092b1/642577c097e0b1bfd03a45ea_Flexible__Scalable.svg)

# Feature 5

---

[Describe feature 5]

![642577d8658b1d585efaf090_Individual & 100% Yours.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f583921-e088-4d9d-9a28-d06d1af98e1d/642577d8658b1d585efaf090_Individual__100_Yours.svg)

# Feature 6

---

[Describe feature 6]

### 🌎 Market

<aside>
🙍🏻 Our current ICP

[Describe your ideal customer persona]

</aside>

[Include calculations, statistics about your market (e.g. TAM, SAM, SOM)]

### 💳 Business Model

[Describe what monetisation method you are using (e.g. subscription)]

<aside>
🎨 [Plan 1]

</aside>

---

[—-$ *p.M.]*

---

- [Feature]
- [Feature]
- [Feature]
- [Feature]
- [Feature]

<aside>
😱 [Plan 2]

</aside>

---

[—-$ *p.M.]*

---

- [Feature]
- [Feature]
- [Feature]
- [Feature]
- [Feature]
- [Feature]

<aside>
🏦 [Plan 3]

</aside>

---

*Custom*

---

[Describe the plan for enterprise customers.]

**Margins & COGs**

[If relevant use this space to talk about the margins or costs of your product]

### 🥊 Competition

[Competitors](https://www.notion.so/1e064dd2e06381b6acb8e09f9b60a18f?pvs=21)

<aside>
🇩🇪 [Use this space to talk about your USPs. What makes you better than the competiton?]

Since this is not a winner-takes-all market, we can leverage our early go-to-market strategy to win a lot of early clients without much competition.

</aside>

### 🚀 Go-to-Market

<aside>
📤 **[# Channel 1]**

[Talk about how you will use this channel.]

[Add metrics & accomplishments for this channel.]

</aside>

<aside>
🗣 [# Channel 2]

****[Talk about how you will use this channel.]

[Add metrics & accomplishments for this channel.]

</aside>

<aside>
📈 [# Channel 3]

[Talk about how you will use this channel.]

[Add metrics & accomplishments for this channel.]

</aside>

### 📈 Traction

[Headline for your chart]

![[Include your own chart]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ce6455d-fe8d-4797-9b73-b93070298c61/mrr.png)

[Include your own chart]

<aside>
👥 [#Traction Metric 1]

</aside>

<aside>
📯 [#Traction Metric 2]

</aside>

<aside>
📈 [#Traction Metric 3]

</aside>

<aside>
⚠️ [#Traction Metric 4]

</aside>

### 👥 Team

![Screenshot 2023-04-23 at 18.56.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/036a2e69-12db-4ee8-a26f-b13391727ab1/Screenshot_2023-04-23_at_18.56.02.png)

[Name]

*Co-Founder & CEO*

---

[# Accomplishment 1]

[# Accomplishment 2]

[# Accomplishment 3]

---

🤝 LinkedIn

🐦 Twitter

🌐 Website

![Screenshot 2023-04-23 at 18.56.46.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73c378c1-5de9-437f-8da6-2652464196f4/Screenshot_2023-04-23_at_18.56.46.png)

[Name]

*Co-Founder & COO*

---

[# Accomplishment 1]

[# Accomplishment 2]

[# Accomplishment 3]

---

🤝 LinkedIn

### ❓Ask

<aside>
💵 [Include your fundraising ask]

</aside>

🔎 **Use of Funds:**

- [# Area of Investment 1]
- [# Area of Investment 2]
- [# Area of Investment 3]

📍**Where the money will get us:**

- [# Milestone 1]
- [# Milestone 2]
- [# Milestone 3]

---

### 📮 Contact

<aside>
👇 [Call to Action that refers to your business]

</aside>

![Screenshot 2023-04-23 at 18.56.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05bd5fc3-73fc-4995-b229-d3a2c488d187/Screenshot_2023-04-23_at_18.56.02.png)

<aside>
📇

[Name]
*****Co-Founder & CEO*
****
[Email adress]

</aside>
