---
layout: default
title: South of France DMC | Aoli Travel
permalink: /en/south-france-dmc/
lang: en
description: Local DMC services in Nice, Cannes, Monaco, Marseille and Avignon for agencies, event planners, corporate groups and private clients.
---

<style>
  :root {
    --dmc-navy: #10243f;
    --dmc-navy-soft: #183456;
    --dmc-sand: #f7f2ea;
    --dmc-ivory: #fffdf9;
    --dmc-gold: #c18f3b;
    --dmc-gold-soft: #ead7b3;
    --dmc-ink: #1d2733;
    --dmc-muted: #607086;
    --dmc-border: rgba(16, 36, 63, 0.12);
    --dmc-shadow: 0 20px 60px rgba(16, 36, 63, 0.12);
    --dmc-radius-lg: 28px;
    --dmc-radius-md: 18px;
    --dmc-radius-sm: 12px;
    --dmc-max: 1200px;
  }

  .dmc-page,
  .dmc-page * {
    box-sizing: border-box;
  }

  .dmc-page {
    color: var(--dmc-ink);
    background:
      radial-gradient(circle at top left, rgba(193, 143, 59, 0.12), transparent 28%),
      linear-gradient(180deg, #fffaf3 0%, #ffffff 32%, #fbfbfb 100%);
    margin: 0;
  }

  .dmc-container {
    width: min(var(--dmc-max), calc(100% - 32px));
    margin: 0 auto;
  }

  .dmc-page h1,
  .dmc-page h2,
  .dmc-page h3 {
    font-family: Georgia, "Times New Roman", serif;
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0 0 16px;
    color: var(--dmc-navy);
  }

  .dmc-page h1 {
    font-size: clamp(2.8rem, 6vw, 5.25rem);
  }

  .dmc-page h2 {
    font-size: clamp(2rem, 4vw, 3.2rem);
  }

  .dmc-page h3 {
    font-size: clamp(1.2rem, 2vw, 1.55rem);
  }

  .dmc-page p,
  .dmc-page li,
  .dmc-page a,
  .dmc-page label,
  .dmc-page input,
  .dmc-page textarea,
  .dmc-page select {
    font-family: "Avenir Next", Avenir, "Segoe UI", sans-serif;
    line-height: 1.72;
    font-size: 1rem;
  }

  .dmc-page p {
    margin: 0 0 16px;
    color: var(--dmc-ink);
  }

  .dmc-page a {
    color: inherit;
    text-decoration: none;
  }

  .dmc-page img {
    display: block;
    width: 100%;
    height: auto;
  }

  .dmc-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--dmc-gold);
    font-size: 0.86rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: 18px;
  }

  .dmc-eyebrow::before {
    content: "";
    width: 36px;
    height: 1px;
    background: currentColor;
  }

  .dmc-hero {
    padding: 72px 0 36px;
  }

  .dmc-hero-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
    gap: 36px;
    align-items: stretch;
  }

  .dmc-hero-copy {
    padding: 28px 0;
  }

  .dmc-lead {
    font-size: 1.12rem;
    color: var(--dmc-muted);
    max-width: 62ch;
  }

  .dmc-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin: 28px 0 24px;
  }

  .dmc-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 22px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .dmc-button:hover,
  .dmc-button:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(16, 36, 63, 0.12);
  }

  .dmc-button-primary {
    background: linear-gradient(135deg, var(--dmc-navy) 0%, var(--dmc-navy-soft) 100%);
    color: #fff;
  }

  .dmc-button-secondary {
    background: rgba(255, 255, 255, 0.78);
    color: var(--dmc-navy);
    border-color: var(--dmc-border);
    backdrop-filter: blur(14px);
  }

  .dmc-trust-row,
  .dmc-chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .dmc-chip,
  .dmc-trust-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: 999px;
    border: 1px solid var(--dmc-border);
    background: rgba(255, 255, 255, 0.8);
    padding: 10px 14px;
    color: var(--dmc-navy);
  }

  .dmc-chip::before,
  .dmc-trust-item::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--dmc-gold);
  }

  .dmc-hero-panel {
    background: linear-gradient(180deg, rgba(16, 36, 63, 0.96) 0%, rgba(24, 52, 86, 0.94) 100%);
    color: #fff;
    border-radius: var(--dmc-radius-lg);
    padding: 28px;
    box-shadow: var(--dmc-shadow);
    position: relative;
    overflow: hidden;
    min-height: 100%;
  }

  .dmc-hero-panel::after {
    content: "";
    position: absolute;
    inset: auto -50px -80px auto;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(193, 143, 59, 0.32) 0%, transparent 68%);
  }

  .dmc-hero-visual {
    border-radius: 22px;
    min-height: 240px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)),
      linear-gradient(135deg, #244d78, #122844);
    border: 1px solid rgba(255,255,255,0.12);
    display: grid;
    place-items: center;
    text-align: center;
    padding: 24px;
    margin-bottom: 22px;
  }

  .dmc-hero-visual span {
    color: rgba(255,255,255,0.82);
    font-size: 0.98rem;
    max-width: 24ch;
  }

  .dmc-panel-title,
  .dmc-panel-label {
    color: #fff;
  }

  .dmc-panel-label {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.8rem;
    opacity: 0.7;
    margin-bottom: 10px;
  }

  .dmc-panel-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .dmc-panel-list li {
    padding: 12px 0;
    border-top: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.88);
  }

  .dmc-subnav {
    position: sticky;
    top: 0;
    z-index: 20;
    border-top: 1px solid var(--dmc-border);
    border-bottom: 1px solid var(--dmc-border);
    background: rgba(255, 253, 249, 0.84);
    backdrop-filter: blur(14px);
  }

  .dmc-subnav-inner {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding: 12px 0;
    scrollbar-width: none;
  }

  .dmc-subnav-inner::-webkit-scrollbar {
    display: none;
  }

  .dmc-subnav a {
    white-space: nowrap;
    color: var(--dmc-muted);
    padding: 8px 14px;
    border-radius: 999px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .dmc-subnav a.is-active,
  .dmc-subnav a:hover,
  .dmc-subnav a:focus-visible {
    background: rgba(16, 36, 63, 0.08);
    color: var(--dmc-navy);
  }

  .dmc-section {
    padding: 76px 0;
  }

  .dmc-section-alt {
    background: linear-gradient(180deg, rgba(247, 242, 234, 0.75), rgba(255,255,255,0.96));
    border-top: 1px solid rgba(16, 36, 63, 0.06);
    border-bottom: 1px solid rgba(16, 36, 63, 0.06);
  }

  .dmc-section-head {
    display: grid;
    gap: 10px;
    margin-bottom: 34px;
    max-width: 72ch;
  }

  .dmc-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .dmc-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  .dmc-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .dmc-card {
    border: 1px solid var(--dmc-border);
    border-radius: var(--dmc-radius-md);
    background: rgba(255,255,255,0.82);
    box-shadow: 0 8px 30px rgba(16, 36, 63, 0.06);
    padding: 24px;
  }

  .dmc-card h3 {
    margin-bottom: 10px;
  }

  .dmc-card p:last-child {
    margin-bottom: 0;
  }

  .dmc-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: inline-grid;
    place-items: center;
    background: linear-gradient(135deg, rgba(193, 143, 59, 0.18), rgba(16, 36, 63, 0.08));
    color: var(--dmc-navy);
    font-weight: 800;
    margin-bottom: 16px;
  }

  .dmc-bullets,
  .dmc-checklist {
    margin: 0;
    padding-left: 18px;
  }

  .dmc-checklist li + li,
  .dmc-bullets li + li {
    margin-top: 8px;
  }

  .dmc-badge-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .dmc-badge {
    border-radius: 999px;
    padding: 10px 14px;
    background: rgba(16, 36, 63, 0.05);
    color: var(--dmc-navy);
    border: 1px solid rgba(16, 36, 63, 0.08);
    font-weight: 600;
  }

  .dmc-destination-card {
    overflow: hidden;
    padding: 0;
  }

  .dmc-image-placeholder {
    min-height: 180px;
    background:
      linear-gradient(135deg, rgba(16,36,63,0.82), rgba(40,88,135,0.68)),
      linear-gradient(180deg, rgba(193,143,59,0.22), transparent);
    display: grid;
    place-items: center;
    color: rgba(255,255,255,0.88);
    padding: 24px;
    text-align: center;
  }

  .dmc-destination-body {
    padding: 24px;
  }

  .dmc-program-row {
    display: grid;
    grid-template-columns: 160px minmax(0, 1fr);
    gap: 20px;
    align-items: start;
    padding: 22px 0;
    border-top: 1px solid var(--dmc-border);
  }

  .dmc-program-row:first-child {
    border-top: none;
    padding-top: 0;
  }

  .dmc-program-label {
    color: var(--dmc-gold);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.84rem;
  }

  .dmc-process {
    counter-reset: dmc-step;
  }

  .dmc-process-item {
    position: relative;
    padding-left: 78px;
  }

  .dmc-process-item::before {
    counter-increment: dmc-step;
    content: counter(dmc-step);
    position: absolute;
    left: 0;
    top: 4px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--dmc-navy), var(--dmc-navy-soft));
    color: #fff;
    font-weight: 800;
    box-shadow: 0 14px 28px rgba(16, 36, 63, 0.18);
  }

  .dmc-proof {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .dmc-proof strong {
    display: block;
    color: var(--dmc-navy);
    font-size: 1.4rem;
    font-family: Georgia, "Times New Roman", serif;
    margin-bottom: 6px;
  }

  .dmc-faq {
    display: grid;
    gap: 14px;
  }

  .dmc-faq-item {
    border: 1px solid var(--dmc-border);
    border-radius: var(--dmc-radius-sm);
    background: rgba(255,255,255,0.88);
    overflow: hidden;
  }

  .dmc-faq-toggle {
    width: 100%;
    border: none;
    background: transparent;
    text-align: left;
    padding: 20px 22px;
    color: var(--dmc-navy);
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
  }

  .dmc-faq-toggle span:last-child {
    font-size: 1.2rem;
    line-height: 1;
    color: var(--dmc-gold);
  }

  .dmc-faq-panel {
    display: none;
    padding: 0 22px 22px;
    color: var(--dmc-muted);
  }

  .dmc-faq-item.is-open .dmc-faq-panel {
    display: block;
  }

  .dmc-contact {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #10243f 0%, #1d3f67 100%);
    color: #fff;
  }

  .dmc-contact::before {
    content: "";
    position: absolute;
    inset: auto auto -60px -60px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(193,143,59,0.3), transparent 68%);
  }

  .dmc-contact .dmc-section-head h2,
  .dmc-contact .dmc-section-head p,
  .dmc-contact h3,
  .dmc-contact p,
  .dmc-contact label {
    color: #fff;
  }

  .dmc-contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(320px, 1.08fr);
    gap: 28px;
    align-items: start;
  }

  .dmc-contact-card,
  .dmc-form-shell {
    position: relative;
    z-index: 1;
    border-radius: var(--dmc-radius-md);
    border: 1px solid rgba(255,255,255,0.14);
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    padding: 26px;
  }

  .dmc-contact-list {
    list-style: none;
    padding: 0;
    margin: 18px 0 0;
  }

  .dmc-contact-list li + li {
    margin-top: 10px;
  }

  .dmc-form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .dmc-field {
    display: grid;
    gap: 8px;
  }

  .dmc-field-full {
    grid-column: 1 / -1;
  }

  .dmc-page input,
  .dmc-page select,
  .dmc-page textarea {
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.96);
    color: var(--dmc-ink);
    padding: 14px 16px;
    outline: none;
  }

  .dmc-page input:focus,
  .dmc-page select:focus,
  .dmc-page textarea:focus {
    border-color: var(--dmc-gold);
    box-shadow: 0 0 0 4px rgba(193, 143, 59, 0.18);
  }

  .dmc-form-note {
    color: rgba(255,255,255,0.78);
    font-size: 0.94rem;
    margin-top: 14px;
  }

  .dmc-form-status {
    margin-top: 14px;
    font-weight: 600;
  }

  .dmc-reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .dmc-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 980px) {
    .dmc-hero-wrap,
    .dmc-contact-grid,
    .dmc-grid-3,
    .dmc-grid-4,
    .dmc-grid-2 {
      grid-template-columns: 1fr;
    }

    .dmc-program-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .dmc-proof {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .dmc-hero {
      padding-top: 44px;
    }

    .dmc-section {
      padding: 58px 0;
    }

    .dmc-form-grid {
      grid-template-columns: 1fr;
    }

    .dmc-process-item {
      padding-left: 66px;
    }

    .dmc-process-item::before {
      width: 46px;
      height: 46px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dmc-reveal,
    .dmc-button,
    .dmc-subnav a {
      transition: none;
    }

    html:focus-within {
      scroll-behavior: auto;
    }
  }
</style>

<div class="dmc-page" data-dmc-page>
  <section class="dmc-hero">
    <div class="dmc-container dmc-hero-wrap">
      <div class="dmc-hero-copy dmc-reveal">
        <div class="dmc-eyebrow">South of France DMC Services</div>
        <h1>Your local DMC partner in Nice, Cannes, Monaco, Marseille and Avignon</h1>
        <p class="dmc-lead">
          Aoli Travel supports agencies, event planners, corporate groups and private clients with ground handling,
          private transport, bespoke itineraries and on-the-ground coordination across the South of France.
        </p>
        <p class="dmc-lead">
          From French Riviera programs to Provence extensions, from executive transfers to multi-day hosted journeys,
          we help make each project easier to plan, smoother to operate and stronger in client experience.
        </p>

        <div class="dmc-hero-actions">
          <a class="dmc-button dmc-button-primary" href="#contact">Request a Proposal</a>
          <a class="dmc-button dmc-button-secondary" href="#services">Explore Services</a>
        </div>

        <div class="dmc-trust-row" aria-label="Key strengths">
          <span class="dmc-trust-item">Local regional knowledge</span>
          <span class="dmc-trust-item">Private transport coordination</span>
          <span class="dmc-trust-item">Bespoke B2B support</span>
        </div>
      </div>

      <aside class="dmc-hero-panel dmc-reveal" aria-label="Overview panel">
        <div class="dmc-hero-visual" role="img" aria-label="Placeholder for South of France destination image">
          <span>Hero image placeholder for Riviera and Provence destination photography</span>
        </div>

        <div class="dmc-panel-label">What this page is built for</div>
        <h3 class="dmc-panel-title">A practical South of France operating partner for English-speaking B2B clients</h3>

        <ul class="dmc-panel-list">
          <li>Nice, Cannes, Monaco, Marseille and Avignon coverage</li>
          <li>Agencies, corporate groups, incentive planners and VIP requests</li>
          <li>Transport logistics, itinerary structure and destination support</li>
          <li>Suitable for Riviera-only or Provence + Riviera programs</li>
        </ul>
      </aside>
    </div>
  </section>

  <nav class="dmc-subnav" aria-label="Section navigation">
    <div class="dmc-container dmc-subnav-inner">
      <a href="#services">Services</a>
      <a href="#destinations">Destinations</a>
      <a href="#programs">Programs</a>
      <a href="#why-us">Why Us</a>
      <a href="#process">Process</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section class="dmc-section">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">Who We Support</div>
        <h2>Built for partners who need local execution, not just destination ideas</h2>
        <p>
          We work with travel agencies, tour operators, incentive planners, executive assistants, luxury travel
          designers, corporate teams and private clients who need a trusted local partner in the South of France.
        </p>
      </div>

      <div class="dmc-badge-grid dmc-reveal">
        <span class="dmc-badge">Travel agencies</span>
        <span class="dmc-badge">Tour operators</span>
        <span class="dmc-badge">Event planners</span>
        <span class="dmc-badge">Corporate groups</span>
        <span class="dmc-badge">Luxury travel designers</span>
        <span class="dmc-badge">Executive assistants</span>
        <span class="dmc-badge">VIP private groups</span>
        <span class="dmc-badge">Cruise extensions</span>
      </div>
    </div>
  </section>

  <section class="dmc-section dmc-section-alt" id="services">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">What We Do</div>
        <h2>Core DMC services for the South of France</h2>
        <p>
          Our scope is flexible. Some clients need full itinerary design and ground handling. Others need executive
          transport, a Provence extension, or a refined local operating partner for an existing brief.
        </p>
      </div>

      <div class="dmc-grid-3">
        <article class="dmc-card dmc-reveal">
          <div class="dmc-icon">01</div>
          <h3>DMC planning and ground handling</h3>
          <p>We turn a destination brief into a workable program with routing, pacing, operational logic and regional coordination.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <div class="dmc-icon">02</div>
          <h3>Private transport and executive transfers</h3>
          <p>Airport pickups, city-to-city transfers, chauffeur-led touring, executive schedules and smooth mobility planning.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <div class="dmc-icon">03</div>
          <h3>Incentive travel and hosted group experiences</h3>
          <p>Programs designed to balance logistics, destination atmosphere, comfort and memorable shared moments.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <div class="dmc-icon">04</div>
          <h3>Business travel support</h3>
          <p>Practical local support for meetings, hospitality stays, executive visits, client entertainment and multi-stop business travel.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <div class="dmc-icon">05</div>
          <h3>Multi-day Riviera and Provence itineraries</h3>
          <p>Custom journeys connecting Nice, Cannes, Monaco, Marseille and Avignon in a more coherent, realistic sequence.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <div class="dmc-icon">06</div>
          <h3>VIP and bespoke requests</h3>
          <p>Flexible support for high-touch programs where discretion, timing and comfort matter as much as the itinerary itself.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="destinations">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">Core Coverage</div>
        <h2>The destinations we know best</h2>
        <p>
          This page is focused on our strongest South of France operating area: Nice, Cannes, Monaco, Marseille and Avignon,
          with broader Provence or Riviera routing available on request.
        </p>
      </div>

      <div class="dmc-grid-3">
        <article class="dmc-card dmc-destination-card dmc-reveal">
          <div class="dmc-image-placeholder">Nice image placeholder</div>
          <div class="dmc-destination-body">
            <h3>Nice</h3>
            <p>Ideal for premium stays, executive trips, coastal itineraries and French Riviera first-time programs.</p>
            <ul class="dmc-checklist">
              <li>International arrivals and hosted stays</li>
              <li>Premium Riviera touring base</li>
              <li>Easy connection to Monaco, Eze and Cannes</li>
            </ul>
          </div>
        </article>

        <article class="dmc-card dmc-destination-card dmc-reveal">
          <div class="dmc-image-placeholder">Cannes image placeholder</div>
          <div class="dmc-destination-body">
            <h3>Cannes</h3>
            <p>Well suited to polished Riviera programs, hosted travel, hospitality-focused stays and event-driven demand.</p>
            <ul class="dmc-checklist">
              <li>Corporate hospitality programs</li>
              <li>Premium client entertainment</li>
              <li>Image-led Riviera experiences</li>
            </ul>
          </div>
        </article>

        <article class="dmc-card dmc-destination-card dmc-reveal">
          <div class="dmc-image-placeholder">Monaco image placeholder</div>
          <div class="dmc-destination-body">
            <h3>Monaco</h3>
            <p>Best for prestige, precision, VIP stays and high-value programs where timing and execution need to be tight.</p>
            <ul class="dmc-checklist">
              <li>Executive hosting</li>
              <li>Luxury short stays</li>
              <li>High-touch transport planning</li>
            </ul>
          </div>
        </article>

        <article class="dmc-card dmc-destination-card dmc-reveal">
          <div class="dmc-image-placeholder">Marseille image placeholder</div>
          <div class="dmc-destination-body">
            <h3>Marseille</h3>
            <p>A practical gateway to Provence and the coast, suitable for culture, cruise, regional touring and business travel.</p>
            <ul class="dmc-checklist">
              <li>Provence discovery routing</li>
              <li>Cruise-related private programs</li>
              <li>Coastline plus heritage combinations</li>
            </ul>
          </div>
        </article>

        <article class="dmc-card dmc-destination-card dmc-reveal">
          <div class="dmc-image-placeholder">Avignon image placeholder</div>
          <div class="dmc-destination-body">
            <h3>Avignon</h3>
            <p>Strong for heritage-rich Provence itineraries, village touring, gastronomy programs and slower-paced premium travel.</p>
            <ul class="dmc-checklist">
              <li>Classic Provence programs</li>
              <li>Food and wine extensions</li>
              <li>Culture and countryside balance</li>
            </ul>
          </div>
        </article>

        <article class="dmc-card dmc-reveal">
          <div class="dmc-image-placeholder">Additional region visual placeholder</div>
          <div class="dmc-destination-body">
            <h3>Riviera + Provence combinations</h3>
            <p>
              Some of the strongest programs blend coastal prestige with inland character. We help shape that transition
              into something elegant, realistic and commercially useful for your client.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section dmc-section-alt" id="programs">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">Program Styles</div>
        <h2>Popular South of France brief types</h2>
        <p>Below are the types of requests where a local DMC partner usually adds the most value.</p>
      </div>

      <div class="dmc-card dmc-reveal">
        <div class="dmc-program-row">
          <div class="dmc-program-label">Riviera Discovery</div>
          <div>
            <h3>Nice, Eze, Monaco and Cannes in one refined journey</h3>
            <p>A high-impact French Riviera itinerary for private groups, hosted clients, incentive stays or premium first-time visitors.</p>
          </div>
        </div>

        <div class="dmc-program-row">
          <div class="dmc-program-label">Mixed Region</div>
          <div>
            <h3>Provence and Riviera combination programs</h3>
            <p>For clients who want both glamour and authenticity, we can connect Marseille or Avignon with Nice, Cannes or Monaco in a coherent route.</p>
          </div>
        </div>

        <div class="dmc-program-row">
          <div class="dmc-program-label">Corporate</div>
          <div>
            <h3>Business stays with curated local experiences</h3>
            <p>A practical framework around meetings, executive logistics, hosted dinners and one or two destination-led experiences.</p>
          </div>
        </div>

        <div class="dmc-program-row">
          <div class="dmc-program-label">VIP</div>
          <div>
            <h3>Chauffeur-led executive and private hosting programs</h3>
            <p>Designed for comfort, precision, discretion and strong guest handling from arrival to departure.</p>
          </div>
        </div>

        <div class="dmc-program-row">
          <div class="dmc-program-label">Cruise</div>
          <div>
            <h3>Pre- and post-cruise land extensions</h3>
            <p>Ideal when timing, luggage handling, comfort and clear transition planning matter more than generic day touring.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="why-us">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">Why Work With Us</div>
        <h2>Why a local South of France DMC can make the difference</h2>
        <p>
          Planning from abroad can create avoidable friction: unrealistic day plans, weak sequencing, excessive road time,
          generic experiences or unclear local coordination. Our value is in turning regional knowledge into a smoother client program.
        </p>
      </div>

      <div class="dmc-grid-2">
        <article class="dmc-card dmc-reveal">
          <h3>Regional knowledge with operational judgment</h3>
          <p>We help you understand what works well together, what should be done privately, what needs more time and what should be simplified.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <h3>More coherent routing and pacing</h3>
          <p>Beautiful destinations alone are not enough. The program needs comfort, realistic timing and a sense of flow from one stop to the next.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <h3>Flexible scope for different briefs</h3>
          <p>We can support full DMC design, selected services, transport-only work, hosted touring or Riviera-Provence combinations.</p>
        </article>

        <article class="dmc-card dmc-reveal">
          <h3>Clear communication for overseas partners</h3>
          <p>International clients need fast feedback, honest feasibility and fewer surprises. We aim to keep the process direct and practical.</p>
        </article>
      </div>

      <div class="dmc-proof dmc-reveal" style="margin-top: 24px;">
        <div class="dmc-card">
          <strong>5 Core Cities</strong>
          <p>Focused destination coverage for stronger local delivery.</p>
        </div>
        <div class="dmc-card">
          <strong>B2B + Private</strong>
          <p>Useful for agencies, planners, executive travel and bespoke hosted journeys.</p>
        </div>
        <div class="dmc-card">
          <strong>Riviera + Provence</strong>
          <p>A regional perspective that helps connect coast and inland programs more effectively.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="dmc-section dmc-section-alt" id="process">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">How We Work</div>
        <h2>A simple process for international partners and corporate clients</h2>
        <p>We keep the planning path straightforward so you can move from brief to execution without unnecessary friction.</p>
      </div>

      <div class="dmc-grid-2 dmc-process">
        <article class="dmc-card dmc-process-item dmc-reveal">
          <h3>Share the brief</h3>
          <p>Tell us the dates, group profile, destinations, service scope and any fixed requirements.</p>
        </article>

        <article class="dmc-card dmc-process-item dmc-reveal">
          <h3>Feasibility review</h3>
          <p>We assess routing, transfer logic, seasonal conditions, realistic pacing and operational fit.</p>
        </article>

        <article class="dmc-card dmc-process-item dmc-reveal">
          <h3>Tailored proposal</h3>
          <p>We shape a practical program around the tone, expectations and priorities of the request.</p>
        </article>

        <article class="dmc-card dmc-process-item dmc-reveal">
          <h3>Refinement and delivery</h3>
          <p>Once approved, we coordinate the details and support smooth local execution on the ground.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="faq">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">FAQ</div>
        <h2>Questions we often receive</h2>
        <p>These short answers help B2B visitors understand fit, scope and next steps quickly.</p>
      </div>

      <div class="dmc-faq">
        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Do you only provide full DMC programs?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>No. We can support full itineraries, transport-only requests, local touring days, multi-city routing or selected destination services.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Which destinations do you cover most strongly?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Our core DMC focus for this page is Nice, Cannes, Monaco, Marseille and Avignon, with broader South of France routing possible on request.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Can you support English-speaking overseas partners?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Yes. This page is specifically designed for international B2B inquiries and English-speaking clients.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Do you handle executive transfers and chauffeur-led schedules?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Yes. Reliable private transport planning is a core part of our service offering for both business and premium leisure programs.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Can you help if we only have an early-stage idea?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Yes. Many partners start with dates and a general destination direction, then rely on us to shape a realistic and commercially useful program.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section dmc-contact" id="contact">
    <div class="dmc-container">
      <div class="dmc-section-head dmc-reveal">
        <div class="dmc-eyebrow">Start the Conversation</div>
        <h2>Let’s plan your South of France program</h2>
        <p>
          Whether you need a complete DMC partner, local transport planning or help structuring a Riviera and Provence itinerary,
          we would be glad to review your brief.
        </p>
      </div>

      <div class="dmc-contact-grid">
        <aside class="dmc-contact-card dmc-reveal">
          <h3>Aoli Travel</h3>
          <p>South of France DMC and ground services for agencies, event planners, corporate groups and private clients.</p>

          <ul class="dmc-contact-list">
            <li><strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/YOUR_WHATSAPP_LINK">+33XXXXXXXXX</a></li>
            <li><strong>Website:</strong> <a href="https://aolitravel.com">aolitravel.com</a></li>
            <li><strong>Coverage:</strong> Nice, Cannes, Monaco, Marseille and Avignon</li>
          </ul>

          <p class="dmc-form-note">For best results, include your dates, destinations, group size and the type of support you need.</p>
        </aside>

        <div class="dmc-form-shell dmc-reveal">
          <form data-dmc-form novalidate>
            <div class="dmc-form-grid">
              <div class="dmc-field">
                <label for="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Agency or company name">
              </div>

              <div class="dmc-field">
                <label for="contact-name">Contact name</label>
                <input id="contact-name" name="contactName" type="text" placeholder="Your name" required>
              </div>

              <div class="dmc-field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" placeholder="name@company.com" required>
              </div>

              <div class="dmc-field">
                <label for="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="text" placeholder="+44..., +1..., +33...">
              </div>

              <div class="dmc-field">
                <label for="dates">Travel dates</label>
                <input id="dates" name="dates" type="text" placeholder="e.g. 12-16 September 2026">
              </div>

              <div class="dmc-field">
                <label for="group-size">Group size</label>
                <input id="group-size" name="groupSize" type="text" placeholder="e.g. 8 guests / 40 pax">
              </div>

              <div class="dmc-field dmc-field-full">
                <label for="destinations">Destinations</label>
                <input id="destinations" name="destinations" type="text" placeholder="Nice, Cannes, Monaco...">
              </div>

              <div class="dmc-field dmc-field-full">
                <label for="services-needed">Services needed</label>
                <select id="services-needed" name="servicesNeeded">
                  <option value="">Select a service focus</option>
                  <option>DMC planning and ground handling</option>
                  <option>Private transport and transfers</option>
                  <option>Incentive or hosted group program</option>
                  <option>Executive travel support</option>
                  <option>Multi-day Riviera and Provence itinerary</option>
                  <option>VIP / bespoke request</option>
                </select>
              </div>

              <div class="dmc-field dmc-field-full">
                <label for="message">Project brief</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell us about the client profile, preferred tone, destinations, budget level or any fixed requirements." required></textarea>
              </div>

              <div class="dmc-field dmc-field-full">
                <button class="dmc-button dmc-button-primary" type="submit">Prepare My Inquiry</button>
                <div class="dmc-form-status" data-dmc-form-status aria-live="polite"></div>
                <p class="dmc-form-note">This starter version opens your email app with a structured inquiry draft. Later, you can connect the same form to Formspree, Netlify Forms or your own backend.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Aoli Travel",
    "url": "https://aolitravel.com/en/south-france-dmc/",
    "description": "South of France DMC services for Nice, Cannes, Monaco, Marseille and Avignon.",
    "areaServed": [
      "Nice",
      "Cannes",
      "Monaco",
      "Marseille",
      "Avignon"
    ],
    "serviceType": [
      "Destination management company",
      "Ground handling",
      "Private transport",
      "Corporate travel support",
      "Incentive travel planning"
    ]
  }
  </script>

  <script>
    (function () {
      var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var revealItems = document.querySelectorAll(".dmc-reveal");
      var faqToggles = document.querySelectorAll(".dmc-faq-toggle");
      var navLinks = document.querySelectorAll(".dmc-subnav a");
      var sections = document.querySelectorAll("[id]");
      var form = document.querySelector("[data-dmc-form]");
      var status = document.querySelector("[data-dmc-form-status]");

      if (revealItems.length) {
        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
          revealItems.forEach(function (item) {
            item.classList.add("is-visible");
          });
        } else {
          var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.12 });

          revealItems.forEach(function (item) {
            revealObserver.observe(item);
          });
        }
      }

      faqToggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
          var item = toggle.closest(".dmc-faq-item");
          var isOpen = item.classList.contains("is-open");

          faqToggles.forEach(function (btn) {
            btn.setAttribute("aria-expanded", "false");
            btn.closest(".dmc-faq-item").classList.remove("is-open");
            btn.querySelector("span:last-child").textContent = "+";
          });

          if (!isOpen) {
            item.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
            toggle.querySelector("span:last-child").textContent = "−";
          }
        });
      });

      if ("IntersectionObserver" in window && navLinks.length && sections.length) {
        var navObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var id = entry.target.getAttribute("id");

            navLinks.forEach(function (link) {
              var isMatch = link.getAttribute("href") === "#" + id;
              link.classList.toggle("is-active", isMatch);
            });
          });
        }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

        sections.forEach(function (section) {
          if (section.id) navObserver.observe(section);
        });
      }

      if (form) {
        form.addEventListener("submit", function (event) {
          event.preventDefault();

          var formData = new FormData(form);
          var contactName = (formData.get("contactName") || "").toString().trim();
          var email = (formData.get("email") || "").toString().trim();
          var message = (formData.get("message") || "").toString().trim();

          if (!contactName || !email || !message) {
            status.textContent = "Please complete contact name, email and project brief before continuing.";
            return;
          }

          var lines = [
            "South of France DMC inquiry",
            "",
            "Company: " + (formData.get("company") || ""),
            "Contact name: " + contactName,
            "Email: " + email,
            "Phone / WhatsApp: " + (formData.get("phone") || ""),
            "Travel dates: " + (formData.get("dates") || ""),
            "Group size: " + (formData.get("groupSize") || ""),
            "Destinations: " + (formData.get("destinations") || ""),
            "Services needed: " + (formData.get("servicesNeeded") || ""),
            "",
            "Project brief:",
            message
          ];

          var subject = encodeURIComponent("South of France DMC Inquiry");
          var body = encodeURIComponent(lines.join("\n"));
          window.location.href = "mailto:your-email@example.com?subject=" + subject + "&body=" + body;
          status.textContent = "Your email draft is ready. If nothing opened, please check your email app settings.";
        });
      }
    })();
  </script>
</div>
