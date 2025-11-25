import Link from "next/link"
import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Rocket, Server, Code, Plug, Settings, HelpCircle, FileText } from "lucide-react"

const docSections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Quick start guide to set up HiveGrid and create your first project.",
    href: "#getting-started",
    articles: ["Installation", "Quick Start", "First Project", "Inviting Team Members"],
  },
  {
    icon: Server,
    title: "Self-Hosting",
    description: "Deploy HiveGrid on your own infrastructure with Docker or Kubernetes.",
    href: "#self-hosting",
    articles: ["Docker Setup", "Docker Compose", "Kubernetes", "Environment Variables"],
  },
  {
    icon: BookOpen,
    title: "Core Concepts",
    description: "Understand workspaces, projects, issues, cycles, and modules.",
    href: "#concepts",
    articles: ["Workspaces", "Projects", "Issues", "Cycles & Sprints", "Modules"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete REST API documentation for building integrations.",
    href: "#api",
    articles: ["Authentication", "Issues API", "Projects API", "Webhooks", "Rate Limits"],
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect HiveGrid with GitHub, Slack, and other tools.",
    href: "#integrations",
    articles: ["GitHub", "GitLab", "Slack", "Google Drive", "Custom Webhooks"],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Advanced configuration options and customization.",
    href: "#configuration",
    articles: ["Feature Flags", "Custom Fields", "Workflows", "Permissions"],
  },
  {
    icon: FileText,
    title: "Architecture",
    description: "Technical deep-dive into HiveGrid's monorepo structure.",
    href: "#architecture",
    articles: ["System Overview", "Data Flow", "Tech Stack", "Contributing Guide"],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions for self-hosted deployments.",
    href: "#troubleshooting",
    articles: ["Database Issues", "WebSocket Problems", "Performance Tuning", "FAQ"],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Documentation"
        title="Learn HiveGrid"
        description="Comprehensive documentation to help you get started, self-host, and build with HiveGrid. From quick start guides to API references."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {docSections.map((section, index) => (
              <Card key={index} className="border-border bg-card transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{section.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link
                          href={section.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Quick Reference</h2>
            <p className="mb-8 text-muted-foreground">
              Common commands and configurations for getting started quickly.
            </p>
            <div className="space-y-4 text-left">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="mb-2 text-sm font-medium text-foreground">Install dependencies</p>
                <code className="text-sm text-muted-foreground">pnpm install</code>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="mb-2 text-sm font-medium text-foreground">Start development server</p>
                <code className="text-sm text-muted-foreground">pnpm dev</code>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="mb-2 text-sm font-medium text-foreground">Run with Docker Compose</p>
                <code className="text-sm text-muted-foreground">docker-compose -f docker-compose-local.yml up -d</code>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="mb-2 text-sm font-medium text-foreground">Run database migrations</p>
                <code className="text-sm text-muted-foreground">cd apps/api && python manage.py migrate</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
