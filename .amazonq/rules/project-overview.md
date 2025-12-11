# Project Overview

## Project Type
Vite + React single-page application with static HTML subpages

## Purpose
Personal website for Andii with multiple interactive pages, hosted at wolff.sh

## Technology Stack
- React 18 with TypeScript
- Vite 5
- React Router DOM
- Bootstrap 5.3.0 (on birthday page)
- Google Fonts (Bubblegum Sans, Quantico)
- Google Analytics (gtag.js)

## Project Structure
- `src/` - React application source
  - `main.tsx` - Entry point
  - `App.tsx` - Main app with routing and 404 handling
  - `pages/` - Page components
    - `Home.tsx` - Menu page with navigation and Christmas image preloading
    - `Xmas2025.tsx` - Christmas page with slideshow and grid view toggle
    - `SanrioQuiz.tsx` - Interactive trivia game with 45 questions
    - `FirstDates.tsx` - Drag-and-drop minigame to arrange 20 first dates
    - `Crossword.tsx` - Embedded crossword puzzle with personalized clues
    - `ChamchiFanArt.tsx` - Art gallery with 6 polaroid-style cards
    - `Birthday.tsx` - Redirects to static HTML birthday page
    - `NotFound.tsx` - 404 error page with Chamchi image
  - `components/` - Reusable React components
    - `ImageSlideshow.tsx` - Auto-scrolling photo carousel
    - `ImageGrid.tsx` - Grid view with modal image viewer
    - `ImageModal.tsx` - Full-screen image modal with filename display
    - `QuizQuestion.tsx` - Interactive quiz question component
    - `ArtworkCard.tsx` - Polaroid-style art display card
    - `XmasImagePreloader.tsx` - Background image preloading
- `public/` - Static assets and HTML files
  - `xmas-2025/` - Christmas slideshow images (24 photos)
  - `sanrio-quiz/` - Quiz questions JSON file
  - `first-dates/` - Dates JSON file and static HTML
  - `crossword/` - Static HTML redirect
  - `chamchi-fan-art/` - Static HTML redirect
  - `birthday/` - Birthday page assets and 34.html
  - `favicon/` - Site icons

## Pages
- **Home** - Purple background with pink accent buttons, right-aligned emojis
- **Christmas 2025** - Scrolling slideshow with grid view and modal image viewer
- **Sanrio Quiz** - 10-question trivia game with difficulty levels
- **20 First Dates** - Interactive minigame to arrange dates chronologically
- **The Crossword** - Embedded personalized crossword puzzle
- **Chamchi Fan Art** - Gallery of 6 artwork cards in 2×3 desktop layout
- **Birthday** - Static HTML page with Bootstrap carousel of Andii facts
- **404 Not Found** - Error page featuring Chamchi image

## Deployment
- GitHub Pages via GitHub Actions
- Workflow: `.github/workflows/deploy.yml`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Custom domain: wolff.sh/andii

## Development
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Format: `npm run format` (Prettier with Husky pre-commit hooks)
