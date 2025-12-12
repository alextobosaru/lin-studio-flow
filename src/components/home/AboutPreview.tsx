import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-accent/5">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="font-display text-primary text-lg mb-3">Despre Lin</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
              Un spațiu creat pentru <span className="text-primary">tine</span>
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                La Lin, credem că fiecare mișcare contează. Studioul nostru a fost conceput 
                ca un sanctuar al liniștii, unde corpul și mintea pot lucra în armonie.
              </p>
              <p>
                Cu clase intime și atenție individualizată, te ghidăm să descoperi 
                potențialul tău fizic și să găsești echilibrul interior de care ai nevoie.
              </p>
              <p>
                Nu este vorba despre performanță – este vorba despre grijă, prezență și 
                bucuria mișcării conștiente.
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/despre">Filosofia noastră</Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-cream to-cream-dark overflow-hidden relative">
              {/* Decorative arches inspired by logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  {/* Outer arch */}
                  <div className="absolute inset-0 border-[3px] border-primary/30 rounded-t-full rounded-b-none" 
                    style={{ borderBottom: 'none' }} 
                  />
                  {/* Middle arch */}
                  <div className="absolute inset-8 border-[2px] border-primary/20 rounded-t-full rounded-b-none"
                    style={{ borderBottom: 'none' }}
                  />
                  {/* Inner content */}
                  <div className="absolute inset-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-4" />
                      <p className="font-display text-2xl text-primary/60">Lin</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soft shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-medium">
              <p className="font-display text-3xl text-primary font-light">5+</p>
              <p className="text-sm text-muted-foreground">ani de experiență</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
