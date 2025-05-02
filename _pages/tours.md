---
layout: page
title: 精选路线
permalink: /tours/
description: 快来看看我为你推荐的精选行程！
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

---

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

  <!-- 右侧文字内容 + 按钮 -->
  <div style="flex: 2;">
    <p>常年穿梭在南法的大街小巷、山川海岸，不论是普罗旺斯的薰衣草花海、蔚蓝海岸的阳光沙滩，还是只有当地人知道的隐秘村庄、静谧酒庄，甚至是顶级酒店与米其林餐厅...我都亲身体验、用心记录，只为帮你打造一段专属于你的南法之旅。</p>
    <p>无论你想打卡经典地标、探索小众秘境，还是追求奢华私享的高端体验，我都可以为你提供路线建议与旅行灵感。欢迎留言或私信我，一起聊聊你的旅行期待，让梦想中的南法之旅，从这一刻开始变成现实。</p>
    <p><a href="https://aolitravel.com/">了解我更多...</a></p>
    <p>想要咨询？欢迎联系我们：</p>

    <!-- 嵌入按钮 -->
    <div class="d-flex gap-3 flex-wrap mt-2">
      <a href="mailto:contact@aolitravel.com" class="btn btn-lg text-white" style="background-color: #6f42c1; border-radius: 0.75rem;">
        发送邮件
      </a>
      <button class="btn btn-lg text-white" style="background-color: #6f42c1; border-radius: 0.75rem;" onclick="openTidio()">
        在线聊天
      </button>
    </div>
  </div>

</div>

<!-- 聊天脚本 -->
<script>
  function openTidio() {
    if (window.tidioChatApi) {
      window.tidioChatApi.open();
    } else {
      alert("聊天加载中，请稍后重试。");
    }
  }
</script>


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

