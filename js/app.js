/* Routing, theme, sub-navigation */
(() => {
  const views = ["home", "quiz", "t-cell-lab", "b-cell-lab", "cytokine-match", "summary"];
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

  Models.init();
  Quiz.init();
  Match.init();
  route();
})();
