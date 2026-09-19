# 🌐 Seyed Ali (SAliAkhiM) — Portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/SAliAkhiM/SAliAkhiM.github.io?color=2A7C13)
![GitHub stars](https://img.shields.io/github/stars/SAliAkhiM/SAliAkhiM.github.io?style=social)
![GitHub license](https://img.shields.io/github/license/SAliAkhiM/SAliAkhiM.github.io?color=76C457)
![Website](https://img.shields.io/website?down_message=offline&label=site&up_message=online&url=https%3A%2F%2FSAliAkhiM.github.io)

A high-performance, cyber-luxury developer portfolio and engineering showcase for **Seyed Ali (SAliAkhiM)**, Computer Engineering Student at **Isfahan University of Technology (IUT)**. 

Built with pure vanilla web technologies (HTML5, CSS3, modern ES6+ JavaScript) featuring real-time GitHub API integration, an obsidian dark-first visual identity with lush forest & vibrant emerald green (`#2A7C13` & `#76C457`) gradients, glassmorphism, dynamic project filtering, and dual-theme support.

🔗 **Live Website**: [saliakhim.github.io](https://SAliAkhiM.github.io)

---

## ✨ Features & Highlights

- ⚡ **Zero Dependencies & Blazing Fast**: 100% Vanilla HTML, CSS, and ES6+ JavaScript. No build step, zero bundler overhead, instant page loads.
- 🌓 **Dual-Theme System (Dark & Light)**:
  - Default Obsidian Cyber-Luxury dark palette (`#070b08`) with electric emerald & forest green neon accents.
  - Crisp light theme with glassmorphic cards.
  - Persistent user preference stored in `localStorage`.
  - **Keyboard Shortcut**: Press `T` anywhere to toggle themes seamlessly.
- 🔄 **Live GitHub API Integration**:
  - Auto-fetches public profile statistics (public repositories, followers, stars).
  - Dynamically merges and renders GitHub repositories alongside curated engineering projects.
  - Graceful fallback with skeleton loading shimmers.
- 🏷️ **Interactive Project Filter Tabs**: Filter projects across *All*, *Featured*, *Web & Full-Stack*, and *Systems & Algorithms*.
- 🎓 **Academic Milestones & Timeline**: Tailored showcase for Computer Engineering studies at Isfahan University of Technology (IUT), highlighting core coursework and technical disciplines.
- 🎴 **Interactive 3D-Tilt Hero Card**: Mouse-tracking perspective tilt effect on desktop for an immersive visual experience.
- 📋 **One-Click Email Copy**: Quick-copy email address to clipboard with custom floating toast feedback.
- 📱 **Fully Responsive & Accessible**: Fluid typography using CSS clamp, semantic HTML5 elements, ARIA attributes, skip navigation, and mobile hamburger navigation.

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 with OpenGraph & SEO metadata
- **Styling**: Modern CSS3 (CSS Custom Properties, Flexbox, CSS Grid, Glassmorphism `backdrop-filter`, Keyframe Animations)
- **Scripting**: Pure JavaScript (ES6+, Fetch API, IntersectionObserver, requestAnimationFrame)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*)
- **APIs**: GitHub REST API v3

---

## 📂 Project Structure

```txt
.
├── index.html              # Main semantic HTML entry point
├── LICENSE                 # MIT License file
├── README.md               # Repository documentation & guide
└── assets/
    ├── css/
    │   └── style.css       # Complete modular design system & theme variables
    ├── js/
    │   └── main.js         # Core logic: GitHub fetcher, filters, typing & animations
    └── images/
        └── avatar.png      # Profile picture & assets
```

---

## 🚀 Running Locally

Because this project is built with standard web standards, no compilation or build steps are required.

### Option 1: Direct in Browser
Simply double-click `index.html` or open it in any modern web browser.

### Option 2: Using Local HTTP Server
```bash
# Using Python
python -m http.server 3000

# Or using Node.js npx
npx serve .
```
Then navigate to `http://localhost:3000` in your browser.

---

## 🔧 Personalization & Customization

1. **Email & Socials**:
   - Update `saliakhim@gmail.com` and LinkedIn URLs in `index.html` and `assets/js/main.js`.
2. **Projects**:
   - The site automatically fetches repositories from GitHub username `SAliAkhiM`.
   - You can customize or add showcase projects inside `showcaseProjects` in `assets/js/main.js`.
3. **Avatar**:
   - Replace `assets/images/avatar.png` with your preferred profile photograph.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
