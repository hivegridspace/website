import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"

interface PageHeaderProps {
  badge?: string
  title: string
  description: string
  backLink?: string
  backLabel?: string
}

export function PageHeader({ badge, title, description, backLink = "/", backLabel = "Back to Home" }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>

        {badge && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              {badge}
            </span>
          </div>
        )}

        <h1 className="mb-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">{description}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/download">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4" />
              Get Started
            </Button>
          </Link>
          <Link href="/resources/docs">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
              View Documentation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
