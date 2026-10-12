// Post-build: writes sitemap.xml, robots.txt and llms.txt into the static output.
// Run with bun (it imports the TypeScript site config and care-area content directly).
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { SITE_URL, sitemapEntries } from './site-routes.mjs';
import { site, stateNames } from '../src/config/site.ts';
import { conditions } from '../src/content/conditions.ts';

const url = (process.env.VITE_SITE_URL || SITE_URL).replace(/\/$/, '');
const out = existsSync('.output/public/index.html') ? '.output/public' : 'dist/client';
const buildDate = new Date().toISOString().slice(0, 10);
const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
mkdirSync(out, { recursive: true });

writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries(buildDate).map(({ path, lastmod }) => `  <url><loc>${escape(`${url}${path}`)}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`);

const searchBots = ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot', 'Claude-User', 'Bingbot', 'Googlebot'];
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\n${searchBots.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join('\n')}\nSitemap: ${SITE_URL}/sitemap.xml\n`);

const states = site.states.map((s) => stateNames[s] ?? s);
const stateList = `${states.slice(0, -1).join(', ')} and ${states.at(-1)}`;
writeFileSync(join(out, 'llms.txt'), `# ${site.name}

> ${site.name} is a telehealth nutrition practice led by ${site.dietitian}, ${site.credentials} (NPI ${site.npi}), a registered dietitian nutritionist. She offers medical nutrition therapy and lifestyle nutrition care by secure video visit to clients located in ${site.states.length} states: ${stateList}. The practice is in network with most major health insurance plans, including Aetna, Cigna, UnitedHealthcare, Horizon BCBS NJ and Medicare; self-pay is also available.

## Areas of care

${conditions.map((c) => `- [${c.name}](${url}/conditions/${c.slug}): ${c.short}`).join('\n')}

## Practice

- [About ${site.dietitian}](${url}/about): background, credentials and approach to care
- [Insurance & pricing](${url}/insurance): insurance coverage, self-pay and cancellation policy
- [Blog](${url}/blog): nutrition articles and recipes
`);

console.log(`Wrote sitemap.xml, robots.txt and llms.txt to ${out}`);
