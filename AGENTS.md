<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the site on TanStack Start's file router rather than adding another router, because the preview and deployment runtime require the existing bootstrap.
- Keep marketing content and booking destinations in local config and Markdown; no visitor health information is stored on this site.
- Use a single condition template and local data for all care pages so presentation remains consistent.
- Prerender all known content paths and deploy the client output to GitHub Pages on the custom domain in public/CNAME; set VITE_BASE_PATH and VITE_SITE_URL in the workflow to match that domain so links and canonical metadata stay correct.
- Serve brand SVGs from public/brand through the Vite base path so the same markup works at repository-hosted URLs.
- Load the dietitian portrait from public/images through the Vite base path and retain a placeholder fallback until the real photo is supplied.
- Derive the standalone error page's palette from the root tokens in src/styles.css at bundle time, so error screens cannot drift from the official design system.
- Keep every public path in scripts/site-routes.mjs and derive prerender pages, the sitemap and route tests from it, so the three never drift.
- Render blog Markdown to HTML at build time (scripts/blog-markdown.mjs, `?meta`/`?html` imports) so Markdown libraries never ship to the browser.
- Build absolute URLs and JSON-LD from site.url (defaulting to the custom domain) via src/lib/schema.ts, because the .com is the only public site.
- Generate robots.txt, sitemap.xml and llms.txt after the build from site config and content, rather than keeping static copies that go stale.

- Keep one focusable `main#main` per content page and the skip link first in the root shell; this preserves keyboard access across shared and error layouts.
- Hide the mobile booking bar based on the current router location and its body spacing via the Book main marker, so both navigation and static output agree.
- Keep article search titles and descriptions in Markdown frontmatter, separate from visible titles and card excerpts, so metadata edits do not change editorial copy.
- Legal pages use the shared LegalContact component and site-configured effective date, so optional contact details and policy dates stay consistent.
