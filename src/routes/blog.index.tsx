import { createFileRoute } from '@tanstack/react-router';
import { BlogListing } from './blog';
import { pageHead } from '@/config/site';
export const Route = createFileRoute('/blog/')({ head: () => pageHead('Nutrition articles', 'Practical, plain-spoken articles on nutrition, diabetes, PCOS, heart and kidney health.', '/blog'), component: () => <BlogListing /> });
