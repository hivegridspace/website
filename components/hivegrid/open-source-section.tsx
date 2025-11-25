import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Users } from "lucide-react"

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
              Join hundreds of developers making project management better.
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
              <Star className="mb-3 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">10,000+</p>
              <p className="text-sm text-muted-foreground">GitHub Stars</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <GitFork className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-2xl font-bold text-foreground">2,500+</p>
              <p className="text-sm text-muted-foreground">Forks</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <Users className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Contributors</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="mb-3 h-8 w-8 rounded-full bg-green-500/20 text-center text-lg font-bold leading-8 text-green-500">
                MIT
              </div>
              <p className="text-2xl font-bold text-foreground">License</p>
              <p className="text-sm text-muted-foreground">Free Forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
