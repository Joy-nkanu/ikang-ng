import { motion } from "framer-motion";
import { MapPin, Clock, Fuel, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fuel delivery truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-fuel-navy/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              Now available in Lagos, Abuja & Port Harcourt
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight"
          >
            Skip The Queue.{" "}
            <span className="text-gradient">Get Fuel Delivered.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Order petrol or diesel from nearby filling stations and get it
            delivered to your home, office, or generator. No more long queues.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Order Fuel Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mx-auto mb-2">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/60">Partner Stations</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">30min</p>
              <p className="text-sm text-primary-foreground/60">Avg Delivery</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mx-auto mb-2">
                <Fuel className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">10K+</p>
              <p className="text-sm text-primary-foreground/60">Orders Delivered</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
