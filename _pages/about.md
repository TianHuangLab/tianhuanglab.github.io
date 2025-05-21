---
layout: about
title: 关于我
permalink: /
subtitle: 🌍 生活是一场旅行，旅行是另一种生活 🚶‍♀️
profile:
  align: right
  image: profile-tian.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>目前居住在法国南部，享受记录当下</p>

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3
---
嗨！我是奥利飞飞，一个热爱探索的旅游达人，现居法国南部的马赛。几年前，我们从巴黎搬到了这里，在地中海的阳光怀抱中开启了全新的生活篇章。目前，我在一家法国本地的互联网公司担任市场经理，虽然日常“搬砖”，但旅行始终是我的灵魂栖息地。我最享受与家人朋友一起背上行囊去探险，无论是徒步山间、在海边吹风，还是冬天滑雪，每一种体验都充满乐趣。十多年来，我走过三大洲，深度游历了亚欧非十几个国家，尤其对法国情有独钟，而这片土地还有太多美好值得细细丈量。

至于为什么选择法国？因为这里的人文与自然让我一次次为之惊叹，从巴黎浪漫的街巷到普罗旺斯的薰衣草田，从诺曼底壮丽的海岸到阿尔萨斯的童话村庄，从阿尔卑斯的雪峰到蔚蓝海岸的旖旎风光，再加上享誉世界的法国美食，几乎每个角落都值得细细品味！我希望通过分享我的旅行见闻和感受，为大家写出最实用的法国旅行指南，带你吃喝玩乐全攻略，帮你省时省力，让旅行像呼吸一样轻松惬意，一起玩转这个绝美的国度！

---

<!-- Banner 轮播开始 -->
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-8.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>  {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-1.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}</swiper-slide>
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
<!-- Banner 轮播结束 -->

---

<!-- 产品展示开始 -->
<div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
  {% assign sorted_projects = site.tours | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
<!-- 产品展示结束 -->

---

<!--
Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
-->
