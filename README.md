# REPLAI

A Next.js application deployed on Cloudflare Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages Deployment

This project is configured for Cloudflare Pages deployment.

### Build Settings

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 18 or higher

### Environment Variables

Add the following environment variable in the Cloudflare Pages dashboard:

- **Name**: `NEXT_PUBLIC_WAITLIST_API_URL`
- **Value**: `https://api.freewaitlists.com/waitlists/cmilq2ywx013fls01weqxj0oc`

### Deployment

1. Connect your repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
3. Add the environment variable above in Settings → Environment Variables
4. Deploy!
