import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { site } from '@/config/site';

vi.mock('@/config/site', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/config/site')>();
  return { ...actual, get hasPhone() { return Boolean(actual.site.phone.trim()) && !actual.site.phone.includes('['); } };
});

import { LegalContact } from '@/components/legal-contact';

describe('approved legal policy settings', () => {
  it('uses October 15, 2026 as the effective date', () => {
    expect(site.legalEffectiveDate).toBe('October 15, 2026');
  });
  it('does not invent a mailing address', () => {
    expect(site.mailingAddress).toBe('');
  });
  it('omits the unspecified mailing address', () => {
    const html = renderToStaticMarkup(<LegalContact />);
    expect(html).toContain(`mailto:${site.email}`);
    expect(html).not.toContain(site.mailingAddress);
  });
  it('shows the practice phone as a tel: link', () => {
    const html = renderToStaticMarkup(<LegalContact />);
    expect(html).toContain('Phone: +1 (609) 721-8672');
    expect(html).toContain('href="tel:+16097218672"');
  });
  it('shows a mailing address only when supplied', () => {
    const original = site.mailingAddress;
    try {
      site.mailingAddress = 'Test mailing address';
      expect(renderToStaticMarkup(<LegalContact />)).toContain('Test mailing address');
    } finally { site.mailingAddress = original; }
  });
});