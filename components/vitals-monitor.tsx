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
  const [timeSinceLastSpike, setTimeSinceLastSpike] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setData((currentData) => {
        const newLabels = [...(currentData.labels as string[])]
        const newData = [...(currentData.datasets[0].data as number[])]

        const now = new Date()
        newLabels.push(now.toLocaleTimeString())

        let newHeartRate = baseHeartRate

        // Trigger a spike every 8 seconds
        if (timeSinceLastSpike >= 8) {
          newHeartRate = Math.floor(Math.random() * 15) + 85 // Spike between 85-100 BPM
          setTimeSinceLastSpike(0) // Reset spike timer
        } else {
          let fluctuation = Math.floor(Math.random() * 3) - 1 // Smooth -1 to +1 fluctuation
          newHeartRate += fluctuation
          setTimeSinceLastSpike(timeSinceLastSpike + 1)
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
  }, [baseHeartRate, timeSinceLastSpike])

  return (
    <Card className={cn("col-span-4", className)}>
      <CardHeader>
        <CardTitle>Real-time Vitals Monitor</CardTitle>
        <CardDescription>Live heart rate monitoring with spikes every 8 seconds</CardDescription>
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

