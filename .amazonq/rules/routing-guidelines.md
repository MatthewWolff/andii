# Routing Guidelines for GitHub Pages + React Router

## Route Configuration Rules

### 1. Always Use Trailing Slashes
- **React Routes**: All routes MUST end with trailing slash: `/xmas-2025/`
- **Navigation Links**: All Link components MUST use trailing slash: `to="/xmas-2025/"`
- **Reason**: GitHub Pages automatically redirects URLs without trailing slash to ones with trailing slash

### 2. Static HTML Files for Social Previews
For every new page route, create a static HTML file to enable social media previews and avoid 404s:

**File Location**: `public/{route-name}/index.html`

**Template**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://wolff.sh/andii/{route-name}/">
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="https://wolff.sh/andii/favicon/web-app-manifest-512x512.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://wolff.sh/andii/{route-name}/">
    <meta property="twitter:title" content="Page Title">
    <meta property="twitter:description" content="Page description">
    <meta property="twitter:image" content="https://wolff.sh/andii/favicon/web-app-manifest-512x512.png">
    
    <script>
        // Redirect to main app with route in hash
        window.location.replace('/andii/#/andii/{route-name}/');
    </script>
</head>
<body>
    <h1>Page Title</h1>
    <p>Redirecting to the full experience...</p>
</body>
</html>
```

### 3. Hash Routing for 404 Redirects
The App component handles hash-based redirects from static HTML files:

```javascript
useEffect(() => {
    // Handle 404 redirects with hash
    const hash = window.location.hash
    if (hash && hash.startsWith('#/andii/')) {
        const path = hash.replace('#/andii', '')
        navigate(path, { replace: true })
    }
}, [navigate])
```

### 4. 404.html Configuration
The 404.html preserves failed routes in hash format:

```html
<script>
    // Preserve the path for React Router
    const path = window.location.pathname;
    const search = window.location.search;
    window.location.replace('/andii/' + (search ? search + '&from=404' : '?from=404') + '#' + path);
</script>
```

## Benefits of This Approach

1. **Social Media Previews**: Static HTML files provide proper meta tags for social platforms
2. **SEO Friendly**: Search engines can crawl static HTML with proper titles and descriptions
3. **No 404 Errors**: Direct links to routes work without JavaScript execution
4. **User Experience**: JavaScript-enabled users get redirected to full React app
5. **Refresh Support**: Refreshing on any route works correctly

## Checklist for New Pages

When adding a new page route:
- [ ] Create React route with trailing slash: `/new-page/`
- [ ] Update navigation links with trailing slash: `to="/new-page/"`
- [ ] Create `public/new-page/index.html` with proper meta tags and redirect
- [ ] Test social media preview functionality
- [ ] Verify refresh works on the new route
- [ ] Test direct URL access works

## Common Pitfalls to Avoid

- **Never** create routes without trailing slashes
- **Never** forget to create the static HTML file for new routes
- **Always** use the hash redirect format: `/andii/#/andii/{route}/`
- **Always** include proper Open Graph and Twitter meta tags
- **Always** test deployment and verify static files are served correctly
