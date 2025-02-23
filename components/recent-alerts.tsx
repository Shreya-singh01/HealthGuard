import { AlertTriangle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface RecentAlertsProps {
  className?: string
}

export function RecentAlerts({ className }: RecentAlertsProps) {
  const alerts = [
    {
      patient: "John Doe",
      type: "High Heart Rate",
      time: "2 minutes ago",
      severity: "high",
    },
    {
      patient: "Jane Smith",
      type: "Irregular Blood Pressure",
      time: "15 minutes ago",
      severity: "medium",
    },
    {
      patient: "Mike Johnson",
      type: "Elevated Temperature",
      time: "1 hour ago",
      severity: "low",
    },
  ]

  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>Latest anomalies detected in patient vitals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.patient} className="flex items-center space-x-4 rounded-md border p-4">
              <AlertTriangle
                className={cn(
                  "h-8 w-8",
                  alert.severity === "high" && "text-red-500",
                  alert.severity === "medium" && "text-yellow-500",
                  alert.severity === "low" && "text-blue-500",
                )}
              />
              <div className="flex-1 space-y-1">
                <p className="font-medium">{alert.patient}</p>
                <p className="text-sm text-muted-foreground">{alert.type}</p>
                <p className="text-sm text-muted-foreground">{alert.time}</p>
              </div>
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

