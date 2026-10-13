// Post metadata is available everywhere; each post's HTML is rendered from Markdown at
// build time (scripts/blog-markdown.mjs) and only loaded by its own /blog/$slug route.
export type Post = { title: string; seoTitle?: string; description: string; slug: string; date: string; updated: string; category: string; excerpt: string; readingTime: number; coverImage: string; videoUrl?: string; featured: boolean };
const metaFiles = import.meta.glob<Post>('./blog/*.md', { query: '?meta', import: 'default', eager: true });
const htmlFiles = import.meta.glob<string>('./blog/*.md', { query: '?html', import: 'default' });
export const posts: Post[] = Object.values(metaFiles).sort((a, b) => b.date.localeCompare(a.date));
export const postBySlug = (slug: string) => posts.find(p => p.slug === slug);
export async function loadPostHtml(slug: string) {
  const file = Object.keys(metaFiles).find(key => metaFiles[key]?.slug === slug);
  const load = file ? htmlFiles[file] : undefined;
  return load ? load() : undefined;
}
export const categories = ['All', 'Diabetes', 'PCOS', 'GLP-1', 'Kidney', 'Heart', 'Recipes', ...(posts.some(p => p.videoUrl) ? ['Videos'] : [])];
export const categorySlug = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
export function filteredPosts(category: string) { return category === 'All' ? posts : category === 'Videos' ? posts.filter(p => p.videoUrl) : posts.filter(p => p.category.toLowerCase() === category.toLowerCase()); }

// Search descriptions are separate from the article excerpts shown on cards.
export const categoryDescriptions: Record<string, string> = {
  "Diabetes": "Articles on balanced breakfasts and steady blood sugar, written by registered dietitian Deepthi Harkar, with practical protein and fiber ideas.",
  "PCOS": "Articles on grocery shopping and flexible meals for PCOS, written by registered dietitian Deepthi Harkar, with ideas for protein, fiber and snacks.",
  "GLP-1": "Articles on protein, hydration and smaller meals during GLP-1 treatment, written by registered dietitian Deepthi Harkar for changing appetites.",
  "Kidney": "Articles on potassium, fruits and vegetables with CKD, written by registered dietitian Deepthi Harkar, explaining why lab results guide food choices.",
  "Heart": "Articles on soluble fiber and food choices for LDL cholesterol, written by registered dietitian Deepthi Harkar, with practical ways to adjust fats.",
  "Recipes": "Articles with flexible meal ideas and pantry-friendly recipes, written by registered dietitian Deepthi Harkar, including a quick lentil bowl.",
  "Videos": "Articles and videos on grocery shopping and nutrition, written by registered dietitian Deepthi Harkar, including a PCOS grocery store walk-through."
};
