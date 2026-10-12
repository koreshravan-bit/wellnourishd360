import { describe, it, expect } from 'vitest';
import { gaLoaderScript } from '@/lib/analytics';
import { site } from '@/config/site';

function run(hostname: string) {
  const appended: unknown[] = [];
  const win: Record<string, unknown> = {};
  const doc = { createElement: () => ({}), head: { appendChild: (n: unknown) => appended.push(n) }, addEventListener: () => {} };
  new Function('window', 'location', 'document', `with(window){${gaLoaderScript(site.gaMeasurementId)}}`)(win, { hostname }, doc);
  return { win, appended };
}

describe('GA loader', () => {
  it('uses the configured measurement ID', () => { expect(site.gaMeasurementId).toBe('G-6KE9QF22XN'); });
  it('does nothing on a non-.com host', () => {
    for (const h of ['localhost', 'id-preview--x.lovable.app', 'koreshravan-bit.github.io']) {
      const { win, appended } = run(h);
      expect(win.dataLayer).toBeUndefined();
      expect(appended).toHaveLength(0);
    }
  });
  it('loads on wellnourishd360.com with signals off', () => {
    const { win, appended } = run('wellnourishd360.com');
    expect(appended).toHaveLength(1);
    const cfg = (win.dataLayer as IArguments[]).map(a => Array.from(a)).find(a => a[0] === 'config')!;
    expect(cfg).toEqual(['config', 'G-6KE9QF22XN', { allow_google_signals: false, allow_ad_personalization_signals: false }]);
  });
});
