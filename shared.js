// Fonctions communes : envoi des réponses, lecture des statistiques, mode démo.
const DEMO = !ENDPOINT;
const NQ = QUESTIONS.length;

// Taux de « oui » fictifs pour le mode démo (27 participants simulés).
const DEMO_RATES = [0.56,0.41,0.63,0.48,0.33,0.30,0.81,0.52,0.44,0.59,0.37,0.33,0.26,0.22,0.48,0.41,0.56,0.30];
function demoStats(jitter) {
  const n = 27;
  return {
    n,
    yes: DEMO_RATES.map(r => {
      let y = Math.round(r * n);
      if (jitter) y = Math.max(0, Math.min(n, y + Math.floor(Math.random() * 3) - 1));
      return y;
    })
  };
}

async function callEndpoint(params) {
  const url = ENDPOINT + "?" + new URLSearchParams(params).toString();
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data; // { n, yes: [..] }
}

// bits : chaîne de 18 caractères « 1 » (oui) / « 0 » (non)
async function submitAnswers(sid, bits) {
  if (DEMO) {
    const s = demoStats(false);
    s.n += 1;
    [...bits].forEach((b, i) => { s.yes[i] += Number(b); });
    return s;
  }
  return callEndpoint({ action: "submit", sid, a: bits });
}

async function loadStats() {
  if (DEMO) return demoStats(true);
  return callEndpoint({ action: "stats" });
}

const pct = (y, n) => (n ? Math.round((y / n) * 100) : 0);
const fr1 = x => x.toFixed(1).replace(".", ",");

// Moyenne de « oui » par pilier (sur 3), à partir des stats de groupe
function pillarAverages(stats) {
  return PILLARS.map((_, p) => {
    const ids = QUESTIONS.map((q, i) => (q.pillar === p ? i : -1)).filter(i => i >= 0);
    const total = ids.reduce((acc, i) => acc + stats.yes[i], 0);
    return stats.n ? total / stats.n : 0;
  });
}
