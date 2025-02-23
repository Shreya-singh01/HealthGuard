import { Activity, Heart, Thermometer, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HealthMetricsProps {
  className?: string
}

export function HealthMetrics({ className }: HealthMetricsProps) {
  const metrics = [
    {
      title: "Heart Rate",
      value: "72 bpm",
      icon: Heart,
      description: "Normal range",
      color: "text-green-500",
    },
    {
      title: "Blood Pressure",
      value: "120/80",
      icon: Activity,
      description: "Optimal",
      color: "text-green-500",
    },
    {
      title: "Temperature",
      value: "98.6°F",
      icon: Thermometer,
      description: "Normal",
      color: "text-green-500",
    },
    {
      title: "Respiration",
      value: "16 rpm",
      icon: Wind,
      description: "Normal range",
      color: "text-green-500",
    },
  ]

  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader>
        <CardTitle>Health Metrics</CardTitle>
        <CardDescription>Current vital signs and status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="flex items-center space-x-4 rounded-md border p-4">
              <metric.icon className={cn("h-8 w-8", metric.color)} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{metric.title}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

