import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHead, site } from '@/config/site';
import { LegalContact } from '@/components/legal-contact';

export const Route = createFileRoute('/privacy')({
  head: () => pageHead('Website Privacy Policy', 'Learn how WellNourishD360 handles website analytics, email and online booking, with health information managed through the secure Healthie platform.', '/privacy'),
  component: Privacy,
});

function Privacy() {
  return <main id="main" tabIndex={-1} className="section container-site max-w-3xl">
    <p className="eyebrow mb-4">LEGAL</p>
    <h1 className="display text-5xl">Website Privacy Policy</h1>
    <p className="mt-6">Effective date: {site.legalEffectiveDate}</p>
    <p className="body-lede mt-6">This policy explains what information is collected when you visit wellnourishd360.com. Health information you share as a client is covered by our <Link className="underline" to="/notice-of-privacy-practices">Notice of Privacy Practices</Link>.</p>
    <h2 className="display text-3xl mt-10">Information this website collects</h2>
    <ul className="list-disc pl-6 mt-4 space-y-4">
      <li><strong>No health information.</strong> This website has no forms that ask for health details. Please do not send health information by email.</li>
      <li><strong>Analytics.</strong> We use Google Analytics to understand how the site is used, such as pages viewed, approximate location (country and region), device type, and clicks on buttons like "Book a consult". Google may set cookies to do this. Google signals and ad personalization are turned off, and we do not use this data for advertising. You can opt out with <a className="underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google's browser add-on</a>.</li>
      <li><strong>Email.</strong> If you email us, we receive your email address and message and use them only to reply.</li>
    </ul>
    <h2 className="display text-3xl mt-8">Online booking</h2>
    <p className="mt-4">Booking on our <Link className="underline" to="/book">Book page</Link>, intake forms, video visits, messaging and payments are provided by Healthie, our secure health record and scheduling platform. Information you enter there is handled under our <Link className="underline" to="/notice-of-privacy-practices">Notice of Privacy Practices</Link> and Healthie's own privacy policy, not stored on this website.</p>
    <h2 className="display text-3xl mt-8">Sharing</h2>
    <p className="mt-4">We do not sell or rent personal information. We share website information only with the service providers that run the site (GitHub Pages hosting and Google Analytics) or when required by law.</p>
    <h2 className="display text-3xl mt-8">Children</h2>
    <p className="mt-4">This website is not directed to children under 13. Nutrition care for minors is arranged by a parent or guardian through our booking process.</p>
    <h2 className="display text-3xl mt-8">Changes and contact</h2>
    <p className="mt-4">We may update this policy and will post the new date above. Questions: <LegalContact />.</p>
  </main>;
}
