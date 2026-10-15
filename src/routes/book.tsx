import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { canonical, pageHead, site } from '@/config/site';
import { breadcrumbList, ldScript, PRACTICE_ID, WEBSITE_ID } from '@/lib/schema';
import { trackEvent } from '@/lib/analytics';

const TITLE = 'Book an Appointment';
const DESCRIPTION = `Book a secure video visit with registered dietitian ${site.dietitian}, ${site.credentials}. Choose an initial consultation or follow-up session online.`;

export const Route = createFileRoute('/book')({
  head: () => ({
    ...pageHead(TITLE, DESCRIPTION, '/book'),
    scripts: [ldScript([
      { '@type': 'WebPage', '@id': canonical('/book'), url: canonical('/book'), name: TITLE, description: DESCRIPTION, isPartOf: { '@id': WEBSITE_ID }, about: { '@id': PRACTICE_ID } },
      breadcrumbList([['Home', '/'], ['Book an appointment', '/book']]),
    ])],
  }),
  component: Book,
});

function Book() {
  useEffect(() => { trackEvent('booking_page_view', { page_path: window.location.pathname }); }, []);
  const link = 'text-brand-text font-semibold underline underline-offset-2';
  return <main>
    <section className="bg-pale py-12 md:py-16"><div className="container-site max-w-4xl">
      <p className="eyebrow mb-5">BOOK AN APPOINTMENT</p>
      <h1 className="display text-5xl md:text-6xl">Book your visit with Deepthi</h1>
      <p className="body-lede mt-6">Choose Initial Consultation if you're new, or Follow-up Session if you're a returning client. After booking, you'll get an email to set up your secure Healthie portal and complete your intake form.</p>
      <ul className="grid sm:grid-cols-3 gap-3 mt-8 text-sm font-semibold">
        <li className="bg-white border border-border rounded-lg px-4 py-3">Secure video visit</li>
        <li className="bg-white border border-border rounded-lg px-4 py-3">First visit 60 minutes</li>
        <li className="bg-white border border-border rounded-lg px-4 py-3"><Link to="/insurance" className={link}>Insurance or self-pay</Link></li>
      </ul>
    </div></section>
    <section className="section pt-10"><div className="container-site max-w-4xl">
      <div className="card-frame overflow-hidden p-0">
        <iframe src={site.healthie.bookingUrl} title="Book an appointment with Deepthi Harkar on Healthie" className="block w-full border-0 min-h-[900px] md:min-h-[820px]" />
      </div>
      <div className="mt-4 text-sm text-muted-foreground flex flex-col sm:flex-row sm:justify-between gap-2">
        <p>Booking provided by <a href="https://gethealthie.com" target="_blank" rel="noopener noreferrer" className={link}>Healthie</a></p>
        <p>Trouble loading? <a href={site.healthie.bookingUrl} target="_blank" rel="noopener noreferrer" className={link}>Open booking in a new tab</a></p>
      </div>
      <p className="mt-6 text-sm bg-amber-soft rounded-lg px-4 py-3">Please don't share health details by email; use your secure Healthie portal.</p>
    </div></section>
  </main>;
}
