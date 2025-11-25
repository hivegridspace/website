import Link from "next/link"
import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HiveGridFooter } from "@/components/hivegrid/footer"
import { PageHeader } from "@/components/hivegrid/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, Github, Container, Terminal, CheckCircle2, Cpu, HardDrive, MemoryStick } from "lucide-react"

const deploymentOptions = [
  {
    icon: Container,
    title: "Docker Compose",
    description: "Recommended for small teams and quick setup. Get running in minutes with Docker Compose.",
    badge: "Recommended",
    badgeVariant: "default" as const,
    steps: [
      "Clone the repository",
      "Configure environment variables",
      "Run docker-compose up",
      "Access at localhost:3000",
    ],
  },
  {
    icon: Server,
    title: "Kubernetes",
    description: "Production-ready deployment with Helm charts for scalability and high availability.",
    badge: "Enterprise",
    badgeVariant: "secondary" as const,
    steps: ["Install Helm chart", "Configure values.yaml", "Deploy to your cluster", "Set up ingress"],
  },
  {
    icon: Cloud,
    title: "Cloud Providers",
    description: "One-click deployment to AWS, GCP, DigitalOcean, or Railway.",
    badge: "Coming Soon",
    badgeVariant: "outline" as const,
    steps: ["Choose your provider", "Connect your account", "Configure resources", "Deploy automatically"],
  },
]

const requirements = [
  {
    icon: Cpu,
    title: "CPU",
    value: "2+ cores",
    description: "Recommended for production",
  },
  {
    icon: MemoryStick,
    title: "RAM",
    value: "4GB+",
    description: "8GB recommended for larger teams",
  },
  {
    icon: HardDrive,
    title: "Storage",
    value: "20GB+",
    description: "SSD recommended for database",
  },
]

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <HiveGridNavbar />

      <PageHeader
        badge="Download"
        title="Self-host HiveGrid"
        description="Deploy HiveGrid on your own infrastructure. Full control over your data, complete customization, and no vendor lock-in. Free and open source under the MIT license."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Deployment Options</h2>
            <p className="max-w-2xl text-muted-foreground">
              Choose the deployment method that fits your infrastructure. All options are fully supported and
              documented.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <option.icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant={option.badgeVariant}
                      className={option.badgeVariant === "default" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {option.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">{option.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {option.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${option.badge === "Coming Soon" ? "opacity-50 cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                    disabled={option.badge === "Coming Soon"}
                  >
                    {option.badge === "Coming Soon" ? "Coming Soon" : "View Guide"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Terminal className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Quick Start with Docker</h2>
              <p className="text-muted-foreground">Get HiveGrid running locally in under 5 minutes.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <pre className="overflow-x-auto text-sm text-muted-foreground">
                {`# Clone the HiveGrid repository
git clone https://github.com/hivegrid/hivegrid.git
cd hivegrid

# Copy environment variables
cp .env.example .env

# Start all services with Docker Compose
docker-compose -f docker-compose-local.yml up -d

# Run database migrations
docker exec hivegrid-api python manage.py migrate

# Create an admin user (optional)
docker exec -it hivegrid-api python manage.py createsuperuser

# Access HiveGrid at http://localhost:3000`}
              </pre>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="https://github.com">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Github className="h-5 w-5" />
                  Clone from GitHub
                </Button>
              </Link>
              <Link href="/resources/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary bg-transparent"
                >
                  Read Full Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">System Requirements</h2>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {requirements.map((req, index) => (
              <Card key={index} className="border-border bg-card text-center">
                <CardContent className="pt-6">
                  <req.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-foreground">{req.title}</h3>
                  <p className="text-2xl font-bold text-primary">{req.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Need Help?</h2>
            <p className="mb-8 text-muted-foreground">
              Having trouble with your deployment? Check out our documentation, join the community on Discord, or open
              an issue on GitHub.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources/docs">
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                  Documentation
                </Button>
              </Link>
              <Link href="#discord">
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                  Join Discord
                </Button>
              </Link>
              <Link href="https://github.com">
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                  GitHub Issues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HiveGridFooter />
    </div>
  )
}
