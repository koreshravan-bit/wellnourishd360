<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the site on TanStack Start's file router rather than adding another router, because the preview and deployment runtime require the existing bootstrap.
- Keep marketing content and booking destinations in local config and Markdown; no visitor health information is stored on this site.
- Use a single condition template and local data for the six care pages so presentation remains consistent.
- Prerender all known content paths and deploy the client output to GitHub Pages on the custom domain in public/CNAME; set VITE_BASE_PATH and VITE_SITE_URL in the workflow to match that domain so links and canonical metadata stay correct.
- Serve brand SVGs from public/brand through the Vite base path so the same markup works at repository-hosted URLs.
- Load the dietitian portrait from public/images through the Vite base path and retain a placeholder fallback until the real photo is supplied.
- Derive the standalone error page's palette from the root tokens in src/styles.css at bundle time, so error screens cannot drift from the official design system.
