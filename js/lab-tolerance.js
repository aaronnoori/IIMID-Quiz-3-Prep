/* Tolerance Lab: central tolerance, peripheral T cell tolerance, breaking tolerance */
const TolLab = (() => {
  const $ = id => document.getElementById(id);
  const toggle = (key, label, sub, on) => `<div class="tg ${on ? "on" : ""}" data-k="${key}"><div>${label}${sub ? `<small>${sub}</small>` : ""}</div><span class="sw"></span></div>`;
  const wireToggles = (root, st, cb) => root.querySelectorAll(".tg").forEach(t => t.addEventListener("click", () => { st[t.dataset.k] = !st[t.dataset.k]; t.classList.toggle("on", st[t.dataset.k]); cb(); }));
  const seg = (id, opts, cur) => `<div class="seg" id="${id}">${opts.map(([v, l]) => `<button data-v="${v}" class="${v === cur ? "on" : ""}">${l}</button>`).join("")}</div>`;
  const wireSeg = (root, id, st, key, cb) => root.querySelectorAll(`#${id} button`).forEach(b => b.addEventListener("click", () => {
    st[key] = b.dataset.v; root.querySelectorAll(`#${id} button`).forEach(x => x.classList.toggle("on", x === b)); cb();
  }));
  const bars = cols => `<div class="bars">${cols.map(([l, v, c]) => `<div class="col"><div class="bar" style="height:${Math.max(2, v)}%;background:${c}"></div><div class="lbl">${l}</div></div>`).join("")}</div>`;

  /* ---------------- 1. Central tolerance ---------------- */
  function central() {
    const root = $("m-a-central");
    const st = { cell: "T", tag: "tra", bag: "multi", aire: true, neg: true, edit: true, del: true };
    const render = () => {
      root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(280px,1fr) 2fr">
        <div class="card"><h3>Developing lymphocyte</h3>
          <div class="note" style="margin-bottom:4px">Which cell, and where</div>${seg("acSeg", [["T", "T cell · thymus"], ["B", "B cell · bone marrow"]], st.cell)}
          ${st.cell === "T" ? `
            <div class="note" style="margin:12px 0 4px">Self antigen it recognizes</div>${seg("atSeg", [["ubi", "Ubiquitous"], ["tra", "Tissue-restricted"]], st.tag)}
            <div class="toggles" style="margin-top:12px">
              ${toggle("aire", "AIRE functional", "Drives tissue-restricted antigen expression in medullary thymic epithelial cells", st.aire)}
              ${toggle("neg", "Negative selection intact", "Apoptosis of strongly self-reactive thymocytes", st.neg)}
            </div>` : `
            <div class="note" style="margin:12px 0 4px">Form of the self antigen in the marrow</div>${seg("abSeg", [["multi", "Multivalent, membrane-bound"], ["sol", "Soluble, monomeric"]], st.bag)}
            <div class="toggles" style="margin-top:12px">
              ${toggle("edit", "Receptor editing available", "Light chain V–J recombination can resume", st.edit)}
              ${toggle("del", "Deletion (apoptosis) intact", "Negative selection in the marrow", st.del)}
            </div>`}
        </div>
        <div class="card"><h3>Outcome</h3><div id="acOut"></div></div></div>`;
      wireSeg(root, "acSeg", st, "cell", render);
      if (st.cell === "T") wireSeg(root, "atSeg", st, "tag", render); else wireSeg(root, "abSeg", st, "bag", render);
      wireToggles(root, st, draw);
      draw();
    };
    const draw = () => {
      let v, body, fate;
      if (st.cell === "T") {
        const presented = st.tag === "ubi" || st.aire;
        if (!presented) {
          v = ["no", "Escapes to the periphery — autoreactive"];
          fate = "Never shown its antigen";
          body = "AIRE is the transcription factor that makes medullary thymic epithelial cells express hundreds of tissue-restricted antigens — insulin, parathyroid and adrenal proteins and many others — so that developing thymocytes can be tested against antigens that normally function far outside the thymus. Without it, a thymocyte specific for one of those antigens simply never meets it, passes selection, and leaves for tissues where the antigen is being made continuously. That is the mechanism of APECED: autoimmune polyendocrinopathy with candidiasis and ectodermal dystrophy, typically hypoparathyroidism and adrenal insufficiency with chronic candidiasis.";
        } else if (!st.neg) {
          v = ["no", "Escapes to the periphery — autoreactive"];
          fate = "Antigen presented, deletion failed";
          body = "The antigen is displayed and the thymocyte binds it with high affinity, but the deletion machinery does not act, so the cell survives and is exported. Central tolerance depends on both halves: the antigen has to be presented in the thymus, and cells that bind it too strongly have to die. Fail either and the autoreactive clone reaches the periphery, where it becomes the responsibility of peripheral tolerance.";
        } else {
          v = ["yes", "Deleted in the thymus"];
          fate = "Negative selection";
          body = st.tag === "ubi"
            ? "A ubiquitously expressed self antigen is present in the thymus anyway, so a thymocyte that binds its peptide–MHC complex with high affinity is deleted whether or not AIRE is working. This is why an AIRE defect produces organ-specific endocrine autoimmunity rather than a complete failure of T cell tolerance — tolerance to common self proteins is unaffected."
            : "AIRE drives expression of this tissue-restricted antigen in medullary thymic epithelial cells, the thymocyte binds the resulting peptide–MHC complex with too high an affinity, and it is deleted. This is central T cell tolerance: the majority of strongly autoreactive thymocytes are removed from the repertoire before they ever leave the thymus.";
        }
      } else {
        if (st.bag === "sol") {
          v = ["mid", "Survives, but anergic"];
          fate = "Low-avidity recognition";
          body = "A monomeric soluble antigen engages the receptor weakly, so the signal is too low to trigger deletion or editing. The cell survives and migrates to the periphery, but it markedly reduces its surface IgM and is functionally unresponsive — anergic. It is alive and present in normal numbers, which is exactly what distinguishes this outcome from deletion, but it cannot be activated by the antigen it is specific for.";
        } else if (st.edit) {
          v = ["yes", "Receptor edited — leaves as a non-autoreactive B cell"];
          fate = "New light chain";
          body = "Multivalent membrane-bound antigen cross-links many IgM molecules at once, and that strong, high-avidity signal gives the immature B cell a second chance rather than an immediate death sentence. Light chain gene recombination resumes, a further V–J rearrangement produces a new light chain, and since the light chain helps form the binding site the receptor's specificity changes. If the new receptor no longer binds self, the cell leaves the marrow and matures normally.";
        } else if (st.del) {
          v = ["yes", "Deleted in the bone marrow"];
          fate = "Negative selection";
          body = "Without the option of editing, an immature B cell that binds multivalent self antigen strongly dies by apoptosis. In a normal marrow this is the fallback: editing is attempted first, and deletion removes the cells whose autoreactivity editing could not fix.";
        } else {
          v = ["no", "Escapes to the periphery — autoreactive"];
          fate = "Neither editing nor deletion";
          body = "With neither mechanism available, a B cell whose receptor binds a multivalent self antigen strongly leaves the marrow intact. Peripheral B cell tolerance now has to contain it: anergy when it keeps binding self antigen without T cell help, deletion by apoptosis, and inhibitory receptors such as FcγRIIB that raise the threshold for activation.";
        }
      }
      $("acOut").innerHTML = `<div class="outcome"><div class="verdict ${v[0] === "mid" ? "" : v[0]}" style="${v[0] === "mid" ? "color:var(--warn)" : ""}">${v[1]}</div></div>
        <div class="facts"><div class="fact"><b>${fate}</b>Mechanism</div><div class="fact"><b>${st.cell === "T" ? "Thymus" : "Bone marrow"}</b>Site</div><div class="fact"><b>Central tolerance</b>Checkpoint</div></div>
        <p style="margin-top:12px">${body}</p>`;
    };
    render();
  }

  /* ---------------- 2. Peripheral T cell tolerance ---------------- */
  function peripheral() {
    const root = $("m-a-periph");
    const st = { b7: false, treg: true, il2: true, ctla: true, pd1: true, tgf: true };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(290px,1fr) 2fr">
      <div class="card"><h3>A self-reactive T cell in the periphery</h3><div class="toggles">
        ${toggle("b7", "Costimulation: B7 on the APC", "Innate sensing of infection drives B7 up", false)}
        ${toggle("treg", "Regulatory T cells present", "FoxP3+ CD4+ CD25-high", true)}
        ${toggle("il2", "IL-2 available from conventional T cells", "Tregs consume it; they do not make it", true)}
        ${toggle("ctla", "CTLA-4 functional", "Outcompetes CD28 for B7; strips B7 from DCs", true)}
        ${toggle("pd1", "PD-1 functional", "Restrains effector T cells in tissue", true)}
        ${toggle("tgf", "TGF-β present, no pro-inflammatory cytokines", "Conditions that favor inducible Tregs", true)}
      </div></div>
      <div class="card"><h3>What happens to it</h3><div id="apBars"></div><div class="outcome" id="apOut" style="margin-top:12px"></div></div></div>`;
    const draw = () => {
      let act = st.b7 ? 100 : 15;
      if (!st.b7 && st.tgf) act = 8;
      if (st.treg) act *= st.il2 ? (st.ctla ? 0.15 : 0.45) : 0.9;
      if (!st.pd1) act *= 1.35;
      act = Math.max(0, Math.min(100, act));
      const anergy = st.b7 ? 5 : (st.tgf ? 55 : 88);
      const supp = st.treg ? (st.il2 ? (st.ctla ? 88 : 52) : 18) : 0;
      $("apBars").innerHTML = bars([
        ["Anergy", anergy, "var(--a)"],
        ["Treg suppression", supp, "var(--accent)"],
        ["Self-reactive effector activity", act, act > 50 ? "var(--bad)" : act > 20 ? "var(--warn)" : "var(--ok)"]
      ]);
      let v, note;
      if (!st.b7 && st.tgf) { v = ["yes", "Tolerant — anergy, with conversion to inducible Tregs"]; note = "The T cell recognizes self antigen on an APC that is not displaying B7, so it gets signal 1 without signal 2. That does not simply fail to activate it: it induces anergy, a lasting unresponsive state, and anergic cells also upregulate CTLA-4 and PD-1. Because TGF-β is present without pro-inflammatory cytokines, some of these cells additionally convert to inducible Tregs, which then suppress others. Add IL-6 to this milieu and the same precursor would become Th17 instead."; }
      else if (!st.b7) { v = ["yes", "Tolerant — anergy"]; note = "Antigen recognition without costimulation induces anergy. The cell remains alive and detectable but is functionally unresponsive, and stays that way even if it later meets the antigen with full costimulation. Without TGF-β in the environment, conversion to inducible Tregs does not occur, so anergy is carrying tolerance on its own here."; }
      else if (act > 50) { v = ["no", "Tolerance broken — self-reactive effector response"]; note = st.treg ? "Costimulation is available, and the suppression that would normally contain the response has been compromised. Note how dependent Tregs are on IL-2 they do not make themselves: conventional T cells supply it, it signals through STAT5 to sustain FoxP3, and without it Treg survival and function collapse. Removing CTLA-4 has a similar effect by a different route, leaving B7 freely available to CD28." : "Innate sensing of a microbe has driven B7 up on the APC, so the self-reactive T cell now receives both signals, and no regulatory T cells are present to contain it. This is the situation an infection creates in a tissue — bystander activation — and it is why peripheral tolerance depends on withholding costimulation from self antigens."; }
      else if (act > 20) { v = ["mid", "Partly contained"]; note = "Costimulation is available and the cell is being activated, but suppression is still removing much of the response. Tregs act through several mechanisms at once — consuming IL-2, secreting IL-10 and TGF-β, using CTLA-4 to strip B7 from dendritic cells, and cytolysis — so losing one of them blunts suppression without abolishing it." + (st.pd1 ? "" : " With PD-1 gone as well, the effector cells that do get through are unrestrained once they reach the tissue."); }
      else { v = ["yes", "Contained by regulatory T cells"]; note = "Costimulation is present, so this cell would otherwise be activated, but Tregs are suppressing the response. They consume the local IL-2 that dividing effector cells need, deliver IL-10 and TGF-β, and engage B7 on the dendritic cell through CTLA-4 so that CD28 cannot. Suppression is targeted by location rather than specificity: a Treg activated by its own antigen in a tissue silences other self-reactive cells responding nearby."; }
      $("apOut").innerHTML = `<div class="verdict ${v[0] === "mid" ? "" : v[0]}" style="${v[0] === "mid" ? "color:var(--warn)" : ""}">${v[1]}</div><div class="callout" style="margin-top:8px">${note}</div>`;
    };
    wireToggles(root, st, draw); draw();
  }

  /* ---------------- 3. Breaking tolerance ---------------- */
  function breaking() {
    const root = $("m-a-break");
    const st = { trig: "none", hla: false, nonhla: false };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(280px,1fr) 2fr">
      <div class="card"><h3>Susceptibility and trigger</h3>
        <div class="note" style="margin-bottom:4px">Environmental trigger</div>${seg("tbSeg", [["none", "None"], ["mim", "Infection: mimicry"], ["bys", "Infection in the tissue"]], "none")}
        <div class="toggles" style="margin-top:12px">
          ${toggle("hla", "HLA risk haplotype", "The largest single genetic contribution", false)}
          ${toggle("nonhla", "Non-HLA risk variants", "PTPN22, CTLA4, CD25, FCGRIIB", false)}
        </div>
        <p class="note" style="margin-top:12px">MHC linkage is necessary but not sufficient. Watch what genes alone do, and what a trigger adds.</p></div>
      <div class="card"><h3>Risk of autoimmune disease</h3><div id="tbBars"></div><div class="outcome" id="tbOut" style="margin-top:12px"></div></div></div>`;
    const draw = () => {
      const gene = (st.hla ? 48 : 0) + (st.nonhla ? 26 : 0);
      const trig = st.trig === "mim" ? 55 : st.trig === "bys" ? 48 : 0;
      let risk = Math.min(100, 4 + gene * 0.55 + trig * 0.6 + (gene && trig ? 24 : 0));
      $("tbBars").innerHTML = bars([
        ["Genetic susceptibility", Math.max(3, gene), "var(--b)"],
        ["Environmental trigger", Math.max(3, trig), "var(--warn)"],
        ["Risk of disease", risk, risk > 55 ? "var(--bad)" : risk > 28 ? "var(--warn)" : "var(--ok)"]
      ]);
      let v, note;
      if (!gene && !trig) { v = ["yes", "No disease"]; note = "Self-reactive lymphocytes exist in every healthy person — central tolerance is necessarily incomplete — but the layered peripheral mechanisms hold them: anergy, regulatory T cells, deletion, inhibitory receptors and ignorance. Autoimmunity requires that something disturb this balance."; }
      else if (gene && !trig) { v = ["mid", "Susceptible, but well"]; note = "Risk alleles are inherited, but they shift a threshold rather than cause disease. HLA genes carry the largest single contribution, roughly half of genetic susceptibility, yet concordance between monozygotic twins is far below 100% and risk haplotypes are common in healthy people — MHC linkage is necessary but not sufficient. The non-HLA variants act on the same machinery you have been manipulating: PTPN22 in lymphocyte signaling, CTLA4 and CD25 in the Treg pathway, FCGRIIB in B cell feedback inhibition."; }
      else if (st.trig === "mim") { v = [risk > 55 ? "no" : "mid", "Autoimmunity at the site of the cross-reactive self antigen"]; note = "A microbial peptide shares sequence similarity with a self antigen, so lymphocytes responding to the infection cross-react with self. Two consequences follow. The tissue attacked is decided by where that self antigen is expressed, not by where the microbe replicated — which is how a throat infection produces carditis in rheumatic fever. And because the self antigen is permanently present, the response continues after the organism has been cleared." + (gene ? " On a susceptible genetic background the threshold is already lowered, so the same trigger is more likely to produce disease." : " On a background without risk alleles, the same trigger often produces nothing."); }
      else { v = [risk > 55 ? "no" : "mid", "Autoimmunity in the infected tissue"]; note = "This is bystander activation. Innate sensing of the infection recruits leukocytes and activates tissue APCs, which upregulate B7 and secrete T cell-activating cytokines. Self-reactive T cells that were held in anergy or ignorance now receive signal 2 alongside signal 1 and are activated, even though the microbe shares no sequence similarity with the self antigen. The disease therefore appears in the tissue the infection inflamed — the opposite prediction from molecular mimicry." + (gene ? " Risk alleles make this easier to achieve." : ""); }
      $("tbOut").innerHTML = `<div class="verdict ${v[0] === "mid" ? "" : v[0]}" style="${v[0] === "mid" ? "color:var(--warn)" : ""}">${v[1]}</div><div class="callout" style="margin-top:8px">${note}</div>`;
    };
    wireSeg(root, "tbSeg", st, "trig", draw); wireToggles(root, st, draw); draw();
  }

  return { init() { if (!$("m-a-central")) return; central(); peripheral(); breaking(); } };
})();
