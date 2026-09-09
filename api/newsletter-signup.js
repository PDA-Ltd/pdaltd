const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body || {};

  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "A valid email is required" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("Missing BREVO_API_KEY environment variable");
    return res.status(500).json({ error: "Newsletter service is not configured" });
  }

  try {
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: name ? { FIRSTNAME: name } : undefined,
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error("Brevo API error:", brevoRes.status, errText);
      return res.status(502).json({ error: "Failed to subscribe. Please try again later." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return res.status(500).json({ error: "Failed to subscribe. Please try again later." });
  }
}
