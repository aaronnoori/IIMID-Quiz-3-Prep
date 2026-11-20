/* =====================================================================
   Immunologic Tolerance and Autoimmunity (lec "A")
   Written from the lecture slides + session LOs + transcript + flashcards.
   Batch 1: A1–A11.
   LO1 central/peripheral T cell tolerance + Tregs  → A1–A5
   LO2 central/peripheral B cell tolerance, editing → A6–A8
   LO3 genetic factors & infections                 → A9, A11
   LO4 molecular mimicry                            → A10
   ===================================================================== */
QUESTIONS.push(
  {
    id: "A1", lec: "A", topic: "Central T cell tolerance (AIRE)", priority: "must", difficulty: "hard",
    stem: "A 7-year-old girl has had recurrent oral and nail candidiasis since infancy. At age 5 she presented with tetany and a low serum calcium from hypoparathyroidism, and she has now developed adrenal insufficiency. Autoantibodies against parathyroid and adrenal tissue are present. Her thymus is structurally normal on imaging, and her T cell and B cell counts, immunoglobulin levels and vaccine responses are all normal. Sequencing shows a loss-of-function mutation in a gene whose product acts in medullary thymic epithelial cells. Which process has most likely failed in this girl?",
    options: [
      "Expression of tissue-restricted self antigens by medullary thymic epithelial cells, so thymocytes that bound those antigens with high affinity were never deleted",
      "Positive selection of thymocytes on MHC molecules in the thymic cortex",
      "Generation of natural regulatory T cells in peripheral tissues in response to TGF-β",
      "Receptor editing of autoreactive immature B cells in the bone marrow",
      "Expression of B7 costimulators by antigen-presenting cells in peripheral tissues"
    ],
    answer: 0,
    explanation: "This is the AIRE (autoimmune regulator) pathway, and the clinical picture is APECED: chronic candidiasis with hypoparathyroidism and adrenal insufficiency. AIRE drives expression of hundreds of tissue-restricted antigens in medullary thymic epithelial cells, so that developing thymocytes meet antigens that normally function far outside the thymus. Thymocytes that bind those self peptide–MHC complexes with too high an affinity are deleted: negative selection, the core of central T cell tolerance. Without functional AIRE those self-reactive T cells are never eliminated, mature, and leave for tissues where the antigen keeps being made, which is why the autoimmunity is endocrine and multi-organ. Positive selection is intact: she has normal T cell numbers. Natural Tregs are made in the thymus; it is inducible Tregs that arise peripherally with TGF-β. Receptor editing is a B cell mechanism in the marrow, and her antibody responses are normal. Failure of peripheral B7 expression would blunt immune responses, not cause autoimmunity.",
    ref: "Tolerance & Autoimmunity · LO1 · AIRE and deletion of autoreactive thymocytes (APECED)"
  },
  {
    id: "A2", lec: "A", topic: "Peripheral T cell tolerance: anergy", figure: "aAnergy", priority: "must", difficulty: "hard",
    caption: "IL-2 made by purified ovalbumin-specific naive CD4+ T cells in a first culture, and again after the same cells were washed and restimulated with ovalbumin peptide on fully activated, B7-high APCs.",
    stem: "Purified ovalbumin-specific naive CD4+ T cells are cultured under the four conditions shown, then washed and restimulated with ovalbumin peptide presented by fully activated APCs. Results are shown. Which process best explains the behavior of the cells in condition 1?",
    options: [
      "Antigen recognition without costimulation induced anergy, a lasting unresponsive state in those antigen-specific T cells",
      "The resting APCs failed to present peptide, so those T cells never encountered their antigen",
      "The T cells underwent negative selection and were deleted during the first culture",
      "The T cells differentiated into Th1 cells that secrete IFN-γ in place of IL-2",
      "Regulatory T cells in the culture consumed the IL-2 as fast as it was produced"
    ],
    answer: 0,
    explanation: "A primary T cell response needs two signals: TCR recognition of peptide–MHC (signal 1) and CD28 engaging B7 on the APC (signal 2). B7 goes up only when innate receptors sense a microbe, which is the danger signal that licenses a response. Peptide delivered by a resting, B7-negative APC gives signal 1 alone, and that does not merely fail to activate the cell: it induces anergy, a functionally nonresponsive state that persists, so the cell stays silent even when it later meets the same antigen with full costimulation. Condition 4 is the control that excludes a dead or incompetent culture: cells never exposed to peptide respond normally on restimulation, so the unresponsiveness is acquired and antigen-specific. Condition 3 excludes a presentation problem: the same resting APCs work once a CD28 signal is supplied artificially, so what was missing was costimulation. Deletion would mean the cells are gone rather than present and unresponsive, and anergic T cells also upregulate the inhibitory receptors CTLA-4 and PD-1, which reinforces the state. A Th1 switch would still leave the cells responsive, and these cultures are purified antigen-specific cells, so there are no Tregs to consume IL-2.",
    ref: "Tolerance & Autoimmunity · LO1 · Peripheral T cell tolerance: anergy when costimulation is absent"
  },
  {
    id: "A3", lec: "A", topic: "Treg development: nTreg vs iTreg", figure: "aTreg", priority: "must", difficulty: "hard",
    caption: "Naive CD4+ T cells sorted to be FoxP3-negative, stimulated through the TCR for 5 days with the additions shown. Suppression was tested by adding the resulting cells to a separate culture of antigen-stimulated responder T cells.",
    stem: "A lab asks how a CD4+ T cell that meets antigen in a peripheral tissue can end up suppressing immune responses rather than driving them. FoxP3-negative naive CD4+ T cells are stimulated through the TCR with the additions shown. Which conclusion is best supported by these results?",
    options: [
      "Inducible Tregs arise when antigen is recognized in the presence of TGF-β and in the absence of pro-inflammatory cytokines; with IL-6 present the same precursor becomes Th17 instead",
      "TGF-β and IL-6 together give the strongest Treg induction, since both signals are required for FoxP3",
      "FoxP3 expression requires thymic selection and cannot be induced in a peripheral CD4+ T cell",
      "IL-6 is the inducer of FoxP3, and TGF-β only amplifies what IL-6 starts",
      "Suppressive capacity is independent of FoxP3, since the TGF-β + IL-6 cells suppress just as well"
    ],
    answer: 0,
    explanation: "The starting cells were sorted FoxP3-negative, so anything FoxP3-positive at the end was induced in culture: these are inducible Tregs (iTregs), the subset that arises in peripheral lymphoid tissue, as opposed to natural Tregs (nTregs), which are programmed to express FoxP3 in the thymus when developing CD4+ cells recognize self antigen. TGF-β alone drives FoxP3 and confers suppressive function. Adding the pro-inflammatory cytokine IL-6 sends the identical precursor down the Th17 path instead: FoxP3 collapses, IL-17 appears, and suppression is lost. That is the key conditional: TGF-β with pro-inflammatory cytokines gives Th17, TGF-β without them gives a Treg. Mechanistically this is how tolerance can hold in a quiet tissue and break during infection, when the cytokine milieu changes. FoxP3 tracks with suppression throughout, so the last option is contradicted by the data, and IL-6 alone induces neither.",
    ref: "Tolerance & Autoimmunity · LO1 · Development of Tregs: natural vs inducible (TGF-β without pro-inflammatory cytokines)"
  },
  {
    id: "A4", lec: "A", topic: "FoxP3 and Treg function (IPEX)", priority: "must", difficulty: "hard",
    stem: "A 4-month-old boy has intractable watery diarrhea with villous atrophy on biopsy, widespread eczematous dermatitis, and new-onset diabetes with islet autoantibodies; thyroid autoantibodies are also detected. A maternal uncle died in infancy with a similar illness. His lymphocyte subsets, immunoglobulin levels and antibody responses to vaccines are normal, but almost none of his CD4+ T cells are CD25-high, and intracellular FoxP3 staining is essentially absent. Which mechanism best explains his disease?",
    options: [
      "Loss of functional regulatory T cells, so self-reactive effector lymphocytes in many tissues are no longer suppressed",
      "Failure of AIRE-dependent negative selection, so autoreactive thymocytes escape into the periphery",
      "Failure of receptor editing, so autoreactive B cells dominate the mature repertoire",
      "Absence of B7 costimulators, so every T cell response that begins is driven into anergy",
      "Failure of conventional T cells to produce IL-2, so no T cell in the periphery can proliferate"
    ],
    answer: 0,
    explanation: "The X-linked inheritance pattern (an affected maternal uncle), the onset in infancy, and the triad of enteropathy, dermatitis and polyendocrinopathy identify IPEX, caused by loss-of-function mutations in FoxP3. The laboratory finding seals it: CD4+, CD25-high, FoxP3+ cells are the Treg markers, and they are missing. FoxP3 is required for Treg development and function, so peripheral tolerance fails wholesale and self-reactive cells attack gut, skin, islets and thyroid at once, which is why the disease is systemic and early rather than confined to one organ. An AIRE defect gives the APECED pattern instead (candidiasis, hypoparathyroidism, adrenal failure) and would leave CD25-high FoxP3+ cells intact. His normal vaccine responses argue against a B-cell-intrinsic defect such as failed receptor editing. A global failure of costimulation or of IL-2 production would present as immunodeficiency with infections, not as aggressive autoimmunity; note that Tregs themselves do not make IL-2, they depend on IL-2 produced by conventional T cells.",
    ref: "Tolerance & Autoimmunity · LO1 · FoxP3 and Treg development/function (IPEX)"
  },
  {
    id: "A5", lec: "A", topic: "Mechanisms of Treg suppression", figure: "aSupp", priority: "must", difficulty: "hard",
    caption: "Proliferation of antigen-stimulated responder T cells cultured with or without Tregs, as a percentage of the responders-alone control.",
    stem: "Tregs are added to antigen-stimulated responder T cells, and single components of suppression are then blocked or bypassed. Results are shown. Which conclusion is best supported?",
    options: [
      "Tregs suppress through several mechanisms at once — inhibitory cytokines, CTLA-4 engagement of B7, and consumption of IL-2 — so interrupting any single one restores proliferation only partly",
      "Tregs suppress solely by secreting the inhibitory cytokines IL-10 and TGF-β",
      "Tregs suppress solely by killing responder cells with granzymes and perforin, which none of these conditions can block",
      "Tregs act by secreting large amounts of IL-2 that the responder cells are unable to use",
      "Suppression requires that the responder cell recognize the identical antigen as the Treg"
    ],
    answer: 0,
    explanation: "Every single intervention gives partial recovery and none restores proliferation to control, which is the signature of parallel, non-redundant mechanisms. Blocking IL-10 and TGF-β removes the inhibitory cytokines. Blocking CTLA-4 removes the Treg's ability to bind B7 (CD80/CD86) on dendritic cells and strip that costimulation away from responders. Adding excess IL-2 overrides metabolic disruption: Tregs are CD25-high, so they soak up local IL-2 and starve dividing effector cells of it. Cytolysis by granzymes and perforin is a fourth mechanism, untouched here, which helps explain the residual suppression. Note the direction of the IL-2 relationship: Tregs do not produce IL-2; they consume it, and IL-2 made by conventional T cells is what signals through STAT5 to sustain FoxP3 and keep Tregs alive and competent. Suppression also does not require identical antigen specificity: a Treg activated by a self antigen in a tissue suppresses self-reactive cells responding to neighboring antigens in that same tissue.",
    ref: "Tolerance & Autoimmunity · LO1 · Mechanisms of action of Tregs; IL-2 dependence"
  },
  {
    id: "A6", lec: "A", topic: "Central B cell tolerance: receptor editing", figure: "aEdit", priority: "must", difficulty: "hard",
    caption: "Four immature B cell clones followed in the bone marrow. Each begins with a rearranged κ light chain; the self antigen each clone encountered is shown.",
    stem: "Immature B cell clones are followed in the bone marrow of mice that express a defined self antigen, and their light chain genes are sequenced over time. Results are shown. Which statement best explains the difference in outcome between clone 1 and clone 2?",
    options: [
      "Clone 1 resumed V–J recombination at the light chain locus and expressed a replacement κ chain with a new specificity; clone 2 did not, and continued strong self-antigen signaling deleted it",
      "Clone 1 switched its heavy chain constant region from IgM to IgG, which no longer bound the self antigen",
      "Clone 1 altered its variable region by somatic hypermutation in a germinal center, while clone 2 never entered one",
      "Clone 1 was rescued by T cell help in the marrow, which clone 2 failed to receive",
      "Clone 1 became anergic to the self antigen, while clone 2 underwent receptor editing"
    ],
    answer: 0,
    explanation: "Both clones illustrate central B cell tolerance, which operates on immature B cells expressing surface IgM in the bone marrow. High-avidity recognition of a multivalent, membrane-bound self antigen gives the cell two possible fates. The first is receptor editing: light chain gene recombination resumes, a further V–J rearrangement produces a new light chain, and because the light chain contributes to the binding site the receptor's specificity changes. Clone 1 shows exactly that, moving from Vκ4–Jκ1 to Vκ21–Jκ5 and losing self reactivity, after which it can leave the marrow. If editing does not fix the autoreactivity, as in clone 2, the cell is deleted by apoptosis: negative selection. Somatic hypermutation and class switching are germinal center events in mature B cells and need antigen plus T cell help, and switching changes the constant region, so it cannot alter specificity. There is no T cell help in the marrow. The last option reverses the two mechanisms, and anergy is instead what clone 3 shows after low-avidity recognition of a soluble antigen.",
    ref: "Tolerance & Autoimmunity · LO2 · Central B cell tolerance: receptor editing vs deletion"
  },
  {
    id: "A7", lec: "A", topic: "Avidity of self-antigen recognition", priority: "should", difficulty: "hard",
    stem: "Two transgenic mouse lines express the same protein as a self antigen: line 1 as a multivalent, membrane-bound form on bone marrow stromal cells, line 2 as a monomeric protein free in the serum. Both are crossed to a line in which every immature B cell expresses an IgM specific for that protein. In line 1, marrow B cells specific for the protein largely disappear, and those that persist are found to carry different light chains. In line 2, B cells are present in normal numbers and reach the spleen, but their surface IgM is markedly reduced and they neither proliferate nor secrete antibody when the mice are immunized with the protein. Which mechanism best accounts for the line 2 result?",
    options: [
      "Low-avidity recognition of a soluble self antigen leaves immature B cells alive but functionally anergic, with reduced antigen receptor expression",
      "High-avidity recognition triggered receptor editing in line 2 as well, so these B cells are no longer specific for the protein",
      "The line 2 B cells were deleted in the marrow, and the splenic cells are an unrelated population that never saw the antigen",
      "The line 2 B cells lack MHC class II, so they cannot present the protein and receive T cell help",
      "The soluble antigen induced class switching to IgG, which is why surface IgM is low"
    ],
    answer: 0,
    explanation: "Central B cell tolerance sorts immature B cells by how strongly they engage self antigen, and the form of the antigen sets that strength. Multivalent membrane-bound antigen cross-links many IgM molecules at once, giving a strong, high-avidity signal that triggers deletion or receptor editing, which is the line 1 phenotype: cells vanish, and survivors carry edited light chains. Monomeric soluble antigen engages the receptor weakly. Those cells are not killed; they survive and migrate out, but they downregulate surface IgM and are functionally unresponsive, which is anergy. The functional test in the stem confirms it: the cells are there in normal numbers yet make no response to the antigen they are specific for, so this is not deletion. Receptor editing would change their specificity rather than silence it. Class switching requires antigen plus T cell help in a germinal center and would not reduce receptor expression this way.",
    ref: "Tolerance & Autoimmunity · LO2 · Central B cell tolerance: high-avidity deletion/editing vs low-avidity anergy"
  },
  {
    id: "A8", lec: "A", topic: "Peripheral B cell tolerance", priority: "should", difficulty: "hard",
    stem: "Mature B cells specific for a soluble self protein can be found in the blood of healthy people, yet no autoantibody is produced. In a mouse strain with a loss-of-function mutation in the inhibitory Fc receptor FcγRIIB, B cells of the same specificity secrete high-titer autoantibody and the animals develop immune complex glomerulonephritis. Which combination best explains why these B cells are normally silent and why they are not silent in the mutant?",
    options: [
      "Repeated self-antigen binding without T cell help drives them into anergy and shortens their lifespan, while inhibitory receptors such as FcγRIIB raise the threshold for activation; losing that brake lets them respond",
      "They are normally deleted by negative selection in the bone marrow, and FcγRIIB is the receptor that delivers the deletion signal",
      "They are normally corrected by receptor editing in the spleen, a process that FcγRIIB initiates",
      "They normally fail to express surface IgD, and FcγRIIB is required for IgD expression",
      "They are normally suppressed by IgE bound to mast cells, and FcγRIIB is the high-affinity IgE receptor"
    ],
    answer: 0,
    explanation: "Peripheral B cell tolerance applies to mature B cells in the spleen and lymph nodes, and works three ways: anergy, deletion by apoptosis, and engagement of inhibitory receptors. A mature B cell that keeps binding a self antigen but never gets cognate T cell help becomes unresponsive, has a shortened lifespan and is deleted faster than its neighbors. On top of that, inhibitory receptors set the activation threshold. FcγRIIB carries an ITIM, so when antigen is already complexed with IgG it delivers a negative, feedback-inhibitory signal to the B cell. Remove that brake and the same autoreactive cells cross the threshold, class switch, and secrete IgG autoantibody, which with soluble self antigen produces immune complexes and nephritis — a type III effector mechanism. FcγRIIB polymorphisms are among the non-HLA risk variants for autoimmunity for exactly this reason. Note that these cells are, by definition, ones that escaped marrow deletion, and receptor editing is confined to immature B cells in the marrow. FcεRI, not FcγRIIB, binds IgE.",
    ref: "Tolerance & Autoimmunity · LO2 · Peripheral B cell tolerance: anergy, deletion, inhibitory receptors"
  },
  {
    id: "A9", lec: "A", topic: "Genetic factors in autoimmunity", figure: "aGen", priority: "must", difficulty: "hard",
    caption: "Risk of developing autoimmune disease X by relationship to an affected person. Population prevalence is 0.4%.",
    stem: "Autoimmune disease X affects 0.4% of the population. Family and twin data are shown. In addition, one HLA class II allele is carried by 94% of patients with disease X but also by 38% of healthy control subjects. Which conclusion is best supported by these findings together?",
    options: [
      "Susceptibility is inherited and polygenic with a large HLA contribution, but carrying the risk allele is necessary without being sufficient, so non-genetic factors are required to produce disease",
      "Disease X is caused by a single HLA gene acting with complete penetrance",
      "Because concordance in monozygotic twins is far below 100%, genetic factors make no meaningful contribution",
      "The HLA association indicates that the HLA molecule itself is the target of the autoantibodies in disease X",
      "Because most healthy carriers never become ill, the HLA allele is protective against disease X"
    ],
    answer: 0,
    explanation: "Read the two halves of the data together. Clustering in families, and far higher concordance in monozygotic than in dizygotic twins who share an environment, establish inherited susceptibility. HLA (MHC) genes make the single largest contribution, roughly half of the genetic susceptibility to autoimmune disease, with polymorphisms in non-HLA genes involved in immune regulation adding the rest; because several autoimmune diseases share risk loci, one patient may develop more than one. But monozygotic twins are genetically identical and still discordant most of the time, and the risk allele is common in healthy people, so MHC linkage is necessary but not sufficient: environmental contributions such as infection, chronic inflammation, hormonal status and pollutant exposure are needed to tip susceptibility into disease. Complete penetrance is excluded by the healthy carriers. An HLA association reflects which peptides a given MHC molecule can present to autoreactive T cells, not that the MHC protein is the autoantigen. Calling the allele protective inverts a 94% versus 38% enrichment in patients.",
    ref: "Tolerance & Autoimmunity · LO3 · Genetic factors: HLA and non-HLA susceptibility, necessary but not sufficient"
  },
  {
    id: "A10", lec: "A", topic: "Molecular mimicry", priority: "must", difficulty: "hard",
    stem: "A 9-year-old boy has pharyngitis caused by group A streptococcus. Three weeks later he develops fever, migratory arthritis and a new murmur, and echocardiography confirms carditis. His serum contains antibody that binds both a streptococcal cell wall protein and human cardiac myosin. When the serum is pre-absorbed with the purified streptococcal protein, reactivity to cardiac myosin is removed as well. Which mechanism best explains his cardiac disease?",
    options: [
      "Sequence similarity between a microbial peptide and a self protein allowed the anti-streptococcal response to cross-react with cardiac tissue",
      "Bystander activation: the infection made tissue APCs express costimulators, which activated self-reactive lymphocytes of unrelated specificity",
      "Failure of AIRE-dependent deletion of myosin-specific thymocytes during his T cell development",
      "Polyclonal activation of B cells by a superantigen, generating antibodies of essentially every specificity",
      "Deposition of preformed streptococcal antigen–antibody immune complexes on the heart valves"
    ],
    answer: 0,
    explanation: "This is molecular mimicry: an infectious microbe makes a peptide antigen that shares sequence similarity with a human self antigen, so the response raised against the microbe cross-activates autoreactive T or B cells and attacks self. Rheumatic fever is the classic example, with human cardiac myosin sharing peptide sequence with a Streptococcus pyogenes cell wall protein. The absorption experiment is what pins the mechanism down: removing the antibody that binds the streptococcal protein also removes the anti-myosin reactivity, so a single cross-reactive antibody population is responsible rather than two independent responses. The latency of a few weeks fits the time needed to mount a switched antibody response to the infection. Bystander activation also links infection to autoimmunity, but works by supplying costimulation to self-reactive cells of unrelated specificity, and would not produce cross-reactive antibody. An AIRE defect would present as multi-organ endocrine autoimmunity (APECED), not a single post-infectious episode. A superantigen response would not be antigen-specific, and immune complex deposition would not explain antibody that binds both proteins.",
    ref: "Tolerance & Autoimmunity · LO4 · Molecular mimicry in the induction of autoimmunity (rheumatic fever)"
  },
  {
    id: "A11", lec: "A", topic: "Bystander activation vs mimicry", priority: "should", difficulty: "hard",
    stem: "Mice that express a defined protein only in their pancreatic islets carry detectable self-reactive CD4+ T cells specific for that protein, yet remain healthy for life. They are then infected with a virus that replicates in the pancreas. Within two weeks the islets are infiltrated and destroyed by those same self-reactive T cells. Sequence analysis shows no similarity between any viral protein and the islet antigen, and islet antigen-presenting cells taken from infected mice express high levels of B7. Which mechanism best explains the loss of tolerance?",
    options: [
      "Local innate responses to the infection activated tissue APCs to express costimulators and cytokines, so self-reactive T cells previously held unresponsive now received a second signal",
      "Molecular mimicry, since a virus can only break tolerance by sharing a peptide sequence with the self antigen",
      "The virus deleted regulatory T cells as they developed in the thymus, releasing central tolerance",
      "The self-reactive T cells class switched to IgG and formed immune complexes that deposited in the islets",
      "The infection reversed positive selection in the thymus, exporting a new autoreactive repertoire"
    ],
    answer: 0,
    explanation: "This is bystander activation. Peripheral tolerance to a tissue-restricted antigen depends on self-reactive T cells meeting that antigen without costimulation, which keeps them anergic or simply ignorant of it. An infection in that tissue recruits leukocytes and activates resident APCs through innate receptors; those APCs upregulate B7 and secrete T cell-activating cytokines. Self-reactive T cells that happen to be in the neighborhood now get signal 1 and signal 2 together, and tolerance breaks even though the pathogen has nothing antigenically in common with the self protein. The two features that separate this from molecular mimicry are stated in the stem: no sequence similarity between viral and self antigens, and demonstrable B7 upregulation, so the trigger is the inflammatory context rather than cross-reactivity. Note that both mechanisms operate on a genetically susceptible background. T cells do not class switch or make antibody, and nothing here acts on thymic selection, which is complete long before the infection.",
    ref: "Tolerance & Autoimmunity · LO3/LO4 · Infections and autoimmunity: bystander activation vs molecular mimicry"
  }
);

Object.assign(FIGS, {
  aAnergy: FTABLE(["First culture", "IL-2 in first culture", "IL-2 after restimulation with peptide on activated APCs"], [
    ["1. Peptide on resting APCs (B7-negative)", "None", "None"],
    ["2. Peptide on activated APCs (B7-high)", "High", "High"],
    ["3. Peptide on resting APCs + an antibody that delivers a CD28 signal", "High", "High"],
    ["4. Resting APCs, no peptide", "None", "High"]
  ]),
  aTreg: FTABLE(["Added to the culture", "FoxP3+ cells (%)", "IL-17+ cells (%)", "Suppresses responder proliferation?"], [
    ["Nothing", "2", "1", "No"],
    ["TGF-β", "46", "2", "Yes"],
    ["TGF-β + IL-6", "4", "38", "No"],
    ["IL-6", "2", "5", "No"]
  ]),
  aEdit: FTABLE(["Clone", "Self antigen encountered", "First κ light chain", "Light chain later", "Fate"], [
    ["1", "Membrane-bound, multivalent", "Vκ4–Jκ1 (binds strongly)", "Vκ21–Jκ5 (no longer binds)", "Exits marrow; mature, not autoreactive"],
    ["2", "Membrane-bound, multivalent", "Vκ4–Jκ1 (binds strongly)", "Unchanged", "Apoptosis in the marrow"],
    ["3", "Soluble, monomeric", "Vκ4–Jκ1 (binds weakly)", "Unchanged", "Survives; surface IgM low; unresponsive"],
    ["4", "None detectable", "Vκ9–Jκ2", "Unchanged", "Exits marrow; mature B cell"]
  ]),
  aSupp: (() => {
    const rows = [
      ["Responders alone", 100],
      ["+ Tregs", 18],
      ["+ Tregs, anti-IL-10 + anti-TGF-β", 52],
      ["+ Tregs, anti-CTLA-4", 61],
      ["+ Tregs, excess IL-2 added", 74]
    ];
    const x0 = 238, sc = 2.6, Y = i => 26 + i * 34;
    return `<svg viewBox="0 0 580 224" font-family="inherit">
    ${[0, 25, 50, 75, 100].map(v => `<line x1="${x0 + v * sc}" y1="18" x2="${x0 + v * sc}" y2="${Y(rows.length - 1) + 20}" style="stroke:var(--line);stroke-width:1"/><text x="${x0 + v * sc}" y="${Y(rows.length - 1) + 34}" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">${v}</text>`).join("")}
    ${rows.map(([t, v], i) => `
      <text x="${x0 - 10}" y="${Y(i) + 11}" text-anchor="end" font-size="11" style="fill:var(--ink)">${t}</text>
      <rect x="${x0}" y="${Y(i)}" width="${(v * sc).toFixed(1)}" height="16" rx="2" style="fill:${i === 0 ? "var(--muted)" : "var(--a)"}"/>
      <text x="${x0 + v * sc + 7}" y="${Y(i) + 12}" font-size="11" font-weight="700" style="fill:var(--ink)">${v}%</text>`).join("")}
    <line x1="${x0}" y1="18" x2="${x0}" y2="${Y(rows.length - 1) + 20}" style="stroke:var(--muted);stroke-width:1.5"/>
    <text x="${x0 + 130}" y="218" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Responder proliferation (% of responders alone)</text>
  </svg>`;
  })(),
  aGen: (() => {
    const bars = [
      [["General", "population"], 0.4],
      [["Sibling of", "a patient"], 6],
      [["Dizygotic", "twin"], 7],
      [["Monozygotic", "twin"], 35]
    ];
    const X = i => 96 + i * 104, Y = v => 180 - v * 4.1, W = 56;
    return `<svg viewBox="0 0 520 248" font-family="inherit">
    ${[0, 10, 20, 30, 40].map(v => `<text x="56" y="${Y(v) + 4}" text-anchor="end" font-size="10.5" style="fill:var(--muted)">${v}</text><line x1="62" y1="${Y(v)}" x2="490" y2="${Y(v)}" style="stroke:var(--line);stroke-width:1"/>`).join("")}
    <line x1="62" y1="22" x2="62" y2="180" style="stroke:var(--muted);stroke-width:1.5"/>
    <line x1="62" y1="180" x2="490" y2="180" style="stroke:var(--muted);stroke-width:1.5"/>
    ${bars.map(([t, v], i) => `
      <rect x="${X(i) - W / 2}" y="${Y(v).toFixed(1)}" width="${W}" height="${(180 - Y(v)).toFixed(1)}" rx="2" style="fill:var(--a)"/>
      <text x="${X(i)}" y="${Y(v) - 7}" text-anchor="middle" font-size="11.5" font-weight="700" style="fill:var(--ink)">${v}%</text>
      <text x="${X(i)}" y="196" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">${t[0]}<tspan x="${X(i)}" dy="13">${t[1]}</tspan></text>`).join("")}
    <text x="20" y="104" text-anchor="middle" font-size="11.5" style="fill:var(--muted)" transform="rotate(-90 20 104)">Risk of disease X (%)</text>
    <text x="276" y="240" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Relationship to an affected person</text>
  </svg>`;
  })()
});

/* ---------------------------------------------------------------------
   Batch 2: A12–A21.
   --------------------------------------------------------------------- */
QUESTIONS.push(
  {
    id: "A12", lec: "A", topic: "Immunological ignorance", priority: "should", difficulty: "hard",
    stem: "A mouse line expresses a protein at very low levels in a peripheral tissue. T cells specific for that protein are present in normal numbers, are not FoxP3+, and proliferate vigorously when the protein is presented to them in vitro by activated antigen-presenting cells. Depleting regulatory T cells causes no disease. However, immunizing the mice with the same protein in a strong adjuvant produces tissue destruction within two weeks. Which mechanism best describes the state of these T cells before immunization?",
    options: [
      "Immunological ignorance: the cells are fully competent but have relatively low affinity for the self antigen and never encounter it in a form or amount that activates them",
      "Anergy: the cells have been rendered functionally unresponsive by antigen recognition without costimulation",
      "Deletion: the self-reactive clones were removed, and the cells now present are a different specificity",
      "Active suppression: regulatory T cells specific for the protein hold the response in check",
      "Receptor editing: the cells replaced their antigen receptors with ones that no longer bind the protein"
    ],
    answer: 0,
    explanation: "Each peripheral mechanism leaves a different fingerprint, and the three negative findings here exclude the alternatives one by one. The cells are present in normal numbers, so they were not deleted. They proliferate fully when given antigen with costimulation in vitro, so they are not anergic — an anergic cell stays unresponsive even on proper restimulation. Depleting Tregs does nothing, so they are not being actively suppressed. What remains is ignorance: lymphocytes with relatively low affinity for a self antigen that is present at low levels or in a location where they do not productively meet it simply make no effector response, while remaining perfectly capable of one. Ignorance is the most fragile of the mechanisms, because nothing is actively enforcing it, which is why a strong adjuvant that supplies abundant antigen and costimulation can break it and produce autoimmunity. Receptor editing applies to immature B cells in the bone marrow, not to peripheral T cells.",
    ref: "Tolerance & Autoimmunity · LO1 · Peripheral tolerance: immunological ignorance"
  },
  {
    id: "A13", lec: "A", topic: "CTLA-4 and PD-1", priority: "must", difficulty: "hard",
    stem: "Two strains of mice each lack one inhibitory receptor. Strain 1 lacks CTLA-4 and dies within weeks of a massive lymphoproliferative disorder with T cell infiltration of many organs. Strain 2 lacks PD-1 and develops milder, later, organ-restricted autoimmunity. Which difference in how the two receptors work best explains these phenotypes?",
    options: [
      "CTLA-4 acts early at the point of activation, outcompeting CD28 for B7 and so removing costimulation from T cells being primed; PD-1 acts later on already differentiated effector T cells in peripheral tissues, dampening their responses there",
      "CTLA-4 binds peptide–MHC and blocks signal 1, while PD-1 binds B7 and blocks signal 2",
      "CTLA-4 is expressed only on regulatory T cells and PD-1 only on B cells, so losing CTLA-4 removes all suppression",
      "PD-1 deletes self-reactive thymocytes during negative selection, so its loss affects central rather than peripheral tolerance",
      "CTLA-4 is an activating receptor whose loss reduces T cell responses, while PD-1 is inhibitory"
    ],
    answer: 0,
    explanation: "Both receptors enforce peripheral tolerance, and both are upregulated on T cells that recognize antigen, including anergic cells, but they act at different points. CTLA-4 binds the same B7 molecules (CD80/CD86) that CD28 binds, and with much higher affinity, so it competes costimulation away at the moment of priming; regulatory T cells also express it constitutively and use it to strip B7 from dendritic cells. Losing a brake that operates on priming across the whole repertoire produces exactly what strain 1 shows: early, generalized, fatal lymphoproliferation. PD-1 engages PD-L1 and PD-L2 and acts later and more locally, restraining differentiated effector T cells within tissues, so its loss produces a milder and more organ-restricted disease. Neither receptor blocks signal 1, neither operates in thymic selection, and both are inhibitory — the clinical trade-off with therapeutic checkpoint blockade, where releasing these brakes to unleash antitumor immunity also provokes autoimmune toxicity, follows directly from this.",
    ref: "Tolerance & Autoimmunity · LO1 · Inhibitory receptors in peripheral T cell tolerance (CTLA-4, PD-1)"
  },
  {
    id: "A14", lec: "A", topic: "How Treg suppression is targeted", priority: "should", difficulty: "hard",
    stem: "Regulatory T cells specific for self antigen X, which is expressed only in a particular tissue, are transferred into mice. Effector T cells specific for self antigen Y are then transferred. When antigen Y is expressed in the same tissue as X, the effector cells are suppressed and no disease develops. When antigen Y is expressed in a different organ, the same effector cells cause disease. Which statement best explains this pattern?",
    options: [
      "A Treg must recognize its own antigen to be activated, but once activated it suppresses responses to other antigens in that same tissue, so suppression is targeted by location rather than by shared specificity",
      "Tregs suppress only cells that recognize exactly the same peptide–MHC complex they do, so antigen Y must be cross-reactive with X",
      "Tregs circulate continuously and suppress systemically, so the tissue in which antigen Y is expressed should make no difference",
      "Suppression requires the Treg to kill the effector cell through perforin, which it can only do in lymph nodes",
      "The result reflects deletion of the effector cells in the thymus rather than peripheral suppression"
    ],
    answer: 0,
    explanation: "This resolves an apparent paradox about Treg specificity. Tregs are antigen-specific cells and must see their own antigen to be activated — most natural Tregs are CD4+ cells that recognized self antigen in the thymus and were programmed to express FoxP3. But the suppression they then deliver is not confined to cells of the same specificity. Once activated by antigen X in a tissue, a Treg acts on what is around it: it consumes local IL-2, secretes IL-10 and TGF-β into the local environment, and uses CTLA-4 to strip B7 from the dendritic cells presenting in that area. All of those act on any nearby responding T cell, which is why effector cells specific for a different antigen in the same tissue are silenced, and why the same cells escape when their antigen is elsewhere. The practical implication is that peripheral tolerance is organized tissue by tissue. Cross-reactivity is not required, suppression is not systemic, and nothing here involves the thymus.",
    ref: "Tolerance & Autoimmunity · LO1 · Natural Tregs suppress self-reactive cells responding in the same tissue"
  },
  {
    id: "A15", lec: "A", topic: "Why only the light chain is edited", priority: "nice", difficulty: "hard",
    stem: "An immature B cell in the bone marrow binds a multivalent self antigen strongly and attempts receptor editing. Its light chain locus undergoes a further rearrangement, but the heavy chain locus cannot. Which feature of the two loci best explains this asymmetry?",
    options: [
      "Heavy chain assembly deletes the intervening DNA, including the remaining D segments, when D joins to J, so no further V-to-DJ rearrangement is available; the light chain locus has no D segments and retains unused V and J segments that can be joined afresh",
      "The heavy chain locus is permanently silenced by allelic exclusion after its first rearrangement, whereas light chain loci are exempt from allelic exclusion",
      "RAG enzymes are no longer expressed at this stage, and only light chain rearrangement can proceed without RAG",
      "The heavy chain makes no contribution to the antigen-binding site, so editing it could not change specificity in any case",
      "Heavy chain editing does occur, but through somatic hypermutation rather than through recombination"
    ],
    answer: 0,
    explanation: "This is the lecture's own study question, and the answer is structural. The heavy chain locus is built in two steps, D to J first and then V to DJ, and each joining event deletes the DNA that lay between the joined segments. Once D–J joining has occurred, the remaining D segments on that allele are gone, and because a V segment cannot be joined directly to a J segment at this locus, there is no substrate left for another rearrangement. The light chain locus is simpler: it has no D segments at all, so its rearrangement is a single V-to-J join, and multiple unused V segments upstream and J segments downstream of the original join remain available. Resuming recombination there produces a new light chain. Since the antigen-binding site is formed by both heavy and light chain variable regions, replacing the light chain alone is enough to change the receptor's specificity, which is the point of editing. RAG expression is in fact re-induced for editing, and allelic exclusion is a separate phenomenon that applies to both loci.",
    ref: "Tolerance & Autoimmunity · LO2 · Receptor editing: why light chain genes but not heavy chain genes can rearrange again"
  },
  {
    id: "A16", lec: "A", topic: "Non-HLA susceptibility genes", figure: "aGenes", priority: "should", difficulty: "hard",
    caption: "Odds ratios for risk variants across three different autoimmune diseases. An odds ratio of 1.0 means no association.",
    stem: "Risk variants are genotyped in patients with three different autoimmune diseases and in healthy controls. Results are shown. Which conclusion is best supported?",
    options: [
      "Susceptibility is polygenic: the HLA haplotype carries the largest single effect but is not associated with every disease, while variants in non-HLA genes that regulate immune responses carry small effects and are shared across diseases, which is why one patient may develop more than one autoimmune condition",
      "Each autoimmune disease is caused by its own unique gene, since no variant is associated with all three diseases",
      "The non-HLA variants are clinically meaningless, since an odds ratio below 2 cannot reflect a real biological effect",
      "Because the HLA haplotype has the highest odds ratio for disease P, carrying it is sufficient to cause disease P",
      "The shared non-HLA associations indicate that these three diseases are in fact a single disease with variable presentation"
    ],
    answer: 0,
    explanation: "Most autoimmune conditions involve multiple susceptibility genes that each nudge the balance of self-tolerance rather than one gene that determines disease. The table shows the characteristic pattern. HLA contributes the largest single effect where it is associated at all, roughly half of genetic susceptibility overall, but it is not associated with every disease. The non-HLA variants have modest individual effects and recur across diseases, and they are not random genes: they encode proteins that regulate lymphocyte activation and tolerance, such as the phosphatase PTPN22, the inhibitory receptor CTLA4, the IL-2 receptor α chain CD25 that Tregs depend on, and the inhibitory Fc receptor FCGRIIB. Shared risk loci are the reason a single patient may accumulate two or more autoimmune diagnoses, and the reason family histories often span different diseases. A small odds ratio across a common variant still shifts population risk meaningfully, and no single locus here is sufficient — as the twin and carrier-frequency data for these diseases show, inherited susceptibility needs an environmental trigger to produce disease.",
    ref: "Tolerance & Autoimmunity · LO3 · Non-HLA gene polymorphisms and shared genetic risk"
  },
  {
    id: "A17", lec: "A", topic: "Organ-specific vs systemic disease", priority: "must", difficulty: "hard",
    stem: "Patient 1 has fatigue, cold intolerance and a firm goiter, with antibodies against thyroid antigens and lymphocytic infiltration confined to the thyroid. Patient 2 has a facial rash, arthritis, nephritis and vasculitis, with antibodies against nuclear antigens and low serum C3. Both diseases are autoimmune. Which factor best explains why one is confined to a single organ and the other affects many?",
    options: [
      "The distribution of the target self antigen: a tissue-restricted antigen confines injury to the tissue that expresses it, while a ubiquitous intracellular antigen released in soluble form allows immune complexes to form and deposit in vessels throughout the body",
      "Patient 2's immune system is simply more active, producing higher antibody titers that overwhelm more organs",
      "Patient 1's disease is antibody-mediated while patient 2's is T cell-mediated, and T cells travel more widely",
      "Patient 2 lacks regulatory T cells entirely, while patient 1 retains them in all tissues except the thyroid",
      "Patient 1's antigen is soluble and patient 2's is fixed to cell surfaces"
    ],
    answer: 0,
    explanation: "Whether an autoimmune disease is organ-specific or systemic follows from where its target antigen is and what form it takes, which is the same logic that separates type II from type III hypersensitivity. A thyroid-restricted antigen can only be attacked where it is expressed, so antibody and infiltrating lymphocytes damage the thyroid and nothing else, as in Hashimoto's thyroiditis. Nuclear antigens are present in every cell and are released in soluble form, so antibody binds them in the circulation to form immune complexes that deposit preferentially in small vessels, glomeruli, joints and skin, consuming complement as they go — hence the multi-organ picture and the low C3 of systemic lupus erythematosus. Dr. Zhang's framing is that there are over a hundred autoimmune diseases affecting roughly 5% of the US population, some organ-specific such as the thyroid diseases, others systemic such as SLE. The last option reverses the antigen forms, and nothing in either case is explained by titer alone or by a global absence of Tregs.",
    ref: "Tolerance & Autoimmunity · LO3 · Organ-specific versus systemic autoimmune disease"
  },
  {
    id: "A18", lec: "A", topic: "Predicting the target of mimicry", figure: "aMimic", priority: "should", difficulty: "hard",
    caption: "Microbial antigens reported to share peptide sequence similarity with human self antigens.",
    stem: "A patient recovers from an infection and weeks later develops an autoimmune disease at a site remote from where the organism replicated. If molecular mimicry is the mechanism, which prediction follows most directly?",
    options: [
      "The tissue attacked is determined by which self antigen resembles the microbial peptide, not by where the microbe replicated, and the response continues after the organism has been cleared",
      "The tissue attacked is determined by where the microbe replicated, since that is where antigen-presenting cells were activated",
      "The autoimmune response should stop as soon as the organism is cleared, because the cross-reactive lymphocytes lose their stimulus",
      "Antibody raised against the microbe should bind the microbial antigen but not the self antigen, since self-reactive clones were deleted in the thymus",
      "The patient should develop autoimmunity against every tissue, since cross-reactive lymphocytes recognize many self antigens at once"
    ],
    answer: 0,
    explanation: "Molecular mimicry means a microbe makes a peptide that resembles a self peptide closely enough that lymphocytes responding to the infection cross-react with the self antigen. Two predictions follow. First, the target is set by the resemblance: wherever that self antigen is expressed is where the attack falls, which is how a throat infection produces carditis, and it is precisely what distinguishes mimicry from bystander activation, where disease appears in the tissue the infection inflamed. Second, because the self antigen is permanently present, clearing the organism does not end the response — the cross-reactive cells now have a continuously available stimulus, which is why these diseases persist or recur. The cross-reactivity is also demonstrable in the laboratory, typically by showing that absorbing serum with the microbial antigen removes reactivity to the self antigen as well; the fact that such clones exist at all reflects central tolerance being imperfect, particularly for low-affinity self-reactive cells. Cross-reactivity is specific to the resembling antigen, not indiscriminate.",
    ref: "Tolerance & Autoimmunity · LO4 · Molecular mimicry: cross-reactivity determines the target tissue"
  },
  {
    id: "A19", lec: "A", topic: "Why peripheral tolerance is needed", priority: "must", difficulty: "hard",
    stem: "Central tolerance in a healthy person is intact, with normal AIRE function and normal negative selection in the thymus and bone marrow. Self-reactive lymphocytes can nonetheless be found in that person's blood. Which statement best explains why peripheral tolerance mechanisms remain necessary?",
    options: [
      "Central tolerance is inevitably incomplete: not every self antigen is adequately represented in the thymus or marrow, some appear later in life or only in restricted sites, and the affinity threshold for deletion deliberately spares weakly self-reactive cells, all of which must be controlled after the lymphocyte leaves",
      "Central tolerance is complete, and the self-reactive cells detected in blood are laboratory artifacts of no biological significance",
      "Peripheral tolerance exists only to control responses to foreign antigens such as food and commensal bacteria, not to self antigens",
      "Peripheral mechanisms are needed only in people with a susceptibility gene; in everyone else central tolerance suffices",
      "Peripheral tolerance works by sending escaped self-reactive lymphocytes back to the thymus for a second round of negative selection"
    ],
    answer: 0,
    explanation: "Central tolerance is powerful but, as the lecture puts it, not perfect. AIRE greatly broadens the set of tissue-restricted antigens displayed in the thymic medulla, but representation is not complete, some self antigens are not expressed until later in life or exist only in sequestered or low-abundance sites, and the threshold for negative selection is necessarily set so that weakly self-reactive thymocytes survive — deleting every cell with any affinity for self would gut the repertoire's ability to recognize foreign antigens. So lymphocytes with potentially self-reactive receptors do populate the periphery in healthy people, and additional checkpoints have to act on them there: anergy when antigen is seen without costimulation, active suppression by regulatory T cells, deletion by apoptosis, engagement of inhibitory receptors, and ignorance. Autoimmunity arises when this layered system fails, whether through incomplete deletion centrally or through aberrant activation of cells that were being held in check peripherally. Lymphocytes never return to the thymus for reselection.",
    ref: "Tolerance & Autoimmunity · LO1/LO2 · Central tolerance is incomplete; the role of peripheral tolerance"
  },
  {
    id: "A20", lec: "A", topic: "Telling the mechanisms apart", figure: "aMech", priority: "must", difficulty: "hard",
    caption: "Self-reactive T cells of a single known specificity tracked in four mouse lines, each expressing the same self antigen in a different way.",
    stem: "The same self-reactive T cell population is tracked in four mouse lines and tested three ways. Results are shown. Which assignment of mechanisms is correct?",
    options: [
      "A is suppression by Tregs, B is anergy, C is deletion, D is ignorance",
      "A is anergy, B is suppression by Tregs, C is ignorance, D is deletion",
      "A is deletion, B is ignorance, C is anergy, D is suppression by Tregs",
      "A is ignorance, B is deletion, C is suppression by Tregs, D is anergy",
      "All four lines show anergy, differing only in how completely it was induced"
    ],
    answer: 0,
    explanation: "Three readouts separate the four mechanisms cleanly. Are the cells still there? Can they respond when given antigen plus costimulation in vitro, away from any suppression? And does removing Tregs unleash them? Line C has almost no antigen-specific cells left, which can only be deletion, so the other two readouts are moot. Lines A, B and D all retain their cells, so the difference lies in why they are quiet. Line B fails to respond even in vitro, which means the unresponsiveness is intrinsic to the cell: that is anergy, induced by recognizing antigen without costimulation and reinforced by inhibitory receptors. Lines A and D both respond fully in vitro, so their cells are intrinsically competent and something external was holding them back in vivo. Depleting Tregs causes disease in A but not in D, which identifies A as active suppression and leaves D as ignorance, where nothing is actively enforcing tolerance and the cells simply never meet their antigen in an activating form. These mechanisms operate together in a healthy person rather than as alternatives.",
    ref: "Tolerance & Autoimmunity · LO1 · Distinguishing deletion, anergy, suppression and ignorance"
  },
  {
    id: "A21", lec: "A", topic: "How autoimmune tissue injury happens", figure: "aEffect", priority: "must", difficulty: "hard",
    caption: "Three autoimmune diseases with their targets and the dominant finding in each.",
    stem: "Three autoimmune diseases are summarized. Which statement best describes the relationship between autoimmunity and the hypersensitivity classification?",
    options: [
      "Autoimmune diseases injure tissue through the same effector mechanisms as hypersensitivity types II, III and IV, and which one applies is decided by the immune reactant and where the antigen sits — not by the fact that the antigen is self",
      "Autoimmune diseases use a distinct set of effector mechanisms that are not represented in the hypersensitivity classification",
      "All autoimmune diseases are type II reactions, because by definition the antigen is a component of the patient's own body",
      "Autoimmune diseases correspond to type I hypersensitivity, since both involve a loss of tolerance to an antigen that should be harmless",
      "The hypersensitivity type of an autoimmune disease is determined by how severe the disease is rather than by its mechanism"
    ],
    answer: 0,
    explanation: "Autoimmunity is defined by what the response is directed against, while the hypersensitivity classification describes how the resulting injury is delivered, so the two schemes describe different axes of the same diseases. Tissue injury in autoimmune conditions is caused by autoantibodies or autoreactive T cells, and the mechanisms are exactly those of types II, III and IV. Graves' disease is antibody against a fixed cell-surface receptor, which it activates, so type II. SLE is antibody against soluble nuclear antigens forming circulating immune complexes that deposit and consume complement, so type III. Type 1A diabetes carries islet autoantibodies but the β cells are destroyed by autoreactive T cells with CTLs as the final effectors, so type IV — a useful reminder that the presence of autoantibodies does not establish that antibodies are doing the damage. Type I is not represented, since autoimmune disease is not IgE-mediated. The determinants are the immune reactant and the location of the antigen, the same two questions that classify any hypersensitivity reaction.",
    ref: "Tolerance & Autoimmunity · LO3 · Effector mechanisms of autoimmune tissue injury (hypersensitivity types II, III, IV)"
  }
);

Object.assign(FIGS, {
  aGenes: FTABLE(["Risk variant", "Odds ratio, disease P", "Disease Q", "Disease R"], [
    ["HLA class II haplotype", "5.8", "3.1", "1.0"],
    ["PTPN22", "1.9", "1.7", "1.6"],
    ["CTLA4", "1.4", "1.3", "1.1"],
    ["CD25 (IL2RA)", "1.3", "1.0", "1.4"],
    ["FCGRIIB", "1.0", "1.5", "1.4"]
  ]),
  aMimic: FTABLE(["Microbial antigen", "Self antigen with sequence similarity", "Associated disease"], [
    ["Streptococcus pyogenes cell wall protein", "Human cardiac myosin", "Rheumatic fever (carditis)"],
    ["Epstein-Barr virus antigen", "Myelin basic protein", "Multiple sclerosis"],
    ["Yersinia enterocolitica antigen", "TSH receptor", "Graves' disease"],
    ["Epstein-Barr virus antigen", "Nuclear spliceosome protein", "Systemic lupus erythematosus"]
  ]),
  aMech: FTABLE(["Mouse line", "Antigen-specific T cells present", "Proliferate to antigen + costimulation in vitro", "Disease after Treg depletion"], [
    ["A", "Normal number", "Yes, fully", "Yes"],
    ["B", "Normal number", "No", "No"],
    ["C", "Almost none", "Too few to test", "No"],
    ["D", "Normal number", "Yes, fully", "No"]
  ]),
  aEffect: FTABLE(["Disease", "Target self antigen", "Dominant finding"], [
    ["Graves' disease", "TSH receptor on thyroid cells (fixed, cell surface)", "IgG that activates the receptor; hyperthyroidism"],
    ["Systemic lupus erythematosus", "Nuclear antigens (soluble, ubiquitous)", "Circulating immune complexes, low C3, nephritis and vasculitis"],
    ["Type 1A diabetes", "Pancreatic islet β cell antigens", "Islet-specific CD8+ T cells; β cell destruction"]
  ])
});
