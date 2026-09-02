# Prasanta Kumar Nayak — research website

A fast, self-contained personal research website (no build step, no dependencies).
It works anywhere that can serve static files — GitHub Pages, Netlify, or your
institution's web space.

```
index.html            → homepage (hero, highlights, interests, about, contact)
publications.html     → full, searchable publication list
assets/
  ├─ style.css        → all styling (dark astronomy theme)
  ├─ data.js          → ★ YOUR CONTENT — edit this to update the site
  └─ main.js          → rendering logic (starfield, figures, filters)
README.md             → this file
```

---

## 1. Put it online with GitHub Pages (free)

Your GitHub username is **nayakphy**, so your site will live at
**https://nayakphy.github.io**.

1. On GitHub, click **New repository**.
2. Name it exactly **`nayakphy.github.io`** (this exact name is what makes it a
   user site). Set it to **Public**. Do **not** add a README (you already have one).
   Click **Create repository**.
3. Upload the files. Easiest way in the browser: on the new repo page click
   **uploading an existing file**, then drag in `index.html`, `publications.html`,
   `README.md`, **and the whole `assets` folder**. Commit.
   *(Keep the folder structure — `assets/` must stay a subfolder.)*
4. Go to **Settings → Pages**. Under *Build and deployment → Source*, choose
   **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**. Save.
5. Wait 1–2 minutes, then visit **https://nayakphy.github.io**. Done.

If you prefer the command line:

```bash
cd nayak-site
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/nayakphy/nayakphy.github.io.git
git push -u origin main
```

### Optional: a custom domain
If you buy a domain (e.g. `prasantanayak.com`), add it under **Settings → Pages →
Custom domain**, and create a file named `CNAME` in the repo containing just that
domain. GitHub walks you through the DNS records.

---

## 2. Update after every new publication (≈ 1 minute)

Everything you'll ever need to change is in **`assets/data.js`**. You do **not**
touch the HTML.

**To add a paper:** open `assets/data.js`, find the right list inside `PUBS`
(`first`, `contrib`, `coauthor`, or `proceedings`), copy one existing `{ ... }`
block, paste it at the **top** of that list, and edit the fields:

```js
{
  year: 2026,
  title: "Your new paper title",
  authors: "<b>Nayak, P. K.</b>, Coauthor A., Coauthor B.",  // <b>…</b> bolds your name
  journal: "ApJ",              // ApJ, MNRAS, A&A, AJ, ApJL, JApA …
  ref: "972, 19",              // volume, page
  doi: "https://doi.org/10.3847/1538-4357/xxxxxxx",
  q: "Q1",                     // "Q1" or "Q2" — omit the line if not applicable
  if: "5.9"                    // impact factor — omit if not applicable
},
```

Save, commit, and push (or re-upload `data.js` on GitHub). The homepage's recent
list, the counts, and the searchable full list all update automatically.

**Also bump the totals** at the top of `data.js` if you like — the `metrics`
block (`total`, `q1`, `q2`, `last3`, `firstAuthor`) feeds the stat numbers.

**To change a research highlight** (the four cards on the homepage): edit the
`HIGHLIGHTS` array in the same file — `title`, `text`, and the `refs` links.
Each card's illustration comes from `figure` (`"comet"`, `"binary"`, `"ttauri"`,
or `"cluster"`).

---

## 3. Swapping in real images (optional)

The site currently uses generated SVG artwork for the highlights and a stylized
"PN" orb instead of a photo — so it looks complete with zero image files.
When you're ready to use real figures or a headshot:

- **Profile photo:** drop `photo.jpg` into `assets/`, then in `index.html`
  replace the `<div class="portrait">…</div>` block with
  `<div class="portrait"><img src="assets/photo.jpg" alt="Prasanta Kumar Nayak"
  style="width:220px;height:220px;border-radius:50%;object-fit:cover;"></div>`.
- **Highlight figures:** put an image in `assets/` and, in `assets/main.js`,
  set that highlight's `fig` to
  `<img src="assets/yourfigure.png" style="width:100%;height:100%;object-fit:cover">`
  — or just tell Claude and it'll wire it up.

---

## 4. Editing text

- Name, role, affiliation, email, and all external links live at the top of
  `assets/data.js` in the `PROFILE` object.
- The research statement and section intros are plain text in `index.html`.

That's it — happy publishing! 🔭
