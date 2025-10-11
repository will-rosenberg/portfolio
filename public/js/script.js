// Plausible Analytics - First-party proxy
// This script proxies requests to Plausible to avoid ad blocker blocking

(function () {
  "use strict";

  // Get the domain from the script tag
  var script = document.currentScript;
  var domain = script.getAttribute("data-domain");

  if (!domain) {
    console.warn("Plausible: No domain specified");
    return;
  }

  // Initialize Plausible
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };

  // Track pageview
  function trackPageview() {
    if (window.plausible_ignore) return;

    var data = {
      domain: domain,
      url: window.location.href,
      referrer: document.referrer || null,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      user_agent: navigator.userAgent,
    };

    // Send to your proxy endpoint
    fetch("/api/plausible", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(function (error) {
      // Log error in development
      if (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      ) {
        console.warn("Plausible tracking error:", error);
      }
    });
  }

  // Track custom events
  window.plausible = function (eventName, options) {
    if (window.plausible_ignore) return;

    var data = {
      domain: domain,
      url: window.location.href,
      event: eventName,
      props: options?.props || {},
    };

    fetch("/api/plausible", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(function (error) {
      // Log error in development
      if (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      ) {
        console.warn("Plausible event tracking error:", error);
      }
    });
  };

  // Track initial pageview
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", trackPageview);
  } else {
    trackPageview();
  }

  // Track SPA navigation (for React Router)
  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(history, arguments);
    setTimeout(trackPageview, 0);
  };

  history.replaceState = function () {
    originalReplaceState.apply(history, arguments);
    setTimeout(trackPageview, 0);
  };

  window.addEventListener("popstate", function () {
    setTimeout(trackPageview, 0);
  });
})();
