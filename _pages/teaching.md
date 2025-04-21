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
    height: 90vh;
  }
  .card-list {
    width: 40%;
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
  #map {
    width: 60%;
    height: 100%;
  }
</style>

<div class="itinerary-container">
  <!-- 左侧卡片区域 -->
  <div class="card-list">
    <div class="card" data-lat="43.7102" data-lng="7.2620">
      <h3>尼斯老城（Nice）</h3>
      <p>蓝色海岸的精致海港，色彩斑斓的街道与地中海阳光。</p>
    </div>
    <div class="card" data-lat="43.9493" data-lng="4.8055">
      <h3>阿维尼翁（Avignon）</h3>
      <p>教皇之城，城墙与中世纪建筑保存完好。</p>
    </div>
    <div class="card" data-lat="43.6777" data-lng="4.6278">
      <h3>阿尔勒（Arles）</h3>
      <p>梵高笔下的罗马遗迹古城，文化氛围浓厚。</p>
    </div>
  </div>

  <!-- 右侧地图 -->
  <div id="map"></div>
</div>

<script>
  const map = L.map('map').setView([43.7, 5.5], 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const locations = [
    { name: "尼斯", coords: [43.7102, 7.2620] },
    { name: "阿维尼翁", coords: [43.9493, 4.8055] },
    { name: "阿尔勒", coords: [43.6777, 4.6278] }
  ];

  const markers = [];
  const polylinePoints = [];

  locations.forEach(loc => {
    const marker = L.marker(loc.coords).addTo(map).bindPopup(loc.name);
    markers.push(marker);
    polylinePoints.push(loc.coords);
  });

  const route = L.polyline(polylinePoints, { color: 'blue' }).addTo(map);
  map.fitBounds(route.getBounds());

  document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
      map.setView(locations[index].coords, 13);
      markers[index].openPopup();
    });
  });
</script>

