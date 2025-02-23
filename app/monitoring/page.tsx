import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MonitoringDashboard } from "@/components/monitoring/monitoring-dashboard"

export default function MonitoringPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Monitoring" description="Real-time patient vital signs monitoring and analysis." />
      <MonitoringDashboard />
    </DashboardShell>
  )
}

