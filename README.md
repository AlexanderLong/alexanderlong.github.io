
# Alexander Long's website

Static website published at https://alexanderlong.github.io/.

## Preview locally

From this repository, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000/ for the homepage, or
http://localhost:8000/presentations.html for the talks. Use an HTTP server
rather than opening the HTML files directly: the other pages' navigation and
slide Markdown load with `fetch`, which needs HTTP.

## Homepage

The homepage, research, publications, talks, about, and contact pages use the Editorial
layout with shared styles in `css/home.css` and static navigation. None requires
Bootstrap; only the talks page uses JavaScript, to switch presentations.
Other pages continue to use `navbar.html` and their existing
styles. All main navigation uses the same order: Research, Publications,
Talks, About, Contact, and CV download. Keep the static headers in `index.html`,
`researchExp.html`, `publications.html`, `presentations.html`, `about.html`, and
`contact.html` consistent with `navbar.html`.
The Editorial footers preserve access to education, awards, notes, and
scientific resources.

The homepage features the Nuclear News cover in `images/CoverImageNN.jpg`
and reuses the locally hosted Source Sans Pro fonts in `talks/itmnr-10/`.
When replacing that talk's build, keep those fonts or update their paths
in `css/home.css`.
The featured talk is maintained directly in `index.html`; update its title,
event, dates, and link when featuring a different presentation.

## Research

`researchExp.html` presents current LANSCE work as project cards, followed by
an experience timeline with expandable role details. The timeline uses native
HTML `<details>` elements and works without JavaScript. Current work is always
visible. Existing `collapseOne` through `collapseFive` fragment IDs are retained.

Layout-specific styles are in `css/research.css`. Maintain current projects
in `.research-work-grid` and earlier roles in `.experience-timeline`, keeping
scientific notation, project links, institutions, and dates with each entry.

## About

`about.html` presents the research journey and trail-running interests, with
existing local images from `images/ILikeRunning.jpeg` and `images/Losalamos.jpg`.
Layout-specific styles are in `css/about.css`. The biography, background
waypoints, trail suggestions, and links work without JavaScript.

## Contact

`contact.html` links to the GitHub account, with no contact form or other social
accounts. Layout-specific styles are in `css/contact.css`. It uses local styles
and works without JavaScript or an external icon library.

## Publications

`publications.html` lists public communications, peer-reviewed papers, and
conference proceedings. All entries are visible without JavaScript; category
links jump to each section. The existing `collapseOne`, `collapseTwo`, and
`collapseThree` fragment IDs are retained for bookmarked links.

Layout-specific styles are in `css/publications.css`. Each publication is a
pair of paragraphs: the title, followed by authors and the linked journal or
publication record. Keep that pairing when adding entries, and update the
category counts in the sidebar. If a citation has no URL, display its venue
as text rather than an empty link.

## Presentations

The Talks tab links to `presentations.html`, styled with `css/home.css` and
`css/talks.css`. The dropdown lists talks with hosted slides, newest first.
A small inline script updates the selected talk's title, event, location, and
link; the initial presentation and history links also work without JavaScript.
The page includes a slide keyboard guide. The full talk history remains on
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
