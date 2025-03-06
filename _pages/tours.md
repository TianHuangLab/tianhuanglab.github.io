---
layout: page
permalink: /tours/
title: 精选路线
description: 快来看看我为你推荐的精选路线
nav: false
nav_order: 5
map: true
---

---

## 南法 马赛-卡西斯小镇 经典一日游

<div class="carousel-container" id="carousel">
  <!-- 图片将由 JavaScript 动态填充 -->
</div>

<script>
  const accessKey = "0Ukx3h0_C18RepNO7qXDQeFSfYQHh7Mr57cNmAN8X-M";
  const searchQueries = ["marseille vieux port", "cassis", "cassis Cap Canaille", "marseille notre dame de la garde", "marseille palais longchamps", "marseille restaurant"];
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
        img.style.height = "300px";
        img.style.margin = "0 5px";
        img.style.borderRadius = "2px";
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

### 关于此行程
清晨从马赛出发，沿着风景如画的海滨公路，首先我将带你探索迷人的卡西斯海滨度假小镇，随后返回马赛，让我们沉浸在人文历史的魅力之中。
<div style="display: flex; justify-content: space-between; align-items: center;" class="row justify-content-sm-center">
    <div style="width: 60%; text-align: left;" class="col-sm mt-3 mt-md-0">
      <ul>
        <li><b>行程线路：</b>马赛老港 -> 卡西斯小镇（市中心漫步 + 观景点） -> 马赛守护圣母大教堂 -> 马赛龙骧宫</li>
        <li><b>内容：</b>全程专享包车 + 司导无忧服务</li>
        <li><b>价格：</b>79欧/人，2人成团</li>
        <li><b>支持语言：</b>中文、英语、法语</li>
        <li><b>预定方式：</b>先订后付，取消方便（最迟提前24小时取消可获得全额退款）</li>
        <li><b>适用人群：</b>全部。如果有儿童一起出行，可免费提供儿童座椅。</li>
      </ul>
    </div>
    <div style="width: 40%;" class="col-sm mt-3 mt-md-0">
      <pre style="white-space: pre-wrap; word-wrap: break-word;">

  {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "马赛老港",
        "description": "马赛最具历史意义的港口，风景优美，周边有许多餐厅和咖啡馆。"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [5.3764, 43.2965]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "卡西斯小镇",
        "description": "风景如画的小镇，适合漫步探索，并前往观景点欣赏美景。"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [5.536, 43.214]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "马赛守护圣母大教堂",
        "description": "马赛的地标建筑，可俯瞰整座城市和地中海的壮丽景色。"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [5.3686, 43.2922]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "马赛龙骧宫",
        "description": "华丽的建筑与壮观的喷泉，是马赛文化与历史的重要象征。"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [5.3831, 43.2964]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "行程路线",
        "description": "从马赛老港出发，途经卡西斯小镇，最终返回马赛。"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [5.3764, 43.2965],
          [5.536, 43.214],
          [5.3686, 43.2922],
          [5.3831, 43.2964]
        ]
      }
    }
  ]
}
       </pre>
    </div>
</div>


<button style="background: #ff4d4d; color: white; padding: 10px 20px; border: none; cursor: pointer; border-radius: 5px; transition: background 0.3s; margin-top: 10px;">立即预定</button>

---

## 南法 普罗旺斯风情小镇经典一日游

