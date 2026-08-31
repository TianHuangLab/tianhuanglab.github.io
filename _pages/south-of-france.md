---
layout: page
title: 南法旅游攻略
nav_title: 南法
permalink: /south-of-france/
description: 收藏起来，这里是你的南法旅游攻略中心，在普罗旺斯阳光与蔚蓝海岸海风里，找到旅行灵感。
nav: true
nav_order: 0.2
display_categories: [南法路线与交通, 马赛与艾克斯周边, 普罗旺斯小镇与薰衣草, 阿维尼翁、阿尔勒与古罗马南法, 尼斯与蔚蓝海岸]
horizontal: false
---

<!-- pages/projects.md -->
<div class="south-france-hub">
  <p class="sf-intro">从马赛的海风，到普罗旺斯小镇，再到尼斯、摩纳哥与蔚蓝海岸的蓝色光影，你可以按地区、路线和旅行主题，找到适合自己的南法攻略。</p>
  <div class="sf-tag-cloud" aria-label="南法攻略辅助标签">
    <a href="#南法路线与交通">第一次去南法</a>
    <a href="#南法路线与交通">路线与交通</a>
    <a href="#马赛与艾克斯周边">马赛出发</a>
    <a href="#尼斯与蔚蓝海岸">尼斯出发</a>
    <a href="#阿维尼翁、阿尔勒与古罗马南法">阿维尼翁出发</a>
    <a href="#马赛与艾克斯周边">艾克斯普罗旺斯</a>
    <a href="#普罗旺斯小镇与薰衣草">普罗旺斯小镇</a>
    <a href="#普罗旺斯小镇与薰衣草">薰衣草季</a>
    <a href="/south-of-france/france-cote-dazur-nice-art-trip/">艺术与人文</a>
    <a href="#尼斯与蔚蓝海岸">蔚蓝海岸</a>
  </div>
</div>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.south-of-france | where: "category", category %}
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

{% assign sorted_projects = site.south-of-france | sort: "importance" %}

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

<style>
  .sf-intro {
    margin: 0 0 0.9rem;
    color: var(--global-text-color-light);
    font-size: 1rem;
  }

  .sf-tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin: 0 0 2.2rem;
  }

  .sf-tag-cloud a {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(111, 66, 193, 0.45);
    border-radius: 999px;
    padding: 0.45rem 0.85rem;
    color: #6f42c1;
    background: rgba(111, 66, 193, 0.04);
    font-size: 0.92rem;
  }

  .sf-tag-cloud a:hover {
    text-decoration: none;
    background: rgba(111, 66, 193, 0.1);
  }

  .sf-featured-projects {
    margin-bottom: 1.6rem;
  }

  .projects .row {
    row-gap: 1.5rem;
  }

  .projects .card {
    height: 100%;
  }

  .projects .card-img-top {
    height: 180px;
    object-fit: cover;
  }

  @media (max-width: 767.98px) {
    .projects .card-img-top {
      height: 210px;
    }
  }
</style>
