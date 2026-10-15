import { createFileRoute } from '@tanstack/react-router';
import { pageHead, site } from '@/config/site';
import { LegalContact } from '@/components/legal-contact';

export const Route = createFileRoute('/notice-of-privacy-practices')({
  head: () => pageHead('Notice of Privacy Practices', 'Read WellNourishD360 privacy practices, your health information rights, how records are used and shared, and how to contact the practice.', '/notice-of-privacy-practices'),
  component: Notice,
});

function Notice() {
  return <main id="main" tabIndex={-1} className="section container-site max-w-3xl">
    <p className="eyebrow mb-4">LEGAL</p>
    <h1 className="display text-5xl">Notice of Privacy Practices</h1>
    <p className="body-lede mt-6"><strong>This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.</strong></p>
    <p className="mt-6">Effective date: {site.legalEffectiveDate}</p>
    <h2 className="display text-3xl mt-10">Your rights</h2>
    <p className="mt-4">When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.</p>
    <ul className="list-disc pl-6 mt-4 space-y-4">
      <li><strong>Get a copy of your health and claims records.</strong> You can ask to see or get an electronic or paper copy of your health information. Ask us how to do this. We will provide a copy or a summary, usually within 30 days of your request. We may charge a reasonable, cost-based fee.</li>
      <li><strong>Ask us to correct your record.</strong> You can ask us to correct health information you think is incorrect or incomplete. We may say no, but we will tell you why in writing within 60 days.</li>
      <li><strong>Request confidential communications.</strong> You can ask us to contact you in a specific way (for example, a personal phone or a different email) or to send mail to a different address. We will say yes to all reasonable requests.</li>
      <li><strong>Ask us to limit what we use or share.</strong> You can ask us not to use or share certain health information for treatment, payment or our operations. We are not required to agree if it would affect your care. If you pay for a service out of pocket in full, you can ask us not to share that information with your health insurer for payment or operations; we will say yes unless a law requires us to share it.</li>
      <li><strong>Get a list of those with whom we have shared information.</strong> You can ask for a list (accounting) of the times we have shared your health information for six years before the date you ask, who we shared it with and why. It will exclude disclosures for treatment, payment and operations and certain others (such as any you asked us to make). We provide one accounting a year free and may charge a reasonable, cost-based fee for more within 12 months.</li>
      <li><strong>Get a copy of this notice.</strong> You can ask for a paper copy of this notice at any time, even if you agreed to receive it electronically.</li>
      <li><strong>Choose someone to act for you.</strong> If you have given someone medical power of attorney, or someone is your legal guardian, that person can exercise your rights and make choices about your health information. We will confirm the person has this authority before we act.</li>
      <li><strong>File a complaint if you feel your rights are violated.</strong> Contact us using the information at the end of this notice. You can also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights at 200 Independence Avenue S.W., Washington, D.C. 20201, by calling 1-877-696-6775, or <a className="underline" href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" target="_blank" rel="noopener noreferrer">online</a>. We will not retaliate against you for filing a complaint.</li>
    </ul>
    <h2 className="display text-3xl mt-8">Your choices</h2>
    <p className="mt-4">For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations below, tell us and we will follow your instructions.</p>
    <ul className="list-disc pl-6 mt-4 space-y-4">
      <li>You have the right and choice to tell us whether to share information with your family, close friends or others involved in your care or payment for your care.</li>
      <li>If you are not able to tell us your preference (for example, if you are unconscious), we may share your information if we believe it is in your best interest, or when needed to lessen a serious and imminent threat to health or safety.</li>
      <li>We will never sell your information or use or share it for marketing or fundraising without your written permission.</li>
    </ul>
    <h2 className="display text-3xl mt-8">Our uses and disclosures</h2>
    <p className="mt-4">We typically use or share your health information in the following ways:</p>
    <ul className="list-disc pl-6 mt-4 space-y-4">
      <li><strong>Treat you.</strong> We use your health information and share it with other professionals who are treating you. Example: your physician sends us lab results, or we send your doctor a summary of your nutrition plan.</li>
      <li><strong>Run our practice.</strong> We use and share your information to run our practice, improve your care and contact you when necessary. Example: we use your information to schedule visits and send appointment reminders.</li>
      <li><strong>Bill for your services.</strong> We use and share your information to bill and get payment from health plans or other entities. Example: we give information about you to your health insurance plan so it will pay for your visits.</li>
    </ul>
    <p className="mt-4">We use secure service providers ("business associates"), such as our electronic health record, scheduling, telehealth and billing platform, Healthie, to deliver care. They are required by contract to protect your information.</p>
    <p className="mt-4">We are allowed or required to share your information in other ways, usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes:</p>
    <ul className="list-disc pl-6 mt-4 space-y-4">
      <li>Helping with public health and safety issues, such as preventing disease, reporting adverse reactions to medications, reporting suspected abuse, neglect or domestic violence, and preventing or reducing a serious threat to anyone's health or safety.</li>
      <li>Complying with the law, including with the Department of Health and Human Services if it wants to see that we are complying with federal privacy law.</li>
      <li>Responding to organ and tissue donation requests, and working with a medical examiner or funeral director.</li>
      <li>Addressing workers' compensation, law enforcement and other government requests, including for health oversight agencies and special government functions such as military and national security.</li>
      <li>Responding to lawsuits and legal actions, such as a court or administrative order or a subpoena.</li>
    </ul>
    <h2 className="display text-3xl mt-8">Our responsibilities</h2>
    <ul className="list-disc pl-6 mt-4 space-y-4">
      <li>We are required by law to maintain the privacy and security of your protected health information.</li>
      <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
      <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
      <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time by letting us know in writing.</li>
    </ul>
    <h2 className="display text-3xl mt-8">Changes to this notice</h2>
    <p className="mt-4">We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request and on our website.</p>
    <h2 className="display text-3xl mt-8">Contact</h2>
    <p className="mt-4">Privacy contact: {site.dietitian}, {site.credentials}, {site.name}. Email: <LegalContact />. Please do not send health information by email; use your <a className="underline" href={site.healthie.clientLoginUrl} target="_blank" rel="noopener noreferrer" data-track="portal">secure Healthie client portal</a>.</p>
  </main>;
}
