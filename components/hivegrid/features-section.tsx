import { Target, Layers, FileText } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Plan",
    description:
      "Define your direction. Set priorities and roadmap your product strategy with cycles, sprints, and modules.",
    features: ["Product Roadmaps", "Sprint Planning", "Priority Management", "Goal Tracking"],
  },
  {
    icon: Layers,
    title: "Build",
    description: "Track progress, manage tasks, and coordinate cross-functional team work in a unified workspace.",
    features: ["Kanban & List Views", "Issue Tracking", "Subtasks & Dependencies", "Time Estimates"],
  },
  {
    icon: FileText,
    title: "Document",
    description:
      "Create, share, and organize project specifications, meeting notes, and team wikis alongside your work.",
    features: ["Rich Text Editor", "Real-time Collaboration", "Page Hierarchy", "Public Sharing"],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Everything you need to ship faster</h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit for modern software teams to plan, execute, and deliver.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mb-6 text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
