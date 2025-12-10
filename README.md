# Andii's Site 🎀

A personal website built with React and Vite, featuring interactive pages and games.

## 🌟 Features

- **Home Page** - Navigation hub with falling favicon animation
- **Christmas 2025** - Photo slideshow with grid view toggle and audio effects
- **Sanrio Quiz** - Interactive trivia game with 10 questions across 3 difficulty levels
- **Birthday Page** - Static HTML birthday celebration (external redirect)

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, React Router DOM
- **Styling**: Custom CSS with responsive design
- **Deployment**: GitHub Pages with custom domain
- **Analytics**: Google Analytics tracking
- **Code Quality**: Prettier with pre-commit hooks via Husky

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Format code
npm run format

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
└── App.jsx             # Main app with routing

public/
├── xmas-2025/          # Christmas page assets
├── sanrio-quiz/        # Quiz assets and questions
└── favicon/            # Site icons
```

## 🎯 Key Components

- **ImageSlideshow** - Auto-scrolling photo carousel with lazy loading
- **QuizQuestion** - Interactive multiple choice questions with color feedback
- **FallingIcons** - Animated falling favicon effect
- **BackButton** - Consistent navigation component

## 🔧 Routing & SEO

- All routes use trailing slashes for GitHub Pages compatibility
- Static HTML files for social media previews and SEO
- Hash-based routing fallback for 404 handling
- Open Graph and Twitter Card meta tags

## 📊 Analytics

Google Analytics (G-YX630D4XCV) tracks:
- Page views across all sections
- Route changes in React app
- Static HTML preview interactions

## 🚢 Deployment

Automated deployment via GitHub Actions:
1. Push to `main` branch triggers build
2. Vite builds optimized production bundle
3. peaceiris/actions-gh-pages deploys to `gh-pages` branch
4. Custom domain: [wolff.sh/andii](https://wolff.sh/andii)

## 🎮 Quiz System

The Sanrio Quiz features:
- 45 curated trivia questions (3 easy, 4 medium, 3 hard per game)
- Random question selection and answer shuffling
- Score tracking with personalized completion messages
- Retry functionality with full reset

## 📱 Responsive Design

- Mobile-first CSS approach
- Responsive grid layouts (2 columns mobile, 4 desktop)
- Touch-friendly interactive elements
- Optimized images and lazy loading

---

Built with 💕 for Andii
