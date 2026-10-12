import { canonical, ogImage, site, siteOrigin, stateNames } from '@/config/site';
import { conditions, type Condition } from '@/content/conditions';
import type { Post } from '@/content/blog';

export const PRACTICE_ID = `${siteOrigin}/#practice`;
export const DEEPTHI_ID = `${siteOrigin}/#deepthi`;
export const WEBSITE_ID = `${siteOrigin}/#website`;
export const buildDate: string = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toISOString().slice(0, 10);

type Json = Record<string, unknown>;
export const ldScript = (data: Json | Json[]) => ({ type: 'application/ld+json', children: JSON.stringify(Array.isArray(data) ? { '@context': 'https://schema.org', '@graph': data } : { '@context': 'https://schema.org', ...data }) });

/** Breadcrumb items: [name, path?]. Items without a path have no page of their own. */
export const breadcrumbList = (items: [string, string?][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, ...(path ? { item: canonical(path) } : {}) })),
});

export const faqPage = (items: [string, string][], path: string) => ({
  '@type': 'FAQPage',
  '@id': `${canonical(path)}#faq`,
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const websiteNode = () => ({ '@type': 'WebSite', '@id': WEBSITE_ID, name: 'WellNourishD360', url: canonical('/'), publisher: { '@id': PRACTICE_ID } });

export const practiceNode = () => ({
  '@type': 'MedicalBusiness',
  '@id': PRACTICE_ID,
  name: site.name,
  url: canonical('/'),
  logo: canonical('/brand/wellnourish-logo.svg'),
  image: ogImage.url,
  email: site.email,
  medicalSpecialty: 'DietNutrition',
  areaServed: site.states.map((s) => ({ '@type': 'State', name: stateNames[s] ?? s })),
  availableService: conditions.map((c) => ({ '@type': 'MedicalTherapy', name: c.name, url: canonical(`/conditions/${c.slug}`) })),
  founder: { '@id': DEEPTHI_ID },
});

export const personNode = (description: string) => ({
  '@type': 'Person',
  '@id': DEEPTHI_ID,
  name: site.dietitian,
  honorificSuffix: site.credentials,
  jobTitle: 'Registered Dietitian Nutritionist',
  description,
  image: canonical('/images/deepthi-harkar.webp'),
  url: canonical('/about'),
  worksFor: { '@id': PRACTICE_ID },
  knowsLanguage: ['English', 'Hindi', 'Telugu'],
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of Delaware' }, { '@type': 'CollegeOrUniversity', name: 'Acharya N.G. Ranga Agricultural University' }],
  hasCredential: ['Registered Dietitian Nutritionist (RDN)', 'Licensed Dietitian Nutritionist (LDN)', 'CDC Diabetes Prevention Program Lifestyle Coach', 'Certified Plant-Based Nutrition Specialist'].map((name) => ({ '@type': 'EducationalOccupationalCredential', name })),
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: site.npi },
  sameAs: [`https://npiregistry.cms.hhs.gov/provider-view/${site.npi}`],
});

export const conditionNodes = (c: Condition) => {
  const path = `/conditions/${c.slug}`;
  return [
    {
      '@type': 'MedicalWebPage',
      '@id': canonical(path),
      name: c.name,
      description: c.metaDescription,
      url: canonical(path),
      about: c.category === 'clinical' ? { '@type': 'MedicalCondition', name: c.name } : { '@type': 'Thing', name: c.name },
      reviewedBy: { '@id': DEEPTHI_ID },
      lastReviewed: buildDate,
      isPartOf: { '@id': WEBSITE_ID },
    },
    faqPage(c.faq, path),
    breadcrumbList([['Home', '/'], ['Conditions'], [c.name, path]]),
  ];
};

export const articleNodes = (post: Post) => {
  const path = `/blog/${post.slug}`;
  return [
    {
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.updated,
      image: ogImage.url,
      author: { '@id': DEEPTHI_ID, name: `${site.dietitian}, ${site.credentials}` },
      publisher: { '@id': PRACTICE_ID },
      mainEntityOfPage: canonical(path),
    },
    breadcrumbList([['Home', '/'], ['Blog', '/blog'], [post.title, path]]),
  ];
};
