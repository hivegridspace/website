"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const productFeatures = [
  {
    title: "Plan",
    description: "Define your direction. Set priorities and roadmap your product strategy.",
    href: "/product/plan",
  },
  {
    title: "Build",
    description: "Track progress, manage tasks, and coordinate cross-functional team work.",
    href: "/product/build",
  },
  {
    title: "Document",
    description: "Create, share, and organize specifications, notes, and wikis alongside your work.",
    href: "/product/document",
  },
]

const productMore = [
  {
    title: "Integrations",
    description: "Connect your tools. Sync data across Slack, GitHub, Google Drive and more.",
    href: "/product/integrations",
  },
  {
    title: "Workflows",
    description: "Define custom, rules-based processes and approval flows.",
    href: "/product/workflows",
  },
  {
    title: "Reporting & Dashboards",
    description: "Visualize metrics, team workload, and progress with real-time dashboards.",
    href: "/product/reporting",
  },
  {
    title: "AI Assistant",
    description: "Automated summaries, task categorization, and suggested next steps.",
    href: "/product/ai-assistant",
  },
]

const resources = [
  { title: "About", href: "/resources/about" },
  { title: "Docs", href: "/resources/docs" },
  { title: "Changelog", href: "/resources/changelog" },
]

export function HiveGridNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/hivegrid-logo.png" alt="HiveGrid" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-semibold text-foreground">HiveGrid</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-secondary hover:text-foreground">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    <div>
                      <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Features
                      </p>
                      {productFeatures.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground"
                          >
                            <div className="text-sm font-medium text-foreground">{item.title}</div>
                            <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div>
                      <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        More
                      </p>
                      {productMore.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground"
                          >
                            <div className="text-sm font-medium text-foreground">{item.title}</div>
                            <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-secondary hover:text-foreground">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2">
                    {resources.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <Link
                          href={item.href}
                          className="block select-none rounded-md px-3 py-2 text-sm font-medium text-foreground no-underline outline-none transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/roadmap" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground focus:outline-none">
                    Roadmap
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contribute" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground focus:outline-none">
                    Contribute
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/download">
            <Button className="hidden gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:flex">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </Link>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border lg:hidden">
          <div className="container mx-auto space-y-4 px-4 py-4">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Features</p>
              {productFeatures.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">More</p>
              {productMore.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Resources</p>
              {resources.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/roadmap" className="py-2 text-sm text-foreground" onClick={() => setMobileMenuOpen(false)}>
                Roadmap
              </Link>
              <Link
                href="/contribute"
                className="py-2 text-sm text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contribute
              </Link>
            </div>
            <Link href="/download" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
