# Deployment Guide - hivegrid.space

## 🚀 Deployment Architecture

- **Source**: GitHub repository
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages
- **CDN**: Cloudflare (proxy enabled)
- **Domain**: hivegrid.space
- **Framework**: Next.js 15 (Static Export)

## 📋 Prerequisites

- GitHub repository: `https://github.com/hivegridspace/website`
- Cloudflare account with hivegrid.space domain
- GitHub Pages enabled

## 🔧 Configuration Steps

### 1. GitHub Repository Setup

Push all changes to the main branch:

```bash
git add .
git commit -m "Configure static export and GitHub Actions workflow"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Build and deployment**:
   - Source: **GitHub Actions**
3. Save changes

The workflow will automatically trigger on push to `main` branch.

### 3. Cloudflare DNS Configuration

Configure DNS records in Cloudflare dashboard:

**Option A: CNAME (recommended)**
- Type: `CNAME`
- Name: `@` (or `hivegrid.space`)
- Target: `hivegridspace.github.io` (replace with your GitHub username)
- Proxy status: **Proxied** (🟠 orange cloud)
- TTL: Auto

**Option B: A Records (alternative)**
- Type: `A`
- Name: `@`
- IPv4 address: Add all four:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Proxy status: **Proxied** (🟠 orange cloud)
- TTL: Auto

### 4. Cloudflare SSL/TLS Settings

1. Go to **SSL/TLS** → **Overview**
2. Set encryption mode to: **Full** or **Full (strict)**
3. Go to **SSL/TLS** → **Edge Certificates**
4. Enable:
   - ✅ Always Use HTTPS
   - ✅ Automatic HTTPS Rewrites

### 5. Verify Custom Domain in GitHub

After DNS propagation (can take 5-60 minutes):

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, you should see: `hivegrid.space`
3. Wait for DNS check to complete
4. Enable **Enforce HTTPS** (checkbox will appear after DNS verification)

## 🔄 Deployment Workflow

The GitHub Actions workflow (`.github/workflows/pages.yml`) automatically:

1. **Triggers on**:
   - Push to `main` branch
   - Manual workflow dispatch

2. **Build process**:
   - Checks out code
   - Sets up Node.js 20 and pnpm 9
   - Installs dependencies with cache
   - Builds Next.js static export to `out/` directory
   - Uploads artifact to GitHub Pages

3. **Deploy process**:
   - Deploys artifact to GitHub Pages
   - Updates site at hivegrid.space

## 📦 Project Configuration

### next.config.mjs

```javascript
const nextConfig = {
  output: 'export',           // Static export for GitHub Pages
  trailingSlash: true,        // Better routing on static hosts
  images: {
    unoptimized: true,        // Required for static export
  },
  typescript: {
    ignoreBuildErrors: true,  // Build with TS errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip lint in CI
  },
}
```

### package.json Scripts

```bash
pnpm install   # Install dependencies
pnpm dev       # Development server (localhost:3000)
pnpm build     # Build static export (output: out/)
pnpm start     # Not used for static hosting
```

## 🔍 Verification

After deployment:

1. **Check workflow status**: 
   - Go to **Actions** tab in GitHub
   - Verify latest workflow completed successfully

2. **Test deployment**:
   ```bash
   curl -I https://hivegrid.space
   ```
   Should return `200 OK`

3. **Check DNS**:
   ```bash
   dig hivegrid.space
   nslookup hivegrid.space
   ```

4. **Visit site**: https://hivegrid.space

## 🐛 Troubleshooting

### Workflow fails

- Check Actions logs for specific errors
- Verify pnpm-lock.yaml is committed
- Ensure all dependencies are in package.json

### Custom domain not working

- Wait 5-60 minutes for DNS propagation
- Verify CNAME file exists in `public/CNAME`
- Check Cloudflare DNS settings
- Ensure proxy (orange cloud) is enabled

### 404 errors on routes

- Next.js routes work with `trailingSlash: true`
- Example: `/about` → `/about/`
- GitHub Pages serves `/about/` as `/about/index.html`

### SSL certificate issues

- Ensure Cloudflare SSL mode is **Full** or **Full (strict)**
- Enable "Always Use HTTPS" in Cloudflare
- Wait for GitHub's SSL certificate (can take up to 24h)

### Build errors

- Check TypeScript/ESLint errors locally
- `ignoreBuildErrors` should handle TS issues
- Verify all imports resolve correctly

## 📝 Important Files

```
.github/workflows/pages.yml   # GitHub Actions workflow
next.config.mjs               # Next.js configuration (static export)
public/CNAME                  # Custom domain for GitHub Pages
public/.nojekyll              # Disable Jekyll processing
package.json                  # Dependencies and scripts
```

## 🚫 Removed

- ❌ vercel.json (no longer needed)
- ❌ @vercel/analytics (removed from dependencies)

## 🔐 Security Notes

- GitHub Pages serves content over HTTPS only
- Cloudflare provides DDoS protection
- No server-side secrets needed (static site)
- All builds run in GitHub's secure runners

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
