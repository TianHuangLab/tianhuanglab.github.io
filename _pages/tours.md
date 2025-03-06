---
layout: page
permalink: /tours/
title: 精选路线
description: 快来看看我为你推荐的精选路线
nav: false
nav_order: 5
---
# 🇫🇷 欢迎来到 Aoli Travel

## 旅游产品页面

### 📌 旅游产品标题

<h1 style="text-align: left;">探索法国魅力之旅</h1>

---

### 📸 图片展示

<div style="display: flex; overflow-x: auto; gap: 10px; padding: 10px 0; white-space: nowrap; width: 100%;">
    <img src="https://source.unsplash.com/600x400/?france,travel" alt="旅游图片1" style="width: 100%; max-width: 600px; height: auto; object-fit: cover; border-radius: 5px;">
    <img src="https://source.unsplash.com/600x400/?paris" alt="旅游图片2" style="width: 100%; max-width: 600px; height: auto; object-fit: cover; border-radius: 5px;">
    <img src="https://source.unsplash.com/600x400/?provence" alt="旅游图片3" style="width: 100%; max-width: 600px; height: auto; object-fit: cover; border-radius: 5px;">
</div>

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
        img.style.maxWidth = "500px";
        img.style.height = "300px";
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

## 🏕️ 旅游行程信息

<div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="width: 60%; text-align: left;">
        <p>探索法国最美景点，享受独特旅行体验。包含导览服务、交通及精选住宿。</p>
    </div>
    <div style="width: 35%; height: 200px; background: #ccc; text-align: center; line-height: 200px;">地图显示</div>
</div>

<button style="background: #ff4d4d; color: white; padding: 10px 20px; border: none; cursor: pointer; border-radius: 5px; transition: background 0.3s; margin-top: 10px;">立即预定</button>

---

## ℹ️ 行程补充信息

提供当地文化、美食及购物指南，让您的旅行更加丰富。

<button style="background: #ff4d4d; color: white; padding: 10px 20px; border: none; cursor: pointer; border-radius: 5px; transition: background 0.3s; margin-top: 10px;">立即预定</button>
