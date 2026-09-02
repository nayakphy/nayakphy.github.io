/* ============================ starfield =============================== */
(function starfield() {
  const host = document.getElementById('starfield');
  if (!host) return;
  const canvas = document.createElement('canvas');
  host.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let stars = [], w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    const count = Math.min(260, Math.floor((window.innerWidth * window.innerHeight) / 7000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * 1.3 + 0.2) * dpr,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * 0.02 + 0.004,
      ph: Math.random() * Math.PI * 2,
      c: Math.random() > 0.85 ? '#b98bff' : (Math.random() > 0.7 ? '#6ea8ff' : '#ffffff'),
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.ph += s.tw;
      const alpha = s.a * (0.6 + 0.4 * Math.sin(s.ph));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = s.c;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  resize();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) draw();
})();

/* ===================== highlight figure SVGs ========================= */
const FIGURES = {
  comet: `<svg viewBox="0 0 400 168" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="cg" cx="70%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#0e1430"/><stop offset="100%" stop-color="#060a18"/></radialGradient>
      <linearGradient id="tail" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4be1c8" stop-opacity=".9"/><stop offset="100%" stop-color="#4be1c8" stop-opacity="0"/></linearGradient></defs>
    <rect width="400" height="168" fill="url(#cg)"/>
    ${stars(46)}
    <path d="M300 68 L120 150 L150 120 Z" fill="url(#tail)" opacity=".7"/>
    <path d="M300 68 L110 96 L150 120 Z" fill="url(#tail)" opacity=".5"/>
    <circle cx="300" cy="68" r="9" fill="#eafffb"/>
    <circle cx="300" cy="68" r="18" fill="#4be1c8" opacity=".28"/>
    <circle cx="300" cy="68" r="30" fill="#6ea8ff" opacity=".12"/>
  </svg>`,

  binary: `<svg viewBox="0 0 400 168" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bg2" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#0f1533"/><stop offset="100%" stop-color="#060a18"/></radialGradient></defs>
    <rect width="400" height="168" fill="url(#bg2)"/>
    ${stars(40)}
    <ellipse cx="200" cy="84" rx="120" ry="40" fill="none" stroke="#2c3860" stroke-width="1" stroke-dasharray="3 5"/>
    <circle cx="320" cy="84" r="26" fill="#ffd27a"/>
    <circle cx="320" cy="84" r="40" fill="#ffd27a" opacity=".16"/>
    <circle cx="80" cy="84" r="6" fill="#dbe8ff"/>
    <circle cx="80" cy="84" r="13" fill="#6ea8ff" opacity=".35"/>
    <text x="66" y="130" fill="#9aa6c4" font-size="11" font-family="Inter,sans-serif">white dwarf</text>
    <text x="292" y="130" fill="#9aa6c4" font-size="11" font-family="Inter,sans-serif">MS star</text>
  </svg>`,

  ttauri: `<svg viewBox="0 0 400 168" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="tg" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#101636"/><stop offset="100%" stop-color="#060a18"/></radialGradient>
      <radialGradient id="star" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="60%" stop-color="#b98bff"/><stop offset="100%" stop-color="#6ea8ff"/></radialGradient></defs>
    <rect width="400" height="168" fill="url(#tg)"/>
    ${stars(38)}
    <ellipse cx="200" cy="84" rx="150" ry="26" fill="none" stroke="#6ea8ff" stroke-width="1" opacity=".35"/>
    <ellipse cx="200" cy="84" rx="110" ry="18" fill="none" stroke="#b98bff" stroke-width="1" opacity=".4"/>
    <ellipse cx="200" cy="84" rx="150" ry="26" fill="#6ea8ff" opacity=".07"/>
    <circle cx="200" cy="84" r="24" fill="url(#star)"/>
    <circle cx="200" cy="84" r="40" fill="#b98bff" opacity=".15"/>
  </svg>`,

  cluster: `<svg viewBox="0 0 400 168" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="clg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#131a3c"/><stop offset="100%" stop-color="#060a18"/></radialGradient></defs>
    <rect width="400" height="168" fill="url(#clg)"/>
    <circle cx="200" cy="84" r="70" fill="#6ea8ff" opacity=".08"/>
    <circle cx="200" cy="84" r="45" fill="#b98bff" opacity=".08"/>
    ${clusterStars()}
  </svg>`,
};
function stars(n) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = Math.random() * 400, y = Math.random() * 168, r = Math.random() * 1.1 + .3;
    const o = (Math.random() * .6 + .3).toFixed(2);
    s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="#fff" opacity="${o}"/>`;
  }
  return s;
}
function clusterStars() {
  let s = '';
  const cx = 200, cy = 84;
  for (let i = 0; i < 130; i++) {
    const ang = Math.random() * Math.PI * 2;
    const rad = Math.pow(Math.random(), 0.6) * 78;
    const x = cx + Math.cos(ang) * rad, y = cy + Math.sin(ang) * rad * 0.62;
    const r = Math.random() * 1.6 + .4;
    const cols = ['#ffffff', '#dbe8ff', '#ffd27a', '#6ea8ff', '#b98bff'];
    const c = cols[Math.floor(Math.random() * cols.length)];
    const o = (Math.random() * .5 + .5).toFixed(2);
    s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="${c}" opacity="${o}"/>`;
  }
  return s;
}

/* ===================== render homepage sections ====================== */
function badge(p) {
  if (!p.q) return '';
  const cls = p.q === 'Q2' ? 'badge q2' : 'badge';
  return `<span class="${cls}">${p.q}${p.if ? ' · IF ' + p.if : ''}</span>`;
}

function renderHome() {
  // highlights
  const hc = document.getElementById('highlights');
  if (hc) {
    hc.innerHTML = HIGHLIGHTS.map(h => `
      <article class="hcard reveal">
        <div class="fig">${FIGURES[h.figure] || ''}</div>
        <div class="body">
          <div class="tag">${h.tag}</div>
          <h3>${h.title}</h3>
          <p>${h.text}</p>
          <div class="refs">${h.refs.map(r => `<a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a>`).join('')}</div>
        </div>
      </article>`).join('');
  }
  // interests
  const ic = document.getElementById('interests');
  if (ic) {
    ic.innerHTML = INTERESTS.map(i => `
      <div class="icard reveal">
        <div class="ic">${i.icon}</div><h3>${i.title}</h3><p>${i.text}</p>
      </div>`).join('');
  }
  // facilities
  const fc = document.getElementById('facilities');
  if (fc) fc.innerHTML = FACILITIES.map(f => `<span>${f}</span>`).join('');
  // timeline
  const tc = document.getElementById('timeline');
  if (tc) {
    tc.innerHTML = TIMELINE.map(t => `
      <div class="tl-item"><div class="yr">${t.yr}</div><h4>${t.title}</h4><span>${t.org}</span></div>`).join('');
  }
  // selected publications (first-author, top 6)
  const pc = document.getElementById('selected-pubs');
  if (pc) {
    pc.innerHTML = PUBS.first.slice(0, 6).map(p => `
      <div class="pub reveal">
        <div class="yr">${p.year}</div>
        <div>
          <p class="title">${p.title}${badge(p)}</p>
          <div class="meta">${p.authors} — <span class="jrnl">${p.journal}</span> ${p.ref} · <a class="doi" href="${p.doi}" target="_blank" rel="noopener">DOI ↗</a></div>
        </div>
      </div>`).join('');
  }
  // metrics on home
  const mc = document.getElementById('home-metrics');
  if (mc) {
    const m = PROFILE.metrics;
    mc.innerHTML = `
      <div class="stat"><b>${m.total}</b><span>peer-reviewed papers</span></div>
      <div class="stat"><b>${m.q1}<span class="u"> Q1</span></b><span>top-quartile journals</span></div>
      <div class="stat"><b>${m.firstAuthor}</b><span>first / corresponding author</span></div>
      <div class="stat"><b>${m.last3}</b><span>in the last 3 years</span></div>`;
  }
}

/* ===================== render publications page ====================== */
function fullPub(p) {
  return `<div class="full-pub" data-text="${(p.title + ' ' + p.authors + ' ' + p.journal).replace(/<[^>]+>/g, '').toLowerCase()}">
    <p class="t">${p.title}</p>
    <p class="a">${p.authors}</p>
    <p class="j"><span class="jrnl">${p.journal}</span> ${p.ref} (${p.year})${badge(p)} &nbsp; <a href="${p.doi}" target="_blank" rel="noopener">${p.doi.replace('https://doi.org/', 'doi:')} ↗</a></p>
  </div>`;
}
function renderPubs() {
  const groups = [
    { id: 'g-first', key: 'first', label: 'First / Corresponding Author' },
    { id: 'g-contrib', key: 'contrib', label: 'Significant Contribution' },
    { id: 'g-coauthor', key: 'coauthor', label: 'Selected Co-author Publications' },
    { id: 'g-proc', key: 'proceedings', label: 'Conference Proceedings' },
  ];
  groups.forEach(g => {
    const el = document.getElementById(g.id);
    if (el) el.innerHTML = PUBS[g.key].map(fullPub).join('');
    const cnt = document.getElementById(g.id + '-count');
    if (cnt) cnt.textContent = PUBS[g.key].length + ' papers';
  });
  // metrics
  const mm = document.getElementById('pub-metrics');
  if (mm) {
    const m = PROFILE.metrics;
    mm.innerHTML = `
      <div class="metric"><b>${m.total}</b><span>Peer-reviewed</span></div>
      <div class="metric"><b>${m.q1}</b><span>Q1 journals</span></div>
      <div class="metric"><b>${m.q2}</b><span>Q2 journals</span></div>
      <div class="metric"><b>${m.last3}</b><span>Last 3 years</span></div>
      <div class="metric"><b>${m.firstAuthor}</b><span>First author</span></div>`;
  }
  // search filter
  const search = document.getElementById('pub-search');
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll('.full-pub').forEach(el => {
        el.style.display = !q || el.dataset.text.includes(q) ? '' : 'none';
      });
    });
  }
}

/* ========================= shared bits =============================== */
function fillCommon() {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

function reveal() {
  const els = Array.from(document.querySelectorAll('.reveal'));
  const showAll = () => els.forEach(el => el.classList.add('in'));
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showAll();
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
  // safety net: never leave content invisible (e.g. if scroll never reaches it)
  setTimeout(showAll, 2500);
}

function navToggle() {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('nav.links');
  if (btn && links) btn.addEventListener('click', () => links.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('highlights')) renderHome();
  if (document.getElementById('g-first')) renderPubs();
  fillCommon();
  navToggle();
  reveal();
});
