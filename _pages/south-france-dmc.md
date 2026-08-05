---
layout: default
title: South of France DMC & Local Ground Handling | Aoli Travel
permalink: /en/south-france-dmc/
lang: en
description: South of France DMC and local ground handling support for agencies, planners and private clients who need realistic routing, private transport and local execution across Provence and the French Riviera.
nav: false
---

<style>
  .dmc-page {
    --dmc-accent: #6f42c1;
    --dmc-soft: rgba(111, 66, 193, 0.055);
    --dmc-line: rgba(0, 0, 0, 0.08);
    --dmc-text-soft: #555;
  }

  .dmc-page a {
    text-decoration: none;
  }

  .dmc-section {
    border-top: 1px solid var(--dmc-line);
    margin: 2.8rem 0 0;
    padding-top: 2.8rem;
  }

  .dmc-section:first-of-type {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  .dmc-eyebrow {
    color: var(--dmc-accent);
    display: block;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: 0.55rem;
    text-transform: uppercase;
  }

  .dmc-lead {
    color: var(--dmc-text-soft);
    font-size: 1.05rem;
    line-height: 1.85;
  }

  .dmc-hero {
    align-items: center;
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
  }

  .dmc-hero h1 {
    font-size: clamp(2.25rem, 4vw, 4rem);
    line-height: 1.08;
    margin-bottom: 1rem;
  }

  .dmc-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1.45rem 0 0;
  }

  .dmc-actions .btn {
    align-items: center;
    border-radius: 0.75rem;
    display: inline-flex;
    font-size: 1.02rem;
    font-weight: 500;
    justify-content: center;
    line-height: 1.35;
    min-height: 3rem;
    padding: 0.65rem 1.25rem;
  }

  .dmc-actions .btn-primary {
    background: var(--dmc-accent) !important;
    background-color: var(--dmc-accent) !important;
    border-color: var(--dmc-accent) !important;
    color: #fff !important;
    box-shadow: 0 0.25rem 0.9rem rgba(111, 66, 193, 0.22);
  }

  .dmc-actions .dmc-email-button,
  .dmc-actions .dmc-email-button:hover,
  .dmc-actions .dmc-email-button:focus {
    color: #fff !important;
    transform: none !important;
    transition: none !important;
  }

  .dmc-actions .btn-outline-primary {
    border-color: var(--dmc-accent) !important;
    color: var(--dmc-accent) !important;
  }

  .dmc-actions .btn-outline-primary:hover,
  .dmc-actions .btn-outline-primary:focus {
    background: var(--dmc-accent) !important;
    background-color: var(--dmc-accent) !important;
    border-color: var(--dmc-accent) !important;
    color: #fff !important;
  }

  .dmc-hero-img,
  .dmc-feature-img,
  .dmc-card-img {
    border-radius: 0.9rem;
    overflow: hidden;
  }

  .dmc-hero-img figure,
  .dmc-feature-img figure,
  .dmc-card-img figure {
    height: 100% !important;
    margin: 0 !important;
    overflow: hidden !important;
    width: 100% !important;
  }

  .dmc-hero-img {
    height: 360px;
  }

  .dmc-hero-img figure picture,
  .dmc-hero-img figure img,
  .dmc-feature-img figure picture,
  .dmc-feature-img figure img,
  .dmc-card-img figure picture,
  .dmc-card-img figure img,
  .dmc-hero-img img,
  .dmc-feature-img img,
  .dmc-card-img img {
    display: block;
    height: 100% !important;
    object-fit: cover;
    object-position: center center;
    width: 100% !important;
  }

  .dmc-note {
    background: var(--dmc-soft);
    border-left: 4px solid var(--dmc-accent);
    border-radius: 0.45rem;
    line-height: 1.8;
    margin: 1.3rem 0;
    padding: 1rem 1.15rem;
  }

  .dmc-grid-3,
  .dmc-grid-2 {
    align-items: stretch;
    display: grid;
    gap: 1.35rem;
  }

  .dmc-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .dmc-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dmc-card {
    height: 100%;
  }

  .dmc-card .card-body {
    line-height: 1.75;
  }

  .dmc-card-img {
    height: 190px;
    margin-bottom: 1rem;
  }

  .dmc-service-list {
    display: grid;
    gap: 0;
    margin-top: 1.4rem;
  }

  .dmc-service-row {
    border-top: 1px solid var(--dmc-line);
    display: grid;
    gap: 1rem;
    grid-template-columns: 5rem minmax(0, 1fr);
    padding: 1.15rem 0;
  }

  .dmc-service-row:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .dmc-service-label {
    color: var(--dmc-accent);
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .dmc-feature {
    align-items: center;
    display: grid;
    gap: 1.75rem;
    grid-template-columns: minmax(0, 1.05fr) minmax(330px, 0.95fr);
  }

  .dmc-feature-img {
    height: 310px;
  }

  .dmc-faq details {
    border-bottom: 1px solid var(--dmc-line);
    padding: 0.9rem 0;
  }

  .dmc-faq summary {
    cursor: pointer;
    font-weight: 600;
  }

  .dmc-faq p {
    margin: 0.65rem 0 0;
  }

  .dmc-contact-card {
    border: 1px solid var(--dmc-line);
    border-radius: 0.9rem;
    height: 100%;
    padding: 1.35rem;
  }

  .dmc-contact-list {
    list-style: none;
    margin: 1rem 0 0;
    padding: 0;
  }

  .dmc-contact-list li + li {
    margin-top: 0.55rem;
  }

  .dmc-contact-list a,
  .dmc-contact-card a {
    color: var(--dmc-accent);
    font-weight: 600;
  }

  .dmc-inquiry-list {
    line-height: 1.85;
    margin-bottom: 0;
    padding-left: 1.2rem;
  }

  @media (max-width: 992px) {
    .dmc-hero,
    .dmc-feature,
    .dmc-grid-2,
    .dmc-grid-3 {
      grid-template-columns: 1fr;
    }

    .dmc-hero-img,
    .dmc-feature-img {
      height: 300px;
    }
  }

  @media (max-width: 576px) {
    .dmc-section {
      margin-top: 2.2rem;
      padding-top: 2.2rem;
    }

    .dmc-hero-img,
    .dmc-feature-img,
    .dmc-card-img {
      height: 220px;
    }

    .dmc-service-row {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="dmc-page">
  <section class="dmc-section">
    <div class="dmc-hero">
      <div>
        <span class="dmc-eyebrow">South of France DMC Services</span>
        <h1>South of France DMC services</h1>
        <p class="dmc-lead">
          On-the-Ground Expertise in Provence & the Côte d’Azur
        </p>
        <p>
          Based in Marseille, Aoli Travel supports international agencies and private clients with expert ground handling. We bridge local insight with operational precision—delivering realistic timing, private chauffeured transport, and thoughtful coordination from arrival to departure.
        </p>
        <div class="dmc-actions">
          <a class="btn btn-primary" href="#contact">Contact us</a>
          <a class="btn btn-outline-primary" href="#services">View services</a>
        </div>
      </div>

      <div class="dmc-hero-img">
        {% include figure.liquid loading="eager" path="assets/img/110nice-history/nice-0.webp" title="South of France DMC support on the French Riviera" class="img-fluid rounded z-depth-1" alt="Nice and the French Riviera coastline for South of France DMC services" %}
      </div>
    </div>

    <div class="dmc-grid-3 mt-4">
      <div class="card dmc-card">
        <div class="card-body">
          <h3 class="card-title h5">Local judgment</h3>
          <p class="card-text">Routes are shaped by real driving time, parking, crowds, seasonality and guest pace.</p>
        </div>
      </div>
      <div class="card dmc-card">
        <div class="card-body">
          <h3 class="card-title h5">Agency support</h3>
          <p class="card-text">Practical local insight for overseas partners, planners and private client programs.</p>
        </div>
      </div>
      <div class="card dmc-card">
        <div class="card-body">
          <h3 class="card-title h5">Riviera + Provence</h3>
          <p class="card-text">Focused coverage from Marseille and Avignon to Nice, Cannes, Èze and Monaco.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="about">
    <div class="dmc-grid-2">
      <div>
        <span class="dmc-eyebrow">Who We Are</span>
        <h2>Designed around the real travel day</h2>
        <p>
          A South of France itinerary should not only look elegant on paper. It should feel comfortable on the day: the right stops, the right timing, the right vehicle access and enough space for guests to enjoy the place.
        </p>
        <p>
          We plan with execution in mind. Route, timing, transport and guest rhythm are considered together, so the final program feels polished, natural and manageable.
        </p>
      </div>

      <div class="dmc-note">
        <strong>Our focus</strong>
        <ul class="mb-0 mt-2">
          <li>Agency and white-label local support</li>
          <li>Private clients, families and executive travel</li>
          <li>Private transport, route planning and ground handling</li>
          <li>Chinese, English and French communication</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="role">
    <span class="dmc-eyebrow">Our Role</span>
    <h2>From destination wish list to workable program</h2>
    <p>
      We help partners turn ideas into routes that can be delivered with care, balancing destination appeal, travel time, vehicle access, hotel location and guest profile.
    </p>

    <div class="dmc-grid-3 mt-4">
      <div class="card dmc-card">
        <div class="card-body">
          <h3 class="card-title h5">Clarity before elegance</h3>
          <p class="card-text">A refined program begins with clear timing, realistic distances, confirmed meeting points and honest routing.</p>
        </div>
      </div>
      <div class="card dmc-card">
        <div class="card-body">
          <h3 class="card-title h5">Designed around guests</h3>
          <p class="card-text">Families, executives, incentive guests and private groups do not travel in the same rhythm. The program should reflect that.</p>
        </div>
      </div>
      <div class="card dmc-card">
        <div class="card-body">
          <h3 class="card-title h5">Local flexibility</h3>
          <p class="card-text">Weather, traffic, hotel location and guest energy can change a day. A strong local plan leaves room to adjust.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="dmc-section" id="services">
    <span class="dmc-eyebrow">Our Services</span>
    <h2>Ground services for agencies and private programs</h2>
    <p>We support complete programs or selected services, depending on the brief, dates, group profile and season.</p>

    <div class="dmc-service-list">
      <article class="dmc-service-row">
        <div class="dmc-service-label">01</div>
        <div>
          <h3 class="h5">Program planning and local routing</h3>
          <p>Route structure, destination sequence, timing and local feasibility checks before the program is confirmed.</p>
        </div>
      </article>
      <article class="dmc-service-row">
        <div class="dmc-service-label">02</div>
        <div>
          <h3 class="h5">Private transport and chauffeur-led touring</h3>
          <p>Airport pickups, intercity transfers, chauffeur-led touring days and multi-day transport planning.</p>
        </div>
      </article>
      <article class="dmc-service-row">
        <div class="dmc-service-label">03</div>
        <div>
          <h3 class="h5">Hosted travel and incentive-style programs</h3>
          <p>Hosted programs designed to feel cared for, well-paced and memorable.</p>
        </div>
      </article>
      <article class="dmc-service-row">
        <div class="dmc-service-label">04</div>
        <div>
          <h3 class="h5">Bespoke support for private clients</h3>
          <p>Flexible local support for clients who value discretion, comfort and direct communication.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="dmc-section" id="destinations">
    <span class="dmc-eyebrow">Where We Work Best</span>
    <h2>Provence and the French Riviera</h2>
    <p>
      Our strongest area is the natural connection between Provence and the French Riviera: elegant day programs, multi-day private tours and regional extensions.
    </p>

    <div class="dmc-grid-3 mt-4">
      <article class="card dmc-card">
        <div class="card-body">
          <div class="dmc-card-img">
            {% include figure.liquid loading="lazy" path="assets/img/98monaco-top-18/monaco-0.webp" title="Monaco DMC programs" class="img-fluid rounded z-depth-1" alt="Monaco and the Mediterranean coastline for South of France DMC programs" %}
          </div>
          <h3 class="card-title h5">Monaco</h3>
          <p class="card-text">Prestige, sea views and a strong sense of occasion for executive hosting, VIP stays and premium programs.</p>
        </div>
      </article>

      <article class="card dmc-card">
        <div class="card-body">
          <div class="dmc-card-img">
            {% include figure.liquid loading="lazy" path="assets/img/97nice-old-port/2426.jpg" title="Nice DMC programs" class="img-fluid rounded z-depth-1" alt="Nice old port and French Riviera coastline for DMC programs" %}
          </div>
          <h3 class="card-title h5">Nice</h3>
          <p class="card-text">A practical Riviera base with airport access, hotels, sea views and easy connections to Monaco, Èze and Cannes.</p>
        </div>
      </article>

      <article class="card dmc-card">
        <div class="card-body">
          <div class="dmc-card-img">
            {% include figure.liquid loading="lazy" path="assets/img/81cannes-vue-mer/cannes-vue-mer-0.png" title="Cannes DMC programs" class="img-fluid rounded z-depth-1" alt="Cannes marina and French Riviera event destination" %}
          </div>
          <h3 class="card-title h5">Cannes</h3>
          <p class="card-text">Polished, recognisable and event-friendly, well suited to hospitality-led travel and premium leisure extensions.</p>
        </div>
      </article>

      <article class="card dmc-card">
        <div class="card-body">
          <div class="dmc-card-img">
            {% include figure.liquid loading="lazy" path="assets/img/17visit-marseille-top15-things-to-do/17-aolitravel.com-visit-marseille-top15-things-to-do-0.jpg" title="Marseille DMC programs" class="img-fluid rounded z-depth-1" alt="Marseille Old Port and Provence gateway for DMC services" %}
          </div>
          <h3 class="card-title h5">Marseille</h3>
          <p class="card-text">A gateway to Provence, the Calanques and the Mediterranean coast, especially for deeper regional programs.</p>
        </div>
      </article>

      <article class="card dmc-card">
        <div class="card-body">
          <div class="dmc-card-img">
            {% include figure.liquid loading="lazy" path="assets/img/75avignon-palais-des-papes/avignon-palais-des-papes-guide-1.webp" title="Avignon and Provence DMC programs" class="img-fluid rounded z-depth-1" alt="Palais des Papes in Avignon for Provence DMC programs" %}
          </div>
          <h3 class="card-title h5">Avignon</h3>
          <p class="card-text">The door to inland Provence: heritage sites, wine country, hilltop villages and a slower countryside rhythm.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="dmc-section" id="highlight">
    <div class="dmc-feature">
      <div>
        <span class="dmc-eyebrow">High-Touch Travel Support</span>
        <h2>More than transport. Local judgment throughout.</h2>
        <p>
          A vehicle is only one part of a good South of France program. What matters is the order of the day, the time left in each place, and the ability to adjust when weather, traffic or crowds change.
        </p>
        <p>
          We are best suited to small and mid-size private programs, executive travel, family groups and agency-led requests that value clear communication, realistic routing and careful delivery.
        </p>
        <div class="dmc-actions">
          <a class="btn btn-primary" href="#contact">Discuss your project</a>
        </div>
      </div>
      <div class="dmc-feature-img">
        {% include figure.liquid loading="lazy" path="assets/img/0custom-travel/custom-travel-private-van-marseille.webp" title="Private transport in Marseille" class="img-fluid rounded z-depth-1" alt="Private transport and ground handling vehicle in Marseille for South of France DMC services" %}
      </div>
    </div>
  </section>

  <section class="dmc-section" id="faq">
    <span class="dmc-eyebrow">FAQ</span>
    <h2>Questions before working together</h2>
    <p>Clear expectations help a South of France program run smoothly, especially in peak season.</p>

    <div class="dmc-faq">
      <details>
        <summary>Do you only provide full DMC programs?</summary>
        <p>No. We can support a full itinerary, a transport-only assignment, selected local services or a specific Provence / Riviera extension. The scope is defined before quotation.</p>
      </details>
      <details>
        <summary>Which destinations do you cover most strongly?</summary>
        <p>Our core focus is the Provence and French Riviera connection: Marseille, Avignon, Aix-en-Provence, Nice, Cannes, Monaco, Èze and surrounding villages or coastal stops.</p>
      </details>
      <details>
        <summary>Can you support overseas agencies and private clients?</summary>
        <p>Yes. We support international inquiries and can communicate in English, Chinese and French, depending on the program and guest profile.</p>
      </details>
      <details>
        <summary>Do you handle private transfers and chauffeur-led touring?</summary>
        <p>Yes. We can arrange airport pickups, intercity transfers, chauffeur-led touring days and multi-day vehicle planning, with attention to luggage, timing and hotel access.</p>
      </details>
      <details>
        <summary>What type of clients are the best fit?</summary>
        <p>We are strongest with private families, small to mid-size groups, executive travel, agency-led bespoke requests and hosted programs that need local judgment rather than a rigid template.</p>
      </details>
      <details>
        <summary>Can you replace vehicles or guides in case of disruption?</summary>
        <p>We plan carefully and work with trusted local resources, but availability can be tight in peak season. If disruption occurs, we focus on safety, clear communication and the best workable adjustment.</p>
      </details>
      <details>
        <summary>How early should we contact you?</summary>
        <p>For June, July, August, major events and premium private programs, earlier is better. Good vehicles, drivers, guides and hotel locations become limited quickly.</p>
      </details>
    </div>
  </section>

  <section class="dmc-section" id="contact">
    <span class="dmc-eyebrow">Contact Us</span>
    <h2>Share your South of France brief</h2>
    <p>
      Send us the outline first. We will assess the route, timing, group profile and local feasibility before suggesting the best way to support the program.
    </p>

    <div class="dmc-grid-2 mt-4">
      <aside class="dmc-contact-card">
        <h3 class="h5">Aoli Travel</h3>
        <p>Local DMC, routing and ground support across Provence and the French Riviera.</p>
        <ul class="dmc-contact-list">
          <li><strong>Email:</strong> <a href="mailto:contact@aolitravel.com">contact@aolitravel.com</a></li>
          <li><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/33783271988" target="_blank" rel="noopener">+33 7 83 27 19 88</a></li>
          <li><strong>Website:</strong> <a href="https://aolitravel.com">aolitravel.com</a></li>
          <li><strong>Coverage:</strong> Nice, Cannes, Monaco, Marseille, Avignon, Provence and the French Riviera</li>
        </ul>
      </aside>

      <div class="dmc-contact-card">
        <h3 class="h5">What to include in your inquiry</h3>
        <p>A useful brief does not need to be perfect. Start with the essentials, and we will help assess the route, timing and service scope.</p>
        <ul class="dmc-inquiry-list">
          <li>Program dates, number of guests and guest profile</li>
          <li>Arrival and departure cities, airports, ports or train stations</li>
          <li>Key destinations: Provence, Marseille, Avignon, Nice, Cannes, Monaco, Èze or other stops</li>
          <li>Transport needs: transfers, chauffeur-led touring, multi-day routing or executive support</li>
          <li>Service scope: agency support, private client travel, corporate travel or hosted program</li>
        </ul>
        <div class="dmc-actions">
          <a class="btn btn-primary dmc-email-button" href="mailto:contact@aolitravel.com?subject=South%20of%20France%20DMC%20Inquiry">Email your brief</a>
          <a class="btn btn-outline-primary" href="https://wa.me/33783271988" target="_blank" rel="noopener">WhatsApp us</a>
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
    "description": "South of France DMC and local ground handling support for agencies, planners and private clients who need realistic routing, private transport and local execution across Provence and the French Riviera.",
    "areaServed": ["Nice", "Cannes", "Monaco", "Marseille", "Avignon", "Aix-en-Provence", "Provence", "French Riviera"],
    "serviceType": [
      "Destination management company",
      "Ground handling",
      "Private transport",
      "Corporate travel support",
      "Private chauffeur service",
      "Bespoke travel coordination"
    ],
    "email": "contact@aolitravel.com",
    "telephone": "+33783271988"
  }
  </script>
</div>
