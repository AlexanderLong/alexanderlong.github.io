
# Alexander Long's website

Static website published at https://alexanderlong.github.io/.

## Preview locally

From this repository, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000/presentations.html. Use an HTTP server rather than
opening the HTML files directly: the navigation and slide Markdown load with
`fetch`, which needs HTTP.

## Presentations

The shared `navbar.html` links to `presentations.html`. The dropdown lists talks
with hosted slides, newest first. The full talk history remains on
`awardsAndPresentations.html`.

The ITMNR-10 talk is hosted at:

https://alexanderlong.github.io/talks/itmnr-10/

This folder contains the built presentation, including slides, images,
animations, JavaScript, CSS, and fonts. The editable sources stay in the
separate `itmnr-10` repository; Node.js and Pixi are only needed when rebuilding
the talk, not when viewing it online.

### Update ITMNR-10

In the presentation source repository:

```sh
pixi run build
```

Copy the **contents** of its `dist/` folder into this repository's
`talks/itmnr-10/` folder, replacing the previous build. Review the diff and
preview locally before committing and publishing. Do not copy `node_modules`,
`.pixi`, or the source repository's `.git` folder.

### Add another talk

1. Build or export the talk as a static website with relative asset paths.
2. Copy its output to a new folder, such as `talks/my-next-talk/`.
3. Add an `<option>` at the top of the dropdown in `presentations.html`.
   Set `value` to `talks/my-next-talk/` and provide `data-title`, `data-event`,
   and `data-location`. Move `selected` to the new option.
4. Update the initial card's title, event, location, and link to match the first
   option so it is also useful with JavaScript disabled.
5. Add the talk to `awardsAndPresentations.html` if desired.
6. Preview, commit, and publish the website changes.

## Publish on GitHub Pages

After reviewing the local preview and confirming the slides are approved for
public release, commit the website changes on a feature branch, push that
branch, and open a pull request into `master`. Merge when ready to publish.

Under the repository's **Settings → Pages**, the publishing source for this
static site should be **Deploy from a branch**, **master**, **/(root)**.
If an existing custom deployment workflow is configured, follow that workflow.
See the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The root `.nojekyll` file tells GitHub Pages to serve these files directly,
including the Markdown that Reveal.js loads in the browser.
