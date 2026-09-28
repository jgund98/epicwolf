import Link from "next/link"

export default function NotFound() {
  return (
    <section data-tone="dark" className="on-dark flex min-h-[100svh] items-center">
      <div className="shell">
        <p className="label">404</p>
        <h1 className="t-mega mt-6">
          Wrong
          <br />
          <span className="text-flare">turn.</span>
        </h1>
        <p className="t-lead mt-8 max-w-[40ch] text-paper/80">That page isn&rsquo;t here. The rest of the site is.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-flare">
            Back home
          </Link>
          <Link href="/services" className="btn btn-line">
            What we do
          </Link>
        </div>
      </div>
    </section>
  )
}
