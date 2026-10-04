// One-off: merges researched city-<slug>.json files (ground facts, extra FAQs,
// guide picks) into lib/cities.ts. Usage: node scripts/merge-city-ground.mjs <dir>
import fs from "node:fs"
import path from "node:path"

const dir = process.argv[2]
const f = "lib/cities.ts"
let s = fs.readFileSync(f, "utf8")
const crlf = s.includes("\r\n")
s = s.replace(/\r\n/g, "\n")
const q = (v) => JSON.stringify(v)

for (const file of fs.readdirSync(dir).filter((n) => /^city-.*\.json$/.test(n))) {
  const c = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8").replace(/^﻿/, ""))
  const start = s.indexOf(`slug: ${q(c.slug)}`)
  if (start < 0) throw new Error("no city " + c.slug)
  const faqsAt = s.indexOf("    faqs: [\n", start)
  const nearbyAt = s.indexOf("    ],\n    nearby:", faqsAt)
  if (s.slice(start, faqsAt).includes("ground: [")) {
    console.log("skip (already merged)", c.slug)
    continue
  }
  const extraFaqs = c.faqs.map((x) => `      {\n        q: ${q(x.q)},\n        a: ${q(x.a)},\n      },\n`).join("")
  const ground =
    "    ground: [\n" +
    c.ground
      .map(
        (g) =>
          `      {\n        title: ${q(g.title)},\n        body: ${q(g.body)},\n        source: { label: ${q(g.source.label)}, href: ${q(g.source.href)} },\n      },\n`
      )
      .join("") +
    "    ],\n" +
    `    guides: [${c.guides.map(q).join(", ")}],\n`
  s = s.slice(0, faqsAt) + ground + s.slice(faqsAt, nearbyAt) + extraFaqs + s.slice(nearbyAt)
  console.log("merged", c.slug)
}
fs.writeFileSync(f, crlf ? s.replace(/\n/g, "\r\n") : s)
