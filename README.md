# Day 11 — Sandy's Smokeshed

An **unofficial frontend-only concept** for Sandy's Smokeshed in Castlefield, Manchester, built for the 100 Days Local Business Website Challenge.

**Live page:** https://patu-art.github.io/Day-11/

## Site direction

This iteration replaces the original generic illustrated BBQ layout with a compact, photography-led hospitality design using Sandy's real supplied assets. Customer journey: BBQ and location in the hero → food photography → smoker story → visit/directions. No backend, invented live inventory, fake booking form or unverified current opening hours.

## Real brand assets

Original files supplied by the user are retained under `assets/photos/*.png`; the public page uses compressed responsive WebP derivatives to load faster:

- `01-sandwich.webp`: sandwich under the railway arches — hero.
- `04-brisket-slices.webp`: sliced brisket — main food photograph.
- `07-meat-on-grill.webp`: meat cooking — secondary food photograph.
- `05-angela-smoker.webp`: cropped real offset smoker — smoker section; whitespace from the provided source was removed.
- `06-logo-cropped.webp`: cropped version of the supplied official logo — header and footer.
- `06-official-logo.png`: original logo — favicon.

`02-grill-caption.png` and `03-branded-smoker.png` are retained but not needed in the final website. The previous concept illustrations remain in the repository as **unused** design-development files.

## Run and publish

Open `index.html` using VS Code Live Server. GitHub Pages serves `main` / repository root. Separate HTML, CSS and JavaScript files. All photographs and styling are linked by relative paths; no build step.

The restaurant's official social profile and a directions link are external. The venue may sell out; this website never asserts that any particular dish is available right now.

## Before client adoption

This is not the official business site. Check photography/logo reuse rights, current address, menu, hours and customer entrance with the owner. Photography supplied for this demo is not evidence of an independent licence from its photographer or subjects.
