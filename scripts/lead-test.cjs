// End-to-end test of the on-page inquiry form: fills and submits the real form
// in a browser and waits for the thank-you. Sends one clearly marked test lead.
//   node scripts/lead-test.cjs https://www.epicwolf.agency/palm-beach-county/boca-raton/signs
const puppeteer = require("C:/Users/Lucky/gus-renny/node_modules/puppeteer")
const url = process.argv[2]
if (!url) throw new Error("pass the page URL")
;(async () => {
  const b = await puppeteer.launch({ headless: "new" })
  const p = await b.newPage()
  await p.setViewport({ width: 1280, height: 900 })
  let sent = null
  p.on("request", (r) => {
    if (r.url().endsWith("/api/lead") && r.method() === "POST") sent = JSON.parse(r.postData())
  })
  await p.goto(url, { waitUntil: "networkidle2" })
  await p.evaluate(() => document.querySelector("#start").scrollIntoView())
  await new Promise((r) => setTimeout(r, 1200))
  const chip = await p.evaluate(() => [...document.querySelectorAll('#start button[aria-pressed="true"]')].map((x) => x.textContent))
  await p.type('#start input[name="name"]', "TEST Lead (Claude)")
  await p.type('#start input[name="company"]', "Form test, safe to delete")
  await p.type('#start input[name="email"]', "jordan@epicdevsolutions.com")
  await p.type('#start textarea[name="message"]', "Automated end-to-end test of the on-page inquiry form. No action needed.")
  await p.click('#start button[type="submit"]')
  const ok = await p
    .waitForFunction(() => document.querySelector('#start [role="status"]')?.textContent.includes("Thank you"), { timeout: 20000 })
    .then(() => true)
    .catch(() => false)
  console.log("preselected:", chip.join(", ") || "none")
  console.log("sent source:", sent && sent.source, "| interest:", sent && sent.interest)
  console.log("thank-you shown:", ok)
  await b.close()
  process.exit(ok ? 0 : 1)
})()
