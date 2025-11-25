import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <Card key={index} className="border-border bg-card transition-shadow hover:shadow-md">
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <feature.icon className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
