# kkghrsbsb.github.io

Personal blog built with Astro.

This project is based on an existing Astro blog template and extended with a music player, a comments system and UI/UX customizations.

## Stack

- Framework: Astro
- Music Player: APlayer
- Playlist API: Meting API (NetEase Cloud Music)
- Comments System: giscus (Github Discussions)

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

## Giscus

A comments system powered by [GitHub Discussions][discussions]. Let visitors leave comments and reactions on your website via GitHub! Heavily inspired by [utterances][utterances].

- https://github.com/giscus/giscus

Features:
- [Open source][repo]. 🌏
- No tracking, no ads, always free. 📡 🚫
- No database needed. All data is stored in GitHub Discussions. :octocat:
- Supports [custom themes][creating-custom-themes]! 🌗
- Supports [multiple languages][multiple-languages]. 🌐
- [Extensively configurable][advanced-usage]. 🔧
- Automatically fetches new comments and edits from GitHub. 🔃
- [Can be self-hosted][self-hosting]! 🤳

[giscus]: https://giscus.app
[discussions]: https://docs.github.com/en/discussions
[utterances]: https://github.com/utterance/utterances
[repo]: https://github.com/giscus/giscus
[advanced-usage]: https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md
[creating-custom-themes]: https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme
[multiple-languages]: https://github.com/giscus/giscus/blob/main/CONTRIBUTING.md#adding-localizations
[self-hosting]: https://github.com/giscus/giscus/blob/main/SELF-HOSTING.md

## flexsearch

Next-Generation full-text search library for Browser and Node.js

- https://github.com/nextapps-de/flexsearch

Create a search box embedded in blog/ page, allowing users to search for blog posts by title, tags, and description ...