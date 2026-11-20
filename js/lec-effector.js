/* =====================================================================
   Humoral Immunity: Effector Mechanisms (lec "E")
   Written from the lecture slides + session LOs only.
   ===================================================================== */
const FTABLE = (head, rows) => `<div class="tablewrap"><table class="sheet figtable"><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;

QUESTIONS.push(
  {
    id: "E1", lec: "E", topic: "IgG half-life (FcRn)", figure: "eDecay", priority: "must", difficulty: "hard",
    caption: "Serum titers after a single infusion of pathogen-specific IgM and IgG (passive transfer; no endogenous production).",
    stem: "A volunteer who has never been exposed to a virus receives one intravenous infusion of purified antibody to a viral antigen. The infusion contains pathogen-specific IgM and IgG at equal starting titers. Because the volunteer has never met the virus, no host plasma cells are making these antibodies. Serum titers are shown in the figure. Which mechanism best explains the difference between the two curves?",
    options: [
      "IgG binds FcRn in acidified endosomes, which steers it away from lysosomal degradation and back to the cell surface",
      "Plasma cells keep secreting IgG but not IgM after the infusion",
      "IgM is pentameric and is filtered more quickly by the glomerulus",
      "IgG binds FcγRIIB on B cells, which stores it and releases it slowly over time",
      "IgM is used up by fixing complement on circulating virus"
    ],
    answer: 0,
    explanation: "Endothelial cells and phagocytes constantly take up plasma proteins. In the acidic endosome (pH <7), FcRn binds the Fc region of IgG and sends it to recycling endosomes. At the neutral pH outside the cell (>7), the IgG is released back into the blood. That gives IgG a half-life of about 21 days, compared with about 2 days for IgM (and about 12 hours for IgE). The data fit this: IgG halves in about 21 days, and IgM falls 4-fold by day 4. Ongoing secretion is ruled out because the transfer is passive. FcγRIIB is an inhibitory receptor, not a reservoir. There's no virus in the volunteer for IgM to fix complement on.",
    ref: "Effector Mechanisms · LO1/LO4 · IgG has a long half-life due to the FcRn recycling pathway"
  },
  {
    id: "E2", lec: "E", topic: "FcRn pH dependence", priority: "must", difficulty: "hard",
    stem: "Researchers treat endothelial cells in culture with an agent that keeps endosomes at neutral pH (about 7.4) but leaves endocytosis intact. They then add labeled IgG. Compared with untreated cells, which result is most likely?",
    options: [
      "Less labeled IgG goes back out of the cell and more is degraded in lysosomes",
      "IgG builds up in recycling endosomes because FcRn can't release it",
      "More IgG is transcytosed, because FcRn binds better at neutral pH",
      "IgG is turned into dimers and secreted through pIgR",
      "No change, because FcRn binds IgG Fc no matter the pH"
    ],
    answer: 0,
    explanation: "FcRn binds IgG Fc only in an acidic environment (endosome pH <7) and releases it at the neutral pH outside the cell (>7). If the endosome stays neutral, FcRn can't capture IgG. The IgG is then handled like any other endocytosed plasma protein and sorted to lysosomes, so less intact IgG is recycled and its half-life would fall. Build-up of IgG that can't be released would be expected only if the pH outside the cell were acidic, which is the opposite defect. pIgR transports dimeric IgA, not IgG.",
    ref: "Effector Mechanisms · LO1/LO4 · FcRn binds IgG Fc in acidic environment"
  },
  {
    id: "E3", lec: "E", topic: "pIgR & mucosal IgA", priority: "must", difficulty: "hard",
    stem: "Mice lacking the polymeric immunoglobulin receptor (pIgR) are challenged orally with an enteric bacterium that invades by attaching to intestinal epithelium. Compared with wild-type mice, the knockouts have normal or higher serum IgA but almost no IgA in intestinal washings, and they have much heavier bacterial colonization of the epithelium. What best explains this?",
    options: [
      "Dimeric IgA made under the epithelium can't be transcytosed into the lumen, so it can't block attachment there",
      "Lamina propria plasma cells can't switch to IgA",
      "IgA can't bind FcRn, so its half-life in serum is shorter",
      "Without pIgR, IgA can't trigger ADCC by intraepithelial NK cells",
      "IgA is diverted to the placenta and lost"
    ],
    answer: 0,
    explanation: "IgA is made by plasma cells in the lamina propria. pIgR on the basolateral side of epithelial cells binds the Fc region of dimeric IgA and carries it across the cell into the lumen. There it binds microbes and toxins and stops them from attaching to the epithelium (neutralization). The normal or high serum IgA shows that class switching and secretion are intact; what's missing is transport. IgA's job in the lumen is neutralization, not ADCC. IgG, not IgA, is the isotype that crosses the placenta.",
    ref: "Effector Mechanisms · LO1/LO4 · Transcytosis of dimeric IgA (pIgR)"
  },
  {
    id: "E4", lec: "E", topic: "Fab vs Fc functions", figure: "eFab", priority: "must", difficulty: "hard",
    caption: "Left: host cells surviving toxin exposure. Right: toxin-producing bacteria phagocytosed by macrophages.",
    stem: "An investigator compares whole anti-toxin IgG with Fab fragments made from the same antibody (same antigen-binding site, no Fc region). The toxin damages cells by binding a receptor on their surface. Results are shown. Which conclusion is best supported?",
    options: [
      "Neutralization depends on the antigen-binding region, while opsonization depends on the Fc region",
      "Neutralization needs the Fc region to bind Fc receptors on the host cell",
      "Fab fragments neutralize poorly because they have lower affinity",
      "Phagocytosis of the bacteria works through complement and not through Fc receptors",
      "Both functions depend mainly on the Fc region"
    ],
    answer: 0,
    explanation: "Fab protects cells just as well as whole IgG (88% vs 90%) by covering the toxin's receptor-binding site. That shows neutralization is entirely a function of the antigen-binding region. Fab doesn't promote phagocytosis (6%, the same as no antibody), because opsonization needs an Fc region to engage FcγRI on macrophages and neutrophils. This is the lecture's main structural point: Fab and Fc regions are spatially separate, and Fc-dependent functions start only after the antibody has bound antigen.",
    ref: "Effector Mechanisms · LO1/LO2 · Fab vs Fc; neutralization & opsonization"
  },
  {
    id: "E5", lec: "E", topic: "IgM, complement & opsonization", priority: "must", difficulty: "hard",
    stem: "A 3-year-old boy has a CD40L mutation. His serum IgM is high, and IgG and IgA are almost absent. He has repeated pneumonias with an encapsulated bacterium. Which pathway for clearing this organism still works best in him?",
    options: [
      "IgM-triggered complement activation, with C3b deposited on the capsule and recognized by complement receptors on phagocytes",
      "Opsonization by IgG1/IgG3 and uptake through FcγRI on neutrophils",
      "ADCC by NK cells through CD16",
      "Neutralization by secretory IgA in the airway",
      "IgE-mediated mast cell degranulation in the lung"
    ],
    answer: 0,
    explanation: "Without CD40–CD40L help, B cells can't class-switch, but they still make IgM. IgM is very effective at activating complement. The C3b it deposits opsonizes encapsulated bacteria, which resist engulfment otherwise, for uptake through complement receptors. This is also the mechanism that dominates early in any response, before switched antibodies exist. Opsonization through FcγRI, ADCC through CD16 (both IgG) and mucosal IgA all need isotypes he can't make.",
    ref: "Effector Mechanisms · LO2 · Opsonization; complement activation (IgM, IgG)"
  },
  {
    id: "E6", lec: "E", topic: "ADCC (CD16)", figure: "eAdcc", priority: "must", difficulty: "hard",
    caption: "NK cell killing of virus-infected target cells (normal MHC class I; viral envelope glycoprotein on the surface).",
    stem: "Human NK cells are mixed with virus-infected target cells that display a viral envelope glycoprotein on their surface and express normal levels of MHC class I. Specific lysis under different conditions is shown. What mechanism accounts for the killing in row 2?",
    options: [
      "FcγRIIIA (CD16) binds the Fc of IgG on the targets and triggers release of perforin and granzymes",
      "NK cells recognize viral peptide on MHC I through a TCR",
      "IgG activates the classical complement pathway and forms membrane attack complexes on the targets",
      "IgG opsonizes the targets for phagocytosis by NK cells through FcγRI",
      "IgG blocks MHC I, which removes the NK inhibitory signal"
    ],
    answer: 0,
    explanation: "This is antibody-dependent cellular cytotoxicity (ADCC). NK cells have no antigen specificity of their own, but CD16 (FcγRIIIA) lets them recognize IgG-coated cells and kill them with perforin and granzyme granules, the same way CTLs kill. Killing stops when CD16 is blocked (row 3) or when granule release is blocked (row 4), so it isn't complement and isn't loss of MHC I. NK cells don't have TCRs, and FcγRI-driven phagocytosis is a macrophage and neutrophil function.",
    ref: "Effector Mechanisms · LO2/LO3 · ADCC; FcγRIIIA (CD16) on NK cells"
  },
  {
    id: "E7", lec: "E", topic: "IgE, eosinophils & IL-5", figure: "eEos", priority: "should", difficulty: "hard",
    caption: "In vitro killing of helminth larvae by eosinophils.",
    stem: "Eosinophils are incubated with helminth larvae that are either uncoated or coated with larva-specific IgE, with or without added cytokine. Results are shown. Which statement best explains them?",
    options: [
      "IgE binding to FcεRI triggers eosinophil degranulation, and the Th2 cytokine IL-5 strengthens the eosinophils' killing ability",
      "IL-5 kills larvae directly, without eosinophils",
      "IgE opsonizes larvae so eosinophils can phagocytose them through FcγRI",
      "IL-5 makes eosinophils independent of IgE",
      "The killing in row 2 is caused by IgE activating complement"
    ],
    answer: 0,
    explanation: "Helminths are too big to phagocytose. IgE bound to the parasite engages FcεRI on eosinophils and causes them to release toxic granule contents. IL-5 from Th2 cells boosts eosinophil function, which is why killing nearly doubles in row 3. Blocking FcεRI (row 4) removes the effect even with IL-5 present, so IL-5 doesn't replace IgE. The killing depends on degranulation, not on FcγRI-mediated phagocytosis.",
    ref: "Effector Mechanisms · LO2/LO3 · IgE activates mast cell & eosinophil killing of helminths"
  },
  {
    id: "E8", lec: "E", topic: "FcγRIIB on myeloid cells", priority: "should", difficulty: "hard",
    stem: "Mice are engineered so that macrophages and neutrophils, but not B cells, lack FcγRIIB. Immune complexes are injected into the skin. Compared with wild-type mice, the knockouts develop a much stronger local inflammatory reaction. What best explains this?",
    options: [
      "Myeloid cells lose ITIM-mediated inhibition, so signals from activating Fcγ receptors aren't damped down",
      "Uncontrolled B cell activation causes more antibody to be made locally",
      "FcRn can't recycle the immune complexes",
      "Without FcγRIIB, IgG can't bind complement",
      "Macrophages can no longer phagocytose immune complexes, so the complexes build up without being sensed"
    ],
    answer: 0,
    explanation: "FcγRIIB is the inhibitory Fcγ receptor. On B cells it provides feedback inhibition. On dendritic cells, mast cells, neutrophils and macrophages, its ITIM counterbalances activating Fcγ receptors and attenuates inflammation. Here the B cells are normal, so B cell overactivation isn't the explanation. Losing the brake on myeloid cells leaves activating-receptor signaling unopposed, which causes the excess inflammation. Losing phagocytosis would predict less inflammation, not more.",
    ref: "Effector Mechanisms · LO3 · FcγRIIB: feedback inhibition & attenuation of inflammation"
  },
  {
    id: "E9", lec: "E", topic: "Fc receptor functions", figure: "eFcr", priority: "must", difficulty: "hard",
    caption: "Fc receptors covered in lecture (FcγRI, FcγRIIB, FcγRIIIA, FcεRI from the Fc receptor table; FcRn from the half-life and placenta slides).",
    stem: "A therapeutic IgG1 antibody against a bacterial surface protein is modified at one site in its Fc region. The change stops it binding FcγRI (CD64). Binding to antigen and to FcRn is unchanged. Using the receptor table, which property of the antibody is most likely reduced?",
    options: [
      "Uptake and killing of the bacteria by macrophages and neutrophils",
      "Blocking of bacterial attachment to epithelial cells",
      "Serum half-life",
      "Transfer across the placenta",
      "Recognition of the bacterial surface protein"
    ],
    answer: 0,
    explanation: "FcγRI is the high-affinity receptor for IgG1 and IgG3 on macrophages and neutrophils. When it engages, it drives phagocytosis and activates the phagocyte's killing machinery (ROS, nitric oxide, lysosomal enzymes). Blocking attachment (neutralization) and antigen recognition depend on Fab. Serum half-life and placental transfer depend on FcRn, which is unaffected.",
    ref: "Effector Mechanisms · LO2/LO3 · Properties of important Fc receptors"
  },
  {
    id: "E10", lec: "E", topic: "Fetal & neonatal immunity", priority: "must", difficulty: "hard",
    stem: "A 2-month-old is exclusively breastfed. Serum testing shows IgG against several pathogens, matching the mother's antibody profile, and very little IgA or IgM. Stool contains secretory IgA against a common enteric virus. Which statement best explains these findings?",
    options: [
      "Maternal IgG crossed the placenta through FcRn, and milk IgA, delivered by pIgR transcytosis across the mammary epithelium, protects the gut lumen without being absorbed into the blood",
      "The infant made the IgG after vaccination at birth",
      "Milk IgA is absorbed across the infant's gut and converted into IgG",
      "Maternal IgM crossed the placenta and switched to IgG in the fetus",
      "The IgG came mainly from colostrum absorbed through gut FcεRI"
    ],
    answer: 0,
    explanation: "IgG is the only isotype that crosses the placenta, carried by FcRn on syncytiotrophoblast. The newborn's IgG repertoire therefore mirrors the mother's and stays protective for about 6 months, helped by the infant's own FcRn recycling. Secretory dimeric IgA is the main isotype in milk; pIgR moves it across the mammary epithelium. It coats the infant's GI mucosa and works locally, which explains IgA in stool but not in serum. Colostrum has only a little IgG, and FcεRI binds IgE.",
    ref: "Effector Mechanisms · LO4/LO5 · Fetal and neonatal immunity"
  }
);

Object.assign(FIGS, {
  eDecay: (() => {
    const X = d => 60 + d * 20, Y = v => 200 - Math.log10(Math.max(v, 1)) / 3 * 175;
    const ig = [[0, 800], [4, 700], [10, 580], [21, 400]], im = [[0, 800], [4, 200], [10, 25], [21, 2]];
    const path = a => a.map(([d, v], i) => `${i ? "L" : "M"}${X(d)} ${Y(v).toFixed(1)}`).join(" ");
    const dots = (a, c) => a.map(([d, v]) => `<circle cx="${X(d)}" cy="${Y(v).toFixed(1)}" r="4.5" style="fill:${c}"/>`).join("");
    return `<svg viewBox="0 0 520 250" font-family="inherit">
    <line x1="60" y1="200" x2="500" y2="200" style="stroke:var(--muted);stroke-width:1.5"/><line x1="60" y1="20" x2="60" y2="200" style="stroke:var(--muted);stroke-width:1.5"/>
    ${[1, 10, 100, 1000].map(v => `<text x="54" y="${Y(v) + 4}" text-anchor="end" font-size="11" style="fill:var(--muted)">${v}</text><line x1="60" y1="${Y(v)}" x2="500" y2="${Y(v)}" style="stroke:var(--line);stroke-width:1"/>`).join("")}
    ${[0, 4, 10, 21].map(d => `<text x="${X(d)}" y="216" text-anchor="middle" font-size="11" style="fill:var(--muted)">${d}</text>`).join("")}
    <text x="280" y="240" text-anchor="middle" font-size="12" style="fill:var(--muted)">Days after infusion</text>
    <text x="16" y="110" font-size="12" style="fill:var(--muted)" transform="rotate(-90 16 110)">Titer (log scale)</text>
    <path d="${path(ig)}" style="fill:none;stroke:var(--accent);stroke-width:3"/>${dots(ig, "var(--accent)")}
    <path d="${path(im)}" style="fill:none;stroke:var(--warn);stroke-width:3;stroke-dasharray:6 4"/>${dots(im, "var(--warn)")}
    <text x="${X(21) - 6}" y="${Y(400) - 10}" text-anchor="end" font-size="13" font-weight="700" style="fill:var(--accent)">IgG</text>
    <text x="${X(10) + 8}" y="${Y(25) - 8}" font-size="13" font-weight="700" style="fill:var(--warn)">IgM</text>
  </svg>`;
  })(),
  eFab: (() => {
    const g = (x0, title, vals) => `<text x="${x0 + 105}" y="22" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--ink)">${title}</text>
      <line x1="${x0}" y1="190" x2="${x0 + 210}" y2="190" style="stroke:var(--muted);stroke-width:1.5"/><line x1="${x0}" y1="40" x2="${x0}" y2="190" style="stroke:var(--muted);stroke-width:1.5"/>
      ${[0, 50, 100].map(v => `<text x="${x0 - 5}" y="${190 - v * 1.5 + 4}" text-anchor="end" font-size="10" style="fill:var(--muted)">${v}</text>`).join("")}
      ${vals.map(([l, v, c], i) => `<rect x="${x0 + 15 + i * 65}" y="${190 - v * 1.5}" width="48" height="${v * 1.5}" rx="3" style="fill:${c}"/><text x="${x0 + 39 + i * 65}" y="${184 - v * 1.5}" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--ink)">${v}%</text><text x="${x0 + 39 + i * 65}" y="206" text-anchor="middle" font-size="11" style="fill:var(--muted)">${l}</text>`).join("")}`;
    return `<svg viewBox="0 0 520 220" font-family="inherit">
    ${g(40, "Host cells surviving toxin", [["None", 10, "var(--muted)"], ["IgG", 90, "var(--accent)"], ["Fab", 88, "var(--accent2)"]])}
    ${g(295, "Bacteria phagocytosed", [["None", 5, "var(--muted)"], ["IgG", 70, "var(--accent)"], ["Fab", 6, "var(--accent2)"]])}
  </svg>`;
  })(),
  eAdcc: FTABLE(["Row", "Condition", "Specific lysis (%)"], [
    ["1", "NK + infected targets", "8"],
    ["2", "NK + infected targets + IgG against envelope protein", "62"],
    ["3", "Row 2 + blocking anti-CD16", "10"],
    ["4", "Row 2 + inhibitor of granule release", "9"]
  ]),
  eEos: FTABLE(["Row", "Condition", "Larvae killed (%)"], [
    ["1", "Eosinophils + uncoated larvae", "5"],
    ["2", "Eosinophils + IgE-coated larvae", "40"],
    ["3", "Eosinophils + IgE-coated larvae + IL-5", "78"],
    ["4", "Eosinophils pre-treated with FcεRI blocker + IgE-coated larvae + IL-5", "7"]
  ]),
  eFcr: FTABLE(["Fc receptor", "Affinity for Ig", "Cell distribution", "Function"], [
    ["FcγRI (CD64)", "High; binds IgG1 and IgG3", "Macrophages, neutrophils", "Phagocytosis; activation of phagocytes"],
    ["FcγRIIB (CD32)", "Low", "B cells, DCs, mast cells, neutrophils, macrophages", "Feedback inhibition of B cells; attenuation of inflammation"],
    ["FcγRIIIA (CD16)", "Low", "NK cells", "ADCC"],
    ["FcεRI", "High; binds IgE", "Mast cells, basophils, eosinophils", "Activation (degranulation) of mast cells and basophils"],
    ["FcRn", "Binds IgG at acidic pH", "Placenta, endothelium, phagocytes", "IgG recycling (long half-life); placental transfer"]
  ])
});

/* ---------------------------------------------------------------------
   Batch 2: E11–E20. Same LOs (1–5) from the lecture's objectives slide.
   --------------------------------------------------------------------- */
QUESTIONS.push(
  {
    id: "E11", lec: "E", topic: "Complement: IgM vs IgG", figure: "eComp", priority: "must", difficulty: "hard",
    caption: "Red cells carrying a surface antigen were coated with equal molar amounts of antibody, then fresh serum was added as a source of complement.",
    stem: "Red cells bearing a defined surface antigen are coated with equal molar amounts of an IgM or an IgG specific for that antigen, at two different antigen densities, and fresh serum is added. Results are shown. Which statement best explains the difference between the IgM and IgG results at low antigen density?",
    options: [
      "A single bound pentameric IgM presents several Fc regions at once and can engage C1 on its own, whereas C1 binding needs two IgG Fc regions sitting close together, which requires dense antigen",
      "IgM triggers the alternative pathway while IgG triggers the classical pathway, and the alternative pathway is faster",
      "IgG is incapable of activating complement at any antigen density",
      "C1 binds the Fab region of antibody, so the density of bound antibody is irrelevant",
      "IgM lyses cells directly through pores in its own structure, without complement"
    ],
    answer: 0,
    explanation: "Both isotypes use the classical pathway, which begins when C1 binds the Fc regions of antibody that is already bound to antigen. The difference is geometry. IgM is a pentamer, so one molecule that has engaged antigen displays several Fc regions in the right arrangement for C1, and it works even where antigen is sparse. IgG is monomeric, so C1 can only be engaged when two IgG molecules happen to bind close enough together for their Fc regions to pair, which only happens at high antigen density. That is why IgM, the first isotype secreted and the one present before switching, is such an effective complement activator early in a response. The Fab-only row makes the general point that Fc-dependent functions need the Fc region, and that antigen binding alone achieves nothing downstream. Once activated, the pathway produces membrane attack complexes that lyse, C3b that opsonizes, and fragments that drive inflammation.",
    ref: "Effector Mechanisms · LO2 · Complement activation by antibodies (IgM and IgG)"
  },
  {
    id: "E12", lec: "E", topic: "Three outputs of complement", figure: "eC3", priority: "must", difficulty: "hard",
    caption: "IgG-opsonized bacteria incubated in sera with defined complement defects. Heat inactivation destroys complement activity but leaves antibody intact.",
    stem: "IgG-coated bacteria are incubated in four different sera and three readouts are measured. Results are shown. Which conclusion is best supported?",
    options: [
      "Complement activation yields three separable outputs, so removing C3 costs both opsonization and leukocyte recruitment, while removing only the terminal components costs lysis alone",
      "All complement functions depend on the membrane attack complex, so any defect downstream of C3 abolishes all three readouts",
      "Phagocytic uptake of these bacteria depends entirely on complement and not at all on antibody",
      "Neutrophil recruitment is driven by the membrane attack complex rather than by soluble fragments",
      "Heat inactivation removes the antibody, which is why the heat-inactivated serum behaves like the C3-depleted serum"
    ],
    answer: 0,
    explanation: "The classical pathway splits into three effector arms, and the table dissects them. C3 sits upstream of everything: without it there is no C3b to opsonize and no downstream fragments to recruit leukocytes, so only the Fc receptor arm of phagocytosis survives, which is why uptake falls to moderate rather than to zero. Losing only the terminal components leaves C3b deposition and the inflammatory fragments intact, so opsonization and recruitment are normal and only lysis is lost. Heat inactivation destroys complement proteins but not the IgG already bound to the bacteria, which is exactly why that row matches the C3-depleted row: residual uptake there is antibody acting through Fc receptors. The practical reading is that complement and antibody opsonize in parallel, and that a defect's consequences depend on where in the cascade it sits.",
    ref: "Effector Mechanisms · LO2 · Complement activation: lysis, opsonization and inflammation"
  },
  {
    id: "E13", lec: "E", topic: "FcγRI activates the phagocyte", figure: "ePhag", priority: "must", difficulty: "hard",
    caption: "Macrophages incubated with bacteria under three conditions. In the third condition, bacteria were forced into the cell by an uptake route that does not signal through FcγRI.",
    stem: "Macrophages are given bacteria that are unopsonized, IgG-opsonized, or IgG-opsonized with FcγRI signaling blocked while uptake is driven by an alternative route. Results are shown. Which conclusion best explains the third condition?",
    options: [
      "Engaging FcγRI does two separate jobs: it drives ingestion, and it signals the phagocyte to produce reactive oxygen species, nitric oxide and lysosomal enzymes that destroy what was ingested",
      "Ingestion alone is sufficient for killing, so the third condition must reflect a failure of ingestion",
      "FcγRI is required only for binding, and intracellular killing is a purely mechanical consequence of phagosome–lysosome fusion",
      "Blocking FcγRI prevented the IgG from binding the bacteria in the first place",
      "Reactive oxygen species are made by the bacteria, not the macrophage"
    ],
    answer: 0,
    explanation: "Opsonization is often described as though it only glues the microbe to the phagocyte, but the signal matters as much as the stickiness. Several IgG molecules bound to a microbe project an array of Fc regions, which are gripped by the high-affinity FcγRI (CD64) on macrophages and neutrophils. That engagement extends the membrane around the microbe and ingests it into a phagosome that fuses with lysosomes, and it also triggers a signaling cascade that activates the phagocyte, generating large amounts of reactive oxygen species, nitric oxide and lysosomal enzymes. The third condition separates the two: the bacteria get inside in normal numbers, but without FcγRI signaling the macrophage never switches on its microbicidal machinery, so killing collapses while uptake is preserved. Binding is unaffected by blocking the receptor, since IgG binds the bacterial surface through its Fab regions.",
    ref: "Effector Mechanisms · LO2/LO3 · Opsonization, phagocytosis and activation of phagocytes"
  },
  {
    id: "E14", lec: "E", topic: "Where IgE actually is", priority: "should", difficulty: "hard",
    stem: "A patient with a severe allergy to an insect venom has a total serum IgE that is a tiny fraction of his serum IgG, yet an encounter with the venom produces a violent reaction within minutes, while an equivalent amount of circulating IgG against the same venom produces nothing comparable. Which feature of IgE best explains this?",
    options: [
      "IgE is not mainly a circulating antibody: it is bound through its Fc region to high-affinity FcεRI on mast cells beneath epithelia and around vessels, where even small amounts sit pre-positioned and have a greatly extended half-life",
      "IgE is a pentamer, so each molecule binds many more antigen sites than IgG does",
      "IgE activates complement far more efficiently than IgG, producing rapid lysis",
      "IgE has a much longer serum half-life than IgG, so it accumulates over years",
      "IgE is actively transported across the placenta and epithelia, which concentrates it at exposure sites"
    ],
    answer: 0,
    explanation: "Serum concentration is a poor guide to where an isotype does its work. Free IgE is present at very low levels and has a short half-life of roughly 12 hours, but it is bound very strongly by FcεRI on mast cells located just beneath the skin and mucosa and along blood vessels in connective tissue, and binding to the receptor markedly prolongs its life. The functional pool is therefore cell-bound and sitting exactly where an allergen arrives. When antigen cross-links that bound IgE, the mast cell releases powerful preformed mediators within minutes, which is why the reaction is immediate and out of proportion to the serum level. IgE is monomeric, it is a poor complement activator, and it is not transported across the placenta — IgG is the only isotype that crosses, through FcRn. Dimeric IgA is the one transported across epithelia, through pIgR.",
    ref: "Effector Mechanisms · LO1 · Anatomical distribution of antibodies; IgE on mast cells"
  },
  {
    id: "E15", lec: "E", topic: "Affinity maturation and protection", figure: "eAff", priority: "should", difficulty: "hard",
    caption: "Serum taken after successive immunizations with the same protein toxoid. Antibody concentration was adjusted to be equal across the first three samples so that affinity could be compared on its own.",
    stem: "A protein toxoid is given three times and the serum is tested each time for its ability to neutralize the toxin, with antibody concentration held constant across samples. Results are shown. Which conclusion is best supported?",
    options: [
      "Repeated stimulation with a protein antigen raises the average affinity of the antibody, and higher affinity means more toxin neutralized by the same amount of antibody",
      "The improvement is entirely due to a rising antibody concentration with each immunization",
      "Neutralization depends on the Fc region, so the change must reflect a switch of isotype rather than affinity",
      "Affinity maturation lowers the affinity of the antibody but increases its avidity through polymerization",
      "The last sample shows that diluting antibody tenfold has no effect on neutralization"
    ],
    answer: 0,
    explanation: "Affinity maturation is the progressive increase in antigen-binding affinity that follows repeated stimulation with a protein (thymus-dependent) antigen, driven by somatic hypermutation and selection in the germinal center. The experiment isolates it deliberately: concentration is held constant across the first three samples, so the rising neutralization can only come from the falling Kd. Functionally this is why booster doses matter — higher-affinity antibody binds the toxin's receptor-binding site more tightly and at lower occupancy, so the same mass of antibody protects better. The final row shows that a tenfold dilution of the high-affinity serum still neutralizes more than the undiluted low-affinity serum did, which is the clearest demonstration of what affinity buys you. Neutralization is purely a Fab function, so no Fc change is needed to explain any of it, though switching to IgG independently prolongs the antibody's life in the blood.",
    ref: "Effector Mechanisms · LO1 · Class switching and affinity maturation enhance protective function"
  },
  {
    id: "E16", lec: "E", topic: "ADCC beyond NK cells", priority: "should", difficulty: "hard",
    stem: "Tumor cells coated with a specific IgG are incubated with leukocytes from a healthy donor. When NK cells are depleted from the preparation, killing of the antibody-coated targets falls substantially but does not disappear; the remaining killing is lost only when macrophages, neutrophils and eosinophils are also removed. Which statement best accounts for the residual killing after NK depletion?",
    options: [
      "ADCC is a general property of Fc receptor-bearing effector cells, so macrophages, neutrophils and eosinophils also recognize antibody-coated targets and destroy them, including by antibody-dependent phagocytosis",
      "The residual killing is complement-mediated lysis, since leukocyte preparations contain complement proteins",
      "Only NK cells carry Fc receptors, so the residual killing must be antigen-independent innate killing",
      "The residual killing reflects CD8+ cytotoxic T cells recognizing tumor peptides on MHC class I",
      "Macrophages kill the targets through their T cell receptors after taking up the antibody"
    ],
    answer: 0,
    explanation: "ADCC is usually introduced through NK cells, which carry FcγRIIIA (CD16) and kill antibody-coated targets using perforin and granzymes in the same way a CTL does. But the underlying principle is that an Fc receptor-bearing effector cell borrows the specificity of an antibody even though the effector cell itself has none. Macrophages and resident monocytes, neutrophils and eosinophils all carry Fc receptors and can engage and destroy antibody-coated targets, with macrophages in particular doing so by antibody-dependent phagocytosis. The depletion experiment separates the contributions: NK cells do most of it, and the rest tracks with the other Fc receptor-bearing populations. Complement is not the answer because the readout follows the cells that were removed, not a serum factor. T cell recognition is MHC-restricted and antigen-specific and would not depend on coating the target with antibody, and no leukocyte uses a T cell receptor to read an antibody's specificity.",
    ref: "Effector Mechanisms · LO2/LO3 · ADCC by NK cells, macrophages, neutrophils and eosinophils"
  },
  {
    id: "E17", lec: "E", topic: "What each isotype can and cannot do", priority: "must", difficulty: "hard",
    stem: "A pathogen first attaches to intestinal epithelium, then in some patients breaches the epithelium and disseminates in the blood. A candidate vaccine produces an excellent secretory IgA response in the gut but almost no serum IgG. Which outcome is most likely, and why?",
    options: [
      "Good protection against initial attachment at the mucosa, but poor control once the organism reaches the blood, because IgA neutralizes well but is a weak complement activator and a less effective opsonin than IgG",
      "Good protection at both sites, since IgA performs every effector function IgG performs once it reaches the extracellular fluid",
      "Poor protection at both sites, because IgA cannot bind microbes without complement being present",
      "Good systemic protection but poor mucosal protection, because dimeric IgA is confined to the blood",
      "Good protection at both sites, because secretory IgA is absorbed from the gut lumen into the circulation"
    ],
    answer: 0,
    explanation: "Isotypes are not interchangeable, and matching the isotype to the site and the mechanism is the whole point of class switching. IgA is produced in mucosal lymphoid tissue, transported as a dimer across the epithelium by pIgR, and is very good at neutralization: it binds bacteria, viruses and toxins and blocks their attachment to and uptake by epithelial cells, which is precisely the first step this pathogen takes. What IgA does poorly is the Fc-dependent work — it is a less potent opsonin and a very weak complement activator. IgG is the isotype that opsonizes efficiently for FcγRI on phagocytes, activates complement and triggers ADCC, and it is the dominant isotype in blood and extracellular fluid, so it is what a disseminated phase needs. Secretory IgA acts locally in the lumen and is not absorbed into the circulation, which is also why maternal milk IgA protects the infant's gut surface rather than the infant's bloodstream.",
    ref: "Effector Mechanisms · LO1/LO2 · Different isotypes operate in different places with different effector functions"
  },
  {
    id: "E18", lec: "E", topic: "Fc functions require antigen binding", priority: "must", difficulty: "hard",
    stem: "Healthy serum contains roughly 10 mg/mL of IgG, much of it specific for antigens the person is not currently encountering, and phagocytes carrying high-affinity FcγRI circulate in the same blood. Yet these phagocytes are not continuously activated. Which principle best explains why?",
    options: [
      "Fc-dependent effector functions are triggered only after the antibody has bound antigen, which clusters several Fc regions together; a free antibody engaging one receptor does not deliver an activating signal",
      "Free IgG in serum lacks an Fc region until it is cleaved after binding antigen",
      "FcγRI is expressed only after a phagocyte has already ingested a microbe",
      "Circulating IgG is kept inactive by being permanently bound to FcRn in the blood",
      "Phagocytes are protected because free IgG binds only the inhibitory receptor FcγRIIB"
    ],
    answer: 0,
    explanation: "This is the design principle that makes antibody-mediated effector mechanisms safe. The Fab regions and the Fc region are spatially separate parts of the molecule, and the Fc functions — complement activation, opsonization for Fc receptors, ADCC, mast cell degranulation — are activated only once antigen has been bound. The reason is clustering: binding to a multivalent surface brings many antibody molecules together so that their Fc regions form an array that cross-links several receptors or engages C1, and it is the cross-linking that signals. A single free IgG occupying one receptor does not. Neutralization is the exception that proves the rule, being purely a Fab function that needs no Fc at all. FcγRI is constitutively expressed on macrophages and neutrophils, and FcRn operates inside acidified endosomes, not as a blood-borne muzzle; its job is to rescue IgG from degradation and give it a long half-life.",
    ref: "Effector Mechanisms · LO1/LO2 · Fab and Fc regions; Fc functions activated only after antigen binding"
  },
  {
    id: "E19", lec: "E", topic: "Crossing a barrier needs a receptor", priority: "should", difficulty: "hard",
    stem: "An antibody made in the lamina propria of the gut must reach the intestinal lumen; another made in a lymph node must reach an infected site in the dermis; a third must reach the fetal circulation. Which statement best describes how antibodies get to each of these places?",
    options: [
      "Antibodies reach extracellular tissue sites by entering the blood and diffusing, but crossing an intact epithelial or placental barrier requires a specific receptor-mediated transport system — pIgR for dimeric IgA and FcRn for IgG",
      "All three destinations are reached by simple diffusion, since antibodies are small enough to cross epithelium freely",
      "All three require active transport, because antibodies cannot leave the bloodstream without a receptor",
      "Transport across epithelium is performed by FcγRI, and transport across the placenta by pIgR",
      "Antibodies reach the lumen and the fetus only when the barrier is damaged by inflammation"
    ],
    answer: 0,
    explanation: "Most secreted antibody enters the blood from its site of synthesis and is distributed by diffusion, which is how an antibody made in a lymph node reaches a peripheral site of infection in the extracellular fluid. Epithelial and placental barriers are different: they are continuous sheets of cells, and an antibody can only cross them by being carried through a cell. That is what the two transport receptors do. pIgR sits on the basolateral surface of mucosal epithelium, binds dimeric IgA held together by its J chain, and carries the complex through the cell to the luminal surface by transcytosis, delivering IgA to the gut, the airway and breast milk. FcRn, expressed by the syncytiotrophoblast, binds maternal IgG from the intervillous space and transcytoses it toward the fetal side, which is why IgG is the only isotype that crosses the placenta. Neither process requires the barrier to be damaged, and the receptors are not interchangeable.",
    ref: "Effector Mechanisms · LO1/LO4 · Distribution of antibodies and transport across epithelia and placenta"
  },
  {
    id: "E20", lec: "E", topic: "Early IgM vs later IgG defense", figure: "eOps", priority: "must", difficulty: "hard",
    caption: "Primary response to an encapsulated bacterium: serum antibody of each isotype and the bacterial burden in blood.",
    stem: "A previously unexposed person is infected with an encapsulated bacterium whose capsule resists direct engulfment by phagocytes. Serum antibody and bacterial burden over the first three weeks are shown. Which statement best explains how the organism is cleared at each stage?",
    options: [
      "Early clearance depends on IgM, which activates complement efficiently so that C3b coats the capsule for complement receptors on phagocytes; later clearance adds switched IgG, which opsonizes directly for FcγRI",
      "Early clearance depends on IgG opsonizing through FcγRI, and the later IgM serves mainly to neutralize toxins",
      "The capsule is engulfed efficiently by phagocytes without any opsonin, so antibody plays no part in clearance",
      "Clearance throughout is due to ADCC by NK cells recognizing bacterial antigens through CD16",
      "Clearance is entirely due to the membrane attack complex, with opsonization contributing nothing"
    ],
    answer: 0,
    explanation: "Polysaccharide capsules are large structures outside the bacterial membrane that resist direct recognition and engulfment, so an encapsulated organism is only cleared efficiently once it is coated. The kinetics show how that coating changes. IgM appears first, because every naive B cell starts with surface IgM and capsular polysaccharides are thymus-independent antigens that drive an early IgM response; IgM is a very effective complement activator, so the dominant early mechanism is complement deposition, with C3b engaging complement receptors on phagocytes to trigger uptake. Switched IgG appears later and adds a second opsonic route, binding the microbe and engaging the high-affinity FcγRI on neutrophils and macrophages, which both ingests the organism and activates the phagocyte's killing machinery. Note the direction of the relationship between the curves: burden falls as the antibody rises, not before. ADCC targets antibody-coated host cells, not free bacteria, and the membrane attack complex is a minor contributor against most bacteria compared with opsonization.",
    ref: "Effector Mechanisms · LO2 · Opsonization of encapsulated bacteria; early complement-mediated and later Fc receptor-mediated uptake"
  }
);

Object.assign(FIGS, {
  eComp: FTABLE(["Antibody bound (equal molar)", "Antigen density", "C1 bound", "Cells lysed (%)"], [
    ["IgM", "Low (sparse)", "Yes", "78"],
    ["IgG", "Low (sparse)", "No", "4"],
    ["IgG", "High (dense)", "Yes", "71"],
    ["IgM Fab fragments only", "High (dense)", "No", "2"]
  ]),
  eC3: FTABLE(["Serum (all with specific IgG)", "Bacterial lysis", "Uptake by phagocytes", "Neutrophil recruitment"], [
    ["Normal serum", "Yes", "High", "High"],
    ["C3-depleted serum", "No", "Moderate", "Low"],
    ["Serum lacking only terminal (MAC) components", "No", "High", "High"],
    ["Heat-inactivated serum", "No", "Moderate", "Low"]
  ]),
  ePhag: FTABLE(["Condition", "Bacteria ingested per macrophage", "Intracellular killing (%)", "Reactive oxygen species"], [
    ["Unopsonized bacteria", "1.2", "15", "Low"],
    ["IgG-opsonized bacteria", "9.6", "88", "High"],
    ["IgG-opsonized, FcγRI signaling blocked, uptake forced", "9.1", "22", "Low"]
  ]),
  eAff: FTABLE(["Serum sample", "Mean affinity (Kd)", "Antibody concentration", "Toxin neutralized (%)"], [
    ["10 days after 1st immunization", "10⁻⁷ M", "100 µg/mL", "22"],
    ["10 days after 2nd immunization", "10⁻⁹ M", "100 µg/mL", "76"],
    ["10 days after 3rd immunization", "10⁻¹⁰ M", "100 µg/mL", "95"],
    ["Same 3rd sample, diluted tenfold", "10⁻¹⁰ M", "10 µg/mL", "81"]
  ]),
  eOps: (() => {
    const X = d => 62 + d * 20.5, Y = v => 196 - v * 1.62;
    const curve = f => Array.from({ length: 64 }, (_, i) => i / 3).map((d, i) => `${i ? "L" : "M"}${X(d).toFixed(1)} ${Y(f(d)).toFixed(1)}`).join(" ");
    const igm = d => d < 3 ? 0 : 92 * Math.exp(-Math.pow((d - 8) / 4.2, 2));
    const igg = d => d < 6 ? 0 : Math.min(100, (d - 6) * 7.4);
    const bact = d => d < 2 ? 30 + d * 26 : Math.max(3, 82 * Math.exp(-(d - 2) / 3.4));
    return `<svg viewBox="0 0 580 262" font-family="inherit">
    <line x1="62" y1="196" x2="540" y2="196" style="stroke:var(--muted);stroke-width:1.5"/><line x1="62" y1="20" x2="62" y2="196" style="stroke:var(--muted);stroke-width:1.5"/>
    ${[0, 5, 10, 15, 20].map(d => `<text x="${X(d)}" y="212" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">${d}</text><line x1="${X(d)}" y1="20" x2="${X(d)}" y2="196" style="stroke:var(--line);stroke-width:1"/>`).join("")}
    <text x="300" y="230" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Days after infection</text>
    <text x="20" y="108" text-anchor="middle" font-size="11.5" style="fill:var(--muted)" transform="rotate(-90 20 108)">Relative level</text>
    <path d="${curve(bact)}" style="fill:none;stroke:var(--bad);stroke-width:2.5;stroke-dasharray:5 4"/>
    <path d="${curve(igm)}" style="fill:none;stroke:var(--accent);stroke-width:3"/>
    <path d="${curve(igg)}" style="fill:none;stroke:var(--e);stroke-width:3"/>
    ${[["Serum IgM", "var(--accent)", ""], ["Serum IgG", "var(--e)", ""], ["Bacteria in blood", "var(--bad)", "5 4"]].map(([t, c, da], i) => `<line x1="${[70, 210, 360][i]}" y1="252" x2="${[70, 210, 360][i] + 22}" y2="252" style="stroke:${c};stroke-width:3${da ? `;stroke-dasharray:${da}` : ""}"/><text x="${[70, 210, 360][i] + 27}" y="256" font-size="11" style="fill:var(--ink)">${t}</text>`).join("")}
  </svg>`;
  })()
});
