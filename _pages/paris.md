---
layout: page
title: 巴黎旅游攻略
nav_title: 巴黎
permalink: /paris/
description: 巴黎自由行攻略中心：景点、路线、交通、住宿、机场和巴黎周边怎么安排，从这里开始。
nav: true
nav_order: 0.4
horizontal: false

hub_groups:
  - id: planning
    title: 巴黎行程、交通与住宿
    description: 第一次去巴黎，先从路线、交通、住宿和机场这些真正影响行程的内容开始。
  - id: attractions
    title: 巴黎必去景点
    description: 埃菲尔铁塔、卢浮宫、巴黎圣母院、歌剧院等核心景点，门票、预约和实际参观建议都单独整理在这里。
  - id: daytrips
    title: 巴黎周边一日游
    description: 凡尔赛、迪士尼、枫丹白露和巴黎周边小镇，适合有更多时间，或者已经不是第一次来巴黎时慢慢加入。
  - id: lifestyle
    title: 巴黎住宿、美食与旅行专题
    description: 从酒店、中餐到航班和其他细分主题，需要更具体的信息可以继续从这里找。
---

<div class="paris-hub">

  <p class="paris-intro">
    我以前在巴黎生活、工作过多年。后来不管是帮家人朋友，还是帮客人安排行程，我都会先提醒一句：巴黎从来不是一个适合照着清单一路打卡的城市。因为它很多元，也有很多不同的玩法，值得你按你的想法和需求，去慢慢探索！
  </p>

   <p class="paris-intro">
   铁塔、卢浮宫、圣母院、塞纳河、蒙马特高地这些当然值得去。但真正决定你的巴黎行程精彩与否，往往还有很多看起来不起眼的细节：住在哪里、每天的行程怎么安排、哪些景点需要提前预约、机场、市区和郊区景点之间怎么衔接等。巴黎也是我们一直很熟悉、一直在做的目的地。市区游览、机场接送、凡尔赛、迪士尼，或从巴黎出发去周边小镇，都是我们的服务范围。无论你最后是否预订我们的服务，我都建议你先把大致路线安排明白，这会让整趟旅行轻松很多。
  </p>

  <p class="paris-intro">
    如果第一次来巴黎，我一般建议留 3-4 天；如果要去凡尔赛、迪士尼或周边小镇，更适合按 5-7 天来安排。下面这些攻略，是我在旅行分享时经常会被问到的话题，现在我整理成专题，供你参考！
  </p>

  <div class="paris-tag-cloud" aria-label="巴黎旅游攻略快速入口">
    <a href="#planning">第一次去巴黎</a>
    <a href="/paris/paris-4days-trip/">巴黎4天行程</a>
    <a href="/paris/paris-top-20/">巴黎必去景点</a>
    <a href="/paris/paris-public-transportation/">巴黎交通</a>
    <a href="/paris/paris-map-arr/">巴黎住宿</a>
    <a href="/paris/public-transport-paris-airports/">机场交通</a>
    <a href="#attractions">埃菲尔铁塔 / 卢浮宫</a>
    <a href="#daytrips">巴黎周边</a>
    <a href="/paris/visit-versailles/">凡尔赛</a>
    <a href="/paris/visit-disneyland-paris/">巴黎迪士尼</a>
  </div>

</div>

<div class="projects paris-projects">

{% for group in page.hub_groups %}

  {% assign group_projects = site.paris
    | where: "hub_group", group.id
    | where_exp: "project", "project.hub_visible != false"
    | sort: "hub_order" %}

  {% if group_projects.size > 0 %}

    <a id="{{ group.id }}" href="#{{ group.id }}">
      <h2 class="category">{{ group.title }}</h2>
    </a>

    {% if group.description %}
      <p class="paris-category-intro">{{ group.description }}</p>
    {% endif %}

    <div class="row row-cols-1 row-cols-md-3">
      {% for project in group_projects %}
        {% include paris.liquid %}
      {% endfor %}
    </div>

  {% endif %}

{% endfor %}

{% assign ungrouped_projects = site.paris
  | where_exp: "project", "project.hub_group == nil"
  | where_exp: "project", "project.hub_visible != false"
  | sort: "importance" %}

{% if ungrouped_projects.size > 0 %}

  <h2 class="category">更多巴黎攻略</h2>
  <p class="paris-category-intro">
    下面这些内容还没有归入上面的主要分类，但仍然可以继续作为巴黎旅行的补充参考。
  </p>

  <ul class="paris-link-list">
    {% for project in ungrouped_projects %}
      <li>
        <a href="{{ project.url | relative_url }}">
          <strong>{{ project.title }}</strong>
        </a>
        {% if project.description %}
          <span class="text-muted"> — {{ project.description }}</span>
        {% endif %}
      </li>
    {% endfor %}
  </ul>

{% endif %}

</div>

<div class="alert alert-info mt-4" role="alert">
  <strong>2026年更新：</strong>巴黎交通票制、圣母院重新开放后的参观方式，以及部分景点预约和门票信息近年都有变化。站内相关攻略会继续按实际开放和交通规则更新。
</div>

<style>
  .paris-intro {
    margin: 0 0 0.85rem;
    color: var(--global-text-color-light);
    font-size: 1rem;
    line-height: 1.75;
  }

  .paris-tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin: 1.1rem 0 2.4rem;
  }

  .paris-tag-cloud a {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(111, 66, 193, 0.45);
    border-radius: 999px;
    padding: 0.45rem 0.85rem;
    color: #6f42c1;
    background: rgba(111, 66, 193, 0.04);
    font-size: 0.92rem;
  }

  .paris-tag-cloud a:hover {
    text-decoration: none;
    background: rgba(111, 66, 193, 0.1);
  }

  .paris-category-intro {
    margin: -0.15rem 0 1.15rem;
    color: var(--global-text-color-light);
    line-height: 1.65;
  }

  .paris-projects .row {
    row-gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .paris-projects .card {
    height: 100%;
  }

  .paris-projects .card-img-top {
    height: 180px;
    object-fit: cover;
  }

  .paris-link-list {
    list-style: none;
    padding-left: 0;
    margin: 0 0 2.3rem;
  }

  .paris-link-list li {
    margin-bottom: 0.7rem;
    line-height: 1.55;
  }

  @media (max-width: 767.98px) {
    .paris-projects .card-img-top {
      height: 210px;
    }

    .paris-tag-cloud {
      gap: 0.55rem;
    }
  }
</style>
