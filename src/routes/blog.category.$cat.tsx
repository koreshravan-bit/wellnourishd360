import { createFileRoute, notFound } from '@tanstack/react-router';
import { BlogListing } from './blog';
import { categories, categorySlug } from '@/content/blog';
import { pageHead } from '@/config/site';
export const Route = createFileRoute('/blog/category/$cat')({ loader: ({params}) => { const category = categories.find(c => categorySlug(c) === params.cat && c !== 'All'); if (!category) throw notFound(); return category; }, head: ({loaderData, params}) => pageHead(`${loaderData || 'Nutrition'} articles`, `Browse ${loaderData || 'nutrition'} articles from WellNourishD360.`, `/blog/category/${params.cat}`), component: CategoryPage });
function CategoryPage() { return <BlogListing category={Route.useLoaderData()} />; }
