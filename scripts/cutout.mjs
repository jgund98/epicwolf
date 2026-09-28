// Cut the partners out of their photo backgrounds (runs locally, model fetched by the package).
import { removeBackground } from "@imgly/background-removal-node"
import { pathToFileURL } from "url"
import path from "path"
import fs from "fs"

const jobs = [["raw/shawn-suit.jpg", "raw/shawn-suit-cut.png"]]
for (const [inp, out] of jobs) {
  const url = pathToFileURL(path.resolve(inp)).href
  const blob = await removeBackground(url, { model: "medium", output: { format: "image/png", quality: 1 } })
  fs.writeFileSync(out, Buffer.from(await blob.arrayBuffer()))
  console.log("cut", out)
}
