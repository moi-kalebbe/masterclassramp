import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const ProvaSocialSection = () => (
  <section className="py-16 sm:py-20 px-6">
    <div className="container max-w-4xl">
      <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8">
        Nossos eventos
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl overflow-hidden aspect-video">
          <img src={event1} alt="Evento de mentoria" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden aspect-video">
          <img src={event2} alt="Palestra para empresários" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default ProvaSocialSection;
