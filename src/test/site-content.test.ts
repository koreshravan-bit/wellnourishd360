import { describe, expect, it } from 'vitest';
import { site } from '@/config/site';
import { conditions, defaultInsuranceRow } from '@/content/conditions';
import { posts, categories } from '@/content/blog';
import { blogCategories, prerenderPaths, sitePaths } from '../../scripts/site-routes.mjs';
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
 it('removes the unrelated PCOS video', () => { const post = posts.find(p => p.slug === 'pcos-grocery-walkthrough'); expect(post).toBeDefined(); expect(post?.videoUrl).toBeUndefined(); });
 it('hides the video category while no posts have a video', () => { expect(posts.some(p => p.videoUrl)).toBe(false); expect(categories).not.toContain('Videos'); expect(blogCategories).not.toContain('videos'); expect(prerenderPaths).not.toContain('/blog/category/videos'); expect(sitePaths).not.toContain('/blog/category/videos'); });
 it('has no three-month self-pay program price', () => { expect(Object.keys(site.prices).sort()).toEqual(['followUp', 'initial', 'lateFee']); });
 it('keeps a distinct dietitian introduction for each care page', () => { for (const condition of conditions) expect(condition.dietitianNote.length).toBeGreaterThan(30); expect(new Set(conditions.map(c => c.dietitianNote)).size).toBe(10); });
 it('lists all 17 licensed practice states', () => { expect(site.states).toEqual(['AZ','CA','CO','CT','DE','HI','IN','MA','MI','NJ','NY','OK','OR','PA','TX','VA','WI']); });
 it('keeps chronic kidney disease as a care area', () => { expect(conditions.some(c => c.slug === 'kidney-health')).toBe(true); });
 it('bills corporate wellness programs to the organization', () => { const c = conditions.find(x => x.slug === 'corporate-wellness')!; expect(c.answerQuestion).toBe('Can a registered dietitian run nutrition programs for my workplace?'); expect(c.answer).toContain('billed directly to your organization after a short discovery call'); expect(c.answer).not.toContain('Most major insurance plans are accepted'); expect(c.insuranceRow).toBe('Billed to your organization'); expect(c.bookLabel).toBe('Request a corporate wellness call'); });
 it('says group and family coverage varies by plan', () => { const c = conditions.find(x => x.slug === 'group-family')!; expect(c.answer.startsWith('Yes.'), c.slug).toBe(true); expect(c.answer).toContain('Coverage for group and family visits varies by plan and diagnosis, so we check your benefits before you book; self-pay is also available.'); expect(c.answer).not.toContain('Most major insurance plans are accepted'); expect(c.insuranceRow).toBe('Varies by plan; self-pay available'); });
 it('keeps one default insurance row for the other eight care areas', () => { expect(defaultInsuranceRow).toBe('Most major plans; self-pay available'); expect(conditions.filter(c => c.insuranceRow).map(c => c.slug).sort()).toEqual(['corporate-wellness', 'group-family']); for (const c of conditions.filter(x => !x.insuranceRow)) expect(c.answer).toContain('Most major insurance plans are accepted'); });
});
describe('Healthie booking', () => {
 it('uses the plum-branded Healthie booking link with three appointment types', () => { expect(site.healthie.bookingUrl).toBe('https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=16509081&provider_ids=%5B16509081%5D&appt_type_ids=%5B536143,536144,536145%5D&primary_color=4B2A5C'); });
 it('sends Client login to the Healthie sign-in page', () => { expect(site.booking.clientPortal).toBe('https://secure.gethealthie.com/users/sign_in'); expect(site.healthie.clientLoginUrl).toBe(site.booking.clientPortal); });
});
