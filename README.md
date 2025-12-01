# REPLAI

A Next.js application deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel Deployment

This project is configured for Vercel deployment.

### Build Settings

- **Framework preset**: Next.js (auto-detected)
- **Build command**: `npm run build` (default)
- **Output directory**: Leave blank (auto-detected as `.next`)
- **Node version**: 18 or higher

### Important: Fix Output Directory Setting

If you encounter the error `routes-manifest.json couldn't be found in /out/`, check your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General** → **Build & Development Settings**
3. **Clear/remove** the "Output Directory" field (leave it blank)
4. Vercel will auto-detect `.next` as the output directory
5. Save and redeploy

### Environment Variables

Add the following environment variable in Vercel:

- **Name**: `NEXT_PUBLIC_WAITLIST_API_URL`
- **Value**: `https://api.freewaitlists.com/waitlists/cmilq2ywx013fls01weqxj0oc`

### Deployment

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js
3. Ensure "Output Directory" is **blank** in project settings
4. Add the environment variable above
5. Deploy!
