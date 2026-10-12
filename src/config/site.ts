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
  states: ['AZ', 'CA', 'CO', 'CT', 'DE', 'HI', 'IN', 'MA', 'MI', 'NJ', 'NY', 'OK', 'OR', 'PA', 'TX', 'VA', 'WI'],
  url: import.meta.env['VITE_SITE_URL'] || '',
  booking: {
    default: 'https://secure.gethealthie.com/',
    diabetes: 'https://secure.gethealthie.com/',
    pcos: 'https://secure.gethealthie.com/',
    glp1: 'https://secure.gethealthie.com/',
    kidney: 'https://secure.gethealthie.com/',
    heart: 'https://secure.gethealthie.com/',
    general: 'https://secure.gethealthie.com/',
    weight: 'https://secure.gethealthie.com/',
    plantBased: 'https://secure.gethealthie.com/',
    intuitiveEating: 'https://secure.gethealthie.com/',
    corporate: 'https://secure.gethealthie.com/',
    group: 'https://secure.gethealthie.com/',
    insurance: 'https://secure.gethealthie.com/',
    selfPay: 'https://secure.gethealthie.com/',
    clientPortal: 'https://secure.gethealthie.com/',
  },
  prices: { initial: '$[TBD]', followUp: '$[TBD]', program: '$[TBD]', lateFee: '[$X]' },
  policies: {
    cancellationWindowHours: 24,
    waivedLateCancellations: 2,
  },
};
export const statesLabel = site.states.join(', ');
export type BookingService = keyof Omit<typeof site.booking, 'clientPortal'>;
export const canonical = (path: string) => site.url ? `${site.url.replace(/\/$/, '')}${path}` : path;
export const pageHead = (title: string, description: string, path: string, type = 'website') => ({
  meta: [{ title: `${title} | WellNourishD360` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | WellNourishD360` }, { property: 'og:description', content: description }, { property: 'og:type', content: type }, { property: 'og:url', content: canonical(path) }, { name: 'twitter:card', content: 'summary_large_image' }],
  links: [{ rel: 'canonical', href: canonical(path) }],
});
