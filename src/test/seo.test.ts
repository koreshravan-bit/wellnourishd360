import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { careSlugs, blogCategories, articles, sitePaths, prerenderPaths } from '../../scripts/site-routes.mjs';
import { conditions } from '@/content/conditions';
import { posts, categories, categorySlug } from '@/content/blog';
import { canonical, pageHead, site, pricesConfirmed, hasPhone, hasLicense } from '@/config/site';

const ORIGIN = 'https://wellnourishd360.com';

describe('shared route list', () => {
  it('matches the ten care areas', () => { expect([...careSlugs].sort()).toEqual(conditions.map(c => c.slug).sort()); });
  it('matches the blog categories shown on the site', () => { expect(blogCategories).toEqual(categories.filter(c => c !== 'All').map(categorySlug)); });
  it('lists every article with its updated date', () => { expect(articles.map(a => a.slug).sort()).toEqual(posts.map(p => p.slug).sort()); for (const a of articles) expect(posts.find(p => p.slug === a.slug)?.updated).toBe(a.updated); });
  it('prerenders the 404 page but keeps it out of the sitemap', () => { expect(prerenderPaths).toContain('/404'); expect(sitePaths).not.toContain('/404'); });
});

describe('domain-first metadata', () => {
  it('uses wellnourishd360.com as the site URL', () => { expect(site.url).toBe(ORIGIN); expect(canonical('/about')).toBe(`${ORIGIN}/about`); });
  it('gives every page an absolute share image', () => {
    const meta = pageHead('T', 'D', '/x').meta as Record<string, string>[];
    expect(meta.find(m => m['property'] === 'og:image')?.['content']).toBe(`${ORIGIN}/og/default.png`);
    expect(meta.find(m => m['name'] === 'twitter:image')?.['content']).toBe(`${ORIGIN}/og/default.png`);
  });
});

describe('placeholders stay hidden', () => {
  it('hides the placeholder phone, licence and prices', () => { expect(hasPhone).toBe(false); expect(hasLicense).toBe(false); expect(pricesConfirmed).toBe(false); });
  it('has no reviews until real ones exist', () => { expect(site.reviews).toHaveLength(0); });
});

// Runs against the static build output (after `bun run build`); skipped when no build exists.
const outDir = ['.output/public', 'dist/client'].find(d => existsSync(join(d, 'index.html')));
const htmlFiles = (dir: string): string[] => readdirSync(dir).flatMap(name => { const p = join(dir, name); return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith('.html') ? [p] : []; });
const URL_KEYS = new Set(['@id', 'url', 'item', 'logo', 'image', 'mainEntityOfPage']);
function collectUrls(node: unknown, found: string[] = []): string[] {
  if (Array.isArray(node)) node.forEach(n => collectUrls(n, found));
  else if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) { if (URL_KEYS.has(k) && typeof v === 'string') found.push(v); else collectUrls(v, found); }
  return found;
}

describe.skipIf(!outDir)('prerendered JSON-LD', () => {
  it('is valid JSON with absolute wellnourishd360.com URLs on every page', () => {
    const files = htmlFiles(outDir!);
    expect(files.length).toBeGreaterThan(20);
    let blocks = 0;
    for (const file of files) {
      const html = readFileSync(file, 'utf8');
      for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
        blocks++;
        const data = JSON.parse(json ?? '');
        for (const u of collectUrls(data)) expect(u, `${file}: ${u}`).toMatch(/^https:\/\/wellnourishd360\.com(\/|$)/);
      }
    }
    expect(blocks).toBe(20);
  });
});

describe('answer-first condition content', () => {
  it('gives every condition a search title of at most 60 characters', () => { for (const c of conditions) { expect(c.seoTitle, c.slug).toBeTruthy(); expect(c.seoTitle.length, c.slug).toBeLessThanOrEqual(60); } });
  it('gives every condition a question and a 40–60 word answer starting with "Yes."', () => {
    for (const c of conditions) {
      expect(c.answerQuestion.endsWith('?'), c.slug).toBe(true);
      expect(c.answer.startsWith('Yes.'), c.slug).toBe(true);
      const words = c.answer.split(/\s+/).length;
      expect(words, c.slug).toBeGreaterThanOrEqual(40); expect(words, c.slug).toBeLessThanOrEqual(60);
    }
  });
  it('lists /locations as a public path', () => { expect(sitePaths).toContain('/locations'); });
});

const pageFile = (path: string) => join(outDir!, `${path.slice(1)}.html`);
describe.skipIf(!outDir)('prerendered AEO pages', () => {
  it('renders /locations with one H2 per practice state', () => {
    const html = readFileSync(pageFile('/locations'), 'utf8');
    const h2s = [...html.matchAll(/<h2[^>]*>([^<]*)<\/h2>/g)].map(m => m[1]);
    expect(site.states).toHaveLength(17);
    for (const name of ['Arizona', 'New Jersey', 'Wisconsin']) expect(h2s).toContain(name);
    expect(h2s.filter(h => ['Arizona','California','Colorado','Connecticut','Delaware','Hawaii','Indiana','Massachusetts','Michigan','New Jersey','New York','Oklahoma','Oregon','Pennsylvania','Texas','Virginia','Wisconsin'].includes(h ?? ''))).toHaveLength(17);
  });
  it('has FAQPage JSON-LD on home and about', () => {
    expect(readFileSync(join(outDir!, 'index.html'), 'utf8')).toContain('"@type":"FAQPage"');
    expect(readFileSync(pageFile('/about'), 'utf8')).toContain('"@type":"FAQPage"');
  });
});
