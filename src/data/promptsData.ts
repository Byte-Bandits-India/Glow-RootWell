export type PromptCategory = 'skin' | 'gut' | 'nutrition' | 'fitness';
export type PromptBundle = 'free' | 'starter' | 'pro';

export interface PromptItem {
  id: string;
  title: string;
  category: PromptCategory;
  bundle: PromptBundle;
  updated: string;
  description: string;
  role: string;
  promptText: string;
  tags: string[];
  duration: string;
}

export const CATEGORIES: Record<PromptCategory, { label: string; count: number; description: string; icon: string; tintBg: string; tintText: string }> = {
  skin: {
    label: "Skin",
    count: 120,
    description: "Barrier repair, acne solutions, routine design & ingredient layering",
    icon: "Sparkles",
    tintBg: "#FCE7E1",
    tintText: "#8A3B25",
  },
  gut: {
    label: "Gut health",
    count: 100,
    description: "Bloating relief, microbiome support, food logging & FODMAP plans",
    icon: "HeartHandshake",
    tintBg: "#DDEED0",
    tintText: "#2C541B",
  },
  nutrition: {
    label: "Nutrition",
    count: 150,
    description: "Macro balancing, Indian thalis, vegetarian protein & grocery lists",
    icon: "Apple",
    tintBg: "#F9EBBF",
    tintText: "#6E5211",
  },
  fitness: {
    label: "Fitness",
    count: 130,
    description: "PCOD routines, home workouts, progressive strength & habit tracking",
    icon: "Activity",
    tintBg: "#D1EBE2",
    tintText: "#15584A",
  },
};

export const BUNDLES: Record<PromptBundle, { label: string; badge: string; color: string; desc: string }> = {
  free: {
    label: "Free",
    badge: "Free Sample",
    color: "bg-[#E6F4EA] text-[#1E7A46] border-[#BCE4C9]",
    desc: "Immediately copyable & ready to use",
  },
  starter: {
    label: "Starter",
    badge: "Starter Pack",
    color: "bg-[#EAEFFD] text-[#3445A2] border-[#C4D2FB]",
    desc: "Included with Starter Pack (₹199)",
  },
  pro: {
    label: "Pro",
    badge: "Pro Library",
    color: "bg-[#FDF0CE] text-[#825300] border-[#F6DC95]",
    desc: "Unlocks with Full Pro Access (₹1,999)",
  },
};

export const PROMPTS: PromptItem[] = [
  {
    id: "p1",
    title: "Acne routine by skin type",
    category: "skin",
    bundle: "free",
    updated: "2026-10-24",
    description: "Helps you build a simple morning and evening routine for acne-prone skin, matched to your skin type and budget.",
    role: "skincare coach & cosmetic formulation advisor",
    promptText: `Act as a clinical skincare coach and cosmetic formulation advisor. I want help building an effective, gentle routine for acne-prone skin without stripping my skin barrier.

First, ask me 3 brief questions:
1. My skin type (oily, dry, combo, or sensitive) and current climate (humid, dry, temperate).
2. The primary types of breakouts I experience (hormonal jawline, closed comedones, cystic, or blackheads).
3. Any active ingredients I currently use or have had bad reactions to in the past.

Once I answer, give me:
- A minimalist AM routine (cleanse, hydrate, SPF) with specific non-comedogenic ingredients to look for.
- A targeted PM routine (double cleanse if needed, active treatment, calming moisturizer).
- A rule of thumb for introducing new actives to avoid purging or irritation.
- Budget-friendly drugstore product archetype suggestions.`,
    tags: ["Acne", "Morning/Night", "Barrier-safe"],
    duration: "45 sec",
  },
  {
    id: "p2",
    title: "Barrier repair 4-week routine",
    category: "skin",
    bundle: "starter",
    updated: "2026-10-22",
    description: "Helps you calm irritated skin with a gentle 4-week plan that rebuilds your skin barrier step by step.",
    role: "dermatology research analyst & skin barrier specialist",
    promptText: `Act as a skin barrier repair specialist. My skin barrier feels compromised (redness, stinging upon applying moisturizer, dehydration tightness, or flaking).

Ask me about my current routine and when the irritation started. Then map out a structured 4-Week Barrier Rehabilitation Protocol:
- Week 1: Strict zero-active baseline to eliminate all irritation vectors.
- Week 2: Targeted ceramide, cholesterol, and fatty acid (3:1:1 physiological ratio) replenishment.
- Week 3: Gentle re-hydration with beta-glucan, panthenol, and ectoin.
- Week 4: Safe re-assessment protocol before any exfoliating acids or retinoids are reintroduced.`,
    tags: ["Ceramides", "Redness", "Recovery"],
    duration: "60 sec",
  },
  {
    id: "p3",
    title: "Sunscreen picker for humid climates",
    category: "skin",
    bundle: "starter",
    updated: "2026-10-18",
    description: "Helps you choose a sunscreen that suits your skin and stays comfortable in hot, humid weather.",
    role: "skincare chemist",
    promptText: `Act as a cosmetic chemist. I struggle with sunscreens feeling greasy, heavy, pilling, or clogging my pores in hot and humid weather.

Ask me about:
1. My skin tone (to check for white cast concerns).
2. My eye sensitivity (chemical filter stinging).
3. My finish preference (natural matte, satin, or glowy).

Then provide:
- The optimal UV filter generation (e.g., Tinosorb S, Uvinul A Plus, Mexoryl SX) suitable for humid stability.
- 3 distinct texture categories (gel-water, fluid milk, sebum-absorbing hybrid) and how to apply them evenly without pilling under sweat.`,
    tags: ["SPF", "Humid Weather", "Non-greasy"],
    duration: "40 sec",
  },
  {
    id: "p4",
    title: "Gentle retinol starter plan",
    category: "skin",
    bundle: "pro",
    updated: "2026-10-15",
    description: "Helps you introduce retinol slowly, with a schedule that limits dryness and irritation.",
    role: "skincare educator",
    promptText: `Act as a master skincare educator. I want to introduce a retinoid into my evening regimen without suffering from peeling, burning, or severe retinization purge.

First, ask about my prior retinol experience, pregnancy status, and current evening moisturizer.
Then produce:
- The "Sandwich Technique" explanation and schedule (Week 1-2 once weekly, Week 3-4 twice weekly).
- Recommended gentle concentrations (0.1% encapsulated retinol or retinaldehyde).
- Ingredients to pause (AHA/BHA, L-ascorbic acid, physical scrubs) while retinizing.
- Clear signs that mean "pause for 3 days" vs normal cell turnover adaptation.`,
    tags: ["Retinol", "Anti-aging", "Slow intro"],
    duration: "60 sec",
  },
  {
    id: "p5",
    title: "Ingredient layering checker",
    category: "skin",
    bundle: "pro",
    updated: "2026-10-09",
    description: "Helps you check which skincare actives can be used together and in what order.",
    role: "cosmetic formulation expert",
    promptText: `Act as an expert cosmetic formulation chemist. I want to verify if my current combination of serums and active ingredients is chemically compatible and won't destabilize each other or burn my skin.

Ask me to list every product, brand, and active ingredient I currently use.
Then generate a Clean Matrix table:
1. Product Name & Key Active
2. AM or PM allocation
3. Safe pairings vs dangerous clashes (e.g. Copper Peptides + Vitamin C, Niacinamide + High Acid pH, Retinol + Salicylic)
4. Optimal wait times and pH hierarchy between layers.`,
    tags: ["Actives", "Layering", "Safety"],
    duration: "50 sec",
  },
  {
    id: "p6",
    title: "Dark spot fading plan",
    category: "skin",
    bundle: "pro",
    updated: "2026-09-30",
    description: "Helps you plan a steady routine to fade dark spots and protect your results.",
    role: "hyperpigmentation specialist",
    promptText: `Act as an expert in post-inflammatory hyperpigmentation (PIH) and melasma.
Ask me about the color of my dark marks (red/pink PIE vs brown/black PIH) and my Fitzpatrick skin type.
Then provide:
- A multi-pathway tyrosinase inhibitor strategy (Tranexamic acid, Azelaic acid, Alpha Arbutin, Licorice root).
- Morning antioxidant shield to stop UV-induced melanin activation.
- Realistic timeline expectations (8 to 12 weeks of cell turnover) with weekly progress tracking markers.`,
    tags: ["PIH", "Melasma", "Tranexamic"],
    duration: "50 sec",
  },
  {
    id: "p7",
    title: "Bloating relief food diary",
    category: "gut",
    bundle: "free",
    updated: "2026-10-25",
    description: "Helps you log meals and symptoms for a week and spot patterns behind your bloating.",
    role: "integrative gut health practitioner",
    promptText: `Act as an integrative gut health practitioner. I am dealing with uncomfortable bloating and sluggish digestion, and I need a systematic way to identify root causes.

First, ask me:
1. When does the bloating peak (immediately post-meal, afternoon, or evening before bed)?
2. What staple carbohydrates, dairy, and legumes do I eat most frequently?
3. Any accompanying symptoms like brain fog, acid reflux, or irregular bowel frequency?

Then give me:
- A structured 7-Day Food & Symptom Journal format designed to detect fermentation patterns.
- 4 common non-food digestive disruptors to check (eating speed, carbonation, stress during meals, chewing thoroughness).
- Immediate soothing digestive tea recipes (ginger-fennel-peppermint protocol).`,
    tags: ["Bloating", "Digestion", "Diary"],
    duration: "45 sec",
  },
  {
    id: "p8",
    title: "Probiotic food planner",
    category: "gut",
    bundle: "starter",
    updated: "2026-10-20",
    description: "Helps you add probiotic-rich foods to your week in a way that suits your diet.",
    role: "microbiome nutritionist",
    promptText: `Act as a microbiome nutritionist. I want to naturally support my gut flora with whole-food fermented probiotics rather than expensive pill supplements.

Ask about my dietary preferences (vegetarian, vegan, lactose intolerance, fermented food familiarity).
Then build:
- A progressive 14-day introductory ladder (starting with 1 tablespoon of live curd, kefir, kimchi, sauerkraut, or fermented rice water).
- Crucial prebiotic fibers to feed the incoming strains (inulin, resistant starch, acacia fiber).
- Practical guidance on how to prevent initial gas during microbiome shifts.`,
    tags: ["Microbiome", "Fermented", "Prebiotics"],
    duration: "60 sec",
  },
  {
    id: "p9",
    title: "Gut and skin check-in",
    category: "gut",
    bundle: "starter",
    updated: "2026-10-12",
    description: "Helps you explore how digestion, food and skin flare-ups may be connected.",
    role: "gut-skin axis researcher",
    promptText: `Act as a specialist in the gut-skin axis. I notice that my skin flare-ups often correspond to digestive distress, sluggish elimination, or specific food categories.

Ask me about my bowel regularity (Bristol Stool Chart), recent antibiotic use, and skin condition.
Provide:
- An educational breakdown of intestinal permeability and circulating inflammatory cytokines reaching the dermal layer.
- An elimination and reintroduction strategy that protects nutritional variety.
- Daily vagus nerve and parasympathetic digestive relaxation prompts for mealtime.`,
    tags: ["Gut-Skin Axis", "Inflammation", "Microbiome"],
    duration: "60 sec",
  },
  {
    id: "p10",
    title: "Doctor visit question list",
    category: "gut",
    bundle: "starter",
    updated: "2026-10-05",
    description: "Helps you prepare clear questions and notes for your next gut health appointment.",
    role: "clinical patient advocate & gastroenterology liaison",
    promptText: `Act as a clinical patient advocate. I have an upcoming consultation with a gastroenterologist / physician and want to make the most of my 15-minute appointment without forgetting crucial history.

Ask me to summarize my top 3 symptoms, timeline, and treatments tried so far.
Then format:
- A 1-page structured Chief Complaint summary using clinical terminology doctors appreciate.
- A concise list of 5 high-yield diagnostic questions to ask (e.g., SIBO breath test, stool calprotectin, celiac serology, thyroid panel).
- A checklist of records and prescription history to carry into the clinic.`,
    tags: ["Doctor Visit", "Advocacy", "Checklist"],
    duration: "50 sec",
  },
  {
    id: "p11",
    title: "Low-FODMAP week planner",
    category: "gut",
    bundle: "pro",
    updated: "2026-10-17",
    description: "Helps you plan a week of low-FODMAP meals with swaps for common trigger foods.",
    role: "monash-trained GI dietitian",
    promptText: `Act as a clinical GI dietitian trained in the Monash University FODMAP protocol.
Ask me about my cooking preferences, cultural cuisine staples, and daily calorie needs.
Then create:
- A complete 7-day Low-FODMAP Elimination Phase meal plan with breakfast, lunch, dinner, and snack swaps.
- Simple flavor replacements for onion and garlic (asafoetida/hing, chives, garlic-infused oils).
- A strict 3-phase roadmap: Elimination (2-6 weeks) -> Systemic Reintroduction -> Personalized Integration.`,
    tags: ["IBS", "Low-FODMAP", "Elimination"],
    duration: "70 sec",
  },
  {
    id: "p12",
    title: "Trigger food detective",
    category: "gut",
    bundle: "pro",
    updated: "2026-09-28",
    description: "Helps you track and narrow down foods that may be causing discomfort.",
    role: "dietary diagnostic specialist",
    promptText: `Act as a dietary diagnostic specialist. I suspect specific foods are triggering nausea, bloating, or energy crashes, but my diet has too many variables to pinpoint them.

Ask me what foods I suspect and my typical daily eating schedule.
Generate:
- A systematic single-variable testing matrix (evaluating dairy lactose, gluten fructans, histamine foods, nightshades, or artificial polyols).
- How to record baseline versus flare reactions without inducing orthorexic stress.
- When to pause testing and seek immediate medical evaluation.`,
    tags: ["Food Sensitivity", "Diagnostics", "Tracking"],
    duration: "50 sec",
  },
  {
    id: "p13",
    title: "Balanced thali builder",
    category: "nutrition",
    bundle: "free",
    updated: "2026-10-23",
    description: "Helps you build balanced Indian meals with the right mix of protein, carbs and vegetables.",
    role: "sports nutritionist specializing in South Asian cuisine",
    promptText: `Act as a sports nutritionist and traditional South Asian dietary specialist. I want to eat wholesome, traditional Indian meals (dal, roti, sabzi, curd, rice) while optimizing for satiety, blood sugar stability, and protein adequacy.

Ask me:
1. Are you vegetarian, eggetarian, or non-vegetarian?
2. What are your local regional staples (North, South, East, West Indian cuisines)?
3. What is your approximate activity level?

Then design:
- The "Macro-Optimized Thali Framework" with visual plate proportions (50% fiber veggies, 25% clean protein, 25% unrefined low-GI grains).
- Easy vegetarian protein upgrades (paneer, tofu, sattu, chana, sprout tempering, hemp seed sprinkles).
- The exact order of eating (fiber first, protein second, carbs last) to reduce glycemic spike by up to 35%.`,
    tags: ["Indian Food", "Plate Method", "Blood Sugar"],
    duration: "50 sec",
  },
  {
    id: "p14",
    title: "Grocery list from a meal plan",
    category: "nutrition",
    bundle: "free",
    updated: "2026-10-11",
    description: "Helps you turn any meal plan into a tidy, budget-aware shopping list.",
    role: "meal planning organizer",
    promptText: `Act as an executive meal-prep organizer and grocery strategist.
Ask me to paste my intended meals for the week or ask me how many people I am feeding.
Then organize:
- A categorized, aisle-by-aisle shopping list (Produce, Chilled/Dairy, Pantry Grains, Legumes/Proteins, Spices/Condiments).
- Quantity estimates so zero perishable produce rots in the crisper drawer.
- High-shelf-life pantry backup essentials for unexpected busy evenings.`,
    tags: ["Groceries", "Pantry", "Budget"],
    duration: "40 sec",
  },
  {
    id: "p15",
    title: "Weekly macro meal plan",
    category: "nutrition",
    bundle: "pro",
    updated: "2026-10-19",
    description: "Helps you create a weekly meal plan around your calorie and macro targets.",
    role: "clinical performance nutritionist",
    promptText: `Act as a certified performance nutritionist.
Ask me for:
- My target daily calories, protein (g), carbs (g), and fats (g).
- Number of meals I prefer eating each day (2, 3, or 4).
- Foods I love and foods I dislike.

Deliver:
- A complete 7-day varied meal plan matching the exact macro targets within a +/- 5% margin.
- Batch cooking instructions for Sunday prep that cuts daily kitchen time down to 15 minutes.
- Quick high-protein grab-and-go snack formulas.`,
    tags: ["Macros", "Performance", "Meal Prep"],
    duration: "65 sec",
  },
  {
    id: "p16",
    title: "Vegetarian protein planner",
    category: "nutrition",
    bundle: "pro",
    updated: "2026-10-08",
    description: "Helps you reach your daily protein goal with vegetarian foods you already enjoy.",
    role: "plant-based dietitian",
    promptText: `Act as an evidence-based plant-forward dietitian. I am fully vegetarian and struggle to reach 80-120g of high-quality protein per day without excessive calories or digestive bloating.

Ask me my current body weight and protein goal.
Then provide:
- A Complete Amino Acid Pairing guide for plant foods (leucine thresholds, lysine sources).
- High protein density breakdown per 100 kcal of vegetarian staples.
- A sample 100g protein day without protein powder, and another version with 1 scoop of clean protein powder.`,
    tags: ["Vegetarian", "Protein", "Plant-based"],
    duration: "55 sec",
  },
  {
    id: "p17",
    title: "Packaged food label reader",
    category: "nutrition",
    bundle: "pro",
    updated: "2026-10-02",
    description: "Helps you read ingredient lists and nutrition labels on packaged foods with confidence.",
    role: "food scientist & regulatory analyst",
    promptText: `Act as a food scientist and consumer label investigator.
Ask me to paste the ingredient list and nutrition panel of any packaged food item I am considering buying.
Then decode:
- Hidden sugars and maltodextrin aliases.
- Industrial seed oil refining and emulsifier concerns.
- True net carbs versus marketing claims ("healthy", "natural", "zero added sugar").
- A final rating: Everyday Staple, Moderate Treat, or Avoid.`,
    tags: ["Food Labels", "Additives", "Smart Shopping"],
    duration: "45 sec",
  },
  {
    id: "p18",
    title: "Nutrient gap review",
    category: "nutrition",
    bundle: "pro",
    updated: "2026-09-26",
    description: "Helps you review your usual meals and spot nutrients you may be missing.",
    role: "preventative nutrition researcher",
    promptText: `Act as a preventative healthcare nutrition researcher.
Ask me to outline everything I typically eat across a 3-day window.
Then analyze:
- Common micronutrient gaps: Vitamin D3, B12, Magnesium, Omega-3 EPA/DHA, Zinc, and Choline.
- Whole-food dietary interventions to plug each gap before resorting to synthetic megadoses.
- Synergistic absorption rules (e.g. Vitamin C with non-heme iron, fat-soluble vitamins with healthy fats).`,
    tags: ["Micronutrients", "Vitamins", "Health Audit"],
    duration: "60 sec",
  },
  {
    id: "p19",
    title: "20-minute home workout",
    category: "fitness",
    bundle: "free",
    updated: "2026-10-21",
    description: "Helps you get a short, equipment-free workout that fits your level and your day.",
    role: "functional movement coach",
    promptText: `Act as a functional movement and mobility coach. I have exactly 20 minutes, zero gym equipment, and want an energizing full-body session in my living room.

Ask me:
1. My current energy level (Low, Moderate, High).
2. Any joint sensitivities (knees, wrists, lower back).
3. Do I need it to be quiet (low impact, no jumping)?

Deliver:
- 3-minute dynamic joint prep.
- 14-minute interval circuit (4 exercises, structured work/rest intervals) focusing on compound movements.
- 3-minute nervous system down-regulation breathwork cooldown.`,
    tags: ["Home Workout", "No Equipment", "Quick"],
    duration: "40 sec",
  },
  {
    id: "p20",
    title: "Desk-day mobility breaks",
    category: "fitness",
    bundle: "free",
    updated: "2026-10-07",
    description: "Helps you add quick stretch and movement breaks to a long day at your desk.",
    role: "ergonomics & physical therapy advisor",
    promptText: `Act as an ergonomic physical therapy advisor. I sit at a computer workstation for 7-10 hours a day and suffer from neck stiffness, rounded shoulders, tight hip flexors, and low back fatigue.

Give me:
- Three 90-second "Micro-Breaks" I can execute right in my chair without changing clothes or drawing awkward looks on Zoom.
- The "Psoas & Thoracic Opener" routine for the mid-day slump.
- A reminder prompt trigger schedule to pair with my calendar.`,
    tags: ["Desk Worker", "Mobility", "Posture"],
    duration: "35 sec",
  },
  {
    id: "p21",
    title: "PCOD-friendly weekly routine",
    category: "fitness",
    bundle: "pro",
    updated: "2026-10-16",
    description: "Helps you build a gentle weekly exercise routine that works with PCOD, at your own pace.",
    role: "endocrinology & women's fitness specialist",
    promptText: `Act as a women's health fitness specialist specializing in PCOS / PCOD management. I need a movement plan that improves insulin sensitivity without spiking cortisol or causing adrenal burnout.

Ask me about my menstrual cycle phase, energy patterns, and current fitness baseline.
Then build:
- A weekly workout split balancing low-impact steady state (Zone 2 walking), progressive resistance training, and gentle yoga.
- Pre- and post-workout fuel guidelines to prevent hypoglycemia.
- Rest day recovery protocols that support hormonal balance.`,
    tags: ["PCOS/PCOD", "Hormones", "Low Cortisol"],
    duration: "65 sec",
  },
  {
    id: "p22",
    title: "Recovery day planner",
    category: "fitness",
    bundle: "pro",
    updated: "2026-10-10",
    description: "Helps you plan rest days with light movement, stretching and sleep habits.",
    role: "sports recovery coach",
    promptText: `Act as an elite sports recovery and parasympathetic specialist.
Ask me about the intensity of my recent training sessions and my current sleep quality.
Then prescribe:
- Active recovery movement modalities (fascial release, gentle flow, outdoor nature walk).
- Sleep hygiene checklist for deep stage-3 slow-wave sleep and growth hormone release.
- Hydration and electrolyte replenishment timing.`,
    tags: ["Rest Day", "Sleep", "Muscle Recovery"],
    duration: "50 sec",
  },
  {
    id: "p23",
    title: "Beginner strength plan",
    category: "fitness",
    bundle: "pro",
    updated: "2026-10-03",
    description: "Helps you start strength training with a simple plan and clear progressions.",
    role: "certified strength and conditioning specialist (CSCS)",
    promptText: `Act as a certified strength and conditioning coach (CSCS). I am new to lifting weights or resistance training and want to build lean muscle tone safely.

Ask me about the equipment I have access to (dumbbells, resistance bands, or full gym) and how many days I can commit (2, 3, or 4).
Then design:
- A 3-day Full Body Fundamental Movement Pattern split (Squat, Hinge, Push, Pull, Carry).
- Explicit form cues and safety checklists for each exercise.
- Progressive Overload tracking rules: how and when to increase weight safely.`,
    tags: ["Strength", "Beginner", "Resistance"],
    duration: "60 sec",
  },
  {
    id: "p24",
    title: "Habit tracker setup",
    category: "fitness",
    bundle: "pro",
    updated: "2026-09-27",
    description: "Helps you set up a simple tracker for the small daily habits you want to keep.",
    role: "behavioral psychology coach",
    promptText: `Act as a behavioral psychologist specializing in health habit formation (James Clear / BJ Fogg methodology).
Ask me what 3 health habits I have struggled to stay consistent with.
Then create:
- The "Two-Minute Rule" minimum viable version of each habit for low-energy days.
- Implementation Intentions formulas ("When [Trigger happens], I will [Micro-Action] at [Location]").
- A printable 30-day visual chain tracker that removes motivation dependence.`,
    tags: ["Habits", "Consistency", "Behavior Change"],
    duration: "45 sec",
  },
];
