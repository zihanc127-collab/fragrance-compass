<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/de3a7865-dfbd-4c5c-84cf-79f98ece0e92

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# Fragrance Compass

The React client uses the Fragrance Compass REST API backed by the curated 200-record `launch-v1` catalog.

```bash
npm install
npm run dev
```

Client: `http://localhost:3000`; API: `http://localhost:8787`. For a separately hosted API, set `VITE_API_BASE_URL` from `.env.example`.
