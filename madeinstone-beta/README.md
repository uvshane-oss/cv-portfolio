# Maiden Stone beta: upload and image replacement

## Upload the site

The ZIP contains one folder named `madeinstone-beta`. Unzip it. Put the **contents** of that folder into the existing `cv-portfolio/madeinstone-beta/` folder on the `main` branch. Replace the existing starter `index.html`; upload `styles.css`, `app.js`, `demo.js`, `image-map.json`, the `assets` folder, and the `docs` folder. Keep the same folder structure. Do not upload the ZIP itself as a file in GitHub. Do not edit the portfolio's root `index.html` or its menu.

GitHub's web interface: open `madeinstone-beta`, choose **Add file → Upload files**, drag the files from the unzipped folder, then commit. If your browser does not preserve directories when dragging a folder, open each destination folder in GitHub and upload that folder's files there. The ZIP includes placeholder `.gitkeep` files to make the visualisations subfolders visible. GitHub Desktop or a git client can also copy the full folder tree in one step and commit it.

The site should then be at:
`https://uvshane-oss.github.io/cv-portfolio/madeinstone-beta/`
GitHub Pages for the CV repository must already publish from `main` (and the same root folder). GitHub Pages updates can take a few minutes.

## Generate each new image

Open a separate ChatGPT conversation. Upload `MAIDEN-STONE-IMAGE-CHAT-PROMPT.md` and `IMAGE-MAP.xlsx`. Also upload the approved concept screenshot for visual direction. For each row, upload the corresponding original photo (or give the exact source URL from the sheet) and its row number. The other chat will generate one image and tell you its exact filename. Save it as a **PNG** with that exact name.

Example: row “Gallery 01” is `headstone-001.png` and belongs in
`cv-portfolio/madeinstone-beta/assets/visualisations/headstones/`.

Open the destination folder in GitHub → **Add file → Upload files** → choose the PNG → commit. Reload the beta page. It will use the new image automatically because the code looks for that exact local path first. If a file is not there yet, the original Maiden Stone photo appears instead. No code edit is required, and you can add images one at a time.

Filenames are case-sensitive. Use the exact `.png` extension and folder shown in the sheet. Do not place them under the CV repository's top-level `assets` folder. If you re-export as WebP or JPEG, keep a PNG version in the expected location or the site will use its original-photo fallback.

The source photos remain accessible via the muted “View original photo” links on the gallery cards. The restoration comparison remains original photographs because a generated before/after pair would misrepresent actual restoration.

## Structure

`assets/hero.webp` is the concept-inspired hero; `assets/logo.svg` is the approved wordmark recreated as a scalable graphic. The four `assets/category/*.webp` images and both `assets/demo-*.webp` design demo bases are already supplied. The replacement slots are in `assets/visualisations/`. The complete original URL and replacement filename are in `IMAGE-MAP.xlsx`; `image-map.json` drives the gallery in the site.

This is a public, unlinked beta page: knowing the direct link is enough to visit it. The CV homepage and menu stay separate.
