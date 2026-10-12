import { createFileRoute, Link } from '@tanstack/react-router';
import { BookButton, ActionLink } from '@/components/site';
import { conditions } from '@/content/conditions';
import { canonical, pageHead, site, stateNames } from '@/config/site';
import { breadcrumbList, ldScript, PRACTICE_ID, WEBSITE_ID } from '@/lib/schema';

const states = site.states.map((code) => ({ code, name: stateNames[code] ?? code }));
const TITLE = `Online Dietitian Visits in ${site.states.length} States`;
const DESCRIPTION = `Video visits with registered dietitian ${site.dietitian}, ${site.credentials}, for clients located in ${site.states.length} states. Most major insurance plans accepted; self-pay available.`;

export const Route = createFileRoute('/locations')({
  head: () => ({
    ...pageHead(TITLE, DESCRIPTION, '/locations'),
    scripts: [ldScript([
      { '@type': 'WebPage', '@id': canonical('/locations'), url: canonical('/locations'), name: TITLE, description: DESCRIPTION, isPartOf: { '@id': WEBSITE_ID }, about: { '@id': PRACTICE_ID } },
      breadcrumbList([['Home', '/'], ['Where we practice', '/locations']]),
    ])],
  }),
  component: Locations,
});

function Locations() {
  return <main>
    <section className="bg-pale py-14 md:py-20"><div className="container-site max-w-4xl">
      <p className="eyebrow mb-5">WHERE WE PRACTICE</p>
      <h1 className="display text-5xl md:text-6xl">Online dietitian visits in {site.states.length} states</h1>
      <p className="body-lede mt-6">{site.dietitian}, {site.credentials}, sees clients by secure video in {site.states.length} states. You need to be located in one of these states at the time of your visit. WellNourishD360 is in network with most major insurance plans, and self-pay is available.</p>
      <div className="flex flex-wrap gap-3 mt-8"><BookButton>Book an appointment</BookButton><ActionLink to="/insurance">Check my insurance</ActionLink></div>
    </div></section>
    <section className="section pb-0"><div className="container-site max-w-4xl">
      <p className="text-muted-foreground"><span className="font-semibold text-foreground">Common reasons people book: </span>{conditions.map((c, i) => <span key={c.slug}>{i > 0 && ', '}<Link to="/conditions/$slug" params={{ slug: c.slug }} className="text-brand-text font-semibold underline underline-offset-2">{c.name}</Link></span>)}.</p>
    </div></section>
    <section className="section"><div className="container-site max-w-4xl divide-y divide-border border-y border-border">
      {states.map(({ code, name }) => <div key={code} className="py-7">
        <h2 className="display text-3xl">{name}</h2>
        <p className="text-muted-foreground mt-3">Video visits with {site.dietitian}, {site.credentials}, are available to clients located in {name} at the time of the visit. Most major insurance plans are accepted, and self-pay is available.</p>
        <p className="mt-3 text-sm flex flex-wrap gap-x-5 gap-y-2"><a href={site.booking.default} target="_blank" rel="noopener noreferrer" className="text-brand-text font-semibold underline underline-offset-2">Book a visit</a><Link to="/insurance" className="text-brand-text font-semibold underline underline-offset-2">Insurance &amp; pricing</Link></p>
      </div>)}
    </div></section>
    <section className="bg-cta py-12 text-primary-foreground"><div className="container-site flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="font-mono text-xs tracking-widest">VIDEO CARE IN {site.states.length} STATES</p><h2 className="display text-4xl mt-2">Ready to talk through your goals?</h2></div><BookButton variant="outline" className="bg-white border-white text-brand-text shrink-0 hover:bg-cta-soft">Book an appointment</BookButton></div></section>
  </main>;
}
