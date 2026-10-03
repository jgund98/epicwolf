// Verifies the thank-you message is brought into view after a submit.
// Usage: node scripts/thanks-scroll.cjs [origin]   (the lead API is mocked)
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const origin = process.argv[2] || "http://localhost:3640"
;(async () => {
  const browser = await puppeteer.launch({ headless: "new" })
  for (const vp of [{ width: 1440, height: 900 }, { width: 390, height: 844, isMobile: true, hasTouch: true }]) {
    const page = await browser.newPage()
    await page.setViewport(vp)
    await page.setRequestInterception(true)
    page.on("request", (r) =>
      r.url().includes("/api/lead") ? r.respond({ status: 200, contentType: "application/json", body: '{"ok":true}' }) : r.continue()
    )
    await page.goto(origin + "/contact", { waitUntil: "networkidle2" })
    await page.type("form [name=name]", "Test Person")
    await page.type("form [name=email]", "test@example.com")
    await page.evaluate(() => document.querySelector("form button[type=submit]").scrollIntoView({ block: "end" }))
    await new Promise((r) => setTimeout(r, 1500))
    const before = await page.evaluate(() => window.scrollY)
    await page.evaluate(() => document.querySelector("form").requestSubmit())
    await new Promise((r) => setTimeout(r, 4000))
    const out = await page.evaluate(() => {
      const d = document.querySelector("[role=status]")
      const r = d && d.getBoundingClientRect()
      return { after: window.scrollY, vh: innerHeight, top: r && Math.round(r.top), bottom: r && Math.round(r.bottom), text: d && d.innerText.slice(0, 30) }
    })
    const visible = out.top != null && out.top >= 0 && out.bottom <= out.vh
    console.log(vp.width, JSON.stringify({ before, ...out }), visible ? "VISIBLE" : "NOT VISIBLE")
    await page.screenshot({ path: `${process.env.TEMP}/thanks-${vp.width}.png` })
    await page.close()
  }
  await browser.close()
})()
