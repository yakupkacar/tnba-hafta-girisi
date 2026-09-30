// T-NBA logo işleme: beyaz/krem zemin silinir, köşeler radyal geçişle eritilir. Sonuçlar önbelleklenir.
const cache = {};
const load = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });

export function processLogo(src) {
  if (!src) return Promise.resolve('');
  if (cache[src]) return cache[src];
  cache[src] = load(src).then(img => {
    const S = 320, R = S / 2;
    const c = document.createElement('canvas'); c.width = S; c.height = S;
    const x = c.getContext('2d');
    const r = Math.min(S / img.naturalWidth, S / img.naturalHeight);
    const w = img.naturalWidth * r, h = img.naturalHeight * r;
    x.drawImage(img, (S - w) / 2, (S - h) / 2, w, h);
    const id = x.getImageData(0, 0, S, S), p = id.data;
    const lum = i => Math.min(p[i], p[i + 1], p[i + 2]);
    const flat = i => Math.max(p[i], p[i + 1], p[i + 2]) - Math.min(p[i], p[i + 1], p[i + 2]) < 42;
    const light = i => lum(i) > 196 && flat(i);
    const filled = new Uint8Array(S * S), seen = new Uint8Array(S * S), q = [];
    for (let k = 0; k < S; k++) q.push(k, (S - 1) * S + k, k * S, k * S + S - 1);
    while (q.length) {
      const n = q.pop(); if (seen[n]) continue; seen[n] = 1;
      if (!light(n * 4)) continue;
      filled[n] = 1;
      const px = n % S, py = (n / S) | 0;
      if (px > 0) q.push(n - 1); if (px < S - 1) q.push(n + 1);
      if (py > 0) q.push(n - S); if (py < S - 1) q.push(n + S);
    }
    const ss = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
    for (let n = 0; n < S * S; n++) {
      const i = n * 4;
      if (filled[n]) { p[i + 3] = 0; continue; }
      const px = n % S, py = (n / S) | 0;
      const edge = (px > 0 && filled[n - 1]) || (px < S - 1 && filled[n + 1]) || (py > 0 && filled[n - S]) || (py < S - 1 && filled[n + S]);
      if (edge && flat(i) && lum(i) > 140) p[i + 3] = Math.round(p[i + 3] * (1 - (lum(i) - 140) / 115));
      const d = Math.hypot(px - R + 0.5, py - R + 0.5) / R;
      p[i + 3] = Math.round(p[i + 3] * (1 - ss(0.8, 1.0, d)));
    }
    x.putImageData(id, 0, 0);
    return c.toDataURL('image/png');
  }).catch(() => src);
  return cache[src];
}

// TEAMS'in işlenmiş kopyasını döndürür: [monogram, renk, işlenmişLogo]
export function processTeams(TEAMS) {
  const keys = Object.keys(TEAMS);
  return Promise.all(keys.map(k => processLogo(TEAMS[k][2]))).then(urls => {
    const out = {};
    keys.forEach((k, i) => { out[k] = [TEAMS[k][0], TEAMS[k][1], urls[i]]; });
    return out;
  });
}
