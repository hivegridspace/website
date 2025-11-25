import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { FeatureGrid } from "@/components/hivegrid/feature-grid"
import { CheckSquare, Kanban, List, CalendarDays, Tag, Filter, Search, Zap } from "lucide-react"

const buildFeatures = [
  {
    icon: CheckSquare,
    title: "Issue Tracking",
    description:
      "Create, assign, and track issues with customizable properties. Add labels, priorities, and due dates to stay organized.",
  },
  {
    icon: Kanban,
    title: "Kanban Boards",
    description:
      "Visualize work flowing through stages. Drag and drop issues between columns to update status instantly.",
  },
  {
    icon: List,
    title: "List View",
    description: "See all your tasks in a powerful spreadsheet-like view. Sort, filter, and bulk edit with ease.",
  },
  {
    icon: CalendarDays,
    title: "Calendar View",
    description: "Plan work around deadlines with calendar visualization. See what's due and when at a glance.",
  },
  {
    icon: Tag,
    title: "Custom Labels",
    description:
      "Create your own labeling system. Categorize issues by type, component, team, or any dimension that matters.",
  },
  {
    icon: Filter,
    title: "Advanced Filters",
    description: "Build complex queries to find exactly what you need. Save filters for quick access to common views.",
  },
  {
    icon: Search,
    title: "Global Search",
    description: "Find anything instantly with powerful full-text search across all your projects and workspaces.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description:
      "Keyboard shortcuts and command palette for power users. Navigate and manage tasks without leaving the keyboard.",
  },
]

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Features"
        title="Build faster, ship confidently"
        description="Track progress, manage tasks, and coordinate cross-functional team work in a unified workspace designed for engineering excellence."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Task Management</h2>
            <p className="max-w-2xl text-muted-foreground">
              Every feature you need to track work from idea to completion. Multiple views, powerful filters, and
              real-time collaboration.
            </p>
          </div>

          <FeatureGrid features={buildFeatures} columns={4} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-xl border border-border bg-card p-8">
              <div className="aspect-video rounded-lg bg-secondary/50" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Real-time Collaboration</h2>
              <p className="mb-6 text-muted-foreground">
                Work together seamlessly with live updates. See who's viewing and editing in real-time, powered by CRDT
                technology for conflict-free collaboration.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Live presence indicators showing active team members
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Instant sync across all connected clients
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Activity feed with comments and mentions
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  WebSocket-powered notifications
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
