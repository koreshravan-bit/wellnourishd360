// Single source of truth for every public path on wellnourishd360.com.
// Used by vite.config.ts (prerender), scripts/generate-sitemap.mjs and the tests.
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fm from 'front-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = join(root, 'src/content/blog');

export const SITE_URL = 'https://wellnourishd360.com';

export const careSlugs = ['diabetes', 'pcos', 'weight-management', 'glp-1', 'heart-health', 'kidney-health', 'plant-based', 'intuitive-eating', 'corporate-wellness', 'group-family'];

const isoDate = (value) => new Date(value).toISOString().slice(0, 10);

export const articles = readdirSync(blogDir)
  .filter((file) => file.endsWith('.md'))
  .sort()
  .map((file) => {
    const { attributes } = fm(readFileSync(join(blogDir, file), 'utf8'));
    return { slug: String(attributes.slug ?? file.replace(/\.md$/, '')).trim(), updated: isoDate(attributes.updated ?? attributes.date), hasVideo: Boolean(attributes.videoUrl) };
  });

const allCategories = ['diabetes', 'pcos', 'glp-1', 'kidney', 'heart', 'recipes', 'videos'];
// The "videos" listing is only published while at least one post has a video.
export const blogCategories = allCategories.filter((cat) => cat !== 'videos' || articles.some((a) => a.hasVideo));

export const staticPaths = ['/', '/insurance', '/about', '/blog', '/privacy', '/notice-of-privacy-practices', '/terms'];

/** Every indexable path (sitemap). */
export const sitePaths = [
  ...staticPaths,
  ...careSlugs.map((slug) => `/conditions/${slug}`),
  ...blogCategories.map((cat) => `/blog/category/${cat}`),
  ...articles.map((a) => `/blog/${a.slug}`),
];

/** Everything prerendered, including the GitHub Pages not-found page. */
export const prerenderPaths = [...sitePaths, '/404'];

/** Sitemap entries with lastmod: articles use their `updated` date, everything else the build date. */
export function sitemapEntries(buildDate = isoDate(Date.now())) {
  const updatedBySlug = new Map(articles.map((a) => [`/blog/${a.slug}`, a.updated]));
  return sitePaths.map((path) => ({ path, lastmod: updatedBySlug.get(path) ?? buildDate }));
}
