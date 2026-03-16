import { Quote } from "lucide-react"
import type { TestimonialsContent } from "@/content/schema"

interface TestimonialsSectionProps {
  content: TestimonialsContent
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Split header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xs text-3xl font-medium tracking-tight sm:text-4xl">
            {content.heading}
          </h2>
          {content.subheading && (
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
              {content.subheading}
            </p>
          )}
        </div>

        {/* gap-px + bg-border creates 1px inner borders between cells */}
        <div className="grid gap-px bg-border sm:grid-cols-3">
          {content.items.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col justify-between gap-10 bg-background p-8"
            >
              <div className="flex flex-col gap-5">
                <Quote
                  size={20}
                  strokeWidth={1.5}
                  className="text-muted-foreground/30"
                />
                <blockquote className="text-sm leading-relaxed">
                  {item.quote}
                </blockquote>
              </div>
              <figcaption className="border-t border-border pt-5">
                <p className="text-sm font-medium">{item.author}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {item.role}
                  {item.company && ` · ${item.company}`}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
