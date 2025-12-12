import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Grijă",
    description: "Fiecare mișcare este făcută cu atenție și respect pentru corpul tău. Nu forțăm – ghidăm cu blândețe.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description: "Un spațiu intim unde fiecare persoană contează. Clase mici pentru atenție individualizată.",
  },
  {
    icon: Sparkles,
    title: "Echilibru",
    description: "Credem în armonia dintre corp și minte. Pilates este mai mult decât exercițiu – este un stil de viață.",
  },
];

const Despre = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <p className="font-display text-primary text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Despre Lin
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Un sanctuar pentru <span className="text-primary">mișcare conștientă</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Lin a fost creat dintr-o dorință simplă: să oferim un spațiu unde fiecare persoană 
            poate descoperi bucuria mișcării fără presiune sau judecată.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
                Filosofia noastră
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  La Lin, credem că Pilates nu este despre a fi perfect – este despre a fi prezent. 
                  Fiecare ședință este o oportunitate de a te reconecta cu corpul tău, de a respira 
                  conștient și de a găsi acea liniște interioară atât de rară în viața de zi cu zi.
                </p>
                <p>
                  Numele "Lin" vine de la liniște – atât cea din studio, cât și cea pe care o 
                  cultivăm în interior. Spațiul nostru este conceput să inspire calm: lumină naturală, 
                  culori calde, materiale naturale și, mai presus de toate, o atmosferă primitoare.
                </p>
                <p>
                  Nu ne grăbim. Nu numărăm repetări pentru că trebuie. Fiecare mișcare are scop, 
                  fiecare respirație contează. Aceasta este promisiunea noastră pentru tine.
                </p>
              </div>
            </div>
            
            {/* Decorative Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-cream overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-6xl text-primary/40 mb-2">Lin</p>
                    <p className="text-sm text-muted-foreground tracking-widest uppercase">
                      Studio de Pilates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Valorile noastre
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ceea ce ne ghidează în fiecare zi și în fiecare clasă pe care o oferim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * (index + 1)}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Space Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Spațiul nostru
            </h2>
            <p className="text-muted-foreground mb-8">
              Studioul Lin oferă un ambient intim, cu echipamente premium și o atenție 
              deosebită pentru fiecare detaliu. Clasele noastre sunt limitate la 
              maximum 6 participante pentru a asigura atenție individualizată și 
              corectitudine în execuția fiecărui exercițiu.
            </p>
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
              <div className="text-center">
                <p className="font-display text-4xl text-primary mb-2">6</p>
                <p className="text-sm text-muted-foreground">participante / clasă</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary mb-2">4</p>
                <p className="text-sm text-muted-foreground">reformere Balanced Body</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">atenție și grijă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Despre;
