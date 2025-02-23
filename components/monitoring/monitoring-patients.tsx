import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const patients = [
  {
    name: "John Doe",
    heartRate: "72 bpm",
    bloodPressure: "120/80",
    temperature: "98.6°F",
    status: "Stable",
  },
  {
    name: "Jane Smith",
    heartRate: "88 bpm",
    bloodPressure: "140/90",
    temperature: "99.1°F",
    status: "Warning",
  },
  {
    name: "Mike Johnson",
    heartRate: "65 bpm",
    bloodPressure: "118/75",
    temperature: "98.4°F",
    status: "Stable",
  },
  {
    name: "Sarah Williams",
    heartRate: "95 bpm",
    bloodPressure: "150/95",
    temperature: "100.2°F",
    status: "Critical",
  },
]

export function MonitoringPatients() {
  return (
    <Card>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Heart Rate</TableHead>
              <TableHead>Blood Pressure</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.name}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.heartRate}</TableCell>
                <TableCell>{patient.bloodPressure}</TableCell>
                <TableCell>{patient.temperature}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      patient.status === "Critical"
                        ? "bg-red-100 text-red-800"
                        : patient.status === "Warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {patient.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}

