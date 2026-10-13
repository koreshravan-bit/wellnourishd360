import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Check, Leaf, Dumbbell, Microscope, Handshake } from 'lucide-react';
import { BookButton, ActionLink, FAQ, type FaqItem } from '@/components/site';
import { DietitianPhoto } from '@/components/dietitian-photo';
import { conditions } from '@/content/conditions';
import { pageHead, site, statesLabel, hasLicense, stateNames } from '@/config/site';
import { faqPage, ldScript, personNode } from '@/lib/schema';

const fullStates = site.states.map((s) => stateNames[s] ?? s);
const aboutFaq: FaqItem[] = [
  ['Who is Deepthi Harkar?', `${site.dietitian}, ${site.credentials}, is a registered dietitian nutritionist and the founder of WellNourishD360. She has over 15 years of experience in nutrition and health care, including hospital bariatric care and health-plan program design, and now sees clients by secure video.`],
  ["What are Deepthi Harkar's credentials?", `She holds an MS in Health Promotion from the University of Delaware and an MSc in Foods & Nutrition from Acharya N.G. Ranga Agricultural University. She is a Registered Dietitian Nutritionist (RDN), a Licensed Dietitian Nutritionist (LDN), a CDC Diabetes Prevention Program Lifestyle Coach and a Certified Plant-Based Nutrition Specialist. Her NPI is ${site.npi}.`],
  ['Which states can Deepthi see clients in?', `Video visits are available to clients located in ${fullStates.slice(0, -1).join(', ')} and ${fullStates.at(-1)} at the time of the visit.`, <>Video visits are available to clients located in {fullStates.slice(0, -1).join(', ')} and {fullStates.at(-1)} at the time of the visit. <Link to="/locations" className="text-brand-text font-semibold underline underline-offset-2">See where we practice</Link>.</>],
  ['What languages does she speak?', 'Deepthi speaks English, Hindi and Telugu.'],
  ['Does she accept insurance?', 'Yes. WellNourishD360 is in network with most major plans, including Aetna, Cigna, UnitedHealthcare, Horizon BCBS NJ and Medicare. Self-pay is also available.'],
];

const HERO_LEDE = 'A registered dietitian and licensed nutritionist with over 15 years of experience helping individuals and families transform their health through sustainable, culturally sensitive, evidence-based nutrition care.';

export const Route = createFileRoute('/about')({
  head: () => ({
    ...pageHead(`About ${site.dietitian}, ${site.credentials}`, "Meet Deepthi Harkar, MS, RDN, LDN, a registered dietitian offering culturally sensitive nutrition care by video with over 15 years of experience.", '/about'),
    scripts: [ldScript([{ ...personNode(HERO_LEDE), memberOf: { '@type': 'Organization', name: 'Delaware Academy of Nutrition and Dietetics' }, affiliation: { '@type': 'Organization', name: 'Nutrihealth Foundation' } }, faqPage(aboutFaq, '/about')])],
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

const careApproach = [
  { label: 'Functional medicine', icon: Leaf },
  { label: 'Exercise', icon: Dumbbell },
  { label: 'Research-focused', icon: Microscope },
  { label: 'Accountability', icon: Handshake },
];

const supportedGoals = [
  'Diabetes & prediabetes', 'Type 1 diabetes', 'Type 2 diabetes', 'Gestational diabetes',
  'Weight loss medications / GLP-1s', 'Help losing weight', 'Help gaining weight', 'Weight stabilization',
  'Bariatric surgery', 'Heart health', 'High blood pressure', 'High cholesterol', 'Kidney disease',
  'Liver disease', 'Thyroid disorders', 'Gut health', 'IBS', 'GERD / acid reflux', 'Celiac disease',
  "Crohn's disease", 'Ulcerative colitis', 'Autoimmune disease', 'Cancer', 'Food allergies',
  "Women's health", 'Menopause', 'Pre- or postnatal nutrition', 'Healthy aging', 'Emotional eating',
  'Binge eating', 'Disordered eating', 'Vegan/vegetarian', 'Nutrition support', 'General health',
];

const familiarCuisines = ['Indian', 'Southeast Asian', 'Mediterranean', 'Middle Eastern', 'Mexican', 'Vegetarian', 'Vegan', 'Low carb / keto', 'Paleo'];

const sessionExpectations = [
  'Walk away with personalized, actionable recommendations you can start using right away',
  "Understand the roadmap of our work together, including how we'll track progress and adapt over time",
  'Feel supported, heard, and motivated—never judged',
];

function About() {
  return <main>
    <section className="section bg-pale"><div className="container-site grid md:grid-cols-2 gap-12 items-center">
      <div><p className="eyebrow mb-5">MEET YOUR DIETITIAN</p><h1 className="display text-5xl md:text-6xl">{site.dietitian}, {site.credentials}</h1><p className="body-lede mt-6">A registered dietitian and licensed nutritionist with over 15 years of experience helping individuals and families transform their health through sustainable, culturally sensitive, evidence-based nutrition care.</p><div className="flex flex-wrap gap-3 mt-7"><BookButton>Book an appointment</BookButton><ActionLink to="/insurance">Check my insurance</ActionLink></div></div>
      <DietitianPhoto priority className="h-[370px] md:h-[500px] w-full rounded-t-[170px] rounded-b-xl" />
    </div></section>
    <section className="section"><div className="container-site grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16">
      <div><p className="eyebrow mb-4">ABOUT DEEPTHI</p><h2 className="display text-4xl md:text-5xl">Hi, I'm Deepthi.</h2></div>
      <div className="space-y-6 text-muted-foreground">
        <p>I'm a Registered Dietitian and Licensed Nutritionist with over 15 years of experience helping individuals and families transform their health through sustainable, culturally sensitive, and evidence-based nutrition care. My passion lies in empowering people to make meaningful, lasting changes that support their physical, mental, and emotional well-being.</p>
        <p>Over the years, I've worked with clients across a wide range of health goals, including diabetes prevention and management, sustainable weight loss, digestive health, pre- and post-bariatric surgery care, and adopting plant-forward, culturally tailored eating patterns. I believe that food should be both nourishing and enjoyable, and my mission is to help you find a balanced approach that truly works for your life.</p>
        <p>My background spans hospital bariatric care, health-plan strategy and clinical program design, and I served as President of the Delaware Academy of Nutrition and Dietetics (2012–2014).</p>
      </div>
    </div></section>
    <section className="section bg-pale"><div className="container-site">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16">
        <div><p className="eyebrow mb-4">APPROACH TO CARE</p><h2 className="display text-4xl md:text-5xl">Personalized, never one-size-fits-all.</h2></div>
        <div className="space-y-6 text-muted-foreground">
          <p>My approach is holistic, motivational, and highly personalized. I meet you where you are—whether you're just starting your wellness journey or refining existing habits—and work collaboratively to create a plan that fits seamlessly into your daily life.</p>
          <p>I don't believe in one-size-fits-all diets, rigid meal plans, or quick fixes. Instead, I focus on practical strategies that respect your culture, preferences, and lifestyle, while drawing on the latest nutrition science. Together, we'll build a flexible plan that supports your goals and empowers you to make confident food choices without feeling restricted or overwhelmed.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{careApproach.map(({ label, icon: Icon }) => <div key={label} className="rounded-lg border border-border bg-card p-5"><Icon className="size-6 text-brand-text mb-3" aria-hidden="true" /><p className="font-semibold text-sm">{label}</p></div>)}</div>
    </div></section>
    <section className="section"><div className="container-site grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16">
      <div><p className="eyebrow mb-4">YOUR FIRST SESSION</p><h2 className="display text-4xl md:text-5xl">Your first session is all about you.</h2></div>
      <div className="space-y-6 text-muted-foreground">
        <p>We'll take time to understand your health history, current lifestyle, personal goals, cultural preferences, and any challenges you're facing. I'll ask thoughtful questions to get a clear picture of where you are and where you'd like to be.</p>
        <p className="font-semibold text-foreground">By the end of the session, you can expect to:</p>
        <ul className="space-y-4">{sessionExpectations.map(item => <li key={item} className="flex items-start gap-3"><Check className="size-5 shrink-0 text-brand-text mt-0.5" aria-hidden="true" /><span>{item}</span></li>)}</ul>
        <p>My goal is to make you feel comfortable, informed, and excited about the changes ahead.</p>
        <BookButton>Book your first session</BookButton>
      </div>
    </div></section>
    <section className="section"><div className="container-site">
      <p className="eyebrow mb-4">WHAT I HELP WITH</p><h2 className="display text-4xl md:text-5xl mb-8">Conditions and goals I support</h2>
      <ul className="flex flex-wrap gap-2">{supportedGoals.map(goal => <li key={goal} className="max-w-full rounded-full bg-secondary px-4 py-2 text-sm text-foreground">{goal}</li>)}</ul>
      <h3 className="font-display text-2xl mt-10 mb-4">Familiar cuisines</h3>
      <ul className="flex flex-wrap gap-2">{familiarCuisines.map(cuisine => <li key={cuisine} className="max-w-full rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground">{cuisine}</li>)}</ul>
    </div></section>
    <section className="section bg-pale"><div className="container-site"><p className="eyebrow mb-4">WAYS TO WORK TOGETHER</p><h2 className="display text-4xl md:text-5xl mb-10">Support in the format that fits.</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{formats.map(([title, copy, slug]) => <div key={title} className="card-frame p-6 flex flex-col"><h3 className="display text-2xl">{title}</h3><p className="text-muted-foreground text-sm mt-3 flex-1">{copy}</p>{slug ? <Link to="/conditions/$slug" params={{ slug }} className="text-brand-text font-semibold text-sm mt-5">Learn more →</Link> : null}</div>)}</div><div className="border-t border-border mt-12 pt-6"><p className="eyebrow mb-2">WHERE SHE PRACTICES</p><p className="text-lg">Video visits for clients located in {statesLabel}. <Link to="/locations" className="text-brand-text font-semibold underline underline-offset-2">See where we practice</Link>.</p></div></div></section>
    <section className="section"><div className="container-site"><p className="eyebrow mb-4">BACKGROUND</p><h2 className="display text-4xl md:text-5xl mb-10">Education and experience</h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Education</h3><ul className="space-y-3"><li>MS, Health Promotion — University of Delaware</li><li>MSc, Foods & Nutrition — Acharya N.G. Ranga Agricultural University, India</li></ul></div>
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Certifications &amp; licenses</h3><ul className="space-y-3"><li>Registered Dietitian Nutritionist (RDN)</li><li>Licensed Dietitian (LDN){hasLicense && <> · License #{site.license}</>}</li><li>CDC Diabetes Prevention Program Lifestyle Coach</li><li>Certified Plant-Based Nutrition Specialist</li></ul></div>
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Languages</h3><p>English · Hindi · Telugu</p></div>
        <div className="border-t border-border pt-5"><h3 className="font-display text-2xl mb-4">Professional roles</h3><ul className="divide-y divide-border">{roles.map(([role, organization, years]) => <li key={`${role}-${organization}`} className="py-3 first:pt-0"><strong className="block">{role}</strong><span className="text-sm text-muted-foreground">{organization} · {years}</span></li>)}</ul></div>
      </div>
    </div></section>
    <section className="section bg-pale"><div className="container-site"><p className="eyebrow mb-4">AREAS OF CARE</p><h2 className="display text-4xl md:text-5xl mb-8">Find support for your needs.</h2><div className="grid md:grid-cols-2 gap-x-12 border-t border-border">{conditions.map(c => <Link key={c.slug} to="/conditions/$slug" params={{slug:c.slug}} className="flex items-center justify-between gap-4 border-b border-border py-5 group"><span className="font-display text-2xl group-hover:text-primary">{c.name}</span><ArrowUpRight className="size-5 shrink-0 text-brand-text" /></Link>)}</div></div></section>
    <section className="section"><div className="container-site max-w-3xl"><p className="eyebrow mb-4">BEYOND THE CLINIC</p><p className="body-lede">Beyond my professional life, I love exploring global food traditions, practicing yoga to maintain balance and mindfulness, and experimenting in the kitchen with plant-based recipes that are both nourishing and flavorful. These passions remind me daily that food is more than just fuel—it's connection, culture, comfort, and celebration.</p></div></section>
    <section className="section pt-0"><div className="container-site max-w-3xl"><h2 className="display text-4xl mb-8">Questions about Deepthi</h2><FAQ items={aboutFaq} /></div></section>
    <section className="bg-cta py-12 text-primary-foreground"><div className="container-site flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="font-mono text-xs">VIDEO CARE IN {site.states.length} STATES</p><h2 className="display text-4xl mt-2">Ready to talk through your goals?</h2></div><BookButton variant="outline" className="bg-white border-white text-brand-text shrink-0 hover:bg-cta-soft">Book an appointment</BookButton></div></section>
  </main>;
}
