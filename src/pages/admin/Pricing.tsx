import { useState } from "react";
import { DollarSign, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Pricing = () => {
  const [pmsPrice, setPmsPrice] = useState("");
  const [agoPrice, setAgoPrice] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");

  const handleSave = () => {
    toast({
      title: "Pricing updated",
      description: "Note: This is a preview. Database pricing tables will be set up when you're ready to launch.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Pricing Control</h1>
        <p className="text-muted-foreground text-sm">Set real-time fuel prices and delivery fees</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> Fuel Prices
            </CardTitle>
            <CardDescription>Set current market prices per litre</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pms">PMS (Petrol) — ₦/litre</Label>
              <Input
                id="pms"
                type="number"
                placeholder="e.g. 620"
                value={pmsPrice}
                onChange={(e) => setPmsPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ago">AGO (Diesel) — ₦/litre</Label>
              <Input
                id="ago"
                type="number"
                placeholder="e.g. 1100"
                value={agoPrice}
                onChange={(e) => setAgoPrice(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> Delivery Fee
            </CardTitle>
            <CardDescription>Base delivery fee charged per order</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="delivery">Base Delivery Fee — ₦</Label>
              <Input
                id="delivery"
                type="number"
                placeholder="e.g. 1500"
                value={deliveryFee}
                onChange={(e) => setDeliveryFee(e.target.value)}
              />
            </div>
            <Button onClick={handleSave} className="w-full mt-2" disabled={!pmsPrice && !agoPrice && !deliveryFee}>
              <Save className="w-4 h-4 mr-2" /> Save Pricing
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
