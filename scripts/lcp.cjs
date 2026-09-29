// Measures LCP on the live home page with a throttled phone CPU, intro on vs off.
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
;(async () => {
  const b = await puppeteer.launch({ headless: "new" })
  for (const skip of [false, true]) {
    const p = await b.newPage()
    await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
    if (skip) await p.evaluateOnNewDocument(() => { try { sessionStorage.setItem("ew:intro", "1") } catch {} })
    const cdp = await p.target().createCDPSession()
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 })
    await cdp.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 })
    await p.evaluateOnNewDocument(() => { window.__lcp = []; new PerformanceObserver((l) => l.getEntries().forEach((e) => window.__lcp.push([Math.round(e.startTime), e.element ? e.element.tagName + "." + (e.element.className || "").toString().slice(0, 30) : "?"]))).observe({ type: "largest-contentful-paint", buffered: true }) })
    await p.goto(process.env.URL || "https://www.epicwolf.agency/", { waitUntil: "networkidle2" })
    await new Promise((r) => setTimeout(r, 3000))
    console.log(skip ? "intro OFF" : "intro ON ", JSON.stringify(await p.evaluate(() => window.__lcp)))
    await p.close()
  }
  await b.close()
})()
