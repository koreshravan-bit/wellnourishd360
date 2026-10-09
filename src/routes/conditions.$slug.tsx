import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { Check } from 'lucide-react';
import { BookButton, ActionLink, FAQ } from '@/components/site';
import { ConditionProgress } from '@/components/condition-progress';
import { BlogCard } from './blog';
import { conditionBySlug } from '@/content/conditions';
import { posts } from '@/content/blog';
import { pageHead, site } from '@/config/site';
import { DietitianPhoto } from '@/components/dietitian-photo';

export const Route = createFileRoute('/conditions/$slug')({
  loader: ({ params }) => { const condition = conditionBySlug(params.slug); if (!condition) throw notFound(); return condition; },
  head: ({ loaderData, params }) => pageHead(loaderData?.name || 'Nutrition care', loaderData?.metaDescription || 'Nutrition care by video in New Jersey.', `/conditions/${params.slug}`),
  component: ConditionPage,
});

function ConditionPage() {
  const c = Route.useLoaderData();
  const related = posts.filter(post => post.category === c.blogCategory).slice(0, 3);
  return <main>
    <section className="bg-pale py-14 md:py-20"><div className="container-site">
      <p className="text-sm text-muted-foreground mb-10"><Link to="/">Home</Link> / Conditions / <span className="text-foreground">{c.name}</span></p>
      <div className="grid lg:grid-cols-[1.1fr_.9fr] items-center gap-12"><div>
        <p className="eyebrow mb-5">{c.eyebrow}</p><h1 className="display text-5xl md:text-6xl">{c.title}</h1><p className="body-lede mt-6">{c.lede}</p>
        <div className="flex flex-wrap gap-3 mt-8"><BookButton service={c.service}>{c.bookLabel}</BookButton><ActionLink to="/insurance">Is it covered?</ActionLink></div>
      </div><ConditionProgress progress={c.progress} /></div>
    </div></section>
    <section className="section"><div className="container-site grid md:grid-cols-2 gap-12 md:gap-20">
      {([['This is for you if', c.forYou], ['What we work on together', c.together]] as const).map(([title, items]) => <div key={title}><h2 className="display text-4xl mb-7">{title}</h2><div className="divide-y divide-border border-t border-border">{items.map(item => <div key={item} className="flex items-start gap-3 py-4"><Check className="size-5 text-brand-text shrink-0 mt-0.5" /><span>{item}</span></div>)}</div></div>)}
    </div></section>
    <section className="section bg-pale"><div className="container-site"><p className="eyebrow mb-4">Your first 3 months</p><h2 className="display text-4xl md:text-5xl mb-10">A plan that grows with you.</h2><div className="grid md:grid-cols-4 gap-7">
      {c.timeline.map((step, i) => <div key={step.title} className="border-t-2 border-navy pt-5"><p className="eyebrow">{['WEEK 1', 'WEEKS 2–4', 'WEEKS 5–8', 'MONTH 3'][i]}</p><h3 className="font-display text-2xl mt-4">{step.title}</h3><p className="text-muted-foreground mt-2 text-sm">{step.description}</p></div>)}
    </div></div></section>
    <section className="section"><div className="container-site">
      <div className="bg-amber-soft rounded-xl p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center"><div><p className="eyebrow mb-3">COVERAGE NOTE</p><h2 className="display text-3xl">Insurance may help cover your visits.</h2><p className="text-muted-foreground mt-3">{c.coverageNote}</p></div><div className="border-2 border-navy p-4 font-mono text-xs max-w-60">CPT 97802 / 97803<br/>Medical nutrition therapy</div></div>
      <div className="mt-16 border-y border-border py-6 flex items-center gap-5">
        <DietitianPhoto avatar className="size-20 shrink-0 rounded-full" />
        <div><p className="eyebrow mb-1">Your dietitian</p><h2 className="font-display text-2xl">{site.dietitian}, {site.credentials}</h2><p className="text-muted-foreground text-sm mt-1">{c.dietitianNote}</p><Link to="/about" className="inline-flex items-center text-brand-text font-semibold text-sm mt-2">About Deepthi →</Link></div>
      </div>
      <div className="max-w-3xl mt-16"><h2 className="display text-4xl mb-8">Questions about {c.name.toLowerCase()}</h2><FAQ items={c.faq} /></div>
    </div></section>
    {related.length > 0 && <section className="section bg-pale"><div className="container-site"><h2 className="display text-4xl mb-8">Related reading</h2><div className="grid md:grid-cols-3 gap-6">{related.map(post => <BlogCard key={post.slug} post={post} />)}</div></div></section>}
    <section className="bg-cta py-12 text-primary-foreground"><div className="container-site flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="font-mono text-xs tracking-widest">LET'S GET STARTED</p><h2 className="display text-4xl mt-2">{c.ctaTitle}</h2></div><BookButton service={c.service} variant="outline" className="bg-white border-white text-brand-text shrink-0 hover:bg-cta-soft">{c.bookLabel}</BookButton></div></section>
  </main>;
}
