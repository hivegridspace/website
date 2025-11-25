import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { FeatureGrid } from "@/components/hivegrid/feature-grid"
import { Target, Calendar, BarChart3, Milestone, GitBranch, Clock, Users, Layers } from "lucide-react"

const planFeatures = [
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Define clear objectives and key results (OKRs) for your team. Track progress toward strategic goals with measurable outcomes.",
  },
  {
    icon: Calendar,
    title: "Sprint Planning",
    description:
      "Organize work into time-boxed cycles. Plan sprints, allocate capacity, and set realistic deadlines for your team.",
  },
  {
    icon: BarChart3,
    title: "Capacity Planning",
    description:
      "Visualize team workload and resource allocation. Balance work distribution to prevent burnout and maximize productivity.",
  },
  {
    icon: Milestone,
    title: "Milestones",
    description:
      "Set key milestones for your projects. Track major deliverables and celebrate achievements along the way.",
  },
  {
    icon: GitBranch,
    title: "Product Roadmap",
    description:
      "Create visual roadmaps to communicate your product strategy. Share progress with stakeholders and align teams.",
  },
  {
    icon: Clock,
    title: "Timeline Views",
    description:
      "Gantt charts and timeline views to visualize project schedules. See dependencies and critical paths at a glance.",
  },
  {
    icon: Users,
    title: "Team Alignment",
    description:
      "Keep everyone on the same page with shared views and real-time updates. Foster collaboration across departments.",
  },
  {
    icon: Layers,
    title: "Initiative Tracking",
    description:
      "Group related work into initiatives and epics. Track high-level progress while drilling down into details when needed.",
  },
]

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Features"
        title="Plan with purpose and precision"
        description="Define your direction. Set priorities and roadmap your product strategy with powerful planning tools designed for modern software teams."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Planning Capabilities</h2>
            <p className="max-w-2xl text-muted-foreground">
              From high-level strategy to day-to-day execution, HiveGrid gives you the tools to plan effectively at
              every level.
            </p>
          </div>

          <FeatureGrid features={planFeatures} columns={4} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Cycles & Sprints</h2>
              <p className="mb-6 text-muted-foreground">
                Organize your work into manageable cycles. Whether you follow Scrum, Kanban, or your own methodology,
                HiveGrid adapts to your workflow.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Sprint velocity tracking and burndown charts
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Backlog grooming and story point estimation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Automated sprint reports and retrospectives
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Cross-team dependency management
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="aspect-video rounded-lg bg-secondary/50" />
            </div>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
