# Ameya Labs Website

A modern, responsive single-page website for Ameya Labs built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- **Light Theme Design**: Clean, professional white background with logo-inspired color accents
- **Logo Integration**: Prominent logo display with glow effects and brand representation
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Glassmorphism effects, smooth animations, and professional typography
- **Interactive Elements**: Mobile hamburger menu, smooth scrolling, contact form
- **Color Harmony**: Logo colors (navy, electric purple, blue-purple) used throughout the design

## Design Highlights

- **Color Palette**: Deep navy (#071226), Electric purple (#6C4BFF), Blue-purple accent (#4F46E5)
- **Typography**: Clean sans-serif fonts with proper hierarchy
- **Visual Effects**: Subtle gradients, glassmorphism cards, hover animations
- **Logo Presence**: Logo featured prominently in header and used as design inspiration
- **Professional Aesthetics**: White background with strategic color accents for infographics

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- No build process required

## Hosting Instructions

### Option 1: GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `main`
4. The site will be available at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify
1. Drag and drop the `ameya-labs` folder to [netlify.com](https://netlify.com)
2. Site will be live instantly

### Option 3: Vercel
1. Import the repository on [vercel.com](https://vercel.com)
2. Deploy automatically

### Option 4: Local Testing
```bash
cd ameya-labs
python3 -m http.server 8000
# Visit http://localhost:8000
```

## File Structure

```
ameya-labs/
├── index.html          # Main website file
├── AmeyaLogo.png       # Company logo
└── README.md           # This file
```

## Customization

- **Colors**: Edit the CSS custom properties in the `<style>` section
- **Content**: Update text content in the HTML sections
- **Logo**: Replace `AmeyaLogo.png` with your logo file
- **Theme**: The design uses a light theme with logo-inspired colors

## Performance

- Uses Tailwind CDN for fast loading
- Minimal JavaScript (vanilla, no frameworks)
- Optimized images with lazy loading
- CSS-only animations and effects

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE support (as per modern web standards)
