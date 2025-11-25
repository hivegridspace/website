import { CheckCircle2, Circle, Clock } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q4 2025",
    status: "in-progress",
    title: "Beta",
    items: ["Issue tracking & Kanban boards", "Real-time collaboration", "Workspace management", "Rich text pages"],
  },
  {
    quarter: "Q1 2026",
    status: "planned",
    title: "Core Platform",
    items: ["Full module integration", "Team workspaces", "Role-based permissions", "Activity feeds"],
  },
  {
    quarter: "Q2 2026",
    status: "planned",
    title: "Integrations & API",
    items: ["GitHub & GitLab sync", "Slack notifications", "REST API v2", "Webhooks support"],
  },
  {
    quarter: "Q3 2026",
    status: "planned",
    title: "Advanced Features",
    items: ["AI-powered suggestions", "Custom workflows", "Advanced analytics", "Time tracking"],
  },
]

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-green-500", bg: "bg-green-500/10" },
  "in-progress": { icon: Clock, color: "text-primary", bg: "bg-primary/10" },
  planned: { icon: Circle, color: "text-muted-foreground", bg: "bg-muted" },
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Public Roadmap</h2>
          <p className="text-lg text-muted-foreground">
            See what we're building and what's coming next. Have a feature request? Open an issue on GitHub.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmapItems.map((item) => {
            const config = statusConfig[item.status as keyof typeof statusConfig]
            const StatusIcon = config.icon
            return (
              <div key={item.quarter} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">{item.quarter}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs ${config.bg} ${config.color}`}
                  >
                    <StatusIcon className="h-3 w-3" />
                    {item.status === "completed" ? "Done" : item.status === "in-progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <h3 className="mb-4 font-semibold text-foreground">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
