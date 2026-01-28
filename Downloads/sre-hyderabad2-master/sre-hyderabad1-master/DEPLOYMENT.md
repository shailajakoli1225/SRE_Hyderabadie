# Netlify Deployment Guide

## Quick Deploy

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize Netlify** (first time only):
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Site name will be auto-generated (you can change it later)

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard

1. **Push to GitHub/GitLab/Bitbucket**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or latest LTS)

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy

### Option 3: Drag & Drop

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `dist` folder to Netlify

## Build Configuration

The project is already configured with `netlify.toml`:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18
- **SPA Routing**: All routes redirect to `index.html`
- **Security Headers**: Configured for security
- **Caching**: Optimized for static assets

## Environment Variables (if needed)

If you need to set environment variables:

1. **Via Netlify Dashboard**:
   - Go to Site settings → Environment variables
   - Add your variables

2. **Via Netlify CLI**:
   ```bash
   netlify env:set VARIABLE_NAME "value"
   ```

3. **Via netlify.toml** (not recommended for secrets):
   ```toml
   [build.environment]
     NODE_VERSION = "18"
     # Add your variables here
   ```

## Custom Domain Setup

1. **Add Custom Domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain

2. **Configure DNS**:
   - Add CNAME record pointing to your Netlify site
   - Or add A records for apex domain

## Continuous Deployment

Once connected to Git:
- **Automatic Deploys**: Every push to main branch
- **Deploy Previews**: For pull requests
- **Branch Deploys**: For other branches (optional)

## Performance Optimizations

The site is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Asset caching headers
- ✅ Minified production build

## Monitoring

- **Build Logs**: Available in Netlify dashboard
- **Deploy Status**: Shows in dashboard
- **Analytics**: Enable in site settings (if needed)

## Troubleshooting

### Build Fails
1. Check build logs in Netlify dashboard
2. Verify Node version (should be 18+)
3. Ensure all dependencies are in `package.json`
4. Check for TypeScript errors: `npm run build` locally

### 404 Errors on Routes
- Ensure `netlify.toml` has the redirect rule
- Verify `dist` folder contains `index.html`

### Assets Not Loading
- Check asset paths in build output
- Verify `base` in `vite.config.ts` (if using subdirectory)

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify images load properly
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify analytics (if enabled)
- [ ] Check performance in Lighthouse
- [ ] Test on different browsers

## Support

For issues:
1. Check Netlify build logs
2. Review deployment documentation
3. Check Netlify status page

