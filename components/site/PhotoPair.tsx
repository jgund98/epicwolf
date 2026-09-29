import type { Pic } from "@/lib/imagery"
import { ParallaxImage } from "@/components/ui/ParallaxImage"
import { Reveal } from "@/components/ui/Reveal"

/**
 * Two photographs side by side at one shared height, so the row is always
 * full edge to edge: a wide frame and a narrow one, each drifting at its own
 * pace. Phones keep them side by side too (3:2 split), never a lone stack.
 */
export function PhotoPair({ pics, flip = false, className = "" }: { pics: [Pic, Pic]; flip?: boolean; className?: string }) {
  const [wide, tall] = pics
  return (
    <div className={`grid h-[68vw] grid-cols-5 gap-3 sm:h-[52vw] md:h-[min(40vw,620px)] md:grid-cols-12 md:gap-5 ${className}`}>
      <Reveal y={40} className={`col-span-3 h-full md:col-span-7 ${flip ? "order-2" : ""}`}>
        <ParallaxImage
          src={wide.src}
          alt={wide.alt}
          frame={flip ? "cut" : "cut-flip"}
          travel={5}
          sizes="(min-width: 768px) 56vw, 58vw"
          className="h-full"
        />
      </Reveal>
      <Reveal y={40} delay={0.08} className={`col-span-2 h-full md:col-span-5 ${flip ? "order-1" : ""}`}>
        <ParallaxImage
          src={tall.src}
          alt={tall.alt}
          frame={flip ? "cut-flip" : "cut"}
          travel={10}
          sizes="(min-width: 768px) 40vw, 40vw"
          className="h-full"
        />
      </Reveal>
    </div>
  )
}
