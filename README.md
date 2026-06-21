# Ashish — DevOps Engineer Portfolio

A clean, minimal personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just fast, lightweight static files.

---

## Live Preview

Open `index.html` directly in any browser.

---

## Project Structure

```
tryingkiro/
├── index.html          # Main HTML — all sections and markup
├── style.css           # All styles — layout, components, animations
├── main.js             # All JavaScript — nav, typewriter, scroll, modal
├── favicon.svg         # Terminal >_ icon shown in browser tab
├── icons.svg           # SVG sprite sheet (reference, not used in UI)
├── Ashish Resume.pdf   # Resume file — opened in modal on click
└── README.md           # This file
```

---

## Features

| Feature | Details |
|---|---|
| **Sticky Navbar** | Transparent → solid on scroll, active link highlights by section |
| **Mobile Menu** | Hamburger drawer with all nav links + Resume button |
| **Typewriter Effect** | Cycles through DevOps roles in the hero section |
| **Scroll Animations** | Elements fade in as they enter the viewport (IntersectionObserver) |
| **Skills Filter** | Filter cards by category — Cloud/DevOps, Languages, Databases, CS |
| **Skill Bars** | Animate to width when the Skills section scrolls into view |
| **Achievement Counters** | Numbers count up when the Achievements section appears |
| **Resume Modal** | Full-screen PDF viewer with Download and Close buttons |
| **Back to Top** | Fixed button appears after scrolling 500px |
| **Terminal Favicon** | `>_` SVG icon in the browser tab |
| **Responsive** | Works on all screen sizes down to 320px |

---

## Sections

1. **Hero** — Name, typewriter role, description, CTA buttons (LinkedIn, GitHub, View Resume, Email)
2. **About** — Bio, social links, skill chips
3. **Skills** — 18 skill cards with progress bars, filterable by category
4. **Experience** — Timeline for KodeKloud DevOps training and AWS Academy Labs
5. **Projects** — Apache CloudStack private cloud + Terraform/Jenkins IaC
6. **Certifications** — AWS Cloud Practitioner, AWS Solutions Architect, Azure Security Engineer
7. **Achievements** — Animated counters (LeetCode problems, Codechef rating, certs, projects)
8. **Contact** — Email, LinkedIn, GitHub links + quick link grid

---

## Tech Stack

- **HTML5** — semantic markup, no dependencies
- **CSS3** — custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — ES6+, IntersectionObserver, no libraries
- **Font Awesome 6.5** — icons via CDN
- **Google Fonts** — Inter + JetBrains Mono via CDN

---

## Resume

The file `Ashish Resume.pdf` must be in the same folder as `index.html`.

Clicking **Resume** in the navbar or **View Resume** in the hero opens a full-screen modal with:
- PDF rendered in an `<iframe>`
- **Download** button — saves the PDF locally
- **Close** button, **Escape** key, or clicking the backdrop to dismiss

---

## How to Run

No build step needed.

**Option 1 — Open directly:**
```
Double-click index.html
```

**Option 2 — Local server (recommended for PDF modal):**
```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```
Then open `http://localhost:8080` in your browser.

> **Note:** Some browsers block `<iframe>` PDF loading from `file://` URLs due to security policies. Using a local server fixes this.

---

## Customisation

### Change accent color
In `style.css`, update the CSS variables at the top of `:root`:
```css
:root {
  --white: #f5f5f5;    /* primary accent */
  --gray-400: #888888; /* secondary / skill bars */
}
```

### Update personal info
All content is in `index.html`. Search for the relevant section comment:
```html
<!-- HERO -->
<!-- ABOUT -->
<!-- SKILLS -->
<!-- EXPERIENCE -->
<!-- PROJECTS -->
<!-- CERTIFICATIONS -->
<!-- ACHIEVEMENTS -->
<!-- CONTACT -->
```

### Replace the resume
Drop your PDF into the folder and update the two references in `index.html`:
```html
<a href="YourName_Resume.pdf" download="YourName_Resume.pdf" ...>
<iframe id="resume-frame" src="" ...>   <!-- src set by JS -->
```
And update `main.js`:
```js
frame.src = 'YourName_Resume.pdf';
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Mobile (iOS/Android) | ✅ Responsive |

---

## Author

**Ashish**
- LinkedIn: [linkedin.com/in/ashish0491](https://www.linkedin.com/in/ashish0491)
- GitHub: [github.com/ashish0491](https://github.com/ashish0491)
- Email: aa7909227@gmail.com

---

## License

This project is open source and free to use as a personal portfolio template.
