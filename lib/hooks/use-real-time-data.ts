"use client"

import { useState, useEffect } from "react"
import { getFitbitData, type FitbitData } from "@/lib/services/fitbit-service"
import { detectAnomalies, type AnomalyDetection } from "@/lib/services/anomaly-detection"

export function useRealTimeData(userId: string, interval = 5000) {
  const [data, setData] = useState<FitbitData | null>(null)
  const [anomalies, setAnomalies] = useState<AnomalyDetection[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await getFitbitData(userId)
        setData(newData)

        // Check for anomalies
        const anomalies = await detectAnomalies(
          {
            heartRate: [newData.heartRate],
            bloodPressure: { systolic: [120], diastolic: [80] }, // Replace with real data
            temperature: [98.6], // Replace with real data
            oxygenLevel: [98], // Replace with real data
          },
          [new Date()],
        )
        setAnomalies(anomalies)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch data"))
      }
    }

    // Initial fetch
    fetchData()

    // Set up polling
    const timer = setInterval(fetchData, interval)

    return () => clearInterval(timer)
  }, [userId, interval])

  return { data, anomalies, error }
}

