// frame.js - the Comparison Encyclopedia in the Research Institute design (2026-11-16).
// The bar's controls, the shared RGB Night / Institute Paper theme, the bar's height for the page below it, and the
// RGB phase-wave scene behind the page. The scene's shaders are the Institute home's own (copied byte for byte at build
// time). Each page's own content, controls, theme menu and scripts are unchanged: this file only adds to them.
// It is a classic script wrapped in one function, so none of its names can meet the pages' own top-level names.
(function () {
'use strict';
const root = document.documentElement;
const canvas = document.getElementById('cmp-scene');
const bar = document.getElementById('cmp-bar');
if (!canvas || !bar) return;
const kind = root.getAttribute('data-cmp'); // 'home' or 'sheet'
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const narrow = matchMedia('(max-width: 640px)');
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
const THEME_KEY = 'san-home-theme'; // shared with the Institute home and the SAN Encyclopedia
const MOTION_KEY = 'san-wiki-motion'; // shared with the SAN Encyclopedia: one Pause covers both encyclopedias

// ------------------------------------------------------------------ theme
const themeBtn = document.getElementById('cmp-theme');
const themeLabel = document.getElementById('cmp-theme-label');
const theme = () => (root.getAttribute('data-cmp-theme') === 'paper' ? 'paper' : 'rgb');
function setTheme(name) {
  root.setAttribute('data-cmp-theme', name);
  themeLabel.textContent = name === 'rgb' ? 'RGB' : 'Paper';
  themeBtn.setAttribute('aria-label', name === 'rgb' ? 'Switch to the Institute Paper theme' : 'Switch to the RGB Night theme');
  draw();
}
themeBtn.addEventListener('click', () => { const next = theme() === 'rgb' ? 'paper' : 'rgb'; store.set(THEME_KEY, next); setTheme(next); });
addEventListener('storage', e => { if (e.key === THEME_KEY && (e.newValue === 'rgb' || e.newValue === 'paper')) setTheme(e.newValue); });

// ------------------------------------------------------------------ the bar's height, for the space above the page
function setBarH() { root.style.setProperty('--ci-bar-h', Math.round(bar.getBoundingClientRect().height) + 'px'); }

// ------------------------------------------------------------------ WebGL: the RGB phase-wave scene, as on the Institute home
const HEADER = `#version 300 es
precision highp float; precision highp int;
uniform vec2 uView; uniform float uDpr; uniform float uTime; uniform float uScroll; uniform float uDay;
uniform vec3 uTop; uniform vec3 uBottom; uniform vec4 uPulse[4]; uniform vec3 uCam;
const vec3 RED = vec3(1.0, 0.30, 0.37), GREEN = vec3(0.18, 0.88, 0.54), BLUE = vec3(0.30, 0.55, 1.0), GOLD = vec3(1.0, 0.78, 0.34);
// phase-wave ripples on a live page: returns height (px) and its gradient
uniform vec4 uRip[4];
vec3 ripple(vec2 l){
  vec3 r = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    vec4 R = uRip[i];
    if (R.w <= 0.0 || R.z < 0.0 || R.z > 3.0) continue;
    vec2 d = l - R.xy; float dist = length(d) + 1e-3;
    float front = dist - R.z * 430.0;
    float env = exp(-front * front / 9800.0) * exp(-R.z * 1.5) * R.w;
    float ph = 0.0982 * front;
    r += vec3(env * sin(ph), env * (0.0982 * cos(ph) - front / 4900.0 * sin(ph)) * d / dist);
  }
  return r;
}
`;
const SCENE = `
vec2 screenPx(){ return vec2(gl_FragCoord.x, uView.y * uDpr - gl_FragCoord.y) / uDpr; }
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec3 scene(vec2 p){
  vec2 uv = p / uView; float t = uTime;
  vec3 c = mix(uTop, uBottom, smoothstep(-0.1, 1.1, uv.y));
  // three slowly drifting wave sources, one per colour channel; where crests meet the light adds to white
  const float k = 6.2831853 / 150.0;
  vec3 crest = vec3(0.0);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 s = uView * vec2(0.5 + 0.46 * sin(t * (0.021 + fi * 0.007) + fi * 2.1), 0.42 + 0.40 * cos(t * (0.017 + fi * 0.006) + fi * 1.3));
    s.y -= uScroll * (0.10 + fi * 0.05);
    float d = length(p - s);
    crest[i] = pow(0.5 + 0.5 * sin(d * k - t * (0.55 + fi * 0.12)), 7.0) * (0.30 + 0.70 * exp(-d / (uView.x * 0.55)));
  }
  // pulses from clicks and page events: a ring per channel, split slightly, like a lens fringe
  for (int j = 0; j < 4; j++) {
    vec4 P = uPulse[j]; float age = t - P.z;
    if (P.w <= 0.0 || age < 0.0 || age > 4.0) continue;
    float d = length(p - P.xy), r = age * 340.0, f = exp(-age * 1.1) * P.w;
    crest += vec3(exp(-pow((d - r - 8.0) / 15.0, 2.0)), exp(-pow((d - r) / 15.0, 2.0)), exp(-pow((d - r + 8.0) / 15.0, 2.0))) * f;
  }
  vec3 col = RED * crest.r + GREEN * crest.g + BLUE * crest.b;
  c = mix(c + col * 0.22, c * (1.0 - 0.06 * (crest.r + crest.g + crest.b)) + col * 0.045, uDay);
  // a sparse lattice of nodes, coloured by channel, faint at night only
  vec2 cell = floor(p / 11.0); float h = hash(cell);
  if (h > 0.987 && uDay < 0.5) {
    float tw = 0.5 + 0.5 * sin(t * 0.7 + h * 50.0);
    vec3 nc = h > 0.9957 ? RED : (h > 0.9913 ? GREEN : BLUE);
    c += mix(nc, vec3(1.0), 0.5) * smoothstep(0.22, 0.0, length(fract(p / 11.0) - 0.5)) * tw * 0.38 * (1.0 - uv.y * 0.5);
  }
  c *= 1.0 - mix(0.40, 0.10, uDay) * pow(length((uv - vec2(0.5, 0.45)) * vec2(1.0, 1.2)), 2.0);
  return c;
}
`;
const VS_FULL = `#version 300 es
void main(){ vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2)); gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0); }`;
const FS_BG = HEADER + SCENE + `
uniform float uDim; out vec4 o;
void main(){ vec3 c = scene(screenPx()); o = vec4(mix(c, c * 0.40, uDim), 1.0); }`;

const THEMES = {
  rgb: { top: [0.020, 0.016, 0.047], bottom: [0.071, 0.051, 0.133], day: 0 },
  paper: { top: [0.953, 0.933, 0.894], bottom: [0.886, 0.843, 0.765], day: 1 },
};
const scene = { gl: null, p: null, u: new Map(), t0: performance.now(), raf: 0, last: 0, frames: 0, motion: store.get(MOTION_KEY) !== 'off', frozen: 40, pulses: [] };
const now = () => (performance.now() - scene.t0) / 1000;
// on a phone the sheet covers nearly all of the scene, so there it is drawn once and kept still; in a page's own full
// screen view the scene is hidden, so it stops
const moving = () => scene.motion && !reduced.matches && !(kind === 'sheet' && narrow.matches) && !document.fullscreenElement;
function initGL() {
  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return false;
  const mk = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const p = gl.createProgram();
  gl.attachShader(p, mk(gl.VERTEX_SHADER, VS_FULL)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, FS_BG));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  scene.gl = gl; scene.p = p; scene.vao = gl.createVertexArray();
  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); stop(); scene.gl = null; canvas.hidden = true; });
  return true;
}
const uni = n => { if (!scene.u.has(n)) scene.u.set(n, scene.gl.getUniformLocation(scene.p, n)); return scene.u.get(n); };
// the scene is soft light: it renders at one pixel per CSS pixel, which also keeps phones cool
function resize() {
  const w = Math.max(1, Math.round(innerWidth)), h = Math.max(1, Math.round(innerHeight));
  if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
}
function draw() {
  const gl = scene.gl;
  if (!gl) return;
  resize();
  const th = THEMES[theme()];
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.useProgram(scene.p);
  gl.bindVertexArray(scene.vao);
  gl.uniform2f(uni('uView'), innerWidth, innerHeight);
  gl.uniform1f(uni('uDpr'), canvas.height / innerHeight);
  gl.uniform1f(uni('uTime'), moving() ? now() : scene.frozen);
  gl.uniform1f(uni('uScroll'), scrollY);
  gl.uniform1f(uni('uDay'), th.day);
  gl.uniform3fv(uni('uTop'), th.top);
  gl.uniform3fv(uni('uBottom'), th.bottom);
  const P = new Float32Array(16);
  scene.pulses.forEach((q, i) => P.set([q.x, q.y, q.t, q.amp], i * 4));
  gl.uniform4fv(uni('uPulse[0]'), P);
  gl.uniform1f(uni('uDim'), 0.0);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  scene.frames++;
}
// thirty frames a second is plenty for slow waves; nothing runs while the tab is hidden or motion is off
function tick(stamp) {
  scene.raf = 0;
  if (!scene.gl || document.hidden) return;
  if (stamp - scene.last >= 32) { scene.last = stamp; draw(); }
  if (moving()) scene.raf = requestAnimationFrame(tick);
}
const run = () => { if (!scene.raf && scene.gl && moving()) scene.raf = requestAnimationFrame(tick); };
const stop = () => { cancelAnimationFrame(scene.raf); scene.raf = 0; };
// a click on the scene sends a ring of light through it while it is moving
function pulse(x, y) {
  if (!scene.gl || !moving()) return;
  scene.pulses.push({ x, y, t: now(), amp: 1 });
  if (scene.pulses.length > 4) scene.pulses.shift();
}
const motionBtn = document.getElementById('cmp-motion');
const motionLabel = document.getElementById('cmp-motion-label');
function setMotion(on) {
  if (!on && scene.motion) scene.frozen = now();
  scene.motion = on;
  motionBtn.classList.toggle('ci-off', !on);
  motionBtn.setAttribute('aria-label', on ? 'Pause the background motion' : 'Resume the background motion');
  motionLabel.textContent = on ? 'Pause' : 'Play';
  if (moving()) run(); else { stop(); draw(); }
}
motionBtn.addEventListener('click', () => { const on = !scene.motion; store.set(MOTION_KEY, on ? 'on' : 'off'); setMotion(on); });
addEventListener('pointerdown', e => { if (!e.target.closest('input, select, textarea, dialog')) pulse(e.clientX, e.clientY); }, { passive: true });
document.addEventListener('visibilitychange', () => { if (!document.hidden) run(); });
const restyle = () => { if (moving()) run(); else { stop(); draw(); } };
reduced.addEventListener('change', restyle);
narrow.addEventListener('change', restyle);
document.addEventListener('fullscreenchange', restyle);
let rt = 0;
addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { setBarH(); draw(); }, 120); });
if ('ResizeObserver' in window) new ResizeObserver(setBarH).observe(bar);
window.__sanComparison = scene; // read by the local checks

// ------------------------------------------------------------------ on a narrow bar, the Comparison Encyclopedia's own link scrolls into view
function showHere() {
  const nav = bar.querySelector('.ci-nav'), here = bar.querySelector('.ci-here');
  if (!nav || !here || nav.scrollWidth <= nav.clientWidth) return;
  const n = nav.getBoundingClientRect(), h = here.getBoundingClientRect();
  if (h.right > n.right - 8 || h.left < n.left) nav.scrollLeft += h.left - n.left - 8;
}

// ------------------------------------------------------------------ start
setTheme(theme());
setBarH();
showHere();
try { if (!initGL()) canvas.hidden = true; } catch (e) { console.error(e); canvas.hidden = true; scene.gl = null; }
setMotion(scene.motion);
draw();
})();
