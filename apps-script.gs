/**
 * Backend de collecte — à coller dans un projet Apps Script LIÉ à un Google Sheet
 * (Extensions > Apps Script), puis Déployer > Application Web :
 *   Exécuter en tant que : Moi   |   Accès : Tout le monde
 * Copiez l'URL de l'application Web dans config.js (ENDPOINT).
 */
const SHEET_NAME = "Réponses";
const NB_QUESTIONS = 18;

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    const header = ["Horodatage", "Session"];
    for (let i = 1; i <= NB_QUESTIONS; i++) header.push("Q" + i);
    sh.appendRow(header);
  }
  return sh;
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  try {
    if (p.action === "submit") {
      const lock = LockService.getScriptLock();
      lock.waitLock(10000);
      try { submit_(p.sid, p.a); } finally { lock.releaseLock(); }
    }
    return json_(aggregate_());
  } catch (err) {
    return json_({ error: String(err) });
  }
}

function submit_(sid, bits) {
  if (!/^[A-Za-z0-9_-]{6,40}$/.test(sid || "")) throw new Error("Identifiant invalide");
  if (!new RegExp("^[01]{" + NB_QUESTIONS + "}$").test(bits || "")) throw new Error("Réponses invalides");
  const sh = getSheet_();
  const last = sh.getLastRow();
  if (last > 1) {
    const sids = sh.getRange(2, 2, last - 1, 1).getValues().flat();
    if (sids.indexOf(sid) !== -1) return; // déjà enregistré : on ignore le doublon
  }
  sh.appendRow([new Date(), sid].concat(bits.split("").map(Number)));
}

function aggregate_() {
  const sh = getSheet_();
  const last = sh.getLastRow();
  const yes = new Array(NB_QUESTIONS).fill(0);
  if (last <= 1) return { n: 0, yes: yes };
  const rows = sh.getRange(2, 3, last - 1, NB_QUESTIONS).getValues();
  rows.forEach(r => r.forEach((v, i) => { yes[i] += Number(v) || 0; }));
  return { n: rows.length, yes: yes };
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
