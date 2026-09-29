// Trace the start of the hero zoom on a throttled phone and list the long tasks.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const fs = require("fs")
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:3641/", { waitUntil: "networkidle2" })
  const cdp = await p.target().createCDPSession()
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 })
  await new Promise((r) => setTimeout(r, 2500))
  await p.tracing.start({ path: "shots/hero-trace.json", categories: ["devtools.timeline", "disabled-by-default-devtools.timeline", "blink", "cc", "v8"] })
  await p.evaluate(async () => {
    const end = document.querySelector("[aria-labelledby=hero-title]").offsetHeight - innerHeight
    const t0 = performance.now()
    await new Promise((done) => { const f = (now) => { const y = Math.min(((now - t0) / 1500) * end * 0.15, end * 0.15); scrollTo(0, y); y >= end * 0.15 ? done() : requestAnimationFrame(f) }; requestAnimationFrame(f) })
  })
  await p.tracing.stop()
  await b.close()
  const ev = JSON.parse(fs.readFileSync("shots/hero-trace.json", "utf8")).traceEvents
  const tasks = ev.filter((e) => e.name === "RunTask" && e.dur > 30000).sort((a, b) => b.dur - a.dur).slice(0, 5)
  for (const t of tasks) {
    const kids = ev.filter((e) => e.tid === t.tid && e.pid === t.pid && e.ts >= t.ts && e.ts + (e.dur || 0) <= t.ts + t.dur && e.dur > 3000 && !/RunTask|ThreadControllerImpl|Scheduler/.test(e.name))
    const agg = {}
    for (const k of kids) agg[k.name] = (agg[k.name] || 0) + k.dur
    const thread = ev.find((e) => e.ph === "M" && e.name === "thread_name" && e.tid === t.tid && e.pid === t.pid)?.args?.name
    console.log(`${(t.dur / 1000).toFixed(0)}ms [${thread}]:`, Object.entries(agg).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([n, d]) => `${n} ${(d / 1000).toFixed(0)}`).join(", "))
  }
})()
