import fm from 'front-matter';
import { marked } from 'marked';
export type Post = { title: string; slug: string; date: string; updated: string; category: string; excerpt: string; readingTime: number; coverImage: string; videoUrl?: string; featured: boolean; body: string };
type Frontmatter = Omit<Post, 'body'>;
const files = import.meta.glob('./blog/*.md', { query: '?raw', import: 'default', eager: true });
export const posts: Post[] = Object.values(files).map(raw => { const parsed = fm<Frontmatter>(String(raw)); return { ...parsed.attributes, date: new Date(parsed.attributes.date).toISOString().slice(0,10), updated: new Date(parsed.attributes.updated).toISOString().slice(0,10), body: parsed.body }; }).sort((a,b) => b.date.localeCompare(a.date));
export const postBySlug = (slug: string) => posts.find(p => p.slug === slug);
export const categories = ['All', 'Diabetes', 'PCOS', 'GLP-1', 'Kidney', 'Heart', 'Recipes', 'Videos'];
export const categorySlug = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
export function filteredPosts(category: string) { return category === 'All' ? posts : category === 'Videos' ? posts.filter(p => p.videoUrl) : posts.filter(p => p.category.toLowerCase() === category.toLowerCase()); }
export function articleHtml(body: string) {
 const transformed = body.replace(/\[key-takeaways\]([\s\S]*?)\[\/key-takeaways\]/g, (_, lines: string) => `<div class="nutrition-facts"><h3>Key takeaways</h3>${lines.trim().split('\n').map(line => { const [label, value] = line.split('|'); return `<p><span>${(label || '').trim()}</span><strong>${(value || '').trim()}</strong></p>`; }).join('')}</div>`).replace(/\[inline-cta\]/g, '<div data-inline-cta></div>');
 return String(marked.parse(transformed));
}
