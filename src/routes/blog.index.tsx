import { createFileRoute } from '@tanstack/react-router';
import { BlogListing } from './blog';
import { pageHead } from '@/config/site';
export const Route = createFileRoute('/blog/')({ head: () => pageHead('Nutrition articles', "Read practical nutrition articles by registered dietitian Deepthi Harkar on diabetes, PCOS, GLP-1 medications, kidney and heart health, and recipes.", '/blog'), component: () => <BlogListing /> });
