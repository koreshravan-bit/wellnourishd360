import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const url = process.env.VITE_SITE_URL?.replace(/\/$/, '');
const out = 'dist/client';
if (!url) {
  console.log('Sitemap skipped: set VITE_SITE_URL to the public site URL.');
  process.exit(0);
}
const care = ['diabetes','pcos','glp-1','kidney-health','heart-health','general-nutrition'];
const categories = ['diabetes','pcos','glp-1','kidney','heart','recipes','videos'];
const articles = readdirSync('src/content/blog').filter(f => f.endsWith('.md')).map(f => /\nslug:\s*([^\n]+)/.exec(readFileSync(join('src/content/blog',f),'utf8'))?.[1]?.trim()).filter(Boolean);
const paths = ['','insurance','about','blog','privacy','notice-of-privacy-practices','terms',...care.map(x=>`conditions/${x}`),...categories.map(x=>`blog/category/${x}`),...articles.map(x=>`blog/${x}`)];
const escape = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
mkdirSync(out,{recursive:true});
writeFileSync(join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(p=>`  <url><loc>${escape(`${url}/${p}`)}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(out,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`);
