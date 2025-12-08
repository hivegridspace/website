import Link from "next/link"
import Image from "next/image"
import { Github, Twitter } from "lucide-react"

const footerLinks = {
  Product: [
    { name: "Plan", href: "/product/plan" },
    { name: "Build", href: "/product/build" },
    { name: "Document", href: "/product/document" },
    { name: "Integrations", href: "/product/integrations" },
    { name: "Workflows", href: "/product/workflows" },
    { name: "AI Assistant", href: "/product/ai-assistant" },
  ],
  Resources: [
    { name: "About", href: "/resources/about" },
    { name: "Documentation", href: "/resources/docs" },
    { name: "Changelog", href: "/resources/changelog" },
  ],
  Community: [
    { name: "GitHub", href: "https://github.com" },
    { name: "Discord", href: "#discord" },
    { name: "Contributing", href: "/contribute" },
    { name: "Roadmap", href: "/roadmap" },
  ],
  Legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "License", href: "#license" },
  ],
}

export function HiveGridFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/hivegrid-logo.png" alt="HiveGrid" width={32} height={32} className="h-8 w-8" />
              <span className="text-lg font-semibold text-foreground">HiveGrid</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Open source project management for modern software teams. Plan, build, and ship together.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="https://github.com" className="text-muted-foreground transition-colors hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HiveGrid. Released under AGPL-3.0 License.
          </p>
          <p className="text-sm text-muted-foreground">Made with care by the open source community</p>
        </div>
      </div>
    </footer>
  )
}
