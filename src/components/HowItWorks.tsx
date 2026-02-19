import { motion } from "framer-motion";
import { MapPin, Fuel, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Enter Your Location",
    description: "Share your delivery address - home, office, or any location with your generator or vehicle.",
  },
  {
    icon: Fuel,
    title: "Choose Fuel Type",
    description: "Select petrol (PMS) or diesel (AGO), and specify the quantity you need in litres.",
  },
  {
    icon: CreditCard,
    title: "Pay Securely",
    description: "Pay online with your card, bank transfer, or use wallet balance. Prices are transparent.",
  },
  {
    icon: Truck,
    title: "Receive Delivery",
    description: "Track your order in real-time. Our verified riders deliver safely to your location.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient">Ikang</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get fuel delivered in 4 easy steps. No queues, no stress, just convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
