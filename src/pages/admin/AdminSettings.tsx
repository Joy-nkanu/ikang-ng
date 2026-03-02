import { Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/admin/EmptyState";

const AdminSettings = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="text-muted-foreground text-sm">Configure your Ikang admin portal</p>
    </div>
    <Card>
      <CardHeader>
        <CardTitle className="text-base">General Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Settings}
          title="Settings coming soon"
          description="Configuration options for notifications, service areas, and operational preferences will be available here."
        />
      </CardContent>
    </Card>
  </div>
);

export default AdminSettings;
