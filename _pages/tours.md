---
layout: page
title: 精选路线
permalink: /tours/
description: 快来看看我为你推荐的精选路线
nav: false
nav_order: 5
display_categories:
map: true
horizontal: false
images:
  slider: true
---
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-1.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-8.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-3.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-2.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-5.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-12.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-13.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-14.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-4.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-5.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-6.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-7.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-9.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-15.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-11.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-10.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.tours | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.tours | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

---

## 联系我们

<!-- 人物介绍板块 -->
<div style="display: flex; align-items: center; gap: 20px; margin: 2em 0;">

  <!-- 左侧头像（圆形） -->
  <div style="flex: 1; text-align: center;">
      {% include figure.liquid loading="eager" path="assets/img/profile-tian.jpg" title="aolitravel.com recommandation" class="img-fluid rounded-circle mx-auto d-block rounded z-depth-1" alt="aolitravel.com" %}
  </div>

  <!-- 右侧文字内容 -->
  <div style="flex: 2;">
    <p>推荐理由：一天走遍港口老城和海边小镇！从热情洋溢的马赛出发，一路玩到风景如画的卡西斯，海风、峡湾、美食全都有～来一场说走就走的地中海微旅行吧！</p>
    <p>经常游走南法，希望通过我的文字和路线，带你深度体验南法（普罗旺斯 & 蔚蓝海岸）的美好风光。</p>
    <p><a href="https://aolitravel.com/">了解我更多...</a></p>
    <p>想要咨询？欢迎 <a href="mailto:contact@aolitravel.com">发送邮件</a>或点击页面右下角的在线聊天与我们联系。</p>
  </div>

</div>

---

## 定制旅行

还没找到完美的行程？让我们为您量身定制！
如果您觉得这个行程不完全符合您的需求，没关系！我非常乐意根据您的兴趣、时间和预算，为您量身定制独特的旅行方案。
无论是探索更多的隐藏景点，还是想要更灵活的安排，我们都可以为您打造专属的旅程。
立即联系我们，告诉我们您的旅行梦想，我们将尽快为您设计出最适合的完美行程！

💬 [点击这里](https://aolitravel.com/custom-travel/)与我们取得联系，开始您的定制之旅！

  <div>
    <a href="https://aolitravel.com/custom-travel/">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0template/0a.png" title="france-custom-tour" class="img-fluid rounded z-depth-1" alt="france-custom-tour" %}
    </a>
  </div>

---

