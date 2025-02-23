// "use client"

// import { useState } from "react"
// import { AlertTriangle, CheckCircle, Clock } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// const alerts = [
//   {
//     id: "1",
//     patient: "John Doe",
//     type: "Heart Rate Alert",
//     status: "Active",
//     priority: "High",
//     time: "2 minutes ago",
//     value: "145 bpm",
//   },
//   {
//     id: "2",
//     patient: "Jane Smith",
//     type: "Blood Pressure Alert",
//     status: "Active",
//     priority: "Critical",
//     time: "5 minutes ago",
//     value: "180/110",
//   },
//   {
//     id: "3",
//     patient: "Mike Johnson",
//     type: "Temperature Alert",
//     status: "Resolved",
//     priority: "Medium",
//     time: "15 minutes ago",
//     value: "101.5°F",
//   },
//   {
//     id: "4",
//     patient: "Sarah Williams",
//     type: "Oxygen Level Alert",
//     status: "Snoozed",
//     priority: "Low",
//     time: "30 minutes ago",
//     value: "92%",
//   },
// ]

// export function AlertsList() {
//   const [filter, setFilter] = useState("all")

//   const filteredAlerts = alerts.filter((alert) => {
//     if (filter === "all") return true
//     return alert.status.toLowerCase() === filter
//   })

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center gap-4">
//         <Select value={filter} onValueChange={setFilter}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filter by status" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All Alerts</SelectItem>
//             <SelectItem value="active">Active</SelectItem>
//             <SelectItem value="resolved">Resolved</SelectItem>
//             <SelectItem value="snoozed">Snoozed</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid gap-4">
//         {filteredAlerts.map((alert) => (
//           <Card key={alert.id}>
//             <CardHeader className="flex flex-row items-center gap-4 space-y-0">
//               {alert.status === "Active" && <AlertTriangle className="h-5 w-5 text-red-500" />}
//               {alert.status === "Resolved" && <CheckCircle className="h-5 w-5 text-green-500" />}
//               {alert.status === "Snoozed" && <Clock className="h-5 w-5 text-yellow-500" />}
//               <div className="flex-1">
//                 <CardTitle className="text-base">{alert.type}</CardTitle>
//                 <div className="text-sm text-muted-foreground">Patient: {alert.patient}</div>
//               </div>
//               <div
//                 className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
//                   alert.priority === "Critical"
//                     ? "bg-red-100 text-red-800"
//                     : alert.priority === "High"
//                       ? "bg-orange-100 text-orange-800"
//                       : alert.priority === "Medium"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : "bg-blue-100 text-blue-800"
//                 }`}
//               >
//                 {alert.priority}
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center justify-between">
//                 <div className="space-y-1">
//                   <p className="text-sm font-medium">Value: {alert.value}</p>
//                   <p className="text-sm text-muted-foreground">{alert.time}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   {alert.status === "Active" && (
//                     <>
//                       <Button variant="outline" size="sm">
//                         Snooze
//                       </Button>
//                       <Button size="sm">Resolve</Button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Clock, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const alerts = [
  {
    id: "1",
    patient: "John Doe",
    type: "Heart Rate Alert",
    status: "Active",
    priority: "High",
    time: "2 minutes ago",
    value: "145 bpm",
  },
  {
    id: "2",
    patient: "Jane Smith",
    type: "Blood Pressure Alert",
    status: "Active",
    priority: "Critical",
    time: "5 minutes ago",
    value: "180/110",
  },
  {
    id: "3",
    patient: "Mike Johnson",
    type: "Temperature Alert",
    status: "Resolved",
    priority: "Medium",
    time: "15 minutes ago",
    value: "101.5°F",
  },
  {
    id: "4",
    patient: "Sarah Williams",
    type: "Oxygen Level Alert",
    status: "Snoozed",
    priority: "Low",
    time: "30 minutes ago",
    value: "92%",
  },
]

export function AlertsList() {
  const [filter, setFilter] = useState("all")

  const handleSendSOS = (alert: (typeof alerts)[0]) => {
    const message = `SOS Alert!\nPatient: ${alert.patient}\nAlert: ${alert.type}\nValue: ${alert.value}`

    const shouldSendSMS = window.confirm("Send SOS via SMS? Click cancel for Email")

    if (shouldSendSMS) {
      
      window.location.href = `sms:7979038996?&body=${message}`
    } else {
      window.location.href = `mailto:saieshamittal.17@gmail.com?subject=SOS Alert&body=${message}`
    }
  }

  const filteredAlerts = alerts.filter((alert) => {
    if (filter === "all") return true
    return alert.status.toLowerCase() === filter
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Alerts</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="snoozed">Snoozed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4">
        {filteredAlerts.map((alert) => (
          <Card key={alert.id}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              {alert.status === "Active" && <AlertTriangle className="h-5 w-5 text-red-500" />}
              {alert.status === "Resolved" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {alert.status === "Snoozed" && <Clock className="h-5 w-5 text-yellow-500" />}
              <div className="flex-1">
                <CardTitle className="text-base">{alert.type}</CardTitle>
                <div className="text-sm text-muted-foreground">Patient: {alert.patient}</div>
              </div>
              <div
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  alert.priority === "Critical"
                    ? "bg-red-100 text-red-800"
                    : alert.priority === "High"
                      ? "bg-orange-100 text-orange-800"
                      : alert.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                }`}
              >
                {alert.priority}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Value: {alert.value}</p>
                  <p className="text-sm text-muted-foreground">{alert.time}</p>
                </div>
                <div className="flex gap-2">
                  {alert.status === "Active" && (
                    <>
                      <Button variant="outline" size="sm">
                        Snooze
                      </Button>
                      <Button size="sm">Resolve</Button>
                      {(alert.priority === "Critical" || alert.priority === "High") && (
                        <Button variant="destructive" size="sm" onClick={() => handleSendSOS(alert)} className="gap-2">
                          <Bell className="h-4 w-4" />
                          Send SOS
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

