import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Badge } from "@/components/ui/badge"

const releases = [
  {
    version: "0.15.0",
    date: "November 20, 2025",
    type: "minor",
    highlights: [
      "AI Assistant: Automated issue summaries and smart categorization",
      "New Gantt chart view for timeline planning",
      "Improved WebSocket performance for real-time sync",
      "Custom workflow builder with visual designer",
    ],
    breaking: false,
  },
  {
    version: "0.14.0",
    date: "October 15, 2025",
    type: "minor",
    highlights: [
      "GitLab integration with merge request linking",
      "Cycle velocity tracking and burndown charts",
      "Bulk operations for issue management",
      "Enhanced keyboard navigation and shortcuts",
    ],
    breaking: false,
  },
  {
    version: "0.13.0",
    date: "September 10, 2025",
    type: "minor",
    highlights: [
      "Pages: New documentation and wiki system",
      "Real-time collaborative editing with CRDT",
      "Improved notification system",
      "API rate limiting and throttling",
    ],
    breaking: true,
  },
  {
    version: "0.12.0",
    date: "August 5, 2025",
    type: "minor",
    highlights: [
      "Dashboard widgets and custom reports",
      "Slack integration with bi-directional sync",
      "OAuth support for GitHub and Google",
      "Performance improvements for large workspaces",
    ],
    breaking: false,
  },
  {
    version: "0.11.0",
    date: "July 1, 2025",
    type: "minor",
    highlights: [
      "Modules: Group related issues for better organization",
      "Import from Jira with full history",
      "Dark mode support across all views",
      "Mobile-responsive design improvements",
    ],
    breaking: false,
  },
  {
    version: "0.10.0",
    date: "June 1, 2025",
    type: "major",
    highlights: [
      "Initial public release",
      "Core issue tracking and project management",
      "Kanban, List, and Calendar views",
      "GitHub integration",
      "Self-hosted deployment with Docker",
    ],
    breaking: false,
  },
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Changelog"
        title="What's new in HiveGrid"
        description="Track all the updates, improvements, and new features in each release. Subscribe to our newsletter to get notified about new releases."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-12">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 h-full w-0.5 bg-border" />

              {releases.map((release, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-foreground">v{release.version}</h3>
                    <Badge
                      variant={release.type === "major" ? "default" : "secondary"}
                      className={release.type === "major" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {release.type === "major" ? "Major Release" : "Minor Release"}
                    </Badge>
                    {release.breaking && <Badge variant="destructive">Breaking Changes</Badge>}
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground">{release.date}</p>

                  <ul className="space-y-2">
                    {release.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
