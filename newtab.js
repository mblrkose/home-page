// ============================================================
//  newtab.js  —  Custom Start Page Logic
// ============================================================

/* ─── THEME DATA ─────────────────────────────────────────── */
const THEMES = {
  1: {
    name: 'Purple',
    dot: '#9D4EDD',
    vars: {
      '--bg': '#10002b',
      '--card-a': '#240046',
      '--card-b': '#3C096C',
      '--card-c': '#5A189A',
      '--card-d': '#7B2CBF',
      '--accent': '#9D4EDD',
      '--accent2': '#C77DFF',
      '--primary': '#E0AAFF',
      '--search-bg': '#240046',
      '--search-border': '#5A189A',
      '--text': '#f1f5f9',
      '--text-muted': '#E0AAFF',
      '--text-dim': '#C77DFF',
      '--shadow-glow': '0 0 25px rgba(224,170,255,0.15)',
      '--shortcut-bg': 'linear-gradient(135deg, #9D4EDD, #C77DFF)',
    }
  },
  2: {
    name: 'Ignis',
    dot: '#e85d04',
    vars: {
      '--bg': '#03071e',
      '--card-a': '#370617',
      '--card-b': '#6a040f',
      '--card-c': '#9d0208',
      '--card-d': '#370617',
      '--accent': '#e85d04',
      '--accent2': '#f48c06',
      '--primary': '#ffba08',
      '--search-bg': '#6a040f',
      '--search-border': '#e85d04',
      '--text': '#ffba08',
      '--text-muted': '#f48c06',
      '--text-dim': '#faa307',
      '--shadow-glow': '0 0 25px rgba(232,93,4,0.3)',
      '--shortcut-bg': '#9d0208',
    }
  },
  3: {
    name: 'Zen',
    dot: '#588157',
    vars: {
      '--bg': '#344e41',
      '--card-a': '#3a5a40',
      '--card-b': '#3a5a40',
      '--card-c': '#588157',
      '--card-d': '#3a5a40',
      '--accent': '#588157',
      '--accent2': '#a3b18a',
      '--primary': '#dad7cd',
      '--search-bg': '#588157',
      '--search-border': 'rgba(163,177,138,0.2)',
      '--text': '#dad7cd',
      '--text-muted': 'rgba(218,215,205,0.6)',
      '--text-dim': 'rgba(218,215,205,0.5)',
      '--shadow-glow': '0 0 20px rgba(88,129,87,0.3)',
      '--shortcut-bg': '#3a5a40',
    }
  },
  4: {
    name: 'Cozy',
    dot: '#d4a373',
    vars: {
      '--bg': '#fefae0',
      '--card-a': '#e9edc9',
      '--card-b': '#faedcd',
      '--card-c': '#ccd5ae',
      '--card-d': '#e9edc9',
      '--accent': '#d4a373',
      '--accent2': '#ccd5ae',
      '--primary': '#d4a373',
      '--search-bg': '#e9edc9',
      '--search-border': 'rgba(212,163,115,0.3)',
      '--text': '#344e41',
      '--text-muted': '#d4a373',
      '--text-dim': '#ccd5ae',
      '--shadow-glow': '0 0 20px rgba(212,163,115,0.2)',
      '--shortcut-bg': '#ccd5ae',
    }
  },
  5: {
    name: 'Power',
    dot: '#ff4d6d',
    vars: {
      '--bg': '#590d22',
      '--card-a': '#c9184a',
      '--card-b': '#a4133c',
      '--card-c': '#800f2f',
      '--card-d': '#c9184a',
      '--accent': '#ff4d6d',
      '--accent2': '#ff8fa3',
      '--primary': '#ffccd5',
      '--search-bg': '#c9184a',
      '--search-border': '#ff4d6d',
      '--text': '#ffccd5',
      '--text-muted': '#ff8fa3',
      '--text-dim': '#ff4d6d',
      '--shadow-glow': '0 0 30px rgba(255,77,109,0.25)',
      '--shortcut-bg': '#c9184a',
    }
  },
  6: {
    name: 'EcoDash',
    dot: '#52b788',
    vars: {
      '--bg': '#081c15',
      '--card-a': '#1b4332',
      '--card-b': '#2d6a4f',
      '--card-c': '#40916c',
      '--card-d': '#40916c',
      '--accent': '#52b788',
      '--accent2': '#b7e4c7',
      '--primary': '#d8f3dc',
      '--search-bg': '#2d6a4f',
      '--search-border': 'rgba(82,183,136,0.2)',
      '--text': '#d8f3dc',
      '--text-muted': '#b7e4c7',
      '--text-dim': '#95d5b2',
      '--shadow-glow': '0 0 25px rgba(82,183,136,0.2)',
      '--shortcut-bg': '#52b788',
    }
  }
};

/* ─── WEATHER CODE → ICON MAPPING ───────────────────────── */
const WMO = {
  0: 'sunny', 1: 'partly_cloudy_day', 2: 'partly_cloudy_day', 3: 'cloud',
  45: 'foggy', 48: 'foggy',
  51: 'rainy', 53: 'rainy', 55: 'rainy', 56: 'rainy', 57: 'rainy',
  61: 'rainy', 63: 'rainy', 65: 'rainy', 66: 'rainy', 67: 'rainy',
  71: 'weather_snowy', 73: 'weather_snowy', 75: 'weather_snowy', 77: 'weather_snowy',
  80: 'rainy', 81: 'rainy', 82: 'thunderstorm',
  85: 'weather_snowy', 86: 'weather_snowy',
  95: 'thunderstorm', 96: 'thunderstorm', 99: 'thunderstorm'
};
const WMO_LABEL = {
  0: 'Clear Sky', 1: 'Mostly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Foggy',
  51: 'Light Drizzle', 53: 'Drizzle', 55: 'Heavy Drizzle', 56: 'Freezing Drizzle', 57: 'Freezing Drizzle',
  61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain', 66: 'Freezing Rain', 67: 'Freezing Rain',
  71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow', 77: 'Snow Grains',
  80: 'Rain Showers', 81: 'Rain Showers', 82: 'Violent Showers',
  85: 'Snow Showers', 86: 'Snow Showers',
  95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm'
};

/* ─── DEFAULT SHORTCUTS ─────────────────────────────────── */
const DEFAULT_SHORTCUTS = [
  { name: 'YouTube', url: 'https://youtube.com', icon: '' },
  { name: 'GitHub', url: 'https://github.com', icon: '' },
  { name: 'Gmail', url: 'https://mail.google.com', icon: '' },
  { name: 'Reddit', url: 'https://reddit.com', icon: '' },
  { name: 'Wikipedia', url: 'https://wikipedia.org', icon: '' },
  { name: 'X', url: 'https://x.com', icon: '' },
];

const DEFAULT_BOOKMARKS = [
  { name: 'Google Drive', url: 'https://drive.google.com' },
  { name: 'Notion', url: 'https://notion.so' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Figma', url: 'https://figma.com' },
];

/* ─── STATE ──────────────────────────────────────────────── */
let activeTheme = parseInt(localStorage.getItem('sp_theme') || '6');
let activeEngine = localStorage.getItem('sp_engine') || 'google';
let todos = JSON.parse(localStorage.getItem('sp_todos') || '[]');
let bookmarks = JSON.parse(localStorage.getItem('sp_bookmarks') || 'null') ?? DEFAULT_BOOKMARKS;
let shortcuts = JSON.parse(localStorage.getItem('sp_shortcuts') || 'null') ?? DEFAULT_SHORTCUTS;

/* ─── HELPERS ────────────────────────────────────────────── */
function saveTodos() { localStorage.setItem('sp_todos', JSON.stringify(todos)); }
function saveBookmarks() { localStorage.setItem('sp_bookmarks', JSON.stringify(bookmarks)); }
function saveShortcuts() { localStorage.setItem('sp_shortcuts', JSON.stringify(shortcuts)); }

function faviconUrl(url) {
  try { return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`; }
  catch { return ''; }
}

function escHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ─── 1. THEME ───────────────────────────────────────────── */
function applyTheme(id) {
  activeTheme = id;
  localStorage.setItem('sp_theme', id);
  const t = THEMES[id];
  const root = document.documentElement;
  Object.entries(t.vars).forEach(([k, v]) => root.style.setProperty(k, v));

  // Update switcher dots active state
  document.querySelectorAll('.theme-dot').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.theme) === id);
  });
}

function renderThemeSwitcher() {
  const wrap = document.getElementById('theme-switcher');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(THEMES).map(([id, t]) => `
    <button class="theme-dot"
      data-theme="${id}" 
      title="${t.name}"
      style="background:${t.dot}"></button>
  `).join('');

  // Delegation
  wrap.addEventListener('click', e => {
    const dot = e.target.closest('.theme-dot');
    if (dot) applyTheme(parseInt(dot.dataset.theme));
  });

  // Highlight initial active dot
  document.querySelectorAll('.theme-dot').forEach(el => {
    if (parseInt(el.dataset.theme) === activeTheme) el.classList.add('active');
  });
}

/* ─── 2. CLOCK ───────────────────────────────────────────── */
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const colon = now.getSeconds() % 2 === 0 ? '<span class="opacity-100">:</span>' : '<span class="opacity-30">:</span>';
  const el = document.getElementById('clock-time');
  if (el) el.innerHTML = h + colon + m;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
  const el2 = document.getElementById('clock-date');
  if (el2) el2.textContent = dateStr;
}

/* ─── 3. SEARCH ──────────────────────────────────────────── */
const ENGINES = {
  google: { url: 'https://www.google.com/search?q=', label: 'Google' },
  perplexity: { url: 'https://www.perplexity.ai/search?q=', label: 'Perplexity' },
  ddg: { url: 'https://duckduckgo.com/?q=', label: 'DuckDuckGo' },
  yandex: { url: 'https://yandex.com/search/?text=', label: 'Yandex' },
};

function doSearch() {
  const q = document.getElementById('search-input')?.value?.trim();
  if (!q) return;
  window.location.href = ENGINES[activeEngine].url + encodeURIComponent(q);
}

function setEngine(key) {
  activeEngine = key;
  localStorage.setItem('sp_engine', key);
  document.querySelectorAll('[data-engine]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.engine === key);
  });
}

function initSearch() {
  const inp = document.getElementById('search-input');
  if (!inp) return;
  const glow = document.getElementById('search-glow');

  inp.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  inp.addEventListener('focus', () => { if (glow) glow.style.opacity = '0.12'; });
  inp.addEventListener('blur', () => { if (glow) glow.style.opacity = '0'; });

  document.getElementById('search-btn')?.addEventListener('click', doSearch);
  document.querySelectorAll('[data-engine]').forEach(btn => {
    btn.addEventListener('click', () => setEngine(btn.dataset.engine));
  });
  setEngine(activeEngine);
}

/* ─── 4. TODOS ───────────────────────────────────────────── */
function renderTodos() {
  const list = document.getElementById('todo-list');
  if (!list) return;
  if (todos.length === 0) {
    list.innerHTML = '<p style="text-align:center; opacity:0.3; font-size:0.75rem; padding:2rem 0;">Clear horizons. No tasks today.</p>';
    return;
  }
  list.innerHTML = todos.map((t, i) => `
    <div class="item-row group ${t.done ? 'done' : ''}" data-index="${i}">
      <label class="task-checkbox-container" style="pointer-events: none;">
        <input type="checkbox" ${t.done ? 'checked' : ''} disabled>
        <span class="task-checkmark"></span>
      </label>
      <span class="text-label" style="flex:1;">${escHtml(t.text)}</span>
      <button data-action="delete" class="delete-btn">✕</button>
    </div>
  `).join('');
}

function addTodo() {
  const inp = document.getElementById('todo-input');
  const text = inp?.value?.trim();
  if (!text) return;
  todos.push({ id: Date.now(), text, done: false });
  saveTodos(); renderTodos();
  inp.value = '';
}

function toggleTodo(i) {
  if (todos[i]) { todos[i].done = !todos[i].done; saveTodos(); renderTodos(); }
}

function deleteTodo(i) {
  todos.splice(i, 1); saveTodos(); renderTodos();
}

function initTodos() {
  renderTodos();
  const inp = document.getElementById('todo-input');
  if (inp) {
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
    inp.addEventListener('focus', () => { inp.style.borderColor = 'var(--accent)'; });
    inp.addEventListener('blur', () => { inp.style.borderColor = 'var(--search-border)'; });
  }
  document.getElementById('todo-add-btn')?.addEventListener('click', addTodo);

  // DELEGATION
  const list = document.getElementById('todo-list');
  list?.addEventListener('click', e => {
    const row = e.target.closest('.item-row');
    if (!row) return;
    const index = parseInt(row.dataset.index);
    if (e.target.closest('.delete-btn')) {
      deleteTodo(index);
    } else {
      toggleTodo(index);
    }
  });
}

/* ─── 5. WEATHER ─────────────────────────────────────────── */
async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&forecast_days=4&timezone=auto`;
  const r = await fetch(url);
  return r.json();
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function renderWeather(data, city) {
  const cw = data.current_weather;
  const daily = data.daily;
  if (!cw || !daily) return;

  const icon = WMO[cw.weathercode] || 'cloud';
  const label = WMO_LABEL[cw.weathercode] || 'Unknown';
  const temp = Math.round(cw.temperature);

  // Current
  const loc = document.getElementById('weather-city');
  const tmp = document.getElementById('weather-temp');
  const lbl = document.getElementById('weather-label');
  const icnEl = document.getElementById('weather-icon');
  if (loc) loc.textContent = city;
  if (tmp) tmp.textContent = `${temp}°C`;
  if (lbl) lbl.textContent = label;
  if (icnEl) icnEl.textContent = icon;

  // Forecast strip
  const forecastEl = document.getElementById('weather-forecast');
  if (forecastEl) {
    forecastEl.innerHTML = [1, 2, 3].map(i => {
      const date = new Date(daily.time[i] + 'T12:00:00');
      const dayName = DAY_NAMES[date.getDay()];
      const fIcon = WMO[daily.weathercode[i]] || 'cloud';
      const hi = Math.round(daily.temperature_2m_max[i]);
      return `
        <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem; opacity:0.8;">
          <span style="font-size:0.75rem; color:var(--text-muted)">${dayName}</span>
          <span class="material-symbols-outlined" style="font-size:0.875rem; color:var(--primary)">${fIcon}</span>
          <span style="font-size:0.875rem; font-weight:700; color:var(--primary)">${hi}°</span>
        </div>`;
    }).join('');
  }
}

async function initWeather() {
  const errEl = document.getElementById('weather-error');

  const tryLocation = async (lat, lon, city) => {
    const weatherData = await fetchWeather(lat, lon);
    renderWeather(weatherData, city || 'Local');
    return true;
  };

  // 1. Try IP Geolocation — Service A (ipwho.is)
  try {
    const res = await fetch('https://ipwho.is/json/');
    const data = await res.json();
    if (data && data.success) {
      if (await tryLocation(data.latitude, data.longitude, data.city)) return;
    }
  } catch (e) { console.warn('IP Geo A failed'); }

  // 2. Try IP Geolocation — Service B (freeipapi.com)
  try {
    const res = await fetch('https://freeipapi.com/api/json');
    const data = await res.json();
    if (data && data.latitude) {
      if (await tryLocation(data.latitude, data.longitude, data.cityName)) return;
    }
  } catch (e) { console.warn('IP Geo B failed'); }

  // 3. Try Browser Geolocation
  try {
    const pos = await new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej, { timeout: 3000 })
    );
    const { latitude: lat, longitude: lon } = pos.coords;
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
    const geoData = await geoRes.json();
    const city = geoData.address?.city || geoData.address?.town || 'Local';
    if (await tryLocation(lat, lon, city)) return;
  } catch (e) {
    console.warn('Browser Geo failed');
  }

  // 4. Last fallback: Istanbul
  try {
    const data = await fetchWeather(41.015, 28.979);
    renderWeather(data, 'Istanbul');
  } catch (err) {
    console.error('All weather methods failed:', err);
    if (errEl) errEl.textContent = 'Weather unavailable';
  }
}

/* ─── 6. BOOKMARKS ───────────────────────────────────────── */
function renderBookmarks() {
  const list = document.getElementById('bookmarks-list');
  if (!list) return;
  if (bookmarks.length === 0) {
    list.innerHTML = '<p style="text-align:center; opacity:0.3; font-size:0.75rem; padding:2rem 0;">No bookmarks saved yet.</p>';
    return;
  }
  list.innerHTML = bookmarks.map((b, i) => `
    <div class="item-row group" data-index="${i}">
      <div class="item-icon-box">
        <img src="${faviconUrl(b.url)}" style="width:1rem; height:1rem; object-fit:contain;"
             onerror="this.parentElement.innerHTML='<span class=\\'material-symbols-outlined\\' style=\\'font-size:0.875rem; color:var(--accent)\\'>link</span>'">
      </div>
      <a href="${escHtml(b.url)}" class="text-label" style="text-decoration:none;">${escHtml(b.name)}</a>
      <button data-action="delete" class="delete-btn">✕</button>
    </div>
  `).join('');
}

function addBookmark() {
  const name = document.getElementById('bm-name')?.value?.trim();
  const url = document.getElementById('bm-url')?.value?.trim();
  if (!name || !url) return;
  const fullUrl = url.startsWith('http') ? url : 'https://' + url;
  bookmarks.unshift({ name, url: fullUrl });
  saveBookmarks(); renderBookmarks();
  document.getElementById('bm-name').value = '';
  document.getElementById('bm-url').value = '';
  closeModal('bm-modal');
}

function deleteBookmark(i) {
  bookmarks.splice(i, 1); saveBookmarks(); renderBookmarks();
}

function initBookmarks() {
  renderBookmarks();
  document.getElementById('bm-add-btn')?.addEventListener('click', () => openModal('bm-modal'));
  document.getElementById('bm-save-btn')?.addEventListener('click', addBookmark);
  document.getElementById('bm-url')?.addEventListener('keydown', e => { if (e.key === 'Enter') addBookmark(); });

  // DELEGATION
  const list = document.getElementById('bookmarks-list');
  list?.addEventListener('click', e => {
    const row = e.target.closest('.item-row');
    if (!row) return;
    const index = parseInt(row.dataset.index);
    if (e.target.closest('.delete-btn')) {
      e.preventDefault();
      deleteBookmark(index);
    }
  });
}

/* ─── 7. SHORTCUTS ───────────────────────────────────────── */
function renderShortcuts() {
  const grid = document.getElementById('shortcuts-grid');
  if (!grid) return;
  grid.innerHTML = shortcuts.map((s, i) => `
    <div class="shortcut-tile-wrap group" data-index="${i}">
      <a href="${escHtml(s.url)}" class="shortcut-tile">
        <img src="${faviconUrl(s.url)}" style="width:1.75rem; height:1.75rem; object-fit:contain;"
             onerror="this.nextElementSibling.style.display='block'; this.style.display='none'">
        <span class="sc-icon material-symbols-outlined" style="font-size:1.5rem; display:none; color:var(--primary)">link</span>
        <span style="font-size:0.75rem; font-weight:700; color:var(--primary); text-align:center; width:100%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; opacity:0.8;">${escHtml(s.name)}</span>
      </a>
      <button data-action="delete" class="delete-btn" style="position:absolute; top:-0.5rem; right:-0.5rem;">✕</button>
    </div>
  `).join('') + `
    <button id="sc-open-modal-btn" class="shortcut-add-btn">
      <span class="material-symbols-outlined" style="font-size:1.75rem; color:var(--accent); pointer-events:none;">add</span>
      <span style="font-size:0.75rem; font-weight:600; color:var(--accent); pointer-events:none;">Add</span>
    </button>
  `;
}

function addShortcut() {
  const name = document.getElementById('sc-name')?.value?.trim();
  const url = document.getElementById('sc-url')?.value?.trim();
  if (!name || !url) return;
  const fullUrl = url.startsWith('http') ? url : 'https://' + url;
  shortcuts.push({ name, url: fullUrl });
  saveShortcuts(); renderShortcuts();
  document.getElementById('sc-name').value = '';
  document.getElementById('sc-url').value = '';
  closeModal('sc-modal');
}

function deleteShortcut(i) {
  shortcuts.splice(i, 1); saveShortcuts(); renderShortcuts();
}

function initShortcuts() {
  renderShortcuts();
  document.getElementById('sc-save-btn')?.addEventListener('click', addShortcut);
  document.getElementById('sc-url')?.addEventListener('keydown', e => { if (e.key === 'Enter') addShortcut(); });

  // DELEGATION
  const grid = document.getElementById('shortcuts-grid');
  grid?.addEventListener('click', e => {
    if (e.target.closest('#sc-open-modal-btn')) {
      openModal('sc-modal');
      return;
    }
    const wrap = e.target.closest('.shortcut-tile-wrap');
    if (!wrap) return;
    const index = parseInt(wrap.dataset.index);
    if (e.target.closest('.delete-btn')) {
      e.preventDefault();
      deleteShortcut(index);
    }
  });
}

/* ─── 8. MODALS ──────────────────────────────────────────── */
function openModal(id) { document.getElementById(id)?.classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id)?.classList.add('hidden'); }

function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
  });
  document.querySelectorAll('.modal-backdrop').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) closeModal(el.id); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal('bm-modal');
      closeModal('sc-modal');
    }
  });
}

/* ─── BOOT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(activeTheme);
  renderThemeSwitcher();
  updateClock();
  setInterval(updateClock, 1000);
  initSearch();
  initTodos();
  initWeather();
  initBookmarks();
  initShortcuts();
  initModals();
});
