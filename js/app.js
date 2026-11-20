/* Routing, theme, sub-navigation */
(() => {
  const views = ["home", "quiz", "t-cell-lab", "b-cell-lab", "antibody-lab", "hyper-lab", "tolerance-lab", "cytokine-match", "summary"];
  function route() {
    const h = location.hash.replace("#", "");
    const v = views.includes(h) ? h : "home";
    document.body.dataset.view = v;
    views.forEach(x => document.getElementById("view-" + x).classList.toggle("active", x === v));
    document.querySelectorAll("#mainNav a").forEach(a => a.classList.toggle("active", a.dataset.view === v));
    window.scrollTo({ top: 0 });
  }
  window.addEventListener("hashchange", route);

  const btn = document.getElementById("themeBtn");
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    btn.textContent = t === "dark" ? "☀ Light" : "☾ Dark";
    try { localStorage.setItem("iimid-theme", t); } catch (e) {}
  }
  btn.onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  let saved = "dark"; try { saved = localStorage.getItem("iimid-theme") || "dark"; } catch (e) {}
  setTheme(saved);

  document.querySelectorAll(".subnav").forEach(nav => nav.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
    nav.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    const sec = nav.parentElement;
    sec.querySelectorAll(".model").forEach(m => m.classList.toggle("on", m.id === "m-" + b.dataset.model));
  })));

  // Home: per-lecture coverage, counted from QUESTIONS so new batches show up automatically
  (() => {
    const el = document.getElementById("homeCov");
    if (!el) return;
    const LECS = [
      ["T", "t", "Cell-mediated immunity"],
      ["B", "b", "B cell activation"],
      ["E", "e", "Humoral effector mechanisms"],
      ["H", "h", "Hypersensitivity"],
      ["A", "a", "Tolerance & autoimmunity"]
    ];
    const figs = QUESTIONS.filter(q => q.figure).length;
    el.innerHTML = `<h3 style="margin-top:0">What's covered</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px 10px;align-items:center">
        ${LECS.map(([code, cls, label]) => {
          const n = QUESTIONS.filter(q => q.lec === code).length;
          return `<span class="chip ${cls}">${label} · ${n}</span>`;
        }).join("")}
      </div>
      <p class="note" style="margin-bottom:0">${QUESTIONS.length} questions in total, ${figs} of them built around a figure or a set of experimental results. Every lecture now has an interactive lab and its own quick sheets.</p>`;
  })();

  Models.init();
  EffLab.init();
  HyperLab.init();
  TolLab.init();
  Quiz.init();
  Match.init();
  route();
})();
