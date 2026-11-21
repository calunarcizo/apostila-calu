// Teste de fumaça: abre cada página do build, confere que carrega sem erros de JavaScript
// e que a trilha e as unidades mostram o conteúdo principal.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright"); // usa o Playwright instalado na máquina

const PORT = 4179;
const base = `http://localhost:${PORT}`;
const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], { stdio: "ignore" });
await new Promise((r) => setTimeout(r, 2500));

const checks = [
  ["/", "#path .node", 7],
  ["/#indice", "#idx dt", 30],
  ["/#verbos", "#view-verbos *", 20],
  ["/u1.html#porto", "input, button", 20],
  ["/u3.html#viagem", "input, button", 20],
  ["/u4.html#porto", "input, button", 20],
  ["/u5.html#saude", "input, button", 20],
  ["/u6.html#geral", "input, button", 20],
  ["/mestrado.html#ri", "button", 5],
];

let failed = 0;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
for (const [path, sel, min] of checks) {
  errors.length = 0;
  await page.goto(base + path, { waitUntil: "load" });
  await page.waitForTimeout(400);
  const n = await page.locator(sel).count();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  const ok = n >= min && errors.length === 0 && !overflow;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${path}: ${n} "${sel}"${errors.length ? " erros: " + errors.join(" | ") : ""}${overflow ? " (rolagem horizontal)" : ""}`);
}
await browser.close();
server.kill();
process.exit(failed ? 1 : 0);
