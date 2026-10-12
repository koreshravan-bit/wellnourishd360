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
  category: 'clinical' | 'lifestyle' | 'groups';
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
    slug: 'diabetes', category: 'clinical', name: 'Diabetes & prediabetes', short: 'A1C and glucose patterns, CGM review, carb awareness', eyebrow: 'DIABETES & PREDIABETES NUTRITION',
    title: 'Lower your A1C with meals you actually want to eat.',
    lede: 'Make sense of your numbers without giving up the foods you love. We’ll look at glucose patterns, medications, movement, and your real-life routine. Medicare Part B may cover medical nutrition therapy for eligible people with diabetes.',
    metaDescription: 'Nutrition care for diabetes and prediabetes. Review glucose patterns, CGM data and satisfying meals with a registered dietitian by video.',
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
    slug: 'pcos', category: 'clinical', name: 'PCOS', short: 'Insulin resistance, cycle regularity, energy and weight', eyebrow: 'PCOS NUTRITION',
    title: 'Find a steadier way to eat with PCOS.',
    lede: 'Support your energy, insulin resistance, and everyday eating without rigid rules or another restrictive diet. We’ll shape a plan around your symptoms, schedule and preferences.',
    metaDescription: 'Practical PCOS nutrition care by video. Explore insulin resistance, energy and flexible meals with a registered dietitian.',
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
    slug: 'weight-management', category: 'clinical', name: 'Obesity & weight management', short: 'Sustainable habits, bariatric and medical weight care', eyebrow: 'WEIGHT MANAGEMENT NUTRITION',
    title: 'Weight care that respects your body and your life.',
    lede: 'Build steady, realistic habits without crash diets. We’ll look at your health history, labs, medications and routines, and coordinate with your doctor when weight affects other conditions.',
    metaDescription: 'Weight management nutrition care by video with a registered dietitian. Build sustainable eating habits, with bariatric surgery support and coordination with your doctor.',
    service: 'weight', bookLabel: 'Book a weight management consult', ctaTitle: 'Ready for an approach you can keep?', coverageNote: otherCoverage, blogCategory: 'GLP-1',
    dietitianNote: 'Former bariatric dietitian who has supported patients before and after surgery and in non-surgical weight care.',
    progress: { chartLabel: 'Meals with protein + vegetables', unit: '/week', start: 4, end: 12, goal: 10, goalLabel: 'Goal 10', direction: 'up', rows: [['Planned meals', '5/week', '▲ 3'], ['Movement', '3 days/week', '▲ 2'], ['Energy check-in', 'Steadier', '']] },
    forYou: ['You’ve tried many diets and want something sustainable', 'Your doctor has raised weight in relation to other health conditions', 'You’re preparing for or recovering from bariatric surgery', 'Hunger, cravings or evening eating feel hard to manage', 'You want support that does not rely on shame or strict rules'],
    together: ['Build balanced, satisfying meals you can repeat', 'Plan around hunger, fullness and your daily schedule', 'Support pre- and post-bariatric nutrition stages', 'Make realistic changes to shopping, cooking and eating out', 'Coordinate with your doctor on related labs and conditions'],
    timeline: [
      { title: 'Understand your story', description: 'We review your history, past attempts, labs and what has felt hard.' },
      { title: 'Start with the basics', description: 'We choose a few meal and routine changes that fit your week.' },
      { title: 'Work through obstacles', description: 'We address cravings, busy days, social meals and setbacks without judgment.' },
      { title: 'Build for the long term', description: 'We review what is working and plan how to keep it going.' },
    ],
    faq: [
      ['Will I get a strict diet?', 'No. We build a flexible way of eating around your preferences, culture and schedule.'],
      ['Can you help before or after bariatric surgery?', 'Yes. We can support nutrition through each stage, following the guidance of your surgical team.'],
      ['Do you prescribe weight-loss medications?', 'No. Medication decisions are made by your doctor or prescriber. We can provide nutrition support alongside them.'],
      ['Is weight management covered by insurance?', 'Coverage depends on your plan and diagnosis. We’ll check your benefits before your first visit.'],
    ],
  },
  {
    slug: 'glp-1', category: 'clinical', name: 'GLP-1 medication support', short: 'Protein targets, side effects, keeping muscle and results', eyebrow: 'GLP-1 NUTRITION',
    title: 'Feel nourished while taking a GLP-1.',
    lede: 'Get practical support for protein, hydration, appetite changes and food-related side effects. We don’t prescribe medication; we work alongside your prescribing clinician.',
    metaDescription: 'Nutrition support during GLP-1 treatment. Plan protein, fluids and manageable meals alongside your prescribing clinician.',
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
    slug: 'heart-health', category: 'clinical', name: 'Heart health', short: 'Cholesterol, blood pressure and heart-healthy eating', eyebrow: 'HEART HEALTH NUTRITION',
    title: 'Make heart-healthy eating feel doable.',
    lede: 'Work on cholesterol and blood pressure with food changes that leave room for meals you enjoy. We’ll use your numbers and your daily routine to choose a starting point.',
    metaDescription: 'Heart-health nutrition care by video. Explore LDL cholesterol, blood pressure, fiber and sodium with a registered dietitian.',
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
    slug: 'kidney-health', category: 'clinical', name: 'Chronic kidney disease', short: 'Sodium, potassium and phosphorus plans by CKD stage', eyebrow: 'KIDNEY HEALTH NUTRITION',
    title: 'Eat well while caring for your kidneys.',
    lede: 'Kidney nutrition is not one-size-fits-all. Potassium and phosphorus needs depend on your labs, CKD stage and whether you receive dialysis. We coordinate your plan with your nephrology team.',
    metaDescription: 'Kidney nutrition visits by video. Tailor sodium, potassium and phosphorus choices to your labs, CKD stage and dialysis status with your nephrology team.',
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
    slug: 'plant-based', category: 'lifestyle', name: 'Plant-based, vegetarian & vegan', short: 'Balanced meat-free eating, protein, iron and B12', eyebrow: 'PLANT-BASED NUTRITION',
    title: 'Eat plants with confidence.',
    lede: 'Whether you’re fully vegan, vegetarian for cultural or religious reasons, or simply eating more plants, we’ll make sure your meals are balanced, satisfying and familiar.',
    metaDescription: 'Plant-based, vegetarian and vegan nutrition care by video with a plant-based certified registered dietitian. Plan protein, iron, B12 and balanced meals.',
    service: 'plantBased', bookLabel: 'Book a plant-based consult', ctaTitle: 'Make plant-based eating feel easy.', coverageNote: otherCoverage, blogCategory: 'Recipes',
    dietitianNote: 'Plant-Based Nutrition Certified, with experience in vegetarian traditions, including South Asian home cooking.',
    progress: { chartLabel: 'Plant protein', unit: 'g/day', start: 40, end: 70, goal: 65, goalLabel: 'Goal 65', direction: 'up', rows: [['Legume servings', '1/day', '▲ 1'], ['B12 source', 'In place', ''], ['Iron-rich meals', '5/week', '▲ 3']] },
    forYou: ['You’re vegetarian or vegan and want to be sure you’re getting enough', 'You’re moving toward more plant-based meals', 'You follow a vegetarian tradition and want healthier versions of family dishes', 'Your labs show low iron, B12 or vitamin D', 'You manage another condition and want a plant-forward plan'],
    together: ['Plan protein across the day from plant foods', 'Pay attention to iron, B12, calcium, omega-3s and vitamin D', 'Adapt cultural and family recipes', 'Create simple shopping lists and batch-cooking ideas', 'Combine plant-based eating with diabetes, heart or kidney needs'],
    timeline: [
      { title: 'Review your plate', description: 'We look at your current meals, labs and any supplements you take.' },
      { title: 'Fill the gaps', description: 'We add protein and key nutrients in ways that fit your tastes.' },
      { title: 'Build your rotation', description: 'We develop go-to meals, snacks and simple prep routines.' },
      { title: 'Check in and refine', description: 'We review progress and any updated labs with your doctor.' },
    ],
    faq: [
      ['Can I get enough protein without meat?', 'Most people can, with planning. We’ll look at beans, lentils, soy, dairy or eggs if you eat them, grains, nuts and seeds.'],
      ['Do I need supplements?', 'Some people do, especially B12 for vegans. We’ll discuss your intake and labs; your doctor can advise on testing.'],
      ['Do I have to go fully vegan?', 'No. We work with wherever you are, from eating more plants to fully plant-based.'],
      ['Can you help with plant-based eating and a medical condition?', 'Yes. We can combine a plant-based approach with diabetes, heart, kidney or other nutrition needs.'],
    ],
  },
  {
    slug: 'intuitive-eating', category: 'lifestyle', name: 'Intuitive eating & relationship with food', short: 'Hunger cues, food guilt and leaving dieting behind', eyebrow: 'INTUITIVE EATING',
    title: 'A calmer relationship with food.',
    lede: 'Step away from the cycle of dieting and guilt. We’ll explore hunger and fullness, food rules and the role food plays in your life, at a pace that feels safe.',
    metaDescription: 'Intuitive eating and relationship-with-food support by video with a registered dietitian. Move away from dieting, guilt and rigid food rules.',
    service: 'intuitiveEating', bookLabel: 'Book an intuitive eating consult', ctaTitle: 'Ready to make peace with food?', coverageNote: otherCoverage, blogCategory: 'Recipes',
    dietitianNote: 'Brings years of one-on-one counseling and a gentle, non-judgmental approach to food and body concerns.',
    progress: { chartLabel: 'Regular meals', unit: '/day', start: 1, end: 3, goal: 3, goalLabel: 'Goal 3', direction: 'up', rows: [['Hunger check-ins', 'Daily', ''], ['Food rules noticed', '4', ''], ['Stress around meals', 'Lower', '']] },
    forYou: ['You feel stuck in a cycle of dieting and regaining', 'Food brings guilt, anxiety or a sense of losing control', 'You’ve lost touch with hunger and fullness', 'You want to care for your health without rigid rules', 'You want to model a healthier relationship with food for your family'],
    together: ['Rebuild regular, satisfying eating patterns', 'Notice hunger, fullness and satisfaction', 'Gently question food rules and labels', 'Find non-food ways to cope with stress', 'Use gentle nutrition for health conditions without dieting'],
    timeline: [
      { title: 'Share your history', description: 'We talk about your experiences with food, dieting and your body.' },
      { title: 'Create structure', description: 'We set up regular meals and snacks so your body can trust it will be fed.' },
      { title: 'Explore your rules', description: 'We look at the beliefs that drive guilt or restriction.' },
      { title: 'Add gentle nutrition', description: 'We bring in health goals in a way that supports your relationship with food.' },
    ],
    faq: [
      ['Is intuitive eating just eating whatever I want?', 'No. It’s a structured approach to reconnecting with hunger, fullness and satisfaction while still caring for your health.'],
      ['Can I do this if I have diabetes or another condition?', 'Yes. We use “gentle nutrition” to support medical needs without returning to dieting.'],
      ['Do you treat eating disorders?', 'If you have or may have an eating disorder, the right care usually includes a specialized team. We’ll talk honestly about fit and can help you find specialist support.'],
      ['Will we talk about weight?', 'Only if and how you want to. The focus is on behaviors and wellbeing rather than the scale.'],
    ],
  },
  {
    slug: 'corporate-wellness', category: 'groups', name: 'Corporate wellness', short: 'Workplace workshops, wellness programs and lunch-and-learns', eyebrow: 'CORPORATE WELLNESS',
    title: 'Practical nutrition programs for your workplace.',
    lede: 'Bring evidence-based nutrition education to your team. Deepthi has designed data-driven workplace wellness programs for a major health plan and can tailor sessions to your organization.',
    metaDescription: 'Corporate wellness and workplace nutrition programs from a registered dietitian with health-plan program design experience. Virtual workshops, lunch-and-learns and series.',
    service: 'corporate', bookLabel: 'Request a corporate wellness call', ctaTitle: 'Let’s plan nutrition support for your team.', coverageNote: 'Corporate programs are billed directly to your organization. We’ll scope a format and quote together.', blogCategory: 'Heart',
    dietitianNote: 'Designed data-driven workplace wellness and health-management programs as a Health Strategy Consultant at Highmark.',
    progress: { chartLabel: 'Workshop attendance', unit: 'people', start: 12, end: 34, goal: 30, goalLabel: 'Goal 30', direction: 'up', rows: [['Sessions delivered', '4 of 6', ''], ['Topics', 'Meals at work', ''], ['Feedback survey', 'Collected', '']] },
    forYou: ['You lead HR, benefits or wellness at your organization', 'You want engaging, evidence-based nutrition education', 'Your team works shifts, travels or eats at their desks', 'You want sessions that reflect a diverse, multicultural workforce', 'You need virtual options for remote or hybrid teams'],
    together: ['Plan a single workshop or a multi-session series', 'Choose topics such as energy, heart health or diabetes prevention', 'Tailor content to your team’s schedules and cultures', 'Offer Q&A and practical take-home resources', 'Gather simple, anonymous feedback to shape future sessions'],
    timeline: [
      { title: 'Discovery call', description: 'We discuss your goals, team size, format and budget.' },
      { title: 'Program design', description: 'We outline topics, session lengths and materials for your team.' },
      { title: 'Deliver sessions', description: 'Live virtual workshops with discussion and practical tools.' },
      { title: 'Review together', description: 'We look at participation and feedback and plan next steps.' },
    ],
    faq: [
      ['Are sessions virtual?', 'Yes, sessions are delivered by video, which works well for remote and multi-location teams.'],
      ['Do employees share health information?', 'No. Group workshops are educational. Employees who want individual care can book their own private visits.'],
      ['What topics can you cover?', 'Common topics include eating for energy, heart health, diabetes prevention, plant-based eating and meals at work. We tailor them to your team.'],
      ['How is it priced?', 'Pricing depends on format and number of sessions. We’ll send a quote after a short discovery call.'],
    ],
  },
  {
    slug: 'group-family', category: 'groups', name: 'Group sessions & family nutrition', short: 'Small-group programs and nutrition for the whole household', eyebrow: 'GROUP & FAMILY NUTRITION',
    title: 'Learn together, eat together.',
    lede: 'Small-group sessions offer support and shared ideas, and family visits help everyone at the table. We’ll find meals that work for different ages, needs and traditions.',
    metaDescription: 'Group nutrition sessions and family nutrition visits by video with a registered dietitian. Shared support and meals that work for the whole household.',
    service: 'group', bookLabel: 'Book a group or family consult', ctaTitle: 'Bring the people you eat with.', coverageNote: otherCoverage, blogCategory: 'Recipes',
    dietitianNote: 'Has led support groups and education sessions in hospital and community programs, and is a National Diabetes Prevention Program lifestyle coach.',
    progress: { chartLabel: 'Family meals together', unit: '/week', start: 2, end: 5, goal: 4, goalLabel: 'Goal 4', direction: 'up', rows: [['Shared meal plan', 'Done', ''], ['Vegetable servings', '4/day', '▲ 2'], ['Kids helping cook', '2x/week', '']] },
    forYou: ['Different people at home need different foods', 'You’re caring for a parent or child with a health condition', 'You want to raise kids with a positive view of food', 'You’d like the support and accountability of a small group', 'You want to keep cultural dishes while eating healthier'],
    together: ['Plan meals that work for several needs at once', 'Make shopping and cooking manageable for the household', 'Share ideas and encouragement in a small group', 'Adapt traditional recipes', 'Build simple routines kids and adults can follow'],
    timeline: [
      { title: 'Meet everyone', description: 'We learn about each person’s needs, preferences and routines.' },
      { title: 'Find common ground', description: 'We build a base menu with easy adjustments for different needs.' },
      { title: 'Practice together', description: 'We try new meals, routines and shopping strategies.' },
      { title: 'Keep the momentum', description: 'We review what worked and plan support going forward.' },
    ],
    faq: [
      ['Who can join a family visit?', 'Anyone in the household who shares meals. Each person’s privacy is respected, and individual needs can be discussed separately.'],
      ['How do group sessions work?', 'Small groups meet by video for a set series of sessions focused on a shared topic, with time for questions.'],
      ['Are group or family visits covered by insurance?', 'Coverage varies by plan and diagnosis. We’ll check your benefits before you book.'],
      ['Can you work with children?', 'Yes, with a parent or guardian present. We focus on positive, age-appropriate eating habits.'],
    ],
  },
];
export const conditionBySlug = (slug: string) => conditions.find(c => c.slug === slug);

export const conditionGroups = [
  { key: 'clinical', label: 'Clinical care' },
  { key: 'lifestyle', label: 'Lifestyle & food relationship' },
  { key: 'groups', label: 'Groups & workplaces' },
] as const;
