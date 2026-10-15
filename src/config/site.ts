const HEALTHIE_BOOKING = 'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=16509081&provider_ids=%5B16509081%5D&appt_type_ids=%5B536143,536144,536145%5D&primary_color=4B2A5C';
const HEALTHIE_LOGIN = 'https://secure.gethealthie.com/users/sign_in';

export const site = {
  name: 'WellNourishD360 LLC',
  shortName: 'WellNourish',
  dietitian: 'Deepthi Harkar',
  credentials: 'MS, RDN, LDN',
  email: 'wellnourishd4u@gmail.com',
  phone: '[Phone number]',
  hours: 'Mon–Thu, by appointment',
  license: '[pending]',
  npi: '1487042883',
  gaMeasurementId: 'G-6KE9QF22XN',
  states: ['AZ', 'CA', 'CO', 'CT', 'DE', 'HI', 'IN', 'MA', 'MI', 'NJ', 'NY', 'OK', 'OR', 'PA', 'TX', 'VA', 'WI'],
  // The only public site. Absolute URLs (canonical, og:url, JSON-LD) always point here.
  url: (import.meta.env?.['VITE_SITE_URL'] as string | undefined) || 'https://wellnourishd360.com',
  healthie: {
    bookingUrl: HEALTHIE_BOOKING,
    clientLoginUrl: HEALTHIE_LOGIN,
  },
  // Per-service Healthie links (all the same for now). Book buttons open the /book page.
  booking: {
    default: HEALTHIE_BOOKING,
    diabetes: HEALTHIE_BOOKING,
    pcos: HEALTHIE_BOOKING,
    glp1: HEALTHIE_BOOKING,
    kidney: HEALTHIE_BOOKING,
    heart: HEALTHIE_BOOKING,
    general: HEALTHIE_BOOKING,
    weight: HEALTHIE_BOOKING,
    plantBased: HEALTHIE_BOOKING,
    intuitiveEating: HEALTHIE_BOOKING,
    corporate: HEALTHIE_BOOKING,
    group: HEALTHIE_BOOKING,
    insurance: HEALTHIE_BOOKING,
    selfPay: HEALTHIE_BOOKING,
    clientPortal: HEALTHIE_LOGIN,
  },
  prices: { initial: '$[TBD]', followUp: '$[TBD]', lateFee: '[$X]' },
  policies: {
    cancellationWindowHours: 24,
    waivedLateCancellations: 2,
  },
  // Real client reviews only. The home page section stays hidden while this is empty.
  reviews: [] as { quote: string; name: string }[],
};

export const stateNames: Record<string, string> = { AZ: 'Arizona', CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', HI: 'Hawaii', IN: 'Indiana', MA: 'Massachusetts', MI: 'Michigan', NJ: 'New Jersey', NY: 'New York', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', TX: 'Texas', VA: 'Virginia', WI: 'Wisconsin' };
export const statesLabel = site.states.join(', ');

// Placeholders stay hidden until a real value is entered above.
const isPlaceholder = (value: string) => value.includes('[') || /pending|TBD/i.test(value);
export const hasPhone = !isPlaceholder(site.phone);
export const hasLicense = !isPlaceholder(site.license);
export const pricesConfirmed = ![site.prices.initial, site.prices.followUp].some(isPlaceholder);
export const hasLateFee = !isPlaceholder(site.prices.lateFee);

export type BookingService = keyof Omit<typeof site.booking, 'clientPortal'>;
export const siteOrigin = site.url.replace(/\/$/, '');
export const canonical = (path: string) => `${siteOrigin}${path}`;
export const ogImage = { url: canonical('/og/default.png'), width: 1200, height: 630, alt: 'WellNourishD360 — Registered dietitian care by video in 17 states, insurance accepted' };
export const pageHead = (title: string, description: string, path: string, type = 'website') => ({
  meta: [
    { title: `${title} | WellNourishD360` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | WellNourishD360` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: canonical(path) },
    { property: 'og:image', content: ogImage.url },
    { property: 'og:image:width', content: String(ogImage.width) },
    { property: 'og:image:height', content: String(ogImage.height) },
    { property: 'og:image:alt', content: ogImage.alt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${title} | WellNourishD360` },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage.url },
  ],
  links: [{ rel: 'canonical', href: canonical(path) }],
});
