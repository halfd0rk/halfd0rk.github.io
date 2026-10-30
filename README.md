# halfdork.com

Coming soon page for Half Dork Studios, served by GitHub Pages at https://halfdork.com.

Plain static HTML and CSS, no build step (`.nojekyll` turns Jekyll off).

- `index.html`: landing page with placeholder newsletter signup and blog teaser
- `blog/index.html`: blog placeholder
- `404.html`: not-found page
- `assets/`: stylesheet, script, favicon
- `CNAME`: custom domain for GitHub Pages

The newsletter form is not connected to anything yet. `assets/site.js` catches the submit and shows a "not open yet" note, so no email is sent anywhere.

The previous Jekyll site is kept on the `archive/jekyll-site-2023` branch.

Preview locally with `python3 -m http.server` from the repo root.
