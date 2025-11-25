import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { FeatureGrid } from "@/components/hivegrid/feature-grid"
import { FileText, FolderTree, Share2, Lock, AtSign, Link2, History, Blocks } from "lucide-react"

const documentFeatures = [
  {
    icon: FileText,
    title: "Rich Text Editor",
    description: "A powerful block-based editor with support for headings, lists, code blocks, tables, and embeds.",
  },
  {
    icon: FolderTree,
    title: "Organized Hierarchy",
    description: "Create nested pages and wikis. Structure your documentation in a way that makes sense for your team.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Share pages publicly with a link or keep them private within your workspace. Control access granularly.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Set permissions at the page or folder level. Restrict editing while allowing viewing for stakeholders.",
  },
  {
    icon: AtSign,
    title: "Mentions & References",
    description: "Link to team members, issues, or other pages. Create a connected knowledge base.",
  },
  {
    icon: Link2,
    title: "Issue Links",
    description: "Embed issue references directly in documents. Keep specs and tasks connected.",
  },
  {
    icon: History,
    title: "Version History",
    description: "Track every change with automatic versioning. Restore previous versions when needed.",
  },
  {
    icon: Blocks,
    title: "Custom Blocks",
    description: "Extend the editor with custom block types. Embed diagrams, videos, and interactive content.",
  },
]

export default function DocumentPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Features"
        title="Document everything in one place"
        description="Create, share, and organize project specifications, meeting notes, and team wikis alongside your work. Knowledge that lives where your team works."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Documentation Features</h2>
            <p className="max-w-2xl text-muted-foreground">
              A modern documentation system built into your project management workflow. Powered by Tiptap and
              ProseMirror for a best-in-class editing experience.
            </p>
          </div>

          <FeatureGrid features={documentFeatures} columns={4} />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Collaborative Editing</h2>
              <p className="mb-6 text-muted-foreground">
                Multiple team members can edit the same document simultaneously. Changes sync instantly using CRDT
                technology via Yjs and Hocuspocus.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Real-time cursor positions and selections
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Conflict-free merging of concurrent edits
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Offline support with automatic sync on reconnect
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Comments and inline discussions
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
