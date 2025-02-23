import { Bell, BellOff, BellRing, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AlertsOverview() {
  const stats = [
    {
      title: "Active Alerts",
      value: "23",
      description: "↗ 5 new today",
      icon: BellRing,
      color: "text-red-500",
    },
    {
      title: "Resolved",
      value: "156",
      description: "↗ 12 today",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Snoozed",
      value: "8",
      description: "↘ 3 from yesterday",
      icon: BellOff,
      color: "text-yellow-500",
    },
    {
      title: "Total Alerts",
      value: "187",
      description: "This month",
      icon: Bell,
      color: "text-blue-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
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

