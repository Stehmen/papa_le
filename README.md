# Papa Le — Artisan Pâtisserie

Portfolio demo: a one-page website for a fictional French-style pâtisserie in New York.

## Stack

Pure HTML / CSS / JavaScript — no frameworks, no build step.

## Features

- Warm cream-and-caramel pâtisserie theme (light design system)
- Sticky nav with blur, mobile burger menu
- Hero with slow Ken Burns drift on the morning-bake photo
- "The pâtissier" story section with craft facts
- Tabbed menu: Viennoiserie / Cakes / Desserts
- Gallery with hover zoom
- Custom cake order form with JS validation (name, date, servings, phone, wishes) and confirmation state
- Scroll-reveal animations, fully responsive

## Images

All three photos were AI-generated for this project (`assets/`):
`hero.jpg` (morning bake), `interior.jpg` (pâtisserie room), `pastry-hands.jpg` (pastry bench).

## Run locally

```bash
cd papa-le
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish free (GitHub Pages)

```bash
cd papa-le
git init
git add .
git commit -m "Papa Le pâtisserie site"
gh repo create papa-le --public --source=. --push
gh repo edit papa-le --enable-pages --pages-branch main --pages-path /
# live at https://<username>.github.io/papa-le/
```

## Note

Brand, address, phone and menu are fictional — this is a portfolio demo project.
