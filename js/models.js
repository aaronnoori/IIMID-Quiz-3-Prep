/* Interactive models for the T cell and B cell labs */
const Models = (() => {
  const $ = id => document.getElementById(id);
  const toggle = (key, label, sub, on) => `<div class="tg ${on ? "on" : ""}" data-k="${key}"><div>${label}${sub ? `<small>${sub}</small>` : ""}</div><span class="sw"></span></div>`;
  function wireToggles(root, state, cb) {
    root.querySelectorAll(".tg").forEach(t => t.addEventListener("click", () => { state[t.dataset.k] = !state[t.dataset.k]; t.classList.toggle("on", state[t.dataset.k]); cb(); }));
  }
  function wireSeg(root, sel, state, key, cb) {
    root.querySelectorAll(sel + " button").forEach(b => b.addEventListener("click", () => {
      state[key] = b.dataset.v; root.querySelectorAll(sel + " button").forEach(x => x.classList.toggle("on", x === b)); cb();
    }));
  }
  const S = (c) => `style="fill:${c}"`;
  const L = (c, w = 3, extra = "") => `style="stroke:${c};stroke-width:${w}" ${extra}`;

  /* ---------------- 1. T cell activation ---------------- */
  function tAct() {
    const root = $("m-t-act");
    const st = { s1: true, s2: true, adh: true, il2: true, ctla4: false, pd1: false };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Synapse components</h3><div class="toggles">
        ${toggle("s1", "Signal 1: TCR ↔ peptide–MHC", "Antigen recognition", true)}
        ${toggle("s2", "Signal 2: CD28 ↔ B7", "Needs a microbe-activated DC", true)}
        ${toggle("adh", "Adhesion: LFA-1 ↔ ICAM-1", "Stabilizes the synapse", true)}
        ${toggle("il2", "IL-2 + IL-2Rα (CD25)", "Autocrine growth signal", true)}
        ${toggle("ctla4", "CTLA-4 engaged", "Outcompetes CD28 for B7", false)}
        ${toggle("pd1", "PD-1 ↔ PD-L1", "Inhibits effector T cells", false)}
      </div><p class="note" style="margin-top:10px">Try: Signal 1 alone · add CTLA-4 · remove IL-2.</p></div>
      <div class="card"><div class="stage" id="tActSvg"></div><div class="outcome" id="tActOut"></div></div></div>`;
    const draw = () => {
      const pair = (y, on, inhib, l1, l2) => {
        const c = !on ? "var(--line)" : inhib ? "var(--bad)" : "var(--ok)";
        return `<rect x="232" y="${y - 9}" width="48" height="18" rx="5" ${S("var(--apc)")} opacity="${on ? 1 : .35}"/>
          <rect x="300" y="${y - 9}" width="48" height="18" rx="5" ${S("var(--t)")} opacity="${on ? 1 : .35}"/>
          <line x1="280" y1="${y}" x2="300" y2="${y}" ${L(c, 4)} ${on ? 'class="dash"' : ""}/>
          <text x="226" y="${y + 4}" text-anchor="end" font-size="11" ${S("var(--ink)")}>${l1}</text>
          <text x="354" y="${y + 4}" font-size="11" ${S("var(--ink)")}>${l2}</text>`;
      };
      let r = verdict();
      let clones = "";
      for (let i = 0; i < r.clones; i++) { const x = 470 + (i % 4) * 26, y = 70 + Math.floor(i / 4) * 26; clones += `<circle cx="${x}" cy="${y}" r="10" ${S("var(--t)")} opacity=".85"><animate attributeName="r" from="0" to="10" dur=".4s" begin="${i * 0.05}s" fill="freeze"/></circle>`; }
      $("tActSvg").innerHTML = `<svg viewBox="0 0 600 300">
        <ellipse cx="120" cy="150" rx="105" ry="125" ${S("color-mix(in srgb,var(--apc) 22%,transparent)")} style="stroke:var(--apc);stroke-width:2"/>
        <text x="80" y="150" font-weight="700" font-size="14" ${S("var(--apc)")}>Dendritic</text><text x="92" y="168" font-weight="700" font-size="14" ${S("var(--apc)")}>cell</text>
        <ellipse cx="420" cy="150" rx="70" ry="125" ${S("color-mix(in srgb,var(--t) 18%,transparent)")} style="stroke:var(--t);stroke-width:2"/>
        <text x="418" y="285" text-anchor="middle" font-weight="700" font-size="13" ${S("var(--t)")}>Naive T cell</text>
        ${pair(45, st.s1, false, "pMHC", "TCR")}
        ${pair(90, st.s2 && !st.ctla4, false, "B7", "CD28")}
        ${pair(135, st.ctla4, true, "B7", "CTLA-4")}
        ${pair(180, st.pd1, true, "PD-L1", "PD-1")}
        ${pair(225, st.adh, false, "ICAM-1", "LFA-1")}
        ${st.il2 && r.ok ? `<g class="pulse"><circle cx="440" cy="250" r="7" ${S("var(--accent2)")}/><circle cx="455" cy="238" r="5" ${S("var(--accent2)")}/><text x="468" y="255" font-size="11" ${S("var(--accent2)")}>IL-2</text></g>` : ""}
        <text x="520" y="40" text-anchor="middle" font-size="11" ${S("var(--muted)")}>Clonal expansion</text>
        ${clones}
      </svg>`;
      $("tActOut").innerHTML = `<div class="callout ${r.cls}"><div class="verdict">${r.v}</div>${r.e}</div>`;
    };
    function verdict() {
      if (!st.s1) return { v: "No response", cls: "", clones: 0, ok: false, e: "Without Signal 1 the T cell never recognizes antigen. Costimulation alone does nothing because Signal 2 only amplifies a TCR signal." };
      if (!st.s2 || st.ctla4) {
        if (st.ctla4 && st.s2) return { v: "Activation shut off by CTLA-4", cls: "bad", clones: 1, ok: false, e: "CTLA-4 binds B7 with much higher affinity than CD28, so it outcompetes CD28 (and can strip B7 off the APC). Losing costimulation terminates the response. Blocking CTLA-4 (ipilimumab) releases this brake, which is the basis of checkpoint therapy and its autoimmune side effects." };
        return { v: "Anergy", cls: "bad", clones: 1, ok: false, e: "Signal 1 without Signal 2 → a long-lasting unresponsive state. This is how naive T cells that meet self-peptides on resting, B7-low DCs stay tolerant." };
      }
      if (st.pd1) return { v: "Dampened / exhausted response", cls: "warn", clones: 3, ok: true, e: "PD-1 engaged by PD-L1 recruits the phosphatase SHP-2, which dephosphorylates TCR and CD28 signaling intermediates. Chronic antigen (tumors, chronic viral infection) drives this exhausted state, and anti-PD-1/PD-L1 antibodies reverse it." };
      if (!st.adh) return { v: "Weak, unstable synapse", cls: "warn", clones: 3, ok: true, e: "LFA-1 (an integrin) binding ICAM-1 holds the T cell against the APC long enough for sustained signaling. Without it, signaling is brief and activation is inefficient (compare leukocyte adhesion deficiency)." };
      if (!st.il2) return { v: "Activated but no clonal expansion", cls: "warn", clones: 1, ok: false, e: "Both signals induce IL-2 and the high-affinity IL-2Rα (CD25). IL-2 acts in an autocrine way to drive proliferation. Without it the cell is activated but can't expand into a large clone. Calcineurin inhibitors such as cyclosporine and tacrolimus work by blocking IL-2 transcription (NFAT)." };
      return { v: "Full activation → proliferation & differentiation", cls: "ok", clones: 16, ok: true, e: "Signal 1 + Signal 2 + a stable synapse → IL-2/CD25 → clonal expansion, then differentiation into effector and memory cells. Later, CTLA-4 and PD-1 are upregulated to switch the response off." };
    }
    wireToggles(root, st, draw); draw();
  }

  /* ---------------- 2. Th differentiation ---------------- */
  function tTh() {
    const root = $("m-t-th");
    const st = { m: "th1" };
    const D = {
      th1: { name: "Th1", trig: "Intracellular microbe (e.g., M. tuberculosis, Listeria)", drive: "IL-12 (DC/macrophage) + IFN-γ", out: "IFN-γ", tf: "T-bet", fn: "IFN-γ activates macrophages to kill phagocytosed microbes and promotes opsonizing IgG. IFN-γ also acts on the Th1 cell itself (autocrine loop) and suppresses Th2 and Th17 differentiation.", mac: "M1 (classical): iNOS, ROS, IL-12, TNF → microbicidal, pro-inflammatory", macC: "var(--bad)", y: 60 },
      th2: { name: "Th2", trig: "Helminth / allergen", drive: "IL-4", out: "IL-4, IL-5, IL-13", tf: "GATA-3", fn: "IL-4 → B cell switching to IgE. IL-5 → eosinophil activation. IL-13 → mucus and smooth-muscle contraction. IL-4 inhibits Th1.", mac: "M2 (alternative): IL-4/IL-13 → arginase, TGF-β → tissue repair and fibrosis", macC: "var(--ok)", y: 150 },
      th17: { name: "Th17", trig: "Extracellular bacteria / fungi (e.g., Candida, S. aureus)", drive: "IL-6 + TGF-β (IL-23 sustains)", out: "IL-17, IL-22", tf: "RORγt", fn: "IL-17 makes epithelium release chemokines (recruiting neutrophils) and antimicrobial peptides; IL-22 maintains the barrier. Also drives inflammation in psoriasis and IBD.", mac: "Mainly recruits neutrophils rather than polarizing macrophages", macC: "var(--warn)", y: 240 },
    };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>What did the DC encounter?</h3><div class="seg" id="thSeg" style="flex-direction:column">
        <button data-v="th1" class="on">🦠 Intracellular microbe</button><button data-v="th2">🪱 Helminth / allergen</button><button data-v="th17">🍄 Extracellular bacteria / fungi</button></div>
        <p class="note" style="margin-top:12px">Transcription factors are shown for context; you don't need to memorize them for the exam.</p></div>
      <div class="card"><div class="stage" id="thSvg"></div><div class="outcome" id="thOut"></div></div></div>`;
    const draw = () => {
      const d = D[st.m];
      let nodes = "";
      Object.entries(D).forEach(([k, n]) => {
        const on = k === st.m;
        nodes += `<line x1="150" y1="150" x2="330" y2="${n.y}" ${L(on ? "var(--accent)" : "var(--line)", on ? 4 : 2, on ? 'class="dash"' : "")}/>
          <circle cx="360" cy="${n.y}" r="32" style="fill:${on ? "color-mix(in srgb,var(--accent) 25%,var(--panel))" : "var(--panel)"};stroke:${on ? "var(--accent)" : "var(--line)"};stroke-width:2"/>
          <text x="360" y="${n.y + 5}" text-anchor="middle" font-weight="800" font-size="14" ${S(on ? "var(--ink)" : "var(--muted)")}>${n.name}</text>
          <text x="402" y="${n.y + 4}" font-size="12" ${S(on ? "var(--accent2)" : "var(--muted)")}>${n.out}</text>`;
      });
      const inhib = st.m === "th1" ? [[150], [240]] : st.m === "th2" ? [[60]] : [];
      let inh = "";
      inhib.forEach(([y]) => { inh += `<path d="M 330 ${D[st.m].y} Q 300 ${(D[st.m].y + y) / 2} 330 ${y + (y > D[st.m].y ? -22 : 22)}" ${L("var(--bad)", 2.5)} fill="none" stroke-dasharray="4 4"/><line x1="322" y1="${y + (y > D[st.m].y ? -22 : 22)}" x2="338" y2="${y + (y > D[st.m].y ? -22 : 22)}" ${L("var(--bad)", 3)}/>`; });
      $("thSvg").innerHTML = `<svg viewBox="0 0 600 300">
        <circle cx="110" cy="150" r="40" ${S("color-mix(in srgb,var(--t) 20%,var(--panel))")} style="stroke:var(--t);stroke-width:2"/>
        <text x="110" y="148" text-anchor="middle" font-weight="800" ${S("var(--t)")}>Th0</text><text x="110" y="164" text-anchor="middle" font-size="10" ${S("var(--muted)")}>naive CD4+</text>
        <text x="200" y="${(150 + d.y) / 2 - 8}" font-size="11" font-weight="700" ${S("var(--accent)")}>${d.drive}</text>
        ${nodes}${inh}
        <text x="20" y="30" font-size="11" ${S("var(--muted)")}>${d.trig}</text>
        ${inh ? `<text x="20" y="285" font-size="11" ${S("var(--bad)")}>⊣ red dashed = cross-inhibition</text>` : ""}
      </svg>`;
      $("thOut").innerHTML = `<div class="facts"><div class="fact">Driving cytokines<b>${d.drive}</b></div><div class="fact">Defining cytokines<b>${d.out}</b></div><div class="fact">Master TF<b>${d.tf}</b></div></div>
        <div class="callout" style="margin-top:10px"><b>Function:</b> ${d.fn}</div>
        <div class="callout" style="margin-top:8px;border-color:${d.macC}"><b>Macrophage outcome:</b> ${d.mac}</div>`;
    };
    wireSeg(root, "#thSeg", st, "m", draw); draw();
  }

  /* ---------------- 3. CTL killing ---------------- */
  function tCtl() {
    const root = $("m-t-ctl");
    const st = { perf: true, gzm: true, fasl: true, fas: true };
    let shot = 0;
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>CTL toolkit</h3><div class="toggles">
        ${toggle("perf", "Perforin", "Pore formation", true)}
        ${toggle("gzm", "Granzymes", "Serine proteases → caspases", true)}
        ${toggle("fasl", "Fas ligand on CTL", "Death-receptor pathway", true)}
        ${toggle("fas", "Fas (CD95) on target", "", true)}
      </div><button class="btn primary" id="ctlGo" style="margin-top:12px;width:100%;justify-content:center">⚔ Engage infected cell</button>
      <p class="note" style="margin-top:10px">Case: an infant with a perforin gene defect. Which pathway still works?</p></div>
      <div class="card"><div class="stage" id="ctlSvg"></div><div class="outcome" id="ctlOut"></div></div></div>`;
    const draw = (animate) => {
      const gran = st.perf && st.gzm, fas = st.fasl && st.fas;
      const kill = gran ? 2 : fas ? 1 : 0;
      const dead = animate && kill;
      $("ctlSvg").innerHTML = `<svg viewBox="0 0 600 260">
        <circle cx="140" cy="130" r="70" ${S("color-mix(in srgb,var(--t) 20%,var(--panel))")} style="stroke:var(--t);stroke-width:2"/>
        <text x="140" y="134" text-anchor="middle" font-weight="800" ${S("var(--t)")}>CD8 CTL</text>
        ${[0, 1, 2].map(i => `<circle cx="${175 + i * 8}" cy="${100 + i * 22}" r="7" ${S(st.gzm || st.perf ? "var(--accent2)" : "var(--line)")}>${animate && (st.perf || st.gzm) ? `<animate attributeName="cx" from="${175 + i * 8}" to="${380}" dur="0.8s" begin="${i * .15}s" fill="freeze"/>` : ""}</circle>`).join("")}
        ${st.fasl ? `<rect x="205" y="170" width="30" height="12" rx="4" ${S("var(--t)")}/><text x="220" y="198" text-anchor="middle" font-size="10" ${S("var(--muted)")}>FasL</text>` : ""}
        ${st.fas ? `<rect x="320" y="170" width="30" height="12" rx="4" ${S("var(--b)")}/><text x="335" y="198" text-anchor="middle" font-size="10" ${S("var(--muted)")}>Fas</text>` : ""}
        ${st.fasl && st.fas ? `<line x1="235" y1="176" x2="320" y2="176" ${L("var(--ok)", 3)} class="dash"/>` : ""}
        ${st.perf && animate ? `<g opacity="0"><animate attributeName="opacity" to="1" dur=".3s" begin=".5s" fill="freeze"/><circle cx="345" cy="118" r="8" style="fill:none;stroke:var(--ink);stroke-width:2"/><text x="345" y="88" text-anchor="middle" font-size="10" ${S("var(--muted)")}>perforin pore</text></g>` : ""}
        <circle cx="430" cy="130" r="${dead ? 50 : 72}" style="fill:color-mix(in srgb,var(--b) ${dead ? 8 : 18}%,var(--panel));stroke:var(--b);stroke-width:2;${dead ? "stroke-dasharray:6 6" : ""};transition:r 1.4s ease 0.9s"/>
        ${dead ? [0, 1, 2, 3, 4].map(i => `<circle cx="${430 + Math.cos(i * 1.3) * 62}" cy="${130 + Math.sin(i * 1.3) * 62}" r="9" style="fill:color-mix(in srgb,var(--b) 30%,transparent);stroke:var(--b)" opacity="0"><animate attributeName="opacity" to="1" dur=".4s" begin="1.4s" fill="freeze"/></circle>`).join("") : ""}
        <text x="430" y="134" text-anchor="middle" font-weight="800" ${S("var(--b)")}>${dead ? "Apoptotic" : "Infected cell"}</text>
      </svg>`;
      if (!animate) { $("ctlOut").innerHTML = `<div class="callout">Set the toolkit, then click <b>Engage</b>.</div>`; return; }
      let v, c, e;
      if (kill === 2) { v = fas ? "Rapid, efficient killing (both pathways)" : "Efficient killing via granule exocytosis"; c = "ok"; e = "Perforin polymerizes in the target membrane, which lets granzymes in. Granzyme B cleaves caspases (and Bid → mitochondrial cytochrome c release), causing apoptosis. This is the CTL's dominant killing route."; }
      else if (kill === 1) { v = "Reduced, slower killing via Fas–FasL"; c = "warn"; e = (!st.perf ? "Without perforin, granzymes can't reach the cytosol efficiently. " : "Without granzymes, perforin pores alone don't trigger apoptosis efficiently. ") + "FasL on the CTL still trimerizes Fas on the target → FADD → caspase-8 → apoptosis. This is why perforin-deficient CTLs (familial HLH) retain some killing."; }
      else { v = "Target survives"; c = "bad"; e = "With both the granule pathway and the Fas pathway disabled, the CTL can recognize the target but can't kill it. Fas/FasL defects alone cause ALPS, because activated lymphocytes can't be eliminated."; }
      $("ctlOut").innerHTML = `<div class="callout ${c}"><div class="verdict">${v}</div>${e}</div>`;
    };
    wireToggles(root, st, () => draw(false));
    $("ctlGo").onclick = () => { draw(false); setTimeout(() => draw(true), 30); };
    draw(false);
  }

  /* ---------------- 4. B cell activation & isotype predictor ---------------- */
  function bAct() {
    const root = $("m-b-act");
    const st = { ag: "protein", cyt: "il4", c3d: false, infant: false, itam: false, cd40l: false, aid: false, ic: false, fcr: false };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(270px,1fr) 2fr">
      <div class="card"><h3>Antigen</h3><div class="seg" id="agSeg"><button data-v="protein" class="on">Protein (Td)</button><button data-v="poly">Polysaccharide (Ti)</button><button data-v="conj">Conjugate vaccine</button></div>
        <h3 style="margin-top:14px">Tfh cytokine</h3><div class="seg" id="cySeg"><button data-v="il4" class="on">IL-4 / IL-13</button><button data-v="il21">IL-21</button><button data-v="tgfb">TGF-β</button></div>
        <h3 style="margin-top:14px">Modifiers &amp; defects</h3><div class="toggles">
        ${toggle("c3d", "Antigen coated with C3d", "Engages CR2–CD19–CD81")}
        ${toggle("infant", "Patient &lt; 2 years old", "Immature marginal-zone response")}
        ${toggle("itam", "Igα/Igβ ITAM defect", "BCR binds, can't signal")}
        ${toggle("cd40l", "CD40L deficiency (T cell)", "")}
        ${toggle("aid", "AID deficiency (B cell)", "")}
        ${toggle("ic", "IgG immune complexes present", "Co-engage FcγRIIB")}
        ${toggle("fcr", "FcγRIIB loss-of-function", "")}
      </div></div>
      <div class="card"><h3>Predicted serum antibody</h3><div class="bars" id="abBars"></div><div class="facts" id="abFacts"></div><div class="outcome" id="abOut"></div></div></div>`;
    const draw = () => {
      let act = 1, notes = [];
      const td = st.ag !== "poly";
      root.querySelector("#cySeg").style.opacity = td ? 1 : .4;
      if (st.itam) { act = 0; notes.push("<b>ITAM defect:</b> antigen binds and cross-links membrane Ig, but without Igα/Igβ ITAM phosphorylation (Lyn → Syk) there is no signal, so no activation at all."); }
      if (st.c3d && act) { act *= 1.25; notes.push("<b>C3d + CR2:</b> CD19 phosphorylation amplifies BCR signaling, so the B cell activates at lower antigen doses. This works for both Td and Ti antigens."); }
      if (st.ic && !st.fcr && act) { act *= 0.3; notes.push("<b>FcγRIIB engaged:</b> its ITIM recruits SHIP/SHP-1 phosphatases that cancel BCR signaling, a negative-feedback brake once IgG is plentiful."); }
      if (st.fcr && act) { act *= 1.3; notes.push("<b>FcγRIIB loss:</b> no feedback brake → excessive, prolonged B cell activation and a risk of autoantibodies (SLE-like)."); }
      let ig = { IgM: 0, IgG: 0, IgA: 0, IgE: 0 }, help = td ? "Yes" : "No", gc = "No", aff = "Low", mem = "Poor";
      if (!td) {
        ig.IgM = 65 * act * (st.infant ? 0.35 : 1); ig.IgG = 6 * act;
        notes.unshift("<b>T-independent:</b> repeating polysaccharide epitopes cross-link many BCRs. Without MHC presentation there's no cognate Tfh help, so mostly IgM, little switching, no germinal center and poor memory." + (st.infant ? " Children under 2 respond especially poorly (immature marginal-zone B cells)." : ""));
      } else if (st.cd40l) {
        ig.IgM = 80 * act; ig.IgG = ig.IgA = ig.IgE = 3 * act; help = "Defective";
        notes.unshift("<b>CD40L deficiency:</b> the B cell presents peptide, but the Tfh cell can't deliver the CD40 signal. No germinal center, no AID induction, so it stays IgM (X-linked hyper-IgM). Macrophage activation is also impaired, so watch for Pneumocystis.");
      } else if (st.aid) {
        ig.IgM = 95 * act; ig.IgG = ig.IgA = ig.IgE = 2 * act; gc = "Yes (enlarged)"; aff = "None (no SHM)"; mem = "IgM only";
        notes.unshift("<b>AID deficiency:</b> T help and germinal centers are intact, but without AID there's no class-switch recombination and no somatic hypermutation → high IgM, absent IgG/A/E, no affinity maturation.");
      } else {
        gc = "Yes"; aff = "High"; mem = "Strong";
        ig.IgM = 22 * act;
        if (st.cyt === "il4") { ig.IgE = 70 * act; ig.IgG = 28 * act; } else if (st.cyt === "il21") { ig.IgG = 88 * act; } else { ig.IgA = 82 * act; ig.IgG = 12 * act; }
        const sw = { il4: "IL-4/IL-13 → IgE (helminths, allergy)", il21: "IL-21 → IgG1 and IgG3", tgfb: "TGF-β → IgA (mucosal)" }[st.cyt];
        notes.unshift(`<b>T-dependent${st.ag === "conj" ? " (conjugate)" : ""}:</b> ${st.ag === "conj" ? "polysaccharide-specific B cells internalize the conjugate and present carrier peptides on MHC II, so carrier-specific Tfh cells help them. " : ""}CD40L + cytokines induce AID → class switching (${sw}) and somatic hypermutation in germinal centers. Switching changes only the constant region, so specificity is unchanged.`);
      }
      if (act === 0) { ig = { IgM: 0, IgG: 0, IgA: 0, IgE: 0 }; gc = "No"; aff = "—"; mem = "None"; }
      const col = { IgM: "var(--muted)", IgG: "var(--accent)", IgA: "var(--ok)", IgE: "var(--accent2)" };
      $("abBars").innerHTML = Object.entries(ig).map(([k, v]) => `<div class="col"><div class="bar" style="height:${Math.min(100, Math.max(1.5, v))}%;background:${col[k]}"></div><div class="lbl">${k}</div></div>`).join("");
      const tone = s => /^(Yes|High|Strong)/.test(s) ? "yes" : /^(No|None|Poor|Defective|Low|—)/.test(s) ? "no" : "mid";
      $("abFacts").innerHTML = [["Cognate T help", act ? help : "—"], ["Germinal center", gc], ["Affinity maturation", aff], ["Memory", mem]].map(([k, v]) => `<div class="fact">${k}<b class="${tone(v)}">${v}</b></div>`).join("");
      $("abOut").innerHTML = notes.map(n => `<div class="callout" style="margin-top:8px">${n}</div>`).join("");
    };
    wireSeg(root, "#agSeg", st, "ag", draw); wireSeg(root, "#cySeg", st, "cyt", draw); wireToggles(root, st, draw); draw();
  }

  /* ---------------- 5. Germinal center simulator ---------------- */
  function bGc() {
    const root = $("m-b-gc");
    const st = { aid: true, tfh: true, scarce: true };
    const N = 60;
    let pop, hist, round, timer = null;
    const rnd = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    const reset = () => { pop = Array.from({ length: N }, () => Math.min(.95, Math.max(.02, .18 + rnd() * .06))); hist = [mean(pop)]; round = 0; };
    const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Germinal center conditions</h3><div class="toggles">
        ${toggle("aid", "AID active", "Somatic hypermutation in the dark zone", true)}
        ${toggle("tfh", "Tfh help (CD40L + IL-21)", "Survival signal in the light zone", true)}
        ${toggle("scarce", "Limited antigen on FDCs", "Competition → stringent selection", true)}
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn primary" id="gcStep">Run 1 cycle</button><button class="btn" id="gcPlay">▶ Auto ×10</button><button class="btn" id="gcReset">Reset</button></div>
      <p class="note" style="margin-top:10px">Each cycle: dark zone (proliferate + mutate) → light zone (capture FDC antigen, present to Tfh, survive or die).</p></div>
      <div class="card"><div class="stage" id="gcSvg"></div><div class="outcome" id="gcOut"></div></div></div>`;
    function step() {
      if (!pop.length) return;
      let next = pop.map(a => st.aid ? Math.min(.99, Math.max(.01, a + (Math.random() < .25 ? Math.abs(rnd()) * .09 : -Math.abs(rnd()) * .07))) : a);
      let survivors;
      if (!st.tfh) survivors = next.filter(() => Math.random() < .35);
      else if (st.scarce) { const sorted = next.slice().sort((a, b) => b - a); const cut = sorted[Math.floor(sorted.length * .4)]; survivors = next.filter(a => a >= cut || Math.random() < .05); }
      else survivors = next.filter(() => Math.random() < .8);
      if (st.tfh && survivors.length) { pop = Array.from({ length: N }, (_, i) => survivors[i % survivors.length]); }
      else pop = survivors;
      round++; hist.push(mean(pop)); draw();
    }
    function draw() {
      const W = 600, H = 300;
      const dots = pop.map((a, i) => { const x = 40 + a * 520, y = 40 + (i % 10) * 9 + (Math.floor(i / 10) % 2) * 4; const c = a > .6 ? "var(--ok)" : a > .35 ? "var(--warn)" : "var(--b)"; return `<circle cx="${x.toFixed(1)}" cy="${y}" r="4.5" style="fill:${c}" opacity=".9"/>`; }).join("");
      const maxR = Math.max(10, hist.length - 1);
      const pts = hist.map((m, i) => `${40 + i / maxR * 520},${280 - m * 88}`).join(" ");
      $("gcSvg").innerHTML = `<svg viewBox="0 0 ${W} ${H}">
        <text x="40" y="24" font-size="11" ${S("var(--muted)")}>B cell clones by BCR affinity (cycle ${round}, ${pop.length} cells)</text>
        <line x1="40" y1="136" x2="560" y2="136" ${L("var(--line)", 1)}/>
        <text x="40" y="150" font-size="10" ${S("var(--muted)")}>low affinity</text><text x="560" y="150" text-anchor="end" font-size="10" ${S("var(--muted)")}>high affinity</text>
        ${dots}
        <text x="40" y="172" font-size="11" ${S("var(--muted)")}>Mean affinity over cycles</text>
        <line x1="40" y1="280" x2="560" y2="280" ${L("var(--line)", 1)}/><line x1="40" y1="186" x2="40" y2="280" ${L("var(--line)", 1)}/>
        <polyline points="${pts}" fill="none" ${L("var(--accent)", 2.5)}/>
        ${hist.map((m, i) => `<circle cx="${40 + i / maxR * 520}" cy="${280 - m * 88}" r="3" ${S("var(--accent)")}/>`).join("")}
      </svg>`;
      const m0 = hist[0], m = mean(pop);
      let v, c, e;
      if (!pop.length) { v = "Germinal center collapsed"; c = "bad"; e = "Without Tfh help (CD40L + IL-21), light-zone B cells receive no survival signal and die by apoptosis no matter how good their BCR is. This is the CD40L-deficiency picture: no GC, no affinity maturation."; }
      else if (!st.aid) { v = "No affinity gain"; c = "bad"; e = "Selection runs, but without AID there are no new mutations to select from, so affinity stays flat. AID-deficient patients form germinal centers (often large) but produce no hypermutated, high-affinity, switched antibody."; }
      else if (!st.tfh) { v = "Clones dwindling"; c = "warn"; e = "Mutations happen, but with no Tfh survival or proliferation signal the population shrinks every cycle."; }
      else if (!st.scarce) { v = "Weak selection: slow drift"; c = "warn"; e = "When antigen is abundant, low-affinity clones also capture enough antigen to get help, so there's little pressure toward higher affinity. Affinity maturation depends on competition for limited antigen on FDCs."; }
      else { v = round ? `Affinity maturation: mean ${m0.toFixed(2)} → ${m.toFixed(2)}` : "Ready"; c = round ? "ok" : ""; e = "AID makes random point mutations in V regions (concentrated in CDRs). Most are neutral or harmful, but the rare improved clones capture more FDC antigen, present more peptide to Tfh cells, get CD40L + IL-21, and expand. Repeated cycles → high-affinity antibody."; }
      $("gcOut").innerHTML = `<div class="callout ${c}"><div class="verdict">${v}</div>${e}</div>`;
    }
    wireToggles(root, st, draw);
    $("gcStep").onclick = step;
    $("gcReset").onclick = () => { clearInterval(timer); timer = null; reset(); draw(); };
    $("gcPlay").onclick = () => { if (timer) return; let n = 0; timer = setInterval(() => { step(); if (++n >= 10 || !pop.length) { clearInterval(timer); timer = null; } }, 350); };
    reset(); draw();
  }

  return { init() { tAct(); tTh(); tCtl(); bAct(); bGc(); } };
})();
