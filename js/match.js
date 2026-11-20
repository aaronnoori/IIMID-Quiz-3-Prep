/* =====================================================================
   CYTOKINE MATCH — edit or append cytokines here.
   { name, func: what it does, source: main cell source }
   ===================================================================== */
const CYTOKINES = [
  { name: "IL-2",  func: "T cell growth factor: drives clonal proliferation through the high-affinity (αβγ) IL-2R; Tregs consume it and depend on it for survival", source: "Activated T cells (autocrine); CD4 helpers for CD8 cells" },
  { name: "IL-4",  func: "Drives Th2 differentiation; switches B cells to IgE; inhibits Th1/Th17", source: "Th2 cells, mast cells, eosinophils" },
  { name: "IL-5",  func: "Recruits and activates eosinophils against helminths", source: "Th2 cells" },
  { name: "IL-13", func: "Increases goblet-cell mucus and smooth-muscle contraction; with IL-4, drives M2 macrophages and IgE", source: "Th2 cells" },
  { name: "IL-12", func: "Drives naive CD4 cells to Th1 and enhances CD8 differentiation", source: "Dendritic cells and macrophages" },
  { name: "IFN-γ", func: "Classical (M1) macrophage activation; reinforces Th1 and inhibits Th2/Th17", source: "Th1 cells and NK cells" },
  { name: "TNF",   func: "Activates neutrophils and promotes inflammation", source: "Th1 cells and activated macrophages" },
  { name: "IL-6",  func: "With TGF-β, converts naive CD4 cells into Th17 cells", source: "Dendritic cells (bacterial/fungal infection)" },
  { name: "IL-23", func: "Sustains and expands Th17 cells", source: "Activated dendritic cells" },
  { name: "TGF-β", func: "Directs B cell switching to IgA; generates inducible Tregs when no pro-inflammatory cytokine is present, but Th17 when IL-6 or IL-1 is", source: "Many cell types (mucosal signals); Tregs" },
  { name: "IL-17", func: "Makes epithelium and phagocytes release inflammatory cytokines and neutrophil-attracting chemokines", source: "Th17 cells" },
  { name: "IL-22", func: "Increases antimicrobial peptides and tight junction proteins in mucosal epithelium", source: "Th17 cells" },
  { name: "IL-21", func: "Essential for germinal center development; directs switching to IgG1/IgG3", source: "T follicular helper (Tfh) cells" },
  { name: "IL-10", func: "Immunosuppressive: one of the inhibitory cytokines Tregs use to shut down self-reactive responses", source: "Regulatory T cells; macrophages" },
  { name: "IL-35", func: "Immunosuppressive cytokine contributing to Treg-mediated suppression", source: "Regulatory T cells" },
  { name: "IL-7",  func: "Maintains memory T cells (anti-apoptotic proteins, slow homeostatic proliferation)", source: "Stromal cells (e.g., thymus)" }
];

const Match = (() => {
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const st = { mode: "func", size: "6", left: [], right: [], sel: null, done: {}, misses: 0, revealed: false };

  function newRound() {
    const n = st.size === "all" ? CYTOKINES.length : +st.size;
    const pick = shuffle(CYTOKINES).slice(0, n);
    st.left = shuffle(pick.map(c => c.name));
    // de-duplicate right-hand text (several cytokines can share a source)
    st.right = shuffle([...new Set(pick.map(c => c[st.mode]))]);
    st.pick = pick; st.sel = null; st.done = {}; st.misses = 0; st.revealed = false;
    render();
  }
  const textOf = name => st.pick.find(c => c.name === name)[st.mode];

  function render() {
    const matched = Object.keys(st.done).length, total = st.left.length;
    $("mScore").textContent = `${matched}/${total} matched · ${st.misses} miss${st.misses === 1 ? "" : "es"}`;
    $("mProg").style.width = (matched / total * 100) + "%";
    const usedRight = new Set(Object.values(st.done));
    const allRightDone = t => st.left.filter(n => textOf(n) === t).every(n => st.done[n]);
    $("mLeft").innerHTML = st.left.map(n => `<button class="mitem ${st.done[n] ? "ok" : ""} ${st.sel === n ? "sel" : ""}" data-l="${esc(n)}" ${st.done[n] ? "disabled" : ""}><b>${esc(n)}</b></button>`).join("");
    $("mRight").innerHTML = st.right.map(t => {
      const owners = st.left.filter(n => st.done[n] && textOf(n) === t);
      const full = allRightDone(t);
      return `<button class="mitem r ${owners.length ? "ok" : ""}" data-r="${esc(t)}" ${full ? "disabled" : ""}>${owners.length ? `<span class="tag">${owners.map(esc).join(", ")}</span>` : ""}${esc(t)}</button>`;
    }).join("");
    $("mLeft").querySelectorAll("[data-l]").forEach(b => b.onclick = () => { st.sel = st.sel === b.dataset.l ? null : b.dataset.l; render(); });
    $("mRight").querySelectorAll("[data-r]").forEach(b => b.onclick = () => tryMatch(b));
    const fin = $("mDone");
    if (matched === total) {
      fin.style.display = "block";
      fin.className = "callout " + (st.revealed ? "" : st.misses === 0 ? "ok" : "warn");
      fin.innerHTML = st.revealed ? "Answers revealed. Hit <b>New round</b> to try again." : `<b>Round complete!</b> ${total} matched with ${st.misses} miss${st.misses === 1 ? "" : "es"}${st.misses === 0 ? " — perfect." : "."}`;
    } else fin.style.display = "none";
  }

  function tryMatch(btn) {
    if (!st.sel) { flash(btn, "hint"); return; }
    if (textOf(st.sel) === btn.dataset.r) { st.done[st.sel] = btn.dataset.r; st.sel = null; render(); }
    else { st.misses++; const l = $("mLeft").querySelector(`[data-l="${CSS.escape(st.sel)}"]`); flash(btn, "bad"); if (l) flash(l, "bad"); $("mScore").textContent = `${Object.keys(st.done).length}/${st.left.length} matched · ${st.misses} miss${st.misses === 1 ? "" : "es"}`; }
  }
  function flash(el, cls) { el.classList.add(cls); setTimeout(() => el.classList.remove(cls), 450); }

  function init() {
    const segs = (sel, key) => document.querySelectorAll(sel + " button").forEach(b => b.addEventListener("click", () => {
      st[key] = b.dataset.v; document.querySelectorAll(sel + " button").forEach(x => x.classList.toggle("on", x === b)); newRound();
    }));
    segs("#mMode", "mode"); segs("#mSize", "size");
    $("mNew").onclick = newRound;
    $("mReveal").onclick = () => { st.left.forEach(n => { if (!st.done[n]) st.done[n] = textOf(n); }); st.revealed = true; st.sel = null; render(); };
    $("mTable").innerHTML = `<tr><th>Cytokine</th><th>Main function</th><th>Main source</th></tr>` + CYTOKINES.map(c => `<tr><td><b>${esc(c.name)}</b></td><td>${esc(c.func)}</td><td>${esc(c.source)}</td></tr>`).join("");
    newRound();
  }
  return { init };
})();
