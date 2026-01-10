import { motion } from "framer-motion";
import { ArrowRight, Fuel } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-8 shadow-glow animate-float">
            <Fuel className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Skip the Queue?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">
            Join thousands of Nigerians who are already enjoying hassle-free fuel delivery. 
            Download our app or order directly from the website.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Order Fuel Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Download App
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/50 mt-8">
            Available on iOS and Android. Free to download.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
