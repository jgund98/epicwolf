import Image from "next/image"
import type { Pic } from "@/lib/imagery"

/**
 * A strip of photographs gliding sideways on its own. Pure CSS transform on
 * the GPU, so it never fights a finger's scroll; it pauses under the pointer
 * and stands still for reduced motion. The second copy exists only to make
 * the loop seamless and is hidden from assistive tech.
 */
export function Filmstrip({ pics, label, dur = 70 }: { pics: Pic[]; label: string; dur?: number }) {
  return (
    <div className="group overflow-hidden" role="region" aria-label={label}>
      <div className="marquee group-hover:[animation-play-state:paused]" style={{ ["--marquee-dur" as string]: `${dur}s`, willChange: "transform", backfaceVisibility: "hidden" }}>
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 gap-3 pr-3 md:gap-5 md:pr-5" aria-hidden={copy === 1 || undefined}>
            {pics.map((p, i) => (
              <li key={p.src} className={`relative h-[62vw] max-h-[420px] shrink-0 overflow-hidden bg-ink-3 sm:h-[44vw] md:h-[30vw] ${i % 2 ? "aspect-[4/5] cut-sm" : "aspect-[5/4] rounded-[18px]"}`}>
                <Image src={p.src} alt={copy === 1 ? "" : p.alt} fill sizes="(min-width: 768px) 38vw, 70vw" className="object-cover" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
