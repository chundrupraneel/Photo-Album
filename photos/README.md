# Photos folder

Create one folder per memory/occasion here, e.g.:

```
photos/
  beach-trip-2025/
    IMG_001.jpg
    IMG_002.jpg
  first-date/
    IMG_010.jpg
```

Then edit `js/data.js`:
- Set `cover: "photos/beach-trip-2025/IMG_001.jpg"` for the item's cover image.
- For each photo in `photos: [...]`, set `src: "photos/beach-trip-2025/IMG_002.jpg"`.

Leave `cover`/`src` as `null` to keep showing the colorful emoji placeholder until you add real photos.
