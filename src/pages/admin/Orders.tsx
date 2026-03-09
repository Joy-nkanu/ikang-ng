import { useEffect, useState } from "react";
import { ShoppingCart, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import EmptyState from "@/components/admin/EmptyState";

interface Order {
  id: string;
  fuel_type: string;
  quantity: number;
  station_name: string;
  price_per_litre: number;
  delivery_fee: number;
  total_price: number;
  delivery_address: string;
  status: string;
  created_at: string;
}

const statusColor: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  confirmed: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  in_transit: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  delivered: "bg-green-500/10 text-green-600 border-green-500/20",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });
      setOrders((data as Order[]) || []);
      setLoading(false);
    };
    fetchOrders();

    const channel = supabase
      .channel("admin-orders")
      .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, () => {
        fetchOrders();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground text-sm">Manage fuel delivery orders</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">All Orders ({orders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {orders.length === 0 ? (
            <EmptyState
              icon={ShoppingCart}
              title="No orders yet"
              description="When customers place fuel orders, they'll appear here for you to manage and track."
            />
          ) : (
            <div className="space-y-3">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30">
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">
                      {order.quantity}L {order.fuel_type === "petrol" ? "Petrol" : "Diesel"}
                    </p>
                    <p className="text-sm text-muted-foreground">{order.station_name}</p>
                    <p className="text-xs text-muted-foreground">{order.delivery_address}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(order.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="font-bold text-primary">₦{Number(order.total_price).toLocaleString()}</p>
                    <Badge variant="outline" className={statusColor[order.status] || ""}>
                      {order.status.replace("_", " ")}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
