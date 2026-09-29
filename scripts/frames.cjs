// Frame timing while auto-scrolling the page. W/H viewport, CPU=throttle factor.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
;(async () => {
  const W = +(process.env.W || 390), H = +(process.env.H || 844)
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars", "--enable-gpu-rasterization", "--ignore-gpu-blocklist"] })
  const p = await b.newPage()
  await p.setViewport({ width: W, height: H, isMobile: W < 700, hasTouch: W < 700 })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto("http://localhost:" + (process.env.PORT || 3641) + "/", { waitUntil: "networkidle2" })
  const cdp = await p.target().createCDPSession()
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: +(process.env.CPU || 4) })
  await new Promise((r) => setTimeout(r, 2000))
  const res = await p.evaluate(async () => {
    const secs = [...document.querySelectorAll("section, footer")]
    const label = (el) => (el.getAttribute("aria-label") || el.getAttribute("aria-labelledby") || el.tagName).slice(0, 30)
    const stats = {}
    let last = performance.now()
    const Hh = document.documentElement.scrollHeight - innerHeight
    const start = performance.now()
    await new Promise((done) => {
      function step(now) {
        const dt = now - last; last = now
        const y = Math.min(((now - start) / 1000) * 1000, Hh)
        window.scrollTo(0, y)
        let name = "?"
        for (const s of secs) { const r = s.getBoundingClientRect(); if (r.top <= innerHeight / 2 && r.bottom >= innerHeight / 2) name = label(s) }
        ;(stats[name] ||= []).push(dt)
        if (y >= Hh) done(); else requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
    return Object.entries(stats).map(([k, v]) => { const s = [...v].sort((a, b) => a - b); return `${k.padEnd(30)} n${v.length} p50 ${s[Math.floor(s.length * 0.5)].toFixed(1)} p95 ${s[Math.floor(s.length * 0.95)].toFixed(1)} max ${s[s.length - 1].toFixed(0)} >25:${v.filter((x) => x > 25).length}` }).join("\n")
  })
  console.log(res)
  await b.close()
})()
