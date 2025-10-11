// Vercel serverless function to proxy Plausible analytics
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { domain, url, event, props, ...otherData } = req.body;

    // Validate required fields
    if (!domain || !url) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Prepare data for Plausible API (exact format required)
    const plausibleData = {
      domain: domain,
      url: url,
      referrer: otherData.referrer || null,
      screen_width: otherData.screen_width || null,
      screen_height: otherData.screen_height || null,
      viewport_width: otherData.viewport_width || null,
      viewport_height: otherData.viewport_height || null,
      timezone: otherData.timezone || null,
      user_agent: otherData.user_agent || req.headers["user-agent"] || null,
    };

    // Add event data if it's a custom event
    if (event) {
      plausibleData.event_name = event;
      if (props && Object.keys(props).length > 0) {
        plausibleData.props = props;
      }
    }

    // Send to Plausible with proper headers
    const response = await fetch("https://plausible.io/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": req.headers["user-agent"] || "Plausible Proxy",
        "X-Forwarded-For":
          req.headers["x-forwarded-for"] ||
          req.headers["x-real-ip"] ||
          req.connection?.remoteAddress ||
          "127.0.0.1",
        "X-Real-IP":
          req.headers["x-real-ip"] ||
          req.connection?.remoteAddress ||
          "127.0.0.1",
      },
      body: JSON.stringify(plausibleData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Plausible API error:",
        response.status,
        response.statusText,
        errorText
      );
      return res.status(500).json({
        error: "Failed to send to Plausible",
        details: errorText,
      });
    }

    // Return success
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Plausible proxy error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
