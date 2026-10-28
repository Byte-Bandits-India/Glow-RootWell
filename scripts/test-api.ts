async function testAll() {
  const base = "http://localhost:3000/api/prompts";
  
  // 1. All prompts
  const resAll = await (await fetch(base)).json();
  console.log("1. All prompts count:", resAll.prompts.length, "Total reported:", resAll.counts.total);
  
  // 2. Sales category
  const resSales = await (await fetch(base + "?category=sales")).json();
  console.log("2. Sales category count:", resSales.prompts.length);
  
  // 3. Free bundle
  const resFree = await (await fetch(base + "?bundle=free")).json();
  console.log("3. Free bundle count:", resFree.prompts.length);
  
  // 4. Search query
  const resSearch = await (await fetch(base + "?q=metabolic")).json();
  console.log("4. Search 'metabolic' count:", resSearch.prompts.length);
  
  // 5. Individual prompt lookup
  const sample = resFree.prompts[0];
  const resSingle = await (await fetch(base + "/" + sample.id)).json();
  console.log("5. Single lookup prompt:", {
    id: resSingle.prompt.id,
    title: resSingle.prompt.title,
    category: resSingle.prompt.category,
    subtopic: resSingle.prompt.subtopic,
    bundle: resSingle.prompt.bundle,
    hasFollowUp: Boolean(resSingle.prompt.followUpPrompt),
    timeSaved: resSingle.prompt.timeSaved,
    revenuePotential: resSingle.prompt.revenuePotential
  });
  
  // 6. Category breakdown verification
  console.log("6. Live Category breakdown in DB:", resAll.counts.categories);
  console.log("7. Live Bundle breakdown in DB:", resAll.counts.bundles);
}

testAll().catch(console.error);
