import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function AlertsSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Configure how you receive alerts</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
            <Switch id="sms-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" defaultChecked />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Alert Thresholds</CardTitle>
          <CardDescription>Set thresholds for different vital signs</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-4">
            <Label>Heart Rate (BPM)</Label>
            <Slider defaultValue={[60, 100]} max={200} min={0} step={1} />
          </div>
          <div className="space-y-4">
            <Label>Blood Pressure (Systolic)</Label>
            <Slider defaultValue={[90, 140]} max={200} min={0} step={1} />
          </div>
          <div className="space-y-4">
            <Label>Temperature (°F)</Label>
            <Slider defaultValue={[97, 99]} max={105} min={95} step={0.1} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

