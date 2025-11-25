import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { FeatureGrid } from "@/components/hivegrid/feature-grid"
import { BarChart3, PieChart, TrendingUp, Users, Clock, Target, Download, RefreshCw } from "lucide-react"

const reportingFeatures = [
  {
    icon: BarChart3,
    title: "Burndown Charts",
    description:
      "Track sprint progress with classic burndown visualization. See if you're on track to meet your goals.",
  },
  {
    icon: PieChart,
    title: "Issue Distribution",
    description:
      "Visualize issues by status, priority, assignee, or custom fields. Understand where work is concentrated.",
  },
  {
    icon: TrendingUp,
    title: "Velocity Tracking",
    description: "Measure team velocity over time. Use historical data to improve sprint planning accuracy.",
  },
  {
    icon: Users,
    title: "Team Workload",
    description: "See workload distribution across team members. Balance assignments and prevent bottlenecks.",
  },
  {
    icon: Clock,
    title: "Cycle Time",
    description: "Measure how long issues take to complete. Identify process inefficiencies and optimize flow.",
  },
  {
    icon: Target,
    title: "Goal Progress",
    description:
      "Track progress toward OKRs and milestones. Visualize how daily work contributes to big-picture goals.",
  },
  {
    icon: Download,
    title: "Export Reports",
    description: "Export data as CSV or PDF. Share reports with stakeholders who don't use HiveGrid.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    description: "Dashboards update in real-time. Always see the latest data without refreshing.",
  },
]

export default function ReportingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Reporting"
        title="Gain instant insights"
        description="Visualize key project metrics, team workload, and progress toward goals with customizable, real-time dashboards. Data-driven decisions made easy."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Analytics & Dashboards</h2>
            <p className="max-w-2xl text-muted-foreground">
              Powered by the analytics module in HiveGrid's backend. Aggregate data from across your workspace into
              actionable insights.
            </p>
          </div>

          <FeatureGrid features={reportingFeatures} columns={4} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-xl border border-border bg-card p-8">
              <div className="aspect-video rounded-lg bg-secondary/50" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Custom Dashboards</h2>
              <p className="mb-6 text-muted-foreground">
                Build dashboards tailored to your needs. Add widgets, arrange layouts, and share with your team.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Drag-and-drop dashboard builder
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Multiple chart types and visualizations
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Filter data by date range, project, or team
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Schedule automated report delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
