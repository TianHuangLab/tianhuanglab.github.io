---
layout: default
title: South of France DMC | Aoli Travel
permalink: /en/south-france-dmc/
lang: en
description: Local DMC services in Nice, Cannes, Monaco, Marseille and Avignon for agencies, event planners, corporate groups and private clients.
---

<style>
  :root {
    --dmc-bg: #ffffff;
    --dmc-bg-soft: #fcf8fc;
    --dmc-bg-tint: #f8eef8;
    --dmc-accent: #b52aac;
    --dmc-accent-soft: #eec9ea;
    --dmc-accent-faint: rgba(181, 42, 172, 0.08);
    --dmc-accent-faint-2: rgba(181, 42, 172, 0.14);
    --dmc-text: #111111;
    --dmc-text-soft: #4b4b4b;
    --dmc-text-muted: #6c6c6c;
    --dmc-border: rgba(17, 17, 17, 0.08);
    --dmc-shadow: 0 14px 40px rgba(17, 17, 17, 0.06);
    --dmc-shadow-strong: 0 18px 50px rgba(181, 42, 172, 0.12);
    --dmc-radius-xl: 28px;
    --dmc-radius-lg: 22px;
    --dmc-radius-md: 16px;
    --dmc-radius-sm: 12px;
    --dmc-max: 1280px;
  }

  .dmc-page,
  .dmc-page * {
    box-sizing: border-box;
  }

  .dmc-page {
    background:
      radial-gradient(circle at top left, rgba(181, 42, 172, 0.08), transparent 26%),
      radial-gradient(circle at bottom right, rgba(181, 42, 172, 0.05), transparent 22%),
      linear-gradient(180deg, #ffffff 0%, #fffdfd 100%);
    color: var(--dmc-text);
    margin: 0;
  }

  .dmc-container {
    width: min(var(--dmc-max), calc(100% - 40px));
    margin: 0 auto;
  }

  .dmc-page h1,
  .dmc-page h2,
  .dmc-page h3 {
    margin: 0 0 16px;
    letter-spacing: -0.03em;
    line-height: 1.04;
    color: var(--dmc-text);
    font-family: Georgia, "Times New Roman", serif;
  }

  .dmc-page h1 {
    font-size: clamp(3rem, 5.6vw, 4.9rem);
    max-width: 10.5ch;
  }

  .dmc-page h2 {
    font-size: clamp(2rem, 3.5vw, 3.05rem);
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
  .dmc-page select,
  .dmc-page button {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.03rem;
    line-height: 1.72;
  }

  .dmc-page p {
    margin: 0 0 16px;
    color: var(--dmc-text-soft);
  }

  .dmc-page a {
    color: inherit;
    text-decoration: none;
  }

  .dmc-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    color: var(--dmc-accent);
    font-size: 0.84rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .dmc-eyebrow::before {
    content: "";
    width: 34px;
    height: 1px;
    background: currentColor;
  }

  .dmc-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 22px;
    border-radius: 999px;
    font-weight: 700;
    border: 1px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  .dmc-button:hover,
  .dmc-button:focus-visible {
    transform: translateY(-1px);
  }

  .dmc-button-primary {
    color: #ffffff;
    background: linear-gradient(135deg, var(--dmc-accent), #cb53c2);
    box-shadow: var(--dmc-shadow-strong);
  }

  .dmc-button-secondary {
    color: var(--dmc-text);
    background: #ffffff;
    border-color: var(--dmc-border);
  }

  .dmc-button-secondary:hover,
  .dmc-button-secondary:focus-visible {
    box-shadow: var(--dmc-shadow);
  }

  .dmc-chip-row,
  .dmc-trust-row,
  .dmc-badge-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .dmc-chip,
  .dmc-trust-item,
  .dmc-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid var(--dmc-border);
    background: #ffffff;
    color: var(--dmc-text);
    box-shadow: 0 4px 14px rgba(17, 17, 17, 0.03);
    font-weight: 600;
  }

  .dmc-chip::before,
  .dmc-trust-item::before,
  .dmc-badge::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--dmc-accent);
    flex: 0 0 auto;
  }

  .dmc-hero {
    padding: 76px 0 36px;
  }

  .dmc-hero-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
    gap: 30px;
    align-items: stretch;
  }

  .dmc-hero-copy {
    padding: 28px 0;
  }

  .dmc-lead {
    max-width: 60ch;
    font-size: 1.08rem;
    color: var(--dmc-text-soft);
  }

  .dmc-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin: 28px 0 22px;
  }

  .dmc-hero-panel {
    position: relative;
    overflow: hidden;
    border-radius: var(--dmc-radius-xl);
    background:
      linear-gradient(180deg, rgba(181, 42, 172, 0.08), rgba(181, 42, 172, 0.03)),
      #ffffff;
    border: 1px solid rgba(181, 42, 172, 0.12);
    box-shadow: var(--dmc-shadow);
    padding: 24px;
  }

  .dmc-hero-panel::after {
    content: "";
    position: absolute;
    right: -30px;
    bottom: -30px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(181, 42, 172, 0.12), transparent 65%);
    pointer-events: none;
  }

  .dmc-hero-visual {
    min-height: 220px;
    display: grid;
    place-items: center;
    padding: 24px;
    border-radius: 18px;
    text-align: center;
    background:
      linear-gradient(135deg, rgba(181, 42, 172, 0.72), rgba(238, 201, 234, 0.8)),
      #f6eff6;
    color: #ffffff;
    margin-bottom: 22px;
  }

  .dmc-panel-label {
    margin-bottom: 10px;
    color: var(--dmc-accent);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .dmc-panel-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dmc-panel-list li {
    padding: 12px 0;
    border-top: 1px solid rgba(17, 17, 17, 0.07);
    color: var(--dmc-text-soft);
  }

  .dmc-subnav {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border-top: 1px solid var(--dmc-border);
    border-bottom: 1px solid var(--dmc-border);
  }

  .dmc-subnav-inner {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 12px 0;
    scrollbar-width: none;
  }

  .dmc-subnav-inner::-webkit-scrollbar {
    display: none;
  }

  .dmc-subnav a {
    white-space: nowrap;
    color: var(--dmc-text-muted);
    padding: 8px 14px;
    border-radius: 999px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .dmc-subnav a.is-active,
  .dmc-subnav a:hover,
  .dmc-subnav a:focus-visible {
    background: var(--dmc-accent-faint);
    color: var(--dmc-accent);
  }

  .dmc-section {
    padding: 78px 0;
  }

  .dmc-section-alt {
    background:
      linear-gradient(180deg, rgba(181, 42, 172, 0.03), rgba(181, 42, 172, 0.015)),
      #ffffff;
    border-top: 1px solid rgba(17, 17, 17, 0.05);
    border-bottom: 1px solid rgba(17, 17, 17, 0.05);
  }

  .dmc-section-head {
    max-width: 74ch;
    margin-bottom: 34px;
  }

  .dmc-grid-2,
  .dmc-grid-3,
  .dmc-grid-4,
  .dmc-contact-grid {
    display: grid;
    gap: 22px;
  }

  .dmc-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dmc-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .dmc-grid-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .dmc-card {
    background: #ffffff;
    border: 1px solid var(--dmc-border);
    border-radius: var(--dmc-radius-md);
    box-shadow: var(--dmc-shadow);
    padding: 24px;
  }

  .dmc-icon {
    width: 48px;
    height: 48px;
    display: inline-grid;
    place-items: center;
    border-radius: 14px;
    background: var(--dmc-accent-faint);
    color: var(--dmc-accent);
    font-weight: 800;
    margin-bottom: 16px;
  }

  .dmc-checklist,
  .dmc-bullets {
    margin: 0;
    padding-left: 18px;
  }

  .dmc-checklist li + li,
  .dmc-bullets li + li {
    margin-top: 8px;
  }

  .dmc-destination-card {
    overflow: hidden;
    padding: 0;
  }

  .dmc-image-placeholder {
    min-height: 160px;
    display: grid;
    place-items: center;
    padding: 24px;
    text-align: center;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(181, 42, 172, 0.82), rgba(214, 131, 206, 0.78)),
      #d889d1;
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
    color: var(--dmc-accent);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.82rem;
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
    top: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--dmc-accent), #cf61c7);
    color: #ffffff;
    font-weight: 800;
    box-shadow: 0 10px 24px rgba(181, 42, 172, 0.18);
  }

  .dmc-proof {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 24px;
  }

  .dmc-proof strong {
    display: block;
    margin-bottom: 6px;
    color: var(--dmc-text);
    font-size: 1.35rem;
    font-family: Georgia, "Times New Roman", serif;
  }

  .dmc-faq {
    display: grid;
    gap: 14px;
  }

  .dmc-faq-item {
    overflow: hidden;
    border-radius: var(--dmc-radius-sm);
    border: 1px solid var(--dmc-border);
    background: #ffffff;
    box-shadow: 0 4px 18px rgba(17, 17, 17, 0.03);
  }

  .dmc-faq-toggle {
    width: 100%;
    border: none;
    background: transparent;
    padding: 20px 22px;
    text-align: left;
    color: var(--dmc-text);
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
  }

  .dmc-faq-toggle span:last-child {
    color: var(--dmc-accent);
    font-size: 1.25rem;
    line-height: 1;
  }

  .dmc-faq-panel {
    display: none;
    padding: 0 22px 22px;
  }

  .dmc-faq-item.is-open .dmc-faq-panel {
    display: block;
  }

  .dmc-contact {
    background:
      radial-gradient(circle at top left, rgba(181, 42, 172, 0.09), transparent 24%),
      linear-gradient(180deg, #fffafb 0%, #ffffff 100%);
  }

  .dmc-contact-grid {
    grid-template-columns: minmax(0, 0.92fr) minmax(340px, 1.08fr);
    align-items: start;
  }

  .dmc-contact-card,
  .dmc-form-shell {
    background: #ffffff;
    border: 1px solid rgba(181, 42, 172, 0.12);
    border-radius: var(--dmc-radius-lg);
    box-shadow: var(--dmc-shadow);
    padding: 26px;
  }

  .dmc-contact-list {
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
  }

  .dmc-contact-list li + li {
    margin-top: 10px;
  }

  .dmc-contact-list a {
    color: var(--dmc-accent);
  }

  .dmc-contact-card strong {
    color: var(--dmc-text);
  }

  .dmc-form-note {
    font-size: 0.95rem;
    color: var(--dmc-text-muted);
  }

  .dmc-form-note a {
    color: var(--dmc-accent);
    font-weight: 700;
  }

  .dmc-tally-wrap {
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--dmc-border);
    background: var(--dmc-bg-soft);
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

  @media (max-width: 1100px) {
    .dmc-hero-wrap,
    .dmc-contact-grid,
    .dmc-grid-3,
    .dmc-grid-4,
    .dmc-grid-2,
    .dmc-proof {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 760px) {
    .dmc-hero {
      padding-top: 48px;
    }

    .dmc-section {
      padding: 58px 0;
    }

    .dmc-container {
      width: min(var(--dmc-max), calc(100% - 24px));
    }

    .dmc-program-row {
      grid-template-columns: 1fr;
      gap: 10px;
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
        <h3>A practical South of France operating partner for English-speaking B2B clients</h3>

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
          We work with travel agencies, tour operators, incentive planners, executive assistants, luxury travel designers,
          corporate teams and private clients who need a trusted local partner in the South of France.
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
          <p>Custom journeys connecting Nice, Cannes, Monaco and Avignon in a more coherent, realistic sequence.</p>
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

      <div class="dmc-proof dmc-reveal">
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
            <li><strong>Email:</strong> <a href="mailto:contact@aolitravel.com">contact@aolitravel.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> <a href="tel:+33783271988">(0033) 7 83 27 19 88</a></li>
            <li><strong>Website:</strong> <a href="https://aolitravel.com">aolitravel.com</a></li>
            <li><strong>Coverage:</strong> Nice, Cannes, Monaco, Marseille and Avignon</li>
          </ul>

          <p class="dmc-form-note">
            For best results, include your dates, destinations, group size and the type of support you need.
          </p>
        </aside>

        <div class="dmc-form-shell dmc-reveal">
          <div class="dmc-tally-wrap">
            <iframe
              data-tally-src="https://tally.so/r/YOUR_TALLY_FORM_ID?transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="660"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="South of France DMC Inquiry"
              style="border:0;background:transparent;"
            ></iframe>
          </div>

          <p class="dmc-form-note" style="margin-top: 14px;">
            Prefer direct contact? Email
            <a href="mailto:contact@aolitravel.com">contact@aolitravel.com</a>
            or call / WhatsApp
            <a href="tel:+33783271988">(0033) 7 83 27 19 88</a>.
          </p>
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
    ],
    "email": "contact@aolitravel.com",
    "telephone": "+33783271988"
  }
  </script>

  <script>
    (function () {
      var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var revealItems = document.querySelectorAll(".dmc-reveal");
      var faqToggles = document.querySelectorAll(".dmc-faq-toggle");
      var navLinks = document.querySelectorAll(".dmc-subnav a");
      var sections = document.querySelectorAll("[id]");

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
              link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
            });
          });
        }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

        sections.forEach(function (section) {
          if (section.id) navObserver.observe(section);
        });
      }

      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        var tallyScript = document.createElement("script");
        tallyScript.src = "https://tally.so/widgets/embed.js";
        tallyScript.onload = function () {
          if (typeof Tally !== "undefined") Tally.loadEmbeds();
        };
        document.body.appendChild(tallyScript);
      }
    })();
  </script>
</div>
