import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Ready to transform your workflow?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join HiveGrid as an early adopter. Self-host for free or become part of the community building the future of
            project management.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-5 w-5" />
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
            >
              View Documentation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
