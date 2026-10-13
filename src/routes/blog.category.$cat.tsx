import { createFileRoute, notFound } from '@tanstack/react-router';
import { BlogListing } from './blog';
import { categories, categorySlug, categoryDescriptions } from '@/content/blog';
import { pageHead } from '@/config/site';
export const Route = createFileRoute('/blog/category/$cat')({ loader: ({params}) => { const category = categories.find(c => categorySlug(c) === params.cat && c !== 'All'); if (!category) throw notFound(); return category; }, head: ({loaderData, params}) => pageHead(`${loaderData || 'Nutrition'} articles`, categoryDescriptions[loaderData || ''] || 'Read nutrition articles by registered dietitian Deepthi Harkar on diabetes, PCOS, GLP-1 medications, kidney and heart health, and recipes.', `/blog/category/${params.cat}`), component: CategoryPage });
function CategoryPage() { return <BlogListing category={Route.useLoaderData()} />; }
