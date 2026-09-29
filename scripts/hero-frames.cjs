// Where in the hero do slow frames land? Throttled phone, slow scroll through the hero only.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
;(async () => {
  const b = await puppeteer.launch({ headless: "new", args: ["--hide-scrollbars"] })
  const p = await b.newPage()
  await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
  await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
  await p.goto(process.env.URL || "http://localhost:3641/", { waitUntil: "networkidle2" })
  const cdp = await p.target().createCDPSession()
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 })
  await new Promise((r) => setTimeout(r, 2500))
  const res = await p.evaluate(async () => {
    const hero = document.querySelector("[aria-labelledby=hero-title]")
    const end = hero.offsetHeight - innerHeight
    const slow = []
    let last = performance.now(), n = 0
    const t0 = performance.now()
    await new Promise((done) => {
      const f = (now) => {
        const dt = now - last; last = now; n++
        const y = Math.min(((now - t0) / 4000) * end, end)
        scrollTo(0, y)
        if (dt > 25) slow.push(`${Math.round(dt)}ms @${(y / end).toFixed(2)}`)
        y >= end ? done() : requestAnimationFrame(f)
      }
      requestAnimationFrame(f)
    })
    return `frames ${n}, slow: ${slow.join(", ")}`
  })
  console.log(res)
  await b.close()
})()
