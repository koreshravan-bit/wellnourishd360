# WellNourish Website - Plum

Build the marketing website for WellNourishD360 LLC, a telehealth registered dietitian practice in New Jersey (general + clinical nutrition). Goal: convert visitors into booked consultations. Booking, intake and insurance happen in Healthie (external), NOT on this site.

## Tech constraints (important)
- Static, client-side site only: Vite + React + TypeScript + Tailwind + shadcn/ui, React Router. NO backend, NO database, NO auth, NO forms that collect health info. It will be hosted on GitHub Pages, so use a router setup that works there (and set Vite `base` configurable via env).
- Pre-render all routes at build time for SEO if possible (e.g. vite-react-ssg or a prerender plugin). Each page needs its own <title>, meta description and Open Graph tags.
- Blog content lives as Markdown files in `src/content/blog/*.md` with frontmatter (title, slug, date, updated, category, excerpt, readingTime, coverImage, videoUrl optional, featured). Load them at build time (import.meta.glob). This lets us add a git-based CMS (Decap) later.
- One config file `src/config/site.ts` holding: practice name, dietitian name/credentials, email, phone, hours, NJ license #, NPI, and booking URLs: `booking.default`, plus per-service links `booking.diabetes`, `booking.pcos`, `booking.glp1`, `booking.kidney`, `booking.heart`, `booking.general`, `booking.insurance`, `booking.selfPay`. Use placeholder `https://secure.gethealthie.com/` URLs for now.
- Every "Book" button opens the right Healthie link in a new tab (later we may swap to an embedded iframe modal, so build a `BookButton` component with a `service` prop that centralizes this).

## Visual design (match exactly — "calm clinical")
Colors: ink/navy text #182A45, secondary text #4E5F78, primary blue #2C5D8A (dark #21476B), pale blue sections #E8EFF6, pale blue 2 #D3E0EE, page background #FBFCFD, white cards, CTA orange #D2592F (hover #B24620), CTA soft #FBE8DF, amber #F2B544 (stars), amber soft #FDF1D8, borders #DCE4ED. Footer + side panels navy #182A45.
Fonts (Google Fonts): headings "Newsreader" (serif, 600), body "Karla", small uppercase labels/eyebrows "IBM Plex Mono" (12px, letter-spacing .1em, uppercase, primary blue).
Buttons: 8px radius, primary = orange filled white text, secondary = navy 2px outline. Cards: white, 1px #DCE4ED border, 14–18px radius, minimal shadow. Content max width 1120px. Generous spacing (72px section padding desktop, 52px mobile). Fully responsive; on mobile show a sticky bottom bar with two buttons: "Insurance" (outline) and "Book a consult" (orange).
Logo placeholder: navy rounded square icon with two horizontal white lines and a small orange dot, then wordmark "WellNourish" (Newsreader) followed by a small orange badge "D360" (mono), with "NUTRITION · RDN" underneath in tiny mono.
Use striped pale-blue placeholder blocks with a caption label wherever photos will go (e.g. "Photo: her on a video visit").

## Global layout
- Top promo bar (navy): "In-network with most major health plans · **Video visits across New Jersey**"
- Sticky header: logo; nav = Conditions (dropdown of the 6 condition pages), Insurance & pricing, About, Blog; right side "Client login" text link (to Healthie client portal URL from config) and orange "Book a consult" button. Hamburger menu on mobile.
- Footer (navy): logo + one-line description; columns Conditions / Practice / Contact (hello@wellnourishd360.com, phone placeholder, "Mon–Thu, by appointment"); legal line: "Information on this site is for education and is not medical advice. [Name], RDN · NJ license #[000000] · NPI [0000000000]." Links to Privacy Policy, Notice of Privacy Practices, Terms.

## Pages
1. **Home (/)**
 - Hero, 2 columns: left = tall rounded photo placeholder with a floating white card ("TELEHEALTH VISIT" eyebrow, "60-min initial assessment", "Labs · medications · routine · goals"); right = eyebrow "Registered Dietitian Nutritionist · New Jersey", H1 "Personalized nutrition care, guided by your lab work.", lede "Medical nutrition therapy for diabetes, PCOS, GLP-1 medications, kidney and heart health, plus everyday nutrition coaching. All by secure video, and covered by most major insurance plans.", buttons "Book an appointment" (orange) + "Check my insurance" (outline → /insurance). Below, a 3-column facts row with a top border: VISITS "Secure video, NJ" / FIRST VISIT "60 minutes" / INSURANCE "Most major plans". Hero background: subtle gradient from #E8EFF6 to page background.
 - "Areas of care" section, 2 columns: left = H2 "Clinical and everyday nutrition" and a list of 6 full-width rows (navy top rule, thin dividers): condition name in serif 22px | one-line description | orange arrow; each row links to its condition page. Rows: Diabetes & prediabetes (A1C and glucose patterns, CGM review, carb awareness); PCOS (Insulin resistance, cycle regularity, energy and weight); GLP-1 medication support (Protein targets, side effects, keeping muscle and results); Chronic kidney disease (Sodium, potassium and phosphorus plans by CKD stage); Heart health (Cholesterol, blood pressure and heart-healthy eating); General nutrition (Weight, meal planning, family eating and energy). Right = sticky navy panel: "Not sure which applies?" / "Book an initial assessment. We'll review your history and labs and choose the focus together." / orange button "Book an assessment" / small text "Referred by your doctor? Upload the referral in the portal after booking." / divider / "For physicians: fax or e-refer patients for MNT. [Referral form link]".
 - "How it works" (pale blue background): 3 steps with STEP 1/2/3 mono labels and navy top border: Book online / 60-minute video visit / Your plan and follow-ups.
 - About section: arched-top photo placeholder + "Meet your dietitian", name "[Her Name], MS, RDN", short bio with [bracketed] placeholders, a pull quote, credential tags.
 - Reviews (pale blue bg): 3 cards clearly labeled "Placeholder review" (we will replace with real Google reviews — do not invent testimonials).
 - Insurance strip: "Your plan probably covers these visits." + plan chips: Aetna, Cigna, UnitedHealthcare, Horizon BCBS NJ, Medicare, "+ more plans" (dashed) + button to /insurance.
 - Latest 3 blog posts, FAQ accordion (NJ only? referral needed? what happens in first visit?).
2. **Condition pages** at /conditions/diabetes, /pcos, /glp-1, /kidney-health, /heart-health, /general-nutrition. Build ONE reusable template driven by a data file (`src/content/conditions.ts`) and fully write the Diabetes page; give the other five sensible draft copy. Template sections: breadcrumb; hero (eyebrow, H1 "Lower your A1C with meals you actually want to eat.", lede mentioning Medicare Part B coverage, buttons "Book a diabetes consult" → booking.diabetes and "Is it covered?" → /insurance) with a right-side white "Your progress — EXAMPLE CLIENT VIEW" card containing a small SVG line chart (A1C falling 7.9→6.8 vs dashed goal 7.0) and a lab table (A1C 6.8% ▼1.1, Fasting glucose 118 mg/dL ▼34, Visits 5 of 6); "This is for you if" checklist + "What we work on together" checklist (two columns, check icons); "Your first 3 months" horizontal 4-step timeline (Week 1 / Weeks 2–4 / Weeks 5–8 / Month 3; vertical on mobile); amber-soft coverage callout with mono box "CPT 97802 / 97803 Medical nutrition therapy"; condition FAQ; orange full-width CTA band.
3. **Insurance & pricing (/insurance)**: H1 "Most clients just use their insurance.", lede about being in network with most major plans incl. Medicare and checking benefits first. Two cards: "Use your insurance" (highlighted 2px blue border, eyebrow "MOST CLIENTS", plan chips, 3 steps, orange button → booking.insurance, "Don't see your plan? Book anyway and we'll check it.") and "Self-pay" (eyebrow "ALSO AVAILABLE", superbill explanation, 3 steps, outline button → booking.selfPay). Self-pay price table (Initial assessment 60 min $[TBD], Follow-up 30 min $[TBD], 3-month program $[TBD] with "MOST CHOSEN" tag) — prices come from site config. Navy card "Checking on your own? Call the number on your insurance card and ask this." with a script box (coverage for medical nutrition therapy CPT 97802/97803 via telehealth, visits per year, referral needed, copay/deductible) and a working "Copy questions" button. Payment FAQ incl. HSA/FSA, superbill, and the cancellation policy: "Please cancel or reschedule at least 24 hours before your visit. Your first two late cancellations or no-shows are waived. After that, a fee of [$X] is charged to the card on file. Insurance does not pay for missed visits."
4. **Blog (/blog)**: hero "Straight answers on food and health.", category filter chips (All, Diabetes, PCOS, GLP-1, Kidney, Heart, Recipes, Videos) that actually filter, a featured post card, grid of post cards (video posts show a play badge on the thumbnail), and a lead-magnet band "Free: the PCOS-friendly grocery list" with email field (for now the form only shows a "Thanks" message; leave a TODO for an email provider). Category pages at /blog/category/:cat.
5. **Blog post (/blog/:slug)**: breadcrumb, category tag, H1, byline (avatar, name + credentials, "Updated [date] · X min read"), sticky table of contents on desktop generated from H2s, Markdown body. Support in Markdown: a "Key takeaways" block styled like an FDA Nutrition Facts label (bold heading, thick black rule, rows with right-aligned mono values), a YouTube embed via the frontmatter videoUrl or a shortcode, and an inline CTA block ("On a GLP-1 and not sure you're eating enough?" + Book button using the post's category to choose the booking link). End with medical disclaimer, author box with Book button, and 3 related posts. Add JSON-LD Article schema.
6. **About (/about)**, **Privacy policy**, **Notice of Privacy Practices**, **Terms** (simple placeholder pages).

## Seed content
Write 6 sample blog posts in Markdown (clearly realistic, educational, no outcome claims): "What to eat on a GLP-1: protein first, then everything else" (featured, GLP-1, include key-takeaways block: Protein target 1.0–1.5 g/kg/day, Protein per meal 25–30 g, Fluids 8+ cups/day, Strength training 2–3×/week), "5 breakfasts that won't spike your blood sugar" (Diabetes), "Grocery store walk-through: shopping for PCOS" (PCOS, video), "Potassium and CKD: which fruits and vegetables still fit" (Kidney), "Lowering LDL with food: what the evidence supports" (Heart), "15-minute lentil bowl for steady blood sugar" (Recipes).

## SEO / analytics
sitemap.xml and robots.txt generated at build, MedicalBusiness/Dietitian JSON-LD on home, canonical URLs from a SITE_URL config, placeholder slot for Google Analytics 4 that fires a `book_click` event whenever any BookButton is clicked.

Copy tone: warm, plain-spoken, confident, no hype, no fake statistics or testimonials. Accessibility: semantic headings, visible focus states, AA contrast, alt text on images.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://wellnourishd360.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0d53c562-d16d-4f1c-b965-80724483b70f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
