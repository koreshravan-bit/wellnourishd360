export declare const SITE_URL: string;
export declare const careSlugs: string[];
export declare const articles: { slug: string; updated: string; hasVideo: boolean }[];
export declare const blogCategories: string[];
export declare const staticPaths: string[];
export declare const sitePaths: string[];
export declare const prerenderPaths: string[];
export declare function sitemapEntries(buildDate?: string): { path: string; lastmod: string }[];
