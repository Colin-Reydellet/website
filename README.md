# website

Official website — Colin Reydellet, avocat au Barreau de Lyon.

Static single page, Bootstrap 4 from CDN. No build step: open `index.html`,
or serve the folder (`python3 -m http.server`) and browse to it.

## Layout

    index.html            the home page (navbar + 4 sections + footer)
    mentions-legales.html  legal notice, linked from both footers
    css/style.css   theme; the palette lives in the :root block at the top
    js/main.js      navbar shrink, smooth scroll, mobile menu collapse
    img/            web-optimised assets, generated from photo/
    photo/          original logo files and photo shoots (not served)

## Palette

Sampled from `photo/logo/`, with two complementary neutrals added:

| Token       | Value     | Used for                          |
|-------------|-----------|-----------------------------------|
| `--gold`    | `#FFBE58` | accents, rules, primary button    |
| `--ink`     | `#000000` | navbar, hero, domaines, footer    |
| `--navy`    | `#0041A7` | links (alternate logo variant)    |
| `--navy-deep` | `#041E45` | the band under Honoraires       |
| `--sand`    | `#FAF7F2` | light section backgrounds         |

`img/logo-full.png` and `img/logo-mark.png` were un-matted from the originals'
opaque black background, so they sit on any colour.

## Contact section

No form: there is no backend, so the section offers three direct routes —
`tel:`, `mailto:` and a maps link. The mailto href is pre-filled with a subject
and a short template (nature du litige, parties, dates clés, téléphone), which
does the structuring a form would have done.

## Before going live

- `index.html` — the "Premier échange sans engagement" note on the phone card is
  a placeholder for the cabinet's real opening hours (marked with a TODO).
- `mentions-legales.html` — the RCP paragraph states the Ordre de Lyon's
  collective policy without naming the insurer or policy number (marked with a
  TODO); add them if the Ordre supplies them.
