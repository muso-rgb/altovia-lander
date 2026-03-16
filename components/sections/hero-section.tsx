import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { HeroContent } from "@/content/schema"

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-6 py-24 text-center">
      {/* Top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      {content.badge && (
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {content.badge}
        </p>
      )}

      <h1 className="max-w-4xl whitespace-pre-line text-balance text-6xl font-medium leading-[1.04] tracking-tight sm:text-7xl lg:text-[5.5rem]">
        {content.heading}
      </h1>

      {/* Thin divider rule */}
      <div className="my-10 h-px w-12 bg-border" />

      <p className="max-w-md text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
        {content.subheading}
      </p>

      {content.buttons.length > 0 && (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {content.buttons.map((btn) => (
            <Button
              key={btn.label}
              variant={btn.variant ?? "default"}
              size={btn.size ?? "default"}
              render={<Link href={btn.href} />}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50">
        <span>Scroll</span>
        <ArrowDown size={10} strokeWidth={1.5} />
      </div>
    </section>
  )
}
