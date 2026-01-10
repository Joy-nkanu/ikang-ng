import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Droplets, MapPin, Minus, Plus, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type FuelType = "petrol" | "diesel";

const stations = [
  { id: 1, name: "Total Energies - Lekki", distance: "2.3 km", price: 695, available: true },
  { id: 2, name: "Mobil - Victoria Island", distance: "3.1 km", price: 700, available: true },
  { id: 3, name: "NNPC Mega - Ikoyi", distance: "4.5 km", price: 680, available: true },
  { id: 4, name: "Oando - Ajah", distance: "5.2 km", price: 690, available: false },
];

const OrderSection = () => {
  const [fuelType, setFuelType] = useState<FuelType>("petrol");
  const [quantity, setQuantity] = useState(50);
  const [selectedStation, setSelectedStation] = useState<number | null>(1);
  const [address, setAddress] = useState("");

  const selectedStationData = stations.find((s) => s.id === selectedStation);
  const totalPrice = selectedStationData ? selectedStationData.price * quantity : 0;
  const deliveryFee = 1500;

  return (
    <section id="stations" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Order Now
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get Fuel <span className="text-gradient">Delivered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your fuel type, quantity, and delivery address.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
          >
            {/* Fuel Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Select Fuel Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFuelType("petrol")}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    fuelType === "petrol"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Fuel className={`w-8 h-8 mx-auto mb-2 ${fuelType === "petrol" ? "text-primary" : "text-muted-foreground"}`} />
                  <p className={`font-semibold ${fuelType === "petrol" ? "text-primary" : "text-foreground"}`}>
                    Petrol (PMS)
                  </p>
                  <p className="text-sm text-muted-foreground">₦680 - ₦700/L</p>
                </button>
                <button
                  onClick={() => setFuelType("diesel")}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    fuelType === "diesel"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Droplets className={`w-8 h-8 mx-auto mb-2 ${fuelType === "diesel" ? "text-primary" : "text-muted-foreground"}`} />
                  <p className={`font-semibold ${fuelType === "diesel" ? "text-primary" : "text-foreground"}`}>
                    Diesel (AGO)
                  </p>
                  <p className="text-sm text-muted-foreground">₦1,100 - ₦1,200/L</p>
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Quantity (Litres)
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(10, quantity - 10))}
                  className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="w-5 h-5 text-foreground" />
                </button>
                <div className="flex-1 text-center">
                  <span className="text-4xl font-bold text-foreground">{quantity}</span>
                  <span className="text-lg text-muted-foreground ml-2">Litres</span>
                </div>
                <button
                  onClick={() => setQuantity(Math.min(500, quantity + 10))}
                  className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {[25, 50, 100, 200].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setQuantity(preset)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      quantity === preset
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {preset}L
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Delivery Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your delivery address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-12 h-12 rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Stations & Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Nearby Stations */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Nearby Stations
              </h3>
              <div className="space-y-3">
                {stations.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => station.available && setSelectedStation(station.id)}
                    disabled={!station.available}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedStation === station.id
                        ? "border-primary bg-primary/5"
                        : station.available
                        ? "border-border hover:border-primary/50"
                        : "border-border opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{station.name}</p>
                        <p className="text-sm text-muted-foreground">{station.distance} away</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">₦{station.price}/L</p>
                        {!station.available && (
                          <span className="text-xs text-destructive">Out of stock</span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-lg font-bold text-secondary-foreground mb-4">
                Order Summary
              </h3>
              <div className="space-y-3 text-secondary-foreground">
                <div className="flex justify-between">
                  <span className="text-secondary-foreground/70">
                    {quantity}L × {fuelType === "petrol" ? "Petrol" : "Diesel"}
                  </span>
                  <span className="font-medium">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-foreground/70">Delivery Fee</span>
                  <span className="font-medium">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="border-t border-secondary-foreground/20 pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="text-xl font-bold text-primary">
                      ₦{(totalPrice + deliveryFee).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="hero" size="lg" className="w-full mt-6">
                <Truck className="w-5 h-5" />
                Place Order
              </Button>
              <p className="text-xs text-center text-secondary-foreground/60 mt-3">
                Estimated delivery: 30-45 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
