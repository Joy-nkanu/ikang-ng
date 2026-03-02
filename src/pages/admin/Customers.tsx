import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/admin/EmptyState";

const Customers = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Customers</h1>
      <p className="text-muted-foreground text-sm">View and manage your customer base</p>
    </div>
    <Card>
      <CardHeader>
        <CardTitle className="text-base">All Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Users}
          title="No customers yet"
          description="Customer profiles will populate here as people sign up and use Ikang."
        />
      </CardContent>
    </Card>
  </div>
);

export default Customers;
