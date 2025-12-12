import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import pilatesReformer from "@/assets/pilates-reformer.jpg";
import pilatesMat from "@/assets/pilates-mat.jpg";
import pilatesPrivate from "@/assets/pilates-private.jpg";

const classes = [
  {
    id: "reformer",
    title: "Pilates Reformer",
    description: "Antrenament complet pe aparatul Reformer, conceput pentru a dezvolta forță, flexibilitate și control muscular. Aparatul oferă rezistență variabilă care te provoacă să lucrezi eficient în fiecare mișcare.",
    image: pilatesReformer,
    level: "Toate nivelurile",
    duration: "55 minute",
    capacity: "6 persoane",
    benefits: ["Tonifiere musculară", "Îmbunătățirea posturii", "Forță în core", "Flexibilitate"],
  },
  {
    id: "mat",
    title: "Pilates Mat",
    description: "Clasele pe saltea sunt fundamentul metodei Pilates. Folosind greutatea propriului corp, vei lucra pentru a-ți întări musculatura profundă, a îmbunătăți postura și a dezvolta o mai bună conștientizare corporală.",
    image: pilatesMat,
    level: "Începători & Intermediari",
    duration: "50 minute",
    capacity: "8 persoane",
    benefits: ["Accesibil pentru toți", "Fără echipament necesar", "Exerciții clasice", "Core puternic"],
  },
  {
    id: "private",
    title: "Ședințe Private",
    description: "Sesiuni unu-la-unu cu instructor dedicat. Program complet personalizat pentru obiectivele tale specifice, fie că este vorba de recuperare, pregătire sportivă sau dezvoltare personală.",
    image: pilatesPrivate,
    level: "Personalizat",
    duration: "60 minute",
    capacity: "1 persoană",
    benefits: ["Atenție completă", "Program personalizat", "Progres accelerat", "Flexibilitate în orar"],
  },
];

const packages = [
  {
    name: "Ședință Single",
    price: "120",
    description: "Perfet pentru a încerca",
    features: ["O singură ședință", "Toate tipurile de clase", "Rezervare flexibilă"],
  },
  {
    name: "Pachet 5 Ședințe",
    price: "500",
    popular: false,
    description: "Economisești 20%",
    features: ["5 ședințe", "Valabil 2 luni", "Toate tipurile de clase"],
  },
  {
    name: "Abonament Lunar",
    price: "650",
    popular: true,
    description: "Cel mai popular",
    features: ["8 ședințe / lună", "Acces prioritar", "Toate tipurile de clase", "Reprogramări gratuite"],
  },
  {
    name: "Abonament Premium",
    price: "950",
    description: "Acces nelimitat",
    features: ["Nelimitat", "Ședințe private reduse", "Evenimente speciale", "Acces prioritar"],
  },
];

const Clase = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <p className="font-display text-primary text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Clase & Servicii
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Găsește clasa <span className="text-primary">potrivită pentru tine</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Oferim o varietate de clase pentru toate nivelurile de experiență. 
            Fiecare ședință este concepută să te ajute să progresezi în ritmul tău.
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="space-y-20">
            {classes.map((classItem, index) => (
              <article 
                key={classItem.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in`}
                style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'forwards' }}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img 
                      src={classItem.image} 
                      alt={classItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                    {classItem.title}
                  </h2>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-primary" />
                      {classItem.level}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {classItem.duration}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      Max. {classItem.capacity}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {classItem.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {classItem.benefits.map((benefit) => (
                      <span 
                        key={benefit}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="hero">
                    <Link to="/contact">Rezervă acum</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-primary text-lg mb-3">Prețuri</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Alege pachetul potrivit
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Toate prețurile sunt în LEI și includ acces la vestiare și dușuri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in ${
                  pkg.popular 
                    ? 'bg-primary text-primary-foreground shadow-medium' 
                    : 'bg-background border border-border hover:shadow-soft'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'forwards' }}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    Popular
                  </span>
                )}
                
                <h3 className="font-display text-xl mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <span className="font-display text-4xl">{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}> LEI</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li 
                      key={feature} 
                      className={`text-sm flex items-center gap-2 ${
                        pkg.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${pkg.popular ? 'bg-primary-foreground' : 'bg-primary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  variant={pkg.popular ? "secondary" : "outline"} 
                  className="w-full"
                >
                  <Link to="/contact">Alege pachetul</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Clase;
