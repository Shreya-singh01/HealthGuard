import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PatientStats() {
  const stats = [
    {
      title: "Total Patients",
      value: "256",
      description: "↗ 12% from last month",
    },
    {
      title: "Active Monitoring",
      value: "42",
      description: "↘ 8% from last month",
    },
    {
      title: "Critical Cases",
      value: "3",
      description: "↗ 2 new this week",
    },
    {
      title: "Recovery Rate",
      value: "94%",
      description: "↗ 3% improvement",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
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

