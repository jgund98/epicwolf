import { FaqList } from "@/components/ui/FaqList"
import { homeFaqs } from "@/lib/faqs"

export function HomeFaq() {
  return (
    <section data-tone="light" className="relative bg-paper-2 py-28 text-ink md:py-36" aria-labelledby="faq-title">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label">Questions</p>
          <h2 id="faq-title" className="t-h2 mt-4 max-w-[10ch]">
            Before you call.
          </h2>
        </div>
        <div className="md:col-span-8">
          <FaqList faqs={homeFaqs} />
        </div>
      </div>
    </section>
  )
}
