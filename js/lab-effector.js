/* Antibody Lab: humoral effector mechanisms (isotype × effector matrix, FcRn recycling, maternal transfer) */
const EffLab = (() => {
  const $ = id => document.getElementById(id);
  const toggle = (key, label, sub, on) => `<div class="tg ${on ? "on" : ""}" data-k="${key}"><div>${label}${sub ? `<small>${sub}</small>` : ""}</div><span class="sw"></span></div>`;
  const wireToggles = (root, st, cb) => root.querySelectorAll(".tg").forEach(t => t.addEventListener("click", () => { st[t.dataset.k] = !st[t.dataset.k]; t.classList.toggle("on", st[t.dataset.k]); cb(); }));

  /* ---------------- 1. Isotype × effector matrix ---------------- */
  const COLS = [
    ["neut", "Neutralization", "Fab blocks microbe or toxin binding to host cells"],
    ["opso", "Opsonization (FcγRI)", "Phagocytosis + activation of macrophages and neutrophils"],
    ["comp", "Complement activation", "Lysis, C3b opsonization, inflammation"],
    ["adcc", "ADCC (CD16)", "NK cell perforin/granzyme killing"],
    ["fce", "Mast cell / eosinophil (FcεRI)", "Degranulation: helminths, allergy"],
    ["half", "Long half-life (FcRn)", "~21 days by endosomal recycling"],
    ["plac", "Crosses placenta (FcRn)", "Passive immunity to the fetus"],
    ["muc", "Into mucosal lumen (pIgR)", "Transcytosis of dimeric IgA; also into milk"]
  ];
  const ISO = {
    IgM: { note: "Pentamer; first isotype made; predominates in blood with IgG. Half-life ~2 days.", f: { comp: 1 } },
    IgG: { note: "IgG1/IgG3 per lecture. Blood and extracellular fluid; the only isotype that reaches the fetus.", f: { neut: 1, opso: 1, comp: 1, adcc: 1, half: 1, plac: 1 } },
    IgA: { note: "Dimeric IgA in secretions (gut, airway, milk); monomeric IgA in extracellular fluid.", f: { neut: 1, muc: 1 } },
    IgE: { note: "Mostly bound to mast cells just under epithelial surfaces. Half-life in serum ~12 hours.", f: { fce: 1 } }
  };
  const KO = {
    fab: ["Fab fragments only (no Fc)", "Antigen binding intact", c => c === "neut"],
    fcg1: ["FcγRI (CD64) blocked", "Macrophages, neutrophils", c => c !== "opso"],
    cd16: ["FcγRIIIA (CD16) blocked", "NK cells", c => c !== "adcc"],
    fce: ["FcεRI blocked", "Mast cells, basophils, eosinophils", c => c !== "fce"],
    c3: ["Complement (C3) deficiency", "", c => c !== "comp"],
    fcrn: ["FcRn knockout", "Endothelium, phagocytes, placenta", c => c !== "half" && c !== "plac"],
    pigr: ["pIgR knockout", "Mucosal and mammary epithelium", c => c !== "muc"],
    fc2b: ["FcγRIIB loss-of-function", "Inhibitory receptor", () => true]
  };
  const KO_NOTE = {
    fab: "Without an Fc region, only neutralization survives. That's the lecture's point: neutralization is entirely a Fab function, and every other effector function needs Fc.",
    fcg1: "IgG1/IgG3-coated microbes are no longer taken up through the high-affinity FcγRI, and the phagocyte isn't activated (less ROS, NO, lysosomal enzymes). IgM → C3b → complement-receptor uptake still works.",
    cd16: "NK cells can't recognize IgG-coated infected or tumor cells, so ADCC is lost. Their antibody-independent (innate) killing is unaffected.",
    fce: "IgE can't arm mast cells, basophils or eosinophils, so there's no degranulation against helminths (and no immediate allergic response).",
    c3: "Complement-dependent lysis, C3b opsonization and complement-driven inflammation are lost. IgM loses its main effector function, so early defense against encapsulated bacteria suffers most.",
    fcrn: "IgG is no longer rescued in acidic endosomes and is degraded in lysosomes like other plasma proteins, so its half-life falls sharply. Placental transfer is also lost, and the newborn has no maternal IgG.",
    pigr: "Dimeric IgA is still made in the lamina propria (serum IgA normal or high) but can't be carried into the lumen or into milk, so mucosal neutralization fails.",
    fc2b: "No effector function is lost. Instead the brake is gone: no B cell feedback inhibition (more antibody, risk of autoantibodies) and no attenuation of inflammation by myeloid cells, so immune complexes provoke exaggerated inflammation."
  };
  function matrix() {
    const root = $("m-e-iso");
    const st = { iso: "IgG" }; Object.keys(KO).forEach(k => st[k] = false);
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Knock something out</h3><div class="toggles">${Object.entries(KO).map(([k, [l, s]]) => toggle(k, l, s, false)).join("")}</div>
        <p class="note" style="margin-top:10px">Try: Fab only · FcRn KO · C3 deficiency, and watch which isotype loses the most.</p></div>
      <div class="card"><h3>Isotype → effector functions</h3>
        <div class="seg" id="isoSeg">${Object.keys(ISO).map(k => `<button data-v="${k}" class="${k === "IgG" ? "on" : ""}">${k}</button>`).join("")}</div>
        <div class="note" id="isoNote" style="margin:8px 0 10px"></div>
        <div class="tablewrap"><table class="sheet" id="isoTable"></table></div>
        <div class="outcome" id="isoOut"></div></div></div>`;
    const draw = () => {
      const kos = Object.keys(KO).filter(k => st[k]);
      const alive = c => kos.every(k => KO[k][2](c));
      $("isoNote").textContent = ISO[st.iso].note;
      let h = `<tr><th>Function</th>${Object.keys(ISO).map(i => `<th style="${i === st.iso ? "color:var(--accent)" : ""}">${i}</th>`).join("")}</tr>`;
      COLS.forEach(([c, label, sub]) => {
        h += `<tr><td><b>${label}</b><div class="note">${sub}</div></td>${Object.keys(ISO).map(i => {
          const base = ISO[i].f[c], on = base && alive(c);
          const cell = !base ? `<span class="note">—</span>` : on ? `<b class="yes">✓</b>` : `<b class="no">✗ lost</b>`;
          return `<td style="text-align:center;${i === st.iso ? "background:color-mix(in srgb,var(--accent) 10%,transparent)" : ""}">${cell}</td>`;
        }).join("")}</tr>`;
      });
      $("isoTable").innerHTML = h;
      const lost = COLS.filter(([c]) => ISO[st.iso].f[c] && !alive(c)).map(x => x[1]);
      const kept = COLS.filter(([c]) => ISO[st.iso].f[c] && alive(c)).map(x => x[1]);
      let out = `<div class="verdict ${lost.length ? "no" : "yes"}">${st.iso}: ${kept.length ? kept.length + " function" + (kept.length > 1 ? "s" : "") + " intact" : "no effector function left"}${lost.length ? ", " + lost.length + " lost" : ""}</div>`;
      out += kos.length ? kos.map(k => `<div class="callout" style="margin-top:8px"><b>${KO[k][0]}:</b> ${KO_NOTE[k]}</div>`).join("")
        : `<div class="callout">Every Fc-dependent function starts only after Fab has bound antigen. The isotype (heavy-chain constant region) decides which Fc receptors and pathways it can engage.</div>`;
      $("isoOut").innerHTML = out;
    };
    root.querySelectorAll("#isoSeg button").forEach(b => b.addEventListener("click", () => { st.iso = b.dataset.v; root.querySelectorAll("#isoSeg button").forEach(x => x.classList.toggle("on", x === b)); draw(); }));
    wireToggles(root, st, draw); draw();
  }

  /* ---------------- 2. FcRn recycling ---------------- */
  function fcrn() {
    const root = $("m-e-fcrn");
    const DEF = { endo: 6.0, ext: 7.4 };
    const st = { fcrn: true, endo: DEF.endo, ext: DEF.ext, ab: "IgG" };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Conditions</h3>
        <div class="seg" id="fcAb"><button data-v="IgG" class="on">IgG</button><button data-v="IgM">IgM</button></div>
        <div class="toggles" style="margin-top:12px">${toggle("fcrn", "FcRn expressed", "Endothelial cells, phagocytes", true)}</div>
        <label class="note" style="display:block;margin-top:14px">Endosome pH: <b id="vEndo"></b><input type="range" id="rEndo" min="5.0" max="7.6" step="0.1" value="${DEF.endo}" style="width:100%"></label>
        <label class="note" style="display:block;margin-top:10px">Extracellular pH: <b id="vExt"></b><input type="range" id="rExt" min="6.0" max="7.6" step="0.1" value="${DEF.ext}" style="width:100%"></label>
        <button class="btn" id="fcReset" style="width:100%;justify-content:center;margin-top:12px">↺ Reset to physiological pH</button>
        <p class="note" style="margin-top:10px">FcRn binds IgG Fc at acidic pH (&lt;7) and lets go at neutral/basic pH (&gt;7).</p></div>
      <div class="card"><div class="stage" id="fcSvg"></div><div class="facts" id="fcFacts"></div><div class="outcome" id="fcOut"></div></div></div>`;
    const draw = () => {
      $("vEndo").textContent = st.endo.toFixed(1); $("vExt").textContent = st.ext.toFixed(1);
      const bind = st.fcrn && st.ab === "IgG" && st.endo < 7.0;
      const release = st.ext > 7.0;
      let fate, cls, half, e;
      if (st.ab === "IgM") { fate = "Degraded in lysosome"; cls = "no"; half = "~2 days"; e = "FcRn binds only the Fc region of IgG. IgM taken up by endothelial cells goes to lysosomes, which is one reason its half-life is short."; }
      else if (!st.fcrn) { fate = "Degraded in lysosome"; cls = "no"; half = "Short (days)"; e = "No FcRn means nothing pulls IgG out of the degradation pathway. IgG behaves like any other plasma protein, and maternal IgG couldn't cross the placenta either."; }
      else if (!bind) { fate = "Degraded in lysosome"; cls = "no"; half = "Short (days)"; e = "FcRn is present but the endosome isn't acidic enough for it to bind IgG Fc, so the IgG is sorted to lysosomes."; }
      else if (!release) { fate = "Trapped on FcRn"; cls = "mid"; half = "Not in circulation"; e = "IgG is captured and recycled to the surface, but at this extracellular pH FcRn doesn't release it. The complex is taken back in instead of IgG returning to the blood. Release depends on the shift to pH >7."; }
      else { fate = "Recycled to blood"; cls = "yes"; half = "~21 days"; e = "Acidic endosome → FcRn binds IgG Fc → complex sorted to a recycling endosome → neutral blood pH releases intact IgG. This is why switching to IgG prolongs antibody activity."; }
      const path = fate.startsWith("Recycled") ? "rec" : fate.startsWith("Trapped") ? "trap" : "deg";
      const hl = p => path === p ? "var(--accent)" : "var(--line)";
      const abCol = st.ab === "IgG" ? "var(--accent)" : "var(--warn)";
      $("fcSvg").innerHTML = `<svg viewBox="0 0 560 250" font-family="inherit">
        <path d="M10 40 Q140 20 280 40 T550 40" style="fill:none;stroke:var(--muted);stroke-width:2"/>
        <text x="20" y="22" font-size="12" style="fill:var(--muted)">Blood (pH ${st.ext.toFixed(1)})</text>
        <text x="460" y="70" font-size="12" style="fill:var(--muted)">Endothelial cell</text>
        <circle cx="100" cy="85" r="22" style="fill:var(--panel);stroke:var(--muted);stroke-width:1.5"/><text x="100" y="90" text-anchor="middle" font-size="12" font-weight="700" style="fill:${abCol}">${st.ab}</text>
        <text x="100" y="124" text-anchor="middle" font-size="11" style="fill:var(--muted)">uptake</text>
        <line x1="100" y1="128" x2="100" y2="150" style="stroke:var(--muted);stroke-width:2"/>
        <circle cx="100" cy="190" r="38" style="fill:color-mix(in srgb,var(--warn) ${Math.round((7.6 - st.endo) * 14)}%,var(--panel));stroke:var(--warn);stroke-width:2"/>
        <text x="100" y="186" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--ink)">Endosome</text><text x="100" y="202" text-anchor="middle" font-size="11" style="fill:var(--ink)">pH ${st.endo.toFixed(1)}</text>
        <text x="100" y="245" text-anchor="middle" font-size="11" font-weight="700" style="fill:${bind ? "var(--ok)" : "var(--bad)"}">${bind ? "FcRn bound" : "not bound"}</text>
        <path d="M138 180 C220 150 260 110 330 100" style="fill:none;stroke:${hl(path === "trap" ? "trap" : "rec")};stroke-width:3"/>
        <circle cx="365" cy="100" r="30" style="fill:var(--panel);stroke:${hl(path === "trap" ? "trap" : "rec")};stroke-width:2"/><text x="365" y="98" text-anchor="middle" font-size="11" style="fill:var(--ink)">Recycling</text><text x="365" y="111" text-anchor="middle" font-size="11" style="fill:var(--ink)">endosome</text>
        <path d="M385 75 L420 42" style="stroke:${hl("rec")};stroke-width:3"/>
        <text x="428" y="30" font-size="12" font-weight="700" style="fill:${path === "rec" ? "var(--ok)" : path === "trap" ? "var(--warn)" : "var(--muted)"}">${path === "rec" ? "IgG released ✓" : path === "trap" ? "not released ✗" : "—"}</text>
        <path d="M138 200 L300 205" style="stroke:${hl("deg")};stroke-width:3"/>
        <circle cx="340" cy="205" r="30" style="fill:color-mix(in srgb,var(--bad) ${path === "deg" ? 22 : 6}%,var(--panel));stroke:${path === "deg" ? "var(--bad)" : "var(--line)"};stroke-width:2"/><text x="340" y="209" text-anchor="middle" font-size="11" style="fill:var(--ink)">Lysosome</text>
      </svg>`;
      $("fcFacts").innerHTML = [["Fate", fate, cls], ["Serum half-life", half, cls], ["Placental transfer", st.ab === "IgG" && st.fcrn ? "Possible" : "No", st.ab === "IgG" && st.fcrn ? "yes" : "no"]].map(([k, v, c]) => `<div class="fact">${k}<b class="${c}">${v}</b></div>`).join("");
      $("fcOut").innerHTML = `<div class="callout ${cls === "yes" ? "ok" : cls === "no" ? "bad" : "warn"}">${e}</div>`;
    };
    $("fcReset").addEventListener("click", () => {
      st.endo = DEF.endo; st.ext = DEF.ext;
      $("rEndo").value = DEF.endo; $("rExt").value = DEF.ext;
      draw();
    });
    $("rEndo").addEventListener("input", e => { st.endo = +e.target.value; draw(); });
    $("rExt").addEventListener("input", e => { st.ext = +e.target.value; draw(); });
    root.querySelectorAll("#fcAb button").forEach(b => b.addEventListener("click", () => { st.ab = b.dataset.v; root.querySelectorAll("#fcAb button").forEach(x => x.classList.toggle("on", x === b)); draw(); }));
    wireToggles(root, st, draw); draw();
  }

  /* ---------------- 3. Maternal → fetal/neonatal transfer ---------------- */
  function infant() {
    const root = $("m-e-infant");
    const st = { plac: true, nfcrn: true, breast: true, pigr: true };
    root.innerHTML = `<div class="grid g2" style="grid-template-columns:minmax(260px,1fr) 2fr">
      <div class="card"><h3>Mother &amp; infant</h3><div class="toggles">
        ${toggle("plac", "Placental FcRn (syncytiotrophoblast)", "Moves maternal IgG to the fetus", true)}
        ${toggle("nfcrn", "Infant FcRn", "Recycles the IgG it received", true)}
        ${toggle("breast", "Breastfed", "Colostrum and milk", true)}
        ${toggle("pigr", "Mammary pIgR", "Moves dimeric IgA into milk", true)}
      </div><p class="note" style="margin-top:10px">The curve is illustrative: a log scale of relative IgG. The dashed line is a rough protective level.</p></div>
      <div class="card"><h3>Infant antibody, birth → 12 months</h3><div class="stage" id="infSvg"></div><div class="facts" id="infFacts"></div><div class="outcome" id="infOut"></div></div></div>`;
    const draw = () => {
      const t12 = st.nfcrn ? 21 : 5;
      const start = st.plac ? 1000 : 2;
      const mat = m => start * Math.pow(0.5, m * 30.4 / t12);
      const own = m => 300 / (1 + Math.exp(-(m - 7) / 0.9));
      const X = m => 60 + m * 38, Y = v => 200 - Math.max(0, Math.log10(Math.max(v, 1))) / 3 * 175;
      const pts = f => Array.from({ length: 49 }, (_, i) => i / 4).map((m, i) => `${i ? "L" : "M"}${X(m).toFixed(1)} ${Y(f(m)).toFixed(1)}`).join(" ");
      const thr = 4;
      const lose = (() => { for (let m = 0; m <= 12; m += 0.05) if (mat(m) < thr) return m; return 12; })();
      const gapStart = lose, gapEnd = (() => { for (let m = 0; m <= 12; m += 0.05) if (own(m) > thr && m >= 0) return m; return 12; })();
      $("infSvg").innerHTML = `<svg viewBox="0 0 540 250" font-family="inherit">
        <line x1="60" y1="200" x2="520" y2="200" style="stroke:var(--muted);stroke-width:1.5"/><line x1="60" y1="20" x2="60" y2="200" style="stroke:var(--muted);stroke-width:1.5"/>
        ${[0, 3, 6, 9, 12].map(m => `<text x="${X(m)}" y="216" text-anchor="middle" font-size="11" style="fill:var(--muted)">${m}</text>`).join("")}
        <text x="290" y="240" text-anchor="middle" font-size="12" style="fill:var(--muted)">Age (months)</text>
        <text x="18" y="110" font-size="12" style="fill:var(--muted)" transform="rotate(-90 18 110)">Serum IgG (log)</text>
        <line x1="60" y1="${Y(thr)}" x2="520" y2="${Y(thr)}" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:4 4"/>
        ${gapEnd > gapStart ? `<rect x="${X(gapStart)}" y="20" width="${X(gapEnd) - X(gapStart)}" height="180" style="fill:color-mix(in srgb,var(--bad) 10%,transparent)"/><text x="${(X(gapStart) + X(gapEnd)) / 2}" y="34" text-anchor="middle" font-size="11" style="fill:var(--bad)">gap</text>` : ""}
        <path d="${pts(mat)}" style="fill:none;stroke:var(--accent);stroke-width:3"/>
        <path d="${pts(own)}" style="fill:none;stroke:var(--ok);stroke-width:3;stroke-dasharray:6 4"/>
        <text x="${X(0.3)}" y="${Y(mat(0)) - 6}" font-size="12" font-weight="700" style="fill:var(--accent)">maternal IgG</text>
        <text x="${X(9.5)}" y="${Y(own(9.5)) - 8}" font-size="12" font-weight="700" style="fill:var(--ok)">infant's own IgG</text>
      </svg>`;
      const gutIgA = st.breast && st.pigr;
      $("infFacts").innerHTML = [
        ["IgG at birth", st.plac ? "≈ mother's" : "Very low", st.plac ? "yes" : "no"],
        ["Maternal IgG protective until", st.plac ? `~${lose.toFixed(1)} mo` : "—", st.plac && lose > 4 ? "yes" : "no"],
        ["Gut-lumen sIgA from milk", gutIgA ? "Yes" : "No", gutIgA ? "yes" : "no"],
        ["Infant serum IgA", "Low (milk IgA isn't absorbed)", "mid"]
      ].map(([k, v, c]) => `<div class="fact">${k}<b class="${c}">${v}</b></div>`).join("");
      const n = [];
      n.push(st.plac ? "<b>Placental FcRn:</b> maternal IgG is carried across the syncytiotrophoblast, so the newborn starts with essentially the mother's IgG repertoire." : "<b>No placental transfer:</b> the newborn has almost no IgG and is unprotected until its own response develops.");
      if (st.plac) n.push(st.nfcrn ? "<b>Infant FcRn</b> recycles the maternal IgG (half-life ~21 days), stretching protection to roughly the first 6 months." : "<b>No infant FcRn:</b> maternal IgG isn't rescued from lysosomes and disappears within weeks, so the gap opens early.");
      n.push(!st.breast ? "<b>Not breastfed:</b> no maternal sIgA coats the infant gut." : !st.pigr ? "<b>No mammary pIgR:</b> dimeric IgA can't be carried into milk, so the gut gets no sIgA even with breastfeeding." : "<b>Milk sIgA</b> (pIgR transcytosis across mammary epithelium) coats the infant's GI mucosa and neutralizes locally. It isn't absorbed, so serum IgA stays low. Colostrum adds a small amount of IgG for the gut.");
      $("infOut").innerHTML = n.map(x => `<div class="callout" style="margin-top:8px">${x}</div>`).join("");
    };
    wireToggles(root, st, draw); draw();
  }

  return { init() { matrix(); fcrn(); infant(); } };
})();
