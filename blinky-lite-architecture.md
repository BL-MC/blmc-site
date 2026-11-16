---
layout: default
title: Blinky-Lite Architecture and Security
description: An overview of Blinky-Lite messaging, access controls and layered security architecture.
permalink: /blinky-lite/architecture/
---

<section class="hero">
  <div class="container">
    <p class="eyebrow">Blinky-Lite™</p>

    <h1>Architecture for remote monitoring and control.</h1>

    <p class="lead">
      Blinky-Lite combines device-initiated messaging, web
      applications and role-based permissions in a layered
      approach to control-system access.
    </p>

    <div class="actions">
      <a class="button button-secondary open-video"
         href="https://player.vimeo.com/video/913220335?dnt=1"
         data-video-title="Blinky-Lite Architecture">
        Watch the architecture video
      </a>

      <a class="button"
        href="{{ '/blinky-lite/' | relative_url }}#features">
        Explore platform features
      </a>

      <a class="button button-secondary"
         href="mailto:info@bl-mc.se?subject=Blinky-Lite%20architecture%20enquiry">
        Discuss your requirements
      </a>
    </div>
  </div>
</section>

<section class="section section-white">
  <div class="container">
    <p class="eyebrow">The basic idea</p>

    <h2>Connect equipment and people through controlled pathways.</h2>

    <p class="section-intro">
      Devices communicate through a message broker. Blinky-Lite
      applications present information and controls to users, with
      permissions governing what those users can access.
    </p>

    <div class="cards">
      <article class="card">
        <h3>1. Devices</h3>
        <p>
          Devices initiate connections from inside the facility and
          exchange messages through an MQTT broker.
        </p>
      </article>

      <article class="card">
        <h3>2. Platform</h3>
        <p>
          Blinky-Lite brings together application, data and
          notification services to support monitoring and operation.
        </p>
      </article>

      <article class="card">
        <h3>3. Authorized users</h3>
        <p>
          Users interact through web applications. Role-based
          permissions help determine what they can see and do.
        </p>
      </article>
    </div>
  </div>
</section>

<section class="section" id="security">
  <div class="container two-column">
    <div>
      <p class="eyebrow">Device communication</p>

      <h2>Connections initiated from inside.</h2>

      <p>
        Blinky-Lite uses MQTT publish-subscribe messaging. In the
        architecture described here, devices initiate connections to
        a broker rather than requiring users to connect directly to
        each device for data.
      </p>

      <p>
        This design can reduce the need to expose edge devices
        directly for remote access. Device authentication, broker
        permissions and network configuration remain important.
      </p>
    </div>

    <div class="card">
      <h3>Layered security</h3>

      <p>
        Role-based permissions, authentication, controlled routing
        and network isolation can work together to limit access.
      </p>

      <p>
        No communication protocol or architecture guarantees security
        on its own. Protection depends on the specific deployment,
        configuration, maintenance and operating practices.
      </p>
    </div>
  </div>
</section>

<section class="section section-white">
  <div class="container">
    <p class="eyebrow">Platform components</p>

    <h2>Services working together.</h2>

    <p class="section-intro">
      The architecture uses containerized services for platform
      functions. The exact configuration depends on the deployment.
    </p>

    <div class="cards">
      <article class="card">
        <h3>Application server</h3>
        <p>
          Serves the web applications users interact with.
        </p>
      </article>

      <article class="card">
        <h3>Database and notifications</h3>
        <p>
          Support data and application configuration, alarms and
          notification functions.
        </p>
      </article>

      <article class="card">
        <h3>Message broker</h3>
        <p>
          Routes publish-subscribe messages between devices and
          platform components.
        </p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container two-column">
    <div>
      <p class="eyebrow">Access and deployment</p>

      <h2>Designed for more than one environment.</h2>

      <p>
        A deployment can serve users within a facility and can also
        be configured for remote access using additional controlled
        network pathways.
      </p>

      <p>
        Multiple Blinky-Lite systems can also be connected through
        broker arrangements that share selected information.
        The appropriate configuration depends on the application
        and security requirements.
      </p>
    </div>

    <div class="card">
      <h3>Explore the technical documentation</h3>

      <p>
        The existing Blinky-Lite documentation remains available
        while we develop this unified website.
      </p>

      <a class="text-link" href="https://blinky-lite.org/docs/">
        Open the documentation →
      </a>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container">
    <p class="eyebrow">Discuss your system</p>

    <h2>Every deployment has different requirements.</h2>

    <p>
      Talk to BL Monitor and Control about your equipment,
      connectivity, remote-access needs and integration plans.
    </p>

    <a class="button button-light"
       href="mailto:info@bl-mc.se?subject=Blinky-Lite%20architecture%20enquiry">
      Email us
    </a>
  </div>
</section>