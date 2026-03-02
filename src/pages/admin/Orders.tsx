import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/admin/EmptyState";

const Orders = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Orders</h1>
      <p className="text-muted-foreground text-sm">Manage fuel delivery orders</p>
    </div>
    <Card>
      <CardHeader>
        <CardTitle className="text-base">All Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={ShoppingCart}
          title="No orders yet"
          description="When customers place fuel orders, they'll appear here for you to manage and track."
        />
      </CardContent>
    </Card>
  </div>
);

export default Orders;
