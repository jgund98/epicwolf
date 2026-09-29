// Pings IndexNow (Bing, Yandex, Seznam, Naver...) with every URL in the live sitemap.
// Run after each production deploy: node scripts/indexnow.mjs
// ChatGPT search leans on Bing's index, so this is the fastest route into it.
const ORIGIN = process.env.SITE_ORIGIN || "https://www.epicwolf.agency"
const KEY = "eeae7d324595cc7df12d721e82bdaa55"

const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const keyOk = (await (await fetch(`${ORIGIN}/${KEY}.txt`)).text()).trim() === KEY
if (!keyOk) throw new Error(`Key file not live at ${ORIGIN}/${KEY}.txt; deploy first.`)

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(ORIGIN).host, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`)
