# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Method 1: GitHub + Vercel (Auto-Deploy)

1. **Create GitHub Repository**
   ```bash
   cd exp2
   git init
   git add .
   git commit -m "Initial commit: Next.js MUI Dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cu-dashboard.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! Live in 2 minutes

### Method 2: Vercel CLI (Direct Deploy)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd exp2
vercel

# Follow prompts:
# - Login with GitHub/Email
# - Confirm project settings
# - Deploy
```

---

## Pre-Deployment Checklist

- [x] All TypeScript errors resolved
- [x] Build succeeds (`npm run build`)
- [x] No console errors in browser
- [x] All routes working
- [x] Forms validated properly
- [x] Mobile responsive
- [x] README.md complete

---

## Build Commands

### Test Production Build Locally

```bash
# Build project
npm run build

# Start production server
npm start

# Open http://localhost:3000
```

### Expected Build Output

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (6/6)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    [...]    [...]
├ ○ /dashboard                           [...]    [...]
├ ○ /login                               [...]    [...]
├ ○ /register                            [...]    [...]
├ ○ /profile                             [...]    [...]
└ ○ /settings                            [...]    [...]
```

---

## Environment Variables (If Needed)

Create `.env.local` file:

```env
# Example (for future API integration)
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Post-Deployment Testing

### Test All Routes:
- ✅ https://your-app.vercel.app/
- ✅ https://your-app.vercel.app/dashboard
- ✅ https://your-app.vercel.app/login
- ✅ https://your-app.vercel.app/register
- ✅ https://your-app.vercel.app/profile
- ✅ https://your-app.vercel.app/settings

### Test Functionality:
1. Navigation bar hamburger menu
2. Sidebar navigation
3. Dashboard stat cards hover
4. Table rendering
5. Modal dialog opening
6. Login form validation
7. Register form validation
8. Responsive design (mobile view)

---

## Troubleshooting

### Issue: Build Fails

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Module Not Found

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript Errors

**Solution:**
```bash
# Check for type errors
npm run type-check
```

---

## Domain Configuration (Optional)

After deploying to Vercel:

1. Go to Project Settings → Domains
2. Add custom domain: `your-domain.com`
3. Configure DNS records as instructed
4. Wait for SSL certificate (automatic)

---

## Performance Optimization

Already Implemented:
- ✅ Named imports (tree-shaking)
- ✅ Dynamic imports where needed
- ✅ Image optimization (Next.js Image)
- ✅ Route-based code splitting
- ✅ TypeScript strict mode

---

## Monitoring (Post-Deployment)

Vercel provides:
- Analytics dashboard
- Performance metrics
- Error tracking
- Build logs

Access at: `https://vercel.com/your-username/cu-dashboard`

---

## Alternative Deployment Platforms

### Netlify
```bash
npm run build
# Upload 'out' folder or connect GitHub
```

### Railway
```bash
# Connect GitHub repository
# Add build command: npm run build
# Add start command: npm start
```

### AWS Amplify
- Connect GitHub repository
- Auto-detects Next.js
- Configure build settings

---

## Continuous Deployment

Once connected to GitHub + Vercel:
- Every push to `main` → Auto-deploys
- Pull requests → Preview deployments
- Rollback available in Vercel dashboard

---

## Production URL Format

```
https://cu-dashboard-[random].vercel.app
or
https://your-custom-domain.com
```

---

## Final Deployment Steps

1. ✅ Test locally: `npm run build && npm start`
2. ✅ Commit code to GitHub
3. ✅ Deploy to Vercel
4. ✅ Test all routes on live URL
5. ✅ Share URL for evaluation

---

**Deployment Time:** ~2-3 minutes  
**Zero Config Required:** Next.js auto-detected by Vercel  
**Free Tier:** Sufficient for university projects
