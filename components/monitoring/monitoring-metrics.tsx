import { Activity, Heart, ThermometerSnowflake, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MonitoringMetrics() {
  const metrics = [
    {
      title: "Average Heart Rate",
      value: "72 bpm",
      icon: Heart,
      description: "↗ 2% from last hour",
    },
    {
      title: "Blood Pressure",
      value: "120/80",
      icon: Activity,
      description: "↘ 1% from last hour",
    },
    {
      title: "Average Temperature",
      value: "98.6°F",
      icon: ThermometerSnowflake,
      description: "No change",
    },
    {
      title: "Respiration Rate",
      value: "16 rpm",
      icon: Wind,
      description: "↗ 3% from last hour",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

