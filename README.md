# kkghrsbsb.github.io

Personal blog built with Astro.

This project is based on an existing Astro blog template and extended with a music player, theme system refinements, and UI/UX customizations.

## Stack

- Framework: Astro
- Music Player: APlayer
- Playlist API: Meting API (NetEase Cloud Music)

## Base Template

This blog is built on top of:

- astro-erudite  
  https://github.com/jktrn/astro-erudite

The template is customized mainly in:
- [Astro](https://astro.build/)'s [Islands](https://docs.astro.build/en/concepts/islands/) architecture for selective hydration and client-side interactivity while maintaining fast static site rendering.
- [shadcn/ui](https://ui.shadcn.com/) with [Tailwind](https://tailwindcss.com/) color conventions for automatic light and dark theme styling. Features accessible, theme-aware UI components for navigation, buttons, and more.
- [Expressive Code](https://expressive-code.com/) for enhanced code block styling, syntax highlighting, and code block titles.
- Blog authoring with [MDX](https://mdxjs.com/) for component-rich content and $\LaTeX$ math rendering via [KaTeX](https://katex.org/).
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/) in <abbr title="Single Page Application">SPA</abbr> mode for smooth route animations.
- SEO optimization with granular metadata and [Open Graph](https://ogp.me/) tag control for each post.
- [RSS](https://en.wikipedia.org/wiki/RSS) feed and sitemap generation.
- Subpost support for breaking long content into digestible parts and organizing related series.
- Author profiles with a dedicated authors page and multi-author post support.
- Project tags with a dedicated tags page for post categorization and discovery.
- Custom Callout component variants for enhanced technical writing.


## Music Player

The homepage integrates **APlayer**:

- https://github.com/DIYgod/APlayer

Features:
- playlist
- lyrics (LRC)
- progress / volume control

Personal Customizations:
- unified accent color via CSS variables
- light/dark theme adaptation (OKLCH-based)
- dark-mode hover and contrast fixes
- removal of default bright borders, shadows, and scrollbar issues

## Playlist Data

Music data is provided by **Meting API**:

- https://github.com/injahow/meting-api

Used only as an external API service to fetch NetEase Cloud Music playlists.
