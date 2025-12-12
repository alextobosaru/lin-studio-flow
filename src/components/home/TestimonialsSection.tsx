import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Lin Studio a transformat complet relația mea cu propriul corp. Atmosfera calmă și atenția instructorilor fac fiecare ședință specială.",
    author: "Maria D.",
    role: "Clientă de 2 ani",
  },
  {
    content: "După luni de dureri de spate, Pilates-ul la Lin m-a ajutat să redobândesc mobilitatea și încrederea. Recomand din toată inima!",
    author: "Alexandra P.",
    role: "Pilates Reformer",
  },
  {
    content: "Un loc unde mă simt întotdeauna binevenită. Clasele sunt echilibrate perfect între provocare și relaxare.",
    author: "Elena M.",
    role: "Membră fidel",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-display text-primary text-lg mb-3">Testimoniale</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Ce spun clientele noastre
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote 
              key={index}
              className="bg-card rounded-2xl p-8 relative card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s`, animationFillMode: 'forwards' }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              
              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
