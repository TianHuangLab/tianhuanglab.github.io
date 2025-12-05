---
layout: default
permalink: /itinerary.html
---

<link rel="stylesheet" href="/assets/css/itinerary.css">

{% assign clientID = page.client | default: '' %}
{% assign itinerary = site.data.itineraries[clientID] %}

{% if itinerary == nil %}
<script>window.location.href="/";</script>
{% endif %}

<div id="password-screen">
  <div class="pw-box card">
    <h2>请输入访问密码</h2>
    <input type="password" id="pw-input" placeholder="请输入密码">
    <button onclick="checkPassword()">进入行程</button>
    <p id="pw-error" class="error"></p>
  </div>
</div>

<div id="content-wrap" style="display:none">
  <div class="container itinerary-page">

    {% include itinerary_section.liquid data=itinerary %}

  </div>
</div>

<script src="/assets/js/itinerary.js"></script>
