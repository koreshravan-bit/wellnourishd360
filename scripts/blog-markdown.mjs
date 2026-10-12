// Vite plugin: turns blog Markdown into plain JS at build time so `marked` and
// `front-matter` never reach the browser.
//   ./post.md?meta -> export default { title, slug, date, ... }  (no body)
//   ./post.md?html -> export default "<rendered article html>"
import { readFileSync } from 'node:fs';
import fm from 'front-matter';
import { marked } from 'marked';

const isoDate = (value) => new Date(value).toISOString().slice(0, 10);

export function articleHtml(body) {
  const transformed = body
    .replace(/\[key-takeaways\]([\s\S]*?)\[\/key-takeaways\]/g, (_, lines) => `<div class="nutrition-facts"><h3>Key takeaways</h3>${lines.trim().split('\n').map((line) => { const [label, value] = line.split('|'); return `<p><span>${(label || '').trim()}</span><strong>${(value || '').trim()}</strong></p>`; }).join('')}</div>`)
    .replace(/\[inline-cta\]/g, '<div data-inline-cta></div>');
  return String(marked.parse(transformed));
}

export function blogMarkdown() {
  return {
    name: 'wellnourish-blog-markdown',
    enforce: 'pre',
    load(id) {
      const [file, query = ''] = id.split('?');
      if (!file.endsWith('.md')) return null;
      const params = new URLSearchParams(query);
      const wantsMeta = params.has('meta');
      const wantsHtml = params.has('html');
      if (!wantsMeta && !wantsHtml) return null;
      this.addWatchFile?.(file);
      const { attributes, body } = fm(readFileSync(file, 'utf8'));
      if (wantsHtml) return `export default ${JSON.stringify(articleHtml(body))};`;
      const meta = { ...attributes, slug: String(attributes.slug).trim(), date: isoDate(attributes.date), updated: isoDate(attributes.updated ?? attributes.date), featured: Boolean(attributes.featured) };
      return `export default ${JSON.stringify(meta)};`;
    },
  };
}
