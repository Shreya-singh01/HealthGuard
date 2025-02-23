import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AlertsDashboard } from "@/components/alerts/alerts-dashboard"

export default function AlertsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Alerts" description="Monitor and manage patient health alerts." />
      <AlertsDashboard />
    </DashboardShell>
  )
}

