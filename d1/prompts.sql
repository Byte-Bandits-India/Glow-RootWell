INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_269e8439309b45d3', 'fat_loss-busy-lifestyle-fat-loss-systems-personalized-fat-loss-plan', 'Personalized Fat Loss Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'free',
  '1', 'Act as a premium nutritionist specializing in fat loss for busy professionals. Create a highly personalized fat loss plan using [age], [gender], [weight], [height], [activity level], [diet preference], and [daily schedule]. Ensure the plan is practical, requires minimal cooking time, and includes 3 options per meal. Focus on satiety, metabolic efficiency, and long-term adherence instead of restrictive dieting. Include simple habit integrations and fallback options for busy days. Structure the plan so it feels premium, easy to follow, and sustainable even during hectic schedules. Avoid generic advice and tailor everything precisely to the inputs provided.', 'Suggest 3 eating-out swaps.', 'Client-ready fat loss plan', 'Action plan',
  'PDF', '60–90 mins', '5', 'Daily',
  '₹5K–₹20K', '', 'Fat Loss & Metabolic Transforma', '6f6682e1032ef9d5df0401be0b909a90f7b21bec18600dac747673876b12fa9b',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0ebc05f6d80e434a', 'fat_loss-busy-lifestyle-fat-loss-systems-weekly-meal-system', 'Weekly Meal System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'free',
  '2', 'Act as a nutrition systems expert. Build a weekly fat loss meal system using [diet type], [work hours], [cooking time], and [budget]. Create a repeatable structure that reduces decision fatigue. Include batch cooking ideas, interchangeable meals, and grocery shortcuts. Ensure meals are simple, quick, and sustainable. Focus on building a system that users can follow every week without thinking. Avoid complexity and emphasize efficiency and adherence for long-term fat loss success.', 'Convert into grocery list.', 'Reduce decision fatigue', 'System',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹3K–₹10K', '', 'Fat Loss & Metabolic Transforma', 'ae0894c76092057a9d28667a694f57b6ceb7fb2380c449ea05e121d9a8e33449',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_428871d475cb416f', 'fat_loss-busy-lifestyle-fat-loss-systems-habit-stacking-plan', 'Habit Stacking Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'starter',
  '3', 'Act as a behavior change expert. Create a fat loss habit stacking system using [wake time], [schedule], [stress level], and [current habits]. Identify 5–7 habits that integrate seamlessly into daily routines. Focus on ease, triggers, and consistency rather than motivation. Ensure habits require minimal effort but create compounding results over time. Avoid overwhelming the user and prioritize sustainability and realistic execution.', 'Create 7-day tracker.', 'Build consistency', 'Action plan',
  'PDF', '30–45 mins', '5', 'Daily',
  '₹2K–₹8K', '', 'Fat Loss & Metabolic Transforma', '78b1fa913342faa85537bef3114203fa70d4aee2cd3abc7090ff97f89c820b5c',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ab5da19bc3a240ba', 'fat_loss-busy-lifestyle-fat-loss-systems-busy-day-eating-strategy', 'Busy Day Eating Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'starter',
  '4', 'Act as a fat loss coach. Create a “busy day eating strategy” using [schedule], [break availability], and [food access]. Prevent overeating, energy crashes, and impulsive food decisions. Include portable meal ideas, snack systems, and hydration cues. Ensure everything is practical and usable immediately without preparation stress. Make this a fallback system for chaotic days.', 'Add emergency snacks.', 'Prevent diet breakdown', 'Strategy',
  'TXT/PDF', '30–60 mins', '5', 'Contextual',
  '₹2K–₹6K', '', 'Fat Loss & Metabolic Transforma', 'dcf6a9f94673b68d2d6a1982070487852ec37fe88ed26a13f10aa2923782f1c7',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6e113d1bbf9046fc', 'fat_loss-busy-lifestyle-fat-loss-systems-metabolism-optimization', 'Metabolism Optimization', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '5', 'Act as a metabolic health expert. Design a metabolism optimization plan using [sleep], [stress], [meal timing], and [activity level]. Focus on small, high-impact adjustments that improve fat burning, energy levels, and hormonal balance. Ensure the plan fits into a busy lifestyle without adding complexity.', 'Add morning upgrades.', 'Improve metabolism', 'Strategy',
  'PDF', '60 mins', '5', 'Weekly',
  '₹3K–₹12K', '', 'Fat Loss & Metabolic Transforma', '901bf03db3fadb764a9d2b0c5e83d582b6683feae2d34f493b9e133a580646c4',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3f8735d788a64558', 'fat_loss-busy-lifestyle-fat-loss-systems-office-fat-loss-system', 'Office Fat Loss System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '6', 'Act as a corporate nutritionist. Create a fat loss system for [work hours], [sedentary routine], and [outside food]. Include ordering strategies, portion control methods, and desk-friendly movement hacks. Ensure sustainability without major lifestyle changes.', 'Add restaurant rules.', 'Office adaptation', 'Strategy',
  'PDF', '60–90 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Fat Loss & Metabolic Transforma', 'e66646e37e07325be7ddd13cdcee15fc24e74ad0d7b6ce2b7f946cef8db6647f',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_85e5ada6dc024872', 'fat_loss-busy-lifestyle-fat-loss-systems-weekend-reset-plan', 'Weekend Reset Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '7', 'Act as a fat loss coach. Create a weekend reset system using [social events], [late nights], and [irregular eating]. Include pre-event planning, smart choices during events, and recovery strategies. Keep it flexible and guilt-free while maintaining progress.', 'Add checklist.', 'Maintain consistency', 'Action plan',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹2K–₹8K', '', 'Fat Loss & Metabolic Transforma', '63bac41dcbbd27e0cbcdb33f854ff83cec761988e85ce52b738a18ed81a0600f',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bffbc516eceb4310', 'fat_loss-busy-lifestyle-fat-loss-systems-quick-food-decision-framework', 'Quick Food Decision Framework', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '8', 'Act as a decision strategist. Build a 30-second food decision framework using [context], [hunger], and [availability]. Include rules, shortcuts, and cues to eliminate confusion and reduce reliance on willpower.', 'Make cheat sheet.', 'Reduce decisions', 'Framework',
  'JPEG/PDF', '30–45 mins', '5', 'Daily',
  '₹3K–₹9K', '', 'Fat Loss & Metabolic Transforma', 'd8e6e4a038941cfea7b06266ff1d959b69ceaf2da14f35affe026a7e18607b71',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c15e56db953646be', 'fat_loss-busy-lifestyle-fat-loss-systems-travel-fat-loss-plan', 'Travel Fat Loss Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '9', 'Act as a travel nutrition expert. Create a fat loss plan using [travel frequency], [hotel stays], and [food control]. Include airport strategies, hotel meal planning, and simple movement routines. Focus on maintaining progress, not perfection.', 'Add 3-day plan.', 'Travel consistency', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹4K–₹12K', '', 'Fat Loss & Metabolic Transforma', '169888f465d43cc839be23228c010b368cbb1519df6b785a8a6f40d526d26e71',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bb1559ee01c8461b', 'fat_loss-busy-lifestyle-fat-loss-systems-low-effort-blueprint', 'Low-Effort Blueprint', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '10', 'Act as a simplification expert. Create a fat loss system using [habits], [time], and [motivation]. Focus on the 20% actions delivering 80% results. Remove complexity and build consistency through simplicity.', 'Convert to checklist.', 'Simplify execution', 'Strategy',
  'PDF', '60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Fat Loss & Metabolic Transforma', 'e864a286fb390276c73b14750a948c4f9e8f365148443e44f8cf2c6def28a02c',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_92400cd9edaa4ce7', 'fat_loss-busy-lifestyle-fat-loss-systems-eating-out-strategy', 'Eating Out Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '11', 'Act as a nutrition expert. Create a system for eating out using [frequency], [cuisine], and [social pressure]. Include menu scanning rules, portion control, and smart substitutions. Ensure flexibility without losing progress.', 'Add examples.', 'Real-world dieting', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹4K–₹12K', '', 'Fat Loss & Metabolic Transforma', 'df1920c1443913108558f9c34d85d55ef356fe0fbf11ea4b3de00f4f130a11d0',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2bc90ef005534475', 'fat_loss-busy-lifestyle-fat-loss-systems-craving-control-system', 'Craving Control System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '12', 'Act as a behavioral expert. Design a craving control system using [triggers], [timing], and [stress]. Include replacement strategies, environmental adjustments, and mindset techniques to reduce dependency.', 'Add tracker.', 'Control cravings', 'Framework',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹9K', '', 'Fat Loss & Metabolic Transforma', 'b641a6de2b02dbd93e6bf538b62c3c2d75ba013ff2a58a598aa34e8f874fbee5',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_dd237dba97414a38', 'fat_loss-busy-lifestyle-fat-loss-systems-energy-management-plan', 'Energy Management Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '13', 'Act as a performance coach. Create an energy management system using [routine], [meal timing], and [workload]. Stabilize energy to prevent overeating and crashes.', 'Add checklist.', 'Improve energy', 'Strategy',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹8K', '', 'Fat Loss & Metabolic Transforma', '6f8e7029bd2ff4c04b33b2b96976d615380ce0c9bd2ec775d5d1812ffbef5f12',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7a5ba6db060042d3', 'fat_loss-busy-lifestyle-fat-loss-systems-morning-routine', 'Morning Routine', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '14', 'Act as a high-performance coach. Build a fat loss morning routine using [time], [habits], and [schedule]. Keep it efficient, powerful, and realistic for busy individuals.', 'Add 10-min version.', 'Strong start', 'Plan',
  'PDF', '30–45 mins', '5', 'Daily',
  '₹2K–₹7K', '', 'Fat Loss & Metabolic Transforma', 'fbc12fa67b685a30a9bcd595ef1a27f286c58a7b838d778434cd3a10644b87c9',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_994dc55758b24f9f', 'fat_loss-busy-lifestyle-fat-loss-systems-night-routine', 'Night Routine', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '15', 'Act as a recovery expert. Create a night routine using [sleep habits], [screen time], and [schedule]. Improve sleep quality, recovery, and fat loss efficiency.', 'Add checklist.', 'Improve recovery', 'Plan',
  'PDF', '30–45 mins', '5', 'Daily',
  '₹2K–₹7K', '', 'Fat Loss & Metabolic Transforma', '07195bfbab6b5c3249e5ca469ebafea7e3d38400b4eefea10c56210b17f6c70b',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_19b88489cdae4dac', 'fat_loss-busy-lifestyle-fat-loss-systems-minimal-prep-meals', 'Minimal Prep Meals', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '16', 'Act as a systems expert. Create a minimal-prep meal system using [time], [skills], and [resources]. Focus on repeatability, simplicity, and low effort.', 'Add checklist.', 'Simplify cooking', 'System',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹3K–₹10K', '', 'Fat Loss & Metabolic Transforma', '0ac35271cbf955b5fa0636b1ff7e8025b5b81ca63b947deac963be8afd1faca5',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_56789720a246438a', 'fat_loss-busy-lifestyle-fat-loss-systems-social-event-strategy', 'Social Event Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '17', 'Act as a coach. Create a fat loss system using [event frequency] and [habits]. Include pre-event, during-event, and post-event strategies to maintain balance.', 'Add reset plan.', 'Social control', 'Strategy',
  'PDF', '45–60 mins', '5', 'Contextual',
  '₹3K–₹9K', '', 'Fat Loss & Metabolic Transforma', '6beae97cc6b8dc9985f52a1c3bee43b7c715621405d5350867e2863be3af5546',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a37e5753b9164107', 'fat_loss-busy-lifestyle-fat-loss-systems-stress-eating-plan', 'Stress Eating Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '18', 'Act as a behavioral expert. Create a system using [triggers] and [patterns]. Include interruption techniques, environment design, and alternative actions to break the cycle.', 'Add worksheet.', 'Break patterns', 'Plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Fat Loss & Metabolic Transforma', 'b57835e29f764a45536b9578665afd0e7f2c34dc8fe96e762f01e741f2774cb5',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_86b044d80bd044a5', 'fat_loss-busy-lifestyle-fat-loss-systems-micro-workout-plan', 'Micro Workout Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '19', 'Act as a fitness strategist. Create a micro workout system using [time] and [constraints]. Include short bursts of activity that fit into daily routines without friction.', 'Add tracker.', 'Increase activity', 'Plan',
  'PDF', '30–45 mins', '4', 'Daily',
  '₹2K–₹6K', '', 'Fat Loss & Metabolic Transforma', '3e5091e96d4f8e140a0eb619b013e9445c481d539e9797aff2e5831bb29f3923',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2227584a023e479b', 'fat_loss-busy-lifestyle-fat-loss-systems-recovery-system', 'Recovery System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Busy Lifestyle Fat Loss Systems', 'pro',
  '20', 'Act as a transformation coach. Create a reset system using [setback scenario]. Focus on restoring consistency within 24–48 hours using simple and actionable steps.', 'Add reset checklist.', 'Restore consistency', 'Strategy',
  'PDF', '45–60 mins', '5', 'Contextual',
  '₹3K–₹9K', '', 'Fat Loss & Metabolic Transforma', '22db8ff7587833eb2efa6db4707771276aca052faffc906ffe59e3bd7b6e37bf',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bafe140a35c042ab', 'fat_loss-stubborn-fat-plateau-breakers-calorie-adjustment-strategy', 'Calorie Adjustment Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'free',
  '2', 'Act as a nutrition strategist for plateau cases. Based on [current calorie intake], [plateau duration], [goal], and [energy levels], determine whether the client requires a calorie reduction, increase, or cycling approach. Explain the reasoning behind the adjustment in simple terms. Provide a step-by-step implementation plan for the next 2–4 weeks, ensuring sustainability and adherence. Avoid aggressive cuts or unrealistic changes. Focus on restoring fat loss while protecting metabolism and energy levels.', 'Add 2-week tracking sheet.', 'Break plateau via nutrition', 'Strategy',
  'PDF', '60 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet2', 'e0fe3ec03b4ba7281c46420acb41f11cf2110d24fbf57d715c71b25fa1d0fa69',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7ad4a7b8b7a7464c', 'fat_loss-stubborn-fat-plateau-breakers-metabolic-reset-plan', 'Metabolic Reset Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'free',
  '3', 'Act as a metabolic health expert. Design a metabolic reset plan for a client with [long-term dieting history], [low energy], and [plateau stage]. Focus on reversing metabolic slowdown while minimizing fat regain. Include gradual calorie adjustments, recovery-focused habits, and structured behavioral changes. Ensure the plan is practical and fits into a busy lifestyle without overwhelm. Emphasize sustainability and long-term fat loss success rather than quick fixes.', 'Add weekly recovery checklist.', 'Restore metabolism', 'Plan',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹6K–₹18K', '', 'Sheet2', 'b85eaade557ba7f50174c49d5103c57f40222baa139a0593f14c6ba37185df9d',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9c0204cd20814aaf', 'fat_loss-stubborn-fat-plateau-breakers-hidden-calorie-audit-system', 'Hidden Calorie Audit System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'starter',
  '4', 'Act as a fat loss investigator. Analyze a client’s intake using [daily meals], [snacks], [beverages], and [weekend patterns]. Identify hidden calorie sources and small mistakes that may be preventing fat loss. Provide a clear audit highlighting key problem areas and suggest realistic, easy-to-implement corrections. Focus on precision without overwhelming the client. Ensure clarity and immediate usability.', 'Convert into daily checklist.', 'Identify fat loss blockers', 'Analysis',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹3K–₹9K', '', 'Sheet2', '0c748bbbf049019a15ac4a50a9632d4cce2c0594d7600c173a47ecb9e5ecf959',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d90241d008f24ade', 'fat_loss-stubborn-fat-plateau-breakers-activity-neat-optimization', 'Activity & NEAT Optimization', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'starter',
  '5', 'Act as a fat loss coach. Create an activity optimization system using [daily steps], [work routine], and [exercise frequency]. Focus on increasing NEAT (non-exercise activity) to boost fat loss without increasing workout intensity. Include practical strategies such as step targets, movement breaks, and lifestyle integration methods. Ensure the plan is sustainable and fits into a busy schedule. Avoid burnout-focused approaches.', 'Add progressive step targets.', 'Increase calorie burn', 'Strategy',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet2', '6309f736a39849a764558c50a542bce8916ebfd3b4efa181afa625bc2f16d106',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c9eeb2a19491467e', 'fat_loss-stubborn-fat-plateau-breakers-hormonal-plateau-strategy', 'Hormonal Plateau Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '6', 'Act as a hormonal fat loss expert. Analyze a plateau case using [sleep quality], [stress levels], [hormonal symptoms], [cycle details if applicable], and [energy fluctuations]. Identify potential contributors such as elevated cortisol, insulin resistance, poor sleep recovery, or chronic stress. Design a practical strategy combining nutrition timing, stress reduction, sleep optimization, and light activity adjustments to restore hormonal balance. Ensure recommendations are simple, realistic, and suited for a busy lifestyle. Avoid overly clinical or complex solutions. Focus on restoring internal balance to unlock fat loss sustainably.', 'Add 3 daily hormonal balancing habits.', 'Address hormonal blockers', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹6K–₹20K', '', 'Sheet2', 'a0a60be02c951a56e2f38bc84631e670f6c4a7d0386288885f553bfb5197a534',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a1701ad309174572', 'fat_loss-stubborn-fat-plateau-breakers-refeed-strategy-design', 'Refeed Strategy Design', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '7', 'Act as a nutrition strategist. Create a structured refeed strategy using [diet duration], [current calorie deficit], [plateau duration], and [energy levels]. Determine appropriate refeed frequency, calorie increase range, and macro distribution changes. Explain how refeeds support metabolism, leptin signaling, and adherence. Ensure the strategy avoids overeating and remains controlled and trackable. Focus on practical execution and real-life sustainability rather than theory-heavy explanations.', 'Add weekly refeed schedule and rules.', 'Break metabolic adaptation', 'Plan',
  'PDF', '60 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet2', '5fefd2d499d27c35f21d5211f83476d61f122e577d7023c799bb24f8e097d95f',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6b91a2fdb15c4c18', 'fat_loss-stubborn-fat-plateau-breakers-diet-break-optimization', 'Diet Break Optimization', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '8', 'Act as a fat loss coach. Design a structured diet break protocol using [diet history], [mental fatigue], [plateau stage], and [current intake]. Define duration, calorie adjustments, and behavioral guidelines to restore motivation and metabolic balance. Ensure the approach prevents fat regain while improving long-term adherence. Keep the system psychologically supportive and simple to follow. Focus on making the client feel refreshed rather than restricted.', 'Add transition strategy back to deficit.', 'Restore adherence & metabolism', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹5K–₹15K', '', 'Sheet2', 'd52a652b11248166fdebd56c17ab3b3a9959e9e3f675cfcca385693a4af09d4b',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ff3d5f5a2ea54578', 'fat_loss-stubborn-fat-plateau-breakers-macronutrient-rebalancing', 'Macronutrient Rebalancing', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '9', 'Act as a nutrition expert. Rebalance macronutrients using [current macro split], [energy levels], [training intensity], and [progress status]. Optimize protein, carbohydrates, and fats to improve fat loss efficiency while maintaining performance and satiety. Provide clear reasoning behind adjustments and ensure the plan is practical and easy to follow. Avoid unnecessary complexity and focus on real-world applicability.', 'Provide 3 sample meal structures.', 'Optimize nutrition', 'Strategy',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet2', '3364496b3a4ad1592844eef43451e3c5345943615b5a4dd89ffe825fd40cce63',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5bb5f2f7b2324456', 'fat_loss-stubborn-fat-plateau-breakers-plateau-breaking-meal-plan', 'Plateau-Breaking Meal Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '10', 'Act as a fat loss specialist. Create a targeted meal plan using [current diet], [plateau duration], [food preferences], and [lifestyle constraints]. Introduce strategic variations in calorie distribution, food selection, and meal timing to stimulate fat loss. Ensure the plan maintains adherence and does not feel restrictive. Include practical meal options and flexibility. Avoid drastic or unsustainable changes.', 'Add 5 flexible meal swaps.', 'Break plateau via diet', 'Plan',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet2', 'b36027c94cdf1d4d9420e597ae9591cbf495a1d1e08ab81c3521653185be7d54',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d22fd5795ba84807', 'fat_loss-stubborn-fat-plateau-breakers-stress-cortisol-management-plan', 'Stress & Cortisol Management Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '11', 'Act as a fat loss and stress management expert. Create a strategy for a client experiencing plateau with [stress levels], [workload], [sleep quality], and [energy dips]. Identify how elevated cortisol may be blocking fat loss. Provide a practical system including stress-reduction techniques, meal timing adjustments, and lifestyle changes that can be implemented within a busy schedule. Ensure the approach is simple, sustainable, and does not overwhelm the client. Focus on restoring balance rather than adding complexity.', 'Add a 5-minute daily stress reset routine.', 'Reduce cortisol impact', 'Strategy',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet2', 'ce290d1acfba86d3161c5af7a75d0f90b6d9c8d816a1dca5b6923256b9105144',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8b9337339c2b40c5', 'fat_loss-stubborn-fat-plateau-breakers-sleep-optimization-for-fat-loss', 'Sleep Optimization for Fat Loss', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '12', 'Act as a recovery expert. Design a sleep optimization system for a plateaued client using [sleep duration], [bedtime routine], [screen exposure], and [wake time]. Identify sleep-related issues affecting fat loss and provide practical improvements such as bedtime routines, light exposure control, and recovery habits. Ensure the system is realistic for a busy professional and easy to implement consistently.', 'Add a nightly checklist.', 'Improve recovery & fat loss', 'Plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet2', '982cc9b5804e543c13028851e3df9bf5a0b1416dfe23a85a49e22809a811d18e',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ee2c7e9e335e412e', 'fat_loss-stubborn-fat-plateau-breakers-training-optimization-strategy', 'Training Optimization Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '13', 'Act as a fitness expert. Analyze a client’s current workout routine using [frequency], [intensity], [type], and [recovery]. Identify signs of adaptation or inefficiency. Design an optimized training strategy that improves fat loss without causing burnout. Include adjustments in volume, intensity, and variety. Ensure the plan is practical and aligns with the client’s lifestyle.', 'Add a weekly workout structure.', 'Improve training efficiency', 'Strategy',
  'PDF', '60 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet2', '478a948100bda5f52e8743038f69f26140bfe67c1860b9b571dceabe50876676',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_080e8e314cfb420e', 'fat_loss-stubborn-fat-plateau-breakers-adaptive-fat-loss-system', 'Adaptive Fat Loss System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '14', 'Act as an advanced fat loss coach. Create an adaptive fat loss strategy using [progress data], [plateau duration], and [response patterns]. Design a flexible system that adjusts calories, activity, and habits based on weekly feedback. Ensure the system removes rigidity and allows dynamic progress tracking. Focus on sustainability and long-term success.', 'Add a weekly adjustment framework.', 'Dynamic fat loss management', 'Strategy',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Sheet2', '5cbf79a1bb029e31f042bd08608877e53f4f9d0564d76291ee05fc2194c1a023',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2b6e4c4bf6ae4ec9', 'fat_loss-stubborn-fat-plateau-breakers-fat-loss-mistake-audit', 'Fat Loss Mistake Audit', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '15', 'Act as an expert fat loss consultant. Perform a detailed audit using [daily routine], [diet habits], [exercise], and [sleep]. Identify common and subtle mistakes that may be preventing fat loss. Provide clear explanations and actionable corrections. Ensure the output is structured, easy to understand, and immediately usable. Avoid generic advice.', 'Convert into checklist format.', 'Identify errors', 'Analysis',
  'PDF', '45–60 mins', '5', 'Contextual',
  '₹3K–₹9K', '', 'Sheet2', 'c3e303eeaa7b1fc4767e17e2e2d1866e224bbd65c0728e5559789c14da2b1223',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f1003542102a4dd3', 'fat_loss-stubborn-fat-plateau-breakers-advanced-habit-reset-system', 'Advanced Habit Reset System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '16', 'Act as a behavior change expert specializing in fat loss plateaus. Analyze a client’s current habits using [daily routine], [missed actions], [consistency level], and [trigger patterns]. Identify which habits are limiting progress and design a reset system focusing on 3–5 high-impact behaviors. Ensure the system is simple, realistic, and easy to integrate into a busy lifestyle. Prioritize consistency over intensity and remove unnecessary complexity. Structure the plan so it rebuilds momentum quickly and sustainably.', 'Add a 7-day habit reset tracker.', 'Rebuild consistency', 'Action plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet2', '8fa29d9f18d18dee99c4ebd062c14f69bf2daa899f144d60a0d2f369771e3a89',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2e97bd08ae944878', 'fat_loss-stubborn-fat-plateau-breakers-fat-loss-timeline-rebuild', 'Fat Loss Timeline Rebuild', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '17', 'Act as a strategic fat loss consultant. Rebuild a realistic fat loss timeline using [goal weight], [current progress], [plateau duration], and [history]. Identify unrealistic expectations and correct them with a structured, achievable roadmap. Include milestone checkpoints and expected rates of progress. Ensure the timeline reduces frustration and improves adherence. Keep it practical and motivating.', 'Add milestone tracking sheet.', 'Reset expectations', 'Strategy',
  'PDF', '45–60 mins', '5', 'One-time',
  '₹4K–₹12K', '', 'Sheet2', '3641e7fa6fb134f64b2fb0db18e9161e3d70f6cf9d53a6329c4801508e666cd9',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ff81a815d3fd4787', 'fat_loss-stubborn-fat-plateau-breakers-consistency-gap-analysis', 'Consistency Gap Analysis', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '18', 'Act as a fat loss coach. Analyze consistency gaps using [weekly routine], [missed habits], [diet adherence], and [activity levels]. Identify patterns where execution drops and explain how these gaps contribute to stalled fat loss. Provide a clear system to close these gaps using simple behavioral adjustments and accountability mechanisms. Ensure the plan is realistic and easy to implement immediately.', 'Convert into weekly tracker.', 'Improve execution', 'Analysis',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹3K–₹9K', '', 'Sheet2', '312c2c28de1d98825466cc86ea25a358c6c5cb3ee16a60bb0c2037127910bc13',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bdce30581d3b49e2', 'fat_loss-stubborn-fat-plateau-breakers-fat-loss-acceleration-plan', 'Fat Loss Acceleration Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '19', 'Act as an advanced fat loss expert. Create a short-term fat loss acceleration plan using [timeline], [current condition], and [constraints]. Focus on safe intensification through optimized nutrition, increased activity, and structured routines. Avoid extreme or unsustainable methods. Ensure the plan is practical and aligned with the client’s lifestyle. Include safeguards to prevent burnout or rebound weight gain.', 'Add safety checklist.', 'Accelerate progress', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹5K–₹15K', '', 'Sheet2', 'cb28e381cd364b9e0efb3bd599a28c69fc955aac5623109ffc2011ecbd9e386e',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7345f92346a342e8', 'fat_loss-stubborn-fat-plateau-breakers-plateau-recovery-blueprint', 'Plateau Recovery Blueprint', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Stubborn Fat & Plateau Breakers', 'pro',
  '20', 'Act as a transformation expert. Design a complete plateau recovery blueprint using [plateau stage], [history], [lifestyle], and [current routine]. Combine nutrition, activity, behavioral, and recovery strategies into one cohesive system. Prioritize the sequence of actions and ensure clarity in execution. The blueprint should feel premium, structured, and highly actionable for real-world implementation.', 'Break into step-by-step checklist.', 'Full plateau recovery', 'Blueprint',
  'PDF', '90–120 mins', '5', 'Contextual',
  '₹8K–₹25K', '', 'Sheet2', 'e46dbc233dcc7133dd37be8516b6c1bb5830bde9fbde4945b6cc66eed73fb282',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f138f245546a4bec', 'fat_loss-hormonal-fat-loss-optimization-hormonal-fat-loss-assessment', 'Hormonal Fat Loss Assessment', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'free',
  '1', 'Act as a hormonal health expert specializing in fat loss. Analyze a client using [age], [symptoms], [menstrual cycle details if applicable], [stress levels], [sleep quality], and [weight history]. Identify potential hormonal imbalances such as insulin resistance, cortisol dysregulation, thyroid issues, or estrogen imbalance that may be impacting fat loss. Provide a clear breakdown of findings in simple terms and prioritize the top 3 contributing factors. Ensure the analysis is practical, actionable, and avoids unnecessary medical complexity.', 'Suggest top 3 corrective actions.', 'Diagnose hormonal issues', 'Analysis',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹6K–₹20K', '', 'Sheet3', '1639c33b1f781d88826c0d461665df7ced6c995f2ebd63f111c2c2f7ea395ded',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_032a7abe73734af6', 'fat_loss-hormonal-fat-loss-optimization-hormone-supportive-nutrition-plan', 'Hormone-Supportive Nutrition Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'free',
  '2', 'Act as a nutritionist specializing in hormonal balance. Create a fat loss nutrition plan using [diet preference], [symptoms], [energy levels], and [lifestyle constraints]. Focus on stabilizing blood sugar, reducing inflammation, and supporting hormonal balance. Include meal timing, food choices, and simple swaps. Ensure the plan is realistic, sustainable, and suitable for a busy lifestyle. Avoid restrictive dieting and prioritize long-term adherence.', 'Add 3 sample daily meal plans.', 'Improve hormonal balance', 'Plan',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet3', 'd514fc777d8e74c926c65cc115b0c14f8f18df25f2374f02fdf26c6a41876ef8',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_98e23c0974244f4d', 'fat_loss-hormonal-fat-loss-optimization-cortisol-regulation-strategy', 'Cortisol Regulation Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'starter',
  '3', 'Act as a stress and hormonal expert. Create a cortisol regulation system using [stress levels], [work schedule], [sleep pattern], and [energy dips]. Identify triggers that elevate cortisol and design practical solutions including lifestyle adjustments, meal timing, and recovery strategies. Ensure the system fits into a busy routine without overwhelming the client. Focus on consistency and simplicity.', 'Add 5-minute daily routine.', 'Reduce stress impact', 'Strategy',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet3', '72a8814868b12c440fd03cf78175544c3e98d057378c9a3af71dc6b32b84eb98',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cce7334bf9784fcc', 'fat_loss-hormonal-fat-loss-optimization-insulin-resistance-optimization', 'Insulin Resistance Optimization', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'starter',
  '4', 'Act as a metabolic expert. Design a strategy for improving insulin sensitivity using [diet pattern], [meal timing], [activity level], and [symptoms]. Include nutrition adjustments, meal timing strategies, and simple activity recommendations. Ensure the system is practical, sustainable, and easy to follow daily. Avoid extreme restrictions and focus on gradual improvement.', 'Add food swap list.', 'Improve insulin response', 'Strategy',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet3', '464f34200803a369f5047993252a119eea119a38fde0fd6724025b97cff62027',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6c7b1c5f20344ed2', 'fat_loss-hormonal-fat-loss-optimization-hormonal-daily-routine-system', 'Hormonal Daily Routine System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '5', 'Act as a high-performance health coach. Create a daily routine that supports hormonal balance and fat loss using [wake time], [sleep schedule], [work routine], and [energy levels]. Include nutrition timing, movement, stress management, and recovery elements. Ensure the routine is simple, structured, and easy to follow consistently.', 'Add simplified version for busy days.', 'Build hormonal stability', 'Action plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet3', '4dcd44f3392324c162ca02c8326220112626f8a753c0e15a7a48290694366c53',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ba02833707aa42c5', 'fat_loss-hormonal-fat-loss-optimization-thyroid-support-fat-loss-plan', 'Thyroid-Support Fat Loss Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '6', 'Act as a hormonal nutrition expert. Create a fat loss plan tailored for thyroid-related challenges using [TSH/T3/T4 if available], [symptoms], [energy levels], [diet pattern], and [activity level]. Focus on supporting metabolism, reducing fatigue, and improving nutrient intake. Include meal timing, key nutrients, and simple lifestyle adjustments. Ensure the plan is practical and avoids extreme restrictions. Keep it sustainable for long-term results.', 'Add key nutrient checklist.', 'Support thyroid health', 'Plan',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Sheet3', '95389845625b2ff2ddfd7d1dc83e60a7eb48271350ff9185a7b0e5c6ab5a3c31',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_68d946d0d12c4888', 'fat_loss-hormonal-fat-loss-optimization-pcos-fat-loss-strategy', 'PCOS Fat Loss Strategy', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '7', 'Act as a specialist in PCOS and fat loss. Design a strategy using [cycle regularity], [symptoms], [weight pattern], [diet], and [activity]. Focus on insulin control, inflammation reduction, and hormonal balance. Include nutrition, movement, and lifestyle strategies that are realistic and easy to follow. Avoid extreme dieting and focus on consistency.', 'Add weekly PCOS tracker.', 'Manage PCOS fat loss', 'Strategy',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹6K–₹20K', '', 'Sheet3', 'a654cd9fc5b261f39d9bfbde61601819101d3a16fd54c0d9595536d8a26bc043',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1ce68209203e4519', 'fat_loss-hormonal-fat-loss-optimization-estrogen-balance-plan', 'Estrogen Balance Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '8', 'Act as a hormonal health expert. Create a plan to balance estrogen using [symptoms], [cycle details], [diet], and [lifestyle]. Include strategies to support detoxification, reduce excess estrogen, and improve fat loss outcomes. Keep recommendations simple and practical for daily use.', 'Add food list.', 'Balance hormones', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹5K–₹15K', '', 'Sheet3', '45cbadda93af3418337115947ab6e61a05917c992ea477acba027191ea8f53f2',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_941f5a7c20dc4e19', 'fat_loss-hormonal-fat-loss-optimization-hormonal-craving-control-system', 'Hormonal Craving Control System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '9', 'Act as a behavioral nutrition expert. Design a system to manage hormonal cravings using [craving timing], [cycle phase], [stress], and [diet]. Include food strategies, behavioral techniques, and environment design to reduce dependency on sugar and processed foods. Ensure sustainability and ease of use.', 'Add craving tracker.', 'Control cravings', 'Framework',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet3', 'e6a9f0008ffe0b44271e8fc5af8c1bd67695c882158e3333fcc6304a0d91cf75',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9f06c344c2b2485e', 'fat_loss-hormonal-fat-loss-optimization-cycle-based-nutrition-plan', 'Cycle-Based Nutrition Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '10', 'Act as a hormonal nutrition coach. Create a nutrition plan aligned with menstrual cycle phases using [cycle length], [symptoms], and [diet preference]. Adjust food types and intake based on hormonal fluctuations to improve fat loss and energy. Ensure the plan is easy to follow and not overly complex.', 'Add cycle calendar.', 'Optimize nutrition timing', 'Plan',
  'PDF', '60–90 mins', '5', 'Monthly',
  '₹6K–₹18K', '', 'Sheet3', 'f4ada7d4f51bd41839d4510669bcf678bbc0c5ef2805b6130a13c078440ece38',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1cba94a7b16e487f', 'fat_loss-hormonal-fat-loss-optimization-hormonal-plateau-analysis', 'Hormonal Plateau Analysis', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '11', 'Act as a hormonal fat loss expert. Analyze a client experiencing fat loss plateau using [cycle details], [symptoms], [diet pattern], [stress levels], and [sleep quality]. Identify hormonal patterns such as elevated cortisol, insulin resistance, thyroid slowdown, or menstrual irregularities that may be affecting fat loss. Break down each factor clearly and explain how it contributes to stalled progress. Prioritize the top 3 root causes based on impact and provide insights that are practical and actionable. Avoid overly clinical language and ensure the output is structured in a way that a client can understand and implement easily in daily life.', 'Suggest top 3 corrective strategies with timelines.', 'Diagnose hormonal plateau', 'Analysis',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹6K–₹20K', '', 'Sheet3', '96f0c6279672ee925141f6234ac0600687a00130dfa05e3f1c3560d093770f8c',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f29152b434504166', 'fat_loss-hormonal-fat-loss-optimization-inflammation-reduction-plan', 'Inflammation Reduction Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '12', 'Act as a nutrition expert specializing in inflammation and fat loss. Create a plan to reduce inflammation using [diet pattern], [gut symptoms], [stress levels], and [lifestyle habits]. Identify key inflammatory triggers such as processed foods, poor sleep, or chronic stress. Provide a structured plan including anti-inflammatory food choices, simple meal swaps, hydration strategies, and lifestyle changes that are easy to follow. Ensure the plan is realistic for a busy individual and avoids extreme dietary restrictions. Focus on gradual improvement and sustainability while supporting hormonal balance and fat loss.', 'Add a list of anti-inflammatory foods and swaps.', 'Reduce inflammation', 'Plan',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet3', '9151db92a6ed645623aa739c800bfb1524089bfa8514f6ad6824b7765d79f03b',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_697faf926af145d4', 'fat_loss-hormonal-fat-loss-optimization-hormonal-energy-optimization', 'Hormonal Energy Optimization', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '13', 'Act as a performance and hormonal health coach. Create a system to stabilize daily energy levels using [energy dips timing], [meal timing], [sleep pattern], and [work schedule]. Identify patterns that may be causing fatigue such as blood sugar fluctuations, poor recovery, or irregular eating. Provide a structured plan including meal timing adjustments, nutrient suggestions, hydration strategies, and simple lifestyle changes. Ensure the system supports both productivity and fat loss without adding complexity. Focus on consistency and ease of implementation.', 'Add a daily energy tracking checklist.', 'Improve energy stability', 'Strategy',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet3', '50276f09f7ec61b7a642e01400f027f8dbdda89add6bce92ef2c3e42cbb81b2f',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a7e7aa4531b24e48', 'fat_loss-hormonal-fat-loss-optimization-gut-hormone-connection-plan', 'Gut-Hormone Connection Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '14', 'Act as a gut health and hormonal expert. Design a plan using [digestive symptoms], [diet pattern], [bloating frequency], and [lifestyle habits] to improve gut health and its impact on hormonal balance and fat loss. Identify possible gut-related issues such as poor digestion, microbiome imbalance, or inflammation. Provide a structured plan including food recommendations, simple gut-support habits, and lifestyle adjustments that are practical for daily life. Ensure the approach is sustainable and not overly restrictive.', 'Add a gut health checklist for daily use.', 'Improve gut-hormone link', 'Strategy',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet3', '14177342e726e4be173f1736ecddceeb2df36f35793e68076fa4236c67add978',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_56d1f9bfeba0467d', 'fat_loss-hormonal-fat-loss-optimization-hormonal-habit-system', 'Hormonal Habit System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '15', 'Act as a behavior change expert specializing in hormonal health. Create a habit system using [daily routine], [stress levels], [sleep schedule], and [energy patterns]. Identify 5–7 small but high-impact habits that support hormonal balance and fat loss. Ensure these habits are easy to integrate into an existing routine without causing overwhelm. Focus on consistency, triggers, and ease of execution rather than motivation. Structure the system so that it builds momentum over time and improves adherence.', 'Create a 7-day habit tracking sheet.', 'Build hormonal consistency', 'Action plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet3', '6d8e1984e7b4cd6371c86833bcbb385bcfd3b6fca4cbfe6ea29bf936c38ebe12',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fb62a498408f4e0c', 'fat_loss-hormonal-fat-loss-optimization-hormonal-sleep-recovery-system', 'Hormonal Sleep Recovery System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '16', 'Act as a hormonal recovery expert. Design a sleep optimization system for a client using [sleep duration], [bedtime routine], [screen exposure], [stress levels], and [wake time]. Identify sleep disruptions affecting hormonal balance and fat loss, such as poor sleep quality, late-night stimulation, or irregular schedules. Provide a structured system including pre-sleep routines, light exposure control, and recovery-enhancing habits that are realistic for a busy lifestyle. Focus on improving deep sleep and consistency rather than perfection. Ensure the system is easy to follow daily without overwhelm.', 'Add a 7-day sleep improvement checklist.', 'Improve hormonal recovery', 'Plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet3', 'fbfa5c102e3da9687afa9433d284e5f53e7feb50c78fce3dc8de31e53e4fc74a',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d01f53d2077c4e5a', 'fat_loss-hormonal-fat-loss-optimization-hormonal-routine-optimization', 'Hormonal Routine Optimization', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '17', 'Act as a high-performance health coach. Create a full-day routine that supports hormonal balance using [wake time], [work schedule], [energy fluctuations], and [stress levels]. Integrate nutrition timing, movement, stress management, and recovery into a cohesive daily flow. Ensure the routine is practical, time-efficient, and easy to follow consistently. Focus on building structure without rigidity. The system should help improve fat loss while enhancing productivity and overall well-being.', 'Create a simplified version for busy days.', 'Optimize daily routine', 'Action plan',
  'PDF', '45–60 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet3', '89d45ba2ad28b2e327835dbed13ae2829e2d845ca91e24680a2692f9062c146c',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ed4c45aa4c0e4ce4', 'fat_loss-hormonal-fat-loss-optimization-hormonal-consistency-recovery-plan', 'Hormonal Consistency Recovery Plan', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '18', 'Act as a transformation coach. Design a recovery system for a client who has fallen off track due to [stress], [travel], [routine disruption], or [fatigue]. Focus on restoring hormonal balance and fat loss momentum within 48–72 hours using simple, structured actions. Include nutrition resets, sleep correction, hydration, and low-intensity movement strategies. Avoid extreme measures and focus on quick recovery without guilt. Ensure the system feels achievable and motivating.', 'Add a 3-day reset checklist.', 'Restore balance quickly', 'Strategy',
  'PDF', '45–60 mins', '5', 'Contextual',
  '₹3K–₹10K', '', 'Sheet3', '4cebfc5f5aa48d5a2c1c63e4565c7186982d9977f1a2ba1d9044de18cbde74ad',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b90e073a40bc4e73', 'fat_loss-hormonal-fat-loss-optimization-hormonal-fat-loss-acceleration', 'Hormonal Fat Loss Acceleration', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '19', 'Act as an advanced hormonal fat loss expert. Create a short-term fat loss acceleration strategy using [timeline], [current hormonal condition], [stress levels], and [lifestyle constraints]. Focus on optimizing hormone-supportive nutrition, improving recovery, and increasing activity strategically. Avoid aggressive or unsustainable methods. Ensure the system is safe, practical, and aligned with long-term fat loss goals. Include safeguards to prevent burnout or hormonal disruption.', 'Add safety guidelines and warning signs.', 'Accelerate fat loss safely', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹5K–₹15K', '', 'Sheet3', '3380c828a67ca68e342ad6b7e5215f33de440b3dbe2cc2a2b2de542de2b77167',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3a62c918016640a3', 'fat_loss-hormonal-fat-loss-optimization-complete-hormonal-fat-loss-blueprint', 'Complete Hormonal Fat Loss Blueprint', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Hormonal Fat Loss Optimization', 'pro',
  '20', 'Act as a premium transformation expert. Design a complete hormonal fat loss blueprint using [symptoms], [lifestyle], [diet pattern], [stress], and [sleep]. Combine nutrition, activity, behavioral, and recovery strategies into a single structured system. Prioritize actions based on impact and create a clear execution roadmap. Ensure the blueprint is comprehensive yet easy to follow. Focus on sustainability, clarity, and long-term success. The output should feel premium and client-ready.', 'Break into step-by-step implementation phases.', 'Full hormonal transformation', 'Blueprint',
  'PDF', '90–120 mins', '5', 'Contextual',
  '₹8K–₹25K', '', 'Sheet3', 'fe20cc08069370e5825b00d1b83e12c70fca4ce11dac1ab93e110d5c763cef9d',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9459c10c2f2e4de9', 'fat_loss-personalized-fat-loss-strategy-builder-complete-fat-loss-strategy-build', 'Complete Fat Loss Strategy Builder', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'free',
  '1', 'Act as a premium fat loss consultant. Create a fully personalized fat loss strategy using [age], [gender], [weight], [height], [goal], [lifestyle], [diet preference], and [time constraints]. Combine nutrition, activity, sleep, and behavioral strategies into a single structured plan. Ensure the system is practical, easy to follow, and sustainable for long-term results. Avoid generic advice and tailor recommendations precisely to the inputs. The output should feel premium, structured, and ready for immediate implementation.', 'Break into weekly execution plan.', 'Build complete strategy', 'Strategy',
  'PDF', '90–120 mins', '5', 'Contextual',
  '₹8K–₹25K', '', 'Sheet4', 'e8912d35cab044997c8fd23efd8f9366aebc3652b22cf51512e146e869c27f6d',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_09619d87fba04e8a', 'fat_loss-personalized-fat-loss-strategy-builder-client-intake-to-strategy-conver', 'Client Intake to Strategy Conversion', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'free',
  '2', 'Act as a transformation coach. Convert raw client intake data using [questionnaire responses], [goals], [challenges], and [lifestyle] into a clear fat loss strategy. Identify key focus areas and structure them into an actionable plan. Ensure clarity and prioritization without overwhelming the client. Focus on translating information into execution.', 'Highlight top 3 priorities.', 'Convert data to plan', 'Action plan',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹5K–₹15K', '', 'Sheet4', '18b5a3d5d4ff846ddb0f608dd83fb2c02b1505da692d306970b3b2914782aec1',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f3f6e707f579488a', 'fat_loss-personalized-fat-loss-strategy-builder-goal-based-fat-loss-planning', 'Goal-Based Fat Loss Planning', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'starter',
  '3', 'Act as a strategic fat loss expert. Design a plan based on [goal weight], [timeline], [current status], and [constraints]. Break the goal into realistic phases with milestones. Ensure the plan is achievable and motivating. Avoid unrealistic timelines. Focus on structured progress.', 'Add milestone tracker.', 'Structure goals', 'Strategy',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet4', '2d84d54af44e23ee1b81e41f6e8d75d31bbc9e1f2212f9d0caa5e5ca461e185c',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1c82a07e10e34eb6', 'fat_loss-personalized-fat-loss-strategy-builder-lifestyle-aligned-fat-loss-syste', 'Lifestyle-Aligned Fat Loss System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'starter',
  '4', 'Act as a lifestyle nutrition expert. Create a fat loss system aligned with [work schedule], [family responsibilities], [stress levels], and [daily routine]. Ensure the plan fits seamlessly into real life without disruption. Focus on sustainability and ease of execution.', 'Add daily routine version.', 'Improve adherence', 'Strategy',
  'PDF', '60–90 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet4', '348eefc425b1df74cd188754ed3ced5acd969d2da0b967806dccb6d1d114f174',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_574afcfdda9742ca', 'fat_loss-personalized-fat-loss-strategy-builder-constraint-based-planning', 'Constraint-Based Planning', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '5', 'Act as a problem-solving expert. Create a fat loss strategy using constraints like [time limitation], [food access], [budget], and [schedule]. Turn limitations into workable solutions. Ensure practicality and adaptability. Avoid idealistic plans.', 'Add backup options.', 'Solve constraints', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹4K–₹12K', '', 'Sheet4', '446cd388ba41d76993ac4eb7eadf736084833ca6cf4e18829a2d73749f5cf631',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4c13378bb7614961', 'fat_loss-personalized-fat-loss-strategy-builder-personalized-weekly-plan-generat', 'Personalized Weekly Plan Generator', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '6', 'Act as a fat loss coach. Create a weekly fat loss plan using [goal], [schedule], [diet preference], and [activity level]. Include meals, workouts, and habits in a simple, structured format. Ensure the plan is realistic and easy to follow consistently without overwhelm. Focus on clarity and execution rather than complexity.', 'Convert into daily checklist.', 'Build weekly execution', 'Action plan',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹3K–₹10K', '', 'Sheet4', '8001f9206b9e5f049ae6535783db6c94cb724a6ddf57f7640bf18e21a9fcb586',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3199970e8e4a4885', 'fat_loss-personalized-fat-loss-strategy-builder-fat-loss-roadmap-creator', 'Fat Loss Roadmap Creator', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '7', 'Act as a strategic expert. Create a fat loss roadmap using [goal], [timeline], and [current status]. Break the journey into phases with clear milestones. Ensure expectations are realistic and motivating. Focus on long-term success rather than quick fixes.', 'Add visual timeline.', 'Structure journey', 'Strategy',
  'PDF', '45–60 mins', '5', 'One-time',
  '₹4K–₹12K', '', 'Sheet4', '60c8e2f7bcc43039a31935e3800dd9e3e4f0554455f25bc250c0786258dbad5b',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c02998ab4f684f2f', 'fat_loss-personalized-fat-loss-strategy-builder-custom-meal-strategy-builder', 'Custom Meal Strategy Builder', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '8', 'Act as a nutritionist. Design a flexible meal strategy using [diet type], [calorie target], and [food preference]. Focus on simplicity, variety, and sustainability. Avoid rigid meal plans and emphasize repeatable patterns.', 'Add 3 meal templates.', 'Simplify nutrition', 'Strategy',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹3K–₹10K', '', 'Sheet4', 'df016332bea1e98c2ff6c296d63bc63ed613ab8d4febb186b404051f9b59a2da',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f136235995ae434a', 'fat_loss-personalized-fat-loss-strategy-builder-personalized-habit-framework', 'Personalized Habit Framework', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '9', 'Act as a behavior expert. Build a habit system using [routine], [stress], and [goals]. Identify 5 key habits that support fat loss and are easy to implement daily. Focus on consistency and ease.', 'Add habit tracker.', 'Build habits', 'Action plan',
  'PDF', '30–45 mins', '5', 'Daily',
  '₹2K–₹8K', '', 'Sheet4', '88aad5a6a54f938b2921c4eb4e564dbf5388f547bba693e40ef736c61e7485e6',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d75b30b061564ab4', 'fat_loss-personalized-fat-loss-strategy-builder-adaptive-strategy-planner', 'Adaptive Strategy Planner', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '10', 'Act as a fat loss strategist. Create an adaptive system using [progress], [challenges], and [lifestyle]. Allow flexibility and adjustments based on results. Focus on sustainability and long-term adherence.', 'Add weekly review system.', 'Dynamic planning', 'Strategy',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹4K–₹12K', '', 'Sheet4', '75c2ae14afc3ef863af6551c954b9b6974bc0534ec15facd26d54ccea077aabd',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5e342b314539405b', 'fat_loss-personalized-fat-loss-strategy-builder-personalized-strategy-refinement', 'Personalized Strategy Refinement', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '16', 'Act as a premium fat loss consultant. Refine an existing fat loss plan using [current plan], [progress], [challenges], and [lifestyle constraints]. Identify what is working and what needs improvement. Simplify the plan by removing unnecessary complexity and strengthening high-impact actions. Ensure the refined strategy is easier to follow, more aligned with the user’s routine, and sustainable long term. Focus on improving adherence and clarity rather than adding more elements. Structure the output so it feels upgraded, actionable, and immediately usable.', 'Highlight top 3 improvements and expected impact.', 'Improve existing plans', 'Strategy',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet4', '6e9eb0e6ff5f81fb40654b730ac3493501f93fd5b3d3b89b49d1bde40387111d',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0792e0b9d1e6465e', 'fat_loss-personalized-fat-loss-strategy-builder-multi-scenario-strategy-builder', 'Multi-Scenario Strategy Builder', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '17', 'Act as an advanced fat loss strategist. Create a flexible fat loss system that adapts to different real-life scenarios using [work schedule], [travel frequency], [social events], and [routine variability]. Design multiple versions of the plan (ideal day, busy day, travel day, social day). Ensure each version maintains fat loss consistency while being realistic. Focus on adaptability and removing the “all-or-nothing” mindset. The output should help users stay on track regardless of changing circumstances.', 'Add quick-switch decision rules.', 'Build adaptable system', 'Strategy',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹6K–₹18K', '', 'Sheet4', '5c86bfdcab221a17e24e18e35524ea9c7bcfa616210578d1cc43e4833c15f8ee',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_66a907b5c3174084', 'fat_loss-personalized-fat-loss-strategy-builder-personalized-feedback-engine', 'Personalized Feedback Engine', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '18', 'Act as a transformation coach. Create a feedback-based fat loss system using [weekly progress], [weight changes], [energy levels], and [habit adherence]. Design a simple framework that helps adjust nutrition, activity, and habits based on results. Ensure the system is easy to use weekly without confusion. Focus on building self-awareness and continuous improvement. Avoid complex tracking systems and prioritize clarity.', 'Create weekly review template.', 'Enable self-adjustment', 'System',
  'PDF/CSV', '60 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet4', '54072136fd0d35a36e9e12fdab182ce9d54a653d6c6a99f06ec9d9dcf49e1152',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cf16f991933d45e9', 'fat_loss-personalized-fat-loss-strategy-builder-high-adherence-strategy-builder', 'High-Adherence Strategy Builder', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '19', 'Act as a behavior-focused fat loss expert. Design a strategy optimized for adherence using [past failures], [preferences], [routine], and [motivation level]. Identify why previous plans failed and build a system that removes friction. Focus on simplicity, flexibility, and enjoyment while maintaining fat loss effectiveness. Ensure the strategy feels achievable and reduces dropout risk.', 'Add adherence score tracker.', 'Improve long-term success', 'Strategy',
  'PDF', '60–90 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet4', '2ee9844528e7f2181db2abc34a00d87531e9d9e98cd9846eb1d90109bb4859bd',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9d20bab0d0c747cd', 'fat_loss-personalized-fat-loss-strategy-builder-complete-personalized-fat-loss-s', 'Complete Personalized Fat Loss System', 'fat_loss', 'Fat Loss & Metabolic Transformation', 'Personalized Fat Loss Strategy Builder', 'pro',
  '20', 'Act as a premium transformation expert. Build a complete personalized fat loss system using [user profile], [goals], [lifestyle], [constraints], and [history]. Combine nutrition, activity, habits, recovery, and adaptability into a single structured framework. Prioritize actions based on impact and sequence them logically. Ensure the system is comprehensive yet simple to follow. The output should feel like a premium, client-ready blueprint that can be implemented immediately and scaled into a product.', 'Break into 4-phase execution plan.', 'Build full system', 'Blueprint',
  'PDF', '90–120 mins', '5', 'Contextual',
  '₹8K–₹25k', '', 'Sheet4', 'e3153ecd3bee4f4a0fbdd51705f021df1247da33a43e8d930240a7f85f824a3a',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_25854f510b994d17', 'sales-instagram-dm-conversion-soft-selling-dm-conversation-starter', 'DM Conversation Starter', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'free',
  '1', 'Act as a high-converting Instagram DM strategist. Create a natural, non-salesy conversation starter for a lead who has [engaged with content], [liked posts], or [responded to a story]. The goal is to initiate a conversation that feels genuine and curiosity-driven rather than transactional. Avoid direct selling. Use empathy, relatability, and open-ended questions to encourage response. Ensure the tone is friendly, personalized, and aligned with a premium brand. The message should feel like a helpful check-in rather than a pitch.', 'Create 3 variations for different audience types.', 'Start conversations', 'Message',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Client Conversion & Sales Engin', '37d069ffe0340b3d0d6df852d0c605502633e5c0a8c9da4a6cbda08868f682b8',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_39eedaa6f66a41e9', 'sales-instagram-dm-conversion-soft-selling-lead-qualification-dm-flow', 'Lead Qualification DM Flow', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'free',
  '2', 'Act as a sales expert. Design a DM flow to qualify a lead using [goal], [current struggles], [urgency], and [budget awareness]. Structure questions in a conversational way without sounding interrogative. The goal is to understand the lead deeply while building trust. Ensure the flow feels natural and not scripted. Focus on uncovering pain points and readiness to take action.', 'Add 5 qualifying questions.', 'Qualify leads', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', '012ab4e98abd8346283f03e156d03df2c2c35f12fb0487e486f421a631ef5fa6',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ac27a7ff2d7f445e', 'sales-instagram-dm-conversion-soft-selling-pain-point-extraction-prompt', 'Pain Point Extraction Prompt', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '3', 'Act as a consultation expert. Create a DM sequence that helps uncover a lead’s real pain points using [initial response], [surface problem], and [context]. Ask layered questions that go deeper into emotional and practical struggles. Ensure the tone is empathetic and supportive. Avoid overwhelming the lead. The goal is to make the lead feel understood while revealing their core problem.', 'Add follow-up probing questions.', 'Identify pain points', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', 'cf5e758a900c69164fcac79cb1890c88e76f255bca8d1da6e516d06c8f8b6ab4',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8e509d97bd3e4b85', 'sales-instagram-dm-conversion-soft-selling-soft-offer-transition', 'Soft Offer Transition', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '4', 'Act as a conversion strategist. Create a smooth transition from conversation to offer using [lead pain], [conversation context], and [solution]. Ensure the shift feels natural and not pushy. Position the offer as a logical next step rather than a sale. Maintain trust and authority. Focus on helping, not selling.', 'Add 2 tone variations (soft vs assertive).', 'Move to offer', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹20K', '', 'Client Conversion & Sales Engin', '0465782c27f26f52eee0930006241411fc45619b30386404a00a762f85f5c7b3',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f29eb4cb48cf4eaa', 'sales-instagram-dm-conversion-soft-selling-consultation-booking-close', 'Consultation Booking Close', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '5', 'Act as a high-ticket closer. Create a DM message that converts a warm lead into a booked consultation using [pain points], [urgency], and [desired outcome]. Ensure the message reinforces value, builds trust, and creates urgency without pressure. Keep it clear and confident.', 'Add urgency version.', 'Close consultations', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Client Conversion & Sales Engin', 'e15b99cf687a64600b7d04578a2e3b8a4a7dd571ac0b3a7f6ca39893246d674d',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7a46052a46284f9d', 'sales-instagram-dm-conversion-soft-selling-objection-handling-dm', 'Objection Handling DM', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '6', 'Act as a high-ticket sales expert. Create a DM response to handle objections using [objection type], [client concern], and [context]. Common objections may include price, time, doubt, or past failures. Ensure the response is empathetic, non-defensive, and value-driven. Address the concern while reinforcing trust and positioning the offer as a solution. Avoid being pushy or overly persuasive. Focus on clarity and confidence.', 'Create 3 objection-specific variations.', 'Overcome objections', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Client Conversion & Sales Engin', '480176dee98e8729b63cb044b7949c331af9059a68aa8133a9ee8110cde96e3c',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b356d2b2dca445f0', 'sales-instagram-dm-conversion-soft-selling-lead-nurturing-sequence', 'Lead Nurturing Sequence', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '7', 'Act as a relationship-building expert. Create a DM nurturing sequence for a lead who is interested but not ready to buy using [lead status], [interest level], and [pain points]. The goal is to build trust over time without forcing a sale. Include 3–5 touchpoints that provide value, insights, or small wins. Keep the tone supportive and engaging. Ensure the sequence maintains connection while gradually increasing readiness to convert.', 'Add timing gaps between messages.', 'Nurture leads', 'Sequence',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', '2c887141c519a6f3dd8e6c8d7c756cf0721dce2cac2976230de2b775a3ca4fdf',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_57738d820ba9474e', 'sales-instagram-dm-conversion-soft-selling-follow-up-re-engagement-dm', 'Follow-Up Re-Engagement DM', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '8', 'Act as a conversion strategist. Create a follow-up DM for a lead who has gone cold using [last interaction], [time gap], and [previous interest]. Re-engage the conversation without sounding desperate or salesy. Use curiosity, value, or relevance to restart engagement. Ensure the tone feels natural and personalized.', 'Add 2 alternative angles.', 'Re-engage leads', 'Message',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', '1856188846cb51674919232d688b959a41bb9b3d074ee64704b75b12b11b57fb',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3e073c1b94374e93', 'sales-instagram-dm-conversion-soft-selling-authority-building-response', 'Authority-Building Response', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '9', 'Act as a premium expert. Create a DM response that positions authority when a lead asks a question using [question], [context], and [goal]. Provide a helpful answer while subtly showcasing expertise. Avoid over-explaining. Keep it concise, clear, and valuable.', 'Add CTA version.', 'Build authority', 'Message',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', 'cb5cf5a57c254b3439ffb209a1434f311c079631901b6576e531df42a631683e',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0957aa8738c84e31', 'sales-instagram-dm-conversion-soft-selling-urgency-without-pressure-script', 'Urgency Without Pressure Script', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '10', 'Act as a high-ticket closer. Create a DM that introduces urgency using [offer], [deadline], and [context] without being pushy. Ensure the message feels respectful and empowering rather than forceful. Focus on helping the lead make a decision.', 'Add scarcity-based version.', 'Increase conversions', 'Script',
  'TXT', '30–45 mins', '5', 'Contextual',
  '₹8K–₹25K', '', 'Client Conversion & Sales Engin', 'dcd0ee1a0c03fa51765c566b72629331a5ccc7e5676fccaa9e9d1cc764439c9b',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_dc8c9ac268ae4c62', 'sales-instagram-dm-conversion-soft-selling-emotional-connection-dm', 'Emotional Connection DM', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '11', 'Act as a relationship-driven sales expert. Create a DM that builds emotional connection using [lead situation], [pain points], and [context]. Acknowledge their struggle genuinely and reflect understanding without sounding scripted. Use empathetic language that makes the lead feel heard and supported. Avoid selling directly. The goal is to deepen trust and create a safe space for conversation. Ensure the tone is warm, human, and aligned with a premium brand voice.', 'Add a question to deepen engagement.', 'Build emotional trust', 'Message',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', '37678b7c3495ba00fd7d00b231f39813935914964f54d76e2f24b98550998ef0',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_64c73552de3b4973', 'sales-instagram-dm-conversion-soft-selling-story-based-selling-dm', 'Story-Based Selling DM', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '12', 'Act as a storytelling sales expert. Create a DM using a short relatable story based on [client transformation], [problem], and [result]. Use storytelling to indirectly position your service as the solution. Ensure the story is concise, authentic, and relevant to the lead’s situation. Avoid exaggeration. End with a soft invitation to continue the conversation.', 'Add shorter version.', 'Influence through storytelling', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹20K', '', 'Client Conversion & Sales Engin', '81a4a7ca533d3eba1087637b8a652f5f79bd33f50fedf31440f165e81e5d016e',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d3b61160e9434155', 'sales-instagram-dm-conversion-soft-selling-belief-shifting-dm', 'Belief-Shifting DM', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '13', 'Act as a mindset coach. Create a DM that challenges limiting beliefs using [lead belief], [past failures], and [goal]. Gently reframe their thinking without invalidating their experience. Provide a new perspective that increases openness to change. Ensure the tone is supportive, not confrontational.', 'Add example-based version.', 'Shift mindset', 'Message',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', '5e0d17a5118fe27fa92bb17fc10c46b7ad8b69bf9bc79cf98d11ee17e7ae8535',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_75d3b391a2524159', 'sales-instagram-dm-conversion-soft-selling-value-drop-dm', 'Value Drop DM', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '14', 'Act as an expert coach. Create a DM that delivers high value using [lead problem] and [context]. Provide one actionable insight or quick win that the lead can apply immediately. Avoid overwhelming with too much information. The goal is to build trust and demonstrate expertise.', 'Add CTA version.', 'Build trust via value', 'Message',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Client Conversion & Sales Engin', '7ad062f8bb9e981993c1c00620fbd09f7b127cb162c6375604228635f7340cde',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_591c8861e464440a', 'sales-instagram-dm-conversion-soft-selling-soft-close-conversation', 'Soft Close Conversation', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '15', 'Act as a high-ticket sales expert. Create a DM that gently moves the conversation toward closing using [lead readiness], [pain points], and [goal]. Position your offer as the next logical step. Keep the tone supportive and confident. Avoid pressure. Ensure clarity in the next step (call, consultation, etc.).', 'Add urgency version.', 'Move toward close', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Client Conversion & Sales Engin', '0fa89669fbf17debde88fbb9451b24031740f1c0343ae4a6283d6561aa98a2e4',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_02e94e7af53d4eb7', 'sales-instagram-dm-conversion-soft-selling-multi-touch-conversion-flow', 'Multi-Touch Conversion Flow', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '16', 'Act as a high-ticket DM strategist. Create a multi-message DM flow to convert a warm lead using [lead stage], [pain points], and [goal]. Structure 3–5 messages that gradually move from rapport to clarity to conversion. Ensure each message builds on the previous one without sounding repetitive or pushy. Maintain a conversational tone while subtly increasing urgency and value perception. Focus on guiding the lead toward a decision rather than forcing it.', 'Break into message sequence format.', 'Build structured conversion', 'Sequence',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Client Conversion & Sales Engin', 'c1b207ba82473253f1c4fd602b7b4b19eae40fb4af64de2d987425eb32fb1cd0',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_15f9fa681e064588', 'sales-instagram-dm-conversion-soft-selling-voice-note-conversion-script', 'Voice Note Conversion Script', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '17', 'Act as a premium sales expert. Create a voice note script for DM conversion using [lead context], [pain points], and [desired outcome]. Ensure the tone feels personal, confident, and supportive. Structure the message to acknowledge the lead’s situation, provide insight, and guide them toward the next step. Keep it concise but impactful. Avoid sounding rehearsed or salesy.', 'Add shorter 30-sec version.', 'Increase personal connection', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Client Conversion & Sales Engin', '18a3cebc42ffc44582454b2104e46f89b8821cd0f1e49f3e21ce4866d8b55f97',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2cb1da364cb64dac', 'sales-instagram-dm-conversion-soft-selling-high-intent-lead-conversion', 'High-Intent Lead Conversion', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '18', 'Act as a conversion expert. Create a DM script for a highly interested lead using [signals of intent], [pain], and [goal]. Move quickly toward closing while maintaining trust. Reinforce the value of your service and remove hesitation. Ensure clarity in the next step and make the decision easy. Avoid over-explaining.', 'Add direct close version.', 'Convert hot leads', 'Script',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Client Conversion & Sales Engin', '670afd8921ff5633391da4b2c06ac8d49664b8d7d1a6ab43b3d013b19c254d6a',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8a9ed00b585c4eef', 'sales-instagram-dm-conversion-soft-selling-dm-funnel-system', 'DM Funnel System', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '19', 'Act as a funnel strategist. Design a DM funnel using [lead source], [entry point], and [offer]. Map the journey from first message to conversion. Include stages such as engagement, qualification, nurturing, and closing. Ensure the system is repeatable and scalable. Focus on clarity and simplicity.', 'Add flowchart version.', 'Build DM funnel', 'System',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Client Conversion & Sales Engin', 'c84dd36f9a195393b444e93ef6f3029b610dcb2d083299f8b3301c0f9c08ffc1',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f85e1d27e0fb4b52', 'sales-instagram-dm-conversion-soft-selling-premium-closing-script', 'Premium Closing Script', 'sales', 'Client Conversion & Sales Engine', 'Instagram DM Conversion (Soft Selling)', 'pro',
  '20', 'Act as a high-ticket closer. Create a premium closing DM using [lead pain], [desired transformation], and [urgency]. Reinforce value, reduce hesitation, and guide the lead toward a confident decision. Keep the tone respectful and empowering. Avoid pressure tactics. Ensure the message feels like a natural conclusion to the conversation.', 'Add objection-proof version.', 'Close high-ticket clients', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹50K', '', 'Client Conversion & Sales Engin', '8ab1388e9138e1f79b34c048d5d3956d69521caa2fd336b359a519a285da6fc0',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6ce44c57b71b48f0', 'sales-story-based-selling-frameworks-transformation-story-framework', 'Transformation Story Framework', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'free',
  '1', 'Act as a storytelling expert for fitness brands. Create a compelling transformation story using [client starting point], [struggles], [turning point], and [results]. Structure the story to emotionally connect with the audience while subtly positioning your service as the solution. Keep it authentic and relatable, avoiding exaggeration. End with a soft call-to-action that encourages engagement or DM replies. Ensure the story builds trust and credibility while inspiring action.', 'Create a shorter caption version.', 'Build trust & attract leads', 'Story',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '9da9ba8e3cc364b4dc2a04a1188ddfeac49a2879f9f6e15be0538a0824e0ff4a',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fdd14ae414b64453', 'sales-story-based-selling-frameworks-relatable-pain-story', 'Relatable Pain Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'free',
  '2', 'Act as a content strategist. Create a story highlighting a common pain point using [target audience], [daily struggle], and [emotional trigger]. Make the audience feel understood by reflecting their exact thoughts and frustrations. Avoid solutions initially—focus on deep relatability. End with a hook that invites interaction.', 'Add CTA for replies.', 'Increase engagement', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet5', '39a1b604a0356383538c084459305e6e2f87fcc1b6c3f73089f2cede35a42fe6',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c992b564300f4b1f', 'sales-story-based-selling-frameworks-authority-story', 'Authority Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '3', 'Act as a personal brand expert. Create a story that positions authority using [experience], [client wins], and [insights]. Share a lesson or realization that showcases expertise without bragging. Keep it educational yet engaging.', 'Add carousel version.', 'Build authority', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', 'c50b02f07bb1a97abe72702b733a67cbfa2f492aacb5e674b6ce40e519b25262',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5ead5c6cc3f6447c', 'sales-story-based-selling-frameworks-failure-to-success-story', 'Failure to Success Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '4', 'Act as a storytelling expert. Create a story about failure turning into success using [past struggle], [mistakes], and [learning]. Make it vulnerable and relatable. Show growth and transformation. End with a subtle lesson.', 'Add emotional hook.', 'Build connection', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet5', 'c21f6d7c0c40f93c8eaab2c72781fb34f32dc40dd37dadaab33e375c962e66df',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_05b43c6f4e89447b', 'sales-story-based-selling-frameworks-micro-story-for-reels', 'Micro Story for Reels', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '5', 'Act as a short-form content expert. Create a 15–30 sec story using [topic], [pain point], and [lesson]. Keep it concise, engaging, and impactful. Include a hook, core message, and takeaway.', 'Add hook variations.', 'Create viral content', 'Script',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹3K–₹10K', '', 'Sheet5', '890dbd248af2c6191ce3f52c22cf8538fa10a8537bc632a2322dd9fa359e4730',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4db22f91c83142de', 'sales-story-based-selling-frameworks-emotional-hook-story', 'Emotional Hook Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '6', 'Act as a storytelling expert. Create a high-impact emotional hook story using [pain point], [audience], and [real-life situation]. Start with a powerful first line that grabs attention instantly. Build emotional depth by describing the struggle vividly so the audience feels seen and understood. Avoid solutions initially and focus on connection. End with a subtle shift toward possibility. Ensure the tone is relatable and authentic.', 'Add 3 hook variations.', 'Capture attention', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet5', '7b69be6e2bd85f3cde57621297019f54bac8b10dcbdc6b502b9da3b71ba33d64',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_677310052ba0453d', 'sales-story-based-selling-frameworks-before-after-story-framework', 'Before-After Story Framework', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '7', 'Act as a transformation storyteller. Create a before-after story using [client situation], [struggles], [actions taken], and [results]. Clearly contrast the “before” pain with the “after” transformation. Make it relatable and realistic, not exaggerated. Show the journey briefly. End with a soft CTA inviting engagement or inquiry.', 'Add carousel breakdown.', 'Show transformation', 'Story',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', 'df3dcf93548e360d21eb40d6f357d66629525c1e77c9f19fefce6867b0e887e9',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2400ce5d80d446d9', 'sales-story-based-selling-frameworks-objection-handling-story', 'Objection-Handling Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '8', 'Act as a conversion strategist. Create a story that addresses a common objection using [objection], [real example], and [outcome]. Show how someone had the same concern and overcame it. Reduce resistance without directly selling. Ensure the story builds trust and shifts perception.', 'Add CTA version.', 'Handle objections', 'Story',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '37845b21a52bec4c7d892b0b78b774afdb9bf056961491aa335ac162d0e64999',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9b0c6debe3cb4071', 'sales-story-based-selling-frameworks-identity-based-story', 'Identity-Based Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '9', 'Act as a brand expert. Create a story that aligns with audience identity using [target audience], [beliefs], and [aspirations]. Make the reader feel “this is me.” Reinforce identity and subtly position your solution as aligned with who they want to become.', 'Add tagline version.', 'Build identity connection', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '32c8d0acda4bd9857dbcc466986acfb6c3397b76b55db730fb7c949967e6a975',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_30fd44079ab5410d', 'sales-story-based-selling-frameworks-story-to-dm-bridge', 'Story-to-DM Bridge', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '10', 'Act as a conversion expert. Create a story that naturally leads to DM conversations using [pain], [insight], and [offer]. Ensure the transition feels organic and not salesy. End with a clear but soft CTA encouraging replies or messages.', 'Add 2 CTA variations.', 'Drive DMs', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹20K', '', 'Sheet5', '813c81ecefa4f1e636bdc2d6acebbd166b45d97c5ce29e1459fe4e45e0f8e8a0',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_17529952b0514e32', 'sales-story-based-selling-frameworks-authority-through-experience-story', 'Authority Through Experience Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '11', 'Act as a personal brand storyteller. Create a story that builds authority using [years of experience], [client results], and [key insight]. Share a real lesson or pattern observed from working with multiple clients. Avoid bragging—focus on insight and value. Position yourself as someone who understands the problem deeply. End with a subtle CTA or reflection.', 'Add caption version.', 'Build authority', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '95ade674c1532d7f83c1a551fcd4711e4ad39ec27d7c2e5f318805cc603124f5',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0872645e8e3d45c4', 'sales-story-based-selling-frameworks-myth-busting-story', 'Myth-Busting Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '12', 'Act as a content strategist. Create a story that challenges a common myth using [myth], [real example], and [truth]. Begin with a bold statement that contradicts common belief. Use storytelling to explain why the myth is misleading. Keep it simple and relatable. End with a takeaway.', 'Add hook variations.', 'Break false beliefs', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet5', 'e67de7475a869772af61230d930fdf943230bb120095cc3e99db6b1681160f8e',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_44a0a21448b740e8', 'sales-story-based-selling-frameworks-client-journey-breakdown-story', 'Client Journey Breakdown Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '13', 'Act as a storytelling expert. Create a story that breaks down a client journey using [starting point], [challenges], [key changes], and [results]. Highlight the process and small wins rather than just the outcome. Make it relatable and educational.', 'Add carousel version.', 'Show process', 'Story',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '3d87d396cd28a8c190cb42e1c0af781d0f169d9abe24239d4510fd66f1a3a367',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_640d14f3b7434db6', 'sales-story-based-selling-frameworks-internal-struggle-story', 'Internal Struggle Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '14', 'Act as a psychological storyteller. Create a story focusing on internal struggles using [fear], [doubt], and [past experience]. Make the audience feel emotionally connected by reflecting their inner thoughts. Avoid solutions initially. End with a small shift in perspective.', 'Add CTA version.', 'Deep emotional connection', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '373a4049d419bec7d5ec236e2191b902badbac93d22a913972064fb35de692fd',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bc9af1b3989547a4', 'sales-story-based-selling-frameworks-subtle-offer-story', 'Subtle Offer Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '15', 'Act as a conversion strategist. Create a story that subtly introduces your offer using [context], [problem], and [solution]. Ensure the offer feels like a natural extension of the story rather than a pitch. Keep it soft and trust-based.', 'Add stronger CTA version.', 'Soft selling', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹20K', '', 'Sheet5', '898735d0c7ea2e765c85b95b55a0aa0560c5c0b1d5eae8a9e310067c07455d9c',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0d9249b0eb5f4467', 'sales-story-based-selling-frameworks-multi-part-story-series', 'Multi-Part Story Series', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '16', 'Act as a storytelling strategist. Create a 3–5 part story series using [topic], [client journey], and [lesson]. Each part should build curiosity and encourage the audience to return for the next. Structure the narrative progressively from problem to transformation. Ensure each part ends with a micro-hook or open loop. Keep the tone engaging and conversational while maintaining clarity. The goal is to increase retention and deepen audience connection over multiple posts.', 'Break into daily posting plan.', 'Increase engagement & retention', 'Series',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Sheet5', '68a0294f48f8e5f6dd124d4331aa040c7a8f0db03f90d9ddc1f603eb969d5e5c',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c46a47685e04423a', 'sales-story-based-selling-frameworks-high-trust-vulnerability-story', 'High-Trust Vulnerability Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '17', 'Act as a personal brand expert. Create a vulnerable story using [personal struggle], [mistake], and [lesson learned]. Share openly without oversharing. Focus on relatability and authenticity. Ensure the story builds trust and emotional connection while subtly reinforcing your credibility. End with a reflection or insight that resonates deeply.', 'Add shorter version for reels.', 'Build deep trust', 'Story',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet5', '5a2f1c397511f8434fd1b841d35b6eacede97f11ef6f1c0cd4e9be2a991188b2',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ea4f784c924e4822', 'sales-story-based-selling-frameworks-faq-based-story', 'FAQ-Based Story', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '18', 'Act as a content strategist. Convert a frequently asked question using [question], [common confusion], and [answer] into a story format. Use storytelling to make the explanation engaging rather than informational. Include a relatable example or scenario. Keep it simple and easy to understand.', 'Add carousel format.', 'Educate through story', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet5', '012bbcf9ae963259304b155a80cd06d721ce275590997ec33ece576ccaedef2e',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_13686aef651949fc', 'sales-story-based-selling-frameworks-contrast-story-wrong-vs-right', 'Contrast Story (Wrong vs Right)', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '19', 'Act as a storytelling expert. Create a contrast story showing “wrong vs right approach” using [common mistake], [correct method], and [result]. Highlight the consequences of the wrong approach and benefits of the right one. Keep it relatable and practical. Avoid sounding preachy.', 'Add visual breakdown.', 'Educate & persuade', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet5', '3dc231b81adaf33b53b300230705cb0a31a4a4a21e17e35f06f7aef5dc8f3153',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6af4431860d3484e', 'sales-story-based-selling-frameworks-conversion-story-blueprint', 'Conversion Story Blueprint', 'sales', 'Client Conversion & Sales Engine', 'Story-Based Selling Frameworks', 'pro',
  '20', 'Act as a conversion strategist. Create a complete story blueprint using [pain], [journey], [solution], and [offer]. Structure it to move from attention to emotion to trust to action. Ensure the story naturally leads to conversion without sounding salesy. Keep it structured, clear, and adaptable for multiple formats.', 'Convert into reusable template.', 'Drive conversions', 'Blueprint',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet5', 'cc2b6721ce09fe2f496926f161a704bbe3f9c1c42a4cd8f85a718e5be032da02',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d7dc1cf903c44623', 'sales-lead-magnet-creation-guides-meal-plans-trackers-premium-fat-loss-guide-gen', 'Premium Fat Loss Guide Generator', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'free',
  '1', 'Act as a premium nutritionist and content strategist. Create a high-value fat loss guide using [target audience], [primary goal], and [top struggles]. Structure the guide into clear sections: problem awareness, common mistakes, key fat loss principles, and actionable steps. Include practical examples, quick wins, and easy-to-follow frameworks suitable for busy individuals. Ensure the tone is authoritative yet simple, avoiding overly technical language. The guide should feel premium, visually scannable, and immediately useful. Conclude with a soft call-to-action that encourages readers to take the next step, such as messaging or booking a consultation.', 'Add table of contents and section headings.', 'Create premium lead magnet', 'Guide',
  'PDF', '90–120 mins', '5', 'One-time',
  '₹10K–₹30K', '', 'Sheet6', '5513d1e8a3b3055bed33b4f8ad1d3c70f51edd19101163a7cb80f44c0d70958e',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_605b5db9cb7e42b5', 'sales-lead-magnet-creation-guides-meal-plans-trackers-7-day-structured-meal-plan', '7-Day Structured Meal Plan Lead Magnet', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'free',
  '2', 'Act as a professional nutritionist. Create a 7-day fat loss meal plan using [diet preference], [calorie range], [food restrictions], and [lifestyle]. Include breakfast, lunch, dinner, and snack options for each day. Ensure meals are simple, quick to prepare, and suitable for busy individuals. Focus on balanced nutrition, satiety, and sustainability rather than extreme dieting. Use common, easily available ingredients. Structure the output in a clean, organized format that is ready for PDF download. Avoid complexity and prioritize usability.', 'Add grocery list and prep tips.', 'Generate leads via meal plans', 'Plan',
  'PDF', '60–90 mins', '5', 'One-time',
  '₹8K–₹25K', '', 'Sheet6', '650c3723b2ef950b9b7087af116cffe088bf568fcf077a823e454caf2071f580',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8d48fd089aab4a00', 'sales-lead-magnet-creation-guides-meal-plans-trackers-habit-tracker-lead-magnet-', 'Habit Tracker Lead Magnet Builder', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '3', 'Act as a behavior change expert. Create a structured fat loss habit tracker using [target habits], [duration], and [goal]. Include 5–7 key habits such as hydration, steps, protein intake, sleep, and consistency. Design the tracker in a simple, visually clear format that encourages daily usage. Include checkboxes or scoring systems for tracking progress. Add a short instruction section explaining how to use it effectively. Ensure the tracker feels motivating and easy to integrate into daily routines. Avoid clutter and unnecessary complexity.', 'Add weekly review and scoring system.', 'Improve adherence & retention', 'Tracker',
  'PDF/JPEG', '45–60 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet6', 'f4b0687b77abc429121b1c58f625ba4ecbc6b86b59057adb722524d6f6d10b20',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9df3a5942907423b', 'sales-lead-magnet-creation-guides-meal-plans-trackers-single-problem-mini-guide-', 'Single-Problem Mini Guide Generator', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '4', 'Act as a content strategist. Create a focused mini guide solving one key problem using [specific problem], [target audience], and [desired outcome]. Start by clearly defining the problem and why it occurs. Provide 3–5 actionable steps that can be implemented immediately. Include examples, quick tips, and common mistakes to avoid. Ensure the guide is concise yet valuable and easy to consume within 5–10 minutes. Maintain clarity and practicality. End with a soft CTA encouraging readers to take further action.', 'Add CTA section and headline options.', 'Solve niche problem', 'Guide',
  'PDF', '45–60 mins', '5', 'One-time',
  '₹5K–₹15K', '', 'Sheet6', '9330269bd84d246d8c2755c66a7d6b19d9990465048b4fe5cb3dce2fb0423444',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_db6cd42966d3443b', 'sales-lead-magnet-creation-guides-meal-plans-trackers-daily-fat-loss-checklist-g', 'Daily Fat Loss Checklist Generator', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '5', 'Act as a productivity and nutrition expert. Create a daily fat loss checklist using [goal], [routine], and [common challenges]. Include 6–10 essential daily actions such as hydration, meal structure, movement, and sleep habits. Ensure the checklist is simple, actionable, and easy to follow without overwhelm. Use clear language and keep it visually structured for quick use. Focus on high-impact behaviors that drive results consistently. Make it suitable for printing or mobile use.', 'Add printable and mobile-friendly version.', 'Simplify execution', 'Checklist',
  'PDF', '30–45 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet6', '9afe9fd5034eef966cf6343d4f40672ae0d2d2495650786e63d8c62e56c23266',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a6065c48c1004fa2', 'sales-lead-magnet-creation-guides-meal-plans-trackers-fat-loss-assessment-quiz-g', 'Fat Loss Assessment Quiz Generator', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '6', 'Act as a lead generation strategist. Create a fat loss assessment quiz using [target audience], [common problems], and [goal]. Include 8–12 questions that help identify the user’s biggest fat loss blockers such as diet inconsistency, low activity, poor sleep, or stress. Ensure questions are simple, engaging, and easy to answer. Add scoring logic and categorize users into 3–4 types based on their responses. Provide a short personalized insight for each category. The quiz should feel insightful and valuable, encouraging users to engage further or share their results.', 'Add scoring system and result explanations.', 'Generate interactive leads', 'Quiz',
  'PDF/Google Form', '90–120 mins', '5', 'One-time',
  '₹10K–₹30K', '', 'Sheet6', '69b8604cad7986561794f2db7bbbcbec588c7aade2b1069572cb69a398fc4e78',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bd7e0f475d90449c', 'sales-lead-magnet-creation-guides-meal-plans-trackers-personalized-plan-snapshot', 'Personalized Plan Snapshot Lead Magnet', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '7', 'Act as a premium nutrition strategist. Create a “personalized fat loss snapshot” using [user inputs], [goal], and [lifestyle]. Provide a short but impactful overview including calorie guidance, meal structure, key habits, and activity recommendations. Ensure the output feels personalized and valuable while still scalable. Keep it concise and visually structured. The goal is to give users a taste of personalization while encouraging them to seek a full plan.', 'Add CTA for full consultation.', 'Showcase personalization', 'Snapshot',
  'PDF', '60–90 mins', '5', 'Contextual',
  '₹8K–₹25K', '', 'Sheet6', 'c48e859972aa14325d3bde346229d3f18fd62f3c789d6a29fcf0cb4e6a0871c1',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2c42290bed824907', 'sales-lead-magnet-creation-guides-meal-plans-trackers-5-day-fat-loss-challenge-g', '5-Day Fat Loss Challenge Generator', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '8', 'Act as a challenge creator. Design a 5-day fat loss challenge using [target audience], [goal], and [constraints]. Each day should include simple tasks, habits, and mini goals that are easy to complete. Ensure the challenge builds momentum and gives quick wins. Include daily instructions, tips, and motivation. Keep it simple and engaging. The challenge should create a sense of progress and encourage users to continue beyond 5 days.', 'Add daily email/message sequence.', 'Engage & convert leads', 'Challenge',
  'PDF', '90–120 mins', '5', 'One-time',
  '₹10K–₹30K', '', 'Sheet6', '8cb08b64d6a7362f597dfb61afda20cc03c391e6b69005aedb7513e99a4967cf',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c7e4625aa6634428', 'sales-lead-magnet-creation-guides-meal-plans-trackers-fat-loss-mistake-guide', 'Fat Loss Mistake Guide', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '9', 'Act as a content strategist. Create a guide highlighting the top 7–10 fat loss mistakes using [audience], [common errors], and [context]. Explain each mistake clearly and provide a simple correction or solution. Ensure the tone is educational and relatable, not judgmental. Keep it practical and easy to understand. Focus on helping users identify their own mistakes. End with a soft CTA for further help.', 'Add visual summary page.', 'Educate & attract leads', 'Guide',
  'PDF', '60–90 mins', '5', 'One-time',
  '₹6K–₹18K', '', 'Sheet6', '6f7e4381a986618c84544677b95a5bcba75c012dd79a9b81d38642eb791369e8',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_76a09e28afe74bae', 'sales-lead-magnet-creation-guides-meal-plans-trackers-fat-loss-quick-wins-guide', 'Fat Loss Quick Wins Guide', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '10', 'Act as a nutrition expert. Create a guide with 10 quick fat loss wins using [audience], [lifestyle], and [goal]. Each tip should be simple, actionable, and easy to implement immediately. Focus on small changes that deliver noticeable results. Avoid complex or time-consuming strategies. Ensure clarity and usability. The guide should feel practical and motivating.', 'Add checklist version.', 'Provide instant value', 'Guide',
  'PDF', '45–60 mins', '5', 'One-time',
  '₹5K–₹15K', '', 'Sheet6', '166d85593678c49fe070d0191183f2b4868643e26097254a450483be69d0f95e',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2b78d1921f544179', 'sales-lead-magnet-creation-guides-meal-plans-trackers-busy-professional-fat-loss', 'Busy Professional Fat Loss Guide', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '11', 'Act as a nutrition expert for busy professionals. Create a fat loss guide using [work schedule], [time constraints], [eating habits], and [goal]. Focus on practical strategies such as quick meals, eating out control, and time-efficient routines. Structure the guide into problem, solution, and actionable steps. Ensure it is realistic for someone with limited time and high stress. Avoid complex plans. Make it simple, structured, and easy to follow. End with a soft CTA encouraging deeper engagement.', 'Add quick-start checklist.', 'Target niche audience', 'Guide',
  'PDF', '60–90 mins', '5', 'One-time',
  '₹8K–₹25K', '', 'Sheet6', 'f62fb1d9a3460410cbcfa77aaebdab56e7426cdb0ba7fe1e36f3e32ea3b19ab3',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e259b62ad4bb4641', 'sales-lead-magnet-creation-guides-meal-plans-trackers-eating-out-survival-guide', 'Eating Out Survival Guide', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '12', 'Act as a fat loss coach. Create a guide for managing fat loss while eating out using [frequency], [cuisine type], and [lifestyle]. Include menu selection rules, portion control strategies, and common mistakes to avoid. Ensure the guide is practical and applicable across different scenarios. Focus on real-life usability rather than theory. Keep it simple and actionable.', 'Add restaurant examples.', 'Solve real-world problem', 'Guide',
  'PDF', '60–90 mins', '5', 'One-time',
  '₹6K–₹18K', '', 'Sheet6', 'aa12ecaa32c0e1e9065e6d93e1ed1b5f988f55ec3fc37e4b93b234e86e6865cd',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_65f396f4e5804f55', 'sales-lead-magnet-creation-guides-meal-plans-trackers-personalized-habit-bluepri', 'Personalized Habit Blueprint', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '13', 'Act as a behavior change expert. Create a personalized habit blueprint using [routine], [stress], [sleep], and [goal]. Identify 5–7 high-impact habits and structure them into a simple daily system. Ensure the blueprint is easy to follow and builds consistency over time. Avoid overwhelming the user. Focus on sustainability and ease.', 'Add habit tracker.', 'Build long-term habits', 'Blueprint',
  'PDF', '60–90 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet6', '60a644b0940dcd8fae6463e81049c205dec19fa938ee08ef91d60dba393669a9',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1c645e4db2914a56', 'sales-lead-magnet-creation-guides-meal-plans-trackers-fat-loss-progress-tracker', 'Fat Loss Progress Tracker', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '14', 'Act as a tracking system designer. Create a fat loss progress tracker using [metrics], [goal], and [timeline]. Include weight, measurements, habits, and consistency tracking. Ensure the tracker is simple, clear, and easy to use weekly. Include a short instruction section. Focus on usability and clarity.', 'Add scoring system.', 'Improve tracking', 'Tracker',
  'PDF/CSV', '45–60 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet6', '992f3905835322034364ae6a7c53a92c505f70c9436a4b2462dcd473a207cdfd',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e883d6b77fc4449f', 'sales-lead-magnet-creation-guides-meal-plans-trackers-personalized-fat-loss-star', 'Personalized Fat Loss Starter Kit', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '15', 'Act as a premium content strategist. Create a starter kit using [audience], [goal], and [common struggles]. Combine a short guide, checklist, and basic plan into one cohesive resource. Ensure it feels valuable yet easy to consume. Focus on clarity and usability. The goal is to give users a strong starting point while encouraging further engagement.', 'Add upgrade CTA.', 'Bundle lead magnet', 'Kit',
  'PDF', '90–120 mins', '5', 'One-time',
  '₹10K–₹30K', '', 'Sheet6', 'd74f958a75313593635fbb19ce2dce723b835e68e33011b3529af9b33bbf7af2',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2c578b4eb3bd43f9', 'sales-lead-magnet-creation-guides-meal-plans-trackers-10-day-structured-fat-loss', '10-Day Structured Fat Loss Program', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '16', 'Act as a premium nutrition coach. Create a 10-day structured fat loss program using [target audience], [goal], [diet preference], and [lifestyle]. Include daily meal guidance, simple activity targets, and habit-based actions. Ensure the program is easy to follow and delivers quick wins without overwhelming the user. Focus on building momentum and consistency. Keep instructions clear and practical. Structure it in a way that is suitable for a downloadable PDF lead magnet. End with a soft CTA encouraging continuation into a full program.', 'Add daily checklist format.', 'Create high-value lead magnet', 'Program',
  'PDF', '90–120 mins', '5', 'One-time',
  '₹10K–₹30K', '', 'Sheet6', 'fb2eef1eb52382d49c6d403c72cc36716c0464d7243e1d1e9444d737c6ab3a19',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_47879e5a16584292', 'sales-lead-magnet-creation-guides-meal-plans-trackers-fat-loss-self-audit-worksh', 'Fat Loss Self-Audit Worksheet', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '17', 'Act as a fat loss expert. Create a self-audit worksheet using [diet habits], [activity level], [sleep], and [stress]. Include guided questions that help users identify gaps in their current routine. Ensure questions are simple, reflective, and actionable. Add a scoring or evaluation system to help users understand where they stand. Keep it clear and structured.', 'Add scoring interpretation.', 'Increase self-awareness', 'Worksheet',
  'PDF', '45–60 mins', '5', 'Contextual',
  '₹5K–₹15K', '', 'Sheet6', 'dcf5409d42e3d6b3c019fb905c9bd31c709f3678573448dbc68bd566a5ecca92',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c0520d983d354e5a', 'sales-lead-magnet-creation-guides-meal-plans-trackers-weekly-fat-loss-planner', 'Weekly Fat Loss Planner', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '18', 'Act as a productivity and nutrition expert. Create a weekly fat loss planner using [schedule], [goal], and [routine]. Include sections for meal planning, activity tracking, habit tracking, and reflection. Ensure the planner is simple, clean, and easy to use weekly. Focus on usability and clarity. Avoid clutter. The planner should help users stay consistent without feeling overwhelmed.', 'Add printable version.', 'Improve consistency', 'Planner',
  'PDF', '45–60 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Sheet6', '03a14ec585b6040f40b7665a5f45c6ab73f0e7876bdf2bf63304fd87c818b443',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_76191d1679aa4fd4', 'sales-lead-magnet-creation-guides-meal-plans-trackers-fat-loss-faq-guide', 'Fat Loss FAQ Guide', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '19', 'Act as a content strategist. Create a FAQ guide using [common questions], [audience], and [context]. Answer 8–12 frequently asked questions related to fat loss in a clear, simple, and practical way. Avoid overly technical explanations. Ensure answers provide value and clarity. Structure the guide in an easy-to-read format suitable for lead magnets. End with a soft CTA encouraging further engagement.', 'Add visual summary page.', 'Address common doubts', 'Guide',
  'PDF', '60–90 mins', '5', 'One-time',
  '₹6K–₹18K', '', 'Sheet6', '07de86744c36d55650229bbebcb26f58f9383d2c0177b4189f110642b5c2f3ab',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8d032bea3cb44d42', 'sales-lead-magnet-creation-guides-meal-plans-trackers-lead-magnet-funnel-bundle', 'Lead Magnet Funnel Bundle', 'sales', 'Client Conversion & Sales Engine', 'Lead Magnet Creation (Guides + Meal Plans + Trackers)', 'pro',
  '20', 'Act as a funnel strategist. Create a bundled lead magnet using [audience], [goal], and [offer]. Combine multiple elements such as a mini guide, checklist, and tracker into one cohesive package. Ensure each component adds value and supports the overall goal. Structure the bundle so it feels premium and highly useful. Keep it simple and easy to consume. Include a strong but soft CTA guiding users to the next step.', 'Add funnel flow (download → DM → consult).', 'Build full funnel asset', 'Bundle',
  'PDF', '90–120 mins', '5', 'One-time',
  '₹15K–₹50K', '', 'Sheet6', '1709918b4312fb5cade07dc28b95bbd4a8383915352c018387fc09f6bc56bbd7',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_99e1b3da8ed84f88', 'sales-consultation-closing-scripts-consultation-opening-script', 'Consultation Opening Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'free',
  '1', 'Act as a high-ticket sales expert. Create a consultation opening script using [client name], [context], and [goal]. The opening should build rapport, set expectations, and establish authority without sounding scripted. Ensure the tone is warm, confident, and professional. Include a brief agenda so the client knows what to expect. Focus on making the client feel comfortable and open to sharing. Avoid jumping into selling too early.', 'Add 2 tone variations (friendly vs premium).', 'Start call effectively', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet7', '195b28d0200b686e60c2e08946720a028956787c1dc29904b7b7c0e4d6f255e0',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8250b364071b4ec4', 'sales-consultation-closing-scripts-deep-discovery-question-framework', 'Deep Discovery Question Framework', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'free',
  '2', 'Act as a consultation expert. Create a set of deep discovery questions using [client goals], [current struggles], [past attempts], and [lifestyle]. Structure the questions to uncover emotional, behavioral, and practical pain points. Ensure the flow feels conversational, not interrogative. Focus on making the client reflect and open up. Avoid surface-level questions.', 'Add follow-up probing questions.', 'Understand client deeply', 'Framework',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet7', '800c36fdb5bf510bf5560a3608285a1a99f51d7973a1aec4563741ffb685c60d',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2bf4c1dc629440d4', 'sales-consultation-closing-scripts-pain-amplification-script', 'Pain Amplification Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '3', 'Act as a high-ticket closer. Create a script that helps the client recognize the seriousness of their problem using [pain points], [impact], and [future consequences]. Ensure the tone is empathetic, not fear-based. Help the client connect their current situation with long-term outcomes. Avoid manipulation. Focus on clarity and awareness.', 'Add softer version.', 'Increase urgency', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet7', '38960c960ee27aa0cdce4139805b9699f6edd30d52ad00e74a5d381689f96a60',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1f63cf8932a94098', 'sales-consultation-closing-scripts-solution-presentation-script', 'Solution Presentation Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '4', 'Act as a premium consultant. Create a script to present your solution using [client pain], [desired outcome], and [your program]. Position your service as a tailored solution, not a generic plan. Focus on benefits and transformation rather than features. Ensure clarity and confidence. Avoid over-explaining.', 'Add simplified version.', 'Present offer', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹50K', '', 'Sheet7', '025e8b66d56d80890a2488efad1029a30920d0ccae8c3504dc2a4e9aa36dc507',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_de1529cd96624148', 'sales-consultation-closing-scripts-consultation-flow-structure', 'Consultation Flow Structure', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '5', 'Act as a sales strategist. Design a complete consultation flow using [time duration], [steps], and [goal]. Include opening, discovery, problem awareness, solution, and closing stages. Ensure the flow feels natural and not rigid. Focus on guiding the conversation smoothly toward a decision.', 'Add time breakdown.', 'Structure calls', 'Framework',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet7', '57ea1975155eb7162652458680f576dfcbe004ab269876d60dfb76c03a343760',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c5826858ef7f41ad', 'sales-consultation-closing-scripts-price-objection-handling-script', 'Price Objection Handling Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '6', 'Act as a high-ticket sales expert. Create a consultation response for a client who says the price is too high using [client concern], [financial hesitation], and [goal]. Acknowledge their concern respectfully and reframe the value of the program in terms of long-term results, time saved, and avoided mistakes. Avoid being defensive or pushy. Focus on helping the client see the investment perspective. Keep the tone calm, confident, and supportive.', 'Add budget-friendly reframe version.', 'Handle price objection', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹50K', '', 'Sheet7', '1a678896d3f961a99b75c737ffffef6b3b966eaf7f3b2489238ca01e5a901677',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_21564d7916794a71', 'sales-consultation-closing-scripts-need-time-to-think-objection', '“Need Time to Think” Objection', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '7', 'Act as a closing expert. Create a response for a client who says they need time to think using [context], [interest level], and [hesitation]. Acknowledge their need while gently exploring what they are unsure about. Help clarify doubts without pressure. Keep the tone respectful and non-confrontational. Focus on guiding them toward clarity rather than forcing a decision.', 'Add follow-up question version.', 'Reduce delay', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet7', '11eba710d83f5657754f64ff5b077a880fd8a595e3af99af5dcf697d543d5bf4',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3c3a795e69264e7b', 'sales-consultation-closing-scripts-past-failure-objection-script', 'Past Failure Objection Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '8', 'Act as a transformation coach. Create a response for a client who says “I’ve tried everything before” using [past attempts], [failures], and [current mindset]. Validate their experience and differentiate your approach clearly. Show why this time can be different without overpromising. Focus on rebuilding trust and confidence.', 'Add example-based version.', 'Build trust', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet7', '718f0ff961bed09aa00cca7e5b8d2589a60e25b3618b6121919a9f8442541b31',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8d8c4d90e3e0409d', 'sales-consultation-closing-scripts-time-constraint-objection-script', 'Time Constraint Objection Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '9', 'Act as a practical coach. Create a response for a client who says they don’t have time using [schedule], [responsibilities], and [goal]. Reframe fat loss as something that can fit into their routine with the right system. Provide simple examples of how your program adapts to busy lifestyles. Keep it realistic and solution-oriented.', 'Add 2 real-life examples.', 'Overcome time objection', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet7', '309d2ffa1ea2206e96f0e13c8ef3ba36f1be547cb0094097cfc194318758ecd4',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_649466757dce4084', 'sales-consultation-closing-scripts-decision-confidence-builder', 'Decision Confidence Builder', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '10', 'Act as a high-ticket closer. Create a script that helps the client feel confident about their decision using [client goals], [pain], and [desired outcome]. Reinforce clarity, remove doubts, and summarize the value of the program. Ensure the tone is empowering and supportive. Avoid pressure tactics. Help the client feel they are making the right decision for themselves.', 'Add summary version.', 'Build decision clarity', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹50K', '', 'Sheet7', '5f33e815b8c8e626dacaa641183eae92d80e767c0ea973cb805ad6d29998ae7f',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5fc614181a734715', 'sales-consultation-closing-scripts-future-vision-closing-script', 'Future Vision Closing Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '11', 'Act as a high-ticket sales expert. Create a script that helps the client visualize their future using [desired outcome], [timeline], and [current struggle]. Guide them to imagine how their life would improve after achieving their goals. Contrast this with their current situation to highlight the gap. Ensure the tone is inspiring, not manipulative. Focus on clarity and possibility. Help the client emotionally connect with the outcome.', 'Add shorter version.', 'Create emotional pull', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹50K', '', 'Sheet7', '8c79b34ac937e523c647ab1c70953a537ab6c6e0fdc22c7d0acc0b492713e9e9',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_50ff604a74944d97', 'sales-consultation-closing-scripts-cost-of-inaction-script', 'Cost of Inaction Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '12', 'Act as a consultation expert. Create a script that helps the client understand the cost of not taking action using [current problem], [long-term impact], and [missed opportunities]. Highlight what they stand to lose if they delay. Ensure the tone is empathetic and not fear-based. Focus on awareness and clarity rather than pressure.', 'Add softer version.', 'Increase urgency', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet7', '6739b6c646bbc271b2a0e1969d0e0f4d24a54b3340499a156c38560da601b0ee',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ecfad8cbb0d84bfe', 'sales-consultation-closing-scripts-personalization-reinforcement-script', 'Personalization Reinforcement Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '13', 'Act as a premium consultant. Create a script that reinforces how the program is tailored to the client using [their data], [pain points], and [goals]. Highlight specific elements that match their needs. Avoid generic explanations. Ensure the client feels understood and valued.', 'Add bullet summary.', 'Build perceived value', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet7', 'c240f3f1d66122f14e3b49396ee3035f3608583233233c517f11369486bdf249',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f297e4ce9c454b9c', 'sales-consultation-closing-scripts-emotional-validation-script', 'Emotional Validation Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '14', 'Act as a transformation coach. Create a script that validates the client’s struggles using [pain], [experience], and [frustration]. Acknowledge their efforts and challenges genuinely. Make them feel heard and supported. Avoid over-sympathizing. Balance empathy with forward movement.', 'Add transition to solution.', 'Build trust', 'Script',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet7', '34b27609c76c0e03d01027873acfe0d6e4785072dad70d092f176537343cfdb5',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ebeb968b9ac04cae', 'sales-consultation-closing-scripts-soft-close-with-clarity', 'Soft Close with Clarity', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '15', 'Act as a high-ticket closer. Create a script that brings clarity to the decision using [goal], [solution], and [next step]. Summarize the conversation and clearly present the next action (call, payment, onboarding). Ensure the tone is confident and supportive. Avoid pressure. Focus on making the decision easy and clear.', 'Add urgency version.', 'Move to close', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet7', '68935aee89838e86adcf14f3416bc7bd8ac76d7b60065310564266c5b0a2d234',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1a84d8f4892343ca', 'sales-consultation-closing-scripts-scarcity-based-closing-script', 'Scarcity-Based Closing Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '16', 'Act as a high-ticket closer. Create a consultation closing script using [offer], [limited slots], and [deadline]. Introduce scarcity in a genuine and transparent way without sounding manipulative. Emphasize that availability is limited due to quality of service, not artificial urgency. Reinforce the value of the program and encourage timely decision-making. Keep the tone respectful and confident.', 'Add softer scarcity version.', 'Increase urgency', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet7', '84c33a337f218ca6ad60ac5151fb0b30677b882ca6b22fe1f0d37012b5634d24',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e8f285eee1f445ca', 'sales-consultation-closing-scripts-risk-reversal-script', 'Risk Reversal Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '17', 'Act as a premium consultant. Create a script that reduces perceived risk using [client hesitation], [fear], and [offer details]. Introduce elements like guarantees, support systems, or phased commitment if applicable. Ensure the client feels safe and supported in their decision. Avoid overpromising. Focus on building confidence and trust.', 'Add guarantee explanation.', 'Reduce risk', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet7', '2ff1c387b42697aa4ca95388b7fb37f001133ccd6ef3e0013135f2c372a5f76f',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d46b9a67950840a5', 'sales-consultation-closing-scripts-final-objection-sweep-script', 'Final Objection Sweep Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '18', 'Act as a closing expert. Create a script to identify and clear final objections using [conversation context], [client responses], and [remaining doubts]. Ask clear, open-ended questions to uncover hidden concerns. Address them calmly and confidently. Ensure nothing is left unresolved before closing.', 'Add checklist version.', 'Clear final doubts', 'Script',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet7', '0b9c20fd6fbcc18adff73f1b050ac87b299ff0959d1d36efed649eeb3a7e8f34',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_aa839b2820054062', 'sales-consultation-closing-scripts-confident-ask-closing-script', 'Confident Ask Closing Script', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '19', 'Act as a high-ticket closer. Create a script that confidently asks for the decision using [client readiness], [goal], and [offer]. Ensure the ask is clear, direct, and respectful. Avoid hesitation or ambiguity. The tone should reflect confidence in the value being offered. Make the next step simple and obvious.', 'Add softer version.', 'Ask for decision', 'Script',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹25K–₹60K', '', 'Sheet7', '438718faa95b2c3675916e4a1e3b7c8661a4b3f3933cec03e4b475eb072091f7',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_918e4559c6974132', 'sales-consultation-closing-scripts-post-call-follow-up-close', 'Post-Call Follow-Up Close', 'sales', 'Client Conversion & Sales Engine', 'Consultation Closing Scripts', 'pro',
  '20', 'Act as a sales strategist. Create a follow-up message after a consultation using [client summary], [pain points], and [offer]. Reinforce key insights from the call, address any remaining hesitation, and guide the client toward a decision. Ensure the message feels personalized and not generic. Maintain professionalism and clarity.', 'Add reminder version.', 'Convert post-call', 'Message',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹20K-₹50K', '', 'Sheet7', 'd29fc04cb0689c0bb85cdb83714aa40a260d1da8cc801ef682bdc05aca349fcc',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d9396202bb8d43b6', 'content-emotional-storytelling-content-deep-relatability-story', 'Deep Relatability Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'free',
  '1', 'Act as a storytelling expert for a nutrition brand. Create an emotional story using [target audience], [daily struggle], and [internal thoughts]. Describe a typical day or moment that your audience experiences, including their frustrations, confusion, and self-doubt. Make the reader feel “this is exactly me.” Avoid offering solutions initially—focus entirely on emotional connection. Use simple, conversational language. End with a subtle reflection or question that encourages engagement. Ensure authenticity and avoid exaggeration.', 'Add CTA to encourage replies.', 'Build deep relatability', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '9cae0b4b0ce596d791382954782140eda155494e8c97c4dfe135bdd802f01f49',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e020561454a040a2', 'content-emotional-storytelling-content-inner-dialogue-story', 'Inner Dialogue Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'free',
  '2', 'Act as a psychological storyteller. Create a story capturing the inner dialogue of a person struggling with fat loss using [scenario], [thought patterns], and [emotions]. Show conflicting thoughts, guilt, and hesitation. Make it highly relatable and emotionally engaging. Avoid solutions initially. The goal is to make the audience feel understood.', 'Add short reel version.', 'Emotional engagement', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '6ba2e49f26fd957e6b7f9416e29b8fd56256bb14782f634cfa35a9b2b5bec5ba',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c49ffebe68984e29', 'content-emotional-storytelling-content-vulnerability-based-story', 'Vulnerability-Based Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '3', 'Act as a personal brand expert. Create a vulnerable story using [personal struggle], [mistake], and [lesson]. Share openly without oversharing. Focus on relatability and authenticity. Ensure the story builds trust and connection. End with a meaningful takeaway.', 'Add shorter caption version.', 'Build trust', 'Story',
  'TXT', '30–45 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', 'd947865402e3dcac992c63f1dd755c3b5438aa72917040df81c8246d1ca4c70a',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6a049393df884cd7', 'content-emotional-storytelling-content-this-was-me-story', '“This Was Me” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '4', 'Act as a storytelling expert. Create a past-to-present story using [past version of self], [struggles], and [current state]. Highlight the journey and transformation. Make it relatable and honest. Avoid bragging. Focus on connection and inspiration.', 'Add hook variations.', 'Inspire & connect', 'Story',
  'TXT', '30–45 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '64404b0d74bfa6d4147ba6abcc3038581d10e41119851d98f721c04f23d92cae',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b046c2c40b474f60', 'content-emotional-storytelling-content-emotional-hook-story', 'Emotional Hook Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '5', 'Act as a content strategist. Create a story with a strong emotional hook using [pain point], [trigger], and [context]. Start with a powerful first line that grabs attention. Build emotional depth and relatability. Avoid jumping into solutions too quickly. End with a reflective or curiosity-driven line.', 'Add 3 hook options.', 'Capture attention', 'Story',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Content Engine & Personal Brand', '86680cf73686f7b770e8937ee724091f54ed5e778d6318266b3ee3e29c6b6593',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_26267f52f2b54015', 'content-emotional-storytelling-content-nobody-talks-about-this-story', '“Nobody Talks About This” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '6', 'Act as a storytelling expert. Create a story around an overlooked or unspoken struggle using [topic], [audience], and [hidden pain]. Start with a bold statement like “Nobody talks about this…” and reveal a truth your audience silently experiences. Build emotional depth and relatability. Avoid immediate solutions—focus on awareness and connection. End with a reflective question or insight.', 'Add CTA to spark replies.', 'Create curiosity & relatability', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '3bbce5a8b663c2eeaf57e3a7e9caec16c2d11377241e6d8b28530647a9d4f6ba',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3d2a945198c443a2', 'content-emotional-storytelling-content-guilt-frustration-story', 'Guilt & Frustration Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '7', 'Act as a psychological storyteller. Create a story capturing guilt and frustration using [situation], [emotional triggers], and [thought patterns]. Describe how the person feels after failing to follow through on their goals. Make it deeply relatable without judgment. Focus on emotional accuracy.', 'Add short reel version.', 'Build emotional depth', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '18d8cce3a34a8f8d5e6ad870b0bbe072d13d13d898540d0f2c093b5efff72f00',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ddaf1eef16ad4c85', 'content-emotional-storytelling-content-i-know-you-feel-this-story', '“I Know You Feel This” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '8', 'Act as a content strategist. Create a story that directly speaks to the audience using [pain point], [daily scenario], and [emotion]. Use second-person language (“you”) to make it personal. Reflect their exact thoughts and feelings. Avoid offering solutions initially. End with a line that makes them feel understood.', 'Add hook variations.', 'Direct connection', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '1985de4b5931328ecd9a63f21fd1b3138ee058b0aec9ebfb204d0a53f14c2de8',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_13943dd5768f4e46', 'content-emotional-storytelling-content-turning-point-story', 'Turning Point Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '9', 'Act as a storytelling expert. Create a story around a turning point using [moment], [realization], and [shift]. Show how a small realization led to change. Keep it realistic and relatable. Focus on the emotional shift rather than just results.', 'Add CTA version.', 'Inspire action', 'Story',
  'TXT', '30–45 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '0c5417086f5ad38333515500fe568b9080b3eceebdb345b3325fa0801f564ad3',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_33105b9e34b544c8', 'content-emotional-storytelling-content-silent-struggle-story', 'Silent Struggle Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '10', 'Act as a psychological storyteller. Create a story highlighting struggles people don’t openly share using [hidden struggle], [audience], and [context]. Make it deeply empathetic and relatable. Avoid exaggeration. Focus on making the audience feel seen.', 'Add engagement question.', 'Build trust', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', 'c0f3bfe1faf4800ab5efa1096ea6800739dda4af2189b64578f27cc28cafd828',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f0f47e7629d14ddc', 'content-emotional-storytelling-content-identity-reflection-story', 'Identity Reflection Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '11', 'Act as a personal brand storyteller. Create a story that reflects the identity of your audience using [target audience], [beliefs], and [aspirations]. Help them see themselves in the story by describing their mindset, struggles, and goals. Reinforce who they are and who they want to become. Keep it relatable and emotionally engaging. Avoid solutions initially. End with a line that strengthens identity connection.', 'Add tagline version.', 'Build identity connection', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '60438ead08f5ffd09fe183884f193fcb1b2993dcbf4371415d1555977332b77b',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1d84f59195b04712', 'content-emotional-storytelling-content-youre-not-alone-story', '“You’re Not Alone” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '12', 'Act as a psychological storyteller. Create a story that reassures the audience they are not alone using [struggle], [audience], and [emotion]. Normalize their experience and reduce self-blame. Use empathetic language and relatable scenarios. Avoid solutions initially. Focus on emotional validation. End with a comforting or reflective line.', 'Add engagement question.', 'Reduce resistance', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', 'b2d8e5fb39ac635e809a48136acc03428e0c62f8f3499b64d337e2b9576d1b93',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_696acd51e67f4edb', 'content-emotional-storytelling-content-authority-through-pattern-recognition', 'Authority Through Pattern Recognition', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '13', 'Act as an expert coach. Create a story based on patterns you’ve observed using [client experiences], [common mistakes], and [insight]. Show how many people repeat the same mistakes and what they don’t realize. Position yourself as someone who understands deeply. Avoid sounding preachy. Keep it insightful and relatable.', 'Add carousel version.', 'Build authority', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '87982158be94909914a3edaf3edd06f12ea4974190eb4e57f1a5e403963893d3',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a1246e65ba044ae1', 'content-emotional-storytelling-content-what-changed-everything-story', '“What Changed Everything” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '14', 'Act as a storytelling expert. Create a story about a key realization using [moment], [insight], and [impact]. Show how one shift changed outcomes significantly. Keep it simple and relatable. Focus on clarity and impact.', 'Add hook variations.', 'Inspire change', 'Story',
  'TXT', '30–45 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', '71335dd5ad205bff6487d53ecea021ff66cba5aff4a276aec81415842df18712',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_24bd489012744d2e', 'content-emotional-storytelling-content-if-youre-this-person-story', '“If You’re This Person…” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '15', 'Act as a content strategist. Create a story targeting a specific type of person using [persona], [struggle], and [goal]. Make it highly specific so the right audience feels directly spoken to. Use clear and relatable language. Avoid generalization. End with a subtle CTA.', 'Add 2 persona variations.', 'Attract ideal clients', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Content Engine & Personal Brand', '9a70f3aaf8d0fb1279bf6a2ea842dabdf60ad710d47afcc9d4d13fb4a47e5b79',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_85ecee2d0297490d', 'content-emotional-storytelling-content-multi-part-emotional-story-series', 'Multi-Part Emotional Story Series', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '16', 'Act as a storytelling strategist. Create a 3–5 part emotional story series using [topic], [audience], and [journey]. Each part should build curiosity and emotional connection while progressing the narrative. Start with a strong hook and end each part with an open loop that encourages the audience to return for the next part. Keep the tone conversational and relatable. Avoid giving everything away in one part. Focus on building anticipation and emotional investment over time.', 'Break into daily posting plan.', 'Increase retention', 'Series',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Content Engine & Personal Brand', '6598f8308f331935561e3db9175748b754da30a5b279f3ed2a1a3acaa4321d0e',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fc6a5cd972374283', 'content-emotional-storytelling-content-emotional-contrast-story', 'Emotional Contrast Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '17', 'Act as a storytelling expert. Create a story that contrasts two emotional states using [before vs after], [struggle], and [shift]. Highlight the emotional difference clearly so the audience feels the impact. Avoid exaggeration. Focus on relatability and clarity.', 'Add visual breakdown.', 'Show transformation', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', 'f7057a2b31bc06410a80cfcab117da7f63ee6a8bb9451d18b928d30a1d5091d0',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9aaaa90127e24790', 'content-emotional-storytelling-content-i-wish-i-knew-this-earlier-story', '“I Wish I Knew This Earlier” Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '18', 'Act as a personal brand expert. Create a reflective story using [past mistake], [lesson], and [impact]. Share what you wish you had known earlier and how it would have changed outcomes. Keep it honest and relatable. Avoid sounding preachy. Focus on helping others avoid similar mistakes.', 'Add short reel version.', 'Build trust & authority', 'Story',
  'TXT', '30–45 mins', '5', 'Weekly',
  '₹5K–₹15K', '', 'Content Engine & Personal Brand', 'b8a3399ae6482efe080c3b061258d2db5473b7f5183e1e01982cc5813cc49fd2',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_174dfbfa2fd64313', 'content-emotional-storytelling-content-comment-driven-story', 'Comment-Driven Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '19', 'Act as a content strategist. Create a story based on a comment or question using [comment], [context], and [insight]. Turn a simple interaction into a relatable and valuable story. Ensure it feels natural and engaging.', 'Add reply version.', 'Increase engagement', 'Story',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Content Engine & Personal Brand', '7dd3b69c70e725f0f9f7d303f67749de0f5af3c3e91ea364895929aec7688799',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cbd335cd73674958', 'content-emotional-storytelling-content-emotional-to-action-story', 'Emotional-to-Action Story', 'content', 'Content Engine & Personal Brand', 'Emotional Storytelling Content', 'pro',
  '20', 'Act as a conversion strategist. Create a story that moves from emotion to action using [pain], [realization], and [next step]. Start with relatability, build emotional connection, and gradually guide the audience toward taking action. Ensure the transition feels natural and not forced. End with a soft but clear CTA.', 'Add stronger CTA version.', 'Drive conversions', 'Story',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹20K', '', 'Content Engine & Personal Brand', '8dda5e1a0289908cd4ee2dd59d09df8c46be98d423479621176d06cd8d9c94bb',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cb33547cd6fb46a4', 'content-educational-content-authority-value-posts-simple-fat-loss-explanation-po', 'Simple Fat Loss Explanation Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'free',
  '1', 'Act as a nutrition educator. Explain a fat loss concept using [topic], [audience level], and [context]. Break it down into simple, easy-to-understand language. Avoid jargon. Use relatable examples or analogies to improve clarity. Structure the content in a way that is suitable for social media (caption or carousel). Focus on making the audience feel like they learned something valuable quickly. End with a reflective or engaging question.', 'Convert into carousel format.', 'Simplify concepts', 'Post',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', 'ff4d80ea09e98f92559db9c7fcee518c4575890ab7fb1a2943376558709c0032',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c3f4ec4e347c409f', 'content-educational-content-authority-value-posts-myth-vs-fact-content', 'Myth vs Fact Content', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'free',
  '2', 'Act as a content strategist. Create a “myth vs fact” post using [common myth], [truth], and [audience]. Clearly explain why the myth exists and why it is misleading. Provide a simple explanation of the correct approach. Keep it concise and impactful. Ensure the tone is educational, not judgmental.', 'Add 3 more myths.', 'Break misconceptions', 'Post',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', 'df839ffce469838db1e5b703867a9bb7a75985d84e0701dcc815c6541464f736',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_efa44997260f4ba9', 'content-educational-content-authority-value-posts-step-by-step-guide-post', 'Step-by-Step Guide Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '3', 'Act as a coach. Create a step-by-step fat loss guide using [goal], [audience], and [constraints]. Break the process into 3–5 simple steps. Ensure each step is actionable and easy to follow. Avoid overwhelming the reader. Keep it structured and clear.', 'Add checklist version.', 'Provide actionable value', 'Guide',
  'TXT/PDF', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', '896fd1ccebe738eb916fccc450a9629a497a2bd22b12a696091004b0cd230923',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ecb9095c99ea4aba', 'content-educational-content-authority-value-posts-quick-tip-content', 'Quick Tip Content', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '4', 'Act as a content creator. Create 5 quick fat loss tips using [topic], [audience], and [goal]. Ensure each tip is short, practical, and immediately actionable. Avoid generic advice. Focus on high-impact changes.', 'Add reel hooks.', 'Deliver quick value', 'List',
  'TXT', '20–30 mins', '5', 'Daily',
  '₹4K–₹12K', '', 'Sheet8', '2014d7c9a19a49949816644e878efd693dde74d17a8c75d91b948856cd40c14f',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9e8fb5b447e74b6a', 'content-educational-content-authority-value-posts-beginner-friendly-guide', 'Beginner-Friendly Guide', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '5', 'Act as a beginner coach. Create a guide for someone new to fat loss using [audience], [goal], and [confusion points]. Explain fundamentals clearly. Keep it simple and structured. Avoid complexity.', 'Add FAQ section.', 'Help beginners', 'Guide',
  'TXT/PDF', '45–60 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Sheet8', 'c6b7a1730dfb293bae29f4c436cd7faadf65ed233373e1b2243f083d26db5620',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7dc66dc943ee497b', 'content-educational-content-authority-value-posts-deep-dive-educational-post', 'Deep-Dive Educational Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '6', 'Act as a nutrition expert. Create a detailed educational post using [topic], [audience level], and [goal]. Break the topic into 3–4 key sections with clear explanations. Use simple language but provide depth and clarity. Include examples where needed. Ensure the content feels insightful and valuable enough to be saved. Avoid fluff. Focus on delivering clarity and actionable understanding.', 'Convert into carousel format.', 'Build authority', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', '5247b62dbd91cede1ba19b2f018dafc177f3893dbe0cb494a34f08c240ef4851',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_eaa6c7205d7f46b9', 'content-educational-content-authority-value-posts-why-this-happens-breakdown', '“Why This Happens” Breakdown', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '7', 'Act as a coach. Explain why a common problem occurs using [problem], [cause], and [context]. Break down the underlying reasons clearly. Help the audience understand root causes rather than surface-level symptoms. Keep it simple and structured.', 'Add solution section.', 'Educate deeply', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', 'a90592e011e6f3ed543dda767bbae6f12369b19b20a9d247933d348ef60aaada',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_652b51292d104c0a', 'content-educational-content-authority-value-posts-comparison-content-good-vs-bad', 'Comparison Content (Good vs Bad)', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '8', 'Act as a content strategist. Create a comparison post using [wrong approach], [right approach], and [context]. Highlight key differences clearly. Use simple examples. Ensure the audience can immediately understand what to do differently. Avoid judgmental tone.', 'Add visual table format.', 'Clarify decisions', 'Post',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', '6693f7e848bc2be30ab55ccdcb0c25baf43d7e6dc6f5235e17b4f696a245f258',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ecccacfe4d6f4df5', 'content-educational-content-authority-value-posts-do-this-instead-post', '“Do This Instead” Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '9', 'Act as a practical coach. Create a post that replaces common mistakes using [mistake], [better alternative], and [context]. Clearly explain why the alternative works better. Keep it simple and actionable. Focus on behavior change.', 'Add 3 more examples.', 'Drive behavior change', 'Post',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', 'fe88d91b309f771af41b1838baec2288f5ad1cd4c45cd329d1fab03ecfca380e',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_25fc566754ff489b', 'content-educational-content-authority-value-posts-framework-based-content', 'Framework-Based Content', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '10', 'Act as a systems thinker. Create a simple framework using [topic], [steps], and [goal]. Present it in a structured format (3–5 steps or pillars). Ensure clarity and ease of understanding. Make it memorable and repeatable.', 'Convert into visual format.', 'Simplify complex ideas', 'Framework',
  'TXT/PDF', '45–60 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Sheet8', '63bd61f9f8c53cd6dd7837ea172b11cfbbe6f4396705a433e1ed662f899d271f',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5b9803d4c4c045b0', 'content-educational-content-authority-value-posts-contrarian-insight-post', 'Contrarian Insight Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '11', 'Act as a thought leader in nutrition and fat loss. Create a high-impact post that challenges a widely accepted belief using [common belief], [your expert insight], and [context]. Start with a bold, attention-grabbing statement that makes the reader pause and rethink what they believe. Clearly explain why this belief is misleading or incomplete using simple reasoning, real-life examples, or client patterns. Avoid sounding aggressive or dismissive—keep the tone confident, educational, and respectful. Structure the content in a way that builds curiosity and gradually shifts perspective. End with a reflective takeaway or question that encourages engagement and discussion.', 'Add a softer, beginner-friendly version.', 'Challenge beliefs & stand out', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', 'c3eeac489a3e22c375416f3a0b29b217965112a57fc856c675047d58f1fb6b29',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_307b1f6eab534956', 'content-educational-content-authority-value-posts-what-nobody-tells-you-post', '“What Nobody Tells You” Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '12', 'Act as a content strategist for a nutrition brand. Create a post that reveals lesser-known truths using [topic], [target audience], and [hidden insight]. Begin with the phrase “What nobody tells you about…” and highlight a reality that most people overlook. Explain why this truth is important and how it impacts fat loss or health outcomes. Use relatable scenarios or examples to make the content engaging and easy to understand. Avoid exaggeration and keep the tone practical and grounded. Ensure the content provides clarity and feels insightful. End with a takeaway or question that encourages the reader to reflect or engage.', 'Add 3 hook variations for testing.', 'Build curiosity & authority', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', '4465cb59bb79bcdb66a6b4a3b3d4e1a05d536f8ee066eb92abf670b69cacf35b',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e8cfa09ca7744f28', 'content-educational-content-authority-value-posts-pattern-recognition-insight', 'Pattern Recognition Insight', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '13', 'Act as an experienced fat loss coach. Create a post based on patterns you have observed using [client trends], [common mistakes], and [insight]. Explain how many people unknowingly repeat the same mistakes and why these patterns lead to poor results. Use simple language and relatable examples to make the audience recognize themselves in the content. Position yourself as someone who understands deeper behavioral and lifestyle patterns. Avoid sounding critical—focus on awareness and clarity. Structure the post in a way that leads from observation to realization. End with a key insight or reflective question that drives engagement.', 'Add 2 real-life examples.', 'Build authority through insight', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', '3b22758120828ab702b3e6994c342d37e616f6325faf608f591210e53f1a9d30',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_51a44fb37a9b4c63', 'content-educational-content-authority-value-posts-this-is-why-youre-stuck-post', '“This Is Why You’re Stuck” Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '14', 'Act as a fat loss expert. Create a post explaining why someone is stuck in their progress using [common issue], [root cause], and [context]. Break down the problem clearly and show how the root cause is often misunderstood. Use simple explanations and relatable examples to help the audience connect with the message. Avoid blaming or criticizing. Focus on helping the reader understand what is actually happening and why their efforts may not be working. Keep the tone supportive and educational. Structure the content so it moves from problem awareness to clarity. End with a short takeaway that encourages reflection.', 'Add solution-focused follow-up post.', 'Diagnose problems clearly', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', 'ad8232e737a8ecf9cb3f53cb957c04c1037292a7fd651fa77e5f601d7fcae7aa',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0237ae47fcec4154', 'content-educational-content-authority-value-posts-simplified-science-content', 'Simplified Science Content', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '15', 'Act as a nutrition educator. Create a post that explains a scientific concept using [topic], [audience level], and [context]. Break down complex ideas into simple, easy-to-understand explanations using analogies, comparisons, or real-life examples. Avoid technical jargon and focus on clarity. Ensure the audience can understand and apply the concept in their daily life. Structure the content in a logical flow from explanation to application. Keep the tone educational yet engaging. End with a practical takeaway or question that reinforces learning.', 'Add visual analogy version.', 'Educate deeply', 'Post',
  'TXT', '60 mins', '5', 'Weekly',
  '₹6K–₹18K', '', 'Sheet8', 'a78746330a71e9da996847d2f352681924fe92ac4a26cbe4b09167efd5f25d1b',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_814607613ed6418b', 'content-educational-content-authority-value-posts-advanced-breakdown-post', 'Advanced Breakdown Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '16', 'Act as an expert nutrition educator. Create an advanced educational post using [topic], [audience level], and [goal]. Break the topic into 3–5 clear sections and explain each in simple language while maintaining depth. Use examples or scenarios to improve understanding. Ensure the content feels valuable enough to be saved and shared. Avoid unnecessary complexity and focus on clarity. Structure the post so it flows logically from concept to application. End with a takeaway that reinforces learning and encourages engagement.', 'Convert into carousel format.', 'Build deep authority', 'Post',
  'TXT', '60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', '80bf0a9cfa93de1b2ae0ca0af46bd5120c92848048dbc3fbbb541900056dc344',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c6219397d2a14226', 'content-educational-content-authority-value-posts-stop-doing-this-post', '“Stop Doing This” Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '17', 'Act as a practical fat loss coach. Create a post highlighting common mistakes using [mistake], [context], and [audience]. Clearly explain why the behavior is ineffective or harmful. Provide a simple alternative that the audience can implement immediately. Ensure the tone is supportive, not judgmental. Focus on clarity and behavior change. Structure the content so the reader easily understands what to stop and what to start doing instead. End with a practical takeaway or action step.', 'Add 3 more examples.', 'Correct mistakes', 'Post',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet8', 'fd7e5967efc9e7107b715ef649ac57dae69139b07795112e26e43f672d17329e',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6bff9ef5835b4d7f', 'content-educational-content-authority-value-posts-do-this-daily-framework', '“Do This Daily” Framework', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '18', 'Act as a systems-based coach. Create a daily framework using [goal], [routine], and [constraints]. Outline 4–6 key actions that, when done consistently, lead to fat loss results. Ensure each action is simple, realistic, and easy to integrate into daily life. Avoid overcomplication. Focus on repeatability and consistency. Structure the framework clearly so it can be followed easily. End with a reminder emphasizing consistency over perfection.', 'Add checklist version.', 'Build habits', 'Framework',
  'TXT/PDF', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet8', '1a3e1cbb31c747ba7c8e8b678c67204f02ee1f22d6f4c94d5c16207107a08d8d',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8c2d57c85c474f78', 'content-educational-content-authority-value-posts-case-study-educational-post', 'Case Study Educational Post', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '19', 'Act as a storytelling educator. Create a case study post using [client situation], [problem], [approach], and [result]. Explain the process clearly, focusing on what was done and why. Highlight key lessons that the audience can apply. Keep it realistic and relatable. Avoid exaggeration. Structure the post so it educates while demonstrating expertise. End with a takeaway or reflection that reinforces learning.', 'Add shorter version.', 'Show proof + educate', 'Post',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹8K–₹25K', '', 'Sheet8', 'a4fdb50751a9113d61d79e44d5279db0bd40594a2689f0eb5ef0c989a5240883',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6bde5f245054438f', 'content-educational-content-authority-value-posts-educational-series-blueprint', 'Educational Series Blueprint', 'content', 'Content Engine & Personal Brand', 'Educational Content (Authority + Value Posts)', 'pro',
  '20', 'Act as a content strategist. Create a 5–7 part educational content series using [topic], [audience], and [goal]. Break the topic into logical subtopics and outline each post. Ensure the series builds from basic understanding to deeper insights. Keep each part clear and actionable. The series should feel structured, engaging, and easy to follow. End with guidance on how to transition the series into a conversion opportunity (DM, lead magnet, or consultation).', 'Add posting schedule.', 'Build content system', 'Blueprint',
  'PDF', '90–120 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet8', '55b1fbcfaf12f7ceb194ee9ba5c6c025fe5cbc1d2a05519d6b72518724081e26',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5c800b8983c846b6', 'content-content-lead-conversion-hooks-ctas-viral-content-high-converting-hook-ge', 'High-Converting Hook Generator', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'free',
  '1', 'Act as a viral content strategist specializing in health and fat loss. Generate 10 high-converting hooks using [topic], [target audience], and [primary pain point]. Ensure each hook is concise, attention-grabbing, and designed to stop scrolling within the first 2 seconds. Use a mix of formats such as bold statements, curiosity-driven questions, contrarian views, and relatable scenarios. Avoid generic or overused phrases. Each hook should trigger curiosity or emotional response, making the audience want to read or watch more. Ensure the hooks are highly relevant to the audience’s struggles and aspirations.', 'Add 3 contrarian hook variations.', 'Capture attention instantly', 'List',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet9', '55e0d62b41960b4dfaec2d89e3ac360b67a38cef7a089cbf604ade0209d6738f',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ffbe65a712e34d4c', 'content-content-lead-conversion-hooks-ctas-viral-content-scroll-stopping-caption', 'Scroll-Stopping Caption Builder', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'free',
  '2', 'Act as a high-performing content strategist. Create a scroll-stopping caption using [topic], [pain point], and [key insight]. Start with a strong hook that immediately grabs attention. Follow with relatable storytelling or clear explanation that keeps the reader engaged. Break the content into short, readable sections for social media. Ensure the tone is conversational, engaging, and easy to understand. Avoid long paragraphs and unnecessary complexity. End with a clear takeaway and a soft call-to-action that encourages interaction such as commenting or sharing.', 'Add stronger CTA version.', 'Increase engagement & retention', 'Caption',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet9', '68847f21cb44982fae5eca2c412fd20d12538bb10fe13263a6031cd06c34069a',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9a109fbd71ca4c19', 'content-content-lead-conversion-hooks-ctas-viral-content-high-converting-cta-gen', 'High-Converting CTA Generator', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '3', 'Act as a conversion strategist. Create 8–10 high-converting calls-to-action using [goal], [content type], and [audience]. Include a mix of soft CTAs (comment, save, share) and strong CTAs (DM, link click, consultation). Ensure each CTA feels natural, relevant, and aligned with the content. Avoid pushy or aggressive language. Focus on clarity and ease of action. Each CTA should guide the audience toward the next step in the funnel without resistance.', 'Add urgency-based CTA variations.', 'Drive action & conversion', 'List',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet9', '61986c4f4a29643886165e86895203cca00fc294f3fc40684b5030bbe7e8d4e0',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_64a75839af2f4281', 'content-content-lead-conversion-hooks-ctas-viral-content-viral-reel-script-gener', 'Viral Reel Script Generator', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '4', 'Act as a short-form content expert. Create a viral reel script using [topic], [target audience], and [core message]. Structure the script with a strong hook in the first 2–3 seconds, followed by a clear and engaging message, and end with a call-to-action. Ensure the script fits within 15–30 seconds and is easy to understand. Use simple language and relatable examples. Focus on delivering value quickly while keeping the viewer engaged. Avoid unnecessary complexity.', 'Add 3 hook variations for testing.', 'Create viral content', 'Script',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet9', '37458c32ab06e75182144f2957f1a8e3bded93c9ee0719e41f745ad0383127f6',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d5116ebab54348c4', 'content-content-lead-conversion-hooks-ctas-viral-content-comment-to-dm-conversio', 'Comment-to-DM Conversion System', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '5', 'Act as a conversion expert. Create a system to convert post engagement into direct messages using [post type], [audience], and [goal]. Include reply templates for comments that naturally encourage further conversation. Ensure the tone is friendly, engaging, and non-salesy. Provide 3–5 example responses that transition from public interaction to private conversation. Focus on building trust before selling. Ensure the process feels natural and not forced.', 'Add 5 real comment reply examples.', 'Convert engagement into leads', 'Strategy',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Sheet9', 'dcd97eb6af52fa06aca8f42997c5aff121e45b79fb124d14fc9437411dce062f',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_95da73916fa34c1a', 'content-content-lead-conversion-hooks-ctas-viral-content-curiosity-gap-hook-buil', 'Curiosity Gap Hook Builder', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '6', 'Act as a viral content strategist specializing in fat loss and health content. Generate 10 curiosity-driven hooks using [topic], [target audience], and [primary pain point]. Each hook should create an information gap that makes the viewer feel compelled to continue reading or watching. Use proven formats such as “You’re doing this wrong…”, “This is why you’re stuck…”, or “Nobody talks about this…”. Ensure each hook is emotionally engaging, relatable, and directly tied to real struggles faced by the audience. Avoid generic or overused phrases. Focus on stopping the scroll within the first 2 seconds and increasing watch time.', 'Add 3 high-risk contrarian hooks.', 'Increase curiosity & retention', 'List',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet9', 'bcfda1e017d11037e8a3fa24813b1f3dd10a572d2083c3dbd8f6d24d6ef922a1',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3e293325d963435e', 'content-content-lead-conversion-hooks-ctas-viral-content-problem-agitate-solutio', 'Problem-Agitate-Solution Caption', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '7', 'Act as a high-converting copywriter. Create a caption using the Problem-Agitate-Solution framework with [problem], [pain amplification], and [solution]. Start by clearly describing the problem in a way the audience immediately relates to. Then deepen the emotional impact by explaining the consequences or frustrations associated with it. Finally, present a simple and practical solution that feels achievable. Keep the tone empathetic and supportive, not manipulative. Structure the caption with short paragraphs for readability on social media. End with a natural call-to-action that encourages engagement or direct messages.', 'Add softer version for beginners.', 'Drive engagement & conversion', 'Caption',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet9', 'e5f0ff56e43f749639a5ac2363a52916cb0fe88660805a9c57d086e93ac8535c',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_71ee0c522500464a', 'content-content-lead-conversion-hooks-ctas-viral-content-viral-content-pattern-g', 'Viral Content Pattern Generator', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '8', 'Act as a social media strategist. Generate 5 high-performing content ideas using [topic], [audience], and [goal]. Each idea should follow a proven viral pattern such as storytelling, before-after transformation, list-based content, myth-busting, or “mistakes to avoid.” Ensure each idea is practical, relatable, and easy to execute without heavy production. Clearly explain why each idea works from a psychological or engagement perspective. Focus on formats that encourage saves, shares, and comments. Avoid generic ideas and ensure strong alignment with audience pain points and desires.', 'Expand 1 idea into full script.', 'Generate viral content ideas', 'List',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹5K–₹15K', '', 'Sheet9', '63bc3487a591fc38d74e548ded1f71bc69e5c2a905ebda8428377f10f32393ac',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_51526c36035c4cbd', 'content-content-lead-conversion-hooks-ctas-viral-content-dm-trigger-cta-builder', 'DM Trigger CTA Builder', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '9', 'Act as a conversion strategist. Create 8 high-converting call-to-actions specifically designed to trigger direct messages using [offer], [content context], and [target audience]. Each CTA should feel natural, low-pressure, and aligned with the content. Use curiosity, personalization, and simplicity to reduce friction and increase response rate. Avoid pushy or aggressive language. Include variations such as question-based CTAs, curiosity-driven prompts, and value-based invitations. Ensure each CTA encourages the audience to take the next step without hesitation.', 'Add urgency-based CTA variations.', 'Generate inbound leads', 'List',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Sheet9', 'd96ebebc28352b324cee78171a6e12c426282fc71bc6df0bafc4cece2951994f',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_85eb4999d39c4b9b', 'content-content-lead-conversion-hooks-ctas-viral-content-short-form-content-fram', 'Short-Form Content Framework', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '10', 'Act as a short-form content expert. Create a reusable framework for reels or short videos using [topic], [target audience], and [goal]. Structure the framework into three parts: a strong hook in the first 2–3 seconds, clear and concise value delivery, and a call-to-action. Ensure the framework is simple, repeatable, and easy to use consistently. Include guidelines on pacing, tone, and clarity to maximize retention and engagement. Focus on creating content that is easy to consume and delivers value quickly. Avoid complexity and ensure adaptability across multiple topics.', 'Add 3 examples using this framework.', 'Build repeatable content system', 'Framework',
  'TXT/PDF', '60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet9', '8c05e487fc9c7cb401516862603ec20a17dc930411d9414fbf2e6133aa50b58f',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cc2dc166c26a4025', 'content-content-lead-conversion-hooks-ctas-viral-content-story-based-hook-genera', 'Story-Based Hook Generator', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '11', 'Act as a storytelling strategist specializing in health and fat loss content. Generate 8–10 story-based hooks using [topic], [target audience], and [primary pain point]. Each hook should begin like a relatable real-life situation that immediately captures attention and builds curiosity. Use formats such as “I used to think…”, “One of my clients once…”, or “Last week, someone told me…”. Ensure the hooks feel authentic, emotionally engaging, and directly connected to the audience’s struggles. Avoid generic or overused phrasing. Focus on making the audience feel personally connected within the first few seconds so they continue reading or watching.', 'Add 3 high-emotion hook variations.', 'Build emotional connection', 'List',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet9', '5a0ebf4d7e7f4ba64924aa8f82516895627252cad18f11e5316b16666ee4e368',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cd0bfcacaab5415a', 'content-content-lead-conversion-hooks-ctas-viral-content-emotional-cta-builder', 'Emotional CTA Builder', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '12', 'Act as a conversion strategist. Create 6–8 emotionally driven calls-to-action using [pain point], [desired outcome], and [content context]. Each CTA should connect deeply with the audience’s emotions and guide them toward taking action without feeling pressured. Use language that feels supportive, relatable, and encouraging. Avoid direct selling or aggressive tones. Include variations such as reflective questions, reassurance-based prompts, and curiosity-driven invitations. Ensure each CTA flows naturally from the content and feels like a continuation rather than a forced ending. The goal is to increase engagement and encourage meaningful responses.', 'Add stronger conversion-focused variations.', 'Drive emotional engagement', 'List',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Sheet9', 'e2f8329e0950f10f341608acfd868042137567d2f158d963bd65ec5943c51d67',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f4cc6ccee2e54d49', 'content-content-lead-conversion-hooks-ctas-viral-content-content-to-dm-bridge-sc', 'Content-to-DM Bridge Script', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '13', 'Act as a conversion expert. Create a script that smoothly transitions content viewers into direct message conversations using [content type], [audience pain point], and [offer]. Ensure the transition feels natural and not sales-driven. Use curiosity, relatability, and value to encourage the audience to take the next step. Provide 3–5 variations that can be used across different types of content such as reels, captions, or stories. Focus on building trust before prompting action. The script should reduce hesitation and make messaging feel easy and natural.', 'Add follow-up DM sequence.', 'Convert viewers into leads', 'Script',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet9', '61c338e8c1cafab8e91dcf4877ed6bf4d4c75669a0b1d8d34a2814415028b2db',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_68891f26a01b4ca9', 'content-content-lead-conversion-hooks-ctas-viral-content-high-retention-content-', 'High-Retention Content Structure', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '14', 'Act as a short-form content strategist. Create a high-retention content structure using [topic], [target audience], and [goal]. Break the structure into clear stages: hook, pattern interrupt, value delivery, and call-to-action. Explain what should be included in each stage and how to maintain viewer attention throughout. Include tips on pacing, clarity, and emotional engagement. Ensure the structure is simple, repeatable, and easy to implement consistently. Focus on maximizing watch time and engagement while keeping the content concise and impactful. Avoid unnecessary complexity.', 'Add 3 real content examples.', 'Improve retention', 'Framework',
  'TXT/PDF', '60 mins', '5', 'Daily',
  '₹6K–₹18K', '', 'Sheet9', 'a03668061b774414a9ec4cde20f31629a7d078c9fc6b2ae8674db21dec6579b5',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_042516360d394d64', 'content-content-lead-conversion-hooks-ctas-viral-content-lead-magnet-cta-integra', 'Lead Magnet CTA Integration', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '15', 'Act as a funnel strategist. Create 5–7 high-converting CTAs that promote a lead magnet using [lead magnet], [content context], and [target audience]. Ensure each CTA feels like a natural extension of the content rather than a forced promotion. Highlight the value of the lead magnet clearly while keeping the message concise and easy to understand. Use curiosity, benefits, and simplicity to encourage action. Avoid overwhelming the audience with too much information. Focus on making the next step feel obvious and easy to take.', 'Add urgency-based CTA variations.', 'Drive lead capture', 'List',
  'TXT', '30–45 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet9', 'dfe9e3bf824aa52e68244ab6d24453ae55ba974ba08820a531a1d8fcb42967da',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_60a331c371a64502', 'content-content-lead-conversion-hooks-ctas-viral-content-high-converting-content', 'High-Converting Content Blueprint', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '16', 'Act as a content strategist and conversion expert. Create a complete high-converting content blueprint using [topic], [target audience], and [goal]. Structure the content into a strong hook, engaging body, value-driven insight, and a clear call-to-action. Ensure each section flows naturally into the next and keeps the audience engaged throughout. Focus on delivering value while guiding the audience toward action. Keep the structure simple, repeatable, and easy to implement across different content formats such as reels, posts, or carousels. Avoid unnecessary complexity and prioritize clarity, engagement, and conversion.', 'Add 3 examples using this blueprint.', 'Build repeatable content system', 'Blueprint',
  'TXT/PDF', '60–90 mins', '5', 'Daily',
  '₹8K–₹25K', '', 'Sheet9', '3916d325436af90bf160910d532df1c6d4d8b65d0a610f4d4c4331f099ccf480',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8376ec23f3e14c14', 'content-content-lead-conversion-hooks-ctas-viral-content-multi-cta-content-strat', 'Multi-CTA Content Strategy', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '17', 'Act as a conversion strategist. Create a content strategy that integrates multiple calls-to-action using [content type], [audience], and [goal]. Design a flow where different CTAs appear naturally throughout the content without overwhelming the audience. Include soft CTAs (engagement), mid-level CTAs (saves/shares), and strong CTAs (DMs or lead magnets). Ensure the transitions feel smooth and logical. Focus on guiding the audience step-by-step toward conversion while maintaining trust and value. Avoid aggressive selling. The strategy should be practical and easy to implement consistently.', 'Add CTA placement examples.', 'Increase conversion rate', 'Strategy',
  'TXT', '60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet9', 'f7964bb129e004a9631e3ea07ee1d4778fbcb5f0a42e1f6a5b9e2af7b49d5bce',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_07f15684cc244e03', 'content-content-lead-conversion-hooks-ctas-viral-content-viral-to-lead-funnel-sc', 'Viral-to-Lead Funnel Script', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '18', 'Act as a funnel strategist. Create a script that converts viral content into leads using [viral topic], [audience], and [offer]. Structure the content so it captures attention first, builds engagement, and then transitions smoothly into a lead-generating action. Ensure the transition from value to CTA feels natural and not forced. Use curiosity, relatability, and clarity to guide the audience. Focus on maximizing both reach and conversion. Avoid overly promotional language.', 'Add DM follow-up sequence.', 'Convert views into leads', 'Script',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet9', '78d7e8f6ddde2e9efdec1d430650e9b8cb1154aa98581d99b3f8043877a23a3b',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0d168fb8f4b049c2', 'content-content-lead-conversion-hooks-ctas-viral-content-engagement-to-conversio', 'Engagement-to-Conversion Flow', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '19', 'Act as a social media strategist. Create a flow that converts engagement (likes, comments, saves) into leads using [post type], [audience], and [goal]. Design steps that move the audience from interaction to deeper engagement and finally into DMs or lead magnets. Include example responses, follow-ups, and transitions. Ensure the process feels natural and conversational. Focus on building trust before conversion. Avoid pushy tactics.', 'Add real comment reply examples.', 'Convert engagement into leads', 'System',
  'TXT/PDF', '60–90 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet9', '3681808332ed0a64845fdd70d748ecf3f888aba92d8ead79ccf5d4434e1d1421',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_03ab584e67184072', 'content-content-lead-conversion-hooks-ctas-viral-content-complete-content-conver', 'Complete Content Conversion System', 'content', 'Content Engine & Personal Brand', 'Content → Lead Conversion (Hooks, CTAs, Viral Content)', 'pro',
  '20', 'Act as a high-level content and funnel strategist. Create a complete system that turns content into leads using [content type], [audience], and [offer]. Include hook creation, value delivery, CTA integration, and follow-up strategy. Ensure the system is simple, repeatable, and scalable. Focus on clarity and execution. The system should help consistently convert views into leads and leads into clients. Avoid complexity and ensure practical usability.', 'Break into daily workflow.', 'Build full conversion engine', 'System',
  'PDF', '90–120 mins', '5', 'Daily',
  '₹15K–₹50K', '', 'Sheet9', '6b8f0abfcb503c1d4035590d3b3749924e523b775960d9cf4b6e14fa02c2835d',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2d82678270164926', 'content-content-repurposing-distribution-systems-content-repurposing-engine', 'Content Repurposing Engine', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'free',
  '1', 'Act as a content repurposing strategist. Take one piece of content using [original content], [platform], and [goal] and convert it into 5–10 different formats such as reels, carousels, captions, threads, and stories. Ensure each format is optimized for its respective platform while maintaining consistency in message. Adapt tone, length, and structure accordingly. Avoid simple duplication—focus on transformation. The goal is to maximize reach and engagement from a single content idea. Ensure outputs are practical and ready to use.', 'Add platform-specific versions.', 'Multiply content output', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet10', '0ea5acaacaaabcfedc64ab04db37dbc7536d4c67abcda21946222bfeb16589d7',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6ad30c8bdf144138', 'content-content-repurposing-distribution-systems-multi-platform-distribution-pla', 'Multi-Platform Distribution Plan', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'free',
  '2', 'Act as a content strategist. Create a distribution plan using [content type], [platforms], and [posting frequency]. Map how one piece of content can be shared across multiple platforms like Instagram, YouTube, LinkedIn, and WhatsApp. Ensure each platform has a tailored version based on audience behavior. Include timing, format, and CTA variations. Keep the plan simple and executable. Avoid overcomplication. Focus on maximizing reach and visibility.', 'Add weekly calendar.', 'Increase reach', 'Plan',
  'TXT/PDF', '60–90 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet10', '80b4084c5e4cf4bbf3e840fcad495ef4aaa1bd65cf8d08cac023e2462c06fdfe',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_75f86c088df14250', 'content-content-repurposing-distribution-systems-long-form-to-short-form-convert', 'Long-Form to Short-Form Converter', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '3', 'Act as a content transformation expert. Convert long-form content using [blog/video/podcast], [key message], and [audience] into multiple short-form pieces. Extract key ideas, insights, and hooks. Convert them into reels, tweets, or captions. Ensure clarity and impact in each piece. Avoid losing the core message. Focus on making content concise, engaging, and platform-ready.', 'Add 5 reel scripts.', 'Repurpose efficiently', 'Script',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹8K–₹25K', '', 'Sheet10', 'bc692736781d28094ffa73353e1d81879296045caa64c4da29715f61b1862c39',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_48f7034b56684b82', 'content-content-repurposing-distribution-systems-content-recycling-system', 'Content Recycling System', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '4', 'Act as a content strategist. Create a system to recycle existing content using [content library], [performance data], and [goals]. Identify high-performing content and suggest ways to reuse or update it. Include strategies such as reformatting, updating insights, or reposting with new angles. Ensure the system avoids content fatigue while maximizing value.', 'Add tracking sheet.', 'Reuse content', 'System',
  'TXT/PDF', '60–90 mins', '5', 'Monthly',
  '₹8K–₹25K', '', 'Sheet10', '5696d314203e3013e0690be2b20f3159481a73ea105dafeb080ec6c44a3ea44c',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_11cc35546f52405f', 'content-content-repurposing-distribution-systems-content-calendar-automation', 'Content Calendar Automation', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '5', 'Act as a productivity strategist. Create an automated content calendar using [content types], [frequency], and [platforms]. Structure weekly and monthly schedules. Include categories such as educational, storytelling, and conversion content. Ensure balance and consistency. Avoid complexity. Focus on easy execution.', 'Add monthly template.', 'Plan content', 'Calendar',
  'TXT/PDF', '60–90 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet10', '0add1ad15b7c6073b1645d5482e7fdc7045d7a361c6f7a71bf130a622438d058',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cf88af8da51f403e', 'content-content-repurposing-distribution-systems-platform-specific-content-adapt', 'Platform-Specific Content Adapter', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '6', 'Act as a content strategist. Adapt one piece of content using [original content], [target platform], and [audience behavior]. Modify tone, length, and structure to match the platform’s style (e.g., short-form reels, long-form LinkedIn posts, or conversational WhatsApp messages). Ensure the core message remains consistent while optimizing for engagement. Avoid simple copy-paste. Focus on making the content feel native to each platform. The goal is to maximize reach and engagement without creating entirely new content from scratch.', 'Add versions for 3 platforms.', 'Optimize platform performance', 'Content',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet10', 'cb1ccd1a898282f8c8536b84471ccd365dafc23d0e87d42d7c499bdf3bbbffff',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0e9a4898598b4c3d', 'content-content-repurposing-distribution-systems-content-amplification-strategy', 'Content Amplification Strategy', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '7', 'Act as a growth strategist. Create a content amplification plan using [content piece], [platforms], and [goal]. Outline methods to extend reach such as reposting, resharing in communities, using stories, and leveraging collaborations. Include timing, frequency, and format variations. Ensure the strategy is practical and easy to implement. Avoid overcomplicated funnels. Focus on increasing visibility and engagement from existing content.', 'Add collaboration ideas.', 'Increase reach', 'Strategy',
  'TXT/PDF', '60–90 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Sheet10', '9d2a80ccdb7d06b38959bbc9b7bddbce3c9170e4a8b6f54fd298fd1d922975b2',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_490fc71533e44c6b', 'content-content-repurposing-distribution-systems-evergreen-content-system', 'Evergreen Content System', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '8', 'Act as a content systems expert. Create a system to build evergreen content using [topics], [audience], and [goals]. Identify content ideas that remain relevant over time. Structure them so they can be reused and repurposed across multiple platforms. Include tagging, storage, and retrieval methods. Ensure the system is simple and scalable. Avoid complex setups. Focus on creating long-term value from content.', 'Add tagging system.', 'Build long-term content', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹15K–₹50K', '', 'Sheet10', '5aa33926863735b6fa6b88c70e456f35553761858b6c1bc867280c571f557659',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d5fac52903d045b2', 'content-content-repurposing-distribution-systems-content-distribution-funnel', 'Content Distribution Funnel', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '9', 'Act as a funnel strategist. Create a distribution funnel using [content type], [platforms], and [goal]. Map how content moves from awareness (reels/posts) to engagement (comments/DMs) and finally to conversion (lead magnets or calls). Ensure each stage has a clear purpose and CTA. Keep the funnel simple and easy to execute. Avoid unnecessary complexity. Focus on converting attention into leads.', 'Add funnel example.', 'Convert content to leads', 'Funnel',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', 'dc7740fa60176b84c823108da4de9ed409ee9100edb6bbc4ccad6d3e2d61674a',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ffee48472b9d488b', 'content-content-repurposing-distribution-systems-repurposing-workflow-automation', 'Repurposing Workflow Automation', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '10', 'Act as a systems strategist. Create a workflow to automate content repurposing using [content types], [tools], and [frequency]. Identify steps that can be automated such as formatting, scheduling, and distribution. Ensure the workflow reduces manual effort while maintaining quality. Keep it simple and reliable. Avoid overly technical setups. Focus on efficiency and consistency.', 'Add tool stack.', 'Automate repurposing', 'Workflow',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', 'a68850934167deb2e83b3f01697ac1fb28381d14160afd487a6f7e8cf6ec1e35',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_17ae420a673d444c', 'content-content-repurposing-distribution-systems-content-flywheel-system', 'Content Flywheel System', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '11', 'Act as a content growth strategist. Create a content flywheel system using [core content], [platforms], and [goal]. Design a loop where one piece of content generates multiple derivatives, which in turn feed back into new content ideas. Include stages such as creation, repurposing, distribution, engagement, and feedback. Ensure the system is continuous and self-reinforcing. Avoid complexity. Focus on building momentum over time. The goal is to create a system where content consistently produces more content and leads without requiring constant new ideation.', 'Add visual loop explanation.', 'Build content engine', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', '596f359c8a206b5c81f8392006e1f179278256bc5da0144fc5731c1c9e2a89b2',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9dd510a3ef3e415c', 'content-content-repurposing-distribution-systems-content-ecosystem-builder', 'Content Ecosystem Builder', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '12', 'Act as a digital ecosystem strategist. Create a content ecosystem using [content types], [platforms], and [audience journey]. Map how different types of content interact across platforms to guide the audience from awareness to conversion. Include long-form, short-form, and interactive content. Ensure each piece has a role within the ecosystem. Keep it structured and easy to execute. Avoid disconnected strategies. Focus on creating a cohesive system where all content works together.', 'Add ecosystem map.', 'Build integrated system', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet10', '34656b61c7d28a1715cfe3fa597e1b273b732947a6002da3471e61bff3a494fe',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6e9307dfd9a84c4d', 'content-content-repurposing-distribution-systems-audience-journey-content-map', 'Audience Journey Content Map', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '13', 'Act as a funnel strategist. Create a content map using [target audience], [pain points], and [stages]. Break the journey into awareness, consideration, and conversion. Identify what type of content should be used at each stage and how it transitions to the next. Ensure the flow is logical and easy to follow. Avoid gaps in the journey. Focus on guiding the audience step-by-step toward becoming a client.', 'Add examples for each stage.', 'Map content journey', 'Map',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹15K–₹50K', '', 'Sheet10', 'ae295562ce44e868f19eb26bbc81e30b61088ebbbdcacbec3186b30b171ac8c6',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_159aefca3d134f53', 'content-content-repurposing-distribution-systems-content-growth-loop', 'Content Growth Loop', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '14', 'Act as a growth strategist. Create a content growth loop using [content], [engagement], and [distribution]. Design a system where engagement (comments, shares, saves) feeds into increased reach and further content opportunities. Include strategies to encourage interaction and reuse audience input for new content. Ensure the loop is simple and repeatable. Avoid overly complex growth tactics. Focus on organic and sustainable growth.', 'Add engagement tactics.', 'Scale content growth', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', 'eb2a2b7489a63125f361166077883bf81536b03943152cf518e25b04f04c0e3a',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d93a8a93260f49ef', 'content-content-repurposing-distribution-systems-high-leverage-content-strategy', 'High-Leverage Content Strategy', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '15', 'Act as a content strategist. Create a high-leverage content strategy using [core topics], [audience], and [goal]. Identify content types that produce the highest impact relative to effort. Focus on formats that can be reused, repurposed, and distributed widely. Ensure the strategy maximizes output while minimizing effort. Keep it simple and actionable. Avoid low-impact activities. Focus on efficiency and results.', 'Add content priority list.', 'Maximize impact', 'Strategy',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', 'ce096e4148d0d6d1802f66f7eb8ed8b981c48315dd81b95a8e39a53777b1db8c',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_60dd02ce17ab4c7d', 'content-content-repurposing-distribution-systems-omnichannel-distribution-system', 'Omnichannel Distribution System', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '16', 'Act as a digital growth strategist. Create an omnichannel distribution system using [content], [platforms], and [audience segments]. Design how a single piece of content can be distributed across multiple channels such as Instagram, YouTube, LinkedIn, email, and WhatsApp while maintaining consistency in messaging. Adapt content format and tone for each platform without losing core value. Ensure the system is simple, repeatable, and scalable. Avoid complex workflows that are hard to manage. Focus on maximizing reach, engagement, and visibility from every piece of content.', 'Add platform-wise breakdown.', 'Maximize reach', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet10', 'dcebe1382afb4c5cc6f4cab9032ab5f23aa2402f511eaed584b93ccce6f9183b',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0f890083a24e459a', 'content-content-repurposing-distribution-systems-content-syndication-strategy', 'Content Syndication Strategy', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '17', 'Act as a content strategist. Create a content syndication strategy using [core content], [external platforms], and [goal]. Identify opportunities to distribute content beyond owned platforms such as communities, forums, newsletters, and collaborations. Ensure the strategy increases visibility and authority. Keep it simple and actionable. Avoid overly complex outreach plans. Focus on leveraging existing content to reach new audiences.', 'Add outreach templates.', 'Expand reach', 'Strategy',
  'TXT', '90–120 mins', '5', 'Monthly',
  '₹15K–₹50K', '', 'Sheet10', '291410ff34d34d496b3b498f2b99f7b269b16ef25a33af3e4fed9aa9c5517ddd',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_25c3904a50b64e42', 'content-content-repurposing-distribution-systems-content-repurposing-calendar', 'Content Repurposing Calendar', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '18', 'Act as a productivity strategist. Create a content repurposing calendar using [content types], [frequency], and [platforms]. Plan how one piece of content can be reused across days or weeks in different formats. Ensure balance between fresh and repurposed content. Keep the calendar simple and easy to follow. Avoid overloading the schedule. Focus on consistency and efficiency.', 'Add monthly template.', 'Plan repurposing', 'Calendar',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', '6121e2c0ba4c7c7e1b493bedece5d009b68cbca5288f71e7c1e0eceff44747bb',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c93a9c5df00c4e9f', 'content-content-repurposing-distribution-systems-distribution-automation-system', 'Distribution Automation System', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '19', 'Act as a systems expert. Create an automated distribution system using [tools], [content], and [frequency]. Identify steps that can be automated such as scheduling, cross-posting, and notifications. Ensure the system reduces manual effort while maintaining quality. Keep it reliable and easy to manage. Avoid overly technical setups. Focus on efficiency and consistency.', 'Add tool stack and workflow.', 'Automate distribution', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹15K–₹50K', '', 'Sheet10', 'f5ca571f459da00b774b25f0b751d54e8595a6c6f2ae1108b4b18ba2060bc3b6',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_dd3c6a669bc24e80', 'content-content-repurposing-distribution-systems-content-scaling-blueprint', 'Content Scaling Blueprint', 'content', 'Content Engine & Personal Brand', 'Content Repurposing & Distribution Systems', 'pro',
  '20', 'Act as a high-level content strategist. Create a blueprint to scale content using [content volume], [team/resources], and [goals]. Combine repurposing, distribution, and automation into one cohesive system. Ensure the blueprint is simple, scalable, and practical. Avoid unnecessary complexity. Focus on maximizing output, reach, and efficiency. The system should allow consistent content growth without proportional increase in effort.', 'Break into execution steps.', 'Scale content', 'Blueprint',
  'PDF', '120–150 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet10', '7449ba51efc498838dd7e3eab3db10024deb129446ad35c13d3024648a5382a9',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6c7012c62db64cb8', 'delivery-weekly-check-in-optimization-weekly-check-in-analyzer', 'Weekly Check-in Analyzer', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'free',
  '1', 'Act as a client success coach for a nutrition business. Analyze a weekly check-in using [client data], [progress metrics], and [reported challenges]. Identify patterns in adherence, energy levels, sleep, and nutrition. Highlight what is working well and what needs adjustment. Provide clear insights rather than generic feedback. Ensure recommendations are practical and personalized. Avoid overwhelming the client with too many changes. Focus on improving consistency and progress. The output should help the coach quickly understand the client’s situation and take informed action.', 'Add quick summary version.', 'Analyze client progress', 'Analysis',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', '2dc8075e84414da183a93e2cf3a813c7a230b35fd8fa0534b37604aac8a718e7',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a97b0a8335944adf', 'delivery-weekly-check-in-optimization-personalized-feedback-generator', 'Personalized Feedback Generator', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'free',
  '2', 'Act as a premium coach. Create personalized feedback using [client progress], [wins], and [struggles]. Start by acknowledging progress and effort to build motivation. Then address challenges with clear and supportive guidance. Ensure the tone is encouraging and non-judgmental. Provide 2–3 actionable suggestions that are easy to implement. Avoid generic or copy-paste responses. Focus on making the client feel understood and supported.', 'Add voice-note version.', 'Improve client engagement', 'Message',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', '1bd4c280aedde79d531a622f68235aaa98ffaaac02117eacb41bf6a60b1c2351',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f124be68eac64bc8', 'delivery-weekly-check-in-optimization-progress-tracking-system', 'Progress Tracking System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'starter',
  '3', 'Act as a systems expert. Create a progress tracking system using [metrics], [frequency], and [client goals]. Identify key indicators such as weight, measurements, energy, and adherence. Structure how data should be collected, stored, and reviewed. Ensure the system is simple and easy for both coach and client. Avoid complex tracking tools. Focus on clarity and consistency.', 'Add tracking template.', 'Track client progress', 'System',
  'TXT/PDF', '60–90 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', 'ede1e074212fb2899d893eff6518971ab9290f77ad6990ccf4acf6973b2e1b68',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f467bfa16fa84c9b', 'delivery-weekly-check-in-optimization-check-in-form-optimizer', 'Check-in Form Optimizer', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'starter',
  '4', 'Act as a client experience strategist. Create an optimized weekly check-in form using [client type], [goals], and [common issues]. Include questions that capture meaningful insights without overwhelming the client. Ensure the form is concise, easy to fill, and actionable. Avoid unnecessary or repetitive questions. Focus on collecting data that directly impacts coaching decisions.', 'Add Google Form version.', 'Improve data quality', 'Form',
  'TXT', '45–60 mins', '5', 'Monthly',
  '₹8K–₹25K', '', 'Client Delivery & Transformatio', '0243d1af34a71770d1db1c849ea8300a925c6d89209f281495c15ef030b2faba',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_247c7c1863f64fd1', 'delivery-weekly-check-in-optimization-client-accountability-system', 'Client Accountability System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '5', 'Act as a transformation coach. Create an accountability system using [client goals], [tracking method], and [communication style]. Include methods to ensure clients stay consistent between check-ins. Provide reminders, tracking methods, and feedback loops. Ensure the system is supportive and not pressuring. Focus on building discipline and ownership.', 'Add daily accountability version.', 'Improve consistency', 'System',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', '0e65c0e0661a2a1f03d1409db47fb302a8346454244743faccc0f7f96c8e58e9',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4ff293f7616947f3', 'delivery-weekly-check-in-optimization-behavior-pattern-identifier', 'Behavior Pattern Identifier', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '6', 'Act as a behavioral coach. Analyze weekly check-in data using [client responses], [habits], and [patterns]. Identify recurring behaviors that are helping or hindering progress. Highlight trends such as consistency issues, emotional eating, or missed routines. Provide insights that help the coach understand root causes rather than surface-level problems. Ensure the analysis is clear, concise, and actionable. Avoid generic observations. Focus on identifying key patterns that can be addressed to improve results.', 'Add summary for quick review.', 'Identify behavior patterns', 'Analysis',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', '0a759bab9e9bbe32a948e06b321b0aa6112b2dcb154de852a0f66305c4abc153',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1f84a35359574380', 'delivery-weekly-check-in-optimization-micro-adjustment-recommendation-system', 'Micro Adjustment Recommendation System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '7', 'Act as a nutrition coach. Based on [client progress], [current plan], and [challenges], suggest small, targeted adjustments rather than major changes. Focus on improving adherence and consistency. Ensure recommendations are practical and easy to implement. Avoid overwhelming the client with multiple changes. Highlight the reason behind each adjustment.', 'Add 3 alternative adjustments.', 'Improve adherence', 'Plan',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', '943423db8c00f09d12c3c6867ae20a30241a75768e549eb1d3e4267401870e7c',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0e72aa3dde2a4c13', 'delivery-weekly-check-in-optimization-client-motivation-booster', 'Client Motivation Booster', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '8', 'Act as a transformation coach. Create a motivational message using [client progress], [struggles], and [goals]. Acknowledge effort, reinforce progress, and encourage consistency. Ensure the tone is supportive and empowering. Avoid generic motivational lines. Focus on making the client feel understood and driven.', 'Add voice-note script.', 'Increase motivation', 'Message',
  'TXT', '30–45 mins', '5', 'Weekly',
  '₹8K–₹25K', '', 'Client Delivery & Transformatio', '8259cdc1b646dced6c39bdd887e007396cade3bbae3abc40012851c4911d4b2a',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8b791e8f20cc4c84', 'delivery-weekly-check-in-optimization-plateau-break-strategy', 'Plateau Break Strategy', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '9', 'Act as a fat loss expert. Create a strategy to overcome a plateau using [client data], [progress stagnation], and [current plan]. Identify possible causes such as adaptation, inconsistency, or lifestyle factors. Provide practical solutions such as adjusting nutrition, activity, or recovery. Ensure the strategy is personalized and easy to implement. Avoid drastic changes. Focus on gradual improvements that restart progress.', 'Add quick-action plan.', 'Break plateaus', 'Strategy',
  'TXT', '60–90 mins', '5', 'Contextual',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', 'acdf427d87da441ba0776c8e6ecba3619f0949469f1b9f58f36402b3bac3ccd6',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_dc7f8fa623e04ae4', 'delivery-weekly-check-in-optimization-client-communication-optimizer', 'Client Communication Optimizer', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '10', 'Act as a client experience expert. Create a communication framework using [client type], [communication frequency], and [preferences]. Ensure communication is clear, supportive, and consistent. Include guidelines for tone, timing, and content. Avoid overcommunication or undercommunication. Focus on building trust and engagement.', 'Add message templates.', 'Improve communication', 'Framework',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', 'c05d06a7ae9b3599acdf85b407642b618d16ca300e79ed7b1e1beabac72f5f63',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6e9c1c8d875d4cbd', 'delivery-weekly-check-in-optimization-advanced-insight-generator', 'Advanced Insight Generator', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '11', 'Act as an expert nutrition coach. Analyze a weekly check-in using [client data], [progress trends], and [behavior patterns]. Go beyond surface-level feedback and identify deeper insights such as hidden inconsistencies, mindset blocks, or lifestyle patterns. Connect different data points to explain why progress is happening or not. Ensure the analysis is clear, insightful, and actionable. Avoid generic feedback. Focus on providing high-level coaching insights that improve decision-making and personalization.', 'Add simplified version for client.', 'Deliver expert insights', 'Analysis',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', '19f74b91412724a1f15031f99701b8cfd252d77b613c1df6575163bb90260a93',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fad4157bb00341c3', 'delivery-weekly-check-in-optimization-retention-risk-identifier', 'Retention Risk Identifier', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '12', 'Act as a client success strategist. Analyze [client engagement], [progress], and [communication patterns] to identify risk of drop-off or disengagement. Highlight early warning signs such as reduced adherence, delayed responses, or low motivation. Provide actionable steps to re-engage the client. Ensure the system is practical and easy to use. Avoid overcomplication. Focus on improving retention and long-term client success.', 'Add re-engagement script.', 'Reduce churn', 'Analysis',
  'TXT', '60 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', 'b1cf9399cd9299533de7848344b0e9e24f8df6d9cf5dc1135b7bea9d86e2c0ba',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5dd18bb2c4ca4a23', 'delivery-weekly-check-in-optimization-personalized-coaching-adjustment-plan', 'Personalized Coaching Adjustment Plan', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '13', 'Act as a premium coach. Create a personalized adjustment plan using [client progress], [current plan], and [challenges]. Provide targeted changes in nutrition, activity, or behavior. Ensure the plan is realistic and easy to implement. Avoid drastic or unnecessary changes. Focus on improving consistency and results through small, effective adjustments.', 'Add 3 alternative plans.', 'Improve outcomes', 'Plan',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', 'a3dd360be9f3df5a4194ad7941dec20f07d01a2f223c2f8371b36462145bb9e8',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f28e003cceca4d7e', 'delivery-weekly-check-in-optimization-client-win-reinforcement-system', 'Client Win Reinforcement System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '14', 'Act as a transformation coach. Create a system to reinforce client wins using [progress], [milestones], and [goals]. Highlight achievements and connect them to long-term success. Ensure the messaging builds confidence and motivation. Avoid generic praise. Focus on meaningful reinforcement that encourages continued effort.', 'Add message templates.', 'Increase motivation', 'System',
  'TXT', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', 'dbe13ea859144389060a11ea05c95059cc82928fd9af44dcb8b8bca98ae9aa01',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a17f65c516194535', 'delivery-weekly-check-in-optimization-weekly-transformation-summary', 'Weekly Transformation Summary', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '15', 'Act as a client experience expert. Create a weekly transformation summary using [client data], [progress], and [insights]. Summarize key wins, challenges, and next steps in a clear and engaging way. Ensure the summary is easy to understand and motivates the client. Avoid overly technical language. Focus on clarity and impact.', 'Add visual format.', 'Improve clarity', 'Summary',
  'TXT/PDF', '45–60 mins', '5', 'Weekly',
  '₹10K–₹30K', '', 'Client Delivery & Transformatio', '32c67607589d965519eb8c4b3cb2d95a87b0de054d21004ff8e4bb6db7f4c6f7',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ebce76301eb640ff', 'delivery-weekly-check-in-optimization-high-touch-coaching-experience-system', 'High-Touch Coaching Experience System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '16', 'Act as a premium client experience strategist. Create a system to deliver a high-touch coaching experience using [client type], [communication style], and [service level]. Include structured weekly check-ins, personalized feedback, proactive communication, and milestone tracking. Ensure the system makes clients feel supported, valued, and understood. Avoid overcomplication or excessive communication. Focus on quality interactions that enhance trust and engagement. The system should be easy to implement consistently while maintaining a premium feel.', 'Add client journey map.', 'Elevate client experience', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Client Delivery & Transformatio', '68dbe152b3e9467b041c780d59157150c9a4c20f33065a217b930824e7f31c18',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_65c7fcc29d634c45', 'delivery-weekly-check-in-optimization-client-progress-forecasting-system', 'Client Progress Forecasting System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '17', 'Act as an expert coach. Create a system to forecast client progress using [current data], [past trends], and [goals]. Predict likely outcomes based on consistency, adherence, and behavior patterns. Highlight potential challenges and opportunities in advance. Ensure the system helps in proactive decision-making rather than reactive adjustments. Avoid unrealistic predictions. Focus on practical insights that guide future actions.', 'Add scenario-based predictions.', 'Predict outcomes', 'System',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', 'b598627dadf43c1c3164207930972d786cfa43af9ccb64c8cc593ba4cdde9237',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0b0a59b545cf44c1', 'delivery-weekly-check-in-optimization-personalized-habit-correction-system', 'Personalized Habit Correction System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '18', 'Act as a behavior change expert. Create a system to correct client habits using [problem habits], [triggers], and [goals]. Identify root causes of behavior and suggest small, targeted changes. Ensure the system focuses on gradual improvement rather than drastic shifts. Include tracking and reinforcement mechanisms. Avoid overwhelming the client with too many changes. Focus on building sustainable habits that improve long-term outcomes.', 'Add habit tracking template.', 'Improve habits', 'System',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Client Delivery & Transformatio', 'e811f8d8258900bc1a8562092a83431500dc320433f4998585ae12df298598bc',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2615c864216445e6', 'delivery-weekly-check-in-optimization-client-transformation-acceleration-plan', 'Client Transformation Acceleration Plan', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '19', 'Act as a high-performance coach. Create a plan to accelerate client transformation using [current progress], [bottlenecks], and [goals]. Identify areas where improvements can be made in nutrition, activity, or mindset. Provide clear, actionable steps to enhance results without increasing stress or complexity. Ensure the plan is personalized and realistic. Avoid aggressive or unsustainable changes. Focus on optimizing existing efforts for better outcomes.', 'Add 7-day action plan.', 'Accelerate results', 'Plan',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Client Delivery & Transformatio', 'fda443013b09d7ed7fd6efcdbb191aea9175f4ee0c24f9affa91951e5bbf0c89',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6cc1e2dadd8e4565', 'delivery-weekly-check-in-optimization-complete-weekly-check-in-system', 'Complete Weekly Check-in System', 'delivery', 'Client Delivery & Transformation', 'Weekly Check-in Optimization', 'pro',
  '20', 'Act as a systems strategist. Create a complete weekly check-in system using [client type], [service model], and [goals]. Combine data collection, analysis, feedback, adjustments, and follow-up into one seamless process. Ensure the system is simple, repeatable, and scalable. Avoid unnecessary complexity. Focus on efficiency, personalization, and results. The system should improve client outcomes while reducing manual workload.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Client Delivery & Transformatio', '33aa4a252127fa975e147aaeb32723ab9dfcfe2439bc3126b05d6c69c41232e8',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0b29ea1aa5eb4174', 'delivery-daily-accountability-systems-daily-accountability-tracker', 'Daily Accountability Tracker', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'free',
  '1', 'Act as a transformation coach. Create a daily accountability tracking system using [client goals], [key habits], and [tracking method]. Identify 3–5 high-impact actions such as nutrition adherence, steps, workouts, hydration, or sleep. Design a simple system that allows clients to log their daily performance easily without friction. Ensure the system is clear, quick to use, and motivating. Avoid overly detailed tracking that leads to burnout. Focus on consistency and visibility of progress. The tracker should help both coach and client identify patterns and make quick adjustments.', 'Add Google Sheet template.', 'Track daily habits', 'System',
  'TXT/PDF', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '5f35130c42bb3bc385f9d0bb976fc6cd9d085e23a955e1610863be14807858ca',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2bc4d3a12e734410', 'delivery-daily-accountability-systems-daily-check-in-message-generator', 'Daily Check-in Message Generator', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'free',
  '2', 'Act as a client engagement expert. Create daily accountability messages using [client type], [goals], and [communication style]. Ensure the message is short, motivating, and action-oriented. Include reminders, encouragement, and a clear prompt for response. Avoid generic or repetitive messages. Focus on making the client feel supported and accountable. The tone should be friendly yet firm. The goal is to maintain daily engagement without overwhelming the client.', 'Add 7-day message sequence.', 'Increase engagement', 'Message',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet11', 'a8715139404fb3e7e413167f994f8ddd05f53f4730e9e1237082a5761a082155',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0f8c7bf7cd734b3a', 'delivery-daily-accountability-systems-habit-adherence-monitoring-system', 'Habit Adherence Monitoring System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'starter',
  '3', 'Act as a behavior tracking expert. Create a system to monitor daily habit adherence using [habits], [frequency], and [tracking method]. Define clear criteria for success or failure for each habit. Include a simple scoring or rating system. Ensure the system is easy to follow and provides meaningful insights. Avoid overly complex metrics. Focus on clarity and consistency. The system should help identify gaps and improve adherence over time.', 'Add scoring system.', 'Monitor habits', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '73bafab9a5e803f1e44753f2fc3bde011c1395c245f4b1df60bba481380a7538',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_eb360c8c847b4232', 'delivery-daily-accountability-systems-daily-feedback-loop-system', 'Daily Feedback Loop System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'starter',
  '4', 'Act as a coaching systems expert. Create a daily feedback loop using [client input], [coach response], and [adjustments]. Define how clients report their day and how the coach responds with guidance. Ensure the loop is fast, efficient, and actionable. Avoid long or delayed responses. Focus on quick feedback that improves next-day performance. The system should create continuous improvement without overwhelming the coach.', 'Add response templates.', 'Improve consistency', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '4f07c97ec295fcce4b754aabc9ad81d0cf2b0355230352c74646afb4dc4ad9c7',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_58cf97df86ab4e0b', 'delivery-daily-accountability-systems-client-accountability-reminder-system', 'Client Accountability Reminder System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '5', 'Act as a client success strategist. Create a reminder system using [client schedule], [habits], and [communication channel]. Design timely reminders that prompt clients to take action throughout the day. Ensure reminders are helpful and not intrusive. Include variations such as motivational, instructional, and check-in reminders. Avoid excessive notifications. Focus on building discipline and routine.', 'Add reminder schedule.', 'Improve adherence', 'System',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet11', '968a0cc2d96065c91b04be5767fe75e2d75bef3a8025bb5f03c531b56b09ef48',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_358d1540bcd54fd3', 'delivery-daily-accountability-systems-behavior-correction-loop', 'Behavior Correction Loop', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '6', 'Act as a behavior change expert. Create a daily behavior correction system using [problem habits], [triggers], and [client goals]. Identify common patterns where clients deviate from their plan and analyze the root causes behind those behaviors. Design a simple loop that includes awareness, correction, and reinforcement. Ensure the system helps the client recognize mistakes without feeling judged. Provide small, practical corrections that can be implemented immediately. Avoid overwhelming the client with too many changes. Focus on consistency and gradual improvement. The goal is to create a feedback-driven system that continuously improves behavior and adherence.', 'Add example scenarios.', 'Correct habits', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', 'b9b34dd4153e9e26d5d77d30c2712d0a07ab48142acc20f7eadf485989b46589',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9b64b9c4bba74866', 'delivery-daily-accountability-systems-emotional-accountability-system', 'Emotional Accountability System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '7', 'Act as a transformation coach. Create a system to manage emotional triggers using [client emotions], [stress factors], and [habits]. Identify situations where emotions lead to poor decisions such as overeating or skipping workouts. Provide strategies to handle these situations effectively. Include awareness, pause techniques, and alternative actions. Ensure the system is practical and easy to follow. Avoid overly complex psychological concepts. Focus on helping the client build control and awareness.', 'Add daily check-in prompts.', 'Manage emotions', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '26a2b92c7ff3eb8bef0b9d66d7b8b3b800423607e2e1bcd15dc11152f3111693',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_73369a20217645fa', 'delivery-daily-accountability-systems-daily-reflection-system', 'Daily Reflection System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '8', 'Act as a personal growth coach. Create a daily reflection system using [client goals], [habits], and [progress]. Include simple questions that help clients review their day, identify wins, and recognize areas for improvement. Ensure the system is quick and easy to complete. Avoid long or complicated journaling. Focus on clarity and actionable insights. The goal is to build self-awareness and continuous improvement.', 'Add 5-question template.', 'Improve awareness', 'System',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹10K–₹30K', '', 'Sheet11', '0eb8a95370f6b73c1086ce24d9d49a55c33a91f9653bea4ccaf0dc7a356532f3',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_48d38498c0dd427c', 'delivery-daily-accountability-systems-real-time-habit-intervention-system', 'Real-Time Habit Intervention System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '9', 'Act as a behavior strategist. Create a system to intervene in real-time using [habit triggers], [client environment], and [goals]. Identify moments when clients are likely to break habits and provide immediate alternative actions. Ensure the system is practical and easy to apply instantly. Avoid complex steps. Focus on quick interventions that prevent negative behavior.', 'Add trigger-action examples.', 'Prevent slip-ups', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', 'df502df30112ed87b2d90e7875aa3c6f85387c97ac955c1ee6cfd71d3c8efd25',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_60f2482e60924b4c', 'delivery-daily-accountability-systems-consistency-reinforcement-system', 'Consistency Reinforcement System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '10', 'Act as a high-performance coach. Create a system to reinforce consistency using [client progress], [habits], and [goals]. Identify ways to reward and reinforce positive behavior. Ensure the system builds momentum and motivation. Avoid generic rewards. Focus on meaningful reinforcement that encourages long-term adherence.', 'Add reward ideas.', 'Build consistency', 'System',
  'TXT', '60 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', 'f0138dfec9350d23bfbcee90b531859db5aca1cb4abe808d381421e99faf5e14',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_721bfcc5e2584521', 'delivery-daily-accountability-systems-adaptive-accountability-system', 'Adaptive Accountability System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '11', 'Act as a client success strategist. Create an adaptive accountability system using [client progress], [behavior patterns], and [engagement level]. Adjust accountability intensity based on client performance—more support during low adherence and more autonomy during high consistency. Define clear rules for when to increase or decrease intervention. Ensure the system is flexible and personalized. Avoid one-size-fits-all approaches. Focus on maintaining engagement without overwhelming the client. The goal is to keep clients supported at every stage while promoting independence over time.', 'Add decision rules.', 'Personalize accountability', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet11', '394df30ac9072c9cffea39bfa98cbf616193382011d2360fb86eb53da4bddb8e',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a5ebc1e98f8d4279', 'delivery-daily-accountability-systems-accountability-score-system', 'Accountability Score System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '12', 'Act as a performance coach. Create a scoring system using [habits], [tracking method], and [goals]. Assign scores to daily actions such as nutrition adherence, workouts, and steps. Define clear criteria for scoring and benchmarks for performance levels. Ensure the system is simple, motivating, and easy to understand. Avoid overly complex scoring. Focus on clarity and engagement. The system should help clients visualize progress and stay accountable.', 'Add dashboard format.', 'Quantify progress', 'System',
  'TXT/PDF', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '2018e4cbc90f508bae500cf4117fb246f2200afccc3c1af050aadc062540f85c',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3238811bb2c747fa', 'delivery-daily-accountability-systems-daily-accountability-dashboard', 'Daily Accountability Dashboard', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '13', 'Act as a systems expert. Create a dashboard using [metrics], [client data], and [tracking method]. Include key indicators such as adherence, progress, and engagement. Ensure the dashboard is easy to read and provides actionable insights. Avoid cluttered layouts. Focus on clarity and usability. The system should help both coach and client quickly understand performance and take action.', 'Add Google Sheet version.', 'Visualize progress', 'Dashboard',
  'TXT/PDF', '90–120 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet11', '03dcd3422eb04b04e62e147562d2e8ca7970907a4a8b2c2b8e063d44a3eaf603',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_45903171f61a4baf', 'delivery-daily-accountability-systems-client-engagement-loop', 'Client Engagement Loop', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '14', 'Act as a client experience strategist. Create a daily engagement loop using [client interaction], [feedback], and [follow-up]. Design a system where client responses lead to immediate feedback and further engagement. Ensure the loop keeps clients involved daily without overwhelming them. Avoid repetitive communication. Focus on meaningful interactions that build trust and consistency.', 'Add message flow.', 'Increase engagement', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '0f6e0cc09b438ff18f0893f871d78dc3b7bd607e720b02303cb8f0368358e892',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c87e1e34fb394672', 'delivery-daily-accountability-systems-accountability-escalation-system', 'Accountability Escalation System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '15', 'Act as a transformation coach. Create a system to escalate accountability when clients are not consistent using [low adherence], [behavior patterns], and [communication style]. Define steps such as increased check-ins, stronger messaging, or intervention strategies. Ensure escalation is supportive and not punitive. Avoid aggressive or negative approaches. Focus on helping the client get back on track.', 'Add escalation scripts.', 'Improve adherence', 'System',
  'TXT', '60–90 mins', '5', 'Contextual',
  '₹20K–₹50K', '', 'Sheet11', '5551a331161f9e4f08832583126f9532472609a28a61dab95a9c9d920f15dbae',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fc6f42bf0152454b', 'delivery-daily-accountability-systems-high-touch-daily-support-system', 'High-Touch Daily Support System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '16', 'Act as a premium client experience strategist. Create a high-touch daily support system using [client type], [communication channel], and [service level]. Design structured daily interactions such as check-ins, reminders, and feedback that make the client feel consistently supported. Ensure the system balances responsiveness with efficiency so it does not overwhelm the coach. Include guidelines for timing, tone, and frequency of communication. Avoid excessive messaging. Focus on meaningful, value-driven interactions that improve adherence and engagement. The goal is to create a premium experience that increases client satisfaction and retention.', 'Add daily message templates.', 'Elevate client experience', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Daily',
  '₹20K–₹60K', '', 'Sheet11', '2fb553e684edbafcc0d7aeb82550f8bd66ef9d92c6830a188ca10c81814d8e5d',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_11b7485b672148f7', 'delivery-daily-accountability-systems-predictive-accountability-system', 'Predictive Accountability System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '17', 'Act as a behavioral analyst. Create a system that predicts when a client may miss habits using [past data], [patterns], and [lifestyle]. Identify early warning signs such as declining adherence or inconsistent routines. Design proactive interventions to prevent lapses before they happen. Ensure the system is practical and easy to implement. Avoid overly complex predictive models. Focus on simple, actionable insights that improve consistency. The goal is to shift from reactive to proactive coaching.', 'Add prediction triggers.', 'Prevent drop-offs', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹20K–₹60K', '', 'Sheet11', '30c89849edc24bda9a395a626d32f124291dc4f8c91b4096b1e03dc1cd18dbe9',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_abbf3e54c9284e3c', 'delivery-daily-accountability-systems-personalized-daily-coaching-script', 'Personalized Daily Coaching Script', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '18', 'Act as a transformation coach. Create a daily coaching script using [client data], [goals], and [current progress]. Ensure the message is personalized, motivating, and actionable. Include acknowledgment of progress, guidance for the day, and a clear call to action. Avoid generic messaging. Focus on making the client feel understood and supported. The script should be easy to send and adapt daily.', 'Add 7-day sequence.', 'Improve engagement', 'Script',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet11', '7f9000b16c561db192cdbe28a7b4711fb5bea40bd684885967e5802ebe474b5b',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6f5f730ba9c64839', 'delivery-daily-accountability-systems-habit-consistency-accelerator', 'Habit Consistency Accelerator', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '19', 'Act as a performance coach. Create a system to accelerate habit consistency using [habits], [tracking method], and [client behavior]. Identify key habits that drive results and design methods to reinforce them daily. Include tracking, reminders, and feedback loops. Ensure the system is simple and sustainable. Avoid overloading the client. Focus on building momentum through small wins.', 'Add habit reinforcement ideas.', 'Improve consistency', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet11', '6972bc32c4116a7dcdea9622f98d63c3bfdf5a47af266bd6022725e52fa93f41',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9db01b3f4f834f05', 'delivery-daily-accountability-systems-complete-daily-accountability-system', 'Complete Daily Accountability System', 'delivery', 'Client Delivery & Transformation', 'Daily Accountability Systems', 'pro',
  '20', 'Act as a systems strategist. Create a complete daily accountability system using [client type], [goals], and [service model]. Combine tracking, communication, feedback, and reinforcement into one cohesive workflow. Ensure the system is simple, repeatable, and scalable. Avoid unnecessary complexity. Focus on improving client adherence, engagement, and results. The system should reduce manual workload while maintaining personalization and quality.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet11', 'c6d2651f27a169fd028d09e5ac71e9eb7090c1aa51f4932338e1fad618426f2c',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c9fe7738b39846ab', 'delivery-end-to-end-client-journey-mapping-end-to-end-client-journey-map', 'End-to-End Client Journey Map', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'free',
  '1', 'Act as a transformation strategist. Create a complete client journey map using [client type], [starting point], and [desired outcome]. Break the journey into structured stages such as onboarding, adaptation, momentum, plateau, and transformation. Define what the client experiences in each stage, including physical, behavioral, and emotional changes. Include expected challenges and coaching interventions required at each phase. Ensure the journey is clear, predictable, and easy to communicate to clients. Avoid vague descriptions. Focus on building a structured transformation pathway that increases trust, clarity, and perceived value of your service.', 'Add visual flow version.', 'Map full journey', 'Map',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet12', 'df1f1ddfda517269d509fd0a76f6554052be64fc6d036562c07d17b9ca2a8976',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_14d1982045104da0', 'delivery-end-to-end-client-journey-mapping-stage-wise-transformation-planner', 'Stage-Wise Transformation Planner', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'free',
  '2', 'Act as a coaching expert. Create a stage-wise transformation plan using [goal], [timeline], and [client profile]. Define what needs to happen in each stage such as habit building, fat loss acceleration, or lifestyle stabilization. Include clear actions, expected outcomes, and measurable indicators for each phase. Ensure the progression feels logical and achievable. Avoid unrealistic jumps between stages. Focus on building a smooth transition from beginner to advanced levels of transformation. The plan should help both coach and client understand what to expect and how to progress systematically.', 'Add milestone tracking sheet.', 'Structure transformation', 'Plan',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet12', 'aa5653b7c8c1309602216166214decf1ea8d04d4aea90b8c4c02e9eeb1556519',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fbe782bf43a04cc5', 'delivery-end-to-end-client-journey-mapping-client-stage-identification-framework', 'Client Stage Identification Framework', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'starter',
  '3', 'Act as a client success strategist. Create a framework to identify a client’s current stage using [client data], [behavior patterns], and [progress]. Define clear criteria for each stage of the journey. Include indicators such as adherence levels, consistency, mindset, and physical results. Ensure the framework is simple and easy to apply during check-ins. Avoid confusion between stages. Focus on clarity and usability. The goal is to enable better coaching decisions and personalized interventions based on where the client currently is in their journey.', 'Add decision tree.', 'Identify stage', 'Framework',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Sheet12', 'b16d350e42c8b0b8ecbdb38381d54dc5d6b47fff09b40ef3b30e497921b479f3',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_84a8985b6702443a', 'delivery-end-to-end-client-journey-mapping-personalized-transformation-blueprint', 'Personalized Transformation Blueprint', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'starter',
  '4', 'Act as a premium transformation coach. Create a personalized transformation blueprint using [client goals], [current condition], and [constraints]. Outline a step-by-step journey covering nutrition, habits, activity, and mindset. Ensure the plan is realistic and tailored to the individual. Include progression logic and checkpoints. Avoid generic templates. Focus on deep personalization and clarity. The blueprint should feel premium and actionable, helping the client understand exactly how they will achieve their results over time.', 'Add PDF format.', 'Create roadmap', 'Blueprint',
  'TXT/PDF', '120 mins', '5', 'Per client',
  '₹25K–₹75K', '', 'Sheet12', 'e00a07bcb3fcaee736bc0feec4f8a1463a9333a8036884f1677f00763daf751d',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e5b01eacb06c47af', 'delivery-end-to-end-client-journey-mapping-expectation-alignment-system', 'Expectation Alignment System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '5', 'Act as a client experience strategist. Create a system to align expectations using [client goals], [timeline], and [limitations]. Clearly define what results are achievable, how long they will take, and what effort is required. Include scripts or methods to communicate this effectively during onboarding. Ensure the system builds trust and prevents misunderstandings later. Avoid overpromising or vague commitments. Focus on transparency and clarity. The goal is to create realistic expectations that improve client satisfaction and long-term retention.', 'Add onboarding script.', 'Set expectations', 'System',
  'TXT', '60–90 mins', '5', 'Per client',
  '₹20K–₹50K', '', 'Sheet12', 'e5a38e1dbc760210ba2ff23fb826382d91dacbc534033a45e85fd7b58e488d11',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c6749d249b624429', 'delivery-end-to-end-client-journey-mapping-adaptive-transformation-system', 'Adaptive Transformation System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '6', 'Act as a high-level transformation strategist. Create an adaptive client journey system using [client progress], [behavior patterns], and [feedback]. Design a framework that adjusts the client’s path based on real-time data such as adherence, motivation, and results. Include rules for when to accelerate, maintain, or slow down the plan. Ensure the system remains structured but flexible. Avoid rigid plans that fail to adapt to real-life changes. Focus on maintaining progress while personalizing the journey. The goal is to create a dynamic system that improves results and client satisfaction by responding intelligently to individual needs and circumstances.', 'Add decision rules.', 'Personalize journey', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet12', '0de21d4c8996903c68cf408412ace7235ee8c409bc20bd7d71edacc03ef00e4c',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3fc45881707c435f', 'delivery-end-to-end-client-journey-mapping-plateau-navigation-framework', 'Plateau Navigation Framework', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '7', 'Act as a fat loss and behavior expert. Create a framework to navigate client plateaus using [client data], [progress stagnation], and [current plan]. Identify different types of plateaus such as behavioral, physiological, or psychological. Provide clear strategies to overcome each type, including adjustments in nutrition, activity, or mindset. Ensure the framework is practical and easy to implement. Avoid drastic or unsustainable changes. Focus on small, strategic interventions that restart progress. The goal is to maintain momentum and prevent frustration during stagnant phases of the journey.', 'Add quick-action checklist.', 'Handle plateaus', 'Framework',
  'TXT', '90–120 mins', '5', 'Contextual',
  '₹20K–₹60K', '', 'Sheet12', '999dc8211f042e8189dfcba7edf1e73e3487c8b574d9c6971423b73c00092098',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7f526e344dfa4143', 'delivery-end-to-end-client-journey-mapping-client-evolution-mapping-system', 'Client Evolution Mapping System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '8', 'Act as a transformation coach. Create a system to map how a client evolves over time using [starting point], [progress milestones], and [behavior changes]. Track shifts in habits, mindset, and results across different stages of the journey. Include visual or structured representation of evolution. Ensure the system is easy to update and interpret. Avoid overly complex tracking. Focus on clarity and storytelling of progress. The goal is to help both coach and client see transformation beyond just numbers, reinforcing motivation and long-term engagement.', 'Add visual chart version.', 'Track evolution', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet12', 'f86b9392f4621fcd607e5eccc3816ba08ba552dbf7db0ef16ba47b9e22a713f5',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a96f13b5ff8f44a7', 'delivery-end-to-end-client-journey-mapping-stage-transition-optimization', 'Stage Transition Optimization', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '9', 'Act as a client success strategist. Create a system to manage transitions between stages using [current stage], [next stage], and [client readiness]. Define criteria that indicate when a client is ready to move forward. Include transition strategies that make the shift smooth and motivating. Ensure the system avoids premature progression or stagnation. Focus on timing and readiness. Avoid rigid timelines. The goal is to ensure clients move through stages efficiently while maintaining confidence and consistency.', 'Add transition checklist.', 'Optimize progression', 'System',
  'TXT', '90 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet12', '9f36c503b8d4722a4af68c7c2164d812203c049838e808d25122058ea47fd2b5',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_52aed82be84e4ed2', 'delivery-end-to-end-client-journey-mapping-journey-personalization-engine', 'Journey Personalization Engine', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '10', 'Act as a premium coaching strategist. Create a personalization engine using [client data], [preferences], and [constraints]. Define how different variables such as lifestyle, schedule, and motivation levels influence the client journey. Include methods to tailor plans, communication, and interventions dynamically. Ensure the system is scalable for multiple clients. Avoid overcomplication. Focus on delivering highly personalized experiences efficiently. The goal is to combine personalization with scalability to create a premium yet manageable coaching system.', 'Add segmentation model.', 'Scale personalization', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet12', 'bd0c15d3fe258a06cad0c3782c68592f2c0a7ec6a1f705ae2faeff91587b2cb6',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2adc365ec75d4571', 'delivery-end-to-end-client-journey-mapping-emotional-journey-mapping', 'Emotional Journey Mapping', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '11', 'Act as a transformation psychologist. Create an emotional journey map using [client type], [starting struggles], and [desired outcome]. Define how the client feels at each stage of the transformation such as confusion, motivation, frustration, and confidence. Identify emotional triggers, setbacks, and breakthroughs. Provide strategies to support the client emotionally at each stage. Ensure the journey feels realistic and relatable. Avoid generic emotional descriptions. Focus on deep understanding of client experience. The goal is to improve coaching effectiveness by aligning support with emotional needs throughout the journey.', 'Add emotional triggers list.', 'Map emotions', 'Map',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet12', '0687a1a6cd1d6ce35668f62a8917db1607dab0c5082d1fbfc7e73243e827c902',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7567f30af24043a7', 'delivery-end-to-end-client-journey-mapping-client-motivation-curve-system', 'Client Motivation Curve System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '12', 'Act as a behavior expert. Create a system to map client motivation levels using [timeline], [progress], and [behavior patterns]. Identify when motivation is high, drops, and recovers. Provide strategies to maintain or boost motivation during low phases. Ensure the system is practical and easy to apply. Avoid overly complex tracking. Focus on predicting and managing motivation levels to improve consistency and results.', 'Add motivation boosters.', 'Manage motivation', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet12', '9ed03894ee7b827b997188277147105c29047992042942b4ad63dc80105fe8f8',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_bfc2d1d91f9243e3', 'delivery-end-to-end-client-journey-mapping-retention-pathway-design', 'Retention Pathway Design', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '13', 'Act as a client success strategist. Create a retention pathway using [client journey], [engagement levels], and [goals]. Identify key points where clients are likely to drop off. Design interventions to keep clients engaged and progressing. Include strategies such as milestone celebrations, personalized support, and communication touchpoints. Ensure the system is proactive and not reactive. Avoid generic retention tactics. Focus on building long-term relationships.', 'Add retention checklist.', 'Improve retention', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet12', '2a3dc8352c4c6bcdd22a96a737474a55f76890c5bc7b368b0899dba826b9fa30',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0db9f2bae98b48ce', 'delivery-end-to-end-client-journey-mapping-client-experience-enhancement-system', 'Client Experience Enhancement System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '14', 'Act as a premium service designer. Create a system to enhance client experience using [touchpoints], [communication], and [service quality]. Identify all points where the client interacts with the service. Improve each touchpoint to make it more engaging, clear, and valuable. Ensure consistency across the entire journey. Avoid disjointed experiences. Focus on creating a smooth, premium, and memorable experience that increases satisfaction and loyalty.', 'Add touchpoint audit.', 'Improve experience', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet12', 'e675c5dded0b7198a5baa10d48295491558f15ea06a5333680727e786cef6f20',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_db3661faebed456f', 'delivery-end-to-end-client-journey-mapping-transformation-story-builder', 'Transformation Story Builder', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '15', 'Act as a storytelling strategist. Create a system to document and present client transformation stories using [client journey], [results], and [milestones]. Structure the story to highlight struggles, progress, and outcomes. Ensure authenticity and relatability. Avoid exaggerated claims. Focus on creating compelling narratives that can be used for testimonials and marketing. The goal is to showcase real transformations while inspiring potential clients.', 'Add testimonial format.', 'Build social proof', 'Story',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet12', 'eaebde98e85b60ed37ec51d9c3e8376f3d6e77c325b8905b22afe31df2b613ff',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_54183d2266754a87', 'delivery-end-to-end-client-journey-mapping-omnichannel-client-journey-system', 'Omnichannel Client Journey System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '16', 'Act as a client experience strategist. Create an omnichannel client journey system using [client touchpoints], [platforms], and [communication channels]. Map how the client interacts across WhatsApp, email, calls, and content. Ensure consistency in messaging, tone, and experience across all platforms. Identify gaps where the experience may feel disconnected. Provide solutions to create a seamless and unified journey. Avoid fragmented communication. Focus on creating a cohesive experience that strengthens trust and engagement. The goal is to ensure clients feel supported regardless of the platform they interact on.', 'Add platform-wise flow.', 'Unify experience', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet12', '043b1dedfb6715098b522816da5b79e5d407a5da3591e92ad591b10df5f5ebf7',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b9aa7f30d44d4e1b', 'delivery-end-to-end-client-journey-mapping-transformation-risk-management-system', 'Transformation Risk Management System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '17', 'Act as a transformation strategist. Create a system to identify and manage risks using [client data], [behavior patterns], and [journey stage]. Identify potential risks such as drop-offs, plateaus, or lack of motivation. Provide preventive strategies and intervention plans. Ensure the system is proactive rather than reactive. Avoid overly complex risk models. Focus on practical insights that help maintain progress and engagement.', 'Add risk checklist.', 'Prevent failures', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet12', '5ad0c4d7428be868e83fa36e03f439c12caa049991ec08a4828a1eacd51c805f',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1a4a91072ad64291', 'delivery-end-to-end-client-journey-mapping-client-segmentation-system', 'Client Segmentation System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '18', 'Act as a business strategist. Create a segmentation system using [client types], [goals], and [behavior]. Group clients into categories based on their needs, progress, and engagement levels. Define how each segment should be handled differently in terms of communication, coaching, and support. Ensure the system is scalable and easy to apply. Avoid over-segmentation. Focus on meaningful categories that improve personalization.', 'Add segmentation examples.', 'Improve personalization', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet12', '2b98151fff6705a71a0498e46283fcda67cb8ed3c2fff7d3bd07dd4eb314b7db',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c7469f6e38eb4fba', 'delivery-end-to-end-client-journey-mapping-journey-optimization-system', 'Journey Optimization System', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '19', 'Act as a systems expert. Create a system to continuously optimize the client journey using [feedback], [results], and [client experience]. Include methods to collect feedback, analyze performance, and implement improvements. Ensure the system is simple and repeatable. Avoid overly complex analytics. Focus on continuous improvement and refinement. The goal is to enhance results, experience, and efficiency over time.', 'Add feedback form.', 'Improve systems', 'System',
  'TXT', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet12', 'b221103ac21560a63c7136cea424d912e8c955368e5ede9a107f8c44e792a273',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7b2d30099f024262', 'delivery-end-to-end-client-journey-mapping-complete-client-journey-blueprint', 'Complete Client Journey Blueprint', 'delivery', 'Client Delivery & Transformation', 'End-to-End Client Journey Mapping', 'pro',
  '20', 'Act as a high-level strategist. Create a complete client journey blueprint using [client type], [goals], and [service model]. Combine all stages, systems, and touchpoints into one cohesive framework. Ensure the blueprint is simple, scalable, and easy to implement. Avoid unnecessary complexity. Focus on clarity, structure, and execution. The system should provide a clear roadmap for delivering consistent, high-quality transformation experiences.', 'Break into SOP steps.', 'Build full system', 'Blueprint',
  'PDF', '120–150 mins', '5', 'Monthly',
  '₹30K–₹1L', '', 'Sheet12', '10afcd1587a0f258814b292c556a04e42c23aeca1a02772334ad09b988185268',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9abd7176f8f8484c', 'delivery-result-tracking-transformation-proof-client-result-tracking-system', 'Client Result Tracking System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'free',
  '1', 'Act as a performance tracking expert. Create a result tracking system using [client metrics], [frequency], and [goals]. Identify key indicators such as weight, measurements, energy levels, adherence, and habits. Design a simple and structured way to collect and analyze this data regularly. Ensure the system is easy for both coach and client to use. Avoid complex tracking methods. Focus on clarity, consistency, and actionable insights. The goal is to make progress visible and measurable over time, helping both coach and client make informed decisions.', 'Add tracking template.', 'Track results', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Sheet13', '3368c5fb0d0d383184a8bbd7fd6f0a2ccc6a649108bb1feaecdaf8d29553864d',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6967540ec5524cd9', 'delivery-result-tracking-transformation-proof-transformation-proof-generator', 'Transformation Proof Generator', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'free',
  '2', 'Act as a storytelling strategist. Create a transformation proof format using [client journey], [before state], and [after results]. Structure the proof to highlight struggles, actions taken, and outcomes achieved. Ensure authenticity and clarity. Avoid exaggerated claims. Focus on making the transformation relatable and inspiring. The output should be usable for marketing and client motivation.', 'Add visual format.', 'Build social proof', 'Story',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet13', 'd292ceb6fdafa7ffa0aea501956e7d64a7d7b7458cdfdba409b2f2f0504e7394',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e50ad38da0494366', 'delivery-result-tracking-transformation-proof-before-after-documentation-system', 'Before-After Documentation System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'starter',
  '3', 'Act as a systems expert. Create a system to document before and after results using [photos], [measurements], and [timeline]. Define clear guidelines for capturing consistent and accurate data. Ensure privacy and consent are maintained. Avoid inconsistent documentation. Focus on clarity and credibility. The system should make it easy to showcase transformations professionally.', 'Add consent form.', 'Document results', 'System',
  'TXT/PDF', '90 mins', '5', 'Monthly',
  '₹15K–₹40K', '', 'Sheet13', '53bbf997932b657420104b70b33f6447de71ff2102726a8aabf47840ef198886',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ddef340a83d04d4f', 'delivery-result-tracking-transformation-proof-progress-visualization-dashboard', 'Progress Visualization Dashboard', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'starter',
  '4', 'Act as a data visualization expert. Create a dashboard using [client data], [metrics], and [tracking method]. Include charts or visual representations of progress such as weight trends, adherence scores, and milestones. Ensure the dashboard is simple and easy to understand. Avoid cluttered designs. Focus on clarity and usability. The goal is to make progress visible and motivating.', 'Add Google Sheet version.', 'Visualize progress', 'Dashboard',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet13', '569c221639f243b632cf676e493013eea1d910b9f4770fa70fdac2e5df9cef09',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_57f4bf54560249bf', 'delivery-result-tracking-transformation-proof-weekly-progress-summary-generator', 'Weekly Progress Summary Generator', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '5', 'Act as a client experience expert. Create a weekly progress summary using [client data], [wins], and [challenges]. Highlight key achievements, areas for improvement, and next steps. Ensure the summary is clear, motivating, and easy to understand. Avoid technical jargon. Focus on clarity and engagement. The goal is to keep clients informed and motivated.', 'Add visual summary.', 'Improve clarity', 'Summary',
  'TXT/PDF', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Sheet13', '37f970af2d8796bfa997378a197b11b093b5d9d82566b07066dfb9e6f103b78b',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f059b9e270254bb8', 'delivery-result-tracking-transformation-proof-testimonial-extraction-system', 'Testimonial Extraction System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '6', 'Act as a client success strategist. Create a system to extract high-quality testimonials using [client journey], [results], and [experience]. Design structured questions that help clients articulate their transformation, including struggles, process, and outcomes. Ensure the questions are simple, natural, and easy to answer. Avoid generic questions that produce weak responses. Focus on capturing emotional and result-driven insights. The goal is to create powerful testimonials that are authentic, relatable, and conversion-focused.', 'Add questionnaire template.', 'Capture testimonials', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet13', '6b5972cbc05448c06b20fdab5b8782f7392aae5a6f0c025d868e6372c3ea7404',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a29ad8d9de624831', 'delivery-result-tracking-transformation-proof-case-study-builder', 'Case Study Builder', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '7', 'Act as a storytelling and marketing expert. Create a detailed case study using [client profile], [problem], [process], and [results]. Structure the case study into sections such as background, challenges, approach, and outcomes. Ensure clarity and logical flow. Avoid overly technical language. Focus on storytelling and credibility. The goal is to create a compelling narrative that demonstrates expertise and builds trust with potential clients.', 'Add PDF format.', 'Build authority', 'Case Study',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet13', 'ba663f6e24e1ce4edc2f7f2799ed9afcc1c62d117158397b3e26e7a2cc608722',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a07fe04a3f964b05', 'delivery-result-tracking-transformation-proof-social-proof-content-generator', 'Social Proof Content Generator', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '8', 'Act as a content strategist. Create multiple social proof content pieces using [testimonial], [platform], and [audience]. Convert one transformation story into formats such as reels, posts, captions, and stories. Ensure each piece is optimized for engagement. Avoid simple repetition. Focus on adapting the message for each platform. The goal is to maximize visibility and impact of client results.', 'Add reel script.', 'Repurpose proof', 'Content',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet13', 'f65266b9e2837b53977c87656ea317e915f8796aac0780a687c8af35acf6e7a6',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_1e8b3480557a4194', 'delivery-result-tracking-transformation-proof-transformation-timeline-visualizer', 'Transformation Timeline Visualizer', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '9', 'Act as a data visualization expert. Create a system to visually represent transformation using [timeline], [metrics], and [milestones]. Design clear visuals such as charts or progress bars that show change over time. Ensure the visuals are easy to understand and engaging. Avoid cluttered designs. Focus on clarity and storytelling. The goal is to make transformation visually compelling and easy to communicate.', 'Add chart examples.', 'Visual storytelling', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet13', 'f40f552618eb9033be016daeba27c738cab9559de1ea904e8379ace97e1a2213',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_81d29c2c6e89428a', 'delivery-result-tracking-transformation-proof-proof-to-conversion-framework', 'Proof-to-Conversion Framework', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '10', 'Act as a conversion strategist. Create a framework to convert transformation proof into leads using [testimonial], [platform], and [CTA]. Structure how proof is presented along with a strong call-to-action. Ensure the transition from proof to offer feels natural and not forced. Avoid aggressive selling. Focus on building trust and encouraging action. The goal is to turn results into consistent lead generation.', 'Add CTA variations.', 'Convert proof to leads', 'Framework',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet13', 'c9cb3eb6fc58df7db4aacecd019809d923e39c69e8653f3b01550aef00c91de1',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_02f1c7fae0404c70', 'delivery-result-tracking-transformation-proof-authority-proof-positioning-system', 'Authority Proof Positioning System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '11', 'Act as a branding strategist. Create a system to position client results as authority-building assets using [client transformations], [platform], and [audience]. Structure how results are presented to highlight expertise, consistency, and credibility. Include storytelling, data points, and emotional connection. Ensure the system avoids exaggerated claims and focuses on authenticity. The goal is to establish strong authority through real client outcomes.', 'Add content examples.', 'Build authority', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet13', '5d47534496b048054e5b6d06b06e0d475afd103b95918e5315c3fbac0e43fe13',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_388b20e32de04c51', 'delivery-result-tracking-transformation-proof-premium-testimonial-framework', 'Premium Testimonial Framework', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '12', 'Act as a premium brand strategist. Create a framework for high-quality testimonials using [client journey], [results], and [experience]. Define structure, tone, and key elements that make testimonials compelling and credible. Ensure the framework captures both emotional and logical aspects of transformation. Avoid generic praise. Focus on depth and specificity. The goal is to create testimonials that enhance brand perception and trust.', 'Add testimonial examples.', 'Improve brand perception', 'Framework',
  'TXT', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet13', '911068dbfec699a83792eeb90138f5ae045d09fec4ec9e628943fe7969dac454',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ffb732c43ed04805', 'delivery-result-tracking-transformation-proof-transformation-portfolio-builder', 'Transformation Portfolio Builder', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '13', 'Act as a marketing expert. Create a system to build a transformation portfolio using [client results], [formats], and [platforms]. Organize transformations into a structured portfolio that can be used for marketing and sales. Ensure clarity, consistency, and visual appeal. Avoid clutter. Focus on presenting results in a professional and engaging way. The goal is to showcase multiple transformations to build credibility and attract clients.', 'Add portfolio structure.', 'Showcase results', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet13', 'f793849bccf8ff0cac5c1b9b40aa71409520e5136d105e9ced07a531d26c890b',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9dc79f0e66774609', 'delivery-result-tracking-transformation-proof-result-based-branding-strategy', 'Result-Based Branding Strategy', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '14', 'Act as a brand strategist. Create a branding strategy using [client results], [positioning], and [audience]. Define how results are used to shape brand identity, messaging, and content. Ensure consistency across platforms. Avoid generic branding. Focus on using real transformations to differentiate the brand. The goal is to build a strong, results-driven brand that attracts ideal clients.', 'Add messaging examples.', 'Build brand identity', 'Strategy',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹25K–₹75K', '', 'Sheet13', '726e702ff96318fe9fe0c32ba615790be06656aa7cfd0260f9707e269dc845c1',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_43d85d5ed02e4061', 'delivery-result-tracking-transformation-proof-high-impact-result-story-system', 'High-Impact Result Story System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '15', 'Act as a storytelling expert. Create a system to craft high-impact result stories using [client journey], [struggles], and [outcomes]. Structure the story to capture attention, build connection, and demonstrate transformation. Ensure authenticity and relatability. Avoid exaggerated storytelling. Focus on emotional and logical appeal. The goal is to create stories that inspire and convert.', 'Add story templates.', 'Improve storytelling', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹60K', '', 'Sheet13', '0a28c6b48c4c4487d5829ce762bd7900f82e4a365b9be65b0428b4380325bc85',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0ac9edea60864ce6', 'delivery-result-tracking-transformation-proof-omnichannel-proof-distribution-sys', 'Omnichannel Proof Distribution System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '16', 'Act as a marketing strategist. Create a system to distribute client transformation proof across multiple platforms using [content], [platforms], and [audience]. Adapt proof into different formats such as reels, posts, stories, and emails. Ensure consistency in messaging while optimizing for each platform. Avoid duplication. Focus on maximizing reach and engagement. The goal is to ensure every transformation is leveraged fully for visibility and lead generation.', 'Add platform plan.', 'Distribute proof', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet13', '92032d87ffd9f9a819a8e5eedce02ed0fcf08044cf4e484935354a4316c42f79',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_08ab56677d8a4674', 'delivery-result-tracking-transformation-proof-proof-performance-optimization-sys', 'Proof Performance Optimization System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '17', 'Act as a data-driven strategist. Create a system to analyze and optimize proof content using [engagement data], [conversion rates], and [platform]. Identify which proof formats perform best and why. Provide actionable improvements. Ensure the system is simple and repeatable. Avoid complex analytics. Focus on improving performance and ROI.', 'Add KPI list.', 'Improve performance', 'System',
  'TXT', '90–120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet13', 'fdcbd74c4e3f61f7a82983a401d0f2e803971e5c803dff2fd42d63134b5a3480',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_054d60aea8d740ce', 'delivery-result-tracking-transformation-proof-client-success-archive-system', 'Client Success Archive System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '18', 'Act as a systems expert. Create a system to store and organize client success stories using [data], [formats], and [categories]. Ensure easy retrieval and reuse of content. Include tagging, categorization, and storage methods. Avoid cluttered systems. Focus on efficiency and usability. The goal is to build a long-term asset library of transformations.', 'Add tagging system.', 'Organize proof', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Sheet13', 'e39231c5275cad49cfae05573f4bd3169718fdd0d441339fd4ca37c3387c4918',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7da0be0c66df4b53', 'delivery-result-tracking-transformation-proof-conversion-focused-proof-funnel', 'Conversion-Focused Proof Funnel', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '19', 'Act as a funnel strategist. Create a funnel using [proof content], [platform], and [offer]. Design how proof leads into engagement and conversion. Include CTAs, transitions, and follow-ups. Ensure the funnel is simple and effective. Avoid overly complex steps. Focus on turning proof into leads and clients.', 'Add funnel example.', 'Convert proof', 'Funnel',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet13', '1eccfe6b3dd901a09fd1b7ceb3e1a6788bbffb8610a3d33b55da514db5071a2b',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_966c950848b741e0', 'delivery-result-tracking-transformation-proof-complete-proof-to-revenue-system', 'Complete Proof-to-Revenue System', 'delivery', 'Client Delivery & Transformation', 'Result Tracking & Transformation Proof', 'pro',
  '20', 'Act as a high-level strategist. Create a complete system that turns client results into revenue using [client transformations], [platforms], and [offers]. Combine tracking, storytelling, distribution, and conversion into one cohesive framework. Ensure the system is simple, scalable, and effective. Avoid unnecessary complexity. Focus on clarity and execution. The goal is to build a system where results consistently generate new clients and revenue.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Monthly',
  '₹30K–₹1L', '', 'Sheet13', 'e0290d3326aa0bc852d526d0d06702879ce1ac09119f165b1efb62187d5bf253',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_91dc6620bc8a495b', 'productivity-content-consistency-systems-daily-content-system-builder', 'Daily Content System Builder', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'free',
  '1', 'Act as a productivity strategist for a nutrition business. Create a daily content creation system using [content type], [available time], and [platforms]. Break the process into ideation, creation, editing, and publishing. Ensure each step is time-bound and easy to execute. Include batching and reuse strategies to reduce effort. Avoid complex workflows. Focus on simplicity and consistency. The system should help create content daily without burnout or decision fatigue.', 'Add 60-minute version.', 'Build consistency', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', 'b8b5e8c66cf27296e2c7d0e76d7fb9ffd9898013006eefec152a31a005504261',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_44d8aa6f5e5c4a0f', 'productivity-content-consistency-systems-content-batching-system', 'Content Batching System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'free',
  '2', 'Act as a content strategist. Create a batching system using [content types], [frequency], and [time blocks]. Plan how to create multiple pieces of content in one session. Include preparation, execution, and scheduling phases. Ensure the system reduces daily workload. Avoid overcomplication. Focus on efficiency and output. The goal is to create more content in less time.', 'Add weekly plan.', 'Increase efficiency', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', 'e882a0243472b44498365ca5a73f81598b77cbdfc79a5cf4ab43a5d0a8baa7ca',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a8bc257018a04f29', 'productivity-content-consistency-systems-content-consistency-tracker', 'Content Consistency Tracker', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '3', 'Act as a productivity coach. Create a tracking system using [posting frequency], [platforms], and [goals]. Track consistency, performance, and gaps. Ensure the system is simple and motivating. Avoid complex metrics. Focus on visibility and accountability. The goal is to maintain consistency over time.', 'Add dashboard version.', 'Track consistency', 'System',
  'TXT/PDF', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', '157eed56c5f4949470298db32de524fab938ba6278e767cced2e908807ce7875',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_03ac4e87301b4992', 'productivity-content-consistency-systems-content-habit-builder', 'Content Habit Builder', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '4', 'Act as a behavior expert. Create a system to build a daily content habit using [routine], [triggers], and [goals]. Identify cues and routines that make content creation automatic. Ensure the system is simple and sustainable. Avoid relying on motivation. Focus on habit formation. The goal is to make content creation effortless over time.', 'Add habit stacking version.', 'Build habit', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', '2a3f090c31663a2b71d154bad970c03dac146a581c9425f01d3f6a432bc02a79',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_33eeeb465fea4873', 'productivity-content-consistency-systems-content-planning-system', 'Content Planning System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '5', 'Act as a strategist. Create a planning system using [content pillars], [frequency], and [platforms]. Structure weekly or monthly plans. Ensure balance between educational, storytelling, and conversion content. Avoid overplanning. Focus on clarity and execution. The goal is to remove decision fatigue and maintain consistency.', 'Add calendar template.', 'Plan content', 'Plan',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', '679424607c6296a74ba1e2c0fe7d408257f6927f984e2aea94161ff43efb3ca4',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_496f705fb7464878', 'productivity-content-consistency-systems-low-energy-content-system', 'Low-Energy Content System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '6', 'Act as a productivity coach. Create a content system for low-energy days using [content type], [available time], and [energy level]. Design simplified content formats such as quick tips, short captions, or repurposed content. Ensure the system allows consistent posting even on busy or low-motivation days. Avoid skipping content completely. Focus on maintaining visibility with minimal effort. The goal is to ensure consistency regardless of energy levels or workload.', 'Add 10 low-effort content ideas.', 'Maintain consistency', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', '6a7f34a429eb03286dcf596863dd3e9929f26da24b15ce6bdbb1dcef6bf9f30d',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ca1fe46f0e3146d9', 'productivity-content-consistency-systems-content-repurposing-consistency-system', 'Content Repurposing Consistency System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '7', 'Act as a content strategist. Create a system to maintain consistency through repurposing using [existing content], [platforms], and [frequency]. Identify how one piece of content can be reused across multiple days or formats. Ensure the system reduces the need for constant new ideas. Avoid duplication. Focus on transformation and adaptation. The goal is to maintain output while reducing effort.', 'Add repurposing workflow.', 'Reduce effort', 'System',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', '65f0cdfab3266200934dae522750824cf14b604bdb8c8dd53bfa1c9295dca219',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b98ef8dd8f144899', 'productivity-content-consistency-systems-anti-burnout-content-workflow', 'Anti-Burnout Content Workflow', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '8', 'Act as a performance coach. Create a workflow to prevent burnout using [content frequency], [workload], and [schedule]. Balance content creation with rest and recovery. Include batching, breaks, and flexible scheduling. Ensure the system is sustainable long-term. Avoid overworking. Focus on maintaining consistency without exhaustion.', 'Add weekly schedule.', 'Prevent burnout', 'Workflow',
  'TXT/PDF', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', '6cc7dab89fd8293c7d1cd4def3c1b62a3257c98bc9ba14e4ac10dee5f38fcb1e',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_94dbc103f7ee4c7a', 'productivity-content-consistency-systems-content-execution-checklist', 'Content Execution Checklist', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '9', 'Act as a productivity expert. Create a simple checklist using [content type], [platform], and [process]. Include steps such as idea validation, creation, editing, and posting. Ensure the checklist is quick and easy to follow. Avoid complexity. Focus on execution speed and consistency.', 'Add printable version.', 'Improve execution', 'Checklist',
  'TXT/PDF', '45–60 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', 'ae137049b1a976ad0ca5e06a34b6ef75469e333c2cd4b17da8e6d749fd954990',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_af23815a64e7479a', 'productivity-content-consistency-systems-content-momentum-system', 'Content Momentum System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '10', 'Act as a high-performance coach. Create a system to build and maintain momentum using [content frequency], [goals], and [tracking]. Include streak tracking, small wins, and reinforcement strategies. Ensure the system motivates consistent action. Avoid relying on motivation alone. Focus on building habits and momentum.', 'Add streak tracker.', 'Build momentum', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', 'e605e23eff6a66f0db8d0266d850d0a0794fa7ab4b59b8584fafbbf629eb291d',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e9649d25594f4e7a', 'productivity-content-consistency-systems-identity-based-content-system', 'Identity-Based Content System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '11', 'Act as a high-performance coach. Create an identity-based system using [current identity], [desired identity], and [content goals]. Define the behaviors, routines, and mindset required to become a consistent content creator. Include daily actions that reinforce this identity. Ensure the system focuses on small, repeatable actions. Avoid relying on motivation. Focus on identity-driven consistency. The goal is to make content creation a natural part of who the user is rather than something they force themselves to do occasionally.', 'Add identity reinforcement routine.', 'Build identity', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', '1231e020a5baa1d8ba2cbcc86299e732019c816364fe7cd63278acd54dd89e39',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_a60aaa6d3e644070', 'productivity-content-consistency-systems-discipline-framework-for-content', 'Discipline Framework for Content', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '12', 'Act as a performance coach. Create a discipline framework using [content frequency], [goals], and [constraints]. Include systems to ensure content is created and posted regardless of mood or motivation. Define rules, boundaries, and non-negotiables. Ensure the system is practical and sustainable. Avoid extreme discipline methods. Focus on consistency and execution.', 'Add daily rules.', 'Build discipline', 'Framework',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', '74bd7fae1117dab1c98ccb743dac034fca831ae25053df06ec82c461b0e13055',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f5a9a0ba876d44c6', 'productivity-content-consistency-systems-content-accountability-system', 'Content Accountability System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '13', 'Act as a productivity strategist. Create an accountability system using [tracking method], [goals], and [frequency]. Include ways to track progress, review consistency, and maintain responsibility. Ensure the system is simple and easy to maintain. Avoid overly complex tracking. Focus on visibility and accountability.', 'Add accountability partner version.', 'Improve consistency', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', '545c2bbec879fdcc893cd6dc07074190cc85634bda7aa240fb9f88c3cb9e81cd',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_545bd0db90fe493c', 'productivity-content-consistency-systems-consistency-reinforcement-system', 'Consistency Reinforcement System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '14', 'Act as a behavior expert. Create a system to reinforce consistency using [content streak], [progress], and [goals]. Include rewards, tracking, and feedback loops. Ensure the system builds motivation and momentum. Avoid generic rewards. Focus on meaningful reinforcement that supports long-term consistency.', 'Add reward ideas.', 'Reinforce habit', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Productivity & Personal Excelle', 'e91e3f533c6527e35926b421b1dffc16407d8e117c982132815134f2e90c0694',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_744ea6e866954245', 'productivity-content-consistency-systems-long-term-content-consistency-plan', 'Long-Term Content Consistency Plan', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '15', 'Act as a strategic planner. Create a long-term plan using [content goals], [timeline], and [capacity]. Define how to maintain consistency over months or years. Include phases, milestones, and adjustments. Ensure the plan is realistic and adaptable. Avoid rigid planning. Focus on sustainability and growth.', 'Add milestone tracker.', 'Sustain long-term output', 'Plan',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹20K–₹60K', '', 'Productivity & Personal Excelle', '46808eaf470c1e15e612d8469c72aaa929d816b923b662938cb0c69d05696a1f',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ec153cbf3b8a4c58', 'productivity-content-consistency-systems-content-system-automation', 'Content System Automation', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '16', 'Act as a systems strategist. Create a system to automate content consistency using [tools], [platforms], and [frequency]. Identify steps that can be automated such as scheduling, reminders, and repurposing. Ensure the system reduces manual effort while maintaining quality. Keep it simple and reliable. Avoid overly technical setups. Focus on efficiency and consistency. The goal is to maintain regular posting without daily manual effort.', 'Add tool stack.', 'Automate consistency', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Productivity & Personal Excelle', '1d2de4d4c028ab4d8ba3e6b90c4120bb94e45ee64f3f1f34a2c3f01307b5c5c0',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_85d1129d1f994e37', 'productivity-content-consistency-systems-minimum-viable-content-system', 'Minimum Viable Content System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '17', 'Act as a productivity coach. Create a minimum viable content system using [content type], [time], and [platform]. Define the simplest version of content that can be created daily. Ensure the system removes friction and makes posting easy. Avoid perfectionism. Focus on execution and consistency. The goal is to ensure content is published even on the busiest days.', 'Add examples.', 'Reduce friction', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Productivity & Personal Excelle', 'cad00d7d3006ec7b1769c65130cb0bc7dc12450360a7f96beb6bff2dca997f62',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_dc12d0f58e7c4e1c', 'productivity-content-consistency-systems-content-workflow-optimization', 'Content Workflow Optimization', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '18', 'Act as a systems expert. Create a workflow optimization system using [current workflow], [bottlenecks], and [goals]. Identify inefficiencies and suggest improvements. Include steps to streamline processes and reduce delays. Ensure the system is practical and easy to implement. Avoid unnecessary complexity. Focus on speed and efficiency.', 'Add before-after comparison.', 'Improve efficiency', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Productivity & Personal Excelle', '93efa44e9352dfe99ae679322e74857b71538a7bd2f9c71c6439cd1bfc667cba',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9863eb4bc6204d8b', 'productivity-content-consistency-systems-content-system-scalability-plan', 'Content System Scalability Plan', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '19', 'Act as a business strategist. Create a scalability plan using [content volume], [resources], and [goals]. Identify how to increase output without increasing workload proportionally. Include delegation, automation, and batching strategies. Ensure the plan is realistic and sustainable. Avoid aggressive scaling. Focus on efficient growth.', 'Add team structure.', 'Scale content', 'Plan',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹30K–₹1L', '', 'Productivity & Personal Excelle', '873d2b484f301fe9b64aef93e25ba5af297626ddc691f14165f69697fad52694',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4101913e61514a66', 'productivity-content-consistency-systems-complete-content-consistency-system', 'Complete Content Consistency System', 'productivity', 'Productivity & Personal Excellence', 'Content Consistency Systems', 'pro',
  '20', 'Act as a high-level strategist. Create a complete system using [content goals], [platforms], and [workflow]. Combine planning, execution, tracking, and optimization into one cohesive framework. Ensure the system is simple, repeatable, and scalable. Avoid unnecessary complexity. Focus on clarity and execution. The goal is to build a system that ensures consistent content output long-term.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Daily',
  '₹30K–₹1L', '', 'Productivity & Personal Excelle', 'afadabc6d4884d8b7ccdc34b7dec6beef8835458ea9671049186544a9bd3d7bb',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5b44c5334b554ab4', 'productivity-decision-making-frameworks-high-impact-decision-framework', 'High-Impact Decision Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'free',
  '1', 'Act as a strategic decision-making expert. Create a framework to make high-impact decisions using [decision context], [options], and [goals]. Include criteria such as long-term impact, effort required, risk, and alignment with business growth. Structure the process into clear steps: define the problem, evaluate options, compare outcomes, and decide. Ensure the framework is simple and quick to use. Avoid overly complex analysis. Focus on clarity and speed. The goal is to help make confident decisions that drive results without overthinking or delay.', 'Add scoring matrix.', 'Improve decision quality', 'Framework',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', 'a4a5795385de666e0bd07a48db248a070768354ca4eae05a0f5e8114f322a2c6',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2883441a3dd04b82', 'productivity-decision-making-frameworks-fast-decision-system', 'Fast Decision System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'free',
  '2', 'Act as a productivity strategist. Create a system for making quick decisions using [decision type], [time constraints], and [available data]. Include rules for when to decide quickly and when to analyze deeper. Ensure the system reduces overthinking and speeds up execution. Avoid unnecessary analysis. Focus on clarity and action. The goal is to make timely decisions without sacrificing effectiveness.', 'Add 2-minute decision rule.', 'Speed up decisions', 'System',
  'TXT', '45–60 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet14', '38b71726f9e82175f4e894859c9684216d90a755b37500d1cac991b766820810',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b320c9c723f04d36', 'productivity-decision-making-frameworks-priority-based-decision-engine', 'Priority-Based Decision Engine', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '3', 'Act as a business strategist. Create a system to prioritize decisions using [tasks], [goals], and [impact]. Categorize decisions based on importance and urgency. Ensure the system helps focus on high-value decisions first. Avoid low-impact distractions. Focus on clarity and alignment with goals.', 'Add prioritization matrix.', 'Prioritize decisions', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', 'aaaa91090e11167351e4c28d15c22bc200ea86909ff2c37c2d68ae08d5809ce3',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cab8fbef50a64285', 'productivity-decision-making-frameworks-risk-vs-reward-framework', 'Risk vs Reward Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '4', 'Act as a strategic thinker. Create a framework to evaluate risk versus reward using [decision], [risks], and [potential outcomes]. Identify possible downsides and benefits. Ensure the framework helps make balanced decisions. Avoid excessive risk or over-caution. Focus on calculated decisions.', 'Add risk scoring system.', 'Evaluate risk', 'Framework',
  'TXT', '60–90 mins', '5', 'Contextual',
  '₹20K–₹50K', '', 'Sheet14', 'e9e4fa52bbed63e1d168464939a36137058ef48f9a3cbd71ae6b88ff234f900e',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_53c16f792d2047a2', 'productivity-decision-making-frameworks-decision-simplification-system', 'Decision Simplification System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '5', 'Act as a cognitive performance expert. Create a system to simplify complex decisions using [problem], [options], and [constraints]. Break down decisions into smaller steps. Remove unnecessary complexity. Ensure the system is easy to apply. Avoid over-analysis. Focus on clarity and simplicity.', 'Add example breakdown.', 'Simplify decisions', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet14', 'f3b37f7a394c2e03a97198ce6215983f511a05a4904dacc8d47e55327cb68d76',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9400cfcb626c493a', 'productivity-decision-making-frameworks-second-order-thinking-framework', 'Second-Order Thinking Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '6', 'Act as a strategic thinker. Create a framework using [decision], [short-term outcomes], and [long-term impact]. Analyze not only immediate results but also second-order consequences. Identify how decisions may create ripple effects over time. Ensure the framework helps avoid short-sighted decisions. Avoid overly complex analysis. Focus on practical insights. The goal is to make smarter, long-term decisions that align with growth and sustainability.', 'Add real-life example.', 'Improve long-term thinking', 'Framework',
  'TXT', '90–120 mins', '5', 'Contextual',
  '₹25K–₹75K', '', 'Sheet14', 'c8f2f4082201c1310f6404f7d746385c73f3151de08e5b33b64e75f709143297',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_341932bffa834f17', 'productivity-decision-making-frameworks-decision-confidence-system', 'Decision Confidence System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '7', 'Act as a performance coach. Create a system to increase decision confidence using [decision type], [data], and [experience]. Include steps to validate choices and reduce doubt. Ensure the system helps commit to decisions without constant reconsideration. Avoid over-analysis. Focus on clarity and confidence. The goal is to improve execution by reducing hesitation.', 'Add confidence checklist.', 'Build confidence', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', 'ed1cf7087a2e35decf6f12b0cc937940476c0b9f1b02d2b99e9a5b13cf77a1c1',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4b7ea72c66cd4b43', 'productivity-decision-making-frameworks-opportunity-cost-analyzer', 'Opportunity Cost Analyzer', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '8', 'Act as a business strategist. Create a system to evaluate opportunity cost using [options], [resources], and [goals]. Compare what is gained versus what is sacrificed. Ensure the system helps choose the most valuable option. Avoid ignoring hidden costs. Focus on clarity and trade-offs.', 'Add comparison table.', 'Evaluate trade-offs', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', '9cc95dbada1db3faddf294deabf137e4085bb64d570cd914c9684c66c481158d',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_7ba8cdd9039f42a3', 'productivity-decision-making-frameworks-high-stakes-decision-framework', 'High-Stakes Decision Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '9', 'Act as a strategic advisor. Create a framework for high-stakes decisions using [decision], [risks], and [impact]. Include structured analysis, scenario planning, and risk mitigation. Ensure the framework is clear and practical. Avoid paralysis by analysis. Focus on making confident, informed decisions.', 'Add scenario planning.', 'Handle big decisions', 'Framework',
  'TXT', '90–120 mins', '5', 'Contextual',
  '₹25K–₹75K', '', 'Sheet14', '34af3a69e997fc7739fea167f4faa9dccc6e17e07093a029b0652daa7c913ed5',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3ebe957e1333413d', 'productivity-decision-making-frameworks-decision-feedback-loop', 'Decision Feedback Loop', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '10', 'Act as a learning strategist. Create a system to review decisions using [past decisions], [outcomes], and [lessons]. Include steps to analyze what worked and what didn’t. Ensure the system improves future decisions. Avoid blame or over-analysis. Focus on learning and improvement.', 'Add review template.', 'Improve decisions', 'System',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet14', '7f55cc332460473e78789e3d28e828ab01c32d161e67f8a6e51ea0f131af2ad0',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_eb5fd43eef664160', 'productivity-decision-making-frameworks-first-principles-thinking-framework', 'First Principles Thinking Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '11', 'Act as a strategic thinker. Create a framework using [problem], [assumptions], and [goals]. Break down the problem into fundamental truths and rebuild solutions from scratch. Identify assumptions that may not be valid. Ensure the framework simplifies complex problems. Avoid relying on conventional thinking. Focus on clarity and logic. The goal is to create innovative and effective solutions based on first principles.', 'Add example breakdown.', 'Improve problem-solving', 'Framework',
  'TXT', '90–120 mins', '5', 'Contextual',
  '₹25K–₹75K', '', 'Sheet14', 'eb557a10ec34f90e557f255461d8c0eec9c53f79cf23aa423e37f58fa850b896',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9ea0f26b0de34209', 'productivity-decision-making-frameworks-mental-model-decision-system', 'Mental Model Decision System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '12', 'Act as a cognitive strategist. Create a system using [decision], [models], and [context]. Apply multiple mental models such as inversion, probability thinking, and margin of safety. Ensure the system helps analyze decisions from different perspectives. Avoid overcomplication. Focus on clarity and effectiveness. The goal is to improve decision quality using structured thinking tools.', 'Add model list.', 'Use mental models', 'System',
  'TXT', '90–120 mins', '5', 'Contextual',
  '₹25K–₹75K', '', 'Sheet14', '245274c911e8b874df99b2cad64df3bbf974e0cf2809a63a2fb4be65fb72bc93',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_fd92eb6d48994dce', 'productivity-decision-making-frameworks-inversion-thinking-framework', 'Inversion Thinking Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '13', 'Act as a strategic thinker. Create a framework using [goal], [risks], and [failure scenarios]. Identify what could go wrong and how to avoid it. Ensure the framework focuses on preventing mistakes rather than just pursuing success. Avoid overly negative thinking. Focus on risk awareness and prevention. The goal is to make safer and more reliable decisions.', 'Add risk checklist.', 'Prevent mistakes', 'Framework',
  'TXT', '60–90 mins', '5', 'Contextual',
  '₹20K–₹50K', '', 'Sheet14', '215b103fe9e72f8617b311c3198f386c62da1093bf137925d003f64cc3c245e8',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5018908cb9494923', 'productivity-decision-making-frameworks-decision-leverage-system', 'Decision Leverage System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '14', 'Act as a business strategist. Create a system to identify high-leverage decisions using [options], [impact], and [effort]. Focus on decisions that produce maximum results with minimal effort. Ensure the system helps prioritize impactful actions. Avoid low-value decisions. Focus on efficiency and results. The goal is to maximize outcomes through smarter decision-making.', 'Add leverage examples.', 'Maximize impact', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', 'b69d2285f7c126bcdff7abad83d5fb4367f74259a0db6040ae7c23b7bb1d7a97',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_974a90f9011046c2', 'productivity-decision-making-frameworks-clarity-under-uncertainty-framework', 'Clarity Under Uncertainty Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '15', 'Act as a strategic advisor. Create a framework to make decisions under uncertainty using [decision], [unknowns], and [constraints]. Include scenario planning, probability estimation, and risk mitigation. Ensure the framework provides clarity even with incomplete information. Avoid paralysis by analysis. Focus on practical decision-making. The goal is to act confidently despite uncertainty.', 'Add scenario templates.', 'Decide under uncertainty', 'Framework',
  'TXT', '90–120 mins', '5', 'Contextual',
  '₹25K–₹75K', '', 'Sheet14', 'f741dcb33b525b174e42f9b58c42b67198842f3f6558e7447826d11b19f721c9',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_15d47143bbea453b', 'productivity-decision-making-frameworks-decision-automation-system', 'Decision Automation System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '16', 'Act as a systems strategist. Create a system to automate recurring decisions using [decision types], [rules], and [context]. Identify decisions that are repeated frequently and define clear rules or criteria to handle them automatically. Ensure the system reduces cognitive load and decision fatigue. Avoid over-automation of critical decisions. Focus on simplifying routine choices. The goal is to free up mental bandwidth for high-impact decisions.', 'Add rule examples.', 'Reduce decision fatigue', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet14', '3d0bbd1d2337736b6fdfded7d0ef6bbb0213cfa5d6164f04592e4aa17d5ad60b',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ec15aa6408154ba6', 'productivity-decision-making-frameworks-default-decision-framework', 'Default Decision Framework', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '17', 'Act as a productivity expert. Create a framework for default decisions using [common scenarios], [preferences], and [goals]. Define pre-set choices for common situations to reduce decision-making effort. Ensure the framework is simple and easy to apply. Avoid rigid defaults that limit flexibility. Focus on speeding up routine decisions while maintaining alignment with goals. The goal is to eliminate unnecessary thinking for low-impact decisions.', 'Add default list.', 'Simplify routine decisions', 'Framework',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', 'beea8e2781c01b1e2aa15babfc89e02e8f4948533be89fe122feaa708510ba9b',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_787c6204ab9449be', 'productivity-decision-making-frameworks-decision-filtering-system', 'Decision Filtering System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '18', 'Act as a strategic thinker. Create a system to filter decisions using [options], [criteria], and [goals]. Define clear filters to quickly eliminate low-value or irrelevant options. Ensure the system improves focus and clarity. Avoid overly complex filters. Focus on speed and effectiveness. The goal is to quickly narrow down choices and focus on the best options.', 'Add filter checklist.', 'Improve clarity', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', '6d7e31579f113d560c6b76620444ce47a2b906694dc7b72d10ba0c9067d782c7',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5941944b094b4551', 'productivity-decision-making-frameworks-decision-time-allocation-system', 'Decision Time Allocation System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '19', 'Act as a productivity strategist. Create a system to allocate time for decisions using [decision types], [impact], and [urgency]. Define how much time should be spent on different types of decisions. Ensure high-impact decisions get adequate attention while low-impact ones are handled quickly. Avoid overthinking small decisions. Focus on efficient time use. The goal is to balance speed and quality in decision-making.', 'Add time rules.', 'Optimize time use', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet14', '782d837217bb8bf04050e6d9e2b37a9210233a13e97489f5573cb994bf4a76f6',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_22bc1b470bf548e3', 'productivity-decision-making-frameworks-complete-decision-making-system', 'Complete Decision-Making System', 'productivity', 'Productivity & Personal Excellence', 'Decision-Making Frameworks', 'pro',
  '20', 'Act as a high-level strategist. Create a complete decision-making system using [decision types], [goals], and [context]. Combine prioritization, evaluation, automation, and feedback into one cohesive framework. Ensure the system is simple, scalable, and easy to implement. Avoid unnecessary complexity. Focus on clarity, speed, and effectiveness. The goal is to create a reliable system for making better decisions consistently.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Daily',
  '₹30K–₹1L', '', 'Sheet14', '8539394faf6af3fd471b0393453ac86bcde3d0e6f1eb812e3bd6e8bd04a1a773',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_56149b86cde54757', 'productivity-time-optimization-focus-systems-ideal-day-optimization-system', 'Ideal Day Optimization System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'free',
  '1', 'Act as a high-performance productivity coach. Create an ideal daily schedule using [working hours], [energy levels], and [priorities]. Structure the day into deep work blocks, shallow work tasks, and recovery periods. Align high-value tasks such as content creation and strategy with peak energy windows. Include buffer time for unexpected tasks. Ensure the schedule is realistic and flexible. Avoid rigid routines that are hard to maintain. Focus on sustainability and consistent execution. The goal is to maximize output while maintaining energy and avoiding burnout over the long term.', 'Add low-energy variation.', 'Optimize daily time', 'Plan',
  'TXT/PDF', '90–120 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet15', 'c1680e20f7ced72cdde1d5dbecf1fadc050c49413dfe125591674a9659a90f79',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_f7da823712e041b6', 'productivity-time-optimization-focus-systems-deep-work-block-system', 'Deep Work Block System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'free',
  '2', 'Act as a focus expert. Create a deep work system using [task type], [duration], and [distraction level]. Define preparation, execution, and recovery phases. Include steps to eliminate distractions and maintain focus during work sessions. Ensure the system is simple and repeatable. Avoid overly complex techniques. Focus on improving quality of work through sustained attention. The goal is to complete high-value tasks efficiently.', 'Add 90-minute version.', 'Improve focus', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet15', '3d7fe15f42bff56bd79870705a4f3921d368c33613e1ab4f809e0c1736472522',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6711722aff3c403b', 'productivity-time-optimization-focus-systems-time-blocking-framework', 'Time Blocking Framework', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '3', 'Act as a productivity strategist. Create a time-blocking system using [tasks], [priorities], and [schedule]. Allocate specific time slots for different activities such as deep work, meetings, and breaks. Ensure the system is flexible and easy to adjust. Avoid over-scheduling. Focus on clarity and control of time. The goal is to reduce decision fatigue and improve productivity.', 'Add weekly version.', 'Structure time', 'Framework',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet15', '7f82749bb70935508e760acb53aefb15392aae635298c64e77fcaea1814b8d49',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5fd75b44ea2940cb', 'productivity-time-optimization-focus-systems-distraction-elimination-system', 'Distraction Elimination System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '4', 'Act as a cognitive performance expert. Create a system to eliminate distractions using [work environment], [digital tools], and [habits]. Identify key distractions and provide strategies to reduce them. Include both environmental and behavioral changes. Ensure the system is practical and sustainable. Avoid extreme solutions. Focus on creating a distraction-free environment that supports deep work and consistent productivity.', 'Add tool suggestions.', 'Reduce distractions', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet15', 'd5d1bb5c221e7ed4f259308286e2411e7a1158a2968023eb1e9b596ac3b27657',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4fc54b658edc46a9', 'productivity-time-optimization-focus-systems-task-execution-system', 'Task Execution System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '5', 'Act as a productivity coach. Create a system to execute tasks using [task list], [priorities], and [deadlines]. Break tasks into smaller steps and define clear execution rules. Ensure the system improves focus and completion rate. Avoid complex planning. Focus on clarity and action. The goal is to complete tasks efficiently and consistently.', 'Add checklist version.', 'Improve execution', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet15', 'd8a04d0cb6938463b20fc9305e4933146c6a01326d49dd8581bfb220c180982c',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b39408852d5c44b7', 'productivity-time-optimization-focus-systems-energy-optimization-system', 'Energy Optimization System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '6', 'Act as a high-performance coach. Create an energy management system using [sleep schedule], [work hours], and [lifestyle habits]. Identify peak energy periods and align them with high-value tasks such as deep work, strategy, and content creation. Include practical strategies such as nutrition timing, hydration, movement, and structured breaks. Ensure the system is realistic and sustainable. Avoid extreme routines. Focus on maintaining consistent energy throughout the day to improve productivity and reduce burnout. The goal is to optimize output by managing energy rather than just time.', 'Add morning/evening routines.', 'Sustain energy', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet15', '5cfa4b082210d7869f3b6ae7cc4fac93d29944620e6e7a5a8c138b0410f2637c',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2ffa727397ea4594', 'productivity-time-optimization-focus-systems-focus-recovery-system', 'Focus Recovery System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '7', 'Act as a cognitive performance expert. Create a system to restore focus during the day using [work duration], [mental fatigue], and [task intensity]. Include quick reset techniques such as movement, breathing, and environmental changes. Ensure the system allows rapid recovery without disrupting workflow. Avoid complex methods. Focus on simple, effective resets that can be applied between deep work sessions. The goal is to maintain consistent performance throughout the day.', 'Add 5-minute resets.', 'Restore focus', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet15', 'd21e407ad1b00ae94b5b902fa78383efd94ddcf16aaeea35f6184354c927819d',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_117eb4a10f064760', 'productivity-time-optimization-focus-systems-anti-burnout-productivity-system', 'Anti-Burnout Productivity System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '8', 'Act as a performance strategist. Create a system to prevent burnout using [workload], [schedule], and [stress levels]. Balance high-intensity work with recovery and breaks. Include strategies for workload management and rest. Ensure the system is sustainable long-term. Avoid overworking. Focus on maintaining productivity without exhaustion. The goal is to achieve consistent output while protecting mental and physical well-being.', 'Add weekly reset plan.', 'Prevent burnout', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet15', '32a82611e3c85281b11e0e7088b0b17a003409ad4917c7b6762660b123c1e18c',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6ac3ae6c06dc4b61', 'productivity-time-optimization-focus-systems-high-performance-routine-builder', 'High-Performance Routine Builder', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '9', 'Act as a productivity strategist. Create a daily routine using [goals], [available time], and [constraints]. Structure the routine into planning, execution, and reflection phases. Ensure the routine is flexible and realistic. Avoid overloading. Focus on consistency and effectiveness. The goal is to build a routine that supports long-term productivity and growth.', 'Add beginner version.', 'Build routine', 'Routine',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹15K–₹40K', '', 'Sheet15', '42d7c0fd456ab1ff67910659c8023c506c3980a2302d7c8167a95dc8fefbbb34',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_887613c5960f4c65', 'productivity-time-optimization-focus-systems-workload-balancing-system', 'Workload Balancing System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '10', 'Act as a productivity coach. Create a system to balance workload using [tasks], [deadlines], and [capacity]. Distribute tasks realistically across time. Include prioritization and delegation strategies. Ensure the system reduces stress and improves efficiency. Avoid overloading schedules. Focus on clarity and realistic execution. The goal is to maintain consistent output without overwhelm.', 'Add delegation checklist.', 'Balance workload', 'System',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹15K–₹40K', '', 'Sheet15', '34461ab5e790f0518475bf11dc19a439ca6638331190b71c3d0694a5cf682add',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2b2cf8b92b764e1c', 'productivity-time-optimization-focus-systems-flow-state-trigger-system', 'Flow State Trigger System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '11', 'Act as a peak performance expert. Create a system to consistently enter flow state using [task type], [environment], and [time availability]. Identify pre-work rituals, environmental setups, and mental triggers that help transition into deep focus. Include steps such as eliminating distractions, setting clear goals, and using timed sessions. Ensure the system is simple and repeatable. Avoid complex routines. Focus on creating a reliable entry into flow. The goal is to perform high-quality work with maximum concentration and minimal effort.', 'Add pre-work ritual.', 'Enter flow state', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet15', 'cc8ff202b9d4b8de0403d982b1431edbf70854ba71649483e96f2bf96db07319',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_42a57ff0fa514c10', 'productivity-time-optimization-focus-systems-deep-work-mastery-system', 'Deep Work Mastery System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '12', 'Act as a productivity strategist. Create a deep work mastery system using [tasks], [schedule], and [distractions]. Define long focus blocks with clear goals and minimal interruptions. Include preparation, execution, and recovery phases. Ensure the system is sustainable and adaptable. Avoid rigid or extreme methods. Focus on consistent high-quality output. The goal is to build the ability to focus deeply for extended periods.', 'Add weekly plan.', 'Master deep work', 'System',
  'TXT/PDF', '120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet15', '1d8ade193354f4b8255bb7259c661977e973ab2305c0c511a1a4e2fece6ccc60',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_6c360f94302946f3', 'productivity-time-optimization-focus-systems-attention-management-system', 'Attention Management System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '13', 'Act as a cognitive expert. Create a system to manage attention using [tasks], [distractions], and [energy levels]. Define how attention should be allocated across different tasks. Include methods to refocus when distracted. Ensure the system is simple and practical. Avoid complex tracking. Focus on improving awareness and control of attention. The goal is to maintain consistent focus throughout the day.', 'Add attention reset techniques.', 'Control attention', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet15', '12c6ce11514d47662b9c3f3f65bfa8e4a12c1150e17e2ac4f5990fe49ebc0c29',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_31693b4e554549ff', 'productivity-time-optimization-focus-systems-single-tasking-execution-system', 'Single-Tasking Execution System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '14', 'Act as a performance coach. Create a system to execute tasks one at a time using [task list], [priorities], and [time blocks]. Eliminate multitasking and focus fully on one task until completion. Include rules to prevent switching between tasks. Ensure the system is simple and effective. Avoid overcomplication. Focus on improving quality and efficiency. The goal is to complete tasks faster and better through focused execution.', 'Add task switching rules.', 'Improve execution quality', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet15', '54393ceee04e51123f4000a25de4ba4bd6cd3580394e40ba7e922efb1d6e8033',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_3ed476d8b49b4982', 'productivity-time-optimization-focus-systems-peak-productivity-window-system', 'Peak Productivity Window System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '15', 'Act as a high-performance coach. Create a system to identify and utilize peak productivity windows using [energy levels], [daily schedule], and [tasks]. Align high-value work with peak performance periods. Include methods to track and adjust these windows over time. Ensure the system is flexible and realistic. Avoid rigid schedules. Focus on maximizing output during peak hours.', 'Add tracking method.', 'Maximize output', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet15', '75721acd5eac9d986925b4f99b6a00ea6f1ad8d0f40cdb474bacad0b887556ee',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_842c1d3b2b38410b', 'productivity-time-optimization-focus-systems-focus-automation-system', 'Focus Automation System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '16', 'Act as a systems strategist. Create a system to automate focus using [tools], [environment], and [schedule]. Identify ways to reduce manual effort required to enter deep work, such as pre-configured workspaces, scheduled focus blocks, and automated reminders. Ensure the system minimizes friction and distraction. Avoid overly technical setups. Focus on simplicity and reliability. The goal is to make focused work the default state rather than something that requires constant effort or willpower.', 'Add tool stack.', 'Automate focus', 'System',
  'TXT/PDF', '120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet15', '9206b469db9d85623f32cacd6edefee03fbac7566bc1738d68dc5d46d852115a',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_5ea17240f7a04388', 'productivity-time-optimization-focus-systems-minimum-viable-focus-system', 'Minimum Viable Focus System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '17', 'Act as a productivity coach. Create a minimum viable focus system using [available time], [task type], and [constraints]. Define the simplest version of a focus routine that can be executed daily. Ensure the system removes friction and is easy to follow even on busy days. Avoid perfectionism. Focus on consistency and execution. The goal is to maintain focus habits without requiring ideal conditions.', 'Add quick-start version.', 'Reduce friction', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet15', '3ae819f67d81b935488a3a20a2a67bd3cca3bbf0f007fb81372eba28d60da290',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_14267acd91a7471f', 'productivity-time-optimization-focus-systems-focus-workflow-optimization', 'Focus Workflow Optimization', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '18', 'Act as a systems expert. Create a workflow optimization system using [current workflow], [bottlenecks], and [goals]. Identify inefficiencies in how focus time is used and suggest improvements. Include steps to streamline processes and reduce wasted time. Ensure the system is practical and easy to implement. Avoid unnecessary complexity. Focus on speed and efficiency. The goal is to maximize productive output from available focus time.', 'Add before-after comparison.', 'Improve efficiency', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet15', '8bc290727208fa37b659794f127f0dc8ec0fb477f0e91c34f9d0e0b90a32f663',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_9200a56bddc84fba', 'productivity-time-optimization-focus-systems-focus-scalability-system', 'Focus Scalability System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '19', 'Act as a business strategist. Create a system to scale focus capacity using [workload], [resources], and [goals]. Identify ways to increase productive output without increasing working hours proportionally. Include delegation, batching, and optimization strategies. Ensure the system is sustainable. Avoid overworking. Focus on efficiency and leverage. The goal is to produce more results with the same or less effort.', 'Add delegation plan.', 'Scale output', 'System',
  'TXT/PDF', '120 mins', '5', 'Monthly',
  '₹30K–₹1L', '', 'Sheet15', '6c83172e3895ff649cba1c2f351c0e5950fecbccd6e226005634362f5e022312',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_787ea43ad5494fb5', 'productivity-time-optimization-focus-systems-complete-time-focus-system', 'Complete Time & Focus System', 'productivity', 'Productivity & Personal Excellence', 'Time Optimization & Focus Systems', 'pro',
  '20', 'Act as a high-level strategist. Create a complete system using [goals], [schedule], and [workflow]. Combine time optimization, focus management, and execution into one cohesive framework. Ensure the system is simple, scalable, and easy to implement. Avoid unnecessary complexity. Focus on clarity, consistency, and high performance. The goal is to create a reliable system for maximizing productivity and output over the long term.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Daily',
  '₹30K–₹1L', '', 'Sheet15', 'c9702f825abcdf0f94940e86de5f49845634e0a962ff5636b3825ba849cb2758',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4bb5423052ff4f18', 'productivity-workflow-simplification-burnout-prevention-workflow-simplification-', 'Workflow Simplification System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'free',
  '1', 'Act as a systems strategist. Analyze the current workflow using [tasks], [tools], and [process steps]. Identify unnecessary complexity, redundant steps, and bottlenecks. Simplify the workflow by reducing steps, automating repetitive actions, and streamlining processes. Ensure the system is easy to follow and implement. Avoid over-engineering. Focus on clarity and efficiency. The goal is to create a lean workflow that saves time and reduces mental load while maintaining quality output.', 'Add before-after workflow.', 'Simplify processes', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet16', 'd4df9f631aa1fc930e4be90b759cee29ca72332ff0202554c23201791dbb5d5c',
  1, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c4b8434b67e9443f', 'productivity-workflow-simplification-burnout-prevention-task-elimination-framewo', 'Task Elimination Framework', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'free',
  '2', 'Act as a productivity expert. Create a framework to eliminate low-value tasks using [task list], [goals], and [impact]. Identify tasks that do not contribute significantly to results. Define criteria to remove, delegate, or automate them. Ensure the framework is simple and actionable. Avoid keeping unnecessary tasks out of habit. Focus on freeing time for high-impact work.', 'Add elimination checklist.', 'Reduce workload', 'Framework',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet16', '9aac317c9a1cf3151437c220e16a0e7155d7158f1fed2e42cc4db10dc105316b',
  2, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_40323a0595e943d5', 'productivity-workflow-simplification-burnout-prevention-burnout-risk-assessment-', 'Burnout Risk Assessment System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '3', 'Act as a performance coach. Create a system to assess burnout risk using [workload], [stress levels], and [recovery habits]. Identify early warning signs such as fatigue, lack of focus, or reduced motivation. Provide a structured way to evaluate risk regularly. Ensure the system is simple and practical. Avoid overly complex assessments. Focus on early detection and prevention.', 'Add scoring model.', 'Detect burnout', 'System',
  'TXT', '60–90 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet16', 'b589d4a6871c1dd0132abd433abc8fbf11af12263eb3651b138be5c84cfa9a6e',
  3, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_74f8430a94c24760', 'productivity-workflow-simplification-burnout-prevention-workload-reduction-syste', 'Workload Reduction System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '4', 'Act as a productivity strategist. Create a system to reduce workload using [tasks], [priorities], and [capacity]. Identify tasks that can be removed, delegated, or simplified. Ensure the system helps maintain output while reducing effort. Avoid drastic cuts that affect results. Focus on efficiency and balance.', 'Add delegation plan.', 'Reduce stress', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet16', '256033cf92ff94a90079c0ee2f9da7f55016aa56600166b2e6830710a02af496',
  4, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_134826ad23ec482b', 'productivity-workflow-simplification-burnout-prevention-simple-workflow-builder', 'Simple Workflow Builder', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '5', 'Act as a systems expert. Create a simple workflow using [tasks], [tools], and [goals]. Structure the process into clear, minimal steps. Ensure the workflow is easy to follow and repeat. Avoid unnecessary complexity. Focus on clarity and execution. The goal is to create a workflow that supports consistent output without overwhelm.', 'Add template version.', 'Build simple systems', 'Workflow',
  'TXT/PDF', '90–120 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet16', 'f12971920f69097c19523801a375604210fe059897e05f43ffb4d69da76138a3',
  5, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8a26227e3d924166', 'productivity-workflow-simplification-burnout-prevention-energy-protection-system', 'Energy Protection System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '6', 'Act as a high-performance coach. Create a system to protect daily energy using [work schedule], [stress triggers], and [habits]. Identify activities that drain energy and define boundaries to minimize them. Include strategies such as structured breaks, task batching, and limiting low-value interactions. Ensure the system is practical and sustainable. Avoid extreme restrictions. Focus on maintaining consistent energy levels throughout the day to support productivity and well-being.', 'Add boundary rules.', 'Protect energy', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet16', '4f4e61bb721dd5f85a417a6539ee46e0ec2ac8dedce2ef15bf29da51ed0abbcc',
  6, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_4a395acafa624ac7', 'productivity-workflow-simplification-burnout-prevention-recovery-reset-system', 'Recovery & Reset System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '7', 'Act as a performance strategist. Create a system for daily and weekly recovery using [workload], [stress levels], and [schedule]. Include structured reset activities such as breaks, reflection, and downtime. Ensure the system helps restore mental clarity and energy. Avoid overcomplicated routines. Focus on simple, effective recovery methods. The goal is to prevent burnout and maintain long-term performance.', 'Add weekly reset plan.', 'Restore energy', 'System',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet16', '42bf66337f3cd23d5aaa7728cf8bdeb2df36e3a1b18d64ed9b2498f1c4b986c2',
  7, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_2391b813c0bf40bd', 'productivity-workflow-simplification-burnout-prevention-work-simplification-fram', 'Work Simplification Framework', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '8', 'Act as a systems expert. Create a framework to simplify work using [tasks], [tools], and [process]. Identify unnecessary steps, duplicate efforts, and inefficiencies. Provide clear methods to streamline workflows and reduce complexity. Ensure the framework is easy to implement. Avoid over-engineering. Focus on clarity and efficiency. The goal is to make work easier and faster without compromising quality.', 'Add simplification checklist.', 'Simplify work', 'Framework',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹20K–₹50K', '', 'Sheet16', '5b32c8eb843fc0f55d048817650834bf966906dfc05f41ab0bf35ee0792f7ee9',
  8, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_cd34bf08fb324309', 'productivity-workflow-simplification-burnout-prevention-overwhelm-reduction-syst', 'Overwhelm Reduction System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '9', 'Act as a productivity coach. Create a system to reduce overwhelm using [task load], [priorities], and [deadlines]. Break down large tasks into smaller steps and define clear priorities. Include methods to manage workload and avoid mental overload. Ensure the system is simple and actionable. Avoid complex planning. Focus on clarity and control. The goal is to reduce stress and improve execution.', 'Add task breakdown template.', 'Reduce overwhelm', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet16', '213adfa7bd2a0bdbdc1f34c9c778e23ea6ff29bdcfb099b5ba385c24ce27c283',
  9, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_509ccaba4ff64b32', 'productivity-workflow-simplification-burnout-prevention-sustainable-work-routine', 'Sustainable Work Routine', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '10', 'Act as a performance coach. Create a sustainable daily routine using [goals], [time availability], and [energy levels]. Balance work, rest, and recovery. Ensure the routine is realistic and adaptable. Avoid overloading the schedule. Focus on long-term consistency and well-being. The goal is to maintain productivity without burnout.', 'Add low-energy version.', 'Build sustainability', 'Routine',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹20K–₹50K', '', 'Sheet16', '23eec103857bab2f01992588ac1c963237dd02d31657f58bc942a945ab5769a5',
  10, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_673d0604cbde48a2', 'productivity-workflow-simplification-burnout-prevention-mental-load-reduction-sy', 'Mental Load Reduction System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '11', 'Act as a cognitive performance expert. Create a system to reduce mental load using [tasks], [decisions], and [responsibilities]. Identify areas where excessive thinking or tracking is required and simplify them through checklists, routines, or automation. Ensure the system minimizes decision fatigue and cognitive strain. Avoid complex tracking systems. Focus on clarity, ease, and repeatability. The goal is to free up mental bandwidth for high-value work and reduce daily overwhelm.', 'Add checklist examples.', 'Reduce mental load', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet16', '7867e0ad6eb96ce789489a3590387cc171963b6de56cb5c2040fd955039a851d',
  11, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_085fada14b7f4534', 'productivity-workflow-simplification-burnout-prevention-decision-reduction-workf', 'Decision Reduction Workflow', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '12', 'Act as a productivity strategist. Create a workflow that reduces the number of decisions required using [tasks], [process], and [rules]. Define standard operating procedures and default choices for recurring activities. Ensure the workflow simplifies execution and reduces thinking effort. Avoid rigid systems that limit flexibility. Focus on speed and clarity. The goal is to streamline processes by eliminating unnecessary decisions.', 'Add SOP examples.', 'Reduce decisions', 'Workflow',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet16', '73cb99bc8c4bed0bfecabb65a1fdbe833eb498a1237b0b70ddd14b7e6345e36d',
  12, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8ab7fe77ecc44636', 'productivity-workflow-simplification-burnout-prevention-high-efficiency-workflow', 'High-Efficiency Workflow System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '13', 'Act as a systems expert. Create a workflow that maximizes efficiency using [tasks], [tools], and [goals]. Identify high-impact steps and remove low-value activities. Structure the workflow to reduce delays and improve speed. Ensure the system is practical and easy to implement. Avoid unnecessary complexity. Focus on output and efficiency. The goal is to complete more work in less time without increasing effort.', 'Add workflow diagram.', 'Improve efficiency', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹30K–₹1L', '', 'Sheet16', '63957db90a815cb9c0df3af6523a9c0b9522decfee6320521e75a2848b03fb4f',
  13, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_b0c93ca935854330', 'productivity-workflow-simplification-burnout-prevention-cognitive-offloading-sys', 'Cognitive Offloading System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '14', 'Act as a performance coach. Create a system to offload cognitive tasks using [tools], [tasks], and [habits]. Identify information and decisions that can be externalized through notes, reminders, or systems. Ensure the system reduces memory load and improves clarity. Avoid overcomplicated tools. Focus on simplicity and usability. The goal is to reduce mental burden and improve focus.', 'Add tool suggestions.', 'Offload thinking', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet16', 'fda2c7bea49614e9faf5f9c296e3eafdc8314444fe36e10571156348c33cb164',
  14, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_ad97fc9bb77b439c', 'productivity-workflow-simplification-burnout-prevention-workflow-clarity-framewo', 'Workflow Clarity Framework', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '15', 'Act as a systems strategist. Create a framework to improve workflow clarity using [tasks], [process], and [goals]. Define clear steps, responsibilities, and outcomes for each part of the workflow. Ensure the system eliminates confusion and ambiguity. Avoid vague instructions. Focus on clarity and structure. The goal is to make workflows easy to understand and execute consistently.', 'Add clarity checklist.', 'Improve clarity', 'Framework',
  'TXT', '90–120 mins', '5', 'Weekly',
  '₹25K–₹75K', '', 'Sheet16', '50684f6a1025f1f4c0233d9957acc3111052faef3975a20e7c478ea91b9c24b7',
  15, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_c577e47465204caf', 'productivity-workflow-simplification-burnout-prevention-workflow-automation-syst', 'Workflow Automation System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '16', 'Act as a systems strategist. Create a workflow automation system using [tools], [tasks], and [frequency]. Identify repetitive processes that can be automated such as scheduling, reminders, and data entry. Ensure the system reduces manual effort while maintaining quality. Keep it simple and reliable. Avoid overly complex technical setups. Focus on efficiency and consistency. The goal is to streamline workflows and free up time for high-value work.', 'Add tool stack.', 'Automate workflow', 'System',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹30K–₹1L', '', 'Sheet16', 'a7bc6a598c620ba944b22a64452f67d5b012a51d73ec5a9aadddafd60d9dc396',
  16, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_8e7519caf7bb4207', 'productivity-workflow-simplification-burnout-prevention-minimum-viable-workflow-', 'Minimum Viable Workflow System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '17', 'Act as a productivity coach. Create a minimum viable workflow using [tasks], [time], and [constraints]. Define the simplest version of a workflow that still achieves results. Ensure the system removes unnecessary steps and reduces friction. Avoid perfectionism. Focus on execution and consistency. The goal is to maintain productivity even under constraints or busy schedules.', 'Add quick-start version.', 'Reduce complexity', 'System',
  'TXT', '60–90 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet16', 'f10881ffc76666bd0af0adadf18c4ea88f47cb5219609ccfc3a66b9998ace317',
  17, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_0d837705c9c244fb', 'productivity-workflow-simplification-burnout-prevention-workflow-optimization-bl', 'Workflow Optimization Blueprint', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '18', 'Act as a systems expert. Create a blueprint to optimize workflows using [current workflow], [bottlenecks], and [goals]. Identify inefficiencies and suggest improvements. Include steps to streamline processes and improve speed. Ensure the blueprint is practical and easy to implement. Avoid unnecessary complexity. Focus on clarity and efficiency. The goal is to improve output while reducing effort.', 'Add before-after comparison.', 'Optimize workflow', 'Blueprint',
  'TXT/PDF', '120 mins', '5', 'Weekly',
  '₹30K–₹1L', '', 'Sheet16', '5c4e9c832f4f25f047f778ddc43c63e48338030bd36b325515e065d6f640a0cb',
  18, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_e41f0308468c4ed6', 'productivity-workflow-simplification-burnout-prevention-sustainable-productivity', 'Sustainable Productivity System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '19', 'Act as a performance strategist. Create a system to sustain productivity using [workload], [schedule], and [energy]. Balance work, rest, and recovery. Ensure the system is realistic and adaptable. Avoid overworking. Focus on long-term consistency and well-being. The goal is to maintain high performance without burnout.', 'Add weekly plan.', 'Sustain performance', 'System',
  'TXT', '90–120 mins', '5', 'Daily',
  '₹25K–₹75K', '', 'Sheet16', 'c28caa75e7db7e3b91e427ab62d85d15979e0275a718b9d22098ce0a8d4d387f',
  19, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;
INSERT INTO prompts (
  id, slug, title, category, category_label, subtopic, bundle,
  serial_no, prompt_text, follow_up_prompt, purpose, outcome,
  output_format, time_saved, relevance_score, utility_cadence,
  revenue_potential, notes, source_sheet, content_hash,
  sort_order, is_active, created_at, updated_at
) VALUES (
  'pr_d4a98decd6de4d06', 'productivity-workflow-simplification-burnout-prevention-complete-workflow-simpli', 'Complete Workflow Simplification System', 'productivity', 'Productivity & Personal Excellence', 'Workflow Simplification & Burnout Prevention', 'pro',
  '20', 'Act as a high-level strategist. Create a complete workflow simplification system using [tasks], [process], and [goals]. Combine simplification, automation, and optimization into one cohesive framework. Ensure the system is simple, scalable, and easy to implement. Avoid unnecessary complexity. Focus on clarity, efficiency, and sustainability. The goal is to create a workflow that supports consistent output without overwhelm or burnout.', 'Break into SOP steps.', 'Build full system', 'System',
  'PDF', '120–150 mins', '5', 'Daily',
  '₹30K–₹1L', '', 'Sheet16', '7b14a441e674ce526537a09d37b35a8c87f2b573b0b448d765f07dee718b1502',
  20, 1, 1793249169568, 1793249169568
) ON CONFLICT(slug) DO UPDATE SET
  title = excluded.title,
  prompt_text = excluded.prompt_text,
  updated_at = 1793249169568;