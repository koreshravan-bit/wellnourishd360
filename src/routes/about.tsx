import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { BookButton, ActionLink } from '@/components/site';
import { DietitianPhoto } from '@/components/dietitian-photo';
import { conditions } from '@/content/conditions';
import { pageHead, site, statesLabel } from '@/config/site';

export const Route = createFileRoute('/about')({
  head: () => ({
    ...pageHead(`About ${site.dietitian}, ${site.credentials}`, `Meet ${site.dietitian}, ${site.credentials}: a registered dietitian with more than 15 years in clinical nutrition and health care, offering inclusive video care for individuals, families, groups and workplaces in ${site.states.length} states.`, '/about'),
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Person', name: site.dietitian,
      honorificSuffix: site.credentials, jobTitle: 'Registered Dietitian Nutritionist',
      alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of Delaware' }, { '@type': 'CollegeOrUniversity', name: 'Acharya N.G. Ranga Agricultural University' }],
      knowsLanguage: ['English', 'Hindi', 'Telugu'],
      memberOf: { '@type': 'Organization', name: 'Delaware Academy of Nutrition and Dietetics' },
      affiliation: { '@type': 'Organization', name: 'Nutrihealth Foundation' },
      identifier: site.npi,
      image: site.url ? `${site.url.replace(/\/$/, '')}${import.meta.env.BASE_URL}images/deepthi-harkar.webp` : undefined,
    }) }],
  }),
  component: About,
});

const formats: [string, string, string | null][] = [
  ['One-on-one visits', 'Private video visits built around your labs, health history and goals.', null],
  ['Family nutrition', 'Meals and routines that work for different ages and needs at the same table.', 'group-family'],
  ['Group sessions', 'Small-group programs with shared learning, ideas and encouragement.', 'group-family'],
  ['Corporate wellness', 'Workshops and programs for teams, drawing on her health-plan program design work.', 'corporate-wellness'],
];

const roles = [
  ['Chief Operations Officer', 'Nutrihealth Foundation', '2024–present'],
  ['Medical Management Initiative Specialist', 'AmeriHealth Caritas', '2022'],
  ['Clinical Transformation Consultant', 'Gateway Health', '2016–2022'],
  ['Health Strategy Consultant', 'Highmark', '2013–2016'],
  ['President', 'Delaware Academy of Nutrition and Dietetics', '2012–2014'],
  ['Bariatric Dietitian', 'St. Francis Hospital, Wilmington, DE', '2011–2013'],
  ['Consultant Registered Dietitian', 'Supreme Care Inc.', '2010–2012'],
];

function About() {
  return <main>
    <section className="section bg-pale"><div className="container-site grid md:grid-cols-2 gap-12 items-center">
      <div><p className="eyebrow mb-5">MEET YOUR DIETITIAN</p><h1 className="display text-5xl md:text-6xl">{site.dietitian}, {site.credentials}</h1><p className="body-lede mt-6">Clinical experience, health-plan insight and a practical, inclusive approach to food, for individuals, families, groups and workplaces.</p><div className="flex flex-wrap gap-3 mt-7"><BookButton>Book an appointment</BookButton><ActionLink to="/insurance">Check my insurance</ActionLink></div></div>
      <DietitianPhoto className="h-[370px] md:h-[500px] w-full rounded-t-[170px] rounded-b-xl" />
    </div></section>
    <section className="section"><div className="container-site grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16">
      <div><p className="eyebrow mb-4">HER STORY</p><h2 className="display text-4xl md:text-5xl">From the clinic to everyday care.</h2></div>
      <div className="space-y-9 text-muted-foreground">
        <div><h3 className="display text-3xl text-foreground mb-3">Clinical roots</h3><p>Deepthi began her dietitian career in 2010. At St. Francis Hospital in Wilmington, she met with people before and after bariatric surgery, led support groups and education sessions, and counseled people managing weight and chronic conditions without surgery. At Supreme Care Inc., she handled nutrition assessments, care plans, staff training and menu approval. Her background also includes enteral and parenteral nutrition support in critical care.</p><p className="mt-3">Those settings gave her a close view of how nutrition plans need to adapt as people’s needs change.</p></div>
        <div><h3 className="display text-3xl text-foreground mb-3">Inside health plans</h3><p>She went on to work in health strategy and clinical transformation at Highmark, Gateway Health and AmeriHealth Caritas. At Highmark, she designed data-driven workplace wellness and health-management programs. She also published a nutrition article for Highmark’s health blog. That experience helps her understand how care programs and coverage work, so clients can ask informed questions about their benefits.</p></div>
        <div><h3 className="display text-3xl text-foreground mb-3">Leadership in the field</h3><p>Deepthi served as President of the Delaware Academy of Nutrition and Dietetics from 2012 to 2014. She is currently Chief Operations Officer of Nutrihealth Foundation.</p></div>
        <div><h3 className="display text-3xl text-foreground mb-3">How she works with you</h3><p>Her approach is evidence-based, without fad diets. She builds nutrition plans around your labs, culture, budget and schedule, and coordinates with your doctors when your care calls for it.</p></div>
        <div><h3 className="display text-3xl text-foreground mb-3">Care for every table</h3><p>Food is tied to family, culture and faith. Deepthi speaks English, Hindi and Telugu and is plant-based nutrition certified, and she adapts plans to vegetarian, vegan and traditional ways of eating rather than asking you to give up the dishes you grew up with. Whatever your background, body size or health history, you’ll be met without judgment.</p></div>
      </div>
    </div></section>
    <section className="section bg-pale"><div className="container-site"><p className="eyebrow mb-4">WAYS TO WORK TOGETHER</p><h2 className="display text-4xl md:text-5xl mb-10">Support in the format that fits.</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{formats.map(([title, copy, slug]) => <div key={title} className="card-frame p-6 flex flex-col"><h3 className="display text-2xl">{title}</h3><p className="text-muted-foreground text-sm mt-3 flex-1">{copy}</p>{slug ? <Link to="/conditions/$slug" params={{ slug }} className="text-brand-text font-semibold text-sm mt-5">Learn more →</Link> : null}</div>)}</div><div className="border-t border-border mt-12 pt-6"><p className="eyebrow mb-2">WHERE SHE PRACTICES</p><p className="text-lg">Video visits for clients located in {statesLabel}.</p></div></div></section>
    <section className="section"><div className="container-site"><p className="eyebrow mb-4">BACKGROUND</p><h2 className="display text-4xl md:text-5xl mb-10">Education and experience</h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Education</h3><ul className="space-y-3"><li>MS, Health Promotion — University of Delaware</li><li>MSc, Foods & Nutrition — Acharya N.G. Ranga Agricultural University</li></ul></div>
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Certifications &amp; licenses</h3><ul className="space-y-3"><li>Registered Dietitian Nutritionist (RDN)</li><li>Licensed Dietitian (LDN) · License #{site.license}</li><li>National Diabetes Prevention Program (NDPP) Lifestyle Coach</li><li>Plant-Based Nutrition Certification</li></ul></div>
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Languages</h3><p>English · Hindi · Telugu</p></div>
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Professional roles</h3><ul className="divide-y divide-border">{roles.map(([role, organization, years]) => <li key={`${role}-${organization}`} className="py-3 first:pt-0"><strong className="block">{role}</strong><span className="text-sm text-muted-foreground">{organization} · {years}</span></li>)}</ul></div>
      </div>
    </div></section>
    <section className="section bg-pale"><div className="container-site"><p className="eyebrow mb-4">AREAS OF CARE</p><h2 className="display text-4xl md:text-5xl mb-8">Find support for your needs.</h2><div className="grid md:grid-cols-2 gap-x-12 border-t border-border">{conditions.map(c => <Link key={c.slug} to="/conditions/$slug" params={{slug:c.slug}} className="flex items-center justify-between gap-4 border-b border-border py-5 group"><span className="font-display text-2xl group-hover:text-primary">{c.name}</span><ArrowUpRight className="size-5 shrink-0 text-brand-text" /></Link>)}</div></div></section>
    <section className="bg-cta py-12 text-primary-foreground"><div className="container-site flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="font-mono text-xs">VIDEO CARE IN {site.states.length} STATES</p><h2 className="display text-4xl mt-2">Ready to talk through your goals?</h2></div><BookButton variant="outline" className="bg-white border-white text-brand-text shrink-0 hover:bg-cta-soft">Book an appointment</BookButton></div></section>
  </main>;
}
