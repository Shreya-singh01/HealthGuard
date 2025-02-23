import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Choose how and when you want to be notified</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="critical-alerts">Critical Alerts</Label>
            <Switch id="critical-alerts" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="patient-updates">Patient Updates</Label>
            <Switch id="patient-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="system-notifications">System Notifications</Label>
            <Switch id="system-notifications" defaultChecked />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Notification Method</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select notification method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Methods</SelectItem>
              <SelectItem value="email">Email Only</SelectItem>
              <SelectItem value="sms">SMS Only</SelectItem>
              <SelectItem value="push">Push Notifications Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Quiet Hours</Label>
          <Select defaultValue="none">
            <SelectTrigger>
              <SelectValue placeholder="Select quiet hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Quiet Hours</SelectItem>
              <SelectItem value="night">Night (10 PM - 6 AM)</SelectItem>
              <SelectItem value="custom">Custom Schedule</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

