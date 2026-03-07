---
layout: about
title: 关于我们
permalink: /
subtitle: 🌍 生活是一场旅行，旅行是另一种生活 🚶‍♀️
profile:
  align: right
  image: profile-tian.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3
---

嗨！我是奥利飞飞，一个热爱探索的旅游达人，目前生活在法国南部（马赛&尼斯）。

几年前，我们从巴黎搬到了这里，在地中海温暖的阳光与海风中开启了全新的生活篇章。对我来说，旅行是一种生活方式，我最享受与家人朋友一起背上行囊去探索世界：无论是山间徒步、海边漫步，还是冬天在雪山滑雪，每一种体验都充满自由与乐趣。十多年来，我走过三大洲，深度游历了亚欧非几十个国家。但走得越多，越发现自己对法国情有独钟，而南法的风土人情更是我最为着迷的一部分。

因此，我和我的伙伴们一起创立了 **「奥利旅行」**。我们是一支立足南法、服务覆盖整个法国，并辐射瑞士、意大利和西班牙等周边国家的地接团队，专注于提供高品质、个性化的法国深度游与定制旅行（**邮轮岸上观光、包车游、跟团游、城市接送、商务与会展安排以及独家路线定制等**），致力于让每一段旅程都轻松、安心且难忘！多年来，我们已逐步发展为普罗旺斯地区最为活跃且成熟的华人地接团队，拥有稳定的本地团队和丰富的南法资源。

至于为什么选择扎根法国？是因为这里的人文与自然让我一次次为之惊叹，从巴黎浪漫的街巷到普罗旺斯的薰衣草田，从诺曼底壮丽的海岸到阿尔萨斯的童话村庄，从阿尔卑斯的雪峰到蔚蓝海岸的旖旎风光，再加上享誉世界的法国美食，几乎每个角落都值得细细品味！我也希望通过分享自己的旅行见闻和经验，为大家写出最实用、最真实的法国旅行攻略：带你了解当地文化、吃遍地道美食、发现隐藏美景，让你的法国之旅不仅省时省力，而且更深入，也更难忘！

期待在法国🇫🇷与你相遇，一起玩转这个美丽的国度！ 


---

<div class="row mt-3">
    <div class="col-12"> 
        {% include video.liquid 
            path="https://media.aolitravel.com/aolitravel.mp4" 
            class="img-fluid w-100 rounded z-depth-1" 
            controls=true 
            autoplay=false 
        %}
    </div>
</div>


---

> “旅行的意义不在于发现新世界，而是拥有新的眼光。” —— 马塞尔·普鲁斯特（Marcel Proust）
> 
> 
> 十多年的旅途中，我逐渐明白：真正动人的风景，不止于风光本身，更在于它给予我们的感悟与灵感。
> 
> 在法国的土地上，每一座小镇、每一条巷子、每一段旅程，都承载着独特的故事。
> 
> 接下来，我为你精选了几条亲身体验、深度挖掘的路线，愿它们成为你旅途中的灵感起点。
> 

**点击下方，开启你的法兰西探索之旅！**

---

<!-- Banner 轮播开始 -->
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>
    <a href="https://aolitravel.com/tours/" target="_blank" style="display: block;">
      {% include figure.liquid loading="eager" path="assets/img/0tours/0travel product banner/product-banner-3.png" title="marseille-trip-aolitravel.com" class="img-fluid rounded z-depth-1" %}
    </a>
  </swiper-slide>
</swiper-container>
<!-- Banner 轮播结束 -->

<!-- 产品展示开始 -->
<div class="row row-cols-1 row-cols-md-3 g-4 mt-4">

  {% assign selected_slugs = "visit-south-france-top-7-days-tour,france-lavender-lac-saint-croix-one-day-tour,provence-avignon-arles-arts-culture-one-day-tour.md" | split: "," %}

  {% for slug in selected_slugs %}
    {% assign project = site.tours | where: "slug", slug | first %}
    {% if project %}
      {% include projects.liquid project=project %}
    {% endif %}
  {% endfor %}

</div>
<!-- 产品展示结束 -->


<!-- “探索更多路线”按钮 -->
<div class="d-flex justify-content-center mt-4">
  <a href="/tours" class="btn btn-lg text-white" style="background-color: #6f42c1; border-radius: 0.75rem;">
    探索更多路线
  </a>
</div>
<!-- 产品展示结束 -->


---

<div class="client-wall">

<h2 class="wall-title">
已经有来自世界各地的朋友，把他们的旅程托付给奥利旅行
</h2>

<p class="wall-subtitle">
1000+ 位游客 · 10+ 年本地经验 · 4.9 / 5 ⭐ 游客满意度
</p>

<div class="client-grid">

{% for client in site.data.reviews %}
<div class="client-item">

<img src="{{ client.avatar }}" alt="{{ client.name }}">

<div class="client-popup">
<div class="client-name">{{ client.name }}</div>
<div class="client-meta">{{ client.date }} · {{ client.route }}</div>

<div class="client-stars">
{% for i in (1..client.rating) %}★{% endfor %}
</div>

<div class="client-review">
{{ client.review }}
</div>
</div>

</div>
{% endfor %}

<!-- 更多头像 -->
<div class="client-item more-clients">

<div class="more-avatar">...</div>

<div class="client-popup">
更多游客故事仍在不断增加中，<br>
期待与你相遇共同书写我们的章节！
</div>

</div>

</div>
</div>

<style>

.client-wall{
max-width:1100px;
margin:50px auto;
text-align:center;
}

.wall-title{
font-size:30px;
font-weight:600;
margin-bottom:8px;
}

.wall-subtitle{
color:#777;
font-size:15px;
margin-bottom:25px;
}

.client-grid{
display:grid;
grid-template-rows:repeat(2, auto);
grid-auto-flow:column;
gap:14px;
overflow-x:auto;
padding:10px 0;
scroll-behavior:smooth;
}

.client-item{
position:relative;
width:64px;
height:64px;
border-radius:50%;
flex:0 0 auto;
cursor:pointer;
transition:transform .3s;
}

.client-item img{
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
box-shadow:0 6px 16px rgba(0,0,0,0.15);
}

.client-item:hover{
transform:scale(1.18);
z-index:10;
}

.more-avatar{
width:64px;
height:64px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:26px;
background:#f3f3f3;
color:#888;
font-weight:600;
}

.client-popup{
position:absolute;
bottom:120%;
left:50%;
transform:translateX(-50%);
width:240px;
background:rgba(255,255,255,0.95);
backdrop-filter:blur(8px);
border-radius:12px;
padding:14px;
box-shadow:0 15px 35px rgba(0,0,0,0.18);
opacity:0;
pointer-events:none;
transition:all .25s ease;
z-index:20;
text-align:left;
font-size:13px;
}

/* 暂时关闭 popup
.client-item:hover .client-popup{
opacity:1;
transform:translate(-50%,-8px);
}
*/

.client-name{
font-weight:600;
margin-bottom:4px;
}

.client-meta{
color:#777;
font-size:12px;
margin-bottom:4px;
}

.client-stars{
color:#f5a623;
margin-bottom:4px;
}

.client-review{
color:#555;
font-size:12px;
line-height:1.4;
}

.client-grid::-webkit-scrollbar{
display:none;
}

</style>

<script>

document.addEventListener("DOMContentLoaded", function() {

const grid = document.querySelector(".client-grid");

let isDown = false;
let startX;
let scrollLeft;

grid.addEventListener('mousedown', (e) => {
isDown = true;
startX = e.pageX - grid.offsetLeft;
scrollLeft = grid.scrollLeft;
});

grid.addEventListener('mouseleave', () => {
isDown = false;
});

grid.addEventListener('mouseup', () => {
isDown = false;
});

grid.addEventListener('mousemove', (e) => {

if(!isDown) return;

e.preventDefault();

const x = e.pageX - grid.offsetLeft;

const walk = (x - startX) * 2;

grid.scrollLeft = scrollLeft - walk;

});

let startTouchX = 0;
let scrollStart = 0;

grid.addEventListener('touchstart', (e) => {
startTouchX = e.touches[0].pageX;
scrollStart = grid.scrollLeft;
});

grid.addEventListener('touchmove', (e) => {
const x = e.touches[0].pageX;
const walk = (x - startTouchX) * 2;
grid.scrollLeft = scrollStart - walk;
});

});

</script>

---

> 在奥利旅行，每一条路线都是精心策划的欧洲探索体验，让你走进法国的浪漫街头，感受瑞士的纯净山河，品味意大利的艺术气息。而旅行的美好，不止于脚步触及的风景。我们将这些文化灵感延伸到生活中，打造了专属的旅行文创周边——原创设计的 T 恤、特色马克杯，以及即将推出的袜子、卫衣、包袋等好物。无论是穿在身上、摆在桌上，还是作为礼物送给朋友，都能让每一份旅行回忆在日常中延续。
>


---

<div class="store-banner" style="text-align: center; margin: 20px 0;">
  <a href="https://aolitravel.tpopsite.com/" target="_blank" style="display: inline-block;">
    {% include figure.liquid 
       loading="eager" 
       path="assets/img/0tours/0travel product banner/store-banner-1.png" 
       title="aolitravel.com-official-store" 
       class="img-fluid rounded z-depth-1" 
       alt="aolitravel.com-official-store"
    %}
  </a>
</div>

  
---

> 旅行的精彩不仅在目的地的风光，更在探索和发现的过程。为了让你的每一次旅程更有深度，我精心整理了最新的旅行资讯、目的地故事和实用攻略。在我们的 News & Blog 中，你可以了解我们的最新动态，以及我和家人朋友在法国、瑞士、意大利旅行时体验到的文化风情和感受！你可以从中获取独家旅行建议，还能发现那些不为人知的景点与体验，丰富你的旅行灵感。无论是规划下一次出行，还是在家回味旅行灵感，这里都是你的专属参考与灵感宝库！
>

---

<!--
Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
-->
