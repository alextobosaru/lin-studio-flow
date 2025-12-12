import { Heart, Sparkles, Activity, Wind } from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Postură Corectă",
    description: "Îmbunătățește alinierea coloanei și reduce durerile de spate prin exerciții precise.",
  },
  {
    icon: Sparkles,
    title: "Flexibilitate",
    description: "Crește mobilitatea articulațiilor și elasticitatea mușchilor pentru mișcări mai fluide.",
  },
  {
    icon: Heart,
    title: "Forță Interioară",
    description: "Dezvoltă musculatura profundă pentru stabilitate și echilibru de durată.",
  },
  {
    icon: Wind,
    title: "Relaxare",
    description: "Respirația conștientă reduce stresul și aduce liniște în viața de zi cu zi.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-display text-primary text-lg mb-3">De ce Pilates?</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Beneficii pentru corp și minte
          </h2>
          <p className="text-muted-foreground">
            Pilates nu este doar un antrenament – este o călătorie spre o versiune mai echilibrată a ta.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-card rounded-2xl p-8 text-center card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
