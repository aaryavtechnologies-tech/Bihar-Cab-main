import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import serviceErtiga from "@/assets/service-ertiga.jpg";
import serviceHyundai from "@/assets/service-hyundai.png";
import serviceInnova from "@/assets/service-innova.jpg";
import serviceWedding from "@/assets/service-wedding.png";
import serviceWagonr from "@/assets/service-wagonr.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Vehicle Gallery — Bihar Cab" },
      {
        name: "description",
        content: "View our complete fleet of well-maintained, clean, and comfortable cabs.",
      },
    ],
  }),
  component: Gallery,
});

const galleryImages = [
  serviceWagonr,
  serviceInnova,
  serviceWedding,
  serviceHyundai,
  serviceErtiga,
  IMG.ertigaHero,
];

function Gallery() {
  return (
    <>
      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 text-center">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">
            Gallery
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Our Vehicle Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
            Take a look at our complete fleet of clean, well-maintained vehicles ready for your next trip.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((imgSrc, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-border shadow-card bg-muted/10"
            >
              <img
                src={imgSrc}
                alt={`Vehicle ${i + 1}`}
                loading="lazy"
                className="w-full h-64 md:h-80 object-contain hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
