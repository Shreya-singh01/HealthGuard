import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { HealthMetrics } from "@/components/health-metrics"
import { PatientOverview } from "@/components/patient-overview"
import { RecentAlerts } from "@/components/recent-alerts"
import { VitalsMonitor } from "@/components/vitals-monitor"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Monitor patient vitals and detect anomalies in real-time." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PatientOverview className="col-span-4" />
        <HealthMetrics className="col-span-3" />
        <VitalsMonitor className="col-span-4" />
        <RecentAlerts className="col-span-3" />
      </div>
    </DashboardShell>
  )
}

