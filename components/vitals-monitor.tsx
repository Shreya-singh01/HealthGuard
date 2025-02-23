// "use client"

// import { useEffect, useState } from "react"
// import { Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   type ChartData,
// } from "chart.js"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// interface VitalsMonitorProps {
//   className?: string
// }

// export function VitalsMonitor({ className }: VitalsMonitorProps) {
//   const [data, setData] = useState<ChartData<"line">>({
//     labels: [],
//     datasets: [
//       {
//         label: "Heart Rate",
//         data: [],
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         tension: 0.4,
//       },
//     ],
//   })

//   useEffect(() => {
//     // Simulate real-time data updates
//     const interval = setInterval(() => {
//       setData((currentData) => {
//         const newLabels = [...(currentData.labels as string[])]
//         const newData = [...(currentData.datasets[0].data as number[])]

//         const now = new Date()
//         newLabels.push(now.toLocaleTimeString())
//         newData.push(Math.floor(Math.random() * (100 - 60) + 60))

//         if (newLabels.length > 20) {
//           newLabels.shift()
//           newData.shift()
//         }

//         return {
//           labels: newLabels,
//           datasets: [
//             {
//               ...currentData.datasets[0],
//               data: newData,
//             },
//           ],
//         }
//       })
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <Card className={cn("col-span-4", className)}>
//       <CardHeader>
//         <CardTitle>Real-time Vitals Monitor</CardTitle>
//         <CardDescription>Live heart rate monitoring with anomaly detection</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[300px]">
//           <Line
//             data={data}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               scales: {
//                 y: {
//                   beginAtZero: false,
//                   min: 40,
//                   max: 120,
//                 },
//               },
//               animation: {
//                 duration: 0,
//               },
//             }}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
// "use client"

// import { useEffect, useState } from "react"
// import { Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   type ChartData,
// } from "chart.js"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// interface VitalsMonitorProps {
//   className?: string
// }

// export function VitalsMonitor({ className }: VitalsMonitorProps) {
//   const [data, setData] = useState<ChartData<"line">>({
//     labels: [],
//     datasets: [
//       {
//         label: "Heart Rate",
//         data: [],
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         tension: 0.4,
//       },
//     ],
//   })

//   const [baseHeartRate, setBaseHeartRate] = useState(75) // Initial heart rate

//   useEffect(() => {
//     // Simulate real-time data updates with realistic fluctuations
//     const interval = setInterval(() => {
//       setData((currentData) => {
//         const newLabels = [...(currentData.labels as string[])]
//         const newData = [...(currentData.datasets[0].data as number[])]

//         const now = new Date()
//         newLabels.push(now.toLocaleTimeString())

//         // Simulate realistic fluctuations
//         let fluctuation = Math.floor(Math.random() * 5) - 2 // -2 to +2 BPM
//         let newHeartRate = baseHeartRate + fluctuation

//         // Simulate rare spikes (5% chance)
//         if (Math.random() < 0.05) {
//           newHeartRate += Math.floor(Math.random() * 15) - 5 // Sudden spike or drop between -5 and +10 BPM
//         }

//         // Simulate rare anomalies (1% chance of major spike)
//         if (Math.random() < 0.01) {
//           newHeartRate += Math.floor(Math.random() * 30) - 10 // Big anomaly between -10 and +20 BPM
//         }

//         // Clamp the heart rate between 60 and 120
//         newHeartRate = Math.max(60, Math.min(120, newHeartRate))

//         // Update base heart rate for smoother transitions
//         setBaseHeartRate(newHeartRate)

//         newData.push(newHeartRate)

//         if (newLabels.length > 20) {
//           newLabels.shift()
//           newData.shift()
//         }

//         return {
//           labels: newLabels,
//           datasets: [
//             {
//               ...currentData.datasets[0],
//               data: newData,
//             },
//           ],
//         }
//       })
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [baseHeartRate])

//   return (
//     <Card className={cn("col-span-4", className)}>
//       <CardHeader>
//         <CardTitle>Real-time Vitals Monitor</CardTitle>
//         <CardDescription>Live heart rate monitoring with anomaly detection</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[300px]">
//           <Line
//             data={data}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               scales: {
//                 y: {
//                   beginAtZero: false,
//                   min: 40,
//                   max: 130,
//                 },
//               },
//               animation: {
//                 duration: 0,
//               },
//             }}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface VitalsMonitorProps {
  className?: string
}

export function VitalsMonitor({ className }: VitalsMonitorProps) {
  const [data, setData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [
      {
        label: "Heart Rate (BPM)",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    ],
  })

  const [baseHeartRate, setBaseHeartRate] = useState(75) // Initial heart rate
  const [spikeCounter, setSpikeCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setData((currentData) => {
        const newLabels = [...(currentData.labels as string[])]
        const newData = [...(currentData.datasets[0].data as number[])]

        const now = new Date()
        newLabels.push(now.toLocaleTimeString())

        let fluctuation = Math.floor(Math.random() * 3) - 1 // -1 to +1 BPM for smooth variation
        let newHeartRate = baseHeartRate + fluctuation

        // Trigger gradual spikes dynamically
        if (spikeCounter > 0) {
          newHeartRate += 5 // Gradual spike growth
          setSpikeCounter(spikeCounter - 1)
        }

        // Simulate a sudden spike every 20-30 seconds
        if (Math.random() < 0.02) {
          setSpikeCounter(3) // Trigger a noticeable spike over the next 3 updates
        }

        // Simulate rare anomalies (1% chance of big anomaly)
        if (Math.random() < 0.01) {
          newHeartRate += Math.floor(Math.random() * 30) - 10 // Big anomaly between -10 and +20 BPM
        }

        // Clamp heart rate between 50 and 140 BPM
        newHeartRate = Math.max(50, Math.min(140, newHeartRate))

        // Smooth transitions by updating the base heart rate
        setBaseHeartRate((prev) => (prev + newHeartRate) / 2)

        newData.push(newHeartRate)

        if (newLabels.length > 20) {
          newLabels.shift()
          newData.shift()
        }

        return {
          labels: newLabels,
          datasets: [
            {
              ...currentData.datasets[0],
              data: newData,
            },
          ],
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [baseHeartRate, spikeCounter])

  return (
    <Card className={cn("col-span-4", className)}>
      <CardHeader>
        <CardTitle>Real-time Vitals Monitor</CardTitle>
        <CardDescription>Live heart rate monitoring with dynamic anomaly detection</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Line
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: false,
                  min: 40,
                  max: 150,
                },
              },
              animation: {
                duration: 0,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

