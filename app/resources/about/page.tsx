import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Open Source First",
    description:
      "HiveGrid is and will always be open source. We believe in transparency, community-driven development, and the power of collaborative software.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Our roadmap is shaped by the community. Every feature request, bug report, and contribution helps make HiveGrid better for everyone.",
  },
  {
    icon: Globe,
    title: "Self-Hosted Freedom",
    description:
      "Your data belongs to you. Run HiveGrid on your own infrastructure with full control over privacy and compliance requirements.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "We don't track you, sell your data, or compromise on security. HiveGrid is built with privacy as a core principle, not an afterthought.",
  },
]

const stats = [
  { value: "MIT", label: "License" },
  { value: "2023", label: "Founded" },
  { value: "500+", label: "Contributors" },
  { value: "50K+", label: "Users" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="About"
        title="Building the future of project management"
        description="HiveGrid is an open source project management platform built for modern software teams. We're on a mission to make powerful collaboration tools accessible to everyone."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                HiveGrid started as a simple idea: what if there was a project management tool that combined the power
                of enterprise solutions with the flexibility of open source software?
              </p>
              <p>
                We saw teams struggling with expensive, bloated tools or piecing together multiple apps to manage their
                work. We believed there had to be a better way — a unified platform that's powerful enough for large
                organizations yet simple enough for small teams.
              </p>
              <p>
                Built on a modern tech stack with Django, React, and real-time collaboration powered by CRDT technology,
                HiveGrid represents the next generation of project management tools. And because it's open source, you
                can self-host it, customize it, and make it truly yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
