import Image from "next/image"
import Link from "next/link"
import { pillars } from "@/lib/site"
import { Reveal } from "@/components/ui/Reveal"

/**
 * The three disciplines as picture cards. One column on phones, three across
 * from tablet up; never two across, which would strand the third on its own row.
 */
export function PillarCards({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-8 ${className}`}>
      {pillars.map((p, i) => (
        <Reveal key={p.slug} y={36} delay={i * 0.08}>
          <Link href={`/${p.slug}`} className="group block">
            <span className={`relative block aspect-[4/3] overflow-hidden bg-ink-3 ${i === 1 ? "cut-flip" : "cut-sm"}`}>
              <Image
                src={p.img}
                alt=""
                fill
                sizes="(min-width: 768px) 31vw, 92vw"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              />
            </span>
            <span className="mt-6 flex items-baseline justify-between gap-4 border-t border-current/15 pt-5">
              <span className="t-h3 transition-colors group-hover:text-flare-deep">{p.name}</span>
              <span aria-hidden className="text-xl transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </span>
            <span className="t-body mt-2 block opacity-75">{p.line}</span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
