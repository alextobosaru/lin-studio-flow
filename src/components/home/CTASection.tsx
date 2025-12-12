import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-primary-foreground" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-primary-foreground" />
      </div>

      <div className="container-narrow mx-auto text-center relative">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-6">
          Începe-ți călătoria astăzi
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Rezervă prima ta clasă și descoperă cum Pilates poate transforma 
          modul în care te simți în propriul corp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link to="/clase">Rezervă o clasă</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
          >
            <Link to="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
