import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHead, site } from '@/config/site';
import { LegalContact } from '@/components/legal-contact';

export const Route = createFileRoute('/terms')({
  head: () => pageHead('Terms of Use', 'Read WellNourishD360 terms covering educational content, becoming a client, Healthie booking, payments, cancellations and website responsibilities.', '/terms'),
  component: Terms,
});

function Terms() {
  return <main id="main" tabIndex={-1} className="section container-site max-w-3xl">
    <p className="eyebrow mb-4">LEGAL</p>
    <h1 className="display text-5xl">Terms of Use</h1>
    <p className="mt-6">Effective date: {site.legalEffectiveDate}</p>
    <p className="body-lede mt-6">By using wellnourishd360.com you agree to these terms.</p>
    <h2 className="display text-3xl mt-10">Education, not medical advice</h2>
    <p className="mt-4">Articles and other content on this site are general education. They are not a substitute for individualized care from a qualified health professional, and reading them does not create a provider–client relationship. Do not change medications or treatment without talking to your healthcare team.</p>
    <h2 className="display text-3xl mt-8">Emergencies</h2>
    <p className="mt-4">This website and our messaging are not for emergencies. If you have a medical emergency, call 911 or go to the nearest emergency room.</p>
    <h2 className="display text-3xl mt-8">Becoming a client</h2>
    <p className="mt-4">A provider–client relationship begins only when you book and attend a visit with {site.dietitian}, {site.credentials}. Video visits are available to clients physically located in a <Link className="underline" to="/locations">state where she is licensed</Link> at the time of the visit.</p>
    <h2 className="display text-3xl mt-8">Booking, payments and cancellations</h2>
    <p className="mt-4">Appointments, intake, payments and insurance information are handled through Healthie and are subject to our cancellation policy shown on our <Link className="underline" to="/insurance">Insurance &amp; pricing page</Link> and in Healthie. Insurance coverage is not guaranteed; you are responsible for any amount your plan does not pay.</p>
    <h2 className="display text-3xl mt-8">Accuracy and changes</h2>
    <p className="mt-4">We work to keep information current, but it may change without notice. Prices, insurance participation and availability are confirmed at booking.</p>
    <h2 className="display text-3xl mt-8">Intellectual property</h2>
    <p className="mt-4">Content, logos and design on this site belong to WellNourishD360 LLC or its licensors. Photos may be used under their own licenses (for example, the Unsplash License). You may share links to our pages, but do not copy content without permission.</p>
    <h2 className="display text-3xl mt-8">Links to other sites</h2>
    <p className="mt-4">We are not responsible for the content or practices of third-party sites we link to, including Healthie.</p>
    <h2 className="display text-3xl mt-8">Limitation of liability</h2>
    <p className="mt-4">To the extent allowed by law, WellNourishD360 LLC is not liable for damages arising from use of this website. Nothing here limits any right you have as a client under applicable law.</p>
    <h2 className="display text-3xl mt-8">Governing law</h2>
    <p className="mt-4">These terms are governed by the laws of the State of New Jersey.</p>
    <h2 className="display text-3xl mt-8">Contact</h2>
    <p className="mt-4"><LegalContact />.</p>
  </main>;
}
