import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const anomalies = [
  {
    id: "1",
    timestamp: "2024-02-23 10:30:00",
    patient: "John Doe",
    type: "Heart Rate",
    value: "145 bpm",
    severity: "High",
  },
  {
    id: "2",
    timestamp: "2024-02-23 11:15:00",
    patient: "Jane Smith",
    type: "Blood Pressure",
    value: "160/100",
    severity: "Critical",
  },
  {
    id: "3",
    timestamp: "2024-02-23 12:00:00",
    patient: "Mike Johnson",
    type: "Temperature",
    value: "102.5°F",
    severity: "Medium",
  },
  {
    id: "4",
    timestamp: "2024-02-23 12:45:00",
    patient: "Sarah Williams",
    type: "Respiration",
    value: "28 rpm",
    severity: "Low",
  },
]

export function AnomalyList() {
  return (
    <Card>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Severity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {anomalies.map((anomaly) => (
              <TableRow key={anomaly.id}>
                <TableCell>{anomaly.timestamp}</TableCell>
                <TableCell>{anomaly.patient}</TableCell>
                <TableCell>{anomaly.type}</TableCell>
                <TableCell>{anomaly.value}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      anomaly.severity === "Critical"
                        ? "bg-red-100 text-red-800"
                        : anomaly.severity === "High"
                          ? "bg-orange-100 text-orange-800"
                          : anomaly.severity === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {anomaly.severity}
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

