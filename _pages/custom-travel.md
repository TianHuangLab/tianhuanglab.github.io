---
layout: page
permalink: /custom-travel/
title: 定制行程
description: 轻松定制你的法国旅行计划，带你探索最地道的法国之旅，让旅程变得简单、纯粹、充满惊喜！
nav: true
nav_order: 7
---
<style>
/* 页面整体样式 */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #ffffff;
  color: #333333;
  text-align: center;
  margin: 0;
  padding: 0;
}

/* 标题部分 */
.hero {
  position: relative;
  background: url('https://source.unsplash.com/1600x900/?france,travel') no-repeat center center/cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.hero h1 {
  font-size: 2em;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 5px;
}

/* 卡片式布局 */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.card {
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 220px;
  text-align: center;
}

.card img {
  width: 100%;
  border-radius: 5px;
}

.card h3 {
  margin: 10px 0;
  font-size: 1.1em;
}

/* 按钮 */
.button {
  background: #ff4d4d;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin: 20px 0;
  transition: background 0.3s;
}

.button:hover {
  background: #e63939;
}
</style>

<!--
<div class="hero">
  <h1>欢迎来到 Aoli Travel！我的同名旅行品牌，带你探索最地道的法国之旅！</h1>
</div>
-->

## 🇫🇷 欢迎来到 Aoli Travel — 填写你的旅行需求，我将为你生成一份免费的简单旅行计划！

🌍 **热爱旅行的人，终将在路上相遇**  

你好！我是**奥利飞飞**，一个把“旅行”当作生活方式的探索者。  
几年前，我和家人从巴黎搬到了法国南部，在这里享受着地中海的温暖阳光、无边蔚蓝的海岸线，以及随时都能启程的自由！  

🏕️ **背起行囊，去感受世界的呼吸**  
无论是**阿尔卑斯山**的白雪皑皑，还是**普罗旺斯**薰衣草田的浪漫紫海，或是**巴黎**街头的文艺氛围，法国的每一处都值得细细品味。  
过去十多年，我走过**三大洲十多个国家**，但**法国**始终让我流连忘返，这里的文化、风景、美食、生活方式，让人忍不住想一次次深入探索。  

📌 **如果你也向往法国，但不想踩坑、不想浪费时间查攻略，欢迎来找我！**  
我会用最地道的视角、最真实的体验，帮你定制一场适合你的完美法国之旅。  

---

## 🇫🇷 法国旅行灵感 🎉

<div class="carousel-container" id="carousel">
  <!-- 图片将由 JavaScript 动态填充 -->
</div>

<script>
  const accessKey = "0Ukx3h0_C18RepNO7qXDQeFSfYQHh7Mr57cNmAN8X-M";
  const searchQueries = ["france", "french travel", "paris city", "provence city", "france nice", "alps view", "french monuments", "french heritage", "lyon city", "france culture"];
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
        img.style.maxWidth = "400px";
        img.style.height = "auto";
        img.style.margin = "0 10px";
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

## 🌟 **为什么选择我？**  

🇫🇷 量身定制 · 深度体验 —— 让你的法国之行不只是打卡，而是一次真正的沉浸式旅行！

**地道视角，告别千篇一律的跟团行程**
👉 作为一名长期旅居法国的旅行达人，我用本地人的视角，带你发现最真实的法国风情。

**精准推荐，避坑省钱，最大化旅行体验**
👉 无需在攻略海洋中迷失，我帮你筛选最值得去的地方，让你花更少的钱，玩得更尽兴！

**个性化规划，满足你的独特旅行偏好**
👉 无论是浪漫法式度假、美食探索、亲子游、文化艺术，还是户外冒险，我都能为你量身打造专属行程。

**1000+ 旅行者真实体验，好评如潮！**
👉 已帮助上千名旅行者规划他们的法国之旅，让旅行变得简单又难忘！

还在犹豫？ 现在就填写下方表单，告诉我你的旅行需求，让我们一起开启这段法式美好之旅！ 💙✨

任何问题，欢迎发送邮件：[contact@aolitravel.com](mailto:contact@aolitravel.com) 或点击页面右下角的在线聊天与我们联系。

{% include figure.liquid loading="eager" path="assets/img/19french-culture-101-etiquette-language-culinary-dining-guide.webp/aolitravel.com-french-culture-101-etiquette-language-culinary-dining-guide-1.webp" title="aolitravel.com-custom-travel" class="img-fluid rounded z-depth-1 watermarked" alt="法国旅行定制行程france-custom-travel"%}

---

## ✨ **专属你的法国旅行定制**  
> **⏳ 只需 1 分钟填写，帮你规划一次完美旅行！**  

📌 **你是否遇到这些旅行烦恼？**  
**第一次来法国，不知道怎么玩？** 🤔  
**想深度体验，却不想踩坑？** 😩  
**网上攻略太多，反而看花了眼？** 😵  

📝 **别担心！填写你的需求，我来帮你搞定👇**  

---

<!-- ## 🛫 **填写你的旅行需求**  -->

<iframe data-tally-src="https://tally.so/embed/3xllLG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="946" frameborder="0" marginheight="0" marginwidth="0" title="🛫 填写你的旅行需求"></iframe>
<script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>

<!--
<form action="https://formspree.io/f/xdkajnbd" method="POST"> <label for="name">👤 您的姓名：</label><br> <input type="text" id="name" name="name" required><br><br>
<label for="email">📧 您的邮箱：</label><br> <input type="email" id="email" name="email" required><br><br>

<label for="destination">📍 目的地城市：</label><br> <input type="text" id="destination" name="destination" placeholder="例如：巴黎、普罗旺斯" required><br><br>

<label for="start_date">🗓️ 出发日期：</label><br> <input type="date" id="start_date" name="start_date" required><br><br>

<label for="end_date">🗓️ 返回日期：</label><br> <input type="date" id="end_date" name="end_date" required><br><br>

<label for="budget">💰 预算范围（欧元）：</label><br> <select id="budget" name="budget" required> <option value="1000-3000">经济型（€1000-€3000）</option> <option value="3000-6000">标准型（€3000-€6000）</option> <option value="6000+">豪华型（€6000以上）</option> </select><br><br>

<label for="travel_style">🎭 旅行风格：</label><br> <select id="travel_style" name="travel_style" required> <option value="浪漫之旅">浪漫之旅 🌹</option> <option value="亲子游">亲子游 👨‍👩‍👧‍👦</option> <option value="美食探索">美食探索 🍷</option> <option value="文化艺术">文化艺术 🎭</option> <option value="户外探险">户外探险 ⛰️</option> </select><br><br>

<label for="accommodation">🏨 住宿偏好：</label><br> <select id="accommodation" name="accommodation" required> <option value="经济型酒店">经济型酒店</option> <option value="三星级酒店">三星级酒店</option> <option value="四星级酒店">四星级酒店</option> <option value="五星级酒店">五星级酒店</option> <option value="民宿">民宿</option> <option value="公寓">公寓</option> </select><br><br>

<label for="transportation">🚗 交通方式偏好：</label><br> <select id="transportation" name="transportation" required> <option value="公共交通">公共交通</option> <option value="租车">租车</option> <option value="私人司机">私人司机</option> <option value="自行车">自行车</option> </select><br><br>

<label for="interests">🎯 特别兴趣：</label><br> <input type="checkbox" name="interests" value="历史遗迹"> 历史遗迹<br> <input type="checkbox" name="interests" value="自然风光"> 自然风光<br> <input type="checkbox" name="interests" value="购物"> 购物<br> <input type="checkbox" name="interests" value="夜生活"> 夜生活<br> <input type="checkbox" name="interests" value="摄影"> 摄影<br><br>

<label for="message">📝 其他需求或备注其他联系方式，如微信或Line：</label><br>

<textarea id="message" name="message" rows="4" placeholder="请提供其他特殊需求或偏好"></textarea><br><br> <button type="submit" style="background-color: #b509ac; color: white; padding: 10px 20px; font-size: 16px; border: none; cursor: pointer;"> 🚀 提交需求，获取定制行程 </button> </form>
-->

---

## 探索更多南法旅游体验

还在犹豫如何安排行程？不妨看看我们为您精心准备的南法精选路线，从蔚蓝海岸到山间小镇，灵感即刻启程！
在这里，地中海的阳光与风情完美的交融在一起！无论是尼斯的海滩还是马赛的古港，南法的每一处景点都让人流连忘返。[点击这里](https://aolitravel.com/tours/)，探索更多奥利旅行旗下的南法旅游路线!

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/1.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/2.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/3.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/4.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/5.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/6.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/7.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/8.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/9.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/10.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/11.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <a href="https://aolitravel.com/tours/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/12.png" title="south-france-selected-tour" class="img-fluid rounded z-depth-1" alt="south-france-selected-tour南法旅游精选路线" %}
    </a>
  </div>
</div>


---
