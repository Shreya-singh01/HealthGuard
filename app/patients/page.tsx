import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PatientsList } from "@/components/patients/patients-list"
import { PatientStats } from "@/components/patients/patient-stats"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function PatientsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Patients" description="Manage and monitor patient records.">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <PatientStats />
        <PatientsList />
      </div>
    </DashboardShell>
  )
}

