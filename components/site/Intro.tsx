import { Logo } from "@/components/brand/Logo"

/**
 * The arrival. On a visitor's first homepage load the wordmark draws itself
 * on ink, stroke by stroke, and the curtain lifts. Pure CSS, so it can never
 * hold the page hostage: with or without JavaScript it is gone in ~1.4s. A
 * tiny inline script marks repeat visits (same session) so they skip it.
 */
export function Intro() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{if(sessionStorage.getItem('ew:intro')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('no-intro')}else{sessionStorage.setItem('ew:intro','1')}}catch(e){document.documentElement.classList.add('no-intro')}",
        }}
      />
      <div className="ew-intro" aria-hidden>
        <Logo draw className="w-[min(72vw,620px)] text-paper" />
      </div>
    </>
  )
}
