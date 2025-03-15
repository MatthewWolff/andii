# Testing and Deployment Guide

## Deployment Process
1. **Always wait for completion**: Never assume deployment worked without verification
2. **Monitor with GitHub CLI**: Use `gh run watch <run-id>` to track progress
3. **Verify output**: Always check the deployed page after successful completion

## Testing Deployed Changes
1. **Check HTML structure**: `curl -s https://wolff.sh/andii/ | head -15`
2. **Verify asset paths**: Look for correct `/andii/assets/` paths vs incorrect `/assets/`
3. **Test asset accessibility**: `curl -s -o /dev/null -w "%{http_code}" <asset-url>`
4. **Check for build markers**: Add timestamps or comments to track build versions

## Common Issues Discovered

### Asset Path Problems
- **Issue**: Assets referenced as `/assets/` instead of `/andii/assets/`
- **Cause**: Incorrect `base` configuration in `vite.config.js`
- **Solution**: Set `base: '/andii/'` for GitHub Pages subpath deployment

### Router Configuration
- **Issue**: "No routes matched location" errors
- **Cause**: Missing `basename` in BrowserRouter for subpath deployment
- **Solution**: Add `basename="/andii"` to BrowserRouter

### Deployment Caching Issues
- **Issue**: GitHub Pages serves stale content despite successful deployment
- **Symptoms**: 
  - Workflow shows success
  - Local build has correct paths and timestamps
  - Deployed site shows old asset names and wrong paths
- **Investigation**: Build artifacts may not be properly uploaded/deployed

### Image Path Issues
- **Issue**: Images 404 in development with absolute paths
- **Solution**: Use relative paths (`./xmas-2025/image.jpg`) for public assets

## Verification Checklist
After each deployment:
- [ ] Deployment workflow completed successfully
- [ ] Page loads without 404 errors
- [ ] Assets load correctly (check browser network tab)
- [ ] Build timestamp/marker appears in HTML source
- [ ] Router navigation works for all pages
- [ ] External redirects function properly

## Build Markers
Add HTML comments with timestamps to track deployments:
```html
<!-- Build: 2025-12-09T17:26:34 -->
```

## Asset Path Debugging
1. Check local build: `cat dist/index.html`
2. Check deployed version: `curl -s https://wolff.sh/andii/`
3. Compare asset paths and names
4. Test asset accessibility at both absolute and relative paths

## Correct Asset Paths
- **Deployed assets location**: `/andii/assets/index-*.js` and `/andii/assets/index-*.css`
- **Test command**: `curl -s -o /dev/null -w "%{http_code}" https://wolff.sh/andii/assets/index-DA3AKQq8.js`
- **Expected result**: HTTP 200

## Key Lessons
- GitHub Pages deployment can have caching/artifact issues
- Always verify the actual deployed content matches local build
- Use build markers to confirm deployment updates
- Test both development and production asset paths
- peaceiris/actions-gh-pages works better than native GitHub Actions for deployment
