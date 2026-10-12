import { describe, expect, it } from 'vitest';
import { site } from '@/config/site';
import { conditions } from '@/content/conditions';
import { posts } from '@/content/blog';
describe('practice content rules', () => {
 it('uses the dietitian’s name', () => { expect(site.dietitian).toBe('Deepthi Harkar'); });
 it('uses her full credentials', () => { expect(site.credentials).toBe('MS, RDN, LDN'); });
 it('uses her NPI', () => { expect(site.npi).toBe('1487042883'); });
 it('uses her email address', () => { expect(site.email).toBe('wellnourishd4u@gmail.com'); });
 it('keeps the unknown license marked pending', () => { expect(site.license).toBe('[pending]'); });
 it('requires 24 hours notice to cancel or reschedule', () => { expect(site.policies.cancellationWindowHours).toBe(24); });
 it('waives the first two late cancellations or no-shows', () => { expect(site.policies.waivedLateCancellations).toBe(2); });
 it('keeps booking destinations centralized for all ten care areas', () => { expect(conditions).toHaveLength(10); for (const c of conditions) expect(site.booking[c.service]).toMatch(/^https:\/\/secure\.gethealthie\.com\//); });
 it('keeps six editable seed articles', () => { expect(posts).toHaveLength(6); });
 it('keeps a distinct dietitian introduction for each care page', () => { for (const condition of conditions) expect(condition.dietitianNote.length).toBeGreaterThan(30); expect(new Set(conditions.map(c => c.dietitianNote)).size).toBe(10); });
 it('lists all 17 licensed practice states', () => { expect(site.states).toEqual(['AZ','CA','CO','CT','DE','HI','IN','MA','MI','NJ','NY','OK','OR','PA','TX','VA','WI']); });
 it('keeps chronic kidney disease as a care area', () => { expect(conditions.some(c => c.slug === 'kidney-health')).toBe(true); });
});
