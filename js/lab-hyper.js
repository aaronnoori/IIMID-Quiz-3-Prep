/* Hypersensitivity Lab: reaction builder, type I kinetics, type II antibody effects */
const HyperLab = (() => {
  const $ = id => document.getElementById(id);
  const toggle = (key, label, sub, on) => `<div class="tg ${on ? "on" : ""}" data-k="${key}"><div>${label}${sub ? `<small>${sub}</small>` : ""}</div><span class="sw"></span></div>`;
  const wireToggles = (root, st, cb) => root.querySelectorAll(".tg").forEach(t => t.addEventListener("click", () => { st[t.dataset.k] = !st[t.dataset.k]; t.classList.toggle("on", st[t.dataset.k]); cb(); }));
  const seg = (id, opts, cur) => `<div class="seg" id="${id}">${opts.map(([v, l]) => `<button data-v="${v}" class="${v === cur ? "on" : ""}">${l}</button>`).join("")}</div>`;
  const wireSeg = (root, id, st, key, cb) => root.querySelectorAll(`#${id} button`).forEach(b => b.addEventListener("click", () => {
    st[key] = b.dataset.v; root.querySelectorAll(`#${id} button`).forEach(x => x.classList.toggle("on", x === b)); cb();
  }));
  const bars = cols => `<div class="bars">${cols.map(([l, v, c]) => `<div class="col"><div class="bar" style="height:${Math.max(2, v)}%;background:${c}"></div><div class="lbl">${l}</div></div>`).join("")}</div>`;

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


  /* ---------------- 4. Type III: immune complexes over time ---------------- */
  function typeThree() {
    const root = $("m-h-three");
    const DEF = { day: 10 };
    const st = { day: DEF.day, comp: true, neut: true };
    // acute serum sickness after a single large dose of a foreign protein
    const ag = d => d < 6 ? 100 - d * 3 : Math.max(2, 82 * Math.exp(-(d - 6) / 2.2));
    const ab = d => d < 6 ? 0 : d < 13 ? Math.max(0, (d - 6) * 3) : Math.min(100, 21 + (d - 13) * 11);
    const ic = d => 90 * Math.exp(-Math.pow((d - 10) / 2.4, 2));
    const c3 = d => st.comp ? 85 - 45 * Math.exp(-Math.pow((d - 10.5) / 2.6, 2)) : 85;
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(280px,1fr) 2fr">
      <div class="card"><h3>Acute serum sickness</h3>
        <p class="note">A single large dose of a foreign protein on day 0. Scrub through the response.</p>
        <label class="note" style="display:block;margin-top:14px">Day: <b id="h3Val"></b><input type="range" id="h3Day" min="0" max="21" step="1" value="${DEF.day}" style="width:100%"></label>
        <button class="btn" id="h3Reset" style="width:100%;justify-content:center;margin-top:10px">↺ Back to the peak (day ${DEF.day})</button>
        <div class="toggles" style="margin-top:14px">
          ${toggle("comp", "Complement available", "C3 and the fragments that recruit leukocytes", true)}
          ${toggle("neut", "Neutrophils available", "The cells that release the damaging enzymes", true)}
        </div></div>
      <div class="card"><div class="stage" id="h3Svg"></div><div class="facts" id="h3Facts"></div><div class="outcome" id="h3Out"></div></div></div>`;
    const draw = () => {
      const d = st.day;
      $("h3Val").textContent = d;
      const X = v => 56 + v * 22, Y = v => 186 - v * 1.62;
      const curve = f => Array.from({ length: 85 }, (_, i) => i / 4).map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(f(x)).toFixed(1)}`).join(" ");
      const injury = ic(d) * (st.comp ? 1 : 0.3) * (st.neut ? 1 : 0.15);
      $("h3Svg").innerHTML = `<svg viewBox="0 0 560 250" font-family="inherit">
        <rect x="${X(8)}" y="22" width="${X(14) - X(8)}" height="164" style="fill:color-mix(in srgb,var(--h) 12%,transparent)"/>
        <text x="${(X(8) + X(14)) / 2}" y="34" text-anchor="middle" font-size="10.5" style="fill:var(--h)">complexes deposit</text>
        <line x1="56" y1="186" x2="530" y2="186" style="stroke:var(--muted);stroke-width:1.5"/><line x1="56" y1="20" x2="56" y2="186" style="stroke:var(--muted);stroke-width:1.5"/>
        ${[0, 5, 10, 15, 20].map(v => `<text x="${X(v)}" y="202" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">${v}</text>`).join("")}
        <text x="293" y="218" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Days after the injection</text>
        <path d="${curve(ag)}" style="fill:none;stroke:var(--warn);stroke-width:2.5"/>
        <path d="${curve(ab)}" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>
        <path d="${curve(ic)}" style="fill:none;stroke:var(--bad);stroke-width:3"/>
        <path d="${curve(c3)}" style="fill:none;stroke:${st.comp ? "var(--ok)" : "var(--line)"};stroke-width:2.5;stroke-dasharray:3 4"/>
        <line x1="${X(d)}" y1="20" x2="${X(d)}" y2="186" style="stroke:var(--ink);stroke-width:2"/>
        <circle cx="${X(d)}" cy="${Y(ic(d))}" r="5" style="fill:var(--bad);stroke:var(--panel);stroke-width:2"/>
        <text x="${X(d)}" y="16" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--ink)">day ${d}</text>
        ${[["Foreign protein", "var(--warn)", ""], ["Free antibody", "var(--accent)", ""], ["Immune complexes", "var(--bad)", ""], ["Serum C3", st.comp ? "var(--ok)" : "var(--line)", "3 4"]].map(([t, c, da], i) => `<line x1="${[56, 180, 310, 455][i]}" y1="240" x2="${[56, 180, 310, 455][i] + 20}" y2="240" style="stroke:${c};stroke-width:3${da ? `;stroke-dasharray:${da}` : ""}"/><text x="${[56, 180, 310, 455][i] + 25}" y="244" font-size="10.5" style="fill:var(--ink)">${t}</text>`).join("")}
      </svg>`;
      const lvl = v => v > 60 ? "High" : v > 25 ? "Moderate" : v > 8 ? "Low" : "Negligible";
      const tone = v => v > 60 ? "no" : v > 25 ? "mid" : "yes";
      $("h3Facts").innerHTML = [
        ["Immune complexes", lvl(ic(d)), tone(ic(d))],
        ["Serum C3", st.comp ? (c3(d) < 55 ? "Consumed (low)" : "Normal") : "Not measurable", st.comp ? (c3(d) < 55 ? "no" : "yes") : "mid"],
        ["Tissue injury", lvl(injury), tone(injury)]
      ].map(([k, v, c]) => `<div class="fact">${k}<b class="${c}">${v}</b></div>`).join("");
      let v, note;
      if (d < 6) { v = ["yes", "No disease yet — antibody has not been made"]; note = "The foreign protein is circulating, but the patient has had no previous exposure, so a switched IgG response against it takes about a week to develop. There is no antibody yet, therefore no complexes and nothing to deposit. This latency is the single most useful clue that separates type III from a type I reaction, which would have begun within minutes of the injection."; }
      else if (d < 8) { v = ["mid", "Antibody appearing, complexes beginning to form"]; note = "Antibody is now being made and immediately meets the still-abundant foreign protein. Complexes are forming but have not yet accumulated enough to cause symptoms. Note that free antibody stays near zero through this period — everything made is consumed by the antigen still in the circulation."; }
      else if (ic(d) > 25) {
        if (!st.comp && !st.neut) { v = ["yes", "Complexes deposit, but almost no injury"]; note = "The complexes form and deposit exactly as before, so this is not a failure of the immune complex step. With neither complement nor neutrophils, the chain that converts a deposit into tissue damage is broken at both links, and the vessels, glomeruli and joints are spared. Complexes on their own do remarkably little."; }
        else if (!st.comp) { v = ["mid", "Complexes deposit, injury much reduced"]; note = "Without complement there are no C5a and C3a fragments to recruit leukocytes to the deposits, so far fewer neutrophils arrive and injury falls sharply. Fc receptors on leukocytes still contribute, which is why some damage remains. Serum C3 obviously cannot be followed as a marker here — in a real patient a falling C3 is the sign that complement is being consumed at the deposits."; }
        else if (!st.neut) { v = ["mid", "Complement consumed, but little injury"]; note = "This is the key dissociation. Complexes deposit and activate complement normally — serum C3 still falls — but with no neutrophils to answer the chemotactic signal, almost no tissue damage occurs. It is the enzymes released by recruited neutrophils, not the complexes or the complement themselves, that injure the vessel wall."; }
        else { v = ["no", "Serum sickness — fever, rash, arthritis, nephritis"]; note = "Complexes are at their peak and depositing in small vessels, glomeruli, joints and skin. There they activate complement, which is why serum C3 falls as it is consumed, and C5a and C3a recruit neutrophils whose released enzymes damage the tissue. Because the antigen was soluble and circulating, the complexes travel and the disease is systemic — the contrast with type II, where antibody binds a fixed antigen and injury stays in one tissue."; }
      }
      else if (d < 16) { v = ["mid", "Resolving — the antigen is being cleared"]; note = "Forming complexes also clears the foreign protein, so the antigen is disappearing and complex levels are falling with it. Serum C3 recovers. This is why acute serum sickness is self-limited: the disease consumes its own trigger. Free antibody now begins to accumulate, because there is less and less antigen left to bind it."; }
      else { v = ["yes", "Resolved, with antibody left over"]; note = "The foreign protein is gone, so no new complexes form and the deposits are cleared. Serum C3 is back to normal. The antibody response persists, which matters clinically: a second exposure to the same foreign protein meets a pre-existing antibody population and can produce complexes within hours rather than a week."; }
      $("h3Out").innerHTML = `<div class="verdict ${v[0] === "mid" ? "" : v[0]}" style="${v[0] === "mid" ? "color:var(--warn)" : ""}">${v[1]}</div><div class="callout" style="margin-top:8px">${note}</div>`;
    };
    $("h3Day").addEventListener("input", e => { st.day = +e.target.value; draw(); });
    $("h3Reset").addEventListener("click", () => { st.day = DEF.day; $("h3Day").value = DEF.day; draw(); });
    wireToggles(root, st, draw); draw();
  }

  /* ---------------- 5. Type IV: T cells as reactant and effector ---------------- */
  const T4 = {
    hapten: {
      label: "Contact hapten on skin", persists: false, source: "Avoidable — stop contact",
      disease: "Allergic contact dermatitis",
      body: "A small reactive chemical modifies host proteins, cutaneous dendritic cells present the modified peptides, and primed T cells are recruited back into the skin on re-exposure. CD4+ Th1 and Th17 cells supply the cytokines, and CD8+ CTLs kill keratinocytes directly, producing sharply demarcated plaques confined to the areas of contact.",
      arms: { cd4: "Cytokines from CD4+ cells drive the inflammation and recruit the infiltrate", cd8: "CD8+ CTLs kill keratinocytes, producing the epidermal damage", mac: "Activated macrophages amplify the local inflammation" }
    },
    gluten: {
      label: "Dietary peptide in gut", persists: false, source: "Avoidable — remove from diet",
      disease: "Celiac disease",
      body: "CD4+ T cells respond to gluten-derived peptides presented in the mucosa and release cytokines, while intraepithelial cytotoxic lymphocytes kill enterocytes. Losing enterocytes faster than they can be replaced gives villous atrophy with crypt hyperplasia, and the lost absorptive surface explains the diarrhea and iron deficiency. Removing the antigen from the diet reverses it.",
      arms: { cd4: "CD4+ cells recognizing gluten peptides are the orchestrators of the whole response", cd8: "Intraepithelial cytotoxic lymphocytes kill the enterocytes — the direct cause of villous atrophy", mac: "Macrophage activation contributes to the mucosal inflammation" }
    },
    islet: {
      label: "Islet β cell antigen", persists: false, source: "Self — cannot be avoided",
      disease: "Type 1A diabetes",
      body: "Islet autoantibodies are present and define the immune-mediated form, but they are not what kills the β cells: destruction is mediated by autoreactive T cells with CD8+ CTLs as the ultimate effectors. Once enough β cells are gone, insulin deficiency is absolute — which is why this is irreversible in a way contact dermatitis and celiac disease are not.",
      arms: { cd4: "CD4+ cells provide help and cytokines that sustain the islet-specific response", cd8: "CD8+ CTLs are the ultimate effectors of β cell destruction", mac: "Macrophages contribute to islet inflammation" }
    },
    tb: {
      label: "Persistent intracellular organism", persists: true, source: "Organism resists clearance",
      disease: "Granuloma",
      body: "The organism resists killing, so the antigen is never cleared and the cytokine signal never stops. Chronically activated macrophages change into epithelioid and multinucleated giant cells and aggregate into a nodule surrounded by lymphocytes. The granuloma represents containment rather than clearance, which is why it persists for as long as the organism does.",
      arms: { cd4: "Sustained IFN-γ from CD4+ Th1 cells is what keeps the macrophages classically activated", cd8: "CD8+ CTLs kill infected cells, releasing organisms for the macrophages to handle", mac: "Classically activated (M1) macrophages are the cells that form the granuloma itself" }
    }
  };
  function typeFour() {
    const root = $("m-h-four");
    const st = { ag: "hapten", cd4: true, cd8: true, mac: true };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(280px,1fr) 2fr">
      <div class="card"><h3>Antigen and effector arms</h3>
        <div class="note" style="margin-bottom:4px">What the T cells are responding to</div>${seg("h4Seg", Object.entries(T4).map(([k, v]) => [k, v.label]), "hapten")}
        <div class="toggles" style="margin-top:14px">
          ${toggle("cd4", "CD4+ T cell cytokines", "IFN-γ from Th1 (and Th17 responses)", true)}
          ${toggle("cd8", "CD8+ CTL killing", "Direct killing of target cells", true)}
          ${toggle("mac", "Macrophage activation (M1)", "Classical activation by IFN-γ", true)}
        </div>
        <p class="note" style="margin-top:12px">In type IV reactions T cells are both the immune reactant and the effector — turn the arms off one at a time and watch which part of the lesion disappears.</p></div>
      <div class="card"><h3 id="h4Title"></h3><div id="h4Bars"></div><div class="facts" id="h4Facts"></div><div class="outcome" id="h4Out"></div></div></div>`;
    const draw = () => {
      const A = T4[st.ag];
      // CD4 cytokines orchestrate: without them macrophage activation cannot be sustained
      const macActive = st.mac && st.cd4;
      const w = { cd4: 0.4, cd8: 0.35, mac: 0.25 };
      let mag = (st.cd4 ? w.cd4 : 0) + (st.cd8 ? w.cd8 : 0) + (macActive ? w.mac : 0);
      if (st.ag === "islet") mag = (st.cd4 ? 0.3 : 0) + (st.cd8 ? 0.55 : 0) + (macActive ? 0.15 : 0);
      if (st.ag === "tb") mag = (st.cd4 ? 0.45 : 0) + (st.cd8 ? 0.2 : 0) + (macActive ? 0.35 : 0);
      const at = h => Math.round(mag * 100 * (h === 6 ? 0.12 : h === 24 ? 0.55 : h === 48 ? 0.9 : 1));
      const gran = A.persists && macActive && st.cd4;
      const name = A.persists && !gran ? "Chronic T cell inflammation, no granuloma" : A.disease;
      $("h4Title").textContent = mag > 0.5 ? name : mag > 0.2 ? name + " — blunted" : "Little or no reaction";
      $("h4Bars").innerHTML = bars([6, 24, 48, 72].map(h => [h + " h", Math.max(2, at(h)), mag > 0.5 ? "var(--h)" : mag > 0.2 ? "var(--warn)" : "var(--muted)"]));
      $("h4Facts").innerHTML = [
        ["Peak", "24–72 h", "mid"],
        ["Antigen source", A.source, A.persists || st.ag === "islet" ? "no" : "yes"],
        ["Granuloma", gran ? "Forms" : A.persists ? "Cannot form" : "Not expected", gran ? "no" : "yes"]
      ].map(([k, v, c]) => `<div class="fact">${k}<b class="${c}">${v}</b></div>`).join("");
      const off = [];
      if (!st.cd4) off.push("<b>Without CD4+ cytokines:</b> " + A.arms.cd4 + ". These cells orchestrate the response, so macrophage activation collapses with them even if the macrophages themselves are intact.");
      if (!st.cd8) off.push("<b>Without CD8+ CTLs:</b> " + A.arms.cd8 + ".");
      if (!st.mac) off.push("<b>Without macrophage activation:</b> " + A.arms.mac + ".");
      let head = `<p style="margin:10px 0">${A.body}</p>`;
      if (!off.length) head += `<div class="callout">The reaction takes 24–72 hours because nothing is preformed: antigen must be presented locally, circulating memory T cells must be recruited into the tissue, and only then do they produce the cytokines that activate macrophages and generate the lesion. Compare a type I reaction, which uses granules that are already loaded and fires within minutes.${A.persists ? " Here the antigen is never cleared, so the cytokine signal never stops and the response organizes into a granuloma." : ""}</div>`;
      $("h4Out").innerHTML = head + off.map(o => `<div class="callout warn" style="margin-top:8px">${o}</div>`).join("");
    };
    wireSeg(root, "h4Seg", st, "ag", draw); wireToggles(root, st, draw); draw();
  }

  return { init() { if (!$("m-h-build")) return; builder(); typeOne(); typeTwo(); typeThree(); typeFour(); } };
})();
