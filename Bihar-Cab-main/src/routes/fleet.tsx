import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { Snowflake, Users, Luggage, IndianRupee } from "lucide-react";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Dzire, Ertiga, XL6, Innova Crysta | Bihar Cab" },
      {
        name: "description",
        content:
          "Choose from our premium fleet — Swift Dzire, Ertiga, XL6 and Innova Crysta. AC, comfortable seating and transparent per-km pricing.",
      },
      { property: "og:title", content: "Bihar Cab Fleet" },
      {
        property: "og:description",
        content: "Dzire, Ertiga, XL6 and Innova Crysta — clean, well-maintained cabs.",
      },
      { property: "og:image", content: IMG.xl6Front },
      { name: "twitter:image", content: IMG.xl6Front },
    ],
  }),
  component: Fleet,
});

const vehicles = [
  {
    name: "Swift Dzire",
    img: IMG.dzire,
    capacity: "4 + 1",
    luggage: "2 Bags",
    rate: "12",
    tag: "Sedan",
  },
  {
    name: "Ertiga",
    img: IMG.ertiga1,
    capacity: "6 + 1",
    luggage: "3 Bags",
    rate: "15",
    tag: "MUV",
  },
  {
    name: "XL6",
    img: IMG.xl6Front,
    capacity: "6 + 1",
    luggage: "3 Bags",
    rate: "15",
    tag: "Premium MUV",
  },
  {
    name: "Innova Crysta",
    img: IMG.innovaFront,
    capacity: "6 + 1",
    luggage: "4 Bags",
    rate: "18",
    tag: "Premium",
  },
];

function Fleet() {
  return (
    <>
      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 text-center">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">
            Our Fleet
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Comfortable Cars for Every Journey
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
            All our vehicles are AC, regularly serviced and driven by professional chauffeurs.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
        {vehicles.map((v) => (
          <div
            key={v.name}
            className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={v.img}
                alt={`${v.name} taxi`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 rounded-full gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {v.tag}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{v.name}</h3>
                <div className="flex items-center gap-1 rounded-full gradient-hero px-3 py-1 text-sm font-semibold text-primary-foreground">
                  <IndianRupee className="h-3.5 w-3.5" />
                  {v.rate}/KM
                </div>
              </div>
              <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                <span>Minimum 200 KM Rate</span>
                <span className="font-semibold text-foreground">₹{Number(v.rate) * 200}</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <Info icon={<Users className="h-4 w-4" />} label="Capacity" value={v.capacity} />
                <Info icon={<Snowflake className="h-4 w-4" />} label="AC" value="Yes" />
                <Info icon={<Luggage className="h-4 w-4" />} label="Luggage" value={v.luggage} />
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-full gradient-accent px-6 py-3 font-semibold text-accent-foreground shadow-card"
              >
                Book {v.name}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/60 p-3 text-center">
      <div className="mx-auto grid h-8 w-8 place-items-center rounded-full gradient-hero text-primary-foreground">
        {icon}
      </div>
      <div className="mt-2 text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  );
}
