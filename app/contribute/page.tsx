import Link from "next/link"
import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Bug, Lightbulb, FileText, Code, MessageSquare, Heart, BookOpen } from "lucide-react"

const contributionTypes = [
  {
    icon: Bug,
    title: "Report Bugs",
    description: "Found a bug? Open an issue on GitHub with steps to reproduce. The more detail, the better.",
    href: "https://github.com",
    cta: "Report an Issue",
  },
  {
    icon: Lightbulb,
    title: "Suggest Features",
    description: "Have an idea for a new feature? Create a feature request and discuss it with the community.",
    href: "https://github.com",
    cta: "Request a Feature",
  },
  {
    icon: Code,
    title: "Contribute Code",
    description: "Pick up an issue labeled 'good first issue' or work on something from the roadmap.",
    href: "https://github.com",
    cta: "View Open Issues",
  },
  {
    icon: FileText,
    title: "Improve Docs",
    description: "Help us improve documentation, fix typos, or write guides for common use cases.",
    href: "#",
    cta: "Edit Documentation",
  },
  {
    icon: MessageSquare,
    title: "Help Others",
    description: "Answer questions on GitHub Discussions or Discord. Share your knowledge with the community.",
    href: "#",
    cta: "Join Discussions",
  },
  {
    icon: Heart,
    title: "Spread the Word",
    description: "Star us on GitHub, write about HiveGrid, or share it with your network.",
    href: "https://github.com",
    cta: "Star on GitHub",
  },
]

const setupSteps = [
  {
    step: 1,
    title: "Fork the Repository",
    description: "Create your own fork of HiveGrid on GitHub.",
  },
  {
    step: 2,
    title: "Clone & Install",
    description: "Clone your fork and run pnpm install to set up dependencies.",
  },
  {
    step: 3,
    title: "Start Development",
    description: "Run docker-compose up and pnpm dev to start the dev environment.",
  },
  {
    step: 4,
    title: "Make Changes",
    description: "Create a branch, make your changes, and write tests if needed.",
  },
  {
    step: 5,
    title: "Submit PR",
    description: "Push your branch and open a pull request against main.",
  },
]

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Contribute"
        title="Join the HiveGrid community"
        description="HiveGrid is built by developers, for developers. Whether you're fixing a bug, adding a feature, or improving docs, every contribution makes a difference."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Ways to Contribute</h2>
            <p className="max-w-2xl text-muted-foreground">
              You don't need to be a developer to contribute. There are many ways to help make HiveGrid better.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contributionTypes.map((type, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <type.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{type.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={type.href}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-border text-foreground hover:bg-secondary bg-transparent"
                    >
                      {type.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Development Setup</h2>
              <p className="text-muted-foreground">Get your local development environment running in 5 steps.</p>
            </div>

            <div className="space-y-6">
              {setupSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-card p-6">
              <pre className="overflow-x-auto text-sm text-muted-foreground">
                {`# Clone your fork
git clone https://github.com/YOUR_USERNAME/hivegrid.git
cd hivegrid

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start infrastructure (PostgreSQL, Redis)
docker-compose -f docker-compose-local.yml up -d

# Run database migrations
cd apps/api && python manage.py migrate && cd ../..

# Start development servers
pnpm dev`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Github className="mx-auto mb-4 h-12 w-12 text-foreground" />
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Ready to contribute?</h2>
            <p className="mb-8 text-muted-foreground">
              Check out the repository, read the contributing guide, and pick your first issue.
            </p>
            <Link href="https://github.com">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
