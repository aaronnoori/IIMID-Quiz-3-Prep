/* =====================================================================
   QUESTION BANK — append new questions to this array.
   { id, lec: "T" (cell-mediated) | "B" (humoral), topic, stem,
     options: [...], answer: <index of correct option>, explanation, ref }
   ===================================================================== */
const QUESTIONS = [
  /* ---------------- Cell-mediated immunity ---------------- */
  {
    id: "T1", lec: "T", topic: "Two-signal activation",
    stem: "A naive CD4+ T cell encounters a resting dendritic cell that displays a self-peptide on MHC II but has not been exposed to any microbial products. The TCR binds the peptide–MHC complex with adequate affinity. One week later, the same T cell fails to proliferate when it meets the same peptide on a fully activated dendritic cell. Which missing interaction during the first encounter best explains this?",
    options: ["CD28 on the T cell binding B7 on the dendritic cell","LFA-1 on the T cell binding ICAM-1 on the dendritic cell","CTLA-4 on the T cell binding B7 on the dendritic cell","CD4 binding the nonpolymorphic region of MHC II","PD-1 on the T cell binding PD-L1 on the dendritic cell"],
    answer: 0,
    explanation: "Signal 1 (TCR–peptide–MHC) without Signal 2 (CD28–B7) drives the T cell into anergy, a lasting state of unresponsiveness. Resting DCs that haven't sensed microbes (no TLR signaling) express little B7, which is one way tolerance to self-peptides is maintained. LFA-1/ICAM-1 only provides adhesion. CTLA-4 and PD-1 are inhibitory and are mainly expressed after activation, so their absence wouldn't cause anergy. CD4 binding MHC II is part of Signal 1, which was intact.",
    ref: "T cell review handout · two-signal mechanism"
  },
  {
    id: "T2", lec: "T", topic: "Inhibitory receptors",
    stem: "A patient with metastatic melanoma starts a monoclonal antibody that blocks a receptor on T cells. That receptor normally binds B7 molecules with much higher affinity than CD28 does. Two months later she develops colitis and hypophysitis. Which receptor was targeted?",
    options: ["CTLA-4","PD-1","ICOS","CD40L","LFA-1"],
    answer: 0,
    explanation: "CTLA-4 binds B7-1/B7-2 with higher affinity than CD28, so it outcompetes CD28 for costimulation and can strip B7 from APCs. That shuts down activation, especially early in lymphoid organs. Blocking CTLA-4 (e.g., ipilimumab) restores costimulation, which boosts anti-tumor T cells but also breaks self-tolerance, causing immune-related adverse events such as colitis and hypophysitis. PD-1 binds PD-L1/PD-L2, not B7. ICOS is a stimulatory receptor with its own ligand, ICOS-L.",
    ref: "T cell review handout · inhibitory molecules"
  },
  {
    id: "T3", lec: "T", topic: "Th differentiation",
    stem: "A dendritic cell phagocytoses Mycobacterium tuberculosis and migrates to a lymph node, where it activates a naive CD4+ T cell. The DC secretes a cytokine that drives the T cell toward a subset whose own signature cytokine then reinforces that fate in an autocrine loop. Which pair correctly matches the DC-derived cytokine with the T cell's autocrine cytokine?",
    options: ["IL-12 → IFN-γ","IL-4 → IL-5","IL-6 → IL-17","TGF-β → IL-10","IL-1β → IL-2"],
    answer: 0,
    explanation: "Intracellular pathogens trigger DCs to make IL-12, which activates STAT4/T-bet and drives Th1 differentiation. Th1 cells secrete IFN-γ, which feeds back on the T cell (STAT1 → T-bet) to lock in Th1 commitment while inhibiting Th2 and Th17. IL-4 drives Th2, and IL-6 plus TGF-β drives Th17. IL-2 drives proliferation of all activated T cells but doesn't decide subset fate.",
    ref: "T cell review handout · Th0 differentiation"
  },
  {
    id: "T4", lec: "T", topic: "Th1 vs Th2 counter-regulation",
    stem: "A patient with chronic schistosomiasis develops hepatic fibrosis around trapped eggs. Biopsy shows macrophages expressing arginase-1 and producing TGF-β, rather than iNOS. Which helper T cell product most directly drove these macrophages toward this phenotype?",
    options: ["IL-13 from Th2 cells","IFN-γ from Th1 cells","IL-17 from Th17 cells","IL-2 from Th1 cells","IL-12 from dendritic cells"],
    answer: 0,
    explanation: "Th2 cytokines IL-4 and IL-13 drive alternative (M2) macrophage activation. M2 cells express arginase-1 and secrete TGF-β and other repair factors, which promote tissue remodeling and fibrosis (here, the granulomas around schistosome eggs). IFN-γ from Th1 cells does the opposite: it drives classical (M1) activation with iNOS and microbicidal killing. Th1 and Th2 counter-regulate each other, which is a high-yield concept.",
    ref: "T cell review handout · M1 vs M2"
  },
  {
    id: "T5", lec: "T", topic: "Th17 function",
    stem: "A 14-year-old has recurrent mucocutaneous candidiasis and staphylococcal skin abscesses. Neutrophil count and function are normal. His T cells can't produce a cytokine that normally induces epithelial cells to make chemokines and antimicrobial peptides (such as defensins). Which cytokine is deficient?",
    options: ["IL-17","IFN-γ","IL-4","IL-5","IL-12"],
    answer: 0,
    explanation: "Th17 cells defend against extracellular bacteria and fungi at barrier surfaces. IL-17 makes epithelial and stromal cells release chemokines (which recruit neutrophils), G-CSF and antimicrobial peptides, and IL-22 helps maintain the barrier. Defects in the IL-17 axis (e.g., STAT3 mutation in hyper-IgE syndrome, or IL-17RA deficiency) cause chronic mucocutaneous candidiasis and staphylococcal infections. IL-23 maintains Th17 cells but isn't the effector cytokine.",
    ref: "T cell review handout · Th17"
  },
  {
    id: "T6", lec: "T", topic: "CD4 help for CD8",
    stem: "Mice lacking CD4+ T cells are infected with a virus that causes little innate inflammation. Their virus-specific CD8+ T cells expand poorly and form few memory cells. Restoring which interaction to the dendritic cells would most directly rescue the CD8 response?",
    options: ["CD40 on the DC engaged by CD40L","MHC I on the DC engaged by CD8","Fas on the DC engaged by FasL","PD-L1 on the DC engaged by PD-1","ICAM-1 on the DC engaged by LFA-1"],
    answer: 0,
    explanation: "When innate stimulation is weak, CD8 T cells need CD4 help. A CD4 T cell that recognizes antigen on the same DC engages CD40 with CD40L, which 'licenses' the DC: it upregulates B7 and other costimulators and secretes IL-12. The CD4 cell also supplies IL-2. Together these drive CD8 expansion, CTL differentiation and memory. MHC I–CD8 binding (Signal 1) and LFA-1/ICAM-1 adhesion are already intact in this model. Engaging PD-L1 would inhibit the response.",
    ref: "T cell review handout · CD4-dependent CD8 activation"
  },

  /* ---------------- Humoral immunity ---------------- */
  {
    id: "B1", lec: "B", topic: "Td vs Ti antigens",
    stem: "An 18-month-old has a weak, short-lived IgM response to a pure pneumococcal capsular polysaccharide vaccine. Months later, the same child makes a strong, durable, high-affinity IgG response to a vaccine in which the same polysaccharide is covalently linked to a protein carrier. What best explains the difference?",
    options: ["Polysaccharide-specific B cells present carrier peptides on MHC II and receive cognate Tfh help","The protein carrier directly cross-links more BCRs than the polysaccharide","T cells recognize the polysaccharide when it is attached to protein","The carrier activates complement and C3d replaces the need for T cell help","The carrier binds FcγRIIB, removing inhibitory signaling"],
    answer: 0,
    explanation: "Polysaccharides are T-independent antigens: they cross-link BCRs heavily but can't be presented on MHC, so they produce mostly IgM, little affinity maturation and poor memory, especially in children under 2. In a conjugate vaccine, a polysaccharide-specific B cell takes in the whole conjugate, processes the protein carrier, and presents carrier peptides on MHC II. Carrier-specific Tfh cells then give CD40L and cytokine help to that B cell, producing germinal centers, class switching to IgG, affinity maturation and memory against the polysaccharide. T cells still never 'see' the sugar itself.",
    ref: "B cell review handout · Td vs Ti case & conjugate vaccine"
  },
  {
    id: "B2", lec: "B", topic: "BCR signaling",
    stem: "Researchers engineer B cells whose Igα/Igβ (CD79a/b) cytoplasmic tails lack functional ITAMs, while membrane IgM is normal. Multivalent antigen binds and clusters the receptors, but the cells don't proliferate. Which step fails first?",
    options: ["Tyrosine phosphorylation by Src-family kinases and recruitment of Syk","Cross-linking of membrane immunoglobulin","Antigen binding to the variable region","Somatic hypermutation of the V region","C3d binding to CR2"],
    answer: 0,
    explanation: "Membrane Ig binds and clusters antigen, but its cytoplasmic tail is too short to signal. Signaling depends on Igα/Igβ ITAMs: clustering lets Src-family kinases (Lyn) phosphorylate the ITAMs, which recruits and activates Syk and starts the downstream cascade (PLCγ2, Ca2+, NF-κB, NFAT). Without ITAMs, binding and cross-linking still happen, but no signal is transmitted. Somatic hypermutation happens much later, in the germinal center.",
    ref: "B cell review handout · MCQ1 concept"
  },
  {
    id: "B3", lec: "B", topic: "Complement co-receptor",
    stem: "Two B cells with identical BCRs are exposed to the same low concentration of a bacterial antigen. In one culture the antigen is coated with C3d; in the other it isn't. Only the B cells in the C3d culture become activated. What best explains this?",
    options: ["CR2–CD19–CD81 engagement amplifies BCR signaling through CD19 phosphorylation","C3d replaces Signal 1 so the BCR is no longer needed","C3d engages FcγRIIB and removes inhibition","C3d directly induces AID expression","C3d is presented on MHC II to helper T cells"],
    answer: 0,
    explanation: "When an antigen carries C3d, it binds the BCR and CR2 (CD21) at the same time, bringing the CR2–CD19–CD81 co-receptor into the BCR cluster. CD19 gets phosphorylated and recruits PI3K and other kinases, which amplifies the BCR signal, so activation happens at much lower antigen concentrations. C3d adds to Signal 1 but doesn't replace it. This works for both T-dependent and T-independent antigens.",
    ref: "B cell review handout · CR2 and TLR in B cell activation"
  },
  {
    id: "B4", lec: "B", topic: "AID vs CD40L",
    stem: "Two boys have recurrent sinopulmonary infections, normal-to-high IgM, and very low IgG, IgA and IgE. Patient 1 also had Pneumocystis pneumonia, and his activated T cells don't bind soluble CD40. Patient 2 has no opportunistic infections, normal T cells, and enlarged lymph nodes with giant germinal centers. Which defect does Patient 2 most likely have?",
    options: ["Activation-induced cytidine deaminase (AID)","CD40 ligand on activated T cells","RAG1/RAG2","Btk","FcγRIIB"],
    answer: 0,
    explanation: "Both have hyper-IgM syndrome, but for different reasons. Patient 1 has CD40L deficiency (a T cell defect): B cells don't get the CD40 signal, so germinal centers don't form, and macrophages also lose CD40-mediated activation, which explains the opportunistic infections. Patient 2 has a B cell–intrinsic AID defect: T help is normal and germinal centers form (often oversized), but without AID the B cells can't do class-switch recombination or somatic hypermutation. Btk deficiency would cause low levels of every isotype, including IgM.",
    ref: "B cell review handout · AID and CD40L cases"
  },
  {
    id: "B5", lec: "B", topic: "Germinal center selection",
    stem: "In a germinal center, B cells that just underwent somatic hypermutation compete for limited antigen on follicular dendritic cells. Clones whose BCR affinity improved capture more antigen, present more peptide to Tfh cells, and survive; lower-affinity clones die by apoptosis. Blocking which Tfh-derived cytokine would most directly impair this selection and expansion?",
    options: ["IL-21","IL-5","IL-17","IFN-γ","IL-2"],
    answer: 0,
    explanation: "In the light zone, B cells with higher affinity take up more antigen from FDCs and present more peptide on MHC II. That earns them more help from Tfh cells, which provide CD40L and IL-21. IL-21 is the signature Tfh cytokine: it supports germinal center B cell survival and proliferation and plasma cell differentiation, so blocking it hampers affinity maturation. IL-5 activates eosinophils, IL-17 is a Th17 cytokine, and IL-2 mainly drives T cell proliferation.",
    ref: "B cell review handout · germinal center reaction"
  },
  {
    id: "B6", lec: "B", topic: "Feedback inhibition",
    stem: "Late in an infection, abundant antigen-specific IgG forms immune complexes with leftover antigen. These complexes bind naive B cells specific for the same antigen, engaging the BCR and the Fc portion of IgG at the same time, and B cell activation drops. A patient with a loss-of-function variant in the Fc receptor involved develops autoantibodies. What is the mechanism of the normal inhibition?",
    options: ["FcγRIIB ITIMs recruit phosphatases (e.g., SHIP) that counteract BCR kinase signaling","IgG binding to the BCR triggers receptor internalization and degradation","C3d on the complexes engages CR2 and activates phosphatases","The complexes block CD40L on Tfh cells","FcγRIIB triggers B cell apoptosis through Fas"],
    answer: 0,
    explanation: "FcγRIIB is the only inhibitory Fc receptor on B cells. When an immune complex co-engages it with the BCR, its ITIM is phosphorylated and recruits phosphatases (mainly SHIP, also SHP-1). These undo the kinase-driven BCR signal, shutting off antibody production once enough IgG exists. Losing FcγRIIB removes this brake, causing excess B cell activation and a tendency toward autoimmunity (e.g., in SLE models). C3d/CR2 enhances signaling rather than inhibiting it.",
    ref: "B cell review handout · FcγRIIB feedback"
  },

  /* ================= BATCH 2 (mapped to session learning objectives) ================= */
  {
    id: "T7", lec: "T", topic: "Immunological synapse", figure: "synapse",
    caption: "Contact plane between a naive CD4+ T cell and a peptide-loaded DC, viewed face-on",
    stem: "Investigators use fluorescence microscopy to image the contact zone between a naive CD4+ T cell and a dendritic cell presenting its cognate peptide. Viewed face-on, the molecules sort into the bull's-eye pattern shown. A fluorescent antibody stains only the outer ring (region B). Which interaction does this antibody most likely detect?",
    options: ["LFA-1 binding ICAM-1","TCR binding peptide–MHC II","CD28 binding B7","CD4 binding MHC II","IL-2 binding the high-affinity IL-2 receptor"],
    answer: 0,
    explanation: "The immunological synapse has a central area (c-SMAC, region A), where activation signals are delivered: TCR with peptide–MHC, the CD4/CD8 co-receptor, and CD28 with B7. The peripheral ring (p-SMAC, region B) holds the adhesion molecules, mainly the integrin LFA-1 bound to ICAM-1, which tether the two cells together. Signal 1 also switches LFA-1 into a high-affinity conformation, so recognizing antigen strengthens the adhesion that keeps the synapse stable long enough to activate the T cell. IL-2 is a secreted cytokine and isn't an organized structure of the synapse.",
    ref: "Cell-mediated lecture · LO2 · immunological synapse (c-SMAC vs p-SMAC)"
  },
  {
    id: "T8", lec: "T", topic: "IL-2 & IL-2 receptor", figure: "il2r",
    caption: "IL-2 receptor on a naive T cell (left) vs an activated T cell (right)",
    stem: "A kidney transplant recipient receives induction therapy with a monoclonal antibody against the receptor chain labeled X in the diagram. Donor-reactive T cells in the recipient still recognize alloantigen, receive CD28 costimulation, and secrete IL-2. What is the most likely effect of the antibody on these T cells?",
    options: ["They can't form the high-affinity IL-2 receptor, so they fail to proliferate in response to IL-2","They can't recognize donor peptide–MHC, so Signal 1 is blocked","They can't receive costimulation because B7 is blocked","They stop transcribing the IL-2 gene","Resting naive T cells are depleted first, because chain X is constitutively expressed on them"],
    answer: 0,
    explanation: "Chain X is IL-2Rα (CD25). Naive T cells express only the β and γ chains, which form a low-affinity receptor. Signals 1 and 2 induce both IL-2 secretion and expression of the α chain, which joins βγ to form the high-affinity αβγ receptor. IL-2 binding to that receptor then drives proliferation. Blocking CD25 leaves recognition, costimulation and IL-2 secretion intact but prevents the activated cells from responding to IL-2, so the donor-reactive clones don't expand. Resting naive cells are largely spared because they don't express CD25.",
    ref: "Cell-mediated lecture · LO3 · role of IL-2 and IL-2R"
  },
  {
    id: "T9", lec: "T", topic: "PD-1",
    stem: "A 45-year-old man with chronic hepatitis B has persistent viremia. Virus-specific CD8+ T cells isolated from his liver recognize viral peptide on MHC I but produce little cytokine and kill poorly. These cells express high levels of a receptor whose ligand is found on APCs and other cells. When this receptor is engaged, motifs in its cytoplasmic tail are phosphorylated and suppress TCR/CD3 and CD28 signaling. Which receptor is responsible?",
    options: ["PD-1","CTLA-4","CD28","LFA-1","IL-2Rα (CD25)"],
    answer: 0,
    explanation: "PD-1 appears on CD4 and CD8 T cells after antigen stimulation and binds PD-L (PD-ligand) on APCs and other cells. Its cytoplasmic inhibitory motifs get phosphorylated and dampen both TCR/CD3 and CD28 signaling. With chronic antigen exposure, this keeps virus-specific T cells hyporesponsive. CTLA-4 is also inhibitory but works differently: it binds B7 more tightly than CD28 and removes B7 from APCs, which blocks costimulation. CD28 and LFA-1 promote activation, and CD25 is part of the IL-2 receptor.",
    ref: "Cell-mediated lecture · LO6 · inhibition by CTLA-4 and PD-1"
  },
  {
    id: "T10", lec: "T", topic: "CTL effector function",
    stem: "A melanoma expresses a mutant tumor peptide on MHC I but no B7. Naive CD8+ T cells co-cultured with the tumor cells alone don't become activated. Activated tumor-specific CTLs taken from the same patient's lymph node kill the tumor cells efficiently in vitro. What best explains the difference?",
    options: ["Naive CD8 T cells need Signal 2 from a professional APC (e.g., a cross-presenting DC), but effector CTLs kill after TCR–peptide–MHC I recognition alone","Effector CTLs recognize tumor antigen on MHC II, which the tumor expresses","Effector CTLs kill only by Fas–FasL, which doesn't require the TCR","Tumor cells supply IL-2 that activates the CTLs but not the naive cells","Naive CD8 T cells lack perforin, while CTLs gain the ability to recognize B7-negative cells through CD28"],
    answer: 0,
    explanation: "Priming a naive CD8 T cell takes two signals, and B7 comes from a professional APC. Dendritic cells that cross-present tumor or viral antigen on MHC I supply it, often with help from CD4 T cells. Once a CD8 T cell has become a CTL, it no longer needs costimulation: TCR recognition of the same peptide–MHC I on the target is enough to trigger granule release (perforin and granzymes) or FasL engagement. That's why B7-negative tumor cells can't prime naive CD8 cells but can still be killed by CTLs that were activated elsewhere. Both killing pathways start with antigen-specific recognition through the TCR.",
    ref: "Cell-mediated lecture · LO5 · CD8 activation vs CTL-mediated killing"
  },
  {
    id: "T11", lec: "T", topic: "Memory T cells",
    stem: "Mice are infected with a virus and clear it by day 10. At week 6, after the T cell response has contracted, the investigators delete IL-7Rα from the T cells. Over the next several months, the virus-specific memory CD8+ T cell pool shrinks steadily, even though no antigen remains. Effector T cells that develop after a fresh, unrelated infection look normal. What best explains the loss of memory cells?",
    options: ["Memory T cells depend on IL-7 signaling to express anti-apoptotic proteins and undergo slow homeostatic proliferation","Memory T cells need persistent antigen and CD28 costimulation to survive","Memory T cells depend on IL-2 from CD4 T cells for long-term survival","Without IL-7, memory cells upregulate CTLA-4 and become anergic","IL-7 is needed for the TCR to recognize peptide–MHC I"],
    answer: 0,
    explanation: "Memory T cells survive long after the antigen is gone. They express high levels of IL-7 receptor, and IL-7 (made by stromal cells) induces anti-apoptotic proteins and drives slow, low-level proliferation that maintains the pool. Remove IL-7 signaling and the memory cells gradually die off. Memory maintenance doesn't need antigen or costimulation. IL-2 and costimulation are what effector cells need during the active response, and when they're withdrawn after the antigen is cleared, most effector cells die (contraction).",
    ref: "Cell-mediated lecture · LO7 · properties of memory T cells"
  },
  {
    id: "B7", lec: "B", topic: "Germinal center selection", figure: "gc",
    caption: "Germinal center in a lymph node biopsy two weeks after a booster vaccine",
    stem: "The diagram shows a germinal center from a lymph node two weeks after a tetanus booster. Region 2 contains follicular dendritic cells (FDCs) and Tfh cells. Which statement best describes how FDCs in region 2 contribute to the antibody response?",
    options: ["They retain antigen as immune complexes via Fc and complement receptors, so mutated B cells compete for it and the highest-affinity cells win Tfh survival signals","They phagocytose antigen and present peptides on MHC II directly to naive CD4 T cells","They express AID and introduce point mutations into B cell V regions","They are the main site of rapid B cell proliferation and somatic hypermutation","They secrete IL-21, which directs switching to IgG1 and IgG3"],
    answer: 0,
    explanation: "FDCs are non-phagocytic, non-hematopoietic (mesenchymal) cells in the light zone (region 2). They use Fc receptors and complement receptors to hold antigen in the form of immune complexes. B cells that underwent somatic hypermutation in the dark zone (region 1) move to the light zone and compete for this antigen. Higher-affinity B cells capture more of it, present more peptide on MHC II to Tfh cells, and get survival signals. The rest die by apoptosis, which is how affinity maturation happens. AID acts inside the B cells themselves, and IL-21 comes from Tfh cells, not FDCs.",
    ref: "Humoral lecture · LO3–LO5 · germinal center reaction & selection"
  },
  {
    id: "B8", lec: "B", topic: "Class switch recombination", figure: "locus",
    caption: "Rearranged heavy-chain locus in an IgM+ B cell (S = switch region)",
    stem: "A B cell making IgM against an influenza surface protein is activated in mucosa-associated lymphoid tissue. It receives CD40L from a helper T cell along with TGF-β. Its heavy-chain locus is shown in the diagram. After class switch recombination, which best describes the B cell's DNA and its secreted antibody?",
    options: ["The DNA between Sμ and Sα is excised, VDJ is placed next to Cα, and the IgA binds the same influenza epitope","A new VDJ rearrangement replaces the original, producing IgA with new specificity","Cμ is kept and the VDJ–Cα transcript is made by alternative RNA splicing, as with IgD","AID mutates the Cμ exons until they encode an α constant region","The light chain switches isotype while the heavy chain stays μ"],
    answer: 0,
    explanation: "CD40L plus TGF-β (mucosal signals) direct switching to IgA. AID alters nucleotides in the switch regions (Sμ and Sα), other enzymes cut them, and the cut ends are rejoined. The DNA in between (Cμ, Cδ, Cγ, Cε) is deleted, which puts the rearranged VDJ exon next to Cα. Only the constant region changes, so the variable region and its antigen specificity stay the same: the IgA binds the same epitope the IgM did. Alternative RNA splicing is how a naive B cell co-expresses IgM and IgD; that isn't class switching.",
    ref: "Humoral lecture · LO4 · AID initiates class switch recombination"
  },
  {
    id: "B9", lec: "B", topic: "Primary vs secondary response", figure: "curve",
    caption: "Serum antigen-specific antibody after a first exposure (1) and a later re-exposure (2)",
    stem: "A nursing student receives a recombinant hepatitis B surface antigen vaccine (arrow 1) and a booster months later (arrow 2). The graph shows her antibody titers. Which mechanism best explains why the response after arrow 2 is faster, larger, and higher in affinity?",
    options: ["Memory B cells generated in germinal centers, already class-switched and affinity-selected, quickly differentiate into plasma cells","The booster acts as a T-independent antigen and activates marginal zone B cells","Naive B cells respond faster the second time because FcγRIIB is downregulated","Short-lived extrafollicular plasma cells from the first dose are reactivated by the booster","The booster induces new VDJ recombination in previously activated B cells"],
    answer: 0,
    explanation: "HBsAg is a protein, so it's a T-dependent antigen. The first exposure produces a slower response, about a week to peak, that is mostly lower-affinity IgM. It also seeds germinal centers, which produce long-lived plasma cells and memory B cells that have already switched isotype and been selected for high affinity. On re-exposure, those memory B cells turn into antibody-secreting cells much faster, so the secondary response is quicker and larger and consists mainly of high-affinity IgG. FcγRIIB is part of antibody feedback inhibition, and extrafollicular plasma cells are short-lived.",
    ref: "Humoral lecture · primary vs secondary humoral responses"
  },
  {
    id: "B10", lec: "B", topic: "Marginal zone & TI-2 antigens",
    stem: "A 24-year-old had a splenectomy after a motorcycle accident. Two years later he develops rapidly progressive Streptococcus pneumoniae bacteremia. Loss of which B cell population most directly impaired his rapid antibody response to the bacterial capsule?",
    options: ["Splenic marginal zone B cells, which respond to TI-2 polysaccharide antigens with rapid IgM","Follicular B cells, which need Tfh help to respond to capsular polysaccharide","Germinal center B cells, which make high-affinity IgG to polysaccharide","Long-lived plasma cells in the bone marrow","B cells that need TLR4 engagement by LPS"],
    answer: 0,
    explanation: "Capsular polysaccharides are TI-2 antigens. Their highly repetitive structure cross-links many BCRs and co-receptors, which activates B cells without T cell help. These responses come mainly from marginal zone B cells, a non-recirculating population at the border of the splenic white pulp that expresses IgM and complement receptors. They make a rapid, mostly IgM response to blood-borne encapsulated bacteria. This answers the lecture question of why the spleen matters for controlling encapsulated bacteria in the blood. Follicular B cells handle T-dependent protein antigens, and LPS acting through TLR4 is a TI-1 mechanism.",
    ref: "Humoral lecture · LO1 · TI antigens & marginal zone B cells"
  },
  {
    id: "B11", lec: "B", topic: "Extrafollicular vs GC response",
    stem: "Five days after a primary immunization with a protein antigen, a mouse lymph node shows clusters of antibody-secreting cells at the junction between the T cell zone and the follicle. Their antibody is low-affinity, though some is already class-switched, and the cells are gone within about two weeks. Which statement best describes these cells?",
    options: ["They are short-lived plasma cells from an extrafollicular focus that provide early antibody and help set up the germinal center reaction","They are long-lived plasma cells from germinal centers that will migrate to the bone marrow","They are memory B cells that have finished affinity maturation","They came from a T-independent response by splenic marginal zone B cells","They can't be class-switched, because switching happens only in germinal centers"],
    answer: 0,
    explanation: "After a protein antigen activates B cells and helper T cells, the two move toward each other (B cells via CCR7 toward the T zone, Tfh cells toward the follicle) and meet at the T–B interface. There they form an extrafollicular focus that makes short-lived plasma cells. That antibody arrives early, has little somatic hypermutation (so it's low-affinity), and can already be class-switched. Some of these activated B and T cells then move back into the follicle to form a germinal center, which later produces high-affinity, long-lived plasma cells and memory B cells.",
    ref: "Humoral lecture · LO3 · extrafollicular vs germinal center responses"
  },

  /* ================= BATCH 3 ================= */
  {
    id: "T12", lec: "T", topic: "Th1 & classical macrophage activation",
    stem: "A 30-year-old man has pulmonary tuberculosis. A lung biopsy shows granulomas in which CD4+ Th1 cells are in direct contact with macrophages harboring Mycobacterium tuberculosis. Which pair of Th1-derived signals activates these macrophages, and what change results?",
    options: ["CD40L and IFN-γ; more reactive oxygen species and nitric oxide, and stronger phagolysosomal killing","IL-4 and IL-13; arginase expression, tissue repair, and fibrosis","IL-17 and IL-22; macrophage production of antimicrobial peptides and tight junction proteins","IL-2 and IL-21; macrophage proliferation and antibody secretion","IFN-γ and IL-5; eosinophil recruitment into the granuloma"],
    answer: 0,
    explanation: "Th1 cells secrete IFN-γ and express CD40L. Both act on the macrophage that is presenting antigen to them, causing classical (M1) activation. M1 macrophages make more reactive oxygen species and nitric oxide and kill the microbes in their phagolysosomes more effectively. They also release pro-inflammatory cytokines (IL-1β, IL-12, TNF), raise B7 and MHC to present antigen better, and help form granulomas. IL-4 and IL-13 from Th2 cells do the opposite, driving alternative (M2) activation. IL-22 acts on epithelial cells, not macrophages.",
    ref: "Cell-mediated lecture · LO4 · function of Th1 cells; Mφ activation by CD40L & IFN-γ"
  },
  {
    id: "T13", lec: "T", topic: "Th17 differentiation & IL-22",
    stem: "A 6-year-old has recurrent oral thrush. Dendritic cells that encounter Candida secrete IL-1, IL-6 and IL-23, and TGF-β is present locally. The helper T cells that develop protect the oral mucosa partly through a cytokine that acts on epithelial cells to increase antimicrobial peptides and tight junction proteins. Which cytokine is this?",
    options: ["IL-22","IL-17","IFN-γ","IL-13","TGF-β"],
    answer: 0,
    explanation: "High levels of IL-1, IL-6 and IL-23 from APCs drive Th17 differentiation. TGF-β, usually an anti-inflammatory cytokine, also promotes Th17 cells when IL-6 or IL-1 is present. Th17 cells make two key cytokines. IL-22 acts on mucosal epithelial cells to increase antimicrobial peptides and tight junction proteins, which strengthens the barrier. IL-17 acts on phagocytes and epithelial cells to raise inflammatory cytokines (IL-1, IL-6) and neutrophil-attracting chemokines. Together they defend barrier tissues against bacteria and fungi. The question describes the barrier effects, so the answer is IL-22.",
    ref: "Cell-mediated lecture · LO4 · development & function of Th17 cells"
  },
  {
    id: "T14", lec: "T", topic: "Th2 development",
    stem: "Wild-type mice and IL-4–deficient mice are infected with an intestinal helminth. Compared with wild-type mice, which set of findings is most expected in the IL-4–deficient mice?",
    options: ["Low IgE, poor Th2 differentiation, and less suppression of Th1 and Th17 development","Low IgE but normal Th2 cell numbers, because IL-12 can drive Th2 differentiation","Normal Th2 responses, because only mast cells normally supply IL-4","Increased eosinophil activation, because IL-5 production doesn't depend on Th2 cells","More alternatively activated (M2) macrophages and more fibrosis"],
    answer: 0,
    explanation: "Th2 development requires IL-4, which comes from Th2 cells themselves and from mast cells and eosinophils, particularly in helminth infections. IL-4 does three things here: it amplifies Th2 commitment (through GATA3, which turns on IL-4, IL-5 and IL-13), it inhibits Th1 and Th17 development, and it acts on B cells to drive the switch to IgE. Without IL-4, fewer Th2 cells form, so IL-5 (eosinophil activation) and IL-13 (mucus, M2 macrophages) also fall, and the Th1/Th17 pathways lose that inhibition. IL-12 drives Th1, not Th2.",
    ref: "Cell-mediated lecture · LO4 · development & function of Th2 cells"
  },
  {
    id: "T15", lec: "T", topic: "Signal 1 & LFA-1 affinity", figure: "lfa1",
    caption: "Two conformations of the integrin LFA-1 on a T cell, opposite ICAM-1 on an APC",
    stem: "Investigators engineer naive CD4+ T cells whose LFA-1 is locked in the conformation on the left. TCR, CD4 and CD28 are normal. The cells are co-cultured with mature dendritic cells that present cognate peptide on MHC II and express high levels of B7. What is the most likely result?",
    options: ["The T cells form only brief, unstable contacts with the DCs, so signaling isn't sustained long enough and activation is inefficient","Activation is normal, because Signals 1 and 2 don't depend on adhesion molecules","The T cells become hyperactivated, because LFA-1 normally inhibits TCR signaling","The TCR can't recognize peptide–MHC II, because LFA-1 is the TCR's co-receptor","The T cells skip Signal 2 and differentiate directly into memory cells"],
    answer: 0,
    explanation: "On resting naive T cells, LFA-1 is in a low-affinity conformation (left), so contacts with APCs are transient. When the TCR recognizes peptide–MHC (Signal 1), it triggers a conformational change that greatly increases LFA-1's affinity for ICAM-1 (right). This positive feedback stabilizes the contact for the long period that activation needs, with LFA-1–ICAM-1 forming the peripheral ring of the immunological synapse. If LFA-1 can't switch to the high-affinity form, TCR and CD28 signals are too brief to activate the cell well. CD4 and CD8 are the TCR co-receptors, not LFA-1.",
    ref: "Cell-mediated lecture · LO1/LO2 · Signal 1 increases adhesion-molecule affinity"
  },
  {
    id: "T16", lec: "T", topic: "Decline of T cell responses", figure: "tresponse",
    caption: "Number of virus-specific CD8+ T cells after an acute viral infection",
    stem: "The graph tracks virus-specific CD8+ T cells in a healthy adult after an acute viral infection that is cleared around day 10. Which mechanism best explains the change in phase B?",
    options: ["Once antigen is cleared, costimulation and IL-2 fall and most effector T cells die by apoptosis","All effector T cells convert directly into memory T cells and leave the circulation","Regulatory T cells kill the effector T cells with perforin and granzymes","Immune complexes engage FcγRIIB on CD8 T cells and stop their signaling","Effector CD8 T cells migrate into germinal centers to help B cells"],
    answer: 0,
    explanation: "Phase A is clonal expansion: Signals 1 and 2 plus IL-2 turn a small pool of naive cells into a large effector population. Phase B is contraction. As antigen is eliminated, costimulation and IL-2 drop. Activated T cells depend on those signals to survive, so most die by apoptosis. Inhibitory receptors (CTLA-4, PD-1) and regulatory T cells also help shut the response down. Contraction maintains homeostasis by keeping the immune system from staying active once nothing is left to attack. Phase C is the small, stable memory pool maintained by IL-7. FcγRIIB feedback is a B cell mechanism.",
    ref: "Cell-mediated lecture · LO6/LO7 · decline of T cell responses & memory"
  },
  {
    id: "B12", lec: "B", topic: "BCR cross-linking", figure: "valency",
    caption: "Two antigens carrying the same epitope (●) binding B cells specific for that epitope",
    stem: "B cells specific for the hapten epitope ● are exposed to two antigens. Antigen P carries a single copy of the epitope; antigen Q is a polymer displaying many copies. Each epitope binds the BCR with the same affinity. Only antigen Q triggers tyrosine phosphorylation of Igα/Igβ and B cell activation. What best explains this?",
    options: ["Strong BCR signaling requires cross-linking and clustering of at least two receptors, which only the multivalent antigen achieves","Antigen P can't reach the BCR's antigen-binding site","Antigen Q is processed and presented on MHC II, providing T cell help","Antigen P engages FcγRIIB and delivers an inhibitory signal","Antigen Q activates TLR4, which replaces the need for BCR signaling"],
    answer: 0,
    explanation: "Membrane IgM and IgD have very short cytoplasmic tails and can't signal on their own. Signals pass through the associated Igα and Igβ chains, and maximal signaling requires antigen to cross-link at least two BCRs. Clustering brings the ITAMs of Igα/Igβ together, where they are phosphorylated. That recruits adaptor proteins, activates second messengers and kinases, and switches on transcription factors. A monovalent antigen occupies single receptors without clustering them, so it binds but produces little signal. This is also why highly repetitive TI-2 antigens are such strong B cell activators.",
    ref: "Humoral lecture · LO2 · BCR cross-linking & clustering"
  },
  {
    id: "B13", lec: "B", topic: "TI-1 antigens",
    stem: "Mouse splenic B cells are cultured with a high concentration of lipopolysaccharide (LPS) from a Gram-negative bacterium. Within days, B cells of many unrelated specificities proliferate and secrete IgM, including clones whose BCRs don't bind LPS at all. Which mechanism best explains this?",
    options: ["LPS is a TI-1 antigen that activates B cells through the innate receptor TLR4, regardless of BCR specificity","LPS is a TI-2 antigen that cross-links the BCRs of every B cell","LPS is presented on MHC II and recruits Tfh help to all B cells","LPS binds C3d and engages CR2 on every B cell","LPS binds a constant-region site shared by all BCRs"],
    answer: 0,
    explanation: "T-independent antigens fall into two classes. TI-1 antigens such as LPS act through innate immune receptors (TLR4, with CD14) on B cells. At high concentrations they drive proliferation and antibody secretion in most B cells, whatever their antigen specificity (polyclonal activation). TI-2 antigens, such as capsular polysaccharides, work differently: their highly repetitive structure extensively cross-links the BCRs of B cells specific for them, mainly marginal zone B cells. Neither class requires helper T cells, and both mostly produce IgM with little affinity maturation.",
    ref: "Humoral lecture · LO1 · TI-1 vs TI-2 antigens"
  },
  {
    id: "B14", lec: "B", topic: "T–B cell interaction", figure: "tb",
    caption: "A B cell specific for the folded viral envelope protein interacting with a helper T cell",
    stem: "The diagram shows a B cell specific for a native, folded viral envelope protein interacting with an activated helper T cell. Which statement best describes recognition at sites 1 and 2?",
    options: ["Site 1: the BCR binds a conformational epitope on the intact protein. Site 2: the TCR recognizes a peptide from the same protein, processed by the B cell and shown on MHC II","Both sites recognize the same conformational epitope on the folded protein","Site 2 displays the peptide on MHC I, because the B cell was infected","The T cell recognizes intact protein still bound to the BCR at site 1","The B cell processes antigen for site 2 only after receiving the site 3 signal"],
    answer: 0,
    explanation: "The B cell and the helper T cell are specific for the same antigen but recognize different parts of it. The BCR (site 1) binds a native, conformational epitope and also delivers the antigen into the cell. There the protein is degraded, and its peptides are loaded onto MHC II and displayed at the cell surface (site 2). The helper T cell, already activated by a DC presenting that peptide, recognizes the peptide–MHC II. It then expresses CD40L, which engages CD40 on the B cell (site 3), and secretes cytokines (site 4). These signals activate NF-κB, induce anti-apoptotic proteins, and drive B cell proliferation, isotype switching and differentiation.",
    ref: "Humoral lecture · LO2 · initial B cell–T cell interaction"
  },
  {
    id: "B15", lec: "B", topic: "B cell migration after activation",
    stem: "In a mouse model, B cells can bind and signal through their BCRs normally but can't upregulate the chemokine receptor CCR7 after activation. The mice are immunized with a protein antigen. Which outcome is most likely?",
    options: ["Activated B cells stay deep in the follicle, rarely meet antigen-specific helper T cells at the T–B interface, and class switching and germinal center formation are impaired","B cells can't bind the protein antigen","Responses to TI-2 polysaccharide antigens are completely abolished","The T-dependent response is stronger, because B cells stay close to follicular dendritic cells","No change, because helper T cells enter the follicle to find naive B cells before any B cell migration"],
    answer: 0,
    explanation: "After a B cell in the follicle binds and internalizes protein antigen, it upregulates CCR7, which draws it toward chemokines from the T cell zone. Meanwhile, activated helper T cells move toward the follicle. The two meet at the interface of the T and B cell zones, where cognate T help (CD40L plus cytokines) starts the extrafollicular focus. Some of these cells then go on to form the germinal center. Without CCR7, the antigen-specific B cells don't reach that meeting point, so T-dependent switching, affinity maturation and memory suffer. T-independent responses don't need this T cell contact.",
    ref: "Humoral lecture · LO2/LO3 · migration of activated B and T cells"
  },
  {
    id: "B16", lec: "B", topic: "CR2–CD19–CD81 co-receptor",
    stem: "A child with recurrent bacterial infections and low serum IgG has B cells with a loss-of-function mutation in CD19. Surface IgM and CR2 (CD21) are expressed normally. In vitro, the B cells respond normally to high doses of a multivalent antigen but fail to respond to low doses of the same antigen coated with C3d. What best explains this?",
    options: ["CD19 is the signaling component of the CR2–CD19–CD81 co-receptor, so C3d binding to CR2 can't amplify BCR signaling","Without CD19, CR1 can't convert C3b to C3d on the microbe","C3d can't bind CR2 in the absence of CD19","Loss of CD19 leaves FcγRIIB permanently engaged","CD19 is needed to present antigen to helper T cells on MHC II"],
    answer: 0,
    explanation: "The B cell co-receptor is CR2 (CD21) together with CD19 and CD81. C3b deposited on a microbe binds CR1, which helps factor I cleave it to iC3b and then C3d. C3d is the ligand for CR2. When a C3d-coated antigen engages the BCR and CR2 at the same time, CD19 sends a signal that adds to the BCR signal, so the B cell activates at much lower antigen concentrations. Without CD19, CR2 still binds C3d but nothing is transmitted. The B cell then needs strong cross-linking by abundant antigen to activate, which explains the normal high-dose response and the failed low-dose response.",
    ref: "Humoral lecture · LO2 · B cell co-receptor & C3d"
  },

  /* ================= RECALL SET (easy / medium) ================= */
  { id: "RT1", lec: "T", difficulty: "easy", priority: "must", topic: "Signal 2",
    stem: "Which receptor–ligand pair provides the main costimulatory signal (Signal 2) when a dendritic cell activates a naive T cell?",
    options: ["CD28 on the T cell binding B7 on the APC", "LFA-1 on the T cell binding ICAM-1 on the APC", "CTLA-4 on the T cell binding B7 on the APC", "PD-1 on the T cell binding PD-L1 on the APC", "CD4 on the T cell binding MHC II on the APC"],
    answer: 0,
    explanation: "CD28 binding B7 (CD80/CD86) is the classic Signal 2 and promotes T cell survival and expansion. Microbe-activated DCs raise their B7 levels. LFA-1–ICAM-1 is adhesion, CTLA-4 and PD-1 are inhibitory, and CD4–MHC II is part of Signal 1.",
    ref: "Cell-mediated lecture · LO1" },
  { id: "RT2", lec: "T", difficulty: "easy", priority: "must", topic: "Signal 1 without Signal 2",
    stem: "A naive T cell recognizes its peptide–MHC on an APC that expresses no B7. What is the most likely outcome?",
    options: ["Anergy or apoptosis", "Full activation and proliferation", "Differentiation into a memory T cell", "Differentiation into a Th17 cell", "Immediate cytotoxic killing of the APC"],
    answer: 0,
    explanation: "Signal 1 without costimulation leaves the T cell anergic (unresponsive) or causes it to die by apoptosis. This keeps T cells from reacting to harmless antigens.",
    ref: "Cell-mediated lecture · LO1" },
  { id: "RT3", lec: "T", difficulty: "medium", priority: "must", topic: "IL-2 receptor",
    stem: "Which chains make up the IL-2 receptor on a naive (resting) T cell, and how strongly does it bind IL-2?",
    options: ["β and γ chains; low affinity", "α, β and γ chains; high affinity", "α chain alone; high affinity", "α and γ chains; low affinity", "β chain alone; no binding"],
    answer: 0,
    explanation: "Naive T cells express only the βγ receptor, which binds IL-2 weakly. Activation induces the α chain (CD25), creating the high-affinity αβγ receptor that drives proliferation.",
    ref: "Cell-mediated lecture · LO3" },
  { id: "RT4", lec: "T", difficulty: "easy", priority: "must", topic: "Th1 differentiation",
    stem: "Which cytokines drive a naive CD4+ T cell to become a Th1 cell?",
    options: ["IL-12 and IFN-γ", "IL-4", "IL-6, TGF-β and IL-23", "IL-5 and IL-13", "IL-2 alone"],
    answer: 0,
    explanation: "IL-12 (from DCs and macrophages) and IFN-γ drive Th1 differentiation. IL-4 drives Th2, and IL-6 + TGF-β + IL-23 drive Th17.",
    ref: "Cell-mediated lecture · LO4" },
  { id: "RT5", lec: "T", difficulty: "easy", priority: "must", topic: "Th2 cytokines",
    stem: "Which set of cytokines defines Th2 cells?",
    options: ["IL-4, IL-5 and IL-13", "IFN-γ and TNF", "IL-17 and IL-22", "IL-12 and IL-23", "IL-2 and IL-7"],
    answer: 0,
    explanation: "Th2 cells make IL-4 (IgE switching, Th2 amplification), IL-5 (eosinophil activation) and IL-13 (mucus, M2 macrophages).",
    ref: "Cell-mediated lecture · LO4" },
  { id: "RT6", lec: "T", difficulty: "easy", priority: "must", topic: "IL-5",
    stem: "Which Th2 cytokine mainly recruits and activates eosinophils?",
    options: ["IL-5", "IL-4", "IL-13", "IL-17", "IFN-γ"],
    answer: 0,
    explanation: "IL-5 activates eosinophils, which release toxic granule proteins against helminths. IL-4 mainly drives IgE switching.",
    ref: "Cell-mediated lecture · LO4" },
  { id: "RT7", lec: "T", difficulty: "easy", priority: "must", topic: "Perforin",
    stem: "What is the function of perforin in CTL-mediated killing?",
    options: ["It forms pores in the target cell membrane so granzymes can enter", "It cleaves and activates caspases directly", "It binds Fas on the target cell", "It presents peptide on MHC I", "It recruits neutrophils to the target cell"],
    answer: 0,
    explanation: "Perforin forms pores in the target membrane, which lets granzymes in. Granzymes are the serine proteases that activate caspases and cause apoptosis.",
    ref: "Cell-mediated lecture · LO5" },
  { id: "RT8", lec: "T", difficulty: "medium", priority: "must", topic: "CTLA-4",
    stem: "How does CTLA-4 inhibit T cell activation?",
    options: ["It binds B7 more tightly than CD28 does and removes B7 from APCs, blocking costimulation", "It binds PD-L1 and dephosphorylates the TCR", "It blocks IL-2 binding to CD25", "It kills the APC through Fas ligand", "It prevents peptide loading onto MHC II"],
    answer: 0,
    explanation: "CTLA-4, expressed on activated T cells, outcompetes CD28 for B7 and strips B7 off APCs, which cuts off Signal 2. PD-1 is the receptor that binds PD-L.",
    ref: "Cell-mediated lecture · LO6" },
  { id: "RT9", lec: "T", difficulty: "medium", priority: "should", topic: "Memory T cells",
    stem: "Which cytokine is most important for long-term maintenance of memory T cells?",
    options: ["IL-7", "IL-2", "IL-4", "IL-12", "IL-17"],
    answer: 0,
    explanation: "Memory T cells express high levels of IL-7R. IL-7 induces anti-apoptotic proteins and slow homeostatic proliferation, keeping the memory pool going after antigen is gone.",
    ref: "Cell-mediated lecture · LO7" },
  { id: "RB1", lec: "B", difficulty: "easy", priority: "must", topic: "AID",
    stem: "Which enzyme starts both class switch recombination and somatic hypermutation in activated B cells?",
    options: ["Activation-induced deaminase (AID)", "RAG1/RAG2", "Terminal deoxynucleotidyl transferase (TdT)", "Granzyme B", "Factor I"],
    answer: 0,
    explanation: "AID alters nucleotides in switch regions (for class switching) and in V regions (for somatic hypermutation). RAG enzymes do V(D)J recombination during B cell development.",
    ref: "Humoral lecture · LO4" },
  { id: "RB2", lec: "B", difficulty: "easy", priority: "must", topic: "Switching to IgE",
    stem: "Which helper T cell cytokines direct class switching to IgE?",
    options: ["IL-4 and IL-13", "TGF-β", "IL-21", "IFN-γ", "IL-5"],
    answer: 0,
    explanation: "IL-4 and IL-13 direct switching to IgE. In her slides, TGF-β drives IgA and IL-21 drives IgG1/IgG3.",
    ref: "Humoral lecture · LO4" },
  { id: "RB3", lec: "B", difficulty: "easy", priority: "must", topic: "Switching to IgA",
    stem: "Which signal mainly directs class switching to IgA at mucosal sites?",
    options: ["TGF-β", "IL-4", "IL-21", "IL-12", "IL-2"],
    answer: 0,
    explanation: "TGF-β, together with other mucosal signals, directs switching to IgA, the main antibody at mucosal surfaces.",
    ref: "Humoral lecture · LO4" },
  { id: "RB4", lec: "B", difficulty: "medium", priority: "should", topic: "IL-21",
    stem: "Besides directing switching to IgG1 and IgG3, what is a key role of IL-21 from Tfh cells?",
    options: ["It is essential for germinal center development", "It recruits eosinophils", "It activates M1 macrophages", "It inhibits AID", "It drives Th17 differentiation in the gut"],
    answer: 0,
    explanation: "IL-21 is the signature Tfh cytokine. It is essential for germinal center development and supports the survival and differentiation of selected B cells.",
    ref: "Humoral lecture · LO3/LO4" },
  { id: "RB5", lec: "B", difficulty: "easy", priority: "must", topic: "Class switching",
    stem: "After a B cell switches from IgM to IgG, which part of the heavy chain has changed?",
    options: ["The constant region only", "The variable region only", "Both variable and constant regions", "The light chain variable region", "Nothing; only glycosylation changes"],
    answer: 0,
    explanation: "Class switching swaps only the heavy-chain constant region. The VDJ variable region stays the same, so the antibody's specificity is unchanged.",
    ref: "Humoral lecture · LO4" },
  { id: "RB6", lec: "B", difficulty: "easy", priority: "must", topic: "TI antibody response",
    stem: "Which antibody isotype dominates the response to a T-independent polysaccharide antigen?",
    options: ["IgM", "IgG", "IgA", "IgE", "IgD"],
    answer: 0,
    explanation: "Without T cell help there is little class switching or affinity maturation, so TI responses are mostly low-affinity IgM with poor memory.",
    ref: "Humoral lecture · LO1" },
  { id: "RB7", lec: "B", difficulty: "medium", priority: "should", topic: "B cell co-receptor",
    stem: "Which proteins make up the B cell co-receptor that binds C3d-coated antigen?",
    options: ["CR2 (CD21), CD19 and CD81", "CR1, CD40 and CD80", "FcγRIIB, CD19 and CD22", "Igα, Igβ and CD45", "TLR4, CD14 and MD-2"],
    answer: 0,
    explanation: "CR2 binds C3d, CD19 is the signaling component, and CD81 completes the complex. Together they boost BCR signaling so B cells respond to lower antigen doses.",
    ref: "Humoral lecture · LO2" },
  { id: "RB8", lec: "B", difficulty: "medium", priority: "must", topic: "FcγRIIB",
    stem: "Which motif in the cytoplasmic tail of FcγRIIB delivers its inhibitory signal?",
    options: ["ITIM (immunoreceptor tyrosine-based inhibitory motif)", "ITAM (immunoreceptor tyrosine-based activation motif)", "A death domain", "A Toll/IL-1 receptor (TIR) domain", "A switch region"],
    answer: 0,
    explanation: "FcγRIIB carries an ITIM. When immune complexes engage it together with the BCR, the ITIM recruits enzymes that block BCR signaling (antibody feedback). ITAMs, as on Igα/Igβ, are activating.",
    ref: "Humoral lecture · LO5" },
  { id: "RB9", lec: "B", difficulty: "medium", priority: "should", topic: "Germinal center zones",
    stem: "In which germinal center region do B cells proliferate rapidly and undergo somatic hypermutation?",
    options: ["Dark zone", "Light zone", "Mantle zone", "Marginal zone", "T cell zone (paracortex)"],
    answer: 0,
    explanation: "Rapid proliferation and somatic hypermutation happen in the dark zone. B cells then move to the light zone, where FDCs and Tfh cells select the high-affinity clones.",
    ref: "Humoral lecture · LO3" },
  { id: "RB10", lec: "B", difficulty: "medium", priority: "nice", topic: "Follicular dendritic cells",
    stem: "Which statement about follicular dendritic cells (FDCs) is correct?",
    options: ["They are non-hematopoietic (mesenchymal) cells that hold antigen as immune complexes via Fc and complement receptors", "They come from bone marrow monocytes and present peptide on MHC II", "They make AID", "They migrate to lymph nodes from the skin carrying antigen", "They are the main source of IL-21"],
    answer: 0,
    explanation: "FDCs are non-phagocytic, non-hematopoietic cells in the light zone. Using Fc and complement receptors, they display intact antigen as immune complexes to germinal center B cells.",
    ref: "Humoral lecture · LO5" },

  /* ================= RECALL SET 2 ================= */
  { id: "RT10", lec: "T", difficulty: "easy", priority: "must", topic: "Th17 cytokines",
    stem: "Which cytokines define Th17 cells?",
    options: ["IL-17 and IL-22", "IFN-γ and TNF", "IL-4 and IL-5", "IL-2 and IL-21", "IL-10 and TGF-β"],
    answer: 0,
    explanation: "Th17 cells make IL-17 (inflammatory cytokines and neutrophil-attracting chemokines) and IL-22 (antimicrobial peptides and tight junction proteins in epithelium).",
    ref: "Cell-mediated lecture · LO4" },
  { id: "RT11", lec: "T", difficulty: "easy", priority: "must", topic: "M2 macrophages",
    stem: "Which cytokines induce alternatively activated (M2) macrophages?",
    options: ["IL-4 and IL-13", "IFN-γ and TNF", "IL-12 and IL-23", "IL-17 and IL-22", "IL-2 and IL-7"],
    answer: 0,
    explanation: "IL-4 and IL-13 from Th2 cells induce M2 macrophages, which control inflammation and promote tissue repair and fibrosis. IFN-γ induces M1 macrophages.",
    ref: "Cell-mediated lecture · LO4" },
  { id: "RT12", lec: "T", difficulty: "easy", priority: "must", topic: "Fas–FasL",
    stem: "Besides perforin and granzymes, which molecule lets a CTL induce apoptosis in a target cell?",
    options: ["Fas ligand (FasL)", "CD28", "IL-2", "ICAM-1", "CTLA-4"],
    answer: 0,
    explanation: "In the granule-independent pathway, FasL on the CTL binds the death receptor Fas on the target, activating caspases and causing apoptosis.",
    ref: "Cell-mediated lecture · LO5" },
  { id: "RT13", lec: "T", difficulty: "medium", priority: "should", topic: "Immunological synapse",
    stem: "In the immunological synapse, where are the LFA-1–ICAM-1 adhesion interactions located?",
    options: ["In the peripheral ring (p-SMAC)", "In the central cluster (c-SMAC)", "Only in the T cell nucleus", "On the APC's internal membranes", "Spread evenly across the T cell surface"],
    answer: 0,
    explanation: "The central area (c-SMAC) holds the TCR–peptide–MHC and CD28–B7 signaling interactions. The peripheral ring (p-SMAC) holds the adhesion molecules, such as LFA-1–ICAM-1.",
    ref: "Cell-mediated lecture · LO2" },
  { id: "RT14", lec: "T", difficulty: "medium", priority: "must", topic: "CD4 help for CD8",
    stem: "Through which interaction do activated CD4+ T cells make dendritic cells raise their B7 and IL-12 to help activate CD8+ T cells?",
    options: ["CD40L on the CD4 T cell binding CD40 on the DC", "CTLA-4 on the CD4 T cell binding B7 on the DC", "PD-1 on the CD4 T cell binding PD-L1 on the DC", "FasL on the CD4 T cell binding Fas on the DC", "IL-7 binding IL-7R on the DC"],
    answer: 0,
    explanation: "Activated CD4 helper T cells use CD40L to engage CD40 on the DC, which raises B7 (stronger Signal 2) and IL-12 (CD8 differentiation). The CD4 cells also supply IL-2.",
    ref: "Cell-mediated lecture · LO5" },
  { id: "RB11", lec: "B", difficulty: "easy", priority: "should", topic: "BCR signaling",
    stem: "Which proteins carry the ITAMs that transmit signals from the B cell receptor?",
    options: ["Igα and Igβ", "Membrane IgM heavy chains", "CD40", "FcγRIIB", "CR1"],
    answer: 0,
    explanation: "Membrane Ig has a very short cytoplasmic tail. When the BCR is cross-linked, signals pass through the ITAMs of the associated Igα and Igβ chains, which get tyrosine-phosphorylated.",
    ref: "Humoral lecture · LO2" },
  { id: "RB12", lec: "B", difficulty: "easy", priority: "should", topic: "TI-2 antigens",
    stem: "Which B cell population mainly responds to TI-2 antigens such as bacterial capsular polysaccharides in the blood?",
    options: ["Marginal zone B cells of the spleen", "Follicular B cells in lymph nodes", "Germinal center B cells", "Long-lived plasma cells", "Memory B cells"],
    answer: 0,
    explanation: "Marginal zone B cells are non-recirculating cells at the border of the splenic white pulp. They respond quickly, mostly with IgM, to repetitive TI-2 antigens, which is one reason the spleen is important against encapsulated bacteria.",
    ref: "Humoral lecture · LO1" },
  { id: "RB13", lec: "B", difficulty: "easy", priority: "must", topic: "Secondary antibody response",
    stem: "Compared with the primary response, which antibody mainly dominates a secondary response to a protein antigen?",
    options: ["High-affinity IgG", "Low-affinity IgM", "IgD", "Low-affinity IgG", "Secreted IgD"],
    answer: 0,
    explanation: "Secondary responses come from memory B cells that were already class-switched and affinity-selected in germinal centers, so they produce mostly high-affinity IgG, quickly and in larger amounts.",
    ref: "Humoral lecture · primary vs secondary responses" },
  { id: "RB14", lec: "B", difficulty: "medium", priority: "should", topic: "Extrafollicular response",
    stem: "Which feature best describes plasma cells generated in the extrafollicular focus?",
    options: ["They are short-lived and provide early, mostly low-affinity antibody", "They are long-lived and migrate to the bone marrow", "They have undergone extensive somatic hypermutation", "They form only in response to T-independent antigens", "They can't secrete class-switched antibody"],
    answer: 0,
    explanation: "Extrafollicular foci form at the T–B interface and produce short-lived plasma cells that make early antibody with little somatic hypermutation. Long-lived plasma cells come from germinal centers.",
    ref: "Humoral lecture · LO3" },
  { id: "RB15", lec: "B", difficulty: "medium", priority: "nice", topic: "Origin of C3d",
    stem: "On a microbe's surface, how is C3b converted to C3d, the ligand for CR2?",
    options: ["CR1 binds C3b and helps factor I cleave it to iC3b and then C3d", "AID deaminates C3b to C3d", "Perforin cleaves C3b", "FcγRIIB converts C3b to C3d", "Tfh-derived IL-21 cleaves C3b"],
    answer: 0,
    explanation: "CR1 on B cells binds C3b and acts as a cofactor for factor I, which cleaves C3b to iC3b and then to C3d. C3d then binds CR2 in the CR2–CD19–CD81 co-receptor.",
    ref: "Humoral lecture · LO2" }
];

/* ===== Priority & difficulty tags for the vignette questions (edit freely) ===== */
const META = {
  T1:"must", T2:"must", T3:"must", T4:"must", T5:"must", T6:"must", T7:"should", T8:"must", T9:"must", T10:"should", T11:"should",
  T12:"must", T13:"should", T14:"must", T15:"should", T16:"should",
  B1:"must", B2:"should", B3:"must", B4:"must", B5:"must", B6:"must", B7:"must", B8:"must", B9:"should", B10:"should", B11:"should",
  B12:"should", B13:"nice", B14:"must", B15:"nice", B16:"should"
};
QUESTIONS.forEach(q => { if (!q.priority) q.priority = META[q.id] || "should"; if (!q.difficulty) q.difficulty = "hard"; });

/* ================= FIGURES (inline SVG, theme-aware) ================= */
const FIGS = {
  synapse: `<svg viewBox="0 0 520 230" font-family="inherit">
    <circle cx="150" cy="115" r="100" style="fill:color-mix(in srgb,var(--apc) 22%,transparent);stroke:var(--apc);stroke-width:2"/>
    <circle cx="150" cy="115" r="45" style="fill:color-mix(in srgb,var(--t) 35%,var(--panel2));stroke:var(--t);stroke-width:2"/>
    <text x="150" y="121" text-anchor="middle" font-size="20" font-weight="800" style="fill:var(--ink)">A</text>
    <text x="150" y="44" text-anchor="middle" font-size="20" font-weight="800" style="fill:var(--ink)">B</text>
    <line x1="210" y1="115" x2="300" y2="90" style="stroke:var(--muted);stroke-width:1.5"/><line x1="245" y1="160" x2="300" y2="160" style="stroke:var(--muted);stroke-width:1.5"/>
    <circle cx="225" cy="160" r="4" style="fill:var(--muted)"/><circle cx="195" cy="115" r="4" style="fill:var(--muted)"/>
    <text x="306" y="94" font-size="13" style="fill:var(--ink)">Region A: central cluster</text>
    <text x="306" y="164" font-size="13" style="fill:var(--ink)">Region B: peripheral ring</text>
  </svg>`,
  il2r: `<svg viewBox="0 0 520 220" font-family="inherit">
    <rect x="20" y="150" width="210" height="16" rx="4" style="fill:color-mix(in srgb,var(--t) 30%,transparent)"/>
    <rect x="290" y="150" width="210" height="16" rx="4" style="fill:color-mix(in srgb,var(--t) 30%,transparent)"/>
    <rect x="95" y="80" width="22" height="95" rx="8" style="fill:var(--accent)"/><text x="106" y="72" text-anchor="middle" font-size="15" style="fill:var(--ink)">β</text>
    <rect x="125" y="95" width="22" height="80" rx="8" style="fill:var(--accent2)"/><text x="136" y="88" text-anchor="middle" font-size="15" style="fill:var(--ink)">γ</text>
    <text x="125" y="200" text-anchor="middle" font-size="13" style="fill:var(--muted)">Naive T cell</text>
    <rect x="335" y="60" width="22" height="115" rx="8" style="fill:var(--warn)"/><text x="346" y="52" text-anchor="middle" font-size="16" font-weight="800" style="fill:var(--warn)">X</text>
    <rect x="365" y="80" width="22" height="95" rx="8" style="fill:var(--accent)"/><text x="376" y="72" text-anchor="middle" font-size="15" style="fill:var(--ink)">β</text>
    <rect x="395" y="95" width="22" height="80" rx="8" style="fill:var(--accent2)"/><text x="406" y="88" text-anchor="middle" font-size="15" style="fill:var(--ink)">γ</text>
    <circle cx="376" cy="30" r="10" style="fill:var(--ok)"/><text x="392" y="34" font-size="12" style="fill:var(--ok)">IL-2</text>
    <text x="395" y="200" text-anchor="middle" font-size="13" style="fill:var(--muted)">Activated T cell</text>
    <text x="260" y="110" text-anchor="middle" font-size="22" style="fill:var(--muted)">→</text>
  </svg>`,
  gc: `<svg viewBox="0 0 520 240" font-family="inherit">
    <ellipse cx="260" cy="120" rx="240" ry="105" style="fill:color-mix(in srgb,var(--b) 10%,transparent);stroke:var(--b);stroke-width:2;stroke-dasharray:6 4"/>
    <ellipse cx="260" cy="125" rx="190" ry="80" style="fill:var(--panel);stroke:var(--line);stroke-width:1.5"/>
    <path d="M260 45 L260 205" style="stroke:var(--line);stroke-width:1.5;stroke-dasharray:4 4"/>
    ${Array.from({length:30},(_,i)=>{const c=i%6,r=Math.floor(i/6),x=118+c*24+Math.sin(i*7.3)*6,y=78+r*22+Math.cos(i*5.1)*5;return (Math.pow((x-260)/185,2)+Math.pow((y-125)/76,2)<1)?`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" style="fill:color-mix(in srgb,var(--b) 60%,var(--panel))"/>`:""}).join("")}
    ${[[320,90],[370,140],[330,170],[405,100]].map(([x,y])=>`<path d="M${x} ${y} l14 -14 M${x} ${y} l-14 -12 M${x} ${y} l16 10 M${x} ${y} l-12 14 M${x} ${y} l2 -18" style="stroke:var(--apc);stroke-width:3;stroke-linecap:round"/><circle cx="${x}" cy="${y}" r="5" style="fill:var(--apc)"/>`).join("")}
    ${[[300,130],[390,170],[360,75]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" style="fill:var(--t)"/>`).join("")}
    ${[[290,105],[345,120],[385,125]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" style="fill:color-mix(in srgb,var(--b) 60%,var(--panel))"/>`).join("")}
    <text x="175" y="40" text-anchor="middle" font-size="18" font-weight="800" style="fill:var(--ink)">1</text>
    <text x="345" y="40" text-anchor="middle" font-size="18" font-weight="800" style="fill:var(--ink)">2</text>
    <text x="40" y="232" font-size="11" style="fill:var(--b)">● B cells</text><text x="120" y="232" font-size="11" style="fill:var(--apc)">✳ FDC</text><text x="185" y="232" font-size="11" style="fill:var(--t)">● Tfh</text>
    <text x="490" y="232" text-anchor="end" font-size="11" style="fill:var(--muted)">dashed outer ring = mantle zone</text>
  </svg>`,
  locus: `<svg viewBox="0 0 560 130" font-family="inherit">
    <line x1="10" y1="60" x2="550" y2="60" style="stroke:var(--muted);stroke-width:2"/>
    ${[["VDJ",20,60,"var(--accent)"],["Sμ",100,26,"var(--warn)"],["Cμ",130,40,"var(--muted)"],["Cδ",185,40,"var(--muted)"],["Sγ",250,26,"var(--warn)"],["Cγ",280,40,"var(--muted)"],["Sε",345,26,"var(--warn)"],["Cε",375,40,"var(--muted)"],["Sα",440,26,"var(--warn)"],["Cα",470,40,"var(--muted)"]].map(([t,x,w,c])=>`<rect x="${x}" y="45" width="${w}" height="30" rx="4" style="fill:${c};opacity:.9"/><text x="${x+w/2}" y="65" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--bg)">${t}</text>`).join("")}
    <text x="10" y="110" font-size="12" style="fill:var(--muted)">5′</text><text x="540" y="110" font-size="12" style="fill:var(--muted)">3′</text>
    <text x="280" y="110" text-anchor="middle" font-size="12" style="fill:var(--muted)">Transcribed currently: VDJ–Cμ (IgM) and VDJ–Cδ (IgD)</text>
  </svg>`,
  curve: `<svg viewBox="0 0 520 240" font-family="inherit">
    <line x1="50" y1="200" x2="500" y2="200" style="stroke:var(--muted);stroke-width:1.5"/><line x1="50" y1="20" x2="50" y2="200" style="stroke:var(--muted);stroke-width:1.5"/>
    <text x="275" y="232" text-anchor="middle" font-size="12" style="fill:var(--muted)">Time (weeks)</text>
    <text x="18" y="110" font-size="12" style="fill:var(--muted)" transform="rotate(-90 18 110)">Serum antibody titer (log)</text>
    <path d="M70 198 C110 198 120 150 150 150 C185 150 200 185 280 190" style="fill:none;stroke:var(--accent2);stroke-width:3"/>
    <path d="M280 190 C295 190 300 45 340 45 C390 45 420 70 490 80" style="fill:none;stroke:var(--accent);stroke-width:3"/>
    <text x="70" y="40" font-size="15" font-weight="800" style="fill:var(--ink)">1</text><line x1="75" y1="45" x2="75" y2="190" style="stroke:var(--ink);stroke-width:1.5;stroke-dasharray:3 3"/>
    <text x="275" y="40" font-size="15" font-weight="800" style="fill:var(--ink)">2</text><line x1="280" y1="45" x2="280" y2="190" style="stroke:var(--ink);stroke-width:1.5;stroke-dasharray:3 3"/>
  </svg>`,
  lfa1: `<svg viewBox="0 0 520 230" font-family="inherit">
    <rect x="20" y="20" width="480" height="22" rx="5" style="fill:color-mix(in srgb,var(--apc) 30%,transparent)"/><text x="260" y="36" text-anchor="middle" font-size="12" style="fill:var(--apc)">APC membrane</text>
    <rect x="20" y="190" width="480" height="22" rx="5" style="fill:color-mix(in srgb,var(--t) 30%,transparent)"/><text x="260" y="206" text-anchor="middle" font-size="12" style="fill:var(--t)">T cell membrane</text>
    <rect x="120" y="42" width="16" height="40" rx="5" style="fill:var(--apc)"/><text x="145" y="66" font-size="11" style="fill:var(--ink)">ICAM-1</text>
    <path d="M118 190 L118 150 Q118 125 140 135 L160 150" style="fill:none;stroke:var(--accent);stroke-width:9;stroke-linecap:round"/>
    <path d="M136 190 L136 158" style="fill:none;stroke:var(--accent2);stroke-width:9;stroke-linecap:round"/>
    <text x="128" y="120" text-anchor="middle" font-size="11" style="fill:var(--muted)">bent</text>
    <rect x="370" y="42" width="16" height="40" rx="5" style="fill:var(--apc)"/><text x="395" y="66" font-size="11" style="fill:var(--ink)">ICAM-1</text>
    <path d="M370 190 L374 86" style="fill:none;stroke:var(--accent);stroke-width:9;stroke-linecap:round"/>
    <path d="M388 190 L386 100" style="fill:none;stroke:var(--accent2);stroke-width:9;stroke-linecap:round"/>
    <text x="410" y="140" font-size="11" style="fill:var(--muted)">extended</text>
    <text x="130" y="228" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--ink)">Conformation (left)</text>
    <text x="380" y="228" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--ink)">Conformation (right)</text>
  </svg>`,
  tresponse: `<svg viewBox="0 0 520 240" font-family="inherit">
    <line x1="50" y1="200" x2="500" y2="200" style="stroke:var(--muted);stroke-width:1.5"/><line x1="50" y1="20" x2="50" y2="200" style="stroke:var(--muted);stroke-width:1.5"/>
    <text x="275" y="232" text-anchor="middle" font-size="12" style="fill:var(--muted)">Days after infection</text>
    <text x="24" y="110" text-anchor="middle" font-size="12" style="fill:var(--muted)" transform="rotate(-90 24 110)">Specific T cells (log)</text>
    <path d="M55 185 C110 185 120 40 175 40 C215 40 240 140 300 145 C360 150 420 148 495 150" style="fill:none;stroke:var(--accent);stroke-width:3"/>
    <rect x="70" y="20" width="100" height="16" rx="3" style="fill:none"/>
    <line x1="175" y1="30" x2="175" y2="200" style="stroke:var(--line);stroke-dasharray:4 4"/><line x1="300" y1="30" x2="300" y2="200" style="stroke:var(--line);stroke-dasharray:4 4"/>
    <text x="115" y="30" text-anchor="middle" font-size="16" font-weight="800" style="fill:var(--ink)">A</text>
    <text x="237" y="30" text-anchor="middle" font-size="16" font-weight="800" style="fill:var(--ink)">B</text>
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="800" style="fill:var(--ink)">C</text>
    <text x="160" y="196" font-size="10" style="fill:var(--muted)">~day 8–10</text>
  </svg>`,
  valency: `<svg viewBox="0 0 520 230" font-family="inherit">
    ${[0,1].map(k=>{const ox=k*260;return `<path d="M${ox+20} 190 Q${ox+130} 150 ${ox+240} 190" style="fill:color-mix(in srgb,var(--b) 18%,transparent);stroke:var(--b);stroke-width:2"/>`+[60,100,140,180].map(x=>`<path d="M${ox+x} 178 L${ox+x} 140 M${ox+x} 140 L${ox+x-12} 118 M${ox+x} 140 L${ox+x+12} 118" style="stroke:var(--b);stroke-width:5;stroke-linecap:round"/>`).join("")}).join("")}
    <circle cx="48" cy="110" r="7" style="fill:var(--warn)"/><rect x="38" y="88" width="20" height="16" rx="6" style="fill:var(--muted)"/>
    <circle cx="152" cy="110" r="7" style="fill:var(--warn)"/><rect x="142" y="88" width="20" height="16" rx="6" style="fill:var(--muted)"/>
    <path d="M300 84 L470 84" style="stroke:var(--muted);stroke-width:8;stroke-linecap:round"/>
    ${[308,332,348,372,388,412,428,452].map(x=>`<line x1="${x}" y1="88" x2="${x}" y2="104" style="stroke:var(--muted);stroke-width:2"/><circle cx="${x}" cy="110" r="7" style="fill:var(--warn)"/>`).join("")}
    <text x="130" y="30" text-anchor="middle" font-size="15" font-weight="800" style="fill:var(--ink)">Antigen P</text>
    <text x="390" y="30" text-anchor="middle" font-size="15" font-weight="800" style="fill:var(--ink)">Antigen Q</text>
    <text x="130" y="222" text-anchor="middle" font-size="11" style="fill:var(--muted)">one ● per molecule</text>
    <text x="390" y="222" text-anchor="middle" font-size="11" style="fill:var(--muted)">many ● per molecule</text>
  </svg>`,
  tb: `<svg viewBox="0 -24 520 264" font-family="inherit">
    <circle cx="130" cy="120" r="95" style="fill:color-mix(in srgb,var(--b) 15%,var(--panel2));stroke:var(--b);stroke-width:2"/>
    <text x="95" y="125" text-anchor="middle" font-weight="800" font-size="14" style="fill:var(--b)">B cell</text>
    <circle cx="390" cy="120" r="95" style="fill:color-mix(in srgb,var(--t) 15%,var(--panel2));stroke:var(--t);stroke-width:2"/>
    <text x="430" y="125" text-anchor="middle" font-weight="800" font-size="14" style="fill:var(--t)">Helper T</text>
    <path d="M150 38 L150 20 M150 20 L140 6 M150 20 L160 6" style="stroke:var(--b);stroke-width:5;stroke-linecap:round"/>
    <path d="M128 -2 q12 -10 24 0 q12 10 24 0 q6 10 -6 14 q-24 6 -42 -14z" transform="translate(-4 4)" style="fill:var(--warn)"/>
    <text x="178" y="22" font-size="15" font-weight="800" style="fill:var(--ink)">1</text>
    <rect x="215" y="70" width="34" height="18" rx="4" style="fill:var(--b)"/><rect x="225" y="64" width="12" height="8" rx="2" style="fill:var(--warn)"/>
    <rect x="270" y="70" width="34" height="18" rx="4" style="fill:var(--t)"/><line x1="249" y1="79" x2="270" y2="79" style="stroke:var(--ok);stroke-width:3"/>
    <text x="260" y="60" text-anchor="middle" font-size="15" font-weight="800" style="fill:var(--ink)">2</text>
    <rect x="215" y="125" width="34" height="16" rx="4" style="fill:var(--b)"/><rect x="270" y="125" width="34" height="16" rx="4" style="fill:var(--t)"/>
    <line x1="249" y1="133" x2="270" y2="133" style="stroke:var(--ok);stroke-width:3"/>
    <text x="260" y="118" text-anchor="middle" font-size="15" font-weight="800" style="fill:var(--ink)">3</text>
    ${[[262,175],[250,188],[268,195],[240,175]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" style="fill:var(--accent2)"/>`).join("")}
    <text x="285" y="195" font-size="15" font-weight="800" style="fill:var(--ink)">4</text>
  </svg>`
};
