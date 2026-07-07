# animation-design

Static landing page for Animation Studio, now bootstrapped as an Ext JS application.

## Structure

- `index.html` — lightweight document shell with SEO/meta tags, favicon/manifest links, Ext JS CDN links, and the root mount node.
- `styles.css` — all visual styling for the collage/motion landing page.
- `app/app.js` — Ext JS application bootstrap, markup rendering, language switching, SEO metadata sync, draggable scraps, portfolio video previews, and modal playback logic.
- `site.webmanifest` — PWA/browser manifest metadata.
- `videos/` — hero background and portfolio case videos.

`app/app.js` uses `Ext.application` when Ext JS is available. If the CDN is unavailable during local development, it falls back to rendering the same page markup directly so the static site remains viewable.

## Local preview

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`.
