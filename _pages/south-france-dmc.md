---
layout: default
title: South of France DMC | Aoli Travel
permalink: /en/south-france-dmc/
lang: en
description: South of France DMC services for Nice, Cannes, Monaco, Marseille and Avignon.
---

<style>
  :root {
    --dmc-bg: #ffffff;
    --dmc-bg-soft: #fbf7fb;
    --dmc-accent: #b52aac;
    --dmc-accent-soft: rgba(181, 42, 172, 0.10);
    --dmc-accent-line: rgba(181, 42, 172, 0.22);
    --dmc-text: #101010;
    --dmc-text-soft: #444444;
    --dmc-text-muted: #727272;
    --dmc-border: rgba(16, 16, 16, 0.08);
    --dmc-shadow: 0 20px 50px rgba(16, 16, 16, 0.05);
    --dmc-radius-xl: 32px;
    --dmc-radius-lg: 22px;
    --dmc-radius-md: 16px;
    --dmc-max: 1320px;
  }

  .dmc-page,
  .dmc-page * {
    box-sizing: border-box;
  }

  .dmc-page {
    background: linear-gradient(180deg, #ffffff 0%, #fffdfd 100%);
    color: var(--dmc-text);
    margin: 0;
  }

  .dmc-container {
    width: min(var(--dmc-max), calc(100% - 48px));
    margin: 0 auto;
  }

  .dmc-page h1,
  .dmc-page h2,
  .dmc-page h3,
  .dmc-page h4 {
    margin: 0 0 16px;
    color: var(--dmc-text);
    letter-spacing: -0.035em;
    line-height: 1.02;
    font-family: Georgia, "Times New Roman", serif;
  }

  .dmc-page h1 {
    font-size: clamp(3.4rem, 6.4vw, 6.6rem);
    max-width: 10.5ch;
  }

  .dmc-page h2 {
    font-size: clamp(2.2rem, 3.8vw, 3.8rem);
    max-width: 12ch;
  }

  .dmc-page h3 {
    font-size: clamp(1.35rem, 2vw, 1.9rem);
  }

  .dmc-page h4 {
    font-size: 0.85rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--dmc-accent);
    margin-bottom: 14px;
  }

  .dmc-page p,
  .dmc-page li,
  .dmc-page a,
  .dmc-page button {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.05rem;
    line-height: 1.8;
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
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .dmc-eyebrow::before {
    content: "";
    width: 40px;
    height: 1px;
    background: currentColor;
  }

  .dmc-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 30px;
  }

  .dmc-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 0 24px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .dmc-button:hover,
  .dmc-button:focus-visible {
    transform: translateY(-1px);
  }

  .dmc-button-primary {
    background: var(--dmc-text);
    color: #ffffff;
    box-shadow: 0 14px 36px rgba(16, 16, 16, 0.10);
  }

  .dmc-button-secondary {
    background: #ffffff;
    color: var(--dmc-text);
    border-color: var(--dmc-border);
  }

  .dmc-section {
    padding: 120px 0;
  }

  .dmc-section + .dmc-section {
    border-top: 1px solid rgba(16, 16, 16, 0.05);
  }

  .dmc-hero {
    padding: 110px 0 90px;
  }

  .dmc-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
    gap: 40px;
    align-items: end;
  }

  .dmc-hero-copy p {
    max-width: 60ch;
    font-size: 1.08rem;
  }

  .dmc-hero-visual {
    min-height: 620px;
    border-radius: var(--dmc-radius-xl);
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(181, 42, 172, 0.85), rgba(230, 175, 225, 0.80)),
      #dca6d7;
    box-shadow: var(--dmc-shadow);
    position: relative;
    display: grid;
    place-items: end start;
    padding: 28px;
  }

  .dmc-hero-visual::after {
    content: "";
    position: absolute;
    inset: auto -30px -30px auto;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.28), transparent 70%);
  }

  .dmc-hero-note {
    position: relative;
    z-index: 1;
    max-width: 320px;
    padding: 20px 22px;
    border-radius: 18px;
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.28);
  }

  .dmc-hero-note p,
  .dmc-hero-note h3 {
    color: #ffffff;
  }

  .dmc-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 42px;
  }

  .dmc-metric {
    padding-top: 18px;
    border-top: 2px solid var(--dmc-accent);
  }

  .dmc-metric strong {
    display: block;
    margin-bottom: 6px;
    font-size: 1.4rem;
    color: var(--dmc-text);
    font-family: Georgia, "Times New Roman", serif;
  }

  .dmc-metric p {
    margin: 0;
    color: var(--dmc-text-muted);
  }

  .dmc-two-col {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 44px;
    align-items: start;
  }

  .dmc-panel {
    padding: 28px;
    border-radius: var(--dmc-radius-lg);
    background: var(--dmc-bg-soft);
    border: 1px solid var(--dmc-accent-line);
  }

  .dmc-panel-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .dmc-panel-list li {
    padding: 12px 0;
    border-top: 1px solid rgba(16, 16, 16, 0.08);
    color: var(--dmc-text-soft);
  }

  .dmc-panel-list li:first-child {
    border-top: none;
    padding-top: 0;
  }

  .dmc-values {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
    margin-top: 44px;
  }

  .dmc-value h3 {
    margin-bottom: 10px;
  }

  .dmc-service-list {
    display: grid;
    gap: 0;
    margin-top: 40px;
  }

  .dmc-service-row {
    display: grid;
    grid-template-columns: 130px minmax(0, 1fr);
    gap: 26px;
    padding: 28px 0;
    border-top: 1px solid rgba(16, 16, 16, 0.08);
  }

  .dmc-service-row:first-child {
    border-top: none;
    padding-top: 0;
  }

  .dmc-service-label {
    color: var(--dmc-accent);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .dmc-destination-stack {
    display: grid;
    gap: 56px;
    margin-top: 34px;
  }

  .dmc-destination {
    display: grid;
    grid-template-columns: minmax(320px, 1fr) minmax(0, 1fr);
    gap: 34px;
    align-items: center;
  }

  .dmc-destination:nth-child(even) {
    grid-template-columns: minmax(0, 1fr) minmax(320px, 1fr);
  }

  .dmc-destination:nth-child(even) .dmc-destination-image {
    order: 2;
  }

  .dmc-destination:nth-child(even) .dmc-destination-copy {
    order: 1;
  }

  .dmc-destination-image {
    min-height: 420px;
    border-radius: var(--dmc-radius-xl);
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(181, 42, 172, 0.85), rgba(230, 175, 225, 0.78)),
      #dba5d6;
    box-shadow: var(--dmc-shadow);
    display: grid;
    place-items: center;
    padding: 28px;
    color: #ffffff;
    text-align: center;
  }

  .dmc-destination-number {
    margin-bottom: 10px;
    color: var(--dmc-accent);
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .dmc-bullets {
    margin: 14px 0 0;
    padding-left: 18px;
  }

  .dmc-bullets li + li {
    margin-top: 8px;
  }

  .dmc-highlight {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 380px;
    gap: 30px;
    align-items: stretch;
    padding: 40px;
    border-radius: var(--dmc-radius-xl);
    background: var(--dmc-bg-soft);
    border: 1px solid var(--dmc-accent-line);
  }

  .dmc-highlight-visual {
    min-height: 280px;
    border-radius: 24px;
    background:
      linear-gradient(135deg, rgba(181, 42, 172, 0.86), rgba(228, 168, 223, 0.80)),
      #dba5d6;
    display: grid;
    place-items: center;
    color: #ffffff;
    text-align: center;
    padding: 24px;
  }

  .dmc-faq {
    display: grid;
    gap: 14px;
    margin-top: 34px;
  }

  .dmc-faq-item {
    border: 1px solid var(--dmc-border);
    border-radius: 14px;
    background: #ffffff;
  }

  .dmc-faq-toggle {
    width: 100%;
    border: none;
    background: transparent;
    text-align: left;
    padding: 20px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: var(--dmc-text);
    font-weight: 700;
    cursor: pointer;
  }

  .dmc-faq-toggle span:last-child {
    color: var(--dmc-accent);
    font-size: 1.2rem;
    line-height: 1;
  }

  .dmc-faq-panel {
    display: none;
    padding: 0 22px 22px;
  }

  .dmc-faq-item.is-open .dmc-faq-panel {
    display: block;
  }

  .dmc-contact-grid {
    display: grid;
    grid-template-columns: 360px minmax(0, 1fr);
    gap: 30px;
    align-items: start;
    margin-top: 36px;
  }

  .dmc-contact-card,
  .dmc-form-shell {
    padding: 30px;
    border-radius: var(--dmc-radius-lg);
    background: #ffffff;
    border: 1px solid var(--dmc-border);
    box-shadow: var(--dmc-shadow);
  }

  .dmc-contact-list {
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
  }

  .dmc-contact-list li + li {
    margin-top: 10px;
  }

  .dmc-contact-list a,
  .dmc-form-note a {
    color: var(--dmc-accent);
    font-weight: 700;
  }

  .dmc-tally-wrap {
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid var(--dmc-border);
    background: var(--dmc-bg-soft);
  }

  .dmc-form-note {
    margin-top: 14px;
    color: var(--dmc-text-muted);
    font-size: 0.95rem;
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
    .dmc-hero-grid,
    .dmc-two-col,
    .dmc-values,
    .dmc-highlight,
    .dmc-contact-grid,
    .dmc-destination,
    .dmc-destination:nth-child(even),
    .dmc-metrics {
      grid-template-columns: 1fr;
    }

    .dmc-destination:nth-child(even) .dmc-destination-image,
    .dmc-destination:nth-child(even) .dmc-destination-copy {
      order: initial;
    }
  }

  @media (max-width: 760px) {
    .dmc-container {
      width: min(var(--dmc-max), calc(100% - 24px));
    }

    .dmc-section {
      padding: 72px 0;
    }

    .dmc-hero {
      padding: 72px 0 60px;
    }

    .dmc-service-row {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .dmc-hero-visual,
    .dmc-destination-image {
      min-height: 280px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dmc-reveal,
    .dmc-button {
      transition: none;
    }
  }
</style>

<div class="dmc-page">
  <section class="dmc-hero">
    <div class="dmc-container">
      <div class="dmc-hero-grid">
        <div class="dmc-hero-copy dmc-reveal">
          <div class="dmc-eyebrow">South of France DMC Services</div>
          <h1>Your local partner for refined experiences across the South of France</h1>
          <p>
            Aoli Travel supports agencies, event planners, corporate groups and private clients with destination
            management, private transport and bespoke local coordination across Nice, Cannes, Monaco, Marseille and Avignon.
          </p>
          <p>
            We help shape programs that feel elegant, practical and seamless, from first arrival to final departure.
          </p>
          <div class="dmc-button-row">
            <a class="dmc-button dmc-button-primary" href="#contact">Contact us</a>
            <a class="dmc-button dmc-button-secondary" href="#services">Discover our services</a>
          </div>
        </div>

        <div class="dmc-hero-visual dmc-reveal" role="img" aria-label="Placeholder for hero image">
          <div class="dmc-hero-note">
            <h3>Local South of France coverage</h3>
            <p>Nice, Cannes, Monaco, Marseille and Avignon, with Riviera and Provence combinations on request.</p>
          </div>
        </div>
      </div>

      <div class="dmc-metrics">
        <div class="dmc-metric dmc-reveal">
          <strong>Local expertise</strong>
          <p>Regional knowledge shaped by real routing, timing and guest-handling experience.</p>
        </div>
        <div class="dmc-metric dmc-reveal">
          <strong>B2B support</strong>
          <p>Suitable for agencies, executive travel, hosted groups and private client programs.</p>
        </div>
        <div class="dmc-metric dmc-reveal">
          <strong>Riviera + Provence</strong>
          <p>A focused operating area designed for stronger local delivery.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="about">
    <div class="dmc-container">
      <div class="dmc-two-col">
        <div class="dmc-reveal">
          <div class="dmc-eyebrow">Who We Are</div>
          <h2>A South of France DMC partner for seamless, high-touch travel experiences</h2>
          <p>
            We support partners who need more than inspiration. They need a local team that understands movement,
            sequence, client expectations and the rhythm of the South of France.
          </p>
          <p>
            Our role is to translate a destination brief into a program that feels natural, polished and comfortable
            for the people experiencing it.
          </p>
        </div>

        <aside class="dmc-panel dmc-reveal">
          <h4>Our focus</h4>
          <ul class="dmc-panel-list">
            <li>Agency and white-label destination support</li>
            <li>Executive travel and private hosting</li>
            <li>Premium transport and regional routing</li>
            <li>Riviera and Provence program design</li>
            <li>English-speaking B2B communication</li>
          </ul>
        </aside>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="role">
    <div class="dmc-container">
      <div class="dmc-reveal">
        <div class="dmc-eyebrow">Our Role</div>
        <h2>Turning objectives into experiences people remember</h2>
        <p>
          The most successful programs are not only attractive on paper. They also work smoothly in real life:
          in pacing, movement, comfort, guest handling and atmosphere.
        </p>
      </div>

      <div class="dmc-values">
        <article class="dmc-reveal">
          <h3>Precision and reliability</h3>
          <p>Clear communication, realistic planning and thoughtful local coordination from brief to delivery.</p>
        </article>
        <article class="dmc-reveal">
          <h3>Experiences designed for people</h3>
          <p>No rigid templates, only programs shaped around client tone, energy and travel priorities.</p>
        </article>
        <article class="dmc-reveal">
          <h3>Regional flexibility</h3>
          <p>Prestige, coastline, heritage and logistics combined into a more coherent South of France journey.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="services">
    <div class="dmc-container">
      <div class="dmc-reveal">
        <div class="dmc-eyebrow">Our Services</div>
        <h2>Destination management across the South of France</h2>
        <p>We can support a full program or selected parts of it, depending on the brief.</p>
      </div>

      <div class="dmc-service-list">
        <article class="dmc-service-row dmc-reveal">
          <div class="dmc-service-label">01</div>
          <div>
            <h3>DMC planning and ground handling</h3>
            <p>Program structure, routing logic, destination flow, timing and local operating support.</p>
          </div>
        </article>

        <article class="dmc-service-row dmc-reveal">
          <div class="dmc-service-label">02</div>
          <div>
            <h3>Private transport and executive transfers</h3>
            <p>Airport pickups, chauffeur-led touring, intercity movement and polished transport planning from arrival to departure.</p>
          </div>
        </article>

        <article class="dmc-service-row dmc-reveal">
          <div class="dmc-service-label">03</div>
          <div>
            <h3>Hosted travel and incentive-style programs</h3>
            <p>Shared experiences designed to reward, connect and showcase the destination with elegance and ease.</p>
          </div>
        </article>

        <article class="dmc-service-row dmc-reveal">
          <div class="dmc-service-label">04</div>
          <div>
            <h3>VIP and bespoke support</h3>
            <p>High-touch programs where discretion, comfort, flexibility and attention to detail matter throughout.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="destinations">
    <div class="dmc-container">
      <div class="dmc-reveal">
        <div class="dmc-eyebrow">Our Destinations</div>
        <h2>At the heart of the South of France</h2>
        <p>
          Our strongest operating area covers the French Riviera and Provence, with destination choices that work well
          for hosted programs, private travel and multi-day regional itineraries.
        </p>
      </div>

      <div class="dmc-destination-stack">
        <article class="dmc-destination">
          <div class="dmc-destination-image dmc-reveal">Monaco image placeholder</div>
          <div class="dmc-destination-copy dmc-reveal">
            <div class="dmc-destination-number">01.</div>
            <h3>Monaco</h3>
            <p>
              Prestige, precision and a concentrated sense of occasion. Monaco is ideal for executive hosting,
              VIP stays and high-value programs where service level matters.
            </p>
            <ul class="dmc-bullets">
              <li>Executive travel and premium hospitality</li>
              <li>Luxury short stays</li>
              <li>High-touch transport management</li>
            </ul>
          </div>
        </article>

        <article class="dmc-destination">
          <div class="dmc-destination-image dmc-reveal">Nice image placeholder</div>
          <div class="dmc-destination-copy dmc-reveal">
            <div class="dmc-destination-number">02.</div>
            <h3>Nice</h3>
            <p>
              A natural Riviera base that combines access, elegance and flexibility for hosted stays,
              coastal programs and first-time South of France journeys.
            </p>
            <ul class="dmc-bullets">
              <li>International arrivals and hosted stays</li>
              <li>Easy connection to Monaco and Cannes</li>
              <li>Balanced business and leisure atmosphere</li>
            </ul>
          </div>
        </article>

        <article class="dmc-destination">
          <div class="dmc-destination-image dmc-reveal">Cannes image placeholder</div>
          <div class="dmc-destination-copy dmc-reveal">
            <div class="dmc-destination-number">03.</div>
            <h3>Cannes</h3>
            <p>
              Polished, energetic and image-conscious, Cannes works well for hospitality-led travel,
              premium client hosting and event-adjacent stays.
            </p>
            <ul class="dmc-bullets">
              <li>Hosted client programs</li>
              <li>Premium leisure extensions</li>
              <li>Business-friendly Riviera energy</li>
            </ul>
          </div>
        </article>

        <article class="dmc-destination">
          <div class="dmc-destination-image dmc-reveal">Marseille image placeholder</div>
          <div class="dmc-destination-copy dmc-reveal">
            <div class="dmc-destination-number">04.</div>
            <h3>Marseille</h3>
            <p>
              A practical gateway to Provence and the Mediterranean coast, suited to deeper regional programs,
              culture-led itineraries and business travel extensions.
            </p>
            <ul class="dmc-bullets">
              <li>Regional touring and land extensions</li>
              <li>Cruise-related private programs</li>
              <li>City-to-country itineraries</li>
            </ul>
          </div>
        </article>

        <article class="dmc-destination">
          <div class="dmc-destination-image dmc-reveal">Avignon image placeholder</div>
          <div class="dmc-destination-copy dmc-reveal">
            <div class="dmc-destination-number">05.</div>
            <h3>Avignon</h3>
            <p>
              Heritage, villages and a more grounded Provence rhythm. Avignon is especially useful for inland programs
              built around gastronomy, culture and landscape.
            </p>
            <ul class="dmc-bullets">
              <li>Classic Provence programs</li>
              <li>Food and wine extensions</li>
              <li>Premium countryside itineraries</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="highlight">
    <div class="dmc-container">
      <div class="dmc-highlight dmc-reveal">
        <div>
          <div class="dmc-eyebrow">High-Touch Travel Support</div>
          <h2>Executive transport, hosted stays and bespoke regional programs</h2>
          <p>
            Some briefs require more than a standard itinerary. They need tighter guest handling, smoother movement,
            better pacing and a more elevated sense of care throughout the program.
          </p>
          <p>
            This is where we are especially useful for agencies, companies and premium private clients who need a local
            South of France partner they can rely on.
          </p>
          <div class="dmc-button-row">
            <a class="dmc-button dmc-button-primary" href="#contact">Discuss your project</a>
          </div>
        </div>
        <div class="dmc-highlight-visual">Premium program image placeholder</div>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="faq">
    <div class="dmc-container">
      <div class="dmc-reveal">
        <div class="dmc-eyebrow">FAQ</div>
        <h2>Questions we often receive</h2>
        <p>Short answers for international partners, planners and private clients.</p>
      </div>

      <div class="dmc-faq">
        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Do you only provide full DMC programs?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>No. We can support a full itinerary, transport-only work, selected local services or a specific regional extension.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Which destinations do you cover most strongly?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Our core focus here is Nice, Cannes, Monaco, Marseille and Avignon, with broader South of France routing available on request.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Can you support English-speaking overseas partners?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Yes. This page is designed specifically for English-speaking B2B and international inquiries.</p>
          </div>
        </article>

        <article class="dmc-faq-item dmc-reveal">
          <button class="dmc-faq-toggle" type="button" aria-expanded="false">
            <span>Do you handle executive transfers and chauffeur-led schedules?</span>
            <span>+</span>
          </button>
          <div class="dmc-faq-panel">
            <p>Yes. Private transport planning is one of the most important parts of our support offering.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="contact">
    <div class="dmc-container">
      <div class="dmc-reveal">
        <div class="dmc-eyebrow">Contact Us</div>
        <h2>Let’s imagine your next South of France program</h2>
        <p>
          We would be glad to support your agency, company or private client project with practical local input and
          refined on-the-ground coordination.
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
        </aside>

        <div class="dmc-form-shell dmc-reveal">
          <div class="dmc-tally-wrap">
            <iframe
              data-tally-src="https://tally.so/r/YOUR_TALLY_FORM_ID?transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="700"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="South of France DMC Inquiry"
              style="border:0;background:transparent;"
            ></iframe>
          </div>

          <p class="dmc-form-note">
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
    "areaServed": ["Nice", "Cannes", "Monaco", "Marseille", "Avignon"],
    "serviceType": [
      "Destination management company",
      "Ground handling",
      "Private transport",
      "Corporate travel support"
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
