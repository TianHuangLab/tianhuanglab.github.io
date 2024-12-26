---
layout: page
title: 巴黎
permalink: /paris/
description: 漫步浪漫巴黎，感受法式风情
nav: true
nav_order: 1
display_categories: [paris, others]
horizontal: false
---

<!-- pages/paris.md -->
<div class="paris">
{%- if site.enable_project_categories and page.display_categories -%}
  <!-- Display categorized paris -->
  {%- for category in page.display_categories -%}
  <h2 class="category">{{ category }}</h2>
  {%- if page.only_highlights -%}
    {%- assign categorized_projects = site.paris | where: "highlighted", true | where: "category", category -%}
  {%- else -%}
    {%- assign categorized_projects = site.paris | where: "category", category -%}
  {%- endif -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" | sort: "date" -%}
  <!-- Generate cards for each paris type -->
  <div class="list-style mx-auto">
    {%- for project in categorized_projects -%}
      {% include paris.liquid %}
    {%- endfor %}
  </div>
  {% endfor %}

{%- else -%}
<!-- Display paris without categories -->
  {%- if page.only_highlights -%}
  {%- assign sorted_projects = site.paris | where: "highlighted", true | sort: "importance" | sort: "date" -%}
  {%- else -%}
  {%- assign sorted_projects = site.paris | sort: "importance" | sort: "date" -%}
  {%- endif -%}
  <!-- Generate cards for each project -->
  <div class="list-style mx-auto">
    {%- for project in sorted_projects -%}
      {% include paris.liquid %}
    {%- endfor %}
  </div>
{%- endif -%}

</div>
