import { hasPhone, site } from '@/config/site';

export function LegalContact() {
  return <>
    <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
    {hasPhone && site.phone.trim() && <span className="block mt-2">Phone: {site.phone}</span>}
    {site.mailingAddress.trim() && <span className="block mt-2">{site.mailingAddress}</span>}
  </>;
}
