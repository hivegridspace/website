import { Plug, GitBranch, BarChart3, Sparkles } from "lucide-react"

const capabilities = [
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect your tools. Seamlessly sync data and collaborate across your favorite apps, from Slack and GitHub to Google Drive.",
  },
  {
    icon: GitBranch,
    title: "Workflows",
    description:
      "Define custom, rules-based processes and approval flows to ensure every project follows the right steps, every time.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description:
      "Gain instant insights. Visualize key project metrics, team workload, and progress toward goals with customizable dashboards.",
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
    description:
      "Leverage intelligent features like automated summaries, task categorization, and suggested next steps to work smarter.",
  },
]

export function CapabilitiesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Powerful capabilities</h2>
          <p className="text-lg text-muted-foreground">
            Extend HiveGrid with integrations, automation, and AI to supercharge your workflow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
