import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const slides = [
  {
    image: campusHero,
    title: "ANU Becomes INDIA's First Public University To Achieve QS I-GAUGE LEAD CERTIFICATE",
  },
  {
    image: campusHero,
    title: "Welcome to Acharya Nagarjuna University — A Centre of Academic Excellence Since 1976",
  },
  {
    image: campusHero,
    title: "NAAC 'A' Grade Accredited — Shaping Future Leaders in Education & Research",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-tight drop-shadow-lg text-primary-foreground animate-fade-in-up">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/30 hover:bg-foreground/50 text-primary-foreground p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/30 hover:bg-foreground/50 text-primary-foreground p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroCarousel;
