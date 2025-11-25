import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { FeatureGrid } from "@/components/hivegrid/feature-grid"
import { Route, Shield, Bell, Repeat, ArrowRightLeft, CheckCircle, Timer, Workflow } from "lucide-react"

const workflowFeatures = [
  {
    icon: Route,
    title: "Custom States",
    description: "Define your own issue states and transitions. Model any workflow from simple to complex.",
  },
  {
    icon: Shield,
    title: "Approval Gates",
    description: "Require approvals before status changes. Enforce review processes for critical transitions.",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description: "Trigger notifications when conditions are met. Keep stakeholders informed automatically.",
  },
  {
    icon: Repeat,
    title: "Recurring Tasks",
    description: "Create tasks that repeat on a schedule. Automate maintenance and regular check-ins.",
  },
  {
    icon: ArrowRightLeft,
    title: "State Transitions",
    description: "Define allowed transitions between states. Prevent issues from skipping required steps.",
  },
  {
    icon: CheckCircle,
    title: "Required Fields",
    description: "Enforce data entry at each stage. Ensure issues have all needed information before progressing.",
  },
  {
    icon: Timer,
    title: "SLA Tracking",
    description: "Set time limits for each state. Monitor compliance and get alerts before deadlines.",
  },
  {
    icon: Workflow,
    title: "Workflow Templates",
    description: "Save and reuse workflow configurations. Standardize processes across projects.",
  },
]

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Workflows"
        title="Automate your processes"
        description="Define custom, rules-based processes and approval flows to ensure every project follows the right steps, every time. Build consistency into your team's work."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Workflow Automation</h2>
            <p className="max-w-2xl text-muted-foreground">
              From simple linear workflows to complex branching processes, HiveGrid adapts to how your team actually
              works.
            </p>
          </div>

          <FeatureGrid features={workflowFeatures} columns={4} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Visual Workflow Builder</h2>
              <p className="mb-6 text-muted-foreground">
                Design workflows visually with drag-and-drop. See the entire process at a glance and make changes
                without touching code.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Drag-and-drop workflow designer
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Conditional logic and branching paths
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Integration triggers from external events
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Version history for workflow changes
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
