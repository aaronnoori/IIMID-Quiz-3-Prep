/* =====================================================================
   Hypersensitivity and Related Diseases (lec "H")
   Written from the lecture slides + session LOs + transcript.
   ===================================================================== */
QUESTIONS.push(
  {
    id: "H1", lec: "H", topic: "Immediate vs late-phase reaction", figure: "hFev", priority: "must", difficulty: "hard",
    caption: "FEV1 (% of baseline) after a controlled inhaled allergen challenge. A bronchial biopsy was taken at hour 8.",
    stem: "A 24-year-old with grass-pollen allergy undergoes a supervised inhaled allergen challenge. Her airflow is shown. A bronchial biopsy at hour 8 shows a dense infiltrate rich in eosinophils, with neutrophils and T cells. Which process best explains the second fall in FEV1?",
    options: [
      "Continued synthesis of lipid mediators and cytokines by mast cells, recruiting eosinophils, neutrophils and T cells",
      "A second wave of histamine release from preformed mast cell granules",
      "IgG–allergen immune complexes depositing in bronchial vessels and activating complement",
      "Th1 cells activating macrophages to form granulomas around allergen particles",
      "CD8+ CTLs killing airway epithelial cells that display allergen peptides"
    ],
    answer: 0,
    explanation: "Type I reactions are biphasic. The immediate reaction (minutes) comes from preformed granule contents, mainly histamine and other vasoactive amines, and causes vascular leakage, edema and smooth muscle contraction. It fades within about an hour. The late-phase reaction (about 2–24 h) comes from continued synthesis and release of mediators by mast cells: lipid mediators and cytokines such as IL-5 and TNF. These recruit an infiltrate rich in eosinophils, plus neutrophils and T cells, which is exactly what the biopsy shows. Preformed granules are already spent. Immune complexes are type III. Granulomas and CTL killing are type IV and take 24–72 h.",
    ref: "Hypersensitivity · LO2 · Immediate reaction vs late-phase reaction"
  },
  {
    id: "H2", lec: "H", topic: "Sensitization phase", priority: "must", difficulty: "hard",
    stem: "A 30-year-old beekeeper had no reaction to his first sting. Six weeks later a second sting causes generalized hives and wheezing within 10 minutes. In a research setting, suppose IL-4 and IL-13 signaling had been completely blocked for the 3 weeks after the first sting only. Which component would most likely be missing at the time of the second sting?",
    options: [
      "Venom-specific IgE bound to FcεRI on his mast cells",
      "Mast cells in his skin and airways",
      "Histamine stored in mast cell granules",
      "Complement proteins needed to lyse venom-coated cells",
      "Venom-specific Th1 cells that activate macrophages"
    ],
    answer: 0,
    explanation: "The first exposure is the sensitization phase. Allergen activates Th2 cells and IL-4-producing Tfh cells, B cells switch to IgE, and the IgE binds FcεRI on mast cells, which also lengthens IgE's otherwise short half-life. On re-exposure, allergen cross-links the bound IgE and mast cells degranulate in minutes. Blocking IL-4/IL-13 during sensitization prevents the IgE switch, so there's nothing on the mast cells for venom to cross-link. Mast cells and their stored histamine would still be there, just not armed. Complement and Th1 cells aren't part of the type I mechanism.",
    ref: "Hypersensitivity · LO1 · Type I: sensitization phase vs effector phase"
  },
  {
    id: "H3", lec: "H", topic: "Mast cell mediators", figure: "hMed", priority: "should", difficulty: "hard",
    caption: "Release of three mediators (X, Y, Z) after IgE cross-linking on cultured human mast cells, with or without a transcription inhibitor.",
    stem: "Cultured human mast cells sensitized with IgE are exposed to the matching allergen. Three mediators are measured over time, with or without a drug that blocks gene transcription. Results are shown. Mediator Z would most directly contribute to which feature of an allergic reaction?",
    options: [
      "Recruitment and activation of eosinophils during the late-phase reaction",
      "Wheal-and-flare (vascular leakage) within 5 minutes of exposure",
      "Bronchial smooth muscle contraction within the first 15 minutes",
      "Neutralization of the allergen before it reaches mast cells",
      "Class switching of B cells to IgE"
    ],
    answer: 0,
    explanation: "X appears within minutes and doesn't need transcription, so it's a preformed granule mediator such as histamine (vasoactive amine → immediate vascular leakage). Y appears within minutes to an hour without transcription, which fits newly synthesized lipid mediators (prostaglandins, leukotrienes) made enzymatically from membrane lipids (smooth muscle contraction). Z appears only after hours and is abolished when transcription is blocked, so it's a cytokine made from new gene expression, such as IL-5 or TNF. These cytokines recruit and activate eosinophils and other leukocytes, the hallmark of the late-phase reaction. IgE switching depends on IL-4/IL-13 from T cells during sensitization, not on mast cell products during the reaction.",
    ref: "Hypersensitivity · LO1/LO2 · Production and action of mast cell mediators"
  },
  {
    id: "H4", lec: "H", topic: "Atopy & atopic march", priority: "should", difficulty: "hard",
    stem: "A 9-year-old boy has seasonal sneezing and itchy eyes, and wheezing after exercise. His records show itchy, scaly skin patches on his cheeks and elbows from age 4 months, and hives after eating egg at 14 months. Both parents have allergic rhinitis. Which statement best explains how his illnesses are related?",
    options: [
      "An inherited and environmental predisposition to Th2 responses and IgE sensitization, expressed over time as eczema and food allergy, then rhinitis and asthma",
      "Each illness is a separate type IV reaction to a different antigen, linked only by chance",
      "Early food allergy created IgG immune complexes that later deposited in the airways",
      "His skin disease directly spread to his airways by contiguous inflammation",
      "Recurrent infections in infancy caused a Th1-skewed immune response"
    ],
    answer: 0,
    explanation: "Atopy is a predisposition to become IgE-sensitized to environmental allergens, with CD4+ Th2 skewing and IgE overproduction. Genes and environment both contribute: a child of atopic parents has a 40–60% risk, compared with about 10% when neither parent is atopic. The atopic march is the typical progression from atopic dermatitis (and food allergy) in early childhood to allergic rhinitis and asthma later. All of these are type I (IgE-mediated) disorders, not type III or type IV. Th1 skewing is the opposite pattern.",
    ref: "Hypersensitivity · LO3 · Atopy and the atopic march"
  },
  {
    id: "H5", lec: "H", topic: "Type II: cytotoxic mechanisms", priority: "must", difficulty: "hard",
    stem: "A 45-year-old woman has fatigue and jaundice. Hemoglobin is 7.8 g/dL, and she has a high reticulocyte count and an enlarged spleen. Her red cells are coated with IgG and C3 fragments, but immune complexes are not detected in her serum. Which mechanism best explains how her red cells are being destroyed?",
    options: [
      "Antibody and C3b on the red cell surface are recognized by Fc and complement receptors on splenic macrophages, leading to phagocytosis",
      "Circulating immune complexes deposit in splenic vessels and recruit neutrophils",
      "IgE on mast cells binds red cell antigens and triggers degranulation",
      "Th1 cells release IFN-γ, which lyses red cells directly",
      "CD8+ CTLs recognize red-cell peptides presented on MHC class I"
    ],
    answer: 0,
    explanation: "This is type II hypersensitivity. IgG (or IgM) binds a fixed antigen on the red cell surface. Bound IgG and complement-derived C3b both opsonize the cell, and splenic macrophages remove it through Fc receptors and C3b receptors, which explains the splenomegaly. Complement can also lyse cells directly, and ADCC can contribute. No soluble immune complexes are needed, which separates this from type III. Red cells don't express MHC class I, so CTL killing (type IV) doesn't fit.",
    ref: "Hypersensitivity · LO1/LO4 · Type II effector mechanisms (complement, opsonization, ADCC)"
  },
  {
    id: "H6", lec: "H", topic: "Type II: non-cytotoxic (Graves)", figure: "hTsh", priority: "must", difficulty: "hard",
    caption: "cAMP production by cultured thyroid follicular cells (relative units, mean of triplicates).",
    stem: "A 33-year-old woman has weight loss, tremor, heat intolerance and a diffusely enlarged thyroid. Her serum TSH is suppressed. IgG purified from her serum is added to cultured thyroid follicular cells, and results are shown. Which mechanism best explains her disease?",
    options: [
      "Autoantibodies bind the TSH receptor and stimulate it even when TSH is absent",
      "Autoantibodies destroy thyroid cells through complement-mediated lysis",
      "Immune complexes deposit in the thyroid and recruit neutrophils",
      "Autoantibodies block the TSH receptor so TSH cannot bind",
      "Th1 cells activate macrophages inside the thyroid, releasing stored hormone"
    ],
    answer: 0,
    explanation: "Her IgG raises cAMP as much as TSH does, with no TSH present. That effect disappears when the TSH receptor is blocked, and control IgG does nothing. So the antibody is an agonist of the TSH receptor. This is a non-cytotoxic type II reaction: the antibody binds a fixed cell-surface antigen and changes the cell's function rather than killing it. The result is excess thyroid hormone, which suppresses pituitary TSH through negative feedback. A blocking antibody would cause hypothyroidism, and cell destruction wouldn't increase cAMP.",
    ref: "Hypersensitivity · LO1/LO6 · Type II: antibodies interfering with normal cell function (Graves' disease)"
  },
  {
    id: "H7", lec: "H", topic: "Myasthenia gravis", priority: "must", difficulty: "hard",
    stem: "A 38-year-old man has drooping eyelids and double vision that are mild in the morning and worse by evening. Repeated arm raising makes his shoulder muscles progressively weaker. His sensation and reflexes are normal. Which event at the neuromuscular junction best explains his weakness?",
    options: [
      "IgG autoantibodies bind postsynaptic acetylcholine receptors, block acetylcholine binding and reduce Na⁺ entry, so action potentials fail",
      "Autoantibodies against acetylcholinesterase make acetylcholine accumulate in the synaptic cleft",
      "Immune complexes deposit in muscle capillaries and cause vasculitis",
      "CD8+ CTLs kill motor neurons in the spinal cord",
      "IgE-armed mast cells release histamine at the motor end plate"
    ],
    answer: 0,
    explanation: "Myasthenia gravis is a type II reaction against a fixed antigen: the acetylcholine receptor on the postsynaptic muscle membrane. The antibodies block acetylcholine's binding site, so the ligand-gated channels don't open, Na⁺ doesn't enter, and the end plate often fails to reach threshold. Repeated use makes this worse, which explains the fatigable weakness affecting ocular, bulbar and proximal limb muscles. Normal sensation and reflexes point to the neuromuscular junction rather than the nerve. Immune complexes (type III) and CTLs (type IV) aren't the mechanism.",
    ref: "Hypersensitivity · LO6 · Myasthenia gravis: a type II HS reaction"
  },
  {
    id: "H8", lec: "H", topic: "Serum sickness (type III)", figure: "hSerum", priority: "must", difficulty: "hard",
    caption: "Serum levels after a single large dose of a horse-derived antitoxin (relative units). Shaded area: fever, rash, arthralgia and proteinuria.",
    stem: "A patient receives a single large dose of an antitoxin raised in horses. Serum measurements over the next 3 weeks are shown, along with the period when he had fever, rash, painful joints and proteinuria. Which statement best explains the timing of his illness and the change in serum C3?",
    options: [
      "Host antibody to horse proteins forms circulating immune complexes that deposit in vessels, joints and glomeruli and use up complement; the illness resolves as the horse protein is cleared",
      "Horse antibodies bind fixed antigens on the patient's glomerular cells and activate complement locally",
      "Preformed IgE to horse proteins triggers mast cell degranulation as soon as the antitoxin is given",
      "Th1 cells sensitized to horse proteins activate macrophages, which consume C3",
      "The horse protein activates complement directly and needs no antibody, so symptoms begin on day 1"
    ],
    answer: 0,
    explanation: "This is acute serum sickness, a type III reaction. It takes about a week for the patient to mount a switched IgG response to the foreign horse proteins. Once that antibody meets the still-circulating soluble antigen, immune complexes form and deposit in small vessels, joints and glomeruli. There they activate complement (so serum C3 falls as it's consumed) and engage Fc receptors on leukocytes, causing vasculitis, arthritis and nephritis. Forming the complexes also clears the antigen, so the disease is self-limited and C3 recovers. The delay rules out a preformed IgE reaction (type I). The systemic pattern with soluble antigen points away from type II.",
    ref: "Hypersensitivity · LO4/LO6 · Acute serum sickness: a type III HS reaction"
  },
  {
    id: "H9", lec: "H", topic: "Type II vs type III", priority: "must", difficulty: "hard",
    stem: "Patient A has the fatigable muscle weakness of myasthenia gravis and no other organ involvement. Patient B has a facial rash, arthritis, protein in the urine and low serum C3, with antibodies against nuclear antigens such as DNA. Both diseases are driven mainly by IgG autoantibodies. Which difference best explains why patient B's disease affects many organs while patient A's is confined to one tissue?",
    options: [
      "In B, antibodies bind soluble antigens and form immune complexes that circulate and deposit in vessels throughout the body; in A, antibodies bind a fixed antigen in one tissue",
      "B's antibodies are IgE and A's are IgG",
      "Only B's antibodies can activate complement",
      "B's disease is T cell-mediated, while A's is antibody-mediated",
      "A's antibodies are neutralized by FcRn before they can spread"
    ],
    answer: 0,
    explanation: "Types II and III share the same antibodies (IgG/IgM) and effector tools: complement, Fc receptors and leukocyte recruitment. They differ in where the antigen is. Type II antibodies bind fixed antigens on cells or extracellular matrix, so disease is usually limited to the tissue that expresses the antigen (here, the acetylcholine receptor at the neuromuscular junction). Type III antibodies bind soluble antigens, forming immune complexes that deposit mainly in blood vessels. That causes systemic disease, such as skin, joint and kidney involvement and complement consumption in SLE. Both can activate complement. Neither is IgE- or T cell-mediated.",
    ref: "Hypersensitivity · LO4 · Type II vs type III hypersensitivity"
  },
  {
    id: "H10", lec: "H", topic: "Type IV: contact dermatitis", figure: "hTransfer", priority: "must", difficulty: "hard",
    caption: "Ear swelling after the chemical is painted on recipient mice that received serum or cells from sensitized donors.",
    stem: "Mice are sensitized by painting a reactive chemical on their skin. Serum or purified cell populations from these donors are transferred into naive recipients, which are then challenged with the chemical on the ear. Results are shown. Which conclusion best fits the data?",
    options: [
      "The reaction is a delayed-type (type IV) response carried by T cells, not antibody, and peaks at 24–72 hours",
      "The reaction is mediated by IgE in the serum and peaks within minutes",
      "The reaction is caused by immune complexes that need 1–2 days to form",
      "B cells are the main effector cells because they make antibody locally",
      "The reaction needs complement but not lymphocytes"
    ],
    answer: 0,
    explanation: "Serum doesn't transfer the reaction at any time point, so no antibody class (IgE, IgG or IgM) is responsible. CD4+ T cells, and to a lesser extent CD8+ T cells, transfer it, but only after 24–48 hours. That is the signature of delayed-type (type IV) hypersensitivity, where T cells are both the immune reactant and the effector. In contact dermatitis, CD4+ Th1 (and Th17) cells release cytokines such as IFN-γ that activate macrophages (M1) and cause inflammation, while CD8+ CTLs kill keratinocytes directly. B cells transfer nothing, so local antibody production isn't the mechanism.",
    ref: "Hypersensitivity · LO5 · Type IV: T cell-mediated effector mechanisms (contact dermatitis)"
  },
  {
    id: "H11", lec: "H", topic: "Type 1A diabetes", priority: "should", difficulty: "hard",
    stem: "A 12-year-old girl has polyuria, weight loss and very high blood glucose. C-peptide is almost undetectable, and she has several pancreatic islet autoantibodies. In an animal model of the same disease, transferring serum from diabetic animals into healthy recipients doesn't cause diabetes, but transferring T cells does, and depleting CD8+ cells prevents it. Which statement best describes the mechanism of β-cell loss?",
    options: [
      "A type IV reaction in which autoreactive T cells, ultimately CD8+ CTLs, destroy β cells; the islet autoantibodies are markers of the autoimmune process",
      "A type II reaction in which islet autoantibodies lyse β cells through complement",
      "A type III reaction in which immune complexes deposit in islet capillaries",
      "A type I reaction in which IgE-armed mast cells degranulate inside the islets",
      "A non-immune loss of β cells, because the autoantibodies don't transfer disease"
    ],
    answer: 0,
    explanation: "Type 1A (immune-mediated) diabetes is defined by islet autoantibodies, but the β cells are destroyed by autoreactive T cells, with CTLs as the final effectors. That makes it a type IV reaction. The transfer data match: T cells, not serum, transfer the disease, and removing CD8+ cells protects. The autoantibodies help identify the immune-mediated form (1A vs idiopathic 1B) but don't kill the β cells themselves. Low C-peptide confirms that her own insulin production is lost.",
    ref: "Hypersensitivity · LO5/LO6 · Type 1A diabetes: a type IV HS reaction"
  }
);

Object.assign(FIGS, {
  hFev: (() => {
    const X = h => 60 + h * 38, Y = v => 30 + (100 - v) * 3.6;
    const pts = [[0, 100], [0.25, 72], [0.5, 70], [1, 88], [2, 97], [3, 95], [4, 86], [6, 74], [8, 72], [10, 82], [12, 94]];
    const d = pts.map(([h, v], i) => `${i ? "L" : "M"}${X(h).toFixed(1)} ${Y(v).toFixed(1)}`).join(" ");
    return `<svg viewBox="0 0 540 250" font-family="inherit">
    <line x1="60" y1="210" x2="520" y2="210" style="stroke:var(--muted);stroke-width:1.5"/><line x1="60" y1="20" x2="60" y2="210" style="stroke:var(--muted);stroke-width:1.5"/>
    ${[100, 90, 80, 70].map(v => `<text x="54" y="${Y(v) + 4}" text-anchor="end" font-size="11" style="fill:var(--muted)">${v}</text><line x1="60" y1="${Y(v)}" x2="520" y2="${Y(v)}" style="stroke:var(--line);stroke-width:1"/>`).join("")}
    ${[0, 2, 4, 6, 8, 10, 12].map(h => `<text x="${X(h)}" y="226" text-anchor="middle" font-size="11" style="fill:var(--muted)">${h}</text>`).join("")}
    <text x="290" y="244" text-anchor="middle" font-size="12" style="fill:var(--muted)">Hours after allergen inhalation</text>
    <text x="16" y="120" font-size="12" style="fill:var(--muted)" transform="rotate(-90 16 120)">FEV1 (% baseline)</text>
    <path d="${d}" style="fill:none;stroke:var(--h);stroke-width:3"/>
    <line x1="${X(0)}" y1="22" x2="${X(0)}" y2="210" style="stroke:var(--ink);stroke-width:1.5;stroke-dasharray:3 3"/>
    <text x="${X(0) + 6}" y="30" font-size="11" style="fill:var(--ink)">allergen</text>
    <text x="${X(0.5)}" y="${Y(70) + 18}" text-anchor="middle" font-size="13" font-weight="800" style="fill:var(--ink)">1</text>
    <text x="${X(8)}" y="${Y(72) + 18}" text-anchor="middle" font-size="13" font-weight="800" style="fill:var(--ink)">2</text>
    <text x="${X(8)}" y="${Y(100) - 2}" text-anchor="middle" font-size="11" style="fill:var(--muted)">biopsy (hour 8)</text>
    <line x1="${X(8)}" y1="${Y(100) + 2}" x2="${X(8)}" y2="${Y(72) - 4}" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 3"/>
  </svg>`;
  })(),
  hMed: FTABLE(["Mediator", "5 min", "30 min", "6 h", "With transcription inhibitor"], [
    ["X", "High", "High (plateau)", "High (plateau)", "Unchanged"],
    ["Y", "Low", "High", "Falling", "Unchanged"],
    ["Z", "None", "None", "High", "Abolished"]
  ]),
  hTsh: FTABLE(["Condition (no TSH unless stated)", "cAMP"], [
    ["Medium alone", "1.0"],
    ["TSH added", "9.6"],
    ["Patient IgG", "8.9"],
    ["Control IgG from healthy donor", "1.1"],
    ["Patient IgG + antibody that blocks the TSH receptor", "1.3"]
  ]),
  hSerum: (() => {
    const X = d => 60 + d * 22, Y = v => 200 - v * 1.7;
    const curve = (f) => Array.from({ length: 43 }, (_, i) => i / 2).map((d, i) => `${i ? "L" : "M"}${X(d).toFixed(1)} ${Y(f(d)).toFixed(1)}`).join(" ");
    const ag = d => d < 6 ? 100 - d * 3 : Math.max(2, 82 * Math.exp(-(d - 6) / 2.2));
    const ab = d => d < 6 ? 0 : d < 13 ? Math.max(0, (d - 6) * 3) : Math.min(100, 21 + (d - 13) * 11);
    const ic = d => 90 * Math.exp(-Math.pow((d - 10) / 2.4, 2));
    const c3 = d => 85 - 45 * Math.exp(-Math.pow((d - 10.5) / 2.6, 2));
    return `<svg viewBox="0 0 560 260" font-family="inherit">
    <rect x="${X(8)}" y="22" width="${X(14) - X(8)}" height="178" style="fill:color-mix(in srgb,var(--h) 14%,transparent)"/>
    <text x="${(X(8) + X(14)) / 2}" y="34" text-anchor="middle" font-size="11" style="fill:var(--h)">symptoms</text>
    <line x1="60" y1="200" x2="530" y2="200" style="stroke:var(--muted);stroke-width:1.5"/><line x1="60" y1="20" x2="60" y2="200" style="stroke:var(--muted);stroke-width:1.5"/>
    ${[0, 4, 8, 12, 16, 20].map(d => `<text x="${X(d)}" y="216" text-anchor="middle" font-size="11" style="fill:var(--muted)">${d}</text>`).join("")}
    <text x="295" y="236" text-anchor="middle" font-size="12" style="fill:var(--muted)">Days after antitoxin</text>
    <path d="${curve(ag)}" style="fill:none;stroke:var(--warn);stroke-width:3"/>
    <path d="${curve(ab)}" style="fill:none;stroke:var(--accent);stroke-width:3"/>
    <path d="${curve(ic)}" style="fill:none;stroke:var(--bad);stroke-width:3;stroke-dasharray:6 4"/>
    <path d="${curve(c3)}" style="fill:none;stroke:var(--ok);stroke-width:2.5;stroke-dasharray:2 4"/>
    ${[["Horse protein", "var(--warn)", ""], ["Free anti-horse antibody", "var(--accent)", ""], ["Immune complexes", "var(--bad)", "6 4"], ["Serum C3", "var(--ok)", "2 4"]].map(([t, c, da], i) => `<line x1="${[60,175,340,465][i]}" y1="252" x2="${[60,175,340,465][i] + 22}" y2="252" style="stroke:${c};stroke-width:3${da ? `;stroke-dasharray:${da}` : ""}"/><text x="${[60,175,340,465][i] + 26}" y="256" font-size="10.5" style="fill:var(--ink)">${t}</text>`).join("")}
  </svg>`;
  })(),
  hTransfer: FTABLE(["Transferred from sensitized donor", "Ear swelling at 1 h", "at 24 h", "at 48 h"], [
    ["Nothing (control)", "–", "–", "–"],
    ["Serum", "–", "–", "–"],
    ["B cells", "–", "–", "–"],
    ["CD4+ T cells", "–", "++", "+++"],
    ["CD8+ T cells", "–", "+", "++"]
  ])
});

/* ---------------------------------------------------------------------
   Batch 2: H12–H21. Includes the classic presentations from the review
   worksheet (anaphylaxis, contact dermatitis, hemolytic disease of the
   newborn), which the user cleared for use on 2026-11-19.
   --------------------------------------------------------------------- */
QUESTIONS.push(
  {
    id: "H12", lec: "H", topic: "Anaphylaxis", priority: "must", difficulty: "hard",
    stem: "A 10-year-old girl with known seasonal allergic rhinitis and asthma eats a peanut butter sandwich. Within minutes she has itching and swelling of the lips, tongue and oropharynx, stridor, wheezing and urticaria on her arms and chest; heart rate is 110 and oxygen saturation 92%. She has eaten peanut uneventfully in the past. Which sequence best explains why this reaction is both systemic and this fast?",
    options: [
      "Previously formed peanut-specific IgE was already bound to FcεRI on mast cells throughout her tissues, so the ingested allergen cross-linked it and triggered near-simultaneous release of preformed mediators at many sites",
      "This is her sensitization event: peanut-specific IgE was produced within minutes of the exposure and immediately armed her mast cells",
      "Peanut protein activated complement directly, and C3a and C5a caused the airway and skin findings without any antibody",
      "Peanut-specific IgG formed immune complexes with the ingested protein that deposited in skin and airway vessels",
      "Peanut-specific Th1 cells released IFN-γ, which activated macrophages in the skin and airway"
    ],
    answer: 0,
    explanation: "Speed is the diagnostic clue, and speed means the effector machinery was already in place. An earlier, uneventful exposure was the sensitization phase: allergen taken up by dendritic cells primed Th2 and IL-4-producing Tfh cells, B cells switched to IgE, and that IgE bound FcεRI on mast cells, which also greatly prolongs its half-life. Mast cells sit beneath skin and mucosal surfaces and along vessels in connective tissue everywhere, so when absorbed allergen reaches them it cross-links the bound IgE and they degranulate, releasing preformed vasoactive amines and proteases within minutes. Histamine and the other mediators dilate vessels and increase permeability, producing urticaria and the mucosal edema that causes lip, tongue and laryngeal swelling and stridor, while smooth muscle contraction produces wheeze. Because the allergen is absorbed and distributed, the reaction is systemic rather than confined to the gut. A first sensitizing exposure takes days to weeks and causes no symptoms. Immune complexes and Th1 responses operate over days, not minutes.",
    ref: "Hypersensitivity · LO1/LO6 · Type I: sensitization and effector phases; anaphylaxis"
  },
  {
    id: "H13", lec: "H", topic: "Hemolytic disease of the newborn", priority: "must", difficulty: "hard",
    stem: "An Rh-negative woman in her second pregnancy carries an Rh-positive fetus. Her first pregnancy was uncomplicated and she received no anti-D immune globulin. Her anti-D titer is now markedly elevated and the indirect Coombs test is positive. Ultrasound shows fetal ascites and edema, and Doppler indicates fetal anemia. Which mechanism best explains the fetal disease?",
    options: [
      "Maternal IgG anti-D crosses the placenta through FcRn, binds the fixed D antigen on fetal red cells, and those opsonized cells are destroyed by complement and by splenic phagocytes through Fc and C3b receptors",
      "Maternal anti-D forms soluble immune complexes with circulating D antigen that deposit in fetal vessels and activate complement",
      "Maternal IgM anti-D crosses the placenta and agglutinates fetal red cells in the circulation",
      "Maternal T cells cross the placenta and kill fetal red cells through perforin and granzymes",
      "Fetal IgE against maternal red cell antigens triggers mast cell degranulation and vascular leak"
    ],
    answer: 0,
    explanation: "This is a type II reaction, and two separate pieces of immunology have to line up. First, the antigen is fixed: D is a protein on the fetal red cell surface, so antibody binds the cell directly rather than forming soluble complexes, and the disease is confined to the tissue that carries the antigen. The coated cells are then cleared exactly as in any antibody-mediated cytopenia: IgG and complement-derived C3b both opsonize, and splenic macrophages ingest the cells through Fc receptors and complement receptors, with complement-mediated lysis contributing. Second, the antibody has to reach the fetus, and only IgG crosses the placenta, carried by FcRn on the syncytiotrophoblast — which is why the isotype matters and why IgM, which cannot cross, causes no fetal disease. The first pregnancy was spared because sensitization typically occurs at delivery, with the switched IgG response available only for subsequent pregnancies; preventing that sensitization is the rationale for giving anti-D immune globulin. Type III, type IV and type I mechanisms do not fit a fixed cell-surface antigen.",
    ref: "Hypersensitivity · LO1/LO6 · Type II: antibody against fixed cell-surface antigen (hemolytic disease of the newborn)"
  },
  {
    id: "H14", lec: "H", topic: "Contact dermatitis: two phases", priority: "must", difficulty: "hard",
    stem: "A 34-year-old man with no history of atopy begins using a new scented hand sanitizer. He notices mild irritation after the first use, and by the second day has sharply demarcated erythema, swelling and intense itching on both hands and forearms where he applied it most. He has no fever, wheeze or joint pain, and the rash persists after he stops the product. Which statement best describes the immunology of what happened?",
    options: [
      "The small chemical acted as a hapten, binding host protein and being presented by cutaneous dendritic cells to prime T cells on first exposure; re-exposure recruited those T cells back to the skin, and the reaction took 24–72 hours because effector T cells must be recruited and activated in situ",
      "The first application sensitized mast cells with chemical-specific IgE, and the second application cross-linked it, which is why the reaction peaked on day 2",
      "The chemical and anti-chemical IgG formed immune complexes that deposited in dermal vessels and recruited neutrophils",
      "The chemical is directly cytotoxic to keratinocytes, and no immune recognition is involved",
      "Pre-existing antibody against the fragrance activated complement in the skin, producing the erythema and swelling"
    ],
    answer: 0,
    explanation: "Allergic contact dermatitis is the classic type IV reaction, and it has the same two-phase structure as type I but with T cells as both the immune reactant and the effector. Small reactive chemicals are not antigenic on their own; they modify host proteins, and dendritic cells in the skin take up and present the modified peptides, priming CD4+ (Th1 and Th17) and CD8+ T cells in the draining lymph node. That sensitization is clinically quiet or mildly irritating. On re-exposure, those primed T cells are recruited into the skin, where CD4+ cells release cytokines such as IFN-γ that classically activate macrophages (M1) and drive inflammation, while CD8+ CTLs kill keratinocytes directly. Because this requires recruitment, recognition and cytokine-driven inflammation rather than release of preformed granules, the response takes 24–72 hours to develop fully, and it persists after the product is stopped. A type I reaction would appear in minutes and resolve quickly, and the absence of systemic features and the strict confinement to the areas of contact argue against a circulating immune complex process.",
    ref: "Hypersensitivity · LO5/LO6 · Type IV: sensitization and elicitation in contact dermatitis"
  },
  {
    id: "H15", lec: "H", topic: "Type II against a secreted protein", priority: "should", difficulty: "hard",
    stem: "A 58-year-old woman has a macrocytic anemia, a low serum vitamin B12 and antibodies against intrinsic factor. Her red cell survival is normal and no antibody is detectable on the surface of her red cells. Which mechanism best explains her anemia?",
    options: [
      "Antibody binds intrinsic factor and prevents it from mediating vitamin B12 absorption, so the anemia results from interference with a protein's normal function rather than from destruction of red cells",
      "Antibody binds a fixed antigen on red cells, which are then lysed by complement and removed by splenic macrophages",
      "Immune complexes of intrinsic factor and antibody deposit in the bone marrow and recruit neutrophils",
      "Cytotoxic T cells kill erythroid precursors displaying intrinsic factor peptides on MHC class I",
      "IgE against intrinsic factor triggers mast cell degranulation in the gastric mucosa"
    ],
    answer: 0,
    explanation: "Type II reactions are often summarized as antibody-mediated cell destruction, but a second, non-cytotoxic arm is just as important: antibodies can bind cell-surface receptors or secreted proteins and interfere with normal physiology without killing anything. Autoimmune pernicious anemia is the lecture's example of interference with a secreted protein. Antibody to intrinsic factor blocks its role in vitamin B12 absorption, B12 deficiency impairs hematopoiesis, and the result is anemia. The clues that this is interference rather than destruction are given: red cell survival is normal and there is no antibody on the red cell surface, so the cells themselves are not the target. Compare the other two non-cytotoxic examples from this lecture, both involving receptors: in Graves' disease antibody stimulates the TSH receptor, and in myasthenia gravis antibody blocks the acetylcholine receptor. Immune complex deposition would be type III and would produce systemic vasculitic features, and no T cell or IgE mechanism is implicated here.",
    ref: "Hypersensitivity · LO1/LO6 · Type II: antibodies interfering with normal function (pernicious anemia)"
  },
  {
    id: "H16", lec: "H", topic: "Stimulating vs blocking antibody", figure: "hAgonist", priority: "must", difficulty: "hard",
    caption: "IgG purified from two patients, each with a diffusely enlarged thyroid, added to cultured thyroid follicular cells.",
    stem: "Two patients each have a diffusely enlarged thyroid and IgG autoantibodies against the TSH receptor. Patient 1 has weight loss, tremor and suppressed serum TSH; patient 2 has fatigue, cold intolerance and a markedly elevated serum TSH. Their purified IgG is tested on cultured thyroid cells, with results shown. Which statement best explains the difference in their diseases?",
    options: [
      "Both antibodies bind the same receptor, but patient 1's acts as an agonist and drives hormone production without TSH, while patient 2's occupies the receptor without activating it and blocks TSH from binding",
      "Patient 1's antibody is cytotoxic and destroys thyroid cells, while patient 2's is non-cytotoxic",
      "Patient 1 has a type II reaction and patient 2 has a type III reaction with immune complexes in the thyroid",
      "Patient 2's antibody is IgE rather than IgG, which is why it fails to raise cAMP",
      "The difference is explained by complement: patient 1's antibody activates complement and patient 2's does not"
    ],
    answer: 0,
    explanation: "Both patients have the same type of reaction, directed at the same fixed cell-surface antigen, and the entire difference lies in what the antibody does to the receptor once bound. Patient 1's IgG raises cAMP almost as much as TSH does with no TSH present, so it is an agonist: it drives thyroid hormone production autonomously, and the resulting hormone excess suppresses pituitary TSH through negative feedback. That is Graves' disease. Patient 2's IgG raises nothing on its own and, crucially, prevents TSH from raising cAMP when both are added, so it is a blocking antibody: the receptor is occupied but silent, hormone output falls, and the pituitary responds by driving TSH up. Both are non-cytotoxic type II reactions, which is the point — antibody against a cell-surface receptor can either switch the cell on or shut it off, and the clinical picture follows directly from which. Note that the serum TSH moves in opposite directions in the two patients, which is often the fastest way to tell them apart.",
    ref: "Hypersensitivity · LO1/LO6 · Type II: stimulating versus blocking antireceptor antibodies"
  },
  {
    id: "H17", lec: "H", topic: "How type III injures tissue", figure: "hDepl", priority: "must", difficulty: "hard",
    caption: "Preformed immune complexes injected into the skin of animals depleted of individual components beforehand. Injury scored at 6 hours.",
    stem: "Preformed immune complexes are injected into the skin of animals that have first been depleted of one or more components. Results are shown. Which conclusion is best supported?",
    options: [
      "Immune complexes themselves cause little injury: they activate complement, whose fragments recruit neutrophils, and it is the neutrophils' released enzymes that damage the tissue",
      "Immune complexes damage tissue directly by physically obstructing the vessel lumen, which is why depletion has only a modest effect",
      "The membrane attack complex lyses the vessel wall directly, so neutrophils are irrelevant to the injury",
      "T cells are the effector population, as shown by the T cell-depleted animals",
      "Neutrophils cause injury independently of complement, since neutrophil depletion alone abolishes it"
    ],
    answer: 0,
    explanation: "The depletion series dissects the pathway in order. Complexes deposit, but on their own they do little: depleting complement sharply reduces both the neutrophil influx and the injury, which places complement upstream. The fragments generated — C5a and C3a — are chemotactic and recruit neutrophils, and when neutrophils are removed the injury is almost abolished even though the complexes are still there and complement is still intact, which identifies the neutrophil as the effector that actually damages the tissue through the enzymes it releases. Fc receptor engagement on those leukocytes contributes alongside complement. The T cell-depleted animals are the specificity control: the reaction is unchanged, confirming this is an antibody-driven type III process and not a T cell-mediated type IV one. Clinically this is why type III disease shows up as vasculitis, glomerulonephritis and arthritis wherever complexes settle, and why serum complement falls as it is consumed.",
    ref: "Hypersensitivity · LO4 · Type III: complement activation, neutrophil recruitment and tissue injury"
  },
  {
    id: "H18", lec: "H", topic: "Celiac disease", priority: "should", difficulty: "hard",
    stem: "A 28-year-old has chronic diarrhea, bloating and iron deficiency. Duodenal biopsy shows villous atrophy, crypt hyperplasia and a dense intraepithelial lymphocyte infiltrate. Symptoms and histology resolve after removal of dietary gluten and return on rechallenge, with the mucosal changes developing over days rather than minutes. Which mechanism best accounts for the mucosal damage?",
    options: [
      "CD4+ T cells responding to gluten-derived peptides presented in the mucosa drive a cytokine-mediated inflammatory response, with intraepithelial cytotoxic lymphocytes killing enterocytes — a T cell-mediated reaction",
      "Gluten-specific IgE on mucosal mast cells triggers degranulation on each exposure, producing the villous atrophy",
      "Circulating immune complexes of gluten and IgG deposit in the intestinal microvasculature and recruit neutrophils",
      "Antibody binds a fixed antigen on the enterocyte surface, and complement lyses the epithelium directly",
      "Gluten is directly toxic to enterocytes and the lymphocyte infiltrate is an incidental finding"
    ],
    answer: 0,
    explanation: "Celiac disease is the lecture's gastrointestinal example of a type IV reaction, and the biopsy is what settles the mechanism. The infiltrate is lymphocytic rather than neutrophilic or eosinophilic, and the lymphocytes sit within the epithelium, where they kill enterocytes directly; the loss of enterocytes faster than they can be replaced produces villous atrophy with compensatory crypt hyperplasia, and the loss of absorptive surface explains the diarrhea and the iron deficiency. CD4+ T cells responding to gluten-derived peptides supply the cytokines that drive the inflammation. The tempo also fits: damage accumulates over days of continued exposure and resolves slowly on withdrawal, rather than appearing within minutes as an IgE-mediated reaction would. A neutrophil-rich vasculitic picture would suggest immune complexes, and complement-mediated lysis of the epithelium would require an antibody against a fixed epithelial antigen, which is not the mechanism here.",
    ref: "Hypersensitivity · LO5/LO6 · Type IV: T cell-mediated disease (celiac disease)"
  },
  {
    id: "H19", lec: "H", topic: "Granuloma formation", priority: "should", difficulty: "hard",
    stem: "A patient with a persistent intracellular infection has nodular lesions on biopsy composed of tightly packed activated macrophages with epithelioid and multinucleated forms, surrounded by a cuff of lymphocytes. Which process best explains why this particular structure forms?",
    options: [
      "Antigen that cannot be eliminated keeps CD4+ T cells producing cytokines such as IFN-γ, and the sustained classical (M1) activation of macrophages walls the organism off in a nodule of inflammatory tissue",
      "Neutrophils recruited by complement fragments accumulate and are progressively replaced by macrophages over hours",
      "Immune complexes deposit in the tissue and the nodule is organized around the deposits",
      "Mast cells degranulate repeatedly, and the nodule is the late-phase reaction to their mediators",
      "B cells form a germinal center in the tissue, and the epithelioid cells are plasma cells"
    ],
    answer: 0,
    explanation: "A granuloma is what a type IV response produces when the antigen will not go away. In an ordinary delayed-type reaction, CD4+ T cells recognize antigen presented in the tissue and release cytokines, with IFN-γ from Th1 cells classically activating macrophages (M1) to kill intracellular organisms; the reaction resolves once the antigen is cleared. When the organism resists killing and persists, the cytokine signal is prolonged, and chronically activated macrophages change morphology into epithelioid and multinucleated giant cells and aggregate into a nodule, with the responsible T cells surrounding it. The structure represents containment rather than clearance. The cellular composition is the diagnostic feature: macrophages and lymphocytes, not neutrophils, which would point toward complement- and immune complex-driven injury, and not plasma cells or mast cells. Dr. Zhang flags tuberculosis as the example to be developed in the lower respiratory infection lecture.",
    ref: "Hypersensitivity · LO5 · Type IV: cytokine-mediated inflammation, M1 activation and granuloma formation"
  },
  {
    id: "H20", lec: "H", topic: "Why delayed is delayed", figure: "hSkin", priority: "must", difficulty: "hard",
    caption: "Two intradermal skin tests in the same sensitized person: antigen A is an environmental allergen, antigen B a protein from an organism she encountered years earlier. Swelling measured over 72 hours.",
    stem: "A sensitized person receives two intradermal test injections and the resulting skin swelling is measured over 72 hours. Results are shown. Which statement best explains the difference in timing between the two reactions?",
    options: [
      "Reaction A uses preformed mediators released by mast cells already armed with IgE, so it appears in minutes; reaction B requires antigen presentation and recruitment of circulating memory T cells into the skin, where they must then produce cytokines, which takes 24–72 hours",
      "Reaction B is slower because IgG takes longer to diffuse out of vessels than IgE does",
      "Reaction A is faster because its antigen is smaller and diffuses more quickly through the dermis",
      "Reaction B reflects a second wave of mast cell degranulation after the first wave of granules is exhausted",
      "Reaction B is slower because complement must be synthesized locally before it can be activated"
    ],
    answer: 0,
    explanation: "The two time courses are the clearest illustration of why the Gell and Coombs types are named the way they are. Immediate hypersensitivity is fast because nothing has to be made or moved: allergen-specific IgE is already bound to FcεRI on dermal mast cells, cross-linking releases preformed granule contents within minutes, and the vasoactive amines produce a wheal that fades within about an hour. Delayed-type hypersensitivity is slow because the effector cells are not there yet. Antigen must be taken up and presented locally, circulating memory T cells specific for it must be recruited into the skin, and only then do they produce the cytokines that activate macrophages and generate the firm induration, which is why a fully developed response takes 24 to 72 hours. Note what distinguishes induration from a wheal: the type IV lesion is a cellular infiltrate, whereas the type I lesion is edema from vascular leakage. Diffusion rates, antigen size and complement synthesis are not what sets the tempo.",
    ref: "Hypersensitivity · LO1/LO5 · Immediate versus delayed-type hypersensitivity: mechanism and timing"
  },
  {
    id: "H21", lec: "H", topic: "Classifying reactions", figure: "hClass", priority: "must", difficulty: "hard",
    caption: "Five patients presenting to different clinics.",
    stem: "Five patients are summarized in the table. Using the Gell and Coombs classification, which grouping is correct?",
    options: [
      "1 is type I; 2 and 5 are type II; 3 is type III; 4 is type IV",
      "1 and 4 are type I; 2 and 3 are type II; 5 is type III",
      "1 is type I; 2 and 3 are type III; 4 and 5 are type IV",
      "2, 3 and 5 are all type III, since all three are mediated by IgG",
      "4 is type III, since the reaction appears a day or more after exposure"
    ],
    answer: 0,
    explanation: "Two questions sort any case: what is the immune reactant, and where is the antigen. Patient 1 has IgE and a reaction within minutes of exposure, so type I. Patients 2 and 5 both have IgG against a fixed antigen on a cell surface — the acetylcholine receptor at the neuromuscular junction and the TSH receptor on thyroid cells — so both are type II, even though one antibody blocks and the other stimulates, and even though the diseases look nothing alike. Patient 3 has IgG against a soluble foreign protein, forming circulating immune complexes that deposit in vessels, joints and glomeruli and consume complement, giving the systemic picture of type III. Patient 4 has a T cell infiltrate and a reaction peaking at 48 hours, so type IV. The two tempting errors are both represented: grouping every IgG-mediated disease together ignores the fixed-versus-soluble distinction that separates types II and III, and classifying by timing alone misreads contact dermatitis, which is delayed because it is T cell-mediated, not because complexes took time to form.",
    ref: "Hypersensitivity · LO1/LO4/LO6 · Classifying reactions by immune reactant and antigen location"
  }
);

Object.assign(FIGS, {
  hAgonist: FTABLE(["Added to cultured thyroid follicular cells", "cAMP (relative units)"], [
    ["Medium alone", "1.0"],
    ["TSH", "9.4"],
    ["Patient 1 IgG (no TSH)", "8.7"],
    ["Patient 2 IgG (no TSH)", "1.1"],
    ["TSH + patient 2 IgG", "1.4"],
    ["TSH + control IgG from a healthy donor", "9.1"]
  ]),
  hDepl: FTABLE(["Depleted before the complexes were injected", "Neutrophil influx", "Tissue injury"], [
    ["Nothing (control)", "+++", "+++"],
    ["Complement", "+", "+"],
    ["Neutrophils", "–", "+ (minimal)"],
    ["Complement and neutrophils", "–", "–"],
    ["T cells", "+++", "+++"]
  ]),
  hClass: FTABLE(["Patient", "Findings"], [
    ["1", "Hives and wheeze within 10 minutes of an insect sting; venom-specific IgE detected"],
    ["2", "Fatigable ptosis and proximal weakness; IgG against acetylcholine receptors at the neuromuscular junction"],
    ["3", "Fever, arthritis, rash and proteinuria with low serum C3, one week after infusion of a foreign protein"],
    ["4", "Sharply demarcated plaques 48 hours after skin contact with a chemical; T cell infiltrate on biopsy"],
    ["5", "Weight loss and tremor with suppressed TSH; IgG that activates the TSH receptor"]
  ]),
  hSkin: (() => {
    const pts = ["20 min", "1 h", "6 h", "24 h", "48 h", "72 h"];
    const A = [14, 9, 4, 0, 0, 0], B = [0, 0, 1, 6, 11, 12];
    const X = i => 78 + i * 74, Y = v => 182 - v * 10.4, W = 24;
    return `<svg viewBox="0 0 560 250" font-family="inherit">
    ${[0, 5, 10, 15].map(v => `<text x="56" y="${Y(v) + 4}" text-anchor="end" font-size="10.5" style="fill:var(--muted)">${v}</text><line x1="62" y1="${Y(v)}" x2="520" y2="${Y(v)}" style="stroke:var(--line);stroke-width:1"/>`).join("")}
    <line x1="62" y1="20" x2="62" y2="182" style="stroke:var(--muted);stroke-width:1.5"/><line x1="62" y1="182" x2="520" y2="182" style="stroke:var(--muted);stroke-width:1.5"/>
    ${pts.map((t, i) => `
      <rect x="${X(i) - W - 2}" y="${Y(A[i])}" width="${W}" height="${(182 - Y(A[i])).toFixed(1)}" rx="2" style="fill:var(--h)"/>
      <rect x="${X(i) + 2}" y="${Y(B[i])}" width="${W}" height="${(182 - Y(B[i])).toFixed(1)}" rx="2" style="fill:var(--t)"/>
      <text x="${X(i)}" y="198" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">${t}</text>`).join("")}
    <text x="20" y="100" text-anchor="middle" font-size="11.5" style="fill:var(--muted)" transform="rotate(-90 20 100)">Swelling (mm)</text>
    <text x="291" y="216" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Time after intradermal injection</text>
    ${[["Antigen A", "var(--h)"], ["Antigen B", "var(--t)"]].map(([t, c], i) => `<rect x="${[180, 300][i]}" y="234" width="14" height="12" rx="2" style="fill:${c}"/><text x="${[180, 300][i] + 20}" y="244" font-size="11" style="fill:var(--ink)">${t}</text>`).join("")}
  </svg>`;
  })()
});
