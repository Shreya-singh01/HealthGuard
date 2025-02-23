
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface PatientOverviewProps {
  className?: string
}

export function PatientOverview({ className }: PatientOverviewProps) {
  const [anomalyDetected, setAnomalyDetected] = useState(false)
  const [possibleDiseases, setPossibleDiseases] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<string[]>([])
  const [criticalAlert, setCriticalAlert] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
 
      setAnomalyDetected(true)
      setPossibleDiseases(["Tachycardia", "Hypertension", "Stress-induced Arrhythmia"])
      setRecommendations([
        "Advise deep breathing exercises",
        "Recommend consulting a cardiologist",
        "Monitor for recurring episodes",
      ])
      setCriticalAlert(true)
    }, 9000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={cn("col-span-4", className)}>
      <CardHeader>
        <CardTitle>Patient Overview</CardTitle>
        <CardDescription>Current patient status and history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Patient ID</p>
            <p className="text-2xl font-bold">256</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Active Monitoring</p>
            <p className="text-2xl font-bold">42</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Alerts Today</p>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Critical Cases</p>
            <p className="text-2xl font-bold text-red-500">3</p>
          </div>
        </div>
        {/* Sliding and Flashing Alert Box (Bottom-right corner) */}
        
        {/* Anomaly Detection Section */}
        <div className="mt-6 space-y-4">
          <p className="text-lg font-semibold">Anomaly Detection</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Anomaly Detected</p>
              <p className={`text-xl font-bold ${anomalyDetected ? "text-red-500" : "text-green-500"}`}>
                {anomalyDetected ? "Yes" : "No"}
              </p>
            </div>

            {anomalyDetected && (
              <>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Possible Conditions</p>
                  <ul className="list-disc list-inside text-sm">
                    {possibleDiseases.map((disease, index) => (
                      <li key={index}>{disease}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Suggestions</p>
                  <ul className="list-disc list-inside text-sm">
                    {recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Critical Alert</p>
                  <p className={`text-xl font-bold ${criticalAlert ? "text-red-500" : "text-yellow-500"}`}>
                    {criticalAlert ? "Yes - Immediate Attention Needed!" : "Monitor Closely"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
