# Fragrance Compass

Fragrance Compass is a personalized perfume recommendation website designed for fragrance beginners. It translates familiar scent preferences, sensitivities, moods, occasions, seasons, and budget preferences into a concise shortlist drawn from a curated catalog of 200 real fragrances.

## Live Demo

[Open Fragrance Compass](https://fragrance-compass-three.vercel.app)

## Project overview

The project combines a multilingual React application with a lightweight REST API. Its deterministic, rule-based recommendation engine uses controlled `launch-v1` fragrance metadata rather than external fragrance APIs or generated product claims. Official brand product pages provide the destination for further product information.

## Features

- Six-step scent preference quiz
- Personalized recommendation shortlists and batch exploration
- Curated catalog of 200 fragrances from 18 brands
- Searchable perfume directory
- Budget-aware recommendations with adjacent-tier fallback
- Brand-diversified recommendation results
- English, Simplified Chinese, Traditional Chinese, French, German, and Spanish interface support
- Localized scent keywords and profile summaries
- Verified official brand product links
- Custom bottle silhouettes without unauthorized product imagery

## Tech stack

**Frontend:** React 19, Vite, TypeScript, and Tailwind CSS.

**Backend:** Node.js 20+, Express, TypeScript, and an in-memory JSON catalog.

## Architecture

```text
React UI
  ↓
perfumeService
  ↓
Fragrance Compass REST API
  ↓
Catalog and recommendation services
  ↓
Curated launch-v1 JSON catalog
```

The frontend accesses perfume data through `perfumeService`; UI components do not read the catalog or call third-party fragrance services directly. The backend loads the curated runtime catalog into memory and exposes stable API responses that can later be backed by a database without changing the frontend contract.

## Recommendation logic overview

Quiz answers are normalized to the controlled `launch-v1` taxonomy. The backend then:

1. Builds a budget-aware candidate pool.
2. Scores liked scent directions and applies dislike penalties.
3. Evaluates sweetness, freshness, floral tolerance, mood, season, and occasion alignment.
4. Applies a beginner-friendliness contribution.
5. Sorts candidates by deterministic raw score.
6. Selects a brand-diversified shortlist of up to 12 fragrances.
7. Returns recommendations in batches with display match scores.

The match score is calculated from the current quiz answers and is not stored in the catalog.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/health` | Service status and catalog count |
| `GET` | `/api/perfumes` | Catalog with optional brand, family, price-tier, season, and pagination parameters |
| `GET` | `/api/perfumes/:id` | Perfume lookup by canonical ID |
| `GET` | `/api/perfumes/search?q=` | Search across names, brands, keywords, tags, and families |
| `POST` | `/api/recommendations` | Ranked recommendations from quiz answers |

## Local development

Requirements: Node.js 20.19 or newer.

```bash
npm install
cp .env.example .env
npm run dev
```

Local services:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8787`
- Health check: `http://localhost:8787/api/health`

Useful commands:

```bash
npm run dev:client
npm run dev:server
npm run lint
npm test
npm run build
npm run start:server
```

For a separately hosted backend, set `VITE_API_BASE_URL` to its public origin. `FRONTEND_ORIGIN` configures the production frontend origin permitted by backend CORS.

## Data/catalog description

The runtime catalog contains exactly 200 accepted real fragrances. Each record includes public identity and official-link fields plus controlled recommendation metadata such as families, scent tags, sweetness, freshness, intensity, price tier, seasons, occasions, moods, avoid traits, and beginner friendliness.

The catalog does not store live prices, availability, product descriptions, note pyramids, or fixed match scores. Brand names, canonical perfume names, concentrations, and official URLs are preserved from the finalized source catalog. This release does not integrate an external fragrance API.

## Deployment

The intended production architecture is:

- **Frontend:** Vercel, built with `npm run build:client` and served from `dist`
- **Backend:** Render Node web service, built with `npm run build:server` and started with `npm run start:server`

Vercel environment variable:

```text
VITE_API_BASE_URL=https://your-render-service.onrender.com
```

Render environment variable:

```text
FRONTEND_ORIGIN=https://your-vercel-project.vercel.app
```

Render supplies `PORT` automatically. The backend binds to `0.0.0.0` and uses port `8787` only as the local fallback. The production health-check path is `/api/health`.

## Project status

Fragrance Compass is a portfolio-ready full-stack V1. The frontend, REST API, curated catalog, search, recommendation flow, localization, production builds, and automated backend tests are complete. Future work may include deployment monitoring, recommendation calibration, and migration from the in-memory catalog to persistent storage while preserving the existing API contract.
