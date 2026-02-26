import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import { Camera, Users } from "lucide-react";

const ProvaSocialSection = () => (
  <section className="py-16 sm:py-24 px-6">
    <div className="container max-w-4xl">
      <div className="text-center mb-10">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 inline-block">
          Prova Social
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Eventos que transformam negócios
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Empresários que participaram dos nossos encontros presenciais já aplicam
          os métodos no dia a dia e colhem resultados reais.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { src: event1, alt: "Evento de mentoria", label: "Evento Presencial", icon: Camera },
          { src: event2, alt: "Palestra para empresários", label: "Networking VIP", icon: Users },
        ].map((img) => (
          <div key={img.alt} className="relative group rounded-xl overflow-hidden aspect-video">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <img.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground text-sm font-semibold">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProvaSocialSection;
