# Embrex Marketing Site

This is the marketing website for Embrex (formerly Codex), a code generation tool for Symfony, built with Astro.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view it in the browser.

## 📁 Project Structure

```
embrex-site/
├── src/
│   ├── components/    # Astro components
│   ├── layouts/       # Page layouts
│   └── pages/         # Page files
├── public/            # Static assets
└── package.json
```

## 🏗️ Building for Production

```bash
# Build the site
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# The output is in the `dist/` folder
```

## 🎨 Customization

### Colors

Edit the Tailwind configuration in `tailwind.config.mjs` to change the color scheme.

### Content

All content is in the Astro components in `src/components/`.

## 📝 License

MIT License - see LICENSE file for details.