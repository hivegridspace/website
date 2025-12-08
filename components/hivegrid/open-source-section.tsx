import { Button } from "@/components/ui/button"
import { Github, GitFork, Users } from "lucide-react"

export function OpenSourceSection() {
  return (
    <section id="contribute" className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              <Github className="h-4 w-4" />
              Open Source
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Built by the community,
              <br />
              for the community
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              HiveGrid is 100% open source. Contribute to the codebase, report issues, or help improve documentation.
              Join us in building something great from the ground up.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Github className="h-5 w-5" />
                Star on GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Read Contributing Guide
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Github className="h-4 w-4 text-primary" />
              </div>
              <p className="text-lg font-bold text-foreground">New Project</p>
              <p className="text-sm text-muted-foreground">Join from the start</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <GitFork className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-lg font-bold text-foreground">100% Open</p>
              <p className="text-sm text-muted-foreground">Transparent codebase</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-lg font-bold text-foreground">Early Adopters</p>
              <p className="text-sm text-muted-foreground">Be one of the first</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="mb-3 text-xs font-bold text-green-500">
                AGPL-3.0
              </div>
              <p className="text-lg font-bold text-foreground">License</p>
              <p className="text-sm text-muted-foreground">Free & Open</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
