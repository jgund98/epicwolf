// Trace the scroll into the brand-world section on a throttled phone and list long tasks.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const fs = require("fs")
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:" + (process.env.PORT || 3641) + "/", { waitUntil: "networkidle2" })
  const cdp = await p.target().createCDPSession()
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 })
  await new Promise((r) => setTimeout(r, 1500))
  const top = await p.evaluate(() => document.querySelector("[aria-labelledby=world-title]").getBoundingClientRect().top + scrollY)
  await p.evaluate((y) => scrollTo(0, y - innerHeight * 2.2), top)
  await new Promise((r) => setTimeout(r, 800))
  await p.tracing.start({ path: "shots/world-trace.json", categories: ["devtools.timeline", "disabled-by-default-devtools.timeline", "blink", "cc", "gpu", "v8"] })
  await p.evaluate(async (y) => {
    const start = scrollY, end = y + innerHeight * 0.5, t0 = performance.now()
    await new Promise((done) => { const f = (now) => { const k = Math.min((now - t0) / 1800, 1); scrollTo(0, start + (end - start) * k); k < 1 ? requestAnimationFrame(f) : done() }; requestAnimationFrame(f) })
  }, top)
  await p.tracing.stop()
  await b.close()
  const ev = JSON.parse(fs.readFileSync("shots/world-trace.json", "utf8")).traceEvents
  const main = ev.filter((e) => e.name === "RunTask" && e.dur > 40000)
  for (const t of main.sort((a, b) => b.dur - a.dur).slice(0, 6)) {
    const kids = ev.filter((e) => e.tid === t.tid && e.pid === t.pid && e.ts >= t.ts && e.ts + (e.dur || 0) <= t.ts + t.dur && e.dur > 5000 && e.name !== "RunTask")
    const agg = {}
    for (const k of kids) agg[k.name] = (agg[k.name] || 0) + k.dur
    console.log(`task ${(t.dur / 1000).toFixed(0)}ms:`, Object.entries(agg).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([n, d]) => `${n} ${(d / 1000).toFixed(0)}`).join(", "))
  }
  const dec = ev.filter((e) => /Decode/.test(e.name) && e.dur)
  console.log("decode events:", dec.length, "total ms", (dec.reduce((s, e) => s + e.dur, 0) / 1000).toFixed(0), "max", (Math.max(0, ...dec.map((e) => e.dur)) / 1000).toFixed(0))
})()
