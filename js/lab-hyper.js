/* Hypersensitivity Lab: reaction builder, type I kinetics, type II antibody effects */
const HyperLab = (() => {
  const $ = id => document.getElementById(id);
  const toggle = (key, label, sub, on) => `<div class="tg ${on ? "on" : ""}" data-k="${key}"><div>${label}${sub ? `<small>${sub}</small>` : ""}</div><span class="sw"></span></div>`;
  const wireToggles = (root, st, cb) => root.querySelectorAll(".tg").forEach(t => t.addEventListener("click", () => { st[t.dataset.k] = !st[t.dataset.k]; t.classList.toggle("on", st[t.dataset.k]); cb(); }));
  const seg = (id, opts, cur) => `<div class="seg" id="${id}">${opts.map(([v, l]) => `<button data-v="${v}" class="${v === cur ? "on" : ""}">${l}</button>`).join("")}</div>`;
  const wireSeg = (root, id, st, key, cb) => root.querySelectorAll(`#${id} button`).forEach(b => b.addEventListener("click", () => {
    st[key] = b.dataset.v; root.querySelectorAll(`#${id} button`).forEach(x => x.classList.toggle("on", x === b)); cb();
  }));

  /* ---------------- 1. Reaction builder ---------------- */
  const REACTANTS = [["ige", "IgE"], ["ab", "IgG or IgM"], ["t", "T cells"]];
  const ANTIGENS = [["env", "Environmental allergen"], ["fixed", "Fixed on a cell or matrix"], ["sol", "Soluble, circulating"], ["tis", "Presented in a tissue"]];
  const COMBO = {
    "ige|env": {
      type: "Type I", cls: "h", time: "Minutes (immediate); late phase at 2–24 h",
      cells: "Mast cells, basophils, eosinophils",
      mech: "Allergen cross-links IgE already bound to FcεRI on mast cells. Preformed granule contents (vasoactive amines such as histamine, proteases) are released at once, followed by newly synthesized lipid mediators and then cytokines.",
      dist: "Local or systemic, depending on route and dose of allergen",
      eg: "Allergic rhinitis, acute asthma, food allergy, anaphylaxis"
    },
    "ab|fixed": {
      type: "Type II", cls: "h", time: "Hours to days",
      cells: "Complement, phagocytes (Fc and C3b receptors), NK cells",
      mech: "IgG or IgM binds an antigen fixed on a cell surface or in extracellular matrix. The cell is lysed by complement, opsonized and phagocytosed, or killed by ADCC — or, without any cytotoxicity, the antibody alters the function of a receptor it binds.",
      dist: "Confined to the tissue that expresses the antigen",
      eg: "Autoimmune hemolytic anemia, hemolytic disease of the newborn, Graves' disease, myasthenia gravis, pernicious anemia"
    },
    "ab|sol": {
      type: "Type III", cls: "h", time: "About a week after a new antigen; hours on re-exposure",
      cells: "Complement, then neutrophils",
      mech: "IgG or IgM binds soluble antigen to form immune complexes that deposit in small vessels, glomeruli, joints and skin. Complement is activated there (serum C3 falls), C5a and C3a recruit neutrophils, and the enzymes they release damage the tissue.",
      dist: "Systemic — wherever complexes settle",
      eg: "Acute serum sickness, systemic lupus erythematosus"
    },
    "t|tis": {
      type: "Type IV", cls: "h", time: "24–72 hours (delayed)",
      cells: "CD4+ Th1 and Th17 cells, CD8+ CTLs, macrophages (M1)",
      mech: "T cells are both the immune reactant and the effector. CD4+ cells recognize antigen presented in the tissue and release cytokines such as IFN-γ that classically activate macrophages; CD8+ CTLs kill target cells directly. Persistent antigen gives granulomas.",
      dist: "Confined to the tissue where the antigen is presented",
      eg: "Contact dermatitis, celiac disease, type 1A diabetes"
    }
  };
  const MISMATCH = {
    "ige|fixed": "IgE is not the reactant for antigens fixed on cells. IgE's whole effector apparatus is FcεRI on mast cells; antibody against a fixed cell-surface antigen works through complement, phagocyte Fc receptors and ADCC, which is a <b>type II</b> reaction mediated by IgG or IgM.",
    "ige|sol": "IgE against a soluble antigen does not form the pathogenic immune complexes that define <b>type III</b>. Complex-mediated disease needs IgG or IgM, which activate complement efficiently and engage Fc receptors on neutrophils.",
    "ige|tis": "A reaction to antigen presented in a tissue, developing over 24–72 h, is T cell-mediated (<b>type IV</b>). IgE acts within minutes through mast cells, not through antigen presentation.",
    "ab|env": "An environmental allergen provoking an immediate reaction implies IgE (<b>type I</b>). IgG against an inhaled or ingested protein is common and usually harmless; it causes disease only if it forms immune complexes (type III) or binds a fixed tissue antigen (type II).",
    "ab|tis": "Antibody can reach a tissue, but the defining feature of a reaction to antigen <i>presented</i> in a tissue, peaking at 24–72 h with a lymphocyte infiltrate, is that T cells are the reactant (<b>type IV</b>).",
    "t|env": "T cells do respond to allergens — Th2 and Tfh cells drive the IgE switch during sensitization — but they are not the effector here. The reaction itself is delivered by IgE on mast cells (<b>type I</b>).",
    "t|fixed": "T cells recognize peptides presented on MHC, not intact antigens fixed on a cell surface. Antibody against a fixed antigen is <b>type II</b>; a T cell attacking a tissue is type IV and recognizes processed peptide.",
    "t|sol": "Soluble antigen plus antibody gives immune complexes (<b>type III</b>). T cells never recognize free soluble antigen — it must be processed and presented on MHC."
  };
  function builder() {
    const root = $("m-h-build");
    const st = { r: "ige", a: "env" };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Build a reaction</h3>
        <div class="note" style="margin-bottom:4px">Immune reactant — what triggers the response?</div>${seg("hrSeg", REACTANTS, "ige")}
        <div class="note" style="margin:12px 0 4px">Antigen — what is it and where is it?</div>${seg("haSeg", ANTIGENS, "env")}
        <p class="note" style="margin-top:12px">These are the only two questions you need to classify any reaction. Try every pairing: four of them are the Gell and Coombs types, and the other eight explain themselves.</p></div>
      <div class="card"><h3>Result</h3><div id="hbOut"></div></div></div>`;
    const draw = () => {
      const key = st.r + "|" + st.a, hit = COMBO[key];
      if (hit) {
        $("hbOut").innerHTML = `<div class="outcome"><div class="verdict yes">${hit.type} hypersensitivity</div></div>
          <p style="margin:10px 0">${hit.mech}</p>
          <div class="facts">
            <div class="fact"><b>${hit.time}</b>Timing</div>
            <div class="fact"><b>${hit.cells}</b>Effector cells</div>
            <div class="fact"><b>${hit.dist}</b>Distribution</div>
          </div>
          <div class="callout" style="margin-top:12px"><b>Examples:</b> ${hit.eg}</div>`;
      } else {
        $("hbOut").innerHTML = `<div class="outcome"><div class="verdict no">Not a standard pairing</div></div>
          <div class="callout warn" style="margin-top:10px">${MISMATCH[key]}</div>`;
      }
    };
    wireSeg(root, "hrSeg", st, "r", draw); wireSeg(root, "haSeg", st, "a", draw); draw();
  }

  /* ---------------- 2. Type I: sensitization and mediators ---------------- */
  function typeOne() {
    const root = $("m-h-one");
    const st = { sens: true, il4: false, fcer: false, h1: false, lt: false, tx: false };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(280px,1fr) 2fr">
      <div class="card"><h3>Set up the patient</h3><div class="toggles">
        ${toggle("sens", "Prior sensitizing exposure", "Without it there is no allergen-specific IgE", true)}
        ${toggle("il4", "Block IL-4 / IL-13 during sensitization", "Th2 and Tfh help for the IgE switch", false)}
        ${toggle("fcer", "Block IgE binding to FcεRI", "Mast cells cannot be armed", false)}
        ${toggle("h1", "Block histamine receptors", "Antagonize a preformed mediator", false)}
        ${toggle("lt", "Block leukotriene synthesis", "Newly made lipid mediators", false)}
        ${toggle("tx", "Block new gene transcription in mast cells", "No cytokine synthesis", false)}
      </div></div>
      <div class="card"><h3>Challenge with allergen</h3><div class="stage" id="hkStage"></div><div class="outcome" id="hkOut"></div></div></div>`;
    const draw = () => {
      const armed = st.sens && !st.il4 && !st.fcer;
      let imm = armed ? 1 - (st.h1 ? 0.5 : 0) - (st.lt ? 0.2 : 0) : 0;
      let late = armed ? (st.tx ? 0.08 : 1) - (st.lt ? 0.1 : 0) : 0;
      imm = Math.max(0, imm); late = Math.max(0, late);
      const X = h => 60 + h * 19.2, Y = v => 170 - v * 125;
      const f = h => imm * Math.exp(-Math.pow((h - 0.45) / 0.55, 2)) + late * Math.exp(-Math.pow((h - 8.5) / 3.6, 2));
      const d = Array.from({ length: 97 }, (_, i) => i / 4).map((h, i) => `${i ? "L" : "M"}${X(h).toFixed(1)} ${Y(f(h)).toFixed(1)}`).join(" ");
      $("hkStage").innerHTML = `<svg viewBox="0 0 540 212" font-family="inherit">
        <line x1="60" y1="170" x2="520" y2="170" style="stroke:var(--muted);stroke-width:1.5"/><line x1="60" y1="18" x2="60" y2="170" style="stroke:var(--muted);stroke-width:1.5"/>
        ${[0, 4, 8, 12, 16, 20, 24].map(h => `<text x="${X(h)}" y="186" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">${h}</text><line x1="${X(h)}" y1="18" x2="${X(h)}" y2="170" style="stroke:var(--line);stroke-width:1"/>`).join("")}
        <text x="290" y="204" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Hours after allergen challenge</text>
        <text x="18" y="94" text-anchor="middle" font-size="11.5" style="fill:var(--muted)" transform="rotate(-90 18 94)">Reaction</text>
        <path d="${d}" style="fill:none;stroke:var(--h);stroke-width:3"/>
        ${imm > 0.03 ? `<text x="${X(0.45)}" y="${Y(imm) - 8}" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--ink)">immediate</text>` : ""}
        ${late > 0.03 ? `<text x="${X(8.5)}" y="${Y(late) - 8}" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--ink)">late phase</text>` : ""}
        ${imm < 0.03 && late < 0.03 ? `<text x="290" y="96" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--ok)">no reaction</text>` : ""}
      </svg>`;
      let v, note;
      if (!st.sens) { v = ["no", "No reaction — the patient is not sensitized"]; note = "This is a first exposure. Allergen is taken up by dendritic cells, Th2 and IL-4-producing Tfh cells are primed and B cells switch to IgE, but all of that takes days to weeks and produces no symptoms. A reaction needs IgE already sitting on mast cells."; }
      else if (st.il4) { v = ["no", "No reaction — the IgE switch never happened"]; note = "IL-4 and IL-13 are the cytokines that drive B cells to switch to IgE. Block them during sensitization and the mast cells are never armed. The mast cells and their histamine are still there, just with nothing allergen-specific bound to them."; }
      else if (st.fcer) { v = ["no", "No reaction — mast cells are not armed"]; note = "IgE is made, but it cannot occupy FcεRI. Unbound IgE has a half-life of only about 12 hours and is present at very low levels, so without receptor binding there is nothing for allergen to cross-link — and no receptor-stabilized reservoir of IgE either."; }
      else if (st.tx && (st.h1 || st.lt)) { v = ["mid", "Both phases blunted"]; note = "Mediators come in three waves and you have interrupted more than one. Preformed amines and proteases drive the immediate reaction, newly synthesized lipid mediators add to it, and cytokines made from new transcription recruit the eosinophil-rich infiltrate hours later."; }
      else if (st.tx) { v = ["mid", "Immediate reaction intact, late phase lost"]; note = "Degranulation needs no new gene expression, so the immediate reaction is untouched. The late phase does: IL-5, TNF and other cytokines must be transcribed before they can recruit and activate the eosinophils, neutrophils and T cells that make up the infiltrate at 2–24 hours."; }
      else if (st.h1 || st.lt) { v = ["mid", "Immediate reaction reduced, late phase largely intact"]; note = "Antagonizing one mediator class only removes that class's contribution. Histamine drives vascular leakage and edema; leukotrienes and prostaglandins add smooth muscle contraction. Neither touches the cytokines that produce the late-phase infiltrate."; }
      else { v = ["yes", "Full biphasic reaction"]; note = "Allergen cross-links IgE on FcεRI, and the mast cell degranulates within minutes: vasoactive amines cause vascular leakage and edema, lipid mediators contract smooth muscle. Hours later, cytokines such as IL-5 and TNF bring in eosinophils, neutrophils and T cells for the late-phase reaction."; }
      $("hkOut").innerHTML = `<div class="verdict ${v[0] === "mid" ? "" : v[0]}" style="${v[0] === "mid" ? "color:var(--warn)" : ""}">${v[1]}</div><div class="callout" style="margin-top:8px">${note}</div>`;
    };
    wireToggles(root, st, draw); draw();
  }

  /* ---------------- 3. Type II: what the antibody does ---------------- */
  const TARGETS = [["rbc", "Red cell surface antigen"], ["tsh", "TSH receptor"], ["ach", "Acetylcholine receptor"], ["if", "Intrinsic factor (secreted)"]];
  const ACTIONS = [["opso", "Opsonize / fix complement"], ["stim", "Bind and activate"], ["block", "Bind and block"]];
  const T2 = {
    "rbc|opso": ["yes", "Antibody-mediated cell destruction", "IgG and complement-derived C3b coat the red cell. Splenic macrophages engulf it through Fc receptors and C3b receptors, and complement can lyse it directly. The result is anemia with splenomegaly and a high reticulocyte count — autoimmune hemolytic anemia, or hemolytic disease of the newborn when the antibody is maternal IgG that crossed the placenta through FcRn."],
    "rbc|stim": ["mid", "No meaningful effect", "A red cell surface antigen is a structural molecule, not a signaling receptor, so there is nothing to activate. This is why the cytotoxic arm of type II — complement, opsonization and ADCC — is what matters for blood cells."],
    "rbc|block": ["mid", "No meaningful effect", "Blocking a structural surface antigen achieves nothing on its own. Destruction of red cells requires the effector arms: complement lysis, opsonization and phagocytosis, or ADCC."],
    "tsh|stim": ["no", "Hyperthyroidism (Graves' disease)", "The antibody is an agonist: it activates the TSH receptor even with no TSH present, so the thyroid makes hormone autonomously and the gland enlarges. Excess hormone suppresses pituitary TSH by negative feedback, which is why serum TSH is low while the patient is thyrotoxic. Nothing is destroyed — this is the non-cytotoxic arm of type II."],
    "tsh|block": ["no", "Hypothyroidism", "The antibody occupies the receptor without activating it and prevents TSH from binding. Hormone output falls, and the pituitary responds by driving TSH up. Same reaction type, same receptor, opposite clinical picture — the serum TSH is the quickest way to tell the two apart."],
    "tsh|opso": ["no", "Thyroid cell destruction", "If the antibody instead fixes complement and opsonizes the follicular cells, they are destroyed rather than driven, giving a destructive thyroiditis with lymphocytic infiltration and eventual hypothyroidism."],
    "ach|block": ["no", "Myasthenia gravis", "Antibody blocks acetylcholine's binding site on the postsynaptic receptor, so the ligand-gated sodium channels do not open, sodium does not enter, and the end plate often fails to reach threshold. Weakness is fatigable — worse with repeated use and later in the day — and affects ocular, bulbar and proximal limb muscles, with normal sensation and reflexes."],
    "ach|stim": ["mid", "Not the mechanism of disease here", "An agonist antibody at this receptor would depolarize rather than silence the end plate. The disease caused by anti-acetylcholine-receptor antibody is one of blockade, which is what produces fatigable weakness."],
    "ach|opso": ["no", "Receptor loss at the end plate", "Complement fixation and receptor internalization reduce the number of available receptors, which compounds the blockade. Both routes converge on the same problem: too few working receptors to reach threshold."],
    "if|block": ["no", "Pernicious anemia", "Antibody binds intrinsic factor and prevents it from mediating vitamin B12 absorption. The deficiency impairs hematopoiesis and causes a macrocytic anemia. Note that no cell is attacked: red cell survival is normal and there is no antibody on the red cell surface. This is interference with the function of a secreted protein."],
    "if|stim": ["mid", "No effect", "Intrinsic factor is a secreted binding protein, not a signaling receptor, so there is nothing for an agonist antibody to switch on."],
    "if|opso": ["mid", "Clearance of the protein", "Opsonizing a soluble protein promotes its clearance rather than destroying a cell. Note that antibody binding a soluble antigen in quantity is how type III immune complexes form — the boundary between types II and III is whether the antigen is fixed or soluble."]
  };
  function typeTwo() {
    const root = $("m-h-two");
    const st = { t: "rbc", a: "opso" };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Pick a target and an antibody</h3>
        <div class="note" style="margin-bottom:4px">Antigen the antibody binds</div>${seg("h2tSeg", TARGETS, "rbc")}
        <div class="note" style="margin:12px 0 4px">What the antibody does once bound</div>${seg("h2aSeg", ACTIONS, "opso")}
        <p class="note" style="margin-top:12px">Type II reactions split into a cytotoxic arm (complement, opsonization, ADCC) and a non-cytotoxic arm, where the antibody changes what a receptor or protein does without killing anything.</p></div>
      <div class="card"><h3>Consequence</h3><div id="h2Out"></div></div></div>`;
    const draw = () => {
      const r = T2[st.t + "|" + st.a];
      $("h2Out").innerHTML = `<div class="outcome"><div class="verdict ${r[0] === "mid" ? "" : r[0]}" style="${r[0] === "mid" ? "color:var(--warn)" : ""}">${r[1]}</div></div><p style="margin-top:10px">${r[2]}</p>`;
    };
    wireSeg(root, "h2tSeg", st, "t", draw); wireSeg(root, "h2aSeg", st, "a", draw); draw();
  }

  return { init() { if (!$("m-h-build")) return; builder(); typeOne(); typeTwo(); } };
})();
