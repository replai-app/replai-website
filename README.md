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

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Node version**: 18 or higher

### Environment Variables

If needed, add environment variables in the Cloudflare Pages dashboard under Settings > Environment Variables.

### Deployment

1. Connect your repository to Cloudflare Pages
2. Select the Next.js framework preset
3. Cloudflare will automatically detect and configure the build settings
4. Deploy!
