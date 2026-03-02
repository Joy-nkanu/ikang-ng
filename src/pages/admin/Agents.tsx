import { Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/admin/EmptyState";

const Agents = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Delivery Agents</h1>
      <p className="text-muted-foreground text-sm">Onboard and manage your delivery agents</p>
    </div>
    <Card>
      <CardHeader>
        <CardTitle className="text-base">All Agents</CardTitle>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Truck}
          title="No agents registered"
          description="Delivery agents will appear here once they're onboarded to the Ikang platform."
        />
      </CardContent>
    </Card>
  </div>
);

export default Agents;
