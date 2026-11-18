/* Practice quiz: one question at a time, question map, flags, cross-out, saved progress */
const Quiz = (() => {
  const KEY = "iimid-quiz-v1";
  let st = { ans: {}, flag: {}, cross: {}, optOrder: {} };
  let list = [], cur = 0, seqOrder = [];

  const load = () => { try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) st = Object.assign(st, s); } catch (e) {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const byId = id => QUESTIONS.find(q => q.id === id);
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function optOrder(q) {
    if (!st.optOrder[q.id] || st.optOrder[q.id].length !== q.options.length) st.optOrder[q.id] = shuffle(q.options.map((_, i) => i));
    return st.optOrder[q.id];
  }
  function status(id) {
    if (st.ans[id] === undefined) return "un";
    return st.ans[id] === byId(id).answer ? "c" : "w";
  }
  function buildList(keepCurrent) {
    const curId = list[cur];
    const L = $("fLecture").value, S = $("fStatus").value, O = $("fOrder").value, P = $("fPriority").value, D = $("fDiff").value;
    const rank = { must: 0, should: 1, nice: 2 };
    let base = O === "seq" ? QUESTIONS.map(q => q.id) : seqOrder.slice();
    if (O === "prio") base.sort((a, b) => rank[byId(a).priority] - rank[byId(b).priority]);
    let ids = base.filter(id => {
      const q = byId(id);
      if (L !== "all" && q.lec !== L) return false;
      if (P !== "all" && q.priority !== P) return false;
      if (D !== "all" && q.difficulty !== D) return false;
      if (S === "un" && st.ans[id] !== undefined) return false;
      if (S === "w" && status(id) !== "w") return false;
      if (S === "f" && !st.flag[id]) return false;
      return true;
    });
    list = ids;
    cur = keepCurrent && ids.includes(curId) ? ids.indexOf(curId) : 0;
  }
  function render() {
    const card = $("qCard");
    if (!list.length) { card.innerHTML = '<div class="empty">No questions match these filters.</div>'; renderSide(); return; }
    const q = byId(list[cur]);
    const order = optOrder(q);
    const chosen = st.ans[q.id];
    const done = chosen !== undefined;
    const crossed = st.cross[q.id] || [];
    let h = `<div class="qhead"><div><span class="chip ${q.lec === "T" ? "t" : "b"}">${q.lec === "T" ? "Cell-mediated" : "Humoral"}</span> <span class="chip prio-${q.priority}">${{ must: "Must know", should: "Should know", nice: "Nice to know" }[q.priority]}</span> <span class="chip">${q.difficulty[0].toUpperCase() + q.difficulty.slice(1)}</span> <span class="chip">${esc(q.topic)}</span>${q.figure ? ' <span class="chip">🖼 Figure</span>' : ""}</div>
      <div class="note">Question ${cur + 1} of ${list.length} <button class="btn" id="flagBtn" style="margin-left:8px">${st.flag[q.id] ? "★ Flagged" : "☆ Flag"}</button></div></div>
      ${q.figure ? `<div class="figure">${FIGS[q.figure]}${q.caption ? `<div class="cap">${esc(q.caption)}</div>` : ""}</div>` : ""}<p class="stem">${esc(q.stem)}</p><div id="opts">`;
    order.forEach((oi, k) => {
      let cls = "opt";
      if (done) { cls += " locked"; if (oi === q.answer) cls += " correct"; else if (oi === chosen) cls += " wrong"; }
      if (crossed.includes(oi) && !done) cls += " crossed";
      h += `<div class="${cls}" data-oi="${oi}" role="button" tabindex="0"><span class="ltr">${String.fromCharCode(65 + k)}</span><span class="txt">${esc(q.options[oi])}</span>${done ? "" : `<button class="x" title="Cross out" data-x="${oi}">×</button>`}</div>`;
    });
    h += "</div>";
    if (done) {
      const ok = chosen === q.answer;
      h += `<div class="callout ${ok ? "ok" : "bad"} explain"><b>${ok ? "✓ Correct" : "✗ Incorrect. Answer: " + String.fromCharCode(65 + order.indexOf(q.answer)) + ". " + esc(q.options[q.answer])}</b><div style="margin-top:6px">${esc(q.explanation)}</div><div class="ref">📎 ${esc(q.ref)}</div></div>`;
    }
    h += `<div class="qnav"><button class="btn" id="prevBtn" ${cur === 0 ? "disabled" : ""}>← Previous</button>${done ? '<button class="btn" id="retryBtn">↻ Retry</button>' : ""}<button class="btn primary" id="nextBtn" ${cur >= list.length - 1 ? "disabled" : ""}>Next →</button></div>`;
    card.innerHTML = h;

    card.querySelectorAll(".opt").forEach(el => el.addEventListener("click", e => {
      const oi = +el.dataset.oi;
      if (e.target.dataset.x !== undefined || e.shiftKey) { e.stopPropagation(); toggleCross(q.id, oi); return; }
      choose(q.id, oi);
    }));
    $("flagBtn").onclick = () => toggleFlag(q.id);
    $("prevBtn").onclick = () => go(-1);
    $("nextBtn").onclick = () => go(1);
    if ($("retryBtn")) $("retryBtn").onclick = () => retry(q.id);
    renderSide();
  }
  function renderSide() {
    const total = QUESTIONS.length;
    const answered = QUESTIONS.filter(q => st.ans[q.id] !== undefined);
    const correct = answered.filter(q => st.ans[q.id] === q.answer).length;
    $("qProg").style.width = (answered.length / total * 100) + "%";
    $("sAns").textContent = `${answered.length}/${total}`;
    $("sCor").textContent = `${correct} (${answered.length ? Math.round(correct / answered.length * 100) : 0}%)`;
    const map = $("qMap"); map.innerHTML = "";
    list.forEach((id, i) => {
      const b = document.createElement("button");
      const s = status(id);
      b.className = (s !== "un" ? s : "") + (st.flag[id] ? " f" : "") + (i === cur ? " cur" : "");
      b.textContent = i + 1; b.title = byId(id).topic;
      b.onclick = () => { cur = i; render(); };
      map.appendChild(b);
    });
  }
  function choose(id, oi) {
    if (st.ans[id] !== undefined) return;
    if ((st.cross[id] || []).includes(oi)) return;
    st.ans[id] = oi; save(); render();
  }
  function toggleCross(id, oi) {
    if (st.ans[id] !== undefined) return;
    const c = st.cross[id] || [];
    st.cross[id] = c.includes(oi) ? c.filter(x => x !== oi) : c.concat(oi);
    save(); render();
  }
  function toggleFlag(id) { st.flag[id] = !st.flag[id]; if (!st.flag[id]) delete st.flag[id]; save(); render(); }
  function retry(id) { delete st.ans[id]; delete st.cross[id]; delete st.optOrder[id]; save(); render(); }
  function go(d) { const n = cur + d; if (n >= 0 && n < list.length) { cur = n; render(); window.scrollTo({ top: 0, behavior: "smooth" }); } }

  function keys(e) {
    if (document.body.dataset.view !== "quiz" || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName) || !list.length) return;
    const q = byId(list[cur]);
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "f" || e.key === "F") toggleFlag(q.id);
    else if (e.key === "r" || e.key === "R") retry(q.id);
    else if (/^[1-9]$/.test(e.key)) { const oi = optOrder(q)[+e.key - 1]; if (oi !== undefined) choose(q.id, oi); }
  }

  function init() {
    load();
    seqOrder = shuffle(QUESTIONS.map(q => q.id));
    ["fLecture", "fStatus", "fOrder", "fPriority", "fDiff"].forEach(id => $(id).addEventListener("change", () => { buildList(false); render(); }));
    $("clearFilters").onclick = () => { $("fLecture").value = "all"; $("fStatus").value = "all"; $("fPriority").value = "all"; $("fDiff").value = "all"; $("fOrder").value = "shuffle"; buildList(false); render(); };
    $("clearAll").onclick = () => {
      const btn = $("clearAll");
      if (btn.dataset.armed) { st = { ans: {}, flag: {}, cross: {}, optOrder: {} }; save(); seqOrder = shuffle(QUESTIONS.map(q => q.id)); buildList(false); render(); btn.textContent = "Clear all answers & flags"; delete btn.dataset.armed; }
      else { btn.dataset.armed = 1; btn.textContent = "Click again to confirm"; setTimeout(() => { if (btn.dataset.armed) { delete btn.dataset.armed; btn.textContent = "Clear all answers & flags"; } }, 3000); }
    };
    document.addEventListener("keydown", keys);
    $("homeQCount").textContent = QUESTIONS.length;
    buildList(false); render();
  }
  return { init };
})();
