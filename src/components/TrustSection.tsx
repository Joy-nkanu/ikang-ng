import { motion } from "framer-motion";
import { Shield, Users, Clock, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "All delivery riders are background-checked and trained for safe fuel handling.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Average delivery time of 30 minutes. Track your order in real-time.",
  },
  {
    icon: Users,
    title: "10,000+ Customers",
    description: "Trusted by thousands of Nigerians for their fuel needs.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our customer support team is always available to help you.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Nigerians</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We prioritize safety, speed, and reliability in every delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
