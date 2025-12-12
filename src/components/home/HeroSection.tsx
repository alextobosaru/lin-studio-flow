import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lin Studio de Pilates - Interior elegant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container-wide mx-auto px-6 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <p className="font-display text-lg md:text-xl text-primary mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Bine ai venit la Lin
          </p>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Mișcare conștientă.
            <br />
            <span className="text-primary">Respirație.</span>
            <br />
            Echilibru.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Descoperă armonia dintre corp și minte într-un spațiu creat pentru liniște, 
            grijă și transformare personală.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/clase">Rezervă o clasă</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/despre">Descoperă studioul</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Descoperă mai mult</span>
          <div className="w-px h-12 bg-primary/30 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
