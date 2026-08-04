---
layout: page
permalink: /custom-travel/
title: 定制行程
description: 轻松定制你的法国旅行计划，带你探索最地道的法国之旅，让旅程变得简单、纯粹、充满惊喜！
nav: true
nav_order: 7
---

<style>
  .custom-travel-v2-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1.5rem 0 0;
  }

  .custom-travel-v2-hero-actions {
    margin-bottom: 1.5rem;
  }

  .custom-travel-v2-actions .btn {
    align-items: center;
    border-radius: 0.75rem;
    display: inline-flex;
    font-size: 1.05rem;
    font-weight: 500;
    justify-content: center;
    line-height: 1.35;
    min-height: 3rem;
    padding: 0.65rem 1.25rem;
  }

  .custom-travel-v2-section {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    margin: 2.6rem 0 0;
    padding-top: 2.6rem;
  }

  .custom-travel-v2-section:first-of-type {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  .custom-travel-v2-lead {
    font-size: 1.05rem;
    line-height: 1.9;
  }

  .custom-travel-v2-note {
    background: rgba(111, 66, 193, 0.055);
    border-left: 4px solid #6f42c1;
    border-radius: 0.45rem;
    line-height: 1.8;
    margin: 1.3rem 0;
    padding: 1rem 1.15rem;
  }

  .custom-travel-v2-card {
    height: 100%;
  }

  .custom-travel-v2-card .card-body {
    line-height: 1.75;
  }

  .custom-travel-v2-grid {
    align-items: stretch;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .custom-travel-v2-process {
    align-items: stretch;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .custom-travel-v2-step {
    color: #6f42c1;
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    margin-bottom: 0.45rem;
  }

  .custom-travel-v2-checklist {
    columns: 2;
    line-height: 1.9;
    margin-bottom: 0;
    padding-left: 1.2rem;
  }

  .custom-travel-v2-form-wrap {
    border: 1px solid rgba(111, 66, 193, 0.16);
    border-radius: 0.9rem;
    box-shadow: 0 0.25rem 1.15rem rgba(0, 0, 0, 0.055);
    margin-top: 1.3rem;
    padding: 1rem;
  }

  .custom-travel-v2-route-result {
    align-items: center;
    display: flex;
    gap: 1.5rem;
  }

  .custom-travel-v2-route-main {
    flex: 1 1 auto;
    min-width: 0;
  }

  .custom-travel-v2-route-action {
    flex: 0 0 auto;
    text-align: left;
  }

  .custom-travel-v2-gallery {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 1.3rem;
  }

  .custom-travel-v2-gallery a {
    display: block;
    overflow: hidden;
  }

  .custom-travel-v2-gallery figure {
    height: 210px !important;
    margin: 0 !important;
    overflow: hidden !important;
    width: 100% !important;
  }

  .custom-travel-v2-gallery figure picture,
  .custom-travel-v2-gallery figure img {
    display: block;
    height: 100% !important;
    object-fit: cover;
    object-position: center center;
    width: 100% !important;
  }

  .custom-travel-v2-faq details {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 0.9rem 0;
  }

  .custom-travel-v2-faq summary {
    cursor: pointer;
    font-weight: 600;
  }

  .custom-travel-v2-faq p {
    margin: 0.65rem 0 0;
  }

  .custom-travel-v2-trust {
    align-items: start;
    display: grid;
    gap: 2.25rem;
    grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  }

  .custom-travel-v2-trust-copy {
    font-size: 1rem;
    line-height: 1.85;
  }

  .custom-travel-v2-trust-copy p:last-child {
    margin-bottom: 0;
  }

  .custom-travel-v2-trust-copy ul {
    margin: 1rem 0 0;
    padding-left: 1.25rem;
  }

  .custom-travel-v2-trust-copy li {
    margin-bottom: 0.65rem;
  }

  .custom-travel-v2-trust-photos {
    display: grid;
    gap: 0.65rem;
  }

  .custom-travel-v2-client-photo {
    border-radius: 0.9rem;
    margin: 0;
    overflow: hidden;
  }

  .custom-travel-v2-client-photo-main {
    border-radius: 0.9rem;
    display: block;
    height: auto;
    overflow: hidden;
    width: 100%;
  }

  .custom-travel-v2-client-photo-main img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  .custom-travel-v2-photo-dots {
    align-items: center;
    display: flex;
    gap: 0.55rem;
    justify-content: center;
    margin-top: 0.85rem;
  }

  .custom-travel-v2-photo-dot {
    background: rgba(111, 66, 193, 0.24);
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    height: 0.62rem;
    padding: 0;
    transition: all 0.2s ease;
    width: 0.62rem;
  }

  .custom-travel-v2-photo-dot.is-active {
    background: #6f42c1;
    width: 1.65rem;
  }

  .custom-travel-v2-photo-placeholder {
    align-items: center;
    background: rgba(111, 66, 193, 0.055);
    border: 1px dashed rgba(111, 66, 193, 0.45);
    border-radius: 0.9rem;
    color: #6f42c1;
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    height: 220px;
    justify-content: center;
    line-height: 1.7;
    padding: 1rem;
    text-align: center;
  }

  .custom-travel-v2-photo-caption {
    color: #6c757d;
    font-size: 0.9rem;
    line-height: 1.65;
    margin: 0.45rem 0 0;
  }

  @media (max-width: 768px) {
    .custom-travel-v2-actions .btn {
      width: 100%;
    }

    .custom-travel-v2-grid,
    .custom-travel-v2-process,
    .custom-travel-v2-gallery,
    .custom-travel-v2-trust {
      grid-template-columns: 1fr;
    }

    .custom-travel-v2-client-photo-main {
      height: auto;
    }

    .custom-travel-v2-checklist {
      columns: 1;
    }

    .custom-travel-v2-route-result {
      align-items: flex-start;
      flex-direction: column;
    }

    .custom-travel-v2-route-action,
    .custom-travel-v2-route-action .btn {
      width: 100%;
    }

    .custom-travel-v2-gallery figure {
      height: 220px !important;
    }

    .custom-travel-v2-client-photo figure,
    .custom-travel-v2-photo-placeholder {
      height: 230px !important;
    }
  }

  @media (min-width: 769px) and (max-width: 991px) {
    .custom-travel-v2-grid,
    .custom-travel-v2-process,
    .custom-travel-v2-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>

<div class="custom-travel-v2-section" markdown="1">

<p class="custom-travel-v2-lead">如果你正在计划巴黎、南法或法国其他地方，或者想把法国和瑞士、意大利、西班牙放进同一次旅程中，你都可以先把你的想法发给我们。你不需要一开始就准备好完整行程，只需要告诉我们人数、月份、天数、进出城市和特别想去的地方，我们就可以先帮你判断这趟旅行该怎么开始、如何合理规划。</p>

<div class="custom-travel-v2-note">
我们认为一个好的定制行程，从来不是把景点排得越多越好，而是让路线、住宿、用车和每天的出行节奏更适合你。该停久一点的地方，就该把时间留出来；不值得折腾的安排，我们也会提前告知帮你避开。
</div>

<div class="custom-travel-v2-actions custom-travel-v2-hero-actions">
  <a href="#travel-form" class="btn btn-lg text-white" style="background-color: #6f42c1;">填写行程需求</a>
  <a href="javascript:void(0);" onclick="customTravelV2OpenTidio()" class="btn btn-lg btn-outline-secondary">在线聊聊行程</a>
</div>

</div>

{% include figure.liquid loading="eager" path="assets/img/0tours/0template/9.png" title="aolitravel-custom-travel-french-riviera" class="img-fluid rounded z-depth-1" alt="法国与欧洲定制旅行，蔚蓝海岸与南法路线灵感" %}

<div class="custom-travel-v2-section" markdown="1">


<div class="card hoverable mb-4">
  <div class="card-body">
    <p class="text-muted mb-2">还没有完整计划，也可以开始咨询</p>
    <div class="custom-travel-v2-route-result">
      <div class="custom-travel-v2-route-main">
        <h3 class="card-title">我们会先看是否有适合你的线路</h3>
        <p class="card-text">很多朋友刚开始规划时，脑海里往往只有几个关键词：南法、巴黎、普罗旺斯、瑞士雪山、意大利湖区、巴塞罗那；也有人希望在兼顾多个目的地的同时，带着父母和孩子走得更轻松、更舒适。真正需要先了解的，其实是你的假期天数、计划抵达和离开的城市、同行人数以及预算。了解这些信息后，我们才能帮你判断你的时间和预算是否足以支撑理想的旅行方式，并根据实际情况为你规划一条既丰富精彩、又从容舒适的路线。</p>
        <p class="card-text"><small class="text-muted">如果已有精选路线接近你的需求，我们会优先推荐；如果你的行程更特别，再进一步定制。</small></p>
      </div>
      <div class="custom-travel-v2-route-action">
        <a href="#travel-form" class="btn btn-lg text-white" style="background-color: #6f42c1; border-radius: 0.75rem;">提交需求</a>
      </div>
    </div>
  </div>
</div>

</div>

<div class="custom-travel-v2-section" markdown="1">

## 哪些情况适合提交定制需求？

<div class="custom-travel-v2-grid">
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <h3 class="card-title">路线还不确定</h3>
      <p class="card-text">只知道想去法国、南法或欧洲几国，需要先判断天数和方向。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <h3 class="card-title">同行人需要照顾</h3>
      <p class="card-text">带父母、孩子或朋友同行，希望每天轻松一点，不想频繁换交通方式。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <h3 class="card-title">想做跨国长线</h3>
      <p class="card-text">希望把法国和瑞士、意大利、西班牙合理衔接，不想一路赶路。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <h3 class="card-title">不想自己开车</h3>
      <p class="card-text">希望有人安排用车、接送、司导和每日路线，把复杂的衔接处理好。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <h3 class="card-title">攻略看了很多</h3>
      <p class="card-text">信息很多，但不确定哪些适合自己，也不知道每天会不会太满。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <h3 class="card-title">想在现有路线基础上调整</h3>
      <p class="card-text">已经看到接近的精选路线，但日期、进出城市、人数或预算不同。</p>
    </div>
  </div>
</div>

</div>

<div class="custom-travel-v2-section" markdown="1">

## 提交前，准备这些信息就够了

<ul class="custom-travel-v2-checklist">
  <li>出行人数</li>
  <li>大概出行月份或日期</li>
  <li>预计旅行天数</li>
  <li>计划从哪里抵达、从哪里离开</li>
  <li>想去的国家、城市或景点</li>
  <li>是否带老人、孩子或较多行李</li>
  <li>偏好包车、小团、拼车还是定制</li>
  <li>大概预算范围</li>
  <li>如果是商务团，请直接告知我们需求</li>
  <li>微信、WhatsApp 或邮箱联系方式</li>
</ul>

</div>

<div class="custom-travel-v2-section" markdown="1">

## 先从几张法国旅行画面开始

<p class="custom-travel-v2-lead">有时候，路线不是从表格开始的，而是从某一个想去的画面开始：南法的海岸、普罗旺斯的小镇、巴黎的街头，或者一段不用自己开车的欧洲长线。你可以先看方向，具体怎么走，我们再一起判断。</p>

<div class="custom-travel-v2-gallery">
  <a href="/tours/">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/1.png" title="france-custom-travel-inspiration-1" class="img-fluid rounded z-depth-1" alt="法国定制旅行灵感" %}
  </a>
  <a href="/tours/">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/2.png" title="france-custom-travel-inspiration-2" class="img-fluid rounded z-depth-1" alt="南法精选路线灵感" %}
  </a>
  <a href="/tours/">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/3.png" title="france-custom-travel-inspiration-3" class="img-fluid rounded z-depth-1" alt="法国欧洲旅行路线灵感" %}
  </a>
  <a href="/tours/">
    {% include figure.liquid loading="eager" path="assets/img/61france-10days-tour/france-10days-tour-0.webp" title="france-custom-travel-inspiration-paris" class="img-fluid rounded z-depth-1" alt="巴黎卢浮宫与法国定制旅行灵感" %}
  </a>
  <a href="/tours/">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/5.png" title="france-custom-travel-inspiration-5" class="img-fluid rounded z-depth-1" alt="法国定制小团路线灵感" %}
  </a>
  <a href="/tours/">
    {% include figure.liquid loading="eager" path="assets/img/0tours/0template/6.png" title="france-custom-travel-inspiration-6" class="img-fluid rounded z-depth-1" alt="法国深度旅行定制灵感" %}
  </a>
</div>

</div>

<div class="custom-travel-v2-section" markdown="1">

## 提交需求后，我们会怎样安排？

<div class="custom-travel-v2-process">
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <span class="custom-travel-v2-step">01</span>
      <h3 class="card-title">判断路线</h3>
      <p class="card-text">先看天数、进出城市、同行人和想去的地方，判断这趟旅行是否适合这样走。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <span class="custom-travel-v2-step">02</span>
      <h3 class="card-title">匹配方案</h3>
      <p class="card-text">如果已有精选路线接近需求，会优先推荐；如果不适合，再做定制调整。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <span class="custom-travel-v2-step">03</span>
      <h3 class="card-title">细化报价</h3>
      <p class="card-text">根据人数、日期、车型、住宿节奏、司导服务、门票和接送方式整理方案。</p>
    </div>
  </div>
  <div class="card hoverable custom-travel-v2-card">
    <div class="card-body">
      <span class="custom-travel-v2-step">04</span>
      <h3 class="card-title">确认出行</h3>
      <p class="card-text">确认后继续核对航班、集合时间、每日路线和重要细节，让出发前更安心。</p>
    </div>
  </div>
</div>

</div>

<div class="custom-travel-v2-section" id="travel-form" markdown="1">

## 填写你的行程需求

<p class="custom-travel-v2-lead">信息越具体，我们越容易判断路线是否适合；如果暂时不确定，也可以先填写大概想法。</p>

<div class="custom-travel-v2-form-wrap">
  <iframe data-tally-src="https://tally.so/embed/3xllLG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="946" frameborder="0" marginheight="0" marginwidth="0" title="填写你的旅行需求"></iframe>
</div>

<script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>

</div>

<div class="custom-travel-v2-section" markdown="1">

## 为什么选择我们？

<div class="custom-travel-v2-trust">
  <div class="custom-travel-v2-trust-copy" markdown="1">

选择我们的定制旅行，真正需要的不是一张排满景点的清单，而是有人提前按你的需求提前安排，然后能落地顺利完成行程。

- **为你设计最合适的行程：** 航班怎么进出、每天车程多长、住宿住在哪一带、独家体验有没有等等，都是我们会着重考虑的因素。
- **长期接待中文客人：** 我们熟悉来自全球各地讲中文客人的需求，知道大家在意的不只是景点行程，也包括沟通、省心和安全感。
- **常驻法国南部，熟悉法国与欧洲长线：** 普罗旺斯、蔚蓝海岸、巴黎，以及法国连接瑞士、意大利、西班牙的路线，都可以放心交给我们。
- **一站式安排好你的行程：** 从行程、住宿到重点参观项目，以及路上的突发状况，我们全程把控，你只需要从容地享受旅行。

你选择的不是一辆车，而是一种更省心的旅行方式～期待与你在法国🇫🇷相见！

  </div>

  <div class="custom-travel-v2-trust-photos">
    <div class="custom-travel-v2-client-photo-main">
      <img
        id="customTravelV2TrustPhoto"
        src="/assets/img/0custom-travel/custom-travel-real-guests-roussillon.webp"
        alt="奥利旅行南法定制旅行与客人在普罗旺斯红土城合影"
        loading="lazy"
      >
    </div>
    <div class="custom-travel-v2-photo-dots" aria-label="切换真实旅行照片">
      <button type="button" class="custom-travel-v2-photo-dot is-active" aria-label="查看客户合照" onclick="customTravelV2SetTrustPhoto(0)"></button>
      <button type="button" class="custom-travel-v2-photo-dot" aria-label="查看马赛包车照片" onclick="customTravelV2SetTrustPhoto(1)"></button>
      <button type="button" class="custom-travel-v2-photo-dot" aria-label="查看南法小镇照片" onclick="customTravelV2SetTrustPhoto(2)"></button>
      <button type="button" class="custom-travel-v2-photo-dot" aria-label="查看普罗旺斯薰衣草包车照片" onclick="customTravelV2SetTrustPhoto(3)"></button>
    </div>
    <p class="custom-travel-v2-photo-caption">真实旅途里的片刻：客户合照已征得本人同意展示，感谢每一次信任与同行。</p>
  </div>
</div>

<div class="custom-travel-v2-actions">
  <a href="javascript:void(0);" onclick="customTravelV2OpenTidio()" class="btn btn-lg text-white" style="background-color: #6f42c1;">在线聊聊行程</a>
  <a href="/tours/" class="btn btn-lg btn-outline-secondary">查看精选路线</a>
</div>

</div>

<div class="custom-travel-v2-section custom-travel-v2-faq" markdown="1">

## 常见问题

<details>
  <summary>还没有完整行程，可以提交定制需求吗？</summary>
  <p>可以。只要先提供大概月份、人数、天数、进出城市和想去的地方，我们就可以先帮你判断路线方向。很多定制行程都是从一个初步想法开始的。</p>
</details>

<details>
  <summary>定制法国旅行时，最重要的信息是什么？</summary>
  <p>最重要的是人数、日期、天数、进出城市、想去的目的地和预算范围。如果带老人、孩子，或者行李较多，也建议提前说明，这会影响每日节奏、住宿位置和用车安排。</p>
</details>

<details>
  <summary>提交需求后多久会回复？</summary>
  <p>我们会尽量尽快回复。旺季咨询较多时，请尽量把日期、人数和进出城市写清楚，这样我们可以更快判断路线是否适合，并给出下一步建议。</p>
</details>

<details>
  <summary>可以只咨询包车或某几天的行程吗？</summary>
  <p>可以。你可以只咨询一日游、几天包车、机场或火车站接送，也可以咨询完整假期安排。我们会根据你的需求判断适合包车、小团、拼车，还是完整定制。</p>
</details>

<details>
  <summary>法国可以和瑞士、意大利、西班牙一起定制吗？</summary>
  <p>可以。常见做法包括法国瑞士、法意瑞、法国意大利、法国西班牙等路线。跨国行程需要特别注意进出机场、车程、住宿节奏和边境段衔接，建议尽早规划。</p>
</details>

<details>
  <summary>如果已经有自己的行程，可以帮忙优化吗？</summary>
  <p>可以。你可以把现有行程发给我们，我们会先看每天是否太赶、城市之间是否顺路、住宿位置是否方便，以及是否有更适合同行人的调整方式。</p>
</details>

<details>
  <summary>你们会优先推荐现有精选路线，还是完全定制？</summary>
  <p>如果已有精选路线接近你的需求，我们会优先建议参考现有路线，再根据航班、人数、预算和兴趣调整。只有当现有路线不适合时，才更建议做完整定制。</p>
</details>

<details>
  <summary>带父母或孩子去法国，定制行程有什么不同？</summary>
  <p>带父母或孩子出行时，不建议每天安排太满。我们会更重视连住、休息时间、上下车便利、车程长度和景点取舍，让大家有体力真正享受旅行。</p>
</details>

<details>
  <summary>法国南部包车和自由行相比，适合哪些客人？</summary>
  <p>如果同行人数较多、带老人孩子、行李较多，或想串联普罗旺斯小镇、马赛、尼斯、埃兹、摩纳哥等地，包车通常会更省心。它的价值不只是交通，而是减少衔接成本和临时判断。</p>
</details>

<details>
  <summary>报价通常包含哪些内容？</summary>
  <p>具体以正式方案和确认单为准。常见内容包括路线规划、行程组织、用车安排、司导服务、接送服务，以及部分核心门票或预约建议。住宿、餐食、门票是否包含，会在报价时清楚说明。</p>
</details>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "还没有完整行程，可以提交定制需求吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "可以。只要先提供大概月份、人数、天数、进出城市和想去的地方，奥利旅行就可以先帮助判断路线方向。很多定制行程都是从一个初步想法开始的。"
      }
    },
    {
      "@type": "Question",
      "name": "定制法国旅行时，最重要的信息是什么？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最重要的是人数、日期、天数、进出城市、想去的目的地和预算范围。如果带老人、孩子，或者行李较多，也建议提前说明，这会影响每日节奏、住宿位置和用车安排。"
      }
    },
    {
      "@type": "Question",
      "name": "提交需求后多久会回复？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "奥利旅行会尽量尽快回复。旺季咨询较多时，建议客人尽量把日期、人数和进出城市写清楚，这样可以更快判断路线是否适合，并给出下一步建议。"
      }
    },
    {
      "@type": "Question",
      "name": "可以只咨询包车或某几天的行程吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "可以。客人可以只咨询一日游、几天包车、机场或火车站接送，也可以咨询完整假期安排。奥利旅行会根据需求判断适合包车、小团、拼车，还是完整定制。"
      }
    },
    {
      "@type": "Question",
      "name": "法国可以和瑞士、意大利、西班牙一起定制吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "可以。常见做法包括法国瑞士、法意瑞、法国意大利、法国西班牙等路线。跨国行程需要特别注意进出机场、车程、住宿节奏和边境段衔接，建议尽早规划。"
      }
    },
    {
      "@type": "Question",
      "name": "如果已经有自己的行程，可以帮忙优化吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "可以。客人可以把现有行程发给奥利旅行，奥利旅行会先看每天是否太赶、城市之间是否顺路、住宿位置是否方便，以及是否有更适合同行人的调整方式。"
      }
    },
    {
      "@type": "Question",
      "name": "你们会优先推荐现有精选路线，还是完全定制？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "如果已有精选路线接近客人的需求，奥利旅行会优先建议参考现有路线，再根据航班、人数、预算和兴趣调整。只有当现有路线不适合时，才更建议做完整定制。"
      }
    },
    {
      "@type": "Question",
      "name": "带父母或孩子去法国，定制行程有什么不同？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "带父母或孩子出行时，不建议每天安排太满。奥利旅行会更重视连住、休息时间、上下车便利、车程长度和景点取舍，让同行人有体力真正享受旅行。"
      }
    },
    {
      "@type": "Question",
      "name": "法国南部包车和自由行相比，适合哪些客人？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "如果同行人数较多、带老人孩子、行李较多，或想串联普罗旺斯小镇、马赛、尼斯、埃兹、摩纳哥等地，包车通常会更省心。它的价值不只是交通，而是减少你们在交通上的衔接成本和旅途中可能发生的意外情况，让你们可以更专注于旅行本身。"
      }
    },
    {
      "@type": "Question",
      "name": "报价通常包含哪些内容？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "具体以正式方案和确认单为准。常见内容包括路线规划、行程组织、用车安排、司导服务、接送服务，以及部分核心门票或预约建议。住宿、餐食、门票是否包含，会在报价时清楚说明。"
      }
    }
  ]
}
</script>

<script>
  const customTravelV2TrustPhotos = [
    {
      src: "/assets/img/0custom-travel/custom-travel-real-guests-roussillon.webp",
      alt: "奥利旅行南法定制旅行与客人在普罗旺斯红土城合影"
    },
    {
      src: "/assets/img/0custom-travel/custom-travel-private-van-marseille.webp",
      alt: "奥利旅行南法包车服务，商务车停靠在马赛守护圣母大教堂附近"
    },
    {
      src: "/assets/img/0custom-travel/custom-travel-local-guide-gordes.webp",
      alt: "奥利旅行南法定制旅行，客人在石头城 Gordes 俯瞰普罗旺斯小镇"
    },
    {
      src: "/assets/img/0custom-travel/custom-travel-van-lavender-provence.webp",
      alt: "奥利旅行普罗旺斯薰衣草季包车旅行场景"
    }
  ];

  function customTravelV2SetTrustPhoto(index) {
    const photo = customTravelV2TrustPhotos[index];
    const photoEl = document.getElementById("customTravelV2TrustPhoto");
    const dots = document.querySelectorAll(".custom-travel-v2-photo-dot");

    if (!photo || !photoEl) return;

    photoEl.src = photo.src;
    photoEl.alt = photo.alt;

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  }

  function customTravelV2Track(eventName, params) {
    if (window.gtag) {
      window.gtag("event", eventName, params || {});
    }
  }

  function customTravelV2OpenTidio() {
    customTravelV2Track("contact_click", {
      channel: "tidio",
      location: "custom_travel_v2_draft"
    });

    if (window.tidioChatApi && typeof window.tidioChatApi.open === "function") {
      window.tidioChatApi.open();
    }
  }
</script>
