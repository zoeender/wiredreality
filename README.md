# Your portfolio site

This is a plain website — no build tools, no installs. You can edit the
text in a normal text editor and it just works.

## What's in here

- `index.html` — all your text and content lives here
- `style.css` — all the colors, fonts, spacing (the "look")
- `script.js` — a tiny bit of behavior, you shouldn't need to touch it

## How to edit the text (no coding knowledge needed)

1. Open `index.html` in any text editor (Notepad, TextEdit, or VS Code
   if you have it — even editing it right on GitHub's website works).
2. Look for lines wrapped in `<!-- EDIT: ... -->` comments — those tell
   you exactly what nearby text is safe to change.
3. Only change the *words* between tags, like:
   `<h1>Alex Rivera</h1>` → `<h1>Your Name</h1>`
   Don't delete the `<` `>` bits — those are what make it a webpage.
4. To add a real photo instead of a colored placeholder block, replace
   a `<div class="thumb thumb-a"></div>` with:
   `<img class="thumb" src="images/your-photo.jpg" alt="description">`
   (create an `images` folder next to `index.html` and drop your photos in it)
5. Save the file. That's it — no compiling, no terminal.

## How to put it on the internet with Cloudflare (easiest way, no GitHub needed)

1. Go to https://dash.cloudflare.com and sign up / log in (free).
2. Go to **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. Give your project a name (this becomes part of your free URL).
4. Drag this whole folder (or a .zip of it) into the upload area.
5. Click **Deploy**. Cloudflare gives you a live URL like
   `your-project.pages.dev` within seconds.
6. Whenever you edit a file and want to update the live site, go back
   to your Pages project and upload the folder again.

## Optional: connect a custom domain

If you own a domain (or buy one through Cloudflare), go to your Pages
project → **Custom domains** → **Add**, and follow the prompts. HTTPS
is set up automatically.

## Optional: auto-deploy from GitHub instead

If you later want every save to publish automatically, create a free
GitHub account, make a new repository, upload these files there, then
in Cloudflare choose **Connect to Git** instead of **Upload assets**
and pick that repository. Every time you edit a file on GitHub, the
site rebuilds itself.
