# Andii's Site 🎀

A personal website built with React and Vite, featuring interactive pages and games.

## 🌟 Features

- **Home Page** - Navigation hub with falling favicon animation, Christmas image preloading, and hidden features
- **Christmas 2025** - Photo slideshow with grid view toggle, modal viewer, and audio effects
- **Sanrio Quiz** - Interactive trivia game with 10 questions across 3 difficulty levels
- **20 First Dates** - Tap-to-swap minigame to arrange dates chronologically
- **The Crossword** - Embedded personalized crossword puzzle with custom clues
- **Chamchi Fan Art** - Gallery of 6 artwork cards in polaroid style with 2×3 desktop layout
- **Slack Portal** - Slack-themed page with poke button and rate limiting
- **Lip Skin Memorial** - Heaven-themed memorial page with andiizzle image, animated trumpets, and Charlie Kirk audio
- **Birthday Page** - Static HTML birthday celebration with Bootstrap carousel
- **404 Page** - Custom error page featuring Chamchi image

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript, Vite 5, React Router DOM
- **Styling**: Custom CSS with responsive design, Bootstrap 5.3.0 (birthday page)
- **Deployment**: GitHub Pages with custom domain
- **Analytics**: Google Analytics tracking across all pages
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
│   ├── ImageSlideshow.tsx    # Auto-scrolling photo carousel
│   ├── ImageGrid.tsx         # Grid view with modal support
│   ├── ImageModal.tsx        # Full-screen image modal
│   ├── QuizQuestion.tsx      # Interactive quiz questions
│   ├── ArtworkCard.tsx       # Polaroid-style art cards
│   ├── BackButton.tsx        # Parameterized navigation component
│   └── XmasImagePreloader.tsx # Background image preloading
├── pages/              # Page components
│   ├── Home.tsx             # Main navigation page with hidden Slack Portal button
│   ├── Xmas2025.tsx         # Christmas photo gallery
│   ├── SanrioQuiz.tsx       # Trivia game
│   ├── FirstDates.tsx       # Date arrangement minigame
│   ├── Crossword.tsx        # Embedded crossword
│   ├── ChamchiFanArt.tsx    # Art gallery
│   ├── SlackPortal.tsx      # Slack-themed page
│   ├── LipSkinMemorial.tsx  # Heaven-themed memorial page
│   ├── Birthday.tsx         # Birthday page redirect
│   └── NotFound.tsx         # 404 error page
└── App.tsx             # Main app with routing

public/
├── xmas-2025/          # Christmas page assets (24 photos)
├── sanrio-quiz/        # Quiz questions JSON and Hello Kitty background
├── first-dates/        # Dates data and static HTML
├── crossword/          # Static HTML redirect
├── chamchi-fan-art/    # Static HTML redirect
├── slack-portal/       # Slack Portal assets and static HTML
├── lip-skin-memorial/  # Lip Skin Memorial assets and static HTML
├── birthday/           # Birthday assets and 34.html
└── favicon/            # Site icons
```

## 🎯 Key Components

### Interactive Features
- **ImageModal** - Click any Christmas photo to view enlarged with filename display
- **Tap-to-Swap** - First dates minigame supports touch-friendly interactions on all devices
- **Quiz System** - 69 curated questions with random selection and answer shuffling
- **Art Gallery** - Hover effects and responsive grid layout for artwork cards
- **Hidden Access System** - Multi-click reveals for pages with rate limiting

### Navigation & UX
- **BackButton** - Parameterized navigation component with smart routing based on referrer
- **FallingIcons** - Animated falling favicon effect on home page
- **Right-aligned Emojis** - Clean button layout with emojis positioned on the right
- **Responsive Design** - Mobile-first approach with touch-friendly interactions

### Secret Pages System
- **Slack Portal Access** - Hidden button reveals on home page
- **Lip Skin Memorial Access** - Hidden button reveals on Slack Portal
- **Smart Back Navigation** - Memorial page returns to Slack Portal if accessed from there, otherwise home
- **Rate Limiting** - 30-second cooldown on Slack webhook calls with visual feedback

## 🔧 Routing & SEO

- **Trailing Slash Routes** - All routes use trailing slashes for GitHub Pages compatibility
- **Static HTML Previews** - Each page has static HTML for social media and SEO
- **Hash-based Fallback** - Simplified hash routing for 404 handling (`#/route/` format)
- **Open Graph Tags** - Proper meta tags for social media sharing
- **Custom 404 Page** - Friendly error page with Chamchi image and navigation

## 📊 Analytics

Google Analytics (G-YX630D4XCV) tracks:
- Page views across all sections
- Route changes in React app
- Static HTML preview interactions
- User engagement with interactive features and secret pages

## 🚢 Deployment

Automated deployment via GitHub Actions:
1. Push to `main` branch triggers build
2. Vite builds optimized production bundle with TypeScript
3. peaceiris/actions-gh-pages deploys to `gh-pages` branch
4. Custom domain: [wolff.sh/andii](https://wolff.sh/andii)

## 🎮 Interactive Games

### Sanrio Quiz
- 69 curated trivia questions (3 easy, 4 medium, 3 hard per game)
- Random question selection and answer shuffling
- Score tracking with personalized completion messages
- Retry functionality with full reset

### 20 First Dates
- Chronological arrangement challenge with 20 dates
- Tap-to-swap interaction on both desktop and mobile
- Show/hide dates toggle for increased difficulty
- Real-time scoring and completion detection

### The Crossword
- Embedded personalized crossword puzzle
- Custom clues about memories and inside jokes
- Responsive iframe that scales with screen size
- Direct integration with crosswordlabs.com

## 🎨 Art Gallery

### Chamchi Fan Art
- 6 polaroid-style artwork cards
- 2×3 grid layout on desktop, responsive on mobile
- Hover effects with rotation and scaling
- Placeholder images using site favicon

## 🔐 Secret Pages

### Slack Portal
- Slack-themed design with authentic UI elements
- Interactive poke button with Slack webhook integration
- Rate limiting with 30-second cooldown and visual feedback
- Base64-encoded webhook URL for basic bot protection
- Hidden trigger for Lip Skin Memorial access (4 clicks)

### Lip Skin Memorial
- Heaven-themed background with andiizzle image
- Animated trumpet emojis with CSS animations
- Auto-playing Charlie Kirk audio (with user interaction compliance)
- Smart back button navigation based on referrer
- Responsive design with mobile-optimized layouts

## 📱 Responsive Design

- **Mobile-first CSS** approach with progressive enhancement
- **Touch-friendly** interactive elements for mobile users
- **Responsive grids** (2 columns mobile, 4 desktop for photos)
- **Scalable typography** using clamp() for fluid text sizing
- **Optimized images** with lazy loading and proper alt text

## 🔄 Performance Features

- **Image Preloading** - First 5 Christmas images preload on home page visit
- **Lazy Loading** - Images load progressively in slideshows
- **Code Splitting** - Components loaded on demand
- **Optimized Builds** - Vite handles bundling and minification
- **Asset Organization** - Page-specific asset folders for better caching

## 🎵 Audio Features

- **Auto-play Compliance** - Audio requires user interaction per browser standards
- **Loop Functionality** - Background audio loops seamlessly
- **Error Handling** - Graceful fallback for audio loading failures

---

Built with 💕 for Andii
