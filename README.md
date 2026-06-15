# PookiesFlix 🎬❤️

A Netflix-themed photo album website — built as a birthday gift. Instead of shows, the rows of "cards" are photo memories organized by occasion (date nights, trips, anniversaries, etc.).

## Viewing it

Just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8765
```

Then visit `http://localhost:8765/index.html`.

## Adding your own photos

1. See [photos/README.md](photos/README.md) for the folder structure.
2. Edit [js/data.js](js/data.js) — it's the only file you need to touch. It's heavily commented and explains how to:
   - Add new memories ("shows") with title, date, description, and photos
   - Point `cover` / `src` fields at your photo files
   - Mark one memory as `featured: true` to show it in the hero banner
   - Add new category rows

Until real photos are added, everything shows colorful emoji placeholders so the site still looks complete.

## Structure

- `index.html` — page structure
- `css/style.css` — Netflix-style dark theme and animations
- `js/data.js` — all memory/photo data (edit this!)
- `js/app.js` — app logic (profile screen, rows, modal, fullscreen slideshow, search, My List)
- `photos/` — your photo folders go here
