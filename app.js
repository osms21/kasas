/* Kasas — peygamber kıssalarıyla okuma temelli Arapça
   Saf JS, derleme gerektirmez. GitHub Pages'te doğrudan çalışır. */
(function () {
  "use strict";

  const CONFIG = {
    feedbackUrl: "" // Pilot için geri bildirim formu bağlantısı (Google Form vb.). Boşsa gizlenir.
  };

  const CAT = window.CATALOG || [];
  let CUR = null; // açık olan kıssa
  const G = window.GLOSSARY || [];
  const app = document.getElementById("app");

  /* ---------------- durum ---------------- */
  const KEY = "kasas-v1";
  const DEF = { hareke: true, vanish: false, rate: 0.8, font: 1, showRoot: false, noStops: false, units: {} };
  let S = load();
  if (S.vanish === true) S.vanish = "orta";      // eski sürümden geçiş
  function load() {
    try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return Object.assign({}, DEF); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function U(id, story) {
    const k = (story || CUR).id + ":" + id;
    if (!S.units[k]) S.units[k] = { ans: {}, notes: {}, order: [] };
    return S.units[k];
  }
  const base = () => "#/k/" + CUR.id;

  // kıssa dosyasını gerektiğinde yükle
  const loading = {};
  function loadStory(id) {
    const have = (window.STORIES || []).find((x) => x.id === id);
    if (have) return Promise.resolve(have);
    const c = CAT.find((x) => x.id === id);
    if (!c || !c.file) return Promise.resolve(null);
    if (!loading[id]) loading[id] = new Promise((res) => {
      const sc = document.createElement("script");
      sc.src = c.file;
      sc.onload = () => res((window.STORIES || []).find((x) => x.id === id) || null);
      sc.onerror = () => res(null);
      document.head.appendChild(sc);
    });
    return loading[id];
  }

  /* ---------------- Arapça yardımcılar ---------------- */
  const DIAC = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g;
  const stripD = (s) => s.replace(DIAC, "");
  const norm = (s) => stripD(s).replace(/[أإآٱ]/g, "ا").replace(/[^ء-ي]/g, "");
  const MAP = new Map();
  G.forEach((e, i) => e.f.forEach((f) => MAP.set(f, i)));
  const PREF = ["بال", "كال", "لل", "ال", "ب", "ل", "ك", "س"];
  const SUFF = ["كما", "هما", "كم", "هم", "ها", "نا", "ني", "ه", "ك", "ي"]; // zamir ekleri
  const VSUFF = ["وه", "وا", "ون", "ين", "ان", "تم", "ات", "ت", "ا"]; // çoğul/şahıs ekleri, tenvin elifi
  const lookCache = new Map();
  const OV = window.GLOSS_OVERRIDES || {};

  function lookup(tok) {
    const n = norm(tok);
    if (n.length < 2) return -1;
    const VOV = (CUR && CUR.voverrides) || {};           // harekeli biçime göre düzeltme (ör. الْمُلْكُ ≠ الْمَلِكُ)
    if (Object.prototype.hasOwnProperty.call(VOV, tok)) return MAP.has(VOV[tok]) ? MAP.get(VOV[tok]) : -1;
    const SOV = (CUR && CUR.overrides) || {};            // kıssaya özel düzeltmeler (ör. عَادٌ ≠ عَادَ)
    const ck = (CUR ? CUR.id : "") + "|" + n;
    if (lookCache.has(ck)) return lookCache.get(ck);
    for (const ov of [SOV, OV]) if (Object.prototype.hasOwnProperty.call(ov, n)) {   // elle düzeltilmiş eşleşme
      const hit = ov[n] === null ? -1 : (MAP.has(ov[n]) ? MAP.get(ov[n]) : -1);
      lookCache.set(ck, hit); return hit;
    }
    const bases = [n];
    if (/^[وف]/.test(n) && n.length > 2) bases.push(n.slice(1));
    const c1 = bases.slice();
    bases.forEach((b) => PREF.forEach((p) => { if (b.startsWith(p) && b.length - p.length >= 2) c1.push(b.slice(p.length)); }));
    const all = c1.slice();
    const strip = (list, from, to) => from.forEach((c) => list.forEach((s) => {
      if (c.endsWith(s) && c.length - s.length >= 2) {
        const r = c.slice(0, -s.length);
        to.push(r);
        if (r.endsWith("ت")) to.push(r.slice(0, -1) + "ة");
      }
    }));
    const c2 = []; strip(SUFF, c1, c2); all.push(...c2);       // zamir eki
    const c3 = []; strip(VSUFF, c1.concat(c2), c3); all.push(...c3); // fiil/çoğul eki
    let hit = -1;
    for (const c of all) if (MAP.has(c)) { hit = MAP.get(c); break; }
    lookCache.set(ck, hit);
    return hit;
  }

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const showAr = (s) => (S.hareke ? s : stripD(s));
  // Türkçe metin içindeki Arapça parçaları Arapça yazı tipine al
  const mix = (s) => esc(s).replace(/[\u0600-\u06FF][\u0600-\u06FF\s،؟]*[\u0600-\u06FF؟]|[\u0600-\u06FF]/g, (m) => `<span class="ar-inline">${showAr(m)}</span>`);

  // basit tohumlu rastgelelik (yeniden çizimde aynı sıra)
  function seedFrom(str) { let h = 1779033703 ^ str.length; for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); } return h >>> 0; }
  function rng(seed) { let a = seed; return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(arr, key) { const r = rng(seedFrom(key)); const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // gizlenebilir kelime: kökü olan içerik kelimesi; özel ad ve çok sık yardımcı fiiller hariç
  const canVanish = (e) => !e.n && !!e.r && !/^(كَانَ|قَالَ)/.test(e.a);
  const VANISH = { az: 0.15, orta: 0.3, cok: 0.45 };
  const shortTr = (t) => t.split(/[;(]/)[0].trim();

  // Arapça metni kelimelere ayırıp sözlükteki kelimeleri tıklanabilir yap
  // opts.vanish = { level, key, rev } → bazı içerik kelimeleri boşluk olur (0: boş, 1: Türkçe ipucu, 2: açık)
  function arHTML(text, opts) {
    opts = opts || {};
    const v = opts.vanish;
    const r = v ? rng(seedFrom(v.level + "|" + v.key)) : null;
    return text.split(/\s+/).map((tok, ti) => {
      const m = tok.match(/^([«"(\[]*)(.*?)([،؟!.:»"),;\]]*)$/);
      const pre = m[1], core = m[2], post = m[3];
      if (!core) return esc(tok);
      const gi = opts.plain ? -1 : lookup(core);
      const shown = esc(showAr(core));
      let inner;
      if (gi >= 0) {
        const e = G[gi];
        const roll = r ? r() : 1;                        // her kelime için sabit zar
        if (r && canVanish(e) && roll < VANISH[v.level]) {
          const gk = `${v.level}|${v.key}|${ti}`;
          const stt = v.rev[gk] || 0;
          inner = `<span class="gap s${stt}" data-gk="${gk}" data-g="${gi}" data-w="${esc(core)}" data-h="${esc(shortTr(e.t))}">${stt === 2 ? shown : stt === 1 ? `<span class="hint">${esc(shortTr(e.t))}</span>` : shown}</span>`;
        } else inner = `<span class="w" data-g="${gi}" data-w="${esc(core)}">${shown}</span>`;
      } else inner = shown;
      return esc(showAr(pre)) + inner + esc(post);
    }).join(" ");
  }

  /* ---------------- ses (tarayıcının metin okuma özelliği) ---------------- */
  let voices = [];
  const hasTTS = "speechSynthesis" in window;
  function loadVoices() { if (hasTTS) voices = speechSynthesis.getVoices(); }
  if (hasTTS) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); updateVoiceWarn(); }; }
  const arVoice = () => voices.find((v) => /^ar/i.test(v.lang));
  // "Tümünü dinle": duraklat / devam et için konum tutulur
  const play = { active: false, idx: 0, hash: "" };
  function speak(text, onend) {
    if (!hasTTS) { toast("Bu tarayıcı sesli okumayı desteklemiyor."); onend && onend(); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/[«»]/g, ""));
    u.lang = "ar-SA";
    const v = arVoice(); if (v) u.voice = v;
    u.rate = S.rate;
    u.onend = () => onend && onend();
    u.onerror = () => onend && onend();
    speechSynthesis.speak(u);
  }
  function stopAll() { play.active = false; if (hasTTS) speechSynthesis.cancel(); document.querySelectorAll(".sent.playing").forEach((e) => e.classList.remove("playing")); updatePlayBtn(); }
  function updatePlayBtn() {
    const b = document.getElementById("playAll"), r = document.getElementById("playRestart");
    if (b) b.textContent = play.active ? "⏸ Duraklat" : play.idx > 0 ? "▶ Devam et" : "▶ Tümünü dinle";
    if (b) b.classList.toggle("on", play.active);
    if (r) r.hidden = !(play.idx > 0);
  }
  function playFrom(u) {
    play.active = true; updatePlayBtn();
    const next = () => {
      document.querySelectorAll(".sent.playing").forEach((e) => e.classList.remove("playing"));
      const rows = [...document.querySelectorAll(".sent")];
      if (!play.active) return;
      if (play.idx >= rows.length) { play.idx = 0; stopAll(); updateProgress(); return; }
      const row = rows[play.idx]; row.classList.add("playing");
      row.scrollIntoView({ block: "center", behavior: "smooth" });
      updateProgress();
      speak(sentText(u, row.dataset.key), () => { if (!play.active) return; play.idx++; next(); });
    };
    next();
  }
  function updateVoiceWarn() {
    const el = document.getElementById("voiceWarn");
    if (!el) return;
    el.hidden = !hasTTS ? false : !!arVoice() || voices.length === 0;
  }

  /* ---------------- küçük arayüz yardımcıları ---------------- */
  let toastT;
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }
  const pop = document.createElement("div");
  pop.className = "pop"; pop.setAttribute("role", "dialog");
  document.body.appendChild(pop);
  let popState = null;
  function showGloss(gi, el) {
    const e = G[gi];
    document.querySelectorAll(".w.active").forEach((x) => x.classList.remove("active"));
    if (el) el.classList.add("active");
    popState = { gi, w: el && el.dataset.w ? el.dataset.w : "" };
    renderPop();
    pop.classList.add("show");
  }
  function renderPop() {
    if (!popState) return;
    const e = G[popState.gi], w = popState.w;
    const base = e.a;
    const same = !w || norm(w) === norm(base.split(/ ج | \/ | - /)[0]);
    pop.innerHTML = `<button class="x" aria-label="Kapat">×</button>
      <div class="row"><button class="icon-btn" data-say="${esc(w || base)}" aria-label="Dinle">🔊</button><div class="ar">${esc(showAr(w || base))}</div></div>
      ${same ? "" : `<div class="base"><span class="lbl">Sözlük biçimi</span><span class="ar-inline">${esc(showAr(base))}</span></div>`}
      <div class="t">${mix(e.t)}</div>
      ${e.r ? `<button class="more-btn" data-rootshow="1">${S.showRoot ? "Ayrıntıyı gizle ▴" : "Ayrıntı ▾"}</button>${S.showRoot ? `<div class="r">Kök: <span class="ar-inline">${e.r}</span></div>` : ""}` : ""}`;
  }
  function hidePop() { pop.classList.remove("show"); document.querySelectorAll(".w.active").forEach((x) => x.classList.remove("active")); }

  // kanıt cümlesi (bölüm.cümle anahtarı) → metin
  function evText(u, key) { const [n, i] = key.split(".").map(Number); const sec = u.sections.find((x) => x.n === n); return sec && sec.s[i] ? sec.s[i][0] : ""; }
  function evHTML(u, keys, label) {
    if (!keys || !keys.length) return "";
    return `<div class="evidence"><span class="ev-label">${label || "📍 Metinde"}</span>${keys.map((k) => `<a href="#" class="ev-link" data-goto="${k}">${esc(showAr(evText(u, k)))}</a>`).join("")}</div>`;
  }

  // çoktan seçmeli soru: ilk yanlışta ikinci deneme hakkı, sonra doğru cevap + kanıt
  function mcHTML(id, u, q) {
    const st = U(u.id);
    const pick = st.ans[id];
    const tries = (st.tries && st.tries[id]) || [];
    const answered = pick !== undefined;
    const order = shuffle(q.o.map((_, i) => i), id);
    const trOpen = !!st.notes["tr:" + id];
    let fb = "";
    if (answered && pick === q.a) fb = `<div class="feedback ok">${tries.length ? "Doğru! (ikinci denemede)" : "Doğru!"}</div>${evHTML(u, q.ev)}`;
    else if (answered) fb = `<div class="feedback bad">Doğru cevap işaretlendi. İlgili yeri yeniden oku:</div>${evHTML(u, q.ev)}`;
    else if (tries.length) fb = `<div class="feedback hint">Tam değil. ${q.ev ? "İlgili yeri yeniden oku ve tekrar dene." : "Bir kez daha dene."}</div>${q.ev ? `<div class="evidence"><a href="#" class="ev-link plain" data-goto="${q.ev[0]}">↪ Metinde ilgili yeri göster</a></div>` : ""}`;
    return `<div class="q" data-mc="${id}">
      <div class="q-head">${q.num ? `<span class="q-num">${q.num}</span>` : ""}<div class="q-ar">${esc(showAr(q.q))}</div>${q.qt ? `<button class="tr-btn ${trOpen ? "on" : ""}" data-qtr="${id}">TR</button>` : ""}</div>
      ${q.qt && trOpen ? `<div class="q-tr">${mix(q.qt)}</div>` : ""}
      <div class="opts">${order.map((i) => {
        let cls = "opt", mark = "", dis = answered;
        if (answered) {
          if (i === q.a) { cls += " ok"; mark = "✓"; }
          else if (i === pick || tries.includes(i)) { cls += " bad"; mark = "✗"; }
        } else if (tries.includes(i)) { cls += " bad"; mark = "✗"; dis = true; }
        const otOn = q.ot && st.notes["ot:" + id + ":" + i];
        const btn = `<button class="${cls}" data-pick="${i}" ${dis ? "disabled" : ""}><span>${esc(showAr(q.o[i]))}${otOn ? `<span class="opt-tr">${esc(q.ot[i])}</span>` : ""}</span><span class="mark">${mark}</span></button>`;
        return q.ot ? `<div class="opt-row">${btn}<button class="otr ${otOn ? "on" : ""}" data-otr="${id}:${i}" aria-label="Seçeneğin Türkçesi">TR</button></div>` : btn;
      }).join("")}</div>
      ${fb}
    </div>`;
  }

  /* ---------------- yönlendirme ---------------- */
  function route(y) {
    stopAll(); hidePop();
    if (play.hash !== location.hash) { play.idx = 0; play.hash = location.hash; }
    const h = location.hash.replace(/^#\/?/, "").split("/");
    const done = () => window.scrollTo(0, y || 0);
    if (h[0] === "rehber") { CUR = null; renderGuide(); window.scrollTo(0, 0); return; }
    const c = h[0] === "k" && CAT.find((x) => x.id === h[1] && x.status === "ready");
    if (!c) { CUR = null; renderLibrary(); done(); return; }
    loadStory(c.id).then((story) => {
      if (!story) { CUR = null; renderLibrary(); toast("Kıssa yüklenemedi."); done(); return; }
      CUR = story;
      const unit = h[2] === "u" && story.units.find((u) => u.id == h[3]);
      if (unit) renderUnit(unit, ["pre", "read", "post"].includes(h[4]) ? h[4] : "pre");
      else renderStory();
      done();
      flushGoto();
      if (unit && h[4] === "read") updateProgress();
    });
  }
  window.addEventListener("hashchange", () => route(0));
  function rerender(keepScroll) { route(keepScroll ? window.scrollY : 0); }

  /* ---------------- başlık ---------------- */
  function renderTop() {
    const top = document.getElementById("top");
    top.innerHTML = `<div class="top-in">
      <a class="brand" href="#/"><span class="kufi">قَصَص</span><b>Kasas</b></a>
      <span class="spacer"></span>
      <a class="toplink" href="#/rehber">Nasıl çalışılır?</a>
    </div>`;
  }

  /* ---------------- kütüphane (tüm kıssalar) ---------------- */
  function renderLibrary() {
    app.dataset.unit = "";
    app.innerHTML = `
      <section class="hero">
        <div class="kufi">قَصَصُ النَّبِيِّينَ</div>
        <h1>Peygamber kıssalarıyla Arapça okuma</h1>
        <p>Kısa, harekeli ve bol tekrarlı metinlerle okuma. Bir kıssa seç ve başla.</p>
      </section>
      <div class="lib">${CAT.map((c) => {
        const story = (window.STORIES || []).find((x) => x.id === c.id);
        const cover = `<div class="cover">${c.cover ? `<img src="${esc(c.cover)}" alt="" loading="lazy">` : ""}</div>`;
        const title = `<div class="title-row"><h3>${esc(c.name_tr)}</h3><span class="kufi">${esc(c.name_ar)}</span></div>`;
        if (c.status !== "ready") return `<div class="story-card soon" aria-disabled="true">${cover}
          <div class="body">${title}<p>${esc(c.blurb || "")}</p>
          <div class="meta"><span class="badge muted">Yakında</span></div></div></div>`;
        let meta = "";
        if (story) {
          const n = story.units.length;
          const d = story.units.filter((u) => U(u.id, story).done).length;
          meta = `<div class="meta">${n} ünite · ${d ? `${d}/${n} tamamlandı` : "Başlamadın"}</div><div class="progress"><span style="width:${Math.round((d / n) * 100)}%"></span></div>`;
        }
        return `<a class="story-card" href="#/k/${c.id}">${cover}
          <div class="body">${title}<p>${esc(c.blurb || "")}</p>${meta}</div></a>`;
      }).join("")}</div>
      <div class="howto">
        <b>Nasıl çalışılır?</b> Her kıssa kısa ünitelere ayrılır. Her ünitede üç adım var: <b>Okuma öncesi</b> (tahmin ve anahtar kelimeler), <b>Okuma</b> (kesintisiz metin; kelimeye dokununca anlamı, ▶ ile sesi, TR ile çevirisi) ve <b>Okuma sonrası</b> (sıralama, sorular, dil odağı). <a href="#/rehber">Çalışma rehberini oku →</a>
      </div>`;
    // hazır kıssaları arka planda yükle (ilerleme çubuğu için)
    CAT.filter((c) => c.status === "ready" && !(window.STORIES || []).find((x) => x.id === c.id))
      .forEach((c) => loadStory(c.id).then((st) => { if (st && !CUR && !location.hash.startsWith("#/k/")) renderLibrary(); }));
  }

  /* ---------------- çalışma rehberi ---------------- */
  function renderGuide() {
    app.dataset.unit = "";
    const ar = (t) => `<span class="ar-inline">${t}</span>`;
    app.innerHTML = `
      <div class="crumbs"><a href="#/">← Kıssalar</a></div>
      <section class="hero">
        <div class="kufi">كَيْفَ أَدْرُسُ؟</div>
        <h1>Çalışma rehberi</h1>
        <p>Kasas'ı kimler kullanabilir, bir ünite nasıl çalışılır, ne kadar zaman ayrılmalı? Kısa bir yol haritası.</p>
      </section>
      <nav class="g-toc" aria-label="Rehber içeriği">
        <a href="#g-kim">Kimler için?</a><a href="#g-unite">Bir ünite</a><a href="#g-arac">Okuma araçları</a><a href="#g-sira">Hangi kıssa?</a><a href="#g-plan">Haftalık plan</a><a href="#g-ogretmen">Öğretmenler</a><a href="#g-sss">Sık sorulanlar</a>
      </nav>

      <section class="card g-sec" id="g-kim">
        <h2>👥 Kasas kimler için?</h2>
        <p class="sub">Arap harflerini okuyabilen ve temel kelime bilgisine sahip herkes için. Harfleri ve okumayı yeni öğreniyorsan önce o temeli kazanman gerekir; Kasas okumayı geliştirmek içindir.</p>
        <div class="g-grid">
          <div class="g-box"><h3>🌱 Yeni başlayan <small>yaklaşık A2</small></h3>
            <ul><li>Harekeler açık, ses hızı <b>0.6×</b>.</li><li>Kelimeye dokunmaktan ve <b>TR</b> çeviriye bakmaktan çekinme.</li><li>Kısa kıssalarla başla, üniteyi iki oturuma böl.</li></ul></div>
          <div class="g-box"><h3>🌿 Orta düzey <small>B1</small></h3>
            <ul><li>İlk okumayı yardımsız yap.</li><li>İkinci okumada <b>Kaybolan kelimeler: Az/Orta</b>.</li><li>Dil odağı ve Özeti tamamla çalışmalarını atlama.</li></ul></div>
          <div class="g-box"><h3>🌳 İleri düzey <small>B2 ve üstü</small></h3>
            <ul><li><b>Hareke kapalı</b> oku, ses hızı <b>1×</b>.</li><li>Yeniden anlatmayı hem sesli hem yazılı yap.</li><li>Düşün sorularına Arapça cevap vermeyi dene.</li></ul></div>
          <div class="g-box"><h3>👩‍🏫 Öğretmen</h3>
            <ul><li>Üniteleri ders öncesi, ders içi ya da ödev olarak kullanabilirsin.</li><li>Ayrıntılar aşağıdaki <a href="#g-ogretmen">Öğretmenler için</a> bölümünde.</li></ul></div>
        </div>
      </section>

      <section class="card g-sec" id="g-unite">
        <h2>🧭 Bir ünite nasıl çalışılır?</h2>
        <p class="sub">Her kıssa kısa ünitelere ayrılmıştır. Bir ünite yaklaşık <b>40–45 dakika</b> sürer. Vaktin azsa ilk iki adımı bir gün, üçüncüsünü ertesi gün yap; araya giren gün metni bir kez daha okumak iyi gelir.</p>
        <ol class="g-steps">
          <li><div class="g-step-h"><b>1 · Okuma öncesi</b><span class="g-time">≈ 5 dk</span></div>
            <ul><li><b>🔮 Tahmin et:</b> Doğru ya da yanlış yok; metinde ne olacağını tahmin et. Okuduktan sonra tahminine geri dönersin.</li>
            <li><b>🗝️ Anahtar kelimeler</b> ve <b>🧩 Eşleştir:</b> Kelimeleri sesli tekrar et, sonra anlamlarıyla eşleştir.</li></ul></li>
          <li><div class="g-step-h"><b>2 · Okuma</b><span class="g-time">≈ 15–20 dk</span></div>
            <ul><li><b>Birinci okuma:</b> Baştan sona durmadan oku. Her kelimeye takılma; olayın genelini yakala.</li>
            <li><b>Tahmin durakları:</b> Metin bir yerde durup «Sence ne olacak?» diye sorar. Cevapla, sonra okumaya devam et.</li>
            <li><b>İkinci okuma:</b> Bilmediğin kelimelere dokun. Cümleyi yine anlamadıysan <b>TR</b> düğmesine bas; ama önce kendin çözmeyi dene.</li>
            <li><b>Üçüncü okuma:</b> <b>▶ Tümünü dinle</b> ile dinleyerek takip et, sonra metni kendin sesli oku.</li></ul></li>
          <li><div class="g-step-h"><b>3 · Okuma sonrası</b><span class="g-time">≈ 15–20 dk</span></div>
            <ul><li><b>🔢 Olayları sırala</b> ve <b>❓ Anlama soruları:</b> Yanlış cevapta <b>📍 Metinde</b> bağlantısıyla ilgili cümleye dön ve yeniden oku.</li>
            <li><b>🗣️ Yeniden anlat:</b> Verilen anahtar kelimelerle olayı kendi cümlelerinle anlat; önce sesli, sonra kutuya yaz.</li>
            <li><b>📚 Ek çalışmalar:</b> 🔍 Dil odağı (ünitenin dilbilgisi konusu), ✍️ Özeti tamamla, 💭 Düşün.</li>
            <li><b>✨ İsteğe bağlı:</b> 🙋 Metin sana soruyor (kendi hayatınla ilgili kısa bir Arapça cevap) ve 📖 Kur'an bağlantısı.</li></ul></li>
          <li><div class="g-step-h"><b>4 · Bitir</b></div>
            <ul><li><b>Üniteyi tamamla ✓</b> düğmesine bas. Kıssa sayfasında ilerlemen görünür.</li></ul></li>
        </ol>
      </section>

      <section class="card g-sec" id="g-arac">
        <h2>🛠️ Okuma araçları</h2>
        <div class="g-table" role="table">
          <div role="row"><span role="cell"><b>Kelimeye dokun</b></span><span role="cell">Kelimenin anlamı ve sözlük biçimi; «Ayrıntı» altında kökü. 🔊 ile kelimeyi dinlersin.</span></div>
          <div role="row"><span role="cell"><b>▶ / TR</b></span><span role="cell">Cümlenin yanındaki ▶ o cümleyi okur; TR Türkçesini gösterir.</span></div>
          <div role="row"><span role="cell"><b>Hareke açık / kapalı</b></span><span role="cell">Harekeleri gizler. Seviye ilerledikçe kapalı okumaya geç.</span></div>
          <div role="row"><span role="cell"><b>Kaybolan kelimeler</b></span><span role="cell">İkinci okuma için: bazı kelimeler boşluk olur (Az / Orta / Çok). Boşluğa bir kez dokun → Türkçe ipucu, bir kez daha → Arapça kelime.</span></div>
          <div role="row"><span role="cell"><b>▶ Tümünü dinle</b></span><span role="cell">Metni baştan sona okur; duraklatıp kaldığın yerden devam edebilirsin.</span></div>
          <div role="row"><span role="cell"><b>0.6× · 0.8× · 1×</b></span><span role="cell">Sesli okuma hızı.</span></div>
          <div role="row"><span role="cell"><b>A− / A+</b></span><span role="cell">Arapça yazının boyutu.</span></div>
        </div>
      </section>

      <section class="card g-sec" id="g-sira">
        <h2>🗺️ Hangi kıssadan başlamalı?</h2>
        <p class="sub">Kıssalar birbirinden bağımsızdır; istediğinden başlayabilirsin. Bir yol arıyorsan:</p>
        <div class="g-grid three">
          <div class="g-box"><h3>Başlangıç</h3><p>Hz. İbrahim · Hz. Nûh · Hz. Hûd · Hz. Sâlih</p><p class="g-note">Olay ağırlıklı, akışı kolay takip edilen kıssalar.</p></div>
          <div class="g-box"><h3>Devam</h3><p>Hz. Yûsuf · Hz. Şuayb · Hz. Eyyûb ve Hz. Yûnus · Hz. Zekeriyyâ</p><p class="g-note">Kısa kıssalar ve Yûsuf'un uzun, sürükleyici anlatısı.</p></div>
          <div class="g-box"><h3>Uzun ve zengin</h3><p>Hz. Dâvûd ve Hz. Süleyman · Hz. Îsâ · Hz. Mûsâ</p><p class="g-note">Daha çok âyet, yorum ve değerlendirme içerir. Mûsâ 22 ünitedir.</p></div>
        </div>
      </section>

      <section class="card g-sec" id="g-plan">
        <h2>📅 Haftalık plan örnekleri</h2>
        <div class="g-grid">
          <div class="g-box"><h3>Hafif tempo <small>haftada 3 gün</small></h3>
            <ul><li><b>1. gün:</b> Yeni ünite (tamamı).</li><li><b>2. gün:</b> Yeni ünite (tamamı).</li><li><b>3. gün:</b> Tekrar: iki üniteyi <b>Kaybolan kelimeler</b> ile yeniden oku ve yeniden anlat.</li></ul></div>
          <div class="g-box"><h3>Düzenli tempo <small>haftada 5–6 gün</small></h3>
            <ul><li><b>Her gün:</b> Bir oturumda okuma öncesi + okuma, ertesi gün okuma sonrası + yeni ünitenin okuma öncesi.</li><li><b>Hafta sonu:</b> Haftanın ünitelerini sesli oku; anahtar kelimeleri defterine yaz.</li></ul></div>
        </div>
        <p class="g-note">Kısa ama düzenli çalışmak, seyrek ve uzun çalışmaktan daha verimlidir. Aynı metni yeniden okumak, yeni bir metne geçmek kadar öğreticidir.</p>
      </section>

      <section class="card g-sec" id="g-ogretmen">
        <h2>👩‍🏫 Öğretmenler için</h2>
        <div class="g-grid">
          <div class="g-box"><h3>Ders öncesi / derse giriş</h3><ul><li><b>Okuma öncesi</b> adımını sınıfça yapın; tahminleri tahtaya yazın.</li><li>Anahtar kelimeleri birlikte telaffuz edin.</li></ul></div>
          <div class="g-box"><h3>Okuma</h3><ul><li>Bireysel ya da eşli okuma; ilk okumada sözlük kullanmadan.</li><li>Okuma adımı ödev olarak da verilebilir.</li></ul></div>
          <div class="g-box"><h3>Okuma sonrası</h3><ul><li>Eşler anlama sorularını tartışsın ve cevabın <b>metindeki kanıtını</b> göstersin.</li><li>Yeniden anlatmayı eşler birbirine yapsın; Düşün sorusu sınıf tartışmasına dönüşsün.</li><li>Dil odağını beş dakikalık bir mini derse çevirin.</li></ul></div>
          <div class="g-box"><h3>Değerlendirme</h3><ul><li>Yeniden anlatma ve özet metinlerini bir dosyada (portfolyo) toplayın.</li><li>Site öğrenci verisi toplamaz; ilerleme yalnızca öğrencinin kendi tarayıcısında görünür.</li></ul></div>
        </div>
        <p class="g-note">Bazı bölümler kitabın yazarının tarih ve topluluklar hakkındaki yorumlarını içerir. Bunlar, metni eleştirel okumak ve farklı bakış açılarını tartışmak için birer fırsattır.</p>
      </section>

      <section class="card g-sec" id="g-ipucu">
        <h2>💡 Okuma ipuçları</h2>
        <ul class="g-tips">
          <li>Her kelimeye bakma; önce cümlenin bağlamından tahmin et.</li>
          <li>Çeviri son çare olsun. Bir cümleyi kendin çözmek, çevirisini okumaktan çok daha kalıcıdır.</li>
          <li>Sesli oku. Dinleyip tekrar etmek telaffuzu ve akıcılığı birlikte geliştirir.</li>
          <li>Bir kelime defteri tut: kelimeyi, kökünü ve geçtiği cümleyi yaz (ör. ${ar("صَبَرَ")}, kökü: ${ar("ص ب ر")}).</li>
          <li>Takıldığın bir ünitede ilerlemeye zorlama; bir gün sonra yeniden oku.</li>
        </ul>
      </section>

      <section class="card g-sec" id="g-sss">
        <h2>❔ Sık sorulanlar</h2>
        <details><summary>İlerlemem nerede saklanıyor?</summary><p>Kullandığın tarayıcıda, bu cihazda. Başka bir cihazda görünmez; tarayıcı verilerini silersen sıfırlanır. Hesap ya da kayıt gerekmez.</p></details>
        <details><summary>Sesli okuma çalışmıyor.</summary><p>Sesli okuma cihazının metin okuma (TTS) özelliğini kullanır. Ses gelmiyorsa cihaz ya da tarayıcı ayarlarından bir <b>Arapça ses</b> yükle; Chrome ve Safari genellikle en iyi sonucu verir.</p></details>
        <details><summary>Metinler ve çeviriler nereden?</summary><p>Arapça metinler <i>Kasasu'n-Nebiyyîn</i> serisinden alınmıştır. Türkçe çeviriler ve âyet mealleri, okumaya yardımcı olmak için hazırlanmış taslaklardır; Kur'an'ın anlamı için güvenilir bir meale başvurun.</p></details>
        <details><summary>Tahmin duraklarını kapatabilir miyim?</summary><p>Evet. Durak kartındaki seçenekle kapatabilir, okuma sayfasındaki «Yeniden aç» bağlantısıyla geri açabilirsin.</p></details>
      </section>

      <div class="g-cta"><a class="btn primary" href="#/">Bir kıssa seç ve başla →</a></div>`;
  }

  /* ---------------- kıssa sayfası ---------------- */
  function renderStory() {
    app.dataset.unit = "";
    const totalSec = CUR.units.reduce((n, u) => n + u.sections.length, 0);
    app.innerHTML = `
      <div class="crumbs"><a href="#/">← Kıssalar</a></div>
      ${(() => { const c = CAT.find((x) => x.id === CUR.id); return c && c.cover ? `<div class="banner"><img src="${esc(c.cover)}" alt=""></div>` : ""; })()}
      <section class="hero">
        <div class="kufi">${esc(showAr(CUR.title_ar))}</div>
        <h1>${esc(CUR.title_tr)}</h1>
        <p>${CUR.units.length} ünite · ${totalSec} kısa bölüm · Kaynak: ${esc(CUR.source)}</p>
      </section>
      <div class="units">${CUR.units.map((u) => {
        const st = U(u.id);
        const range = u.sections.length > 1 ? `${u.sections[0].n}–${u.sections[u.sections.length - 1].n}` : `${u.sections[0].n}`;
        return `<a class="unit-card" href="${base()}/u/${u.id}/pre">
          <div class="uc-top"><span class="num">Ünite ${u.id}</span><span class="emo" aria-hidden="true">${u.emoji}</span></div>
          <div class="ar">${esc(showAr(u.title_ar))}</div>
          <div class="tr">${esc(u.title_tr)}</div>
          <div class="meta">Bölüm ${range} · ${u.sections.reduce((n, s) => n + s.s.length, 0)} cümle ${st.done ? '<span class="badge">✓ Tamamlandı</span>' : st.started ? '<span class="badge gold">Devam ediyor</span>' : ""}</div>
        </a>`;
      }).join("")}</div>`;
  }

  /* ---------------- ünite ---------------- */
  function renderUnit(u, step) {
    const st = U(u.id);
    if (!st.started) { st.started = true; save(); }
    const range = u.sections.length > 1 ? `${u.sections[0].n}–${u.sections[u.sections.length - 1].n}` : `${u.sections[0].n}`;
    const tabs = [["pre", "1 · Okuma öncesi", "Tahmin, kelimeler"], ["read", "2 · Okuma", `Bölüm ${range}`], ["post", "3 · Okuma sonrası", "Anlama, dil"]];
    let body = "";
    if (step === "pre") body = preHTML(u);
    if (step === "read") body = readHTML(u);
    if (step === "post") body = postHTML(u);
    app.innerHTML = `
      <div class="crumbs"><a href="#/">Kıssalar</a> / <a href="${base()}">${esc(CUR.title_tr)}</a></div>
      <div class="uhead"><span class="emo">${u.emoji}</span><div><div class="ar">${esc(showAr(u.title_ar))}</div><div class="tr">Ünite ${u.id} · ${esc(u.title_tr)}</div></div></div>
      <nav class="steps">${tabs.map(([k, t, s]) => `<a href="${base()}/u/${u.id}/${k}" class="${k === step ? "on" : ""}">${t}<small>${s}</small></a>`).join("")}</nav>
      ${body}`;
    app.dataset.unit = u.id;
    if (step === "read") { updateVoiceWarn(); updatePlayBtn(); }
  }

  /* ----- okuma öncesi ----- */
  function preHTML(u) {
    const st = U(u.id);
    const p = u.pre;
    const trOpen = !!st.notes["predtr"];
    let h = `<div class="card">
      <h2>🔮 Tahmin et</h2>
      <p class="sub">${mix(p.predict.prompt_tr)}</p>
      <div class="opts">${p.predict.options.map((o, i) => `<button class="opt ${st.pred === i ? "sel" : ""}" data-pred="${i}"><span>${esc(showAr(o[0]))}</span>${trOpen ? `<span class="opt-tr">${esc(o[1])}</span>` : ""}</button>`).join("")}</div>
      <div class="cta-row"><button class="btn small ghost" data-toggle-note="predtr">${trOpen ? "Türkçeyi gizle" : "Türkçesini göster"}</button></div>
      ${st.pred !== undefined ? `<p class="sub" style="margin:8px 0 0">Tahminini kaydettik. Okuduktan sonra ona geri döneceğiz.</p>` : ""}
    </div>
    <div class="card">
      <h2>🗝️ Anahtar kelimeler</h2>
      <p class="sub">Kartlara dokun, anlamını gör. 🔊 ile dinle. Bu kelimeler metinde sık geçiyor.</p>
      <div class="vgrid">${p.vocab.map((v, i) => {
        const open = !!st.notes["v" + i];
        return `<div class="vcard" data-vflip="${i}" role="button" tabindex="0">
          <div class="emo" aria-hidden="true">${v[2]}</div><div class="ar">${esc(showAr(v[0]))}</div>
          <div class="tr ${open ? "" : "hid"}">${esc(v[1])}</div>
          <button class="say" data-say="${esc(v[0].split(/ ج | \/ /)[0])}" aria-label="Dinle">🔊 Dinle</button></div>`;
      }).join("")}</div>
    </div>`;
    h += matchHTML(u);
    h += `<div class="cta-row"><a class="btn primary" href="${base()}/u/${u.id}/read" style="text-decoration:none">Okumaya başla →</a></div>`;
    return h;
  }

  let matchSel = null;
  function matchHTML(u) {
    const st = U(u.id);
    const done = st.matched || [];
    const v = u.pre.vocab;
    const left = shuffle(v.map((_, i) => i), "mL" + u.id);
    const right = shuffle(v.map((_, i) => i), "mR" + u.id);
    const all = done.length === v.length;
    return `<div class="card">
      <h2>🧩 Eşleştir</h2>
      <p class="sub">Bir Arapça kelimeye, sonra Türkçe anlamına dokun.${all ? " <b>Hepsi tamam!</b>" : ""}</p>
      <div class="match">
        <div class="col">${left.map((i) => `<button class="mitem ar ${done.includes(i) ? "done" : ""} ${matchSel && matchSel.side === "ar" && matchSel.i === i ? "sel" : ""}" data-m="ar:${i}" ${done.includes(i) ? "disabled" : ""}>${esc(showAr(v[i][0]))}</button>`).join("")}</div>
        <div class="col">${right.map((i) => `<button class="mitem ${done.includes(i) ? "done" : ""} ${matchSel && matchSel.side === "tr" && matchSel.i === i ? "sel" : ""}" data-m="tr:${i}" ${done.includes(i) ? "disabled" : ""}>${esc(v[i][1])}</button>`).join("")}</div>
      </div>
      ${done.length ? `<div class="cta-row"><button class="btn small ghost" data-match-reset="1">Yeniden başla</button></div>` : ""}
    </div>`;
  }

  /* ----- okuma ----- */
  function readHTML(u) {
    const st = U(u.id);
    const stopOpen = !st.stopDone;
    let hidden = false;
    let body = "";
    u.sections.forEach((sec) => {
      if (hidden) return;
      body += `<div class="sec-title"><span class="ar">${esc(showAr(sec.n + " - " + sec.title_ar)).replace(/^\d+/, (d) => toArNum(d))}</span><span class="tr">${esc(sec.title_tr)}</span></div>`;
      sec.s.forEach((pair, i) => {
        if (hidden) return;
        const key = `${sec.n}.${i}`;
        const trOn = !!st.notes["st:" + key];
        const quote = pair[0].includes("«");
        body += `<div class="sent ${quote ? "quote" : ""}" data-key="${key}">
          <div class="ctl"><button data-play="${key}" aria-label="Dinle">▶</button><button class="${trOn ? "on" : ""}" data-str="${key}" aria-label="Türkçesi">TR</button></div>
          <p class="ar">${arHTML(pair[0], { vanish: S.vanish ? { level: S.vanish, key, rev: st.rev || {} } : null })}</p>
        </div>${trOn ? `<div class="sent-tr">${esc(pair[1])}</div>` : ""}`;
        if (u.stop && !S.noStops && u.stop.section === sec.n && u.stop.after === i) {
          body += stopHTML(u);
          if (stopOpen) hidden = true;
        }
      });
      if (false && !hidden && u.checks && u.checks[sec.n]) { // bölüm sonu soruları kapalı: okuma kesintisiz
        const c = Object.assign({}, u.checks[sec.n], { num: "" });
        body += `<div class="check-card"><h3>✔︎ Hızlı kontrol <span style="font-weight:400;color:var(--muted)">(isteğe bağlı)</span></h3>${mcHTML("chk" + sec.n, u, c)}</div>`;
      }
    });
    if (hidden) body += `<div class="hidden-note">Devamını görmek için yukarıdaki tahmini yap ya da “Atla”ya dokun.</div>`;

    const rates = [[0.6, "0.6×"], [0.8, "0.8×"], [1, "1×"]];
    return `
      <div class="toolbar">
        <button class="tb ${S.hareke ? "on" : ""}" data-set="hareke">Hareke ${S.hareke ? "açık" : "kapalı"}</button>
        <span class="tb ${S.vanish ? "on" : ""}" title="İkinci okuma: bazı kelimeler gizlenir, hatırlayarak oku">Kaybolan kelimeler: <select data-vanish aria-label="Kaybolan kelimeler">${[["", "Kapalı"], ["az", "Az"], ["orta", "Orta"], ["cok", "Çok"]].map(([v, t]) => `<option value="${v}" ${(S.vanish || "") === v ? "selected" : ""}>${t}</option>`).join("")}</select></span>
        <button class="tb" id="playAll" data-playall="1">▶ Tümünü dinle</button>
        <button class="tb" id="playRestart" data-playrestart="1" hidden title="Baştan dinle">↺</button>
        <span class="tb"><select data-rate aria-label="Hız">${rates.map(([v, t]) => `<option value="${v}" ${S.rate == v ? "selected" : ""}>${t}</option>`).join("")}</select></span>
        <button class="tb" data-font="-1" aria-label="Yazıyı küçült">A−</button>
        <button class="tb" data-font="1" aria-label="Yazıyı büyüt">A+</button>
        <span class="prog" id="prog" aria-live="polite"><span class="prog-t"></span><span class="prog-bar"><span></span></span></span>
      </div>
      <div class="tip">Altı çizili değil ama tıklanabilir: <b>kelimeye dokun</b> → anlamı · <b>▶</b> → cümleyi dinle · <b>TR</b> → Türkçesi. ${S.noStops ? `<br>Tahmin durakları kapalı. <a href="#" data-nostops="0">Yeniden aç</a>` : ""}${S.vanish ? `<br>Boşluğa bir kez dokun → Türkçe ipucu, bir kez daha → Arapça kelime. <a href="#" data-vreset="1">↺ Boşlukları yeniden kapat</a>` : ""}</div>
      ${resumeHTML(u)}
      <div class="voice-warn" id="voiceWarn" hidden>Bu tarayıcıda Arapça ses bulunamadı. Sesli okuma için Chrome/Edge kullanın ya da cihazınıza Arapça metin okuma sesi yükleyin.</div>
      <div class="reader">${body}</div>
      ${!hidden ? `<div class="cta-row" style="margin-top:16px"><a class="btn primary" href="${base()}/u/${u.id}/post" style="text-decoration:none">Okumayı bitirdim → Okuma sonrası</a></div>` : ""}`;
  }
  // ünitedeki tüm cümle anahtarları (sıralı)
  const unitKeys = (u) => u.sections.flatMap((sec) => sec.s.map((_, i) => `${sec.n}.${i}`));
  function resumeHTML(u) {
    const st = U(u.id);
    const keys = unitKeys(u);
    const k = st.notes.lastKey, pos = keys.indexOf(k);
    if (!k || pos < 3 || pos >= keys.length - 1) return "";
    return `<div class="resume"><a href="#" data-goto="${k}">↓ Kaldığın yerden devam et (${pos + 1} / ${keys.length})</a></div>`;
  }
  // ilerleme göstergesi: ekranın ortasındaki cümle ya da okunan cümle
  let progRaf = 0;
  function updateProgress() {
    const el = document.getElementById("prog");
    if (!el || !CUR) return;
    const u = CUR.units.find((x) => x.id === +app.dataset.unit);
    if (!u) return;
    const rows = [...document.querySelectorAll(".sent")];
    if (!rows.length) return;
    let row;
    const playing = document.querySelector(".sent.playing");
    if (playing) row = playing;
    else {
      const mid = window.innerHeight * 0.45;
      row = rows[0];
      for (const r of rows) { if (r.getBoundingClientRect().top < mid) row = r; else break; }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) row = rows[rows.length - 1];
    }
    const keys = unitKeys(u);
    const pos = keys.indexOf(row.dataset.key) + 1;
    const secN = +row.dataset.key.split(".")[0];
    const secIdx = u.sections.findIndex((x) => x.n === secN) + 1;
    el.querySelector(".prog-t").textContent = `${pos} / ${keys.length} cümle · Bölüm ${secIdx}/${u.sections.length}`;
    el.querySelector(".prog-bar span").style.width = Math.round((pos / keys.length) * 100) + "%";
    const st = U(u.id);
    if (st.notes.lastKey !== row.dataset.key) { st.notes.lastKey = row.dataset.key; save(); }
  }
  window.addEventListener("scroll", () => { if (progRaf) return; progRaf = requestAnimationFrame(() => { progRaf = 0; updateProgress(); }); }, { passive: true });

  function toArNum(d) { return String(d).replace(/\d/g, (x) => "٠١٢٣٤٥٦٧٨٩"[x]); }

  function stopHTML(u) {
    const st = U(u.id);
    const s = u.stop;
    return `<div class="stop-card">
      <h3>⏸️ Bir dakika! Tahmin et</h3>
      <p>${mix(s.prompt_tr)}</p>
      <div class="opts">${s.options.map((o, i) => `<button class="opt ${st.stopPick === i ? "sel" : ""}" data-stoppick="${i}" ${st.stopDone ? "disabled" : ""}><span>${esc(showAr(o[0]))}</span>${st.stopDone ? "" : `<span class="opt-tr">${esc(o[1])}</span>`}</button>`).join("")}</div>
      ${!st.stopDone ? `<div class="cta-row"><button class="btn small ghost" data-nostops="1" title="Bütün ünitelerde tahmin duraklarını kapatır">Durakları gösterme</button><button class="btn small ghost" data-stopskip="1">Atla</button><button class="btn small primary" data-stopgo="1" ${st.stopPick === undefined ? "disabled" : ""}>Devam et ve gör →</button></div>` : `<p style="margin:8px 0 0;font-size:.85rem">Okumaya devam et; tahminin doğru muydu?</p>`}
    </div>`;
  }

  /* ----- okuma sonrası ----- */
  function postHTML(u) {
    const st = U(u.id);
    const p = u.post;
    const zen = true;
    let h = "";

    // tahmin hatırlatma
    if (st.pred !== undefined || st.stopPick !== undefined) {
      h += `<div class="card"><h2>🔮 Tahminlerin</h2><div class="pred-box">
        ${st.pred !== undefined ? `<p>Okumadan önce: <span class="ar-inline">${esc(showAr(u.pre.predict.options[st.pred][0]))}</span></p>` : ""}
        ${st.stopPick !== undefined ? `<p>Okurken: <span class="ar-inline">${esc(showAr(u.stop.options[st.stopPick][0]))}</span></p>` : ""}
        <p class="sub" style="margin:0">Metinde ne oldu? Tahminlerin tuttu mu? Doğru ya da yanlış yok; önemli olan metne geri dönüp karşılaştırmak.</p></div></div>`;
    }

    h += `<div class="section-label">Temel etkinlikler</div>`;
    // sıralama
    const ord = st.order || [];
    const pool = shuffle(p.order.map((_, i) => i), "ord" + u.id).filter((i) => !ord.includes(i));
    const checked = st.orderChecked && ord.length === p.order.length;
    const correctN = ord.filter((x, k) => x === k).length;
    h += `<div class="card">
      <h2>🔢 Olayları sırala</h2>
      <p class="sub">Cümlelere kıssadaki sıraya göre dokun. Yanlış eklediğin cümleye tekrar dokunarak geri al.</p>
      <div class="order-label">Senin sıran</div>
      <div class="order-ans">${ord.length ? ord.map((i, k) => `<button class="chip ${checked ? (i === k ? "ok" : "bad") : ""}" data-unorder="${k}" ${checked ? "disabled" : ""}><span class="n">${k + 1}</span>${esc(showAr(p.order[i]))}</button>`).join("") : `<span class="sub">Henüz bir şey seçmedin.</span>`}</div>
      ${pool.length ? `<div class="order-label">Cümleler</div><div class="order-pool">${pool.map((i) => `<button class="chip" data-order="${i}">${esc(showAr(p.order[i]))}</button>`).join("")}</div>` : ""}
      <div class="cta-row">
        ${ord.length ? `<button class="btn small ghost" data-order-reset="1">Sıfırla</button>` : ""}
        ${ord.length === p.order.length && !checked ? `<button class="btn small primary" data-order-check="1">Kontrol et</button>` : ""}
      </div>
      ${checked ? `<div class="feedback ${correctN === p.order.length ? "ok" : "bad"}">${correctN === p.order.length ? "Harika, sıra tamamen doğru!" : `${p.order.length} cümleden ${correctN} tanesi doğru yerde. Metne dönüp tekrar dene.`}</div>` : ""}
    </div>`;

    // anlama soruları + özet geri bildirim
    const qs = p.questions;
    const tries = st.tries || {};
    const nAns = qs.filter((q, i) => st.ans["q" + i] !== undefined).length;
    const firstOk = qs.filter((q, i) => st.ans["q" + i] === q.a && !(tries["q" + i] || []).length).length;
    let summary = "";
    if (nAns === qs.length) {
      const missed = [...new Set(qs.flatMap((q, i) => (st.ans["q" + i] === q.a && !(tries["q" + i] || []).length) ? [] : (q.ev || [])))];
      summary = `<div class="summary ${missed.length ? "" : "ok"}">
        <b>${qs.length} sorudan ${firstOk} tanesi ilk denemede doğru.</b>
        ${missed.length ? `<div class="sub" style="margin:4px 0 0">Bu cümleleri metinde tekrar gözden geçir:</div>${evHTML(u, missed, " ")}` : `<div class="sub" style="margin:4px 0 0">Harika! Metni iyi anlamışsın.</div>`}
      </div>`;
    }
    h += `<div class="card">
      <h2>❓ Anlama soruları</h2>
      <p class="sub">Sorular Arapça. Takıldığında sorunun ya da tek bir seçeneğin yanındaki <b>TR</b> ile Türkçesine bak. Yanlış cevapta bir hakkın daha var.</p>
      ${qs.map((q, i) => mcHTML("q" + i, u, Object.assign({ num: i + 1 }, q))).join("")}
      ${summary}
    </div>`;

    // yeniden anlat (çekirdek)
    h += `<div class="card">
      <h2>🗣️ Yeniden anlat</h2>
      <p class="sub">Bu üniteyi 3–5 kısa Arapça cümleyle anlat. Bu kelimeler yardımcı olabilir. İstersen yazmadan önce sesli anlat.</p>
      <div class="kw">${p.retell.map((x) => `<span>${esc(showAr(x))}</span>`).join("")}</div>
      <textarea data-note="retell" placeholder="كَانَ ...">${esc(st.notes.retell || "")}</textarea>
    </div>`;

    // ek çalışmalar (katlanmış)
    const f = p.focus;
    let extra = `<div class="card">
      <h2>🔍 Dil odağı</h2>
      <p class="sub" style="font-weight:600;color:var(--ink)">${mix(f.title)}</p>
      <div class="focus-explain">${f.explain}</div>
      <div class="ex-list">${f.examples.map((e) => `<span>${esc(showAr(e))}</span>`).join("")}</div>
      ${f.items.map((it, i) => mcHTML("f" + i, u, { q: it.q, o: it.o, a: it.a, num: i + 1 })).join("")}
    </div>`;
    extra += clozeHTML(u);
    extra += `<div class="card">
      <h2>💭 Düşün</h2>
      <div class="q-head"><div class="q-ar">${esc(showAr(p.think.q))}</div><button class="tr-btn ${st.notes["tr:think"] ? "on" : ""}" data-qtr="think">TR</button></div>
      ${st.notes["tr:think"] ? `<div class="q-tr">${esc(p.think.qt)}</div>` : ""}
      <textarea data-note="think" placeholder="Cevabını Arapça ya da Türkçe yaz…">${esc(st.notes.think || "")}</textarea>
      <div class="cta-row"><button class="btn small ghost" data-toggle-note="showModel">${st.notes.showModel ? "Örnek cevabı gizle" : "Örnek cevabı gör"}</button></div>
      ${st.notes.showModel ? `<div class="model">${mix(p.think.model)}</div>` : ""}
    </div>`;
    h += moreHTML("extra", "📚 Ek çalışmalar", "Dil odağı · Özeti tamamla · Düşün", extra, st);

    // isteğe bağlı
    let opt = "";
    if (p.personal) {
      opt += `<div class="card">
        <h2>🙋 Metin sana soruyor</h2>
        <div class="q-ar" style="margin-bottom:6px">${esc(showAr(p.personal.q))}</div>
        <p class="sub">${esc(p.personal.qt)}</p>
        <div class="kw">${p.personal.hint.map((x) => `<span>${esc(showAr(x))}</span>`).join("")}</div>
        <textarea data-note="personal" placeholder="…">${esc(st.notes.personal || "")}</textarea>
      </div>`;
    }
    opt += `<div class="card">
      <h2>📖 Kur'an bağlantısı</h2>
      <p class="sub">Metindeki bazı ifadeler doğrudan ayetlerden geliyor. Ayete dokun, metinle karşılaştır.</p>
      ${p.quran.map((q) => `<details class="quran"><summary><span class="ar">${esc(showAr(q.inText))}</span><span class="ref">${esc(q.ref)}</span></summary>
        <div class="qr-body"><div class="ar-full">${esc(showAr(q.ar))}</div><div>${esc(q.tr)}</div></div></details>`).join("")}
    </div>`;
    h += moreHTML("opt", "✨ İsteğe bağlı", (p.personal ? "Metin sana soruyor · " : "") + "Kur'an bağlantısı", opt, st);

    const next = CUR.units.find((x) => x.id === u.id + 1);
    h += `<div class="cta-row" style="margin-top:18px">
      ${CONFIG.feedbackUrl ? `<a class="btn ghost" href="${esc(CONFIG.feedbackUrl)}" target="_blank" rel="noopener" style="text-decoration:none">Geri bildirim ver</a>` : ""}
      <button class="btn primary" data-finish="${u.id}">${st.done ? "✓ Tamamlandı" : "Üniteyi tamamla ✓"}</button>
      ${next ? `<a class="btn" href="${base()}/u/${next.id}/pre" style="text-decoration:none">Sonraki ünite →</a>` : ""}
    </div>`;
    return h;
  }

  function moreHTML(key, title, sub, inner, st) {
    const open = !!st.notes["more:" + key];
    return `<details class="more" data-more="${key}" ${open ? "open" : ""}>
      <summary><span class="more-t">${title}</span><span class="more-s">${sub}</span><span class="chev" aria-hidden="true">▾</span></summary>
      <div class="more-body">${inner}</div>
    </details>`;
  }

  function clozeHTML(u) {
    const st = U(u.id);
    const text = u.post.cloze.text;
    const answers = [...text.matchAll(/\{(.+?)\}/g)].map((m) => m[1]);
    const bank = shuffle(answers, "cz" + u.id);
    const vals = st.cloze || [];
    const checked = !!st.clozeChecked;
    let k = -1;
    const html = esc(showAr(text)).replace(/\{(.+?)\}/g, () => {
      k++;
      const v = vals[k] || "";
      const cls = checked ? (v === answers[k] ? "ok" : "bad") : "";
      return `<select data-cz="${k}" class="${cls}"><option value="">…</option>${bank.map((b) => `<option value="${esc(b)}" ${v === b ? "selected" : ""}>${esc(showAr(b))}</option>`).join("")}</select>`;
    });
    const nOk = answers.filter((a, i) => vals[i] === a).length;
    return `<div class="card">
      <h2>✍️ Özeti tamamla</h2>
      <p class="sub">Boşlukları kelime listesinden seç.</p>
      <div class="cloze">${html}</div>
      <div class="cta-row"><button class="btn small primary" data-cz-check="1">Kontrol et</button></div>
      ${checked ? `<div class="feedback ${nOk === answers.length ? "ok" : "bad"}">${nOk} / ${answers.length} doğru</div>` : ""}
    </div>`;
  }

  /* ---------------- olaylar ---------------- */
  document.addEventListener("click", (ev) => {
    const t = ev.target;
    const unitId = +app.dataset.unit;
    const u = CUR && unitId ? CUR.units.find((x) => x.id === unitId) : null;
    const st = u ? U(unitId) : null;
    const d = (sel) => t.closest(sel);
    { const g = d('a[href^="#g-"]'); if (g) { ev.preventDefault(); const x = document.getElementById(g.getAttribute("href").slice(1)); if (x) x.scrollIntoView({ behavior: "smooth", block: "start" }); return; } }
    let el;

    if ((el = d("[data-say]"))) { ev.stopPropagation(); speak(el.dataset.say); return; }
    if ((el = d(".pop .x"))) { hidePop(); return; }
    if ((el = d("[data-rootshow]"))) { S.showRoot = !S.showRoot; save(); renderPop(); return; }
    if ((el = d(".gap"))) {
      const stg = U(+app.dataset.unit); stg.rev = stg.rev || {};
      const cur = stg.rev[el.dataset.gk] || 0;
      if (cur >= 2) { showGloss(+el.dataset.g, el); return; }
      const nx = cur + 1; stg.rev[el.dataset.gk] = nx; save();
      el.className = "gap s" + nx;
      el.innerHTML = nx === 1 ? `<span class="hint">${esc(el.dataset.h)}</span>` : esc(showAr(el.dataset.w));
      return;
    }
    if ((el = d(".w"))) { showGloss(+el.dataset.g, el); return; }
    if (!d(".pop")) hidePop();
    if (!st) return;

    if ((el = d("[data-pred]"))) { st.pred = +el.dataset.pred; save(); rerender(true); return; }
    if ((el = d("[data-toggle-note]"))) { const k = el.dataset.toggleNote; st.notes[k] = !st.notes[k]; save(); rerender(true); return; }
    if ((el = d("[data-vflip]"))) { const k = "v" + el.dataset.vflip; st.notes[k] = !st.notes[k]; save(); el.querySelector(".tr").classList.toggle("hid", !st.notes[k]); return; }
    if ((el = d("[data-m]"))) {
      const [side, i] = el.dataset.m.split(":"); const idx = +i;
      if (!matchSel || matchSel.side === side) { matchSel = { side, i: idx }; rerender(true); return; }
      if (matchSel.i === idx) { st.matched = (st.matched || []).concat(idx); matchSel = null; save(); rerender(true); }
      else { el.classList.add("wrong"); matchSel = null; setTimeout(() => rerender(true), 350); }
      return;
    }
    if ((el = d("[data-match-reset]"))) { st.matched = []; matchSel = null; save(); rerender(true); return; }

    // okuma
    if ((el = d("[data-set]"))) { const k = el.dataset.set; S[k] = !S[k]; save(); rerender(true); return; }
    if ((el = d("[data-font]"))) { S.font = Math.min(1.5, Math.max(0.8, +(S.font + 0.1 * +el.dataset.font).toFixed(2))); save(); applyFont(); return; }
    if ((el = d("[data-play]"))) {
      stopAll();
      const row = el.closest(".sent"); row.classList.add("playing");
      const rows = [...document.querySelectorAll(".sent")];
      play.idx = rows.indexOf(row) + 1;   // "Devam et" bu cümleden sonrasıyla sürer
      updatePlayBtn(); updateProgress();
      speak(sentText(u, el.dataset.play), () => row.classList.remove("playing"));
      return;
    }
    if ((el = d("[data-playall]"))) {
      if (play.active) {                     // duraklat: okunan cümle yeniden başlasın
        play.active = false; if (hasTTS) speechSynthesis.cancel();
        document.querySelectorAll(".sent.playing").forEach((e) => e.classList.remove("playing"));
        updatePlayBtn(); return;
      }
      playFrom(u); return;
    }
    if ((el = d("[data-playrestart]"))) { stopAll(); play.idx = 0; playFrom(u); return; }
    if ((el = d("[data-str]"))) { const k = "st:" + el.dataset.str; st.notes[k] = !st.notes[k]; save(); rerender(true); return; }
    if ((el = d("[data-stoppick]"))) { st.stopPick = +el.dataset.stoppick; save(); rerender(true); return; }
    if ((el = d("[data-stopgo]")) || (el = d("[data-stopskip]"))) { st.stopDone = true; save(); rerender(true); return; }

    // sorular
    if ((el = d("[data-pick]"))) {
      const id = el.closest("[data-mc]").dataset.mc; const pick = +el.dataset.pick;
      const q = findQ(u, id);
      st.tries = st.tries || {};
      const tries = st.tries[id] || [];
      if (q && pick !== q.a && tries.length === 0) { st.tries[id] = [pick]; }   // ilk yanlış: bir hak daha
      else st.ans[id] = pick;
      save(); rerender(true); return;
    }
    if ((el = d("[data-goto]"))) { ev.preventDefault(); gotoSentence(u, el.dataset.goto); return; }
    if ((el = d("[data-nostops]"))) {
      ev.preventDefault();
      S.noStops = el.dataset.nostops === "1"; save();
      toast(S.noStops ? "Tahmin durakları kapatıldı. Okuma ekranından yeniden açabilirsin." : "Tahmin durakları açıldı.");
      rerender(true); return;
    }
    if ((el = d("[data-vreset]"))) {
      ev.preventDefault();
      const pre = S.vanish + "|";
      Object.keys(st.rev || {}).forEach((k) => { if (k.startsWith(pre)) delete st.rev[k]; });
      save(); rerender(true); return;
    }
    if ((el = d("[data-otr]"))) { const k = "ot:" + el.dataset.otr; st.notes[k] = !st.notes[k]; save(); rerender(true); return; }
    if ((el = d("[data-qtr]"))) { const k = "tr:" + el.dataset.qtr; st.notes[k] = !st.notes[k]; save(); rerender(true); return; }

    // sıralama
    if ((el = d("[data-order]"))) { st.order = (st.order || []).concat(+el.dataset.order); st.orderChecked = false; save(); rerender(true); return; }
    if ((el = d("[data-unorder]"))) { st.order.splice(+el.dataset.unorder, 1); st.orderChecked = false; save(); rerender(true); return; }
    if ((el = d("[data-order-reset]"))) { st.order = []; st.orderChecked = false; save(); rerender(true); return; }
    if ((el = d("[data-order-check]"))) { st.orderChecked = true; save(); rerender(true); return; }

    if ((el = d("[data-cz-check]"))) { st.clozeChecked = true; save(); rerender(true); return; }
    if ((el = d("[data-finish]"))) { st.done = true; save(); toast("Ünite tamamlandı. Tebrikler!"); rerender(true); return; }
  });

  document.addEventListener("change", (ev) => {
    const t = ev.target;
    const unitId = +app.dataset.unit;
    if (t.matches("[data-rate]")) { S.rate = +t.value; save(); return; }
    if (t.matches("[data-vanish]")) { S.vanish = t.value || false; save(); rerender(true); return; }
    if (t.matches("[data-cz]") && unitId) {
      const st = U(unitId); st.cloze = st.cloze || []; st.cloze[+t.dataset.cz] = t.value; st.clozeChecked = false; save();
      t.classList.remove("ok", "bad");
    }
  });
  document.addEventListener("toggle", (ev) => {
    const t = ev.target;
    if (t.matches && t.matches("details.more") && app.dataset.unit) { U(+app.dataset.unit).notes["more:" + t.dataset.more] = t.open; save(); }
  }, true);
  document.addEventListener("input", (ev) => {
    const t = ev.target;
    if (t.matches("[data-note]") && app.dataset.unit) { U(+app.dataset.unit).notes[t.dataset.note] = t.value; save(); }
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") hidePop();
    if ((ev.key === "Enter" || ev.key === " ") && ev.target.matches("[data-vflip]")) { ev.preventDefault(); ev.target.click(); }
  });

  function findQ(u, id) {
    if (id.startsWith("q")) return u.post.questions[+id.slice(1)];
    if (id.startsWith("f")) return u.post.focus.items[+id.slice(1)];
    if (id.startsWith("chk")) return u.checks && u.checks[+id.slice(3)];
    return null;
  }
  // okuma ekranına git, cümleyi göster ve vurgula
  let pendingGoto = null;
  function gotoSentence(u, key) {
    const st = U(u.id);
    const [n, i] = key.split(".").map(Number);
    if (u.stop && !st.stopDone && (n > u.stop.section || (n === u.stop.section && i > u.stop.after))) { st.stopDone = true; save(); }
    pendingGoto = key;
    const target = `${base()}/u/${u.id}/read`;
    if (location.hash === target) rerender(true); else location.hash = target;
  }
  function flushGoto() {
    if (!pendingGoto) return;
    const row = document.querySelector(`.sent[data-key="${pendingGoto}"]`);
    pendingGoto = null;
    if (!row) return;
    row.scrollIntoView({ block: "center" });
    row.classList.add("flash");
    setTimeout(() => row.classList.remove("flash"), 2200);
  }

  function sentText(u, key) {
    const [n, i] = key.split(".").map(Number);
    const sec = u.sections.find((s) => s.n === n);
    return sec.s[i][0];
  }
  function applyFont() { document.documentElement.style.setProperty("--ar-size", (1.5 * S.font).toFixed(2) + "rem"); }

  /* ---------------- başlat ---------------- */
  renderTop();
  if (S.font !== 1) applyFont();
  route();
})();
