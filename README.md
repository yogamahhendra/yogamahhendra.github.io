# Yoga Mahendra — Engineering Portfolio

> Personal portfolio and project showcase for **Yoga Mahendra**, Software Engineer based in Bali, Indonesia.  
> 🌐 **Live Website**: [https://yogamahhendra.github.io](https://yogamahhendra.github.io)

---

## 👨‍💻 Overview

This repository hosts the source code for my personal engineering portfolio. Designed with an understated, typography-first aesthetic, the website communicates my focus as a practical software engineer: building useful backend services, automation tools, system integrations, and reliable software that solves real-world problems.

### Core Focus Areas
- **Backend & Services**: Go, PHP (Laravel), RESTful APIs, relational databases (MySQL, PostgreSQL, SQL Server).
- **Automation & Tooling**: Headless browser automation (CDP), concurrent workers, CLI utilities, workflow optimization.
- **Frontend & Web**: TypeScript, modern JavaScript, Vue, React, semantic HTML5, Vanilla CSS design systems.
- **Systems & Infrastructure**: Linux, Windows Server, AWS, cloud storage integrations.

---

## 🚀 Featured Projects

The portfolio highlights selected open-source repositories and engineering tools:

| # | Project | Stack | Description | Repository |
|---|---------|-------|-------------|------------|
| **01** | **Lark Drive Bulk Downloader** | Go, CDP, Concurrency | High-performance CLI for bulk downloading files from virtualized Lark/Feishu folders using headless Chrome and concurrent worker pools. | [GitHub ↗](https://github.com/yogamahhendra/lark-drive-bulk-downloader) |
| **02** | **Static CMS** | TypeScript, Next.js, Postgres, S3 | Open-source asset management with permanent URLs, image optimization, and atomic S3 staging. | [GitHub ↗](https://github.com/yogamahhendra/static-content) |
| **03** | **Shortener URL** | Go (Fiber), React, PostgreSQL | URL shortener with destination QR code generation, bulk ZIP packaging, and client-side IndexedDB caching. | [GitHub ↗](https://github.com/yogamahhendra/shortener-url) |
| **04** | **Disk Space Analyzer** | PowerShell, Windows | Administrative utilities for identifying drive consumption, hidden system files, and shadow copy allocations. | [GitHub ↗](https://github.com/yogamahhendra/disk-space-analyzer-windows) |
| **05** | **String Aggregator** | Go, Windows Systray | Native Windows system tray utility for transforming multiline clipboard text into formatted SQL `IN` clauses. | [GitHub ↗](https://github.com/yogamahhendra/string-aggregator) |
| **06** | **Finora** | TypeScript | Personal cash-flow analytics and visualization tool (active development). | [GitHub ↗](https://github.com/yogamahhendra/finora) |

---

## 🛠️ Architecture & Design Philosophy

The website itself reflects my engineering philosophy: **build things that are fast, robust, and maintainable**.

- **Zero Runtime Dependencies**: Pure semantic HTML5, Vanilla CSS, and modern Vanilla JavaScript without bloated frameworks, third-party libraries, or complex build pipelines.
- **Bespoke Design System**: Custom HSL/hex design tokens with an earthy editorial palette (`#F7F7F4` paper background, `#171916` dark text, `#315B48` olive accent, and `#171C19` dark accent).
- **Typography-First Hierarchy**: Pairing `Inter` (for editorial clarity) with `JetBrains Mono` (for technical metadata and code elements).
- **Performance & Web Vitals**: Near-instant First Contentful Paint (FCP) and zero layout shift (CLS).
- **Graceful Animations & Accessibility**:
  - Staggered hero entrance and `IntersectionObserver` scroll reveals with hardware-accelerated transitions.
  - Full adherence to `@media (prefers-reduced-motion: reduce)`.
  - Zero-JS progressive enhancement (content remains 100% visible if JavaScript is disabled).
  - High-contrast color ratios meeting WCAG AA accessibility standards.

---

## 📁 Repository Structure

```text
yogamahhendra.github.io/
├── index.html             # Semantic markup, meta tags, and structured portfolio sections
├── style.css              # Vanilla CSS design tokens, keyframe animations, and responsive layout
├── main.js                # IntersectionObserver scroll reveal and accessible mobile navigation
├── favicon.svg            # Custom SVG monogram favicon (YM)
├── img/
│   └── profil_picture.jpg  # Profile portrait photo (About section)
└── README.md              # Repository documentation
```

---

## 💻 Local Development

No package installation or compilation required. Run with any local HTTP server:

```bash
# Using VS Code Live Server
# Right click index.html -> "Open with Live Server" (default: port 5500)

# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000` (or `http://127.0.0.1:5500`) in your browser.

---

## 🚢 Deployment

Hosted directly on **GitHub Pages** from the root of the repository.  
Any push to the default branch (`main` or `master`) automatically updates the live site at `https://yogamahhendra.github.io` within ~60 seconds.

---

## 📬 Connect

- **Website**: [yogamahhendra.github.io](https://yogamahhendra.github.io)
- **GitHub**: [@yogamahhendra](https://github.com/yogamahhendra)
- **Location**: Bali, Indonesia

---

<p align="center">
  <sub>Built with care, precision, and zero unnecessary dependencies &bull; &copy; Yoga Mahendra</sub>
</p>
