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

<style>
  .itinerary-container {
    display: flex;
    height: 100vh;
  }
  .card-list {
    width: 60%;
    overflow-y: auto;
    padding: 1rem;
    border-right: 1px solid #ccc;
    box-shadow: inset -5px 0 5px -5px #aaa;
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
    background: #f0f8ff;
  }
  .card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
  .card-buttons {
    margin-top: 0.5rem;
  }
  .card-buttons button {
    margin-right: 0.5rem;
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
  }
  #map {
    width: 40%;
    height: 100%;
  }
</style>

<div class="itinerary-container">
  <div class="card-list">
    <div class="card" data-points="43.2965,5.3698;43.2130,5.5360">
      <img src="/images/marseille-cassis.jpg" alt="馬賽-卡西斯">
      <h3>馬賽 - 卡西斯海濱小鎮</h3>
      <p>地中海岸線與峽灣之美</p>
      <p>從馬賽出發，經典一日游，欣賞壯麗海景與迷人港口。</p>
      <div class="card-buttons">
        <button onclick="event.stopPropagation(); alert('播放卡西斯旅遊影片')">查看錄像</button>
        <button onclick="event.stopPropagation(); alert('請聯絡我們了解更多')">聯繫我</button>
      </div>
    </div>

    <div class="card" data-points="43.8342,5.0343;43.9200,5.1267;43.9027,5.2920">
      <img src="/images/gordes-route.jpg" alt="石頭村之旅">
      <h3>馬賽 - 石頭村之旅</h3>
      <p>探訪普羅旺斯的山間秘境</p>
      <p>穿越泉水村、戈爾德與紅土小鎮，感受鄉間寧靜與藝術氛圍。</p>
      <div class="card-buttons">
        <button onclick="event.stopPropagation(); alert('播放普羅旺斯影片')">查看錄像</button>
        <button onclick="event.stopPropagation(); alert('請聯絡我們了解更多')">聯繫我</button>
      </div>
    </div>
  </div>
  <div id="map"></div>
</div>

<script>
  const map = L.map('map').setView([43.7, 5.5], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let routeLayer;

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const pointStr = card.getAttribute('data-points');
      const coords = pointStr.split(';').map(pair => {
        const [lat, lng] = pair.split(',').map(Number);
        return [lat, lng];
      });

      if (routeLayer) map.removeLayer(routeLayer);

      routeLayer = L.polyline(coords, { color: 'blue' }).addTo(map);
      map.fitBounds(routeLayer.getBounds());
    });
  });
</script>
