import { Button } from "@/components/ui/button"
import { Github, ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open Source Project Management
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The complete platform to <span className="text-primary">plan, build, and ship</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl">
            HiveGrid is an advanced project management and software lifecycle platform. Track progress, collaborate in
            real-time, and deliver faster with your team.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-5 w-5" />
              Download HiveGrid
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
            >
              <Github className="h-5 w-5" />
              View on GitHub
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary lg:text-4xl">10K+</p>
            <p className="mt-1 text-sm text-muted-foreground">GitHub Stars</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground lg:text-4xl">500+</p>
            <p className="mt-1 text-sm text-muted-foreground">Contributors</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground lg:text-4xl">50K+</p>
            <p className="mt-1 text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground lg:text-4xl">99.9%</p>
            <p className="mt-1 text-sm text-muted-foreground">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
