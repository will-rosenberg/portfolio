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

    // Prepare data for Plausible
    const plausibleData = {
      domain: domain,
      url: url,
      ...otherData,
    };

    // Add event data if it's a custom event
    if (event) {
      plausibleData.name = event;
      if (props) {
        plausibleData.props = props;
      }
    }

    // Send to Plausible
    const response = await fetch("https://plausible.io/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": req.headers["user-agent"] || "Plausible Proxy",
        "X-Forwarded-For":
          req.headers["x-forwarded-for"] || req.connection.remoteAddress,
        "X-Real-IP": req.headers["x-real-ip"] || req.connection.remoteAddress,
      },
      body: JSON.stringify(plausibleData),
    });

    if (!response.ok) {
      console.error(
        "Plausible API error:",
        response.status,
        response.statusText
      );
      return res.status(500).json({ error: "Failed to send to Plausible" });
    }

    // Return success
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Plausible proxy error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
