# Project Overview

## Project Type
Vite + React single-page application with static HTML subpage

## Purpose
Personal website for Andii with multiple pages, hosted at wolff.sh

## Technology Stack
- React 18
- Vite 5
- React Router DOM
- Bootstrap 5.3.0 (on birthday page)
- Google Fonts (Bubblegum Sans, Quantico)
- Google Analytics (gtag.js)

## Project Structure
- `src/` - React application source
  - `main.jsx` - Entry point
  - `App.jsx` - Main app with routing
  - `pages/` - Page components
    - `Home.jsx` - Menu page with navigation
    - `AndiiBirthday.jsx` - Redirects to static HTML birthday page
    - `Xmas2025.jsx` - Christmas page with scrolling image slideshow
- `public/` - Static assets
  - `andii-birthday/` - Birthday page assets (HTML, images)
  - `xmas-2025/` - Christmas slideshow images (23 photos)
  - `favicon/` - Favicon assets

## Pages
- **Home** - Purple background with pink accent buttons, Bubblegum Sans font
- **Birthday** - Original static HTML birthday page
- **Christmas 2025** - Scrolling image slideshow with opaque text overlay, lazy loading

## Deployment
- GitHub Pages via GitHub Actions
- Workflow: `.github/workflows/deploy.yml`
- Build command: `npm run build`
- Deploy command: `npm run deploy`

## Development
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
