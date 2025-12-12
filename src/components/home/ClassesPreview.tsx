import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import pilatesReformer from "@/assets/pilates-reformer.jpg";
import pilatesMat from "@/assets/pilates-mat.jpg";
import pilatesPrivate from "@/assets/pilates-private.jpg";

const classes = [
  {
    title: "Pilates Reformer",
    description: "Antrenament pe aparat pentru forță, flexibilitate și control.",
    image: pilatesReformer,
    level: "Toate nivelurile",
    duration: "55 min",
  },
  {
    title: "Pilates Mat",
    description: "Exerciții clasice pe saltea pentru core și postură.",
    image: pilatesMat,
    level: "Începători",
    duration: "50 min",
  },
  {
    title: "Ședințe Private",
    description: "Atenție individualizată și program personalizat.",
    image: pilatesPrivate,
    level: "Personalizat",
    duration: "60 min",
  },
];

const ClassesPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-display text-primary text-lg mb-3">Clasele noastre</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Alege experiența ta
            </h2>
          </div>
          <Button asChild variant="outline" size="default">
            <Link to="/clase">Vezi toate clasele</Link>
          </Button>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <article 
              key={classItem.title}
              className="group rounded-2xl overflow-hidden bg-card card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground">
                    {classItem.level}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground">
                    {classItem.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {classItem.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {classItem.description}
                </p>
                <Link 
                  to="/clase" 
                  className="text-sm font-medium text-primary link-underline"
                >
                  Află mai multe
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesPreview;
