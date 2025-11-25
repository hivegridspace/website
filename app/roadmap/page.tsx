import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Circle, Sparkles } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q4 2025",
    title: "Beta",
    status: "in-progress",
    items: [
      {
        title: "Issue Tracking & Kanban Boards",
        description: "Core issue management with customizable Kanban views and sprint boards.",
        status: "in-progress",
      },
      {
        title: "Real-time Collaboration",
        description: "CRDT-based real-time sync for pages and comments.",
        status: "in-progress",
      },
      {
        title: "Workspace Management",
        description: "Multi-workspace support with team organization and basic permissions.",
        status: "in-progress",
      },
      {
        title: "Rich Text Pages",
        description: "Tiptap-powered document editor with slash commands and embeds.",
        status: "in-progress",
      },
    ],
  },
  {
    quarter: "Q1 2026",
    title: "Core Platform",
    status: "planned",
    items: [
      {
        title: "Mobile Apps",
        description: "Native iOS and Android apps for on-the-go project management.",
        status: "planned",
      },
      {
        title: "Advanced Permissions",
        description: "Granular role-based access control at project and issue level.",
        status: "planned",
      },
      {
        title: "Time Tracking",
        description: "Built-in time tracking with reports and integration with payroll systems.",
        status: "planned",
      },
      {
        title: "Forms & Issue Templates",
        description: "Create custom forms for bug reports, feature requests, and support tickets.",
        status: "planned",
      },
    ],
  },
  {
    quarter: "Q2 2026",
    title: "Integrations & API",
    status: "planned",
    items: [
      {
        title: "GitHub & GitLab Sync",
        description: "Bi-directional sync with GitHub and GitLab issues and pull requests.",
        status: "planned",
      },
      {
        title: "Slack Notifications",
        description: "Real-time notifications and issue creation from Slack.",
        status: "planned",
      },
      {
        title: "REST API v2",
        description: "Comprehensive REST API for third-party integrations.",
        status: "planned",
      },
      {
        title: "Webhooks Support",
        description: "Outgoing webhooks for event-driven automation.",
        status: "planned",
      },
    ],
  },
  {
    quarter: "Q3 2026",
    title: "Advanced Features",
    status: "planned",
    items: [
      {
        title: "AI-Powered Suggestions",
        description: "Smart task categorization, priority suggestions, and automated summaries.",
        status: "planned",
      },
      {
        title: "Custom Workflows",
        description: "Define custom states, transitions, and approval gates.",
        status: "planned",
      },
      {
        title: "Advanced Analytics",
        description: "Burndown charts, velocity tracking, and custom dashboards.",
        status: "planned",
      },
      {
        title: "Time Tracking",
        description: "Built-in time logging with reports and billing integration.",
        status: "planned",
      },
    ],
  },
]

function getStatusIcon(status: string) {
  switch (status) {
    case "done":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "in-progress":
      return <Clock className="h-4 w-4 text-primary" />
    default:
      return <Circle className="h-4 w-4 text-muted-foreground" />
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "done":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
    case "in-progress":
      return <Badge className="bg-primary/10 text-primary hover:bg-primary/10">In Progress</Badge>
    default:
      return <Badge variant="secondary">Planned</Badge>
  }
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Roadmap"
        title="Where we're headed"
        description="Our public roadmap shows what we're working on and what's coming next. Have a feature request? Open an issue on GitHub or vote on existing proposals."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {roadmapItems.map((quarter, quarterIndex) => (
              <div key={quarterIndex}>
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {quarter.quarter}
                    {quarter.title ? `: ${quarter.title}` : ""}
                  </h2>
                  {getStatusBadge(quarter.status)}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {quarter.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-border bg-card">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-base text-foreground">{item.title}</CardTitle>
                          {getStatusIcon(item.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Sparkles className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Have an idea?</h2>
            <p className="text-muted-foreground">
              We prioritize features based on community feedback. Open a GitHub issue to propose new features, or upvote
              existing requests to help us understand what matters most to you.
            </p>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
