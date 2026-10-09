import type { BookingService } from '@/config/site';

export type Progress = {
  chartLabel: string;
  unit: string;
  start: number;
  end: number;
  goal: number;
  goalLabel: string;
  direction: 'down' | 'up';
  rows: [label: string, value: string, change: string][];
};
export type Condition = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  title: string;
  lede: string;
  metaDescription: string;
  service: BookingService;
  bookLabel: string;
  ctaTitle: string;
  coverageNote: string;
  blogCategory: string;
  dietitianNote: string;
  progress: Progress;
  forYou: string[];
  together: string[];
  timeline: { title: string; description: string }[];
  faq: [string, string][];
};

const medicareCoverage = 'Medicare Part B covers medical nutrition therapy for diabetes and chronic kidney disease with a doctor’s referral, and many private plans do too.';
const otherCoverage = 'Many plans cover nutrition visits for this when there’s a related diagnosis. We’ll check your benefits before your first visit.';

export const conditions: Condition[] = [
  {
    slug: 'diabetes', name: 'Diabetes & prediabetes', short: 'A1C and glucose patterns, CGM review, carb awareness', eyebrow: 'DIABETES & PREDIABETES NUTRITION',
    title: 'Lower your A1C with meals you actually want to eat.',
    lede: 'Make sense of your numbers without giving up the foods you love. We’ll look at glucose patterns, medications, movement, and your real-life routine. Medicare Part B may cover medical nutrition therapy for eligible people with diabetes.',
    metaDescription: 'Nutrition care for diabetes and prediabetes in New Jersey. Review glucose patterns, CGM data and satisfying meals with a registered dietitian by video.',
    service: 'diabetes', bookLabel: 'Book a diabetes consult', ctaTitle: 'Make room for meals you enjoy.', coverageNote: medicareCoverage, blogCategory: 'Diabetes',
    dietitianNote: 'Certified National Diabetes Prevention Program lifestyle coach with years of experience in diabetes and chronic-condition programs.',
    progress: { chartLabel: 'A1C', unit: '%', start: 7.9, end: 6.8, goal: 7.0, goalLabel: 'Goal 7.0', direction: 'down', rows: [['A1C', '6.8%', '▼ 1.1'], ['Fasting glucose', '118 mg/dL', '▼ 34'], ['Visits', '5 of 6', '']] },
    forYou: ['Your A1C has been creeping up', 'You have a new diabetes or prediabetes diagnosis', 'Your glucose readings feel unpredictable', 'You want help using CGM data without overwhelm', 'You want meals that fit your culture, schedule and preferences'],
    together: ['Build satisfying meals around your preferences', 'Spot patterns in your labs or CGM data', 'Find a practical approach to carbohydrates', 'Make a plan for eating out and busy days', 'Coordinate nutrition goals with your diabetes care team'],
    timeline: [
      { title: 'Get the full picture', description: 'We review your history, labs, medications and usual meals together.' },
      { title: 'Try small changes', description: 'We test meal ideas and look at glucose patterns without rigid rules.' },
      { title: 'Adjust your plan', description: 'We work through busy days, eating out and what your readings show.' },
      { title: 'Plan what comes next', description: 'We review progress and decide which habits need more support.' },
    ],
    faq: [
      ['Do I have to stop eating carbs?', 'No. We’ll work on portions, timing and food combinations that make sense for you.'],
      ['Can you review my CGM readings?', 'Yes. If you use a CGM, we can look for patterns together and discuss food choices. Your prescriber handles medication changes.'],
      ['Does Medicare cover diabetes nutrition visits?', 'Medicare Part B covers medical nutrition therapy for eligible people with diabetes when a doctor refers them. We’ll help you check your specific benefits.'],
      ['What should I bring to a visit?', 'Recent labs, a medication list and any glucose records you already have can help. You do not need to start tracking food to book.'],
    ],
  },
  {
    slug: 'pcos', name: 'PCOS', short: 'Insulin resistance, cycle regularity, energy and weight', eyebrow: 'PCOS NUTRITION',
    title: 'Find a steadier way to eat with PCOS.',
    lede: 'Support your energy, insulin resistance, and everyday eating without rigid rules or another restrictive diet. We’ll shape a plan around your symptoms, schedule and preferences.',
    metaDescription: 'Practical PCOS nutrition care by video in New Jersey. Explore insulin resistance, energy and flexible meals with a registered dietitian.',
    service: 'pcos', bookLabel: 'Book a PCOS consult', ctaTitle: 'Ready for a plan that fits your PCOS?', coverageNote: otherCoverage, blogCategory: 'PCOS',
    dietitianNote: 'Builds flexible, culturally aware meal plans, including vegetarian and plant-based options.',
    progress: { chartLabel: 'Fasting insulin', unit: 'µIU/mL', start: 18, end: 11, goal: 12, goalLabel: 'Goal 12', direction: 'down', rows: [['A1C', '5.5%', '▼ 0.4'], ['Cycles tracked', '3 months', ''], ['Energy check-in', 'Steadier', '']] },
    forYou: ['You’re navigating a new PCOS diagnosis', 'Energy dips make it hard to get through the day', 'You’re curious about insulin resistance or recent labs', 'You want help with meals without cutting out entire food groups', 'Your cycle changes have left you unsure what to track'],
    together: ['Build balanced meals that work with your schedule', 'Make sense of insulin and glucose labs with your care team', 'Plan satisfying snacks for long gaps between meals', 'Explore fiber, protein and movement without rigid rules', 'Choose a simple way to track symptoms and energy'],
    timeline: [
      { title: 'Connect the dots', description: 'We talk through symptoms, lab work, eating patterns and what matters to you.' },
      { title: 'Build a rhythm', description: 'We create flexible meals and snacks that fit work and home life.' },
      { title: 'Notice patterns', description: 'We review energy, hunger and any cycle notes you choose to track.' },
      { title: 'Keep what helps', description: 'We adapt your approach as routines or priorities change.' },
    ],
    faq: [
      ['Is there one best PCOS diet?', 'No. There is no single eating pattern that works for everyone with PCOS. We’ll tailor meals to your needs and preferences.'],
      ['Do I need to cut out carbohydrates?', 'No. We can look at the type, amount and timing of carbohydrates alongside protein, fiber and the foods you enjoy.'],
      ['Can nutrition replace my PCOS medication?', 'Nutrition can be one part of care, but your prescriber makes medication decisions. We work alongside your clinical team.'],
      ['Can I come in if my labs are normal?', 'Yes. We can work on eating patterns, energy and your goals even if a lab value is within range.'],
    ],
  },
  {
    slug: 'glp-1', name: 'GLP-1 medication support', short: 'Protein targets, side effects, keeping muscle and results', eyebrow: 'GLP-1 NUTRITION',
    title: 'Feel nourished while taking a GLP-1.',
    lede: 'Get practical support for protein, hydration, appetite changes and food-related side effects. We don’t prescribe medication; we work alongside your prescribing clinician.',
    metaDescription: 'Nutrition support during GLP-1 treatment in New Jersey. Plan protein, fluids and manageable meals alongside your prescribing clinician.',
    service: 'glp1', bookLabel: 'Book a GLP-1 consult', ctaTitle: 'Make eating well easier on a GLP-1.', coverageNote: otherCoverage, blogCategory: 'GLP-1',
    dietitianNote: 'Former bariatric dietitian who has guided patients through major changes in appetite and eating.',
    progress: { chartLabel: 'Protein', unit: 'g/day', start: 45, end: 95, goal: 90, goalLabel: 'Goal 90', direction: 'up', rows: [['Protein per meal', '28 g', '▲ 12'], ['Fluids', '8 cups/day', ''], ['Strength sessions', '2/week', '']] },
    forYou: ['You’re starting or already taking a GLP-1', 'Low appetite makes it difficult to finish meals', 'You’re unsure how to get enough protein', 'Nausea or constipation affects your food choices', 'You want to support muscle while your appetite changes'],
    together: ['Set practical protein goals with foods you tolerate', 'Plan smaller meals and snacks for low-appetite days', 'Build a hydration routine that fits your day', 'Discuss food strategies for digestive discomfort', 'Coordinate concerns about side effects with your prescriber'],
    timeline: [
      { title: 'Check your baseline', description: 'We review your eating pattern, symptoms and the plan from your prescriber.' },
      { title: 'Prioritize nourishment', description: 'We identify easy protein options, fluids and small meals that fit your appetite.' },
      { title: 'Troubleshoot changes', description: 'We adjust food routines as appetite or side effects change and flag concerns for your prescriber.' },
      { title: 'Plan for the long run', description: 'We revisit strength-supporting habits and meals you can maintain.' },
    ],
    faq: [
      ['Can you prescribe or change my GLP-1?', 'No. Your prescriber manages your medication. We support nutrition and work alongside the prescribing clinician.'],
      ['What if I cannot eat a full meal?', 'We can plan smaller, more frequent options and focus on fluids and nutrient-dense foods you tolerate. Tell your prescriber about persistent symptoms.'],
      ['Do I need a protein supplement?', 'Not always. We’ll look at what you eat now and whether food, a supplement or a mix makes sense for your needs.'],
      ['Can we talk about nausea?', 'Yes. We can discuss meal size, timing and foods that feel manageable, while your prescriber evaluates persistent or severe symptoms.'],
    ],
  },
  {
    slug: 'kidney-health', name: 'Chronic kidney disease', short: 'Sodium, potassium and phosphorus plans by CKD stage', eyebrow: 'KIDNEY HEALTH NUTRITION',
    title: 'Eat well while caring for your kidneys.',
    lede: 'Kidney nutrition is not one-size-fits-all. Potassium and phosphorus needs depend on your labs, CKD stage and whether you receive dialysis. We coordinate your plan with your nephrology team.',
    metaDescription: 'Kidney nutrition visits by video in New Jersey. Tailor sodium, potassium and phosphorus choices to your labs, CKD stage and dialysis status with your nephrology team.',
    service: 'kidney', bookLabel: 'Book a kidney nutrition consult', ctaTitle: 'Get a kidney plan built around your labs.', coverageNote: medicareCoverage, blogCategory: 'Kidney',
    dietitianNote: 'Clinical background in medical nutrition therapy; coordinates your plan with your nephrology team.',
    progress: { chartLabel: 'Potassium', unit: 'mEq/L', start: 5.6, end: 4.7, goal: 5.0, goalLabel: 'Goal 5.0', direction: 'down', rows: [['Phosphorus', '4.4 mg/dL', '▼ 0.8'], ['Sodium target', '<2,000 mg/day', ''], ['eGFR', 'Stable', '']] },
    forYou: ['You’ve been told to watch sodium, potassium or phosphorus', 'Your kidney labs have changed', 'You are unsure which fruits and vegetables still fit', 'You want meal ideas that match your CKD stage', 'Your dialysis status or treatment plan has changed'],
    together: ['Review recent labs and nephrology guidance', 'Tailor potassium and phosphorus choices to labs, CKD stage and dialysis status', 'Find satisfying ways to manage sodium', 'Plan meals and snacks around your actual food preferences', 'Coordinate nutrition changes with your nephrology team'],
    timeline: [
      { title: 'Review your labs', description: 'We look at your CKD stage, dialysis status, recent results and nephrology guidance.' },
      { title: 'Set food priorities', description: 'We focus on the nutrients that matter for your current labs rather than restricting everything.' },
      { title: 'Make meals work', description: 'We adjust grocery choices, portions and meals you already enjoy.' },
      { title: 'Recheck the plan', description: 'We revisit new labs and coordinate any nutrition changes with your nephrology team.' },
    ],
    faq: [
      ['Do I need to avoid all high-potassium foods?', 'Not necessarily. Potassium needs depend on labs, CKD stage, medications and dialysis status. We’ll use your nephrology team’s guidance.'],
      ['Should everyone with CKD restrict phosphorus?', 'No. Your phosphorus plan depends on your labs, CKD stage and dialysis status. We avoid unnecessary food restrictions.'],
      ['Can you change my kidney medications?', 'No. Your doctor or prescriber handles medications. We coordinate food planning with your nephrology team.'],
      ['Does Medicare cover kidney nutrition visits?', 'Medicare Part B covers medical nutrition therapy for eligible people with chronic kidney disease with a doctor’s referral. We’ll check your specific benefits.'],
    ],
  },
  {
    slug: 'heart-health', name: 'Heart health', short: 'Cholesterol, blood pressure and heart-healthy eating', eyebrow: 'HEART HEALTH NUTRITION',
    title: 'Make heart-healthy eating feel doable.',
    lede: 'Work on cholesterol and blood pressure with food changes that leave room for meals you enjoy. We’ll use your numbers and your daily routine to choose a starting point.',
    metaDescription: 'Heart-health nutrition care by video in New Jersey. Explore LDL cholesterol, blood pressure, fiber and sodium with a registered dietitian.',
    service: 'heart', bookLabel: 'Book a heart health consult', ctaTitle: 'Find a heart-healthy routine that lasts.', coverageNote: otherCoverage, blogCategory: 'Heart',
    dietitianNote: 'Plant-based nutrition certified, with a focus on practical, heart-healthy everyday meals.',
    progress: { chartLabel: 'LDL', unit: 'mg/dL', start: 162, end: 124, goal: 100, goalLabel: 'Goal 100', direction: 'down', rows: [['Blood pressure', '128/82', '▼ 14/8'], ['Fiber', '28 g/day', '▲ 12'], ['Visits', '4 of 6', '']] },
    forYou: ['Your LDL cholesterol is higher than you’d like', 'You’re working on blood pressure with your care team', 'You want more guidance than a list of foods to avoid', 'You’re unsure how to get more fiber day to day', 'Your meals need to work for your household too'],
    together: ['Review cholesterol and blood pressure results with your goals in mind', 'Find enjoyable sources of soluble fiber', 'Choose fats and cooking methods that fit your meals', 'Reduce sodium without losing flavor', 'Build a plan for restaurants and busy weeks'],
    timeline: [
      { title: 'Start with your numbers', description: 'We review your labs, blood pressure history and current eating routine.' },
      { title: 'Choose a few shifts', description: 'We identify realistic ways to add fiber and rethink fats or sodium.' },
      { title: 'Make it practical', description: 'We adapt favorite meals and navigate takeout, shopping and family schedules.' },
      { title: 'Review together', description: 'We check what feels sustainable and discuss follow-up results with your care team.' },
    ],
    faq: [
      ['Will I need to stop eating my favorite foods?', 'Usually not. We focus on your overall pattern, not perfection at every meal.'],
      ['Can food changes help with LDL?', 'Dietary patterns that include more soluble fiber and unsaturated fats can support cholesterol management. Your doctor can help interpret follow-up labs.'],
      ['What about my blood pressure medication?', 'Keep medication questions with your prescriber. We can work on sodium and meal habits alongside their plan.'],
      ['Do I need to track every meal?', 'No. We can start with your usual meals and make a few practical changes without detailed tracking.'],
    ],
  },
  {
    slug: 'general-nutrition', name: 'General nutrition', short: 'Weight, meal planning, family eating and energy', eyebrow: 'EVERYDAY NUTRITION',
    title: 'Nutrition support for real life.',
    lede: 'Whether you want easier meal planning, steadier energy or a better relationship with food, we’ll start where you are and build routines that fit your life.',
    metaDescription: 'Everyday nutrition coaching by video in New Jersey. Get practical help with meal planning, family eating and energy from a registered dietitian.',
    service: 'general', bookLabel: 'Book a nutrition consult', ctaTitle: 'Make everyday eating feel simpler.', coverageNote: otherCoverage, blogCategory: 'Recipes',
    dietitianNote: 'More than 15 years helping people build eating habits that fit real life.',
    progress: { chartLabel: 'Home-cooked dinners', unit: '/week', start: 2, end: 5, goal: 4, goalLabel: 'Goal 4', direction: 'up', rows: [['Vegetable servings', '4/day', '▲ 2'], ['Weekly meal plan', 'Done', ''], ['Energy check-in', 'Better', '']] },
    forYou: ['Meal planning feels exhausting', 'You want steadier energy during long days', 'Your family’s tastes make meals complicated', 'You’re tired of starting over with strict food rules', 'You want practical guidance without a specific diagnosis'],
    together: ['Create a small set of go-to meals', 'Make shopping easier with a flexible list', 'Find ways to include foods your household enjoys', 'Plan snacks and meals around your schedule', 'Set food goals that support your life rather than rigid rules'],
    timeline: [
      { title: 'Talk through your day', description: 'We look at your schedule, food preferences and the parts of eating that feel hardest.' },
      { title: 'Simplify the basics', description: 'We choose repeatable meals, shopping ideas and an easy planning rhythm.' },
      { title: 'Adjust for real life', description: 'We troubleshoot travel, family meals, budgets and changing routines.' },
      { title: 'Keep it flexible', description: 'We identify what helps and make a plan you can return to when life shifts.' },
    ],
    faq: [
      ['Do I need a diagnosis to book?', 'No. You can book general nutrition care without a specific diagnosis. Insurance coverage varies by plan and reason for the visit.'],
      ['Will I get a strict meal plan?', 'We can plan meals together, but the goal is a flexible approach that works with your preferences and schedule.'],
      ['Can you help with family meals?', 'Yes. We can find common meals and simple adjustments that work for different needs at the same table.'],
      ['Do I need to track calories?', 'No. We can work on meals, routines and how you feel without calorie tracking.'],
    ],
  },
];
export const conditionBySlug = (slug: string) => conditions.find(c => c.slug === slug);
