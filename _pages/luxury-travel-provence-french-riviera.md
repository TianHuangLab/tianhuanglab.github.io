{% raw %}---
layout: page
permalink: /luxury-travel-provence-french-riviera/
title: 普罗旺斯奢华旅行定制
description: 快来看看我为你推荐的精选路线
css_bundle: luxury
nav: false
nav_order: 5
map: true
---

<!-- 首屏视频区块 -->
<div class="hero-section" data-controller="videoHero">
  <video autoplay muted loop class="bg-video">
    <source src="{{ '/assets/videos/provence-hero.mp4' | relative_url }}" type="video/mp4">
  </video>
  <div class="overlay">
    <h1>{% include icon.html name="crown" %} 私享蔚蓝海岸</h1>
    <p class="subtitle">您的专属行程顾问已准备就绪</p>
    
    <!-- 主CTA按钮组 -->
    <div class="cta-group">
      <a href="#planner" class="btn-gold pulse-anim">
        获取我的定制方案 →
      </a>
      <a href="tel:+33-XXXXXXXX" class="btn-ghost">
        {% include icon.html name="phone" %} 紧急联系
      </a>
    </div>
  </div>
</div>

<!-- 信任徽章带 -->
<div class="trust-badges">
  {% for badge in site.data.trust_badges %}
    <div class="badge">
      <img src="{{ badge.icon | relative_url }}" alt="{{ badge.name }}" loading="lazy">
      <span>{{ badge.text }}</span>
    </div>
  {% endfor %}
</div>

<!-- 服务对比矩阵 -->
<section class="comparison-section">
  <h2>为什么选择我们</h2>
  <div class="comparison-table">
    <table>
      <thead>
        <tr>
          <th>服务维度</th>
          <th>普通旅行社</th>
          <th class="highlight">我们的承诺</th>
        </tr>
      </thead>
      <tbody>
        {% for item in site.data.service_comparison %}
        <tr>
          <td>{{ item.dimension }}</td>
          <td>{{ item.regular }}</td>
          <td class="highlight">{{ item.premium }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
  
  <!-- 视频嵌入 -->
  <div class="video-embed">
    {% include video.html 
       id="intro-video"
       poster="/assets/img/video-poster.jpg"
       mp4="/assets/videos/service-intro.mp4" 
    %}
  </div>
</section>

<!-- 动态行程生成器 -->
<section id="planner" class="planner-section">
  <h2>您的理想行程生成器</h2>
  
  <form class="planner-form" data-controller="planner">
    <div class="form-group">
      <label>主要兴趣：</label>
      <div class="checkbox-grid">
        {% for interest in site.data.interests %}
        <label class="checkbox-label">
          <input type="checkbox" name="interests" value="{{ interest.value }}">
          {{ interest.label }}
        </label>
        {% endfor %}
      </div>
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label>预算区间：</label>
        <select name="budget" class="select-dropdown">
          {% for option in site.data.budget_options %}
          <option value="{{ option.value }}">{{ option.label }}</option>
          {% endfor %}
        </select>
      </div>
      
      <div class="form-group">
        <label>出行人数：</label>
        <input type="range" name="guests" min="1" max="10" value="2" 
               data-action="input->planner#updateGuests">
        <output name="guests-output">2人</output>
      </div>
    </div>
    
    <div class="form-group">
      <label>特殊要求：</label>
      <textarea name="requests" placeholder="例如：需要儿童座椅/素食需求..."></textarea>
    </div>
    
    <button type="submit" class="btn-gold">
      生成我的专属方案
    </button>
  </form>
  
  <!-- 方案预览区 -->
  <div class="itinerary-preview" data-planner-target="output">
    <div class="placeholder">
      <p>填写您的需求后，将实时生成推荐行程</p>
    </div>
  </div>
</section>

<!-- 客户评价轮播 -->
<section class="testimonials">
  <h2>客户见证</h2>
  
  <div class="testimonial-carousel" data-controller="carousel">
    {% for testimonial in site.data.testimonials %}
    <div class="testimonial-card">
      <div class="avatar">
        <img src="{{ testimonial.avatar | relative_url }}" 
             alt="{{ testimonial.name }}" loading="lazy">
      </div>
      <blockquote>
        "{{ testimonial.quote }}"
      </blockquote>
      <div class="meta">
        <strong>{{ testimonial.name }}</strong>
        <span>{{ testimonial.trip }}</span>
      </div>
      {% if testimonial.chat_screenshot %}
      <a href="{{ testimonial.chat_screenshot }}" class="chat-proof">
        查看沟通记录
      </a>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<!-- 浮动咨询按钮 -->
<div class="floating-consult">
  <a href="#contact" class="btn-float">
    {% include icon.html name="whatsapp" %} 微信咨询
  </a>
</div>

<style>
  /* 核心CSS片段 (实际应放在独立CSS文件) */
  .hero-section {
    position: relative;
    height: 100vh;
    min-height: 600px;
  }
  .bg-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .btn-gold {
    background: linear-gradient(135deg, #D4AF37 0%, #F5D783 100%);
    border: none;
    color: #1A2A3A;
  }
  .planner-form {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
  }
  /* 响应式设计 */
  @media (max-width: 768px) {
    .comparison-table table {
      display: block;
      overflow-x: auto;
    }
  }
</style>

<script>
// 动态交互示例 (使用Stimulus.js)
document.addEventListener("DOMContentLoaded", function() {
  const plannerController = {
    updateGuests(event) {
      const output = this.element.querySelector('[name="guests-output"]');
      output.textContent = `${event.target.value}人`;
    }
  };
});
</script>{% endraw %}
