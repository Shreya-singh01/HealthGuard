import { Activity, AlertTriangle, Heart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AnalyticsStats() {
  const stats = [
    {
      title: "Total Anomalies",
      value: "2,345",
      description: "↗ 12% from last month",
      icon: AlertTriangle,
    },
    {
      title: "Detection Rate",
      value: "98.5%",
      description: "↗ 2% from last month",
      icon: Activity,
    },
    {
      title: "False Positives",
      value: "1.2%",
      description: "↘ 0.5% from last month",
      icon: Heart,
    },
    {
      title: "Prediction Accuracy",
      value: "94.8%",
      description: "↗ 3% from last month",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

