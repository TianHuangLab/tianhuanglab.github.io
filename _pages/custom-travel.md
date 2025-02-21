---
layout: page
permalink: /custom-travel/
title: 定制行程
description: 轻松定制你的法国旅行计划，让探索变得简单、纯粹、充满惊喜！填写你的旅行需求，我将为你生成一份免费的简单旅行计划！
nav: false
nav_order: 6
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

/* 图片轮播 */
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

## 🇫🇷 嗨！欢迎来到 Aoli Travel —— 我的同名旅行品牌，带你探索最地道的法国之旅！

🌍 **热爱旅行的人，终将在路上相遇**  

你好！我是**奥利飞飞**，一个把“旅行”当作生活方式的探索者。  
几年前，我和家人从巴黎搬到了法国南部，在这里享受着地中海的温暖阳光、无边蔚蓝的海岸线，以及随时都能启程的自由！  

🏕️ **背起行囊，去感受世界的呼吸**  
无论是**阿尔卑斯山的白雪皑皑**，还是**普罗旺斯薰衣草田的浪漫紫海**，或是**巴黎街头的文艺氛围**，法国的每一处都值得细细品味。  
过去十多年，我走过**三大洲十多个国家**，但**法国始终让我流连忘返**，这里的文化、风景、美食、生活方式，让人忍不住想一次次深入探索。  

📌 **如果你也向往法国，但不想踩坑、不想浪费时间查攻略，欢迎来找我！**  
我会用最地道的视角、最真实的体验，帮你定制一场**适合你的完美法国之旅**。  

---

## 🎥 **先来感受一下旅行的美好！**  

## 🇫🇷 法国旅行灵感 🎉

<div class="carousel-container" id="carousel">
  <!-- 图片将由 JavaScript 动态填充 -->
</div>

<script>
  const accessKey = "0Ukx3h0_C18RepNO7qXDQeFSfYQHh7Mr57cNmAN8X-M";
  const searchQueries = ["paris", "provence", "nice", "alps", "french food"];
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

## ✨ **选择你的旅行风格**  

<div class="card-container">
  <div class="card">
    <img src="https://source.unsplash.com/300x200/?romantic,paris" alt="浪漫旅行">
    <h3>🌹 浪漫之旅</h3>
    <p>带上你的另一半，在巴黎的街头漫步，感受最纯粹的浪漫。</p>
  </div>

  <div class="card">
    <img src="https://source.unsplash.com/300x200/?family,travel" alt="亲子游">
    <h3>👨‍👩‍👧‍👦 亲子游</h3>
    <p>带上孩子，一起探索法国的博物馆、动物园和童话小镇。</p>
  </div>

  <div class="card">
    <img src="https://source.unsplash.com/300x200/?frenchfood,wine" alt="美食之旅">
    <h3>🍷 美食探索</h3>
    <p>品尝世界级的红酒、美味的法餐，体验地道的法国味道。</p>
  </div>

  <div class="card">
    <img src="https://source.unsplash.com/300x200/?mountain,hiking" alt="户外探险">
    <h3>⛰️ 户外探险</h3>
    <p>从阿尔卑斯山滑雪到蔚蓝海岸潜水，感受极限运动的魅力！</p>
  </div>
</div>

---

## ✨ **专属你的法国旅行定制**  
> **⏳ 只需 1 分钟填写，帮你规划一次完美旅行！**  

📌 **你是否遇到这些旅行烦恼？**  
- **第一次来法国，不知道怎么玩？** 🤔  
- **想深度体验，却不想踩坑？** 😩  
- **网上攻略太多，反而看花了眼？** 😵  

📝 **别担心！填写你的需求，我来帮你搞定👇**  

---

## 🛫 **填写你的旅行需求**  

<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <label for="name">👤 你的姓名：</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="email">📧 你的邮箱：</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="city">📍 你想去的城市：</label><br>
  <select id="city" name="city" required>
    <option value="巴黎">巴黎</option>
    <option value="普罗旺斯">普罗旺斯</option>
    <option value="尼斯">尼斯</option>
    <option value="波尔多">波尔多</option>
    <option value="阿尔萨斯">阿尔萨斯</option>
    <option value="其他">其他（请备注）</option>
  </select><br><br>

  <label for="days">📅 预计行程天数：</label><br>
  <input type="number" id="days" name="days" min="1" max="30" required> 天<br><br>

  <label for="budget">💰 预算范围：</label><br>
  <select id="budget" name="budget" required>
    <option value="经济型（€1000-€3000）">经济型（€1000-€3000）</option>
    <option value="标准型（€3000-€6000）">标准型（€3000-€6000）</option>
    <option value="豪华型（€6000+）">豪华型（€6000+）</option>
  </select><br><br>

  <label for="style">🎭 你的旅行风格：</label><br>
  <input type="checkbox" name="style" value="浪漫"> 浪漫之旅 🌹<br>
  <input type="checkbox" name="style" value="亲子"> 亲子游 👨‍👩‍👧‍👦<br>
  <input type="checkbox" name="style" value="美食"> 美食探索 🍷<br>
  <input type="checkbox" name="style" value="文化"> 文化艺术 🎭<br>
  <input type="checkbox" name="style" value="户外"> 户外探险 ⛰️<br><br>

  <label for="message">📝 其他需求：</label><br>
  <textarea id="message" name="message" rows="4"></textarea><br><br>

  <button type="submit" style="background-color: #ff4d4d; color: white; padding: 10px 20px; font-size: 16px; border: none; cursor: pointer;">
    🚀 提交需求，获取定制行程
  </button>
</form>

---

## 🌟 **为什么选择我？**  
✅ **地道视角，告别千篇一律的旅游团行程**  
✅ **精准推荐，避免踩坑，帮你节省时间 & 预算**  
✅ **随时沟通，有问必答，打造属于你的个性化旅程**  
✅ **已经帮助 1000+ 旅行者深度体验法国**  

🎒 **还在犹豫？** 来吧，让我们一起探索法国的美好！ 💙✨  

