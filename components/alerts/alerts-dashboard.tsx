"use client"

import { AlertsOverview } from "./alerts-overview"
import { AlertsList } from "./alerts-list"
import { AlertsSettings } from "./alerts-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AlertsDashboard() {
  return (
    <div className="grid gap-4">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">All Alerts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <AlertsOverview />
        </TabsContent>
        <TabsContent value="alerts">
          <AlertsList />
        </TabsContent>
        <TabsContent value="settings">
          <AlertsSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

