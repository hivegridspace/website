import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, MessageSquare, FolderOpen, GitBranch, Mail, Calendar, Cloud, Database } from "lucide-react"

const integrations = [
  {
    icon: Github,
    name: "GitHub",
    description: "Sync issues with GitHub pull requests and commits. Automate workflows based on repository events.",
    category: "Version Control",
  },
  {
    icon: GitBranch,
    name: "GitLab",
    description: "Connect your GitLab projects. Link merge requests to issues and track development progress.",
    category: "Version Control",
  },
  {
    icon: MessageSquare,
    name: "Slack",
    description: "Get notifications in Slack channels. Create issues from messages and stay updated on progress.",
    category: "Communication",
  },
  {
    icon: Mail,
    name: "Email",
    description: "Create issues via email. Get digest notifications and updates delivered to your inbox.",
    category: "Communication",
  },
  {
    icon: FolderOpen,
    name: "Google Drive",
    description: "Attach files from Google Drive. Keep documents linked to relevant issues and pages.",
    category: "Storage",
  },
  {
    icon: Cloud,
    name: "AWS S3 / MinIO",
    description: "Self-hosted file storage. Store attachments and assets in your own infrastructure.",
    category: "Storage",
  },
  {
    icon: Calendar,
    name: "Calendar Sync",
    description: "Sync deadlines with Google Calendar or Outlook. Never miss an important date.",
    category: "Productivity",
  },
  {
    icon: Database,
    name: "Webhooks",
    description: "Build custom integrations with webhooks. Trigger external services on any HiveGrid event.",
    category: "Developer",
  },
]

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Integrations"
        title="Connect your entire toolchain"
        description="Seamlessly sync data and collaborate across your favorite apps, from Slack and GitHub to Google Drive. Build a connected workflow without leaving HiveGrid."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Available Integrations</h2>
            <p className="max-w-2xl text-muted-foreground">
              Out-of-the-box integrations with the tools your team already uses. Plus webhooks and API access for custom
              solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-border bg-card transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <integration.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-muted-foreground">{integration.category}</span>
                  </div>
                  <CardTitle className="text-lg text-foreground">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{integration.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Build Custom Integrations</h2>
            <p className="mb-8 text-muted-foreground">
              Use the HiveGrid REST API to build custom integrations. Full access to all data and operations with secure
              authentication via JWT tokens.
            </p>
            <div className="rounded-xl border border-border bg-card p-6">
              <pre className="overflow-x-auto text-left text-sm text-muted-foreground">
                {`// Example: Create an issue via API
const response = await fetch('/api/v1/issues', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <your-token>',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'New Feature Request',
    project_id: 'proj_123',
    priority: 'high'
  })
})`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
