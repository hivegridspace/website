import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { FeatureGrid } from "@/components/hivegrid/feature-grid"
import { Sparkles, MessageSquare, Tag, ArrowRight, FileText, Search, Lightbulb, Wand2 } from "lucide-react"

const aiFeatures = [
  {
    icon: FileText,
    title: "Automated Summaries",
    description: "Get AI-generated summaries of long discussions, meeting notes, and issue histories.",
  },
  {
    icon: Tag,
    title: "Smart Categorization",
    description: "Automatically categorize and label issues based on content. Reduce manual tagging work.",
  },
  {
    icon: ArrowRight,
    title: "Suggested Next Steps",
    description: "AI-powered recommendations for what to work on next based on priorities and deadlines.",
  },
  {
    icon: MessageSquare,
    title: "Writing Assistant",
    description: "Improve your issue descriptions and documentation with AI writing suggestions.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Natural language search across your entire workspace. Find what you need by describing it.",
  },
  {
    icon: Lightbulb,
    title: "Duplicate Detection",
    description: "Automatically detect potential duplicate issues. Keep your backlog clean and organized.",
  },
  {
    icon: Wand2,
    title: "Auto-complete",
    description: "Intelligent autocomplete for common fields. Speed up issue creation with smart suggestions.",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description: "Generate templates, responses, and documentation from simple prompts.",
  },
]

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="AI Assistant"
        title="Work smarter with AI"
        description="Leverage intelligent features like automated summaries, task categorization, and suggested next steps. Let AI handle the busywork while you focus on what matters."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">AI-Powered Features</h2>
            <p className="max-w-2xl text-muted-foreground">
              HiveGrid's AI assistant is designed to augment your workflow, not replace it. Get intelligent suggestions
              while staying in control.
            </p>
          </div>

          <FeatureGrid features={aiFeatures} columns={4} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Privacy-First AI</h2>
              <p className="mb-6 text-muted-foreground">
                For self-hosted deployments, AI features can run entirely on your infrastructure. Your data never leaves
                your control.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Self-hosted LLM support (Ollama, vLLM)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Optional cloud AI for enhanced capabilities
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Configurable data retention policies
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Audit logs for AI interactions
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
