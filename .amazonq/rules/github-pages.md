# GitHub Pages Deployment Guide

## GitHub CLI Authentication
First, ensure you have the GitHub CLI installed and are authenticated:

```bash
gh auth status
```

If you are not authenticated, you can authenticate interactively:
```bash
gh auth login
```

## Deployment Process
1. **Build and commit changes**:
   ```bash
   npm run build
   git add .
   git commit -m "Deploy changes"
   git push
   ```

2. **Monitor deployment using GitHub CLI**:
   ```bash
   # List recent workflow runs
   gh run list --limit 5
   
   # Watch specific deployment (get ID from list)
   gh run watch <run-id>
   ```

3. **Verify deployment completion**:
   - Look for "✓ Deploy" status in workflow output
   - Both build and deploy steps must complete successfully

## Testing Deployed Site
- **Main site**: https://wolff.sh (serves different content)
- **React app**: https://wolff.sh/andii/ (note trailing slash required)
- **Test command**: `curl -s https://wolff.sh/andii/`

## Expected Output
Successful deployment should return HTML with:
- `<title>Andii's Site</title>`
- `<div id="root"></div>`
- Bundled assets: `/andii/assets/index-*.js` and `/andii/assets/index-*.css`

## Configuration Requirements
- GitHub Pages source must be set to "Deploy from a branch (gh-pages)"
- Repository settings: https://github.com/MatthewWolff/andii/settings/pages
- Custom domain: wolff.sh (configured via CNAME file in workflow)
- Workflow uses peaceiris/actions-gh-pages@v4 action

## Deployment Workflow
Uses `.github/workflows/deploy.yml` with peaceiris/actions-gh-pages:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: wolff.sh
```

## Troubleshooting
- 301 redirect on `/andii` → use `/andii/` with trailing slash
- Asset 404 errors → ensure `base: '/andii/'` in vite.config.js
- "Site not found" → check GitHub Pages source is set to gh-pages branch
- Deployment caching → HTML may show stale content but assets update correctly