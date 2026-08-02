import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { Target, Eye, HeartHandshake, ShieldCheck, Sparkles, Wallet } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bihar Cab — Trusted Taxi Service in Patna" },
      {
        name: "description",
        content:
          "Bihar Cab is a customer-first taxi service in Patna offering safe, comfortable and affordable rides across Bihar with professional drivers.",
      },
      { property: "og:title", content: "About Bihar Cab" },
      {
        property: "og:description",
        content: "Learn about our mission, vision and why thousands trust Bihar Cab.",
      },
      { property: "og:image", content: IMG.innovaFront },
      { name: "twitter:image", content: IMG.innovaFront },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    {
      icon: HeartHandshake,
      t: "Customer First",
      d: "Every trip is designed around your comfort, timing, and safety.",
    },
    {
      icon: ShieldCheck,
      t: "Safe Journey",
      d: "Verified drivers, well-maintained vehicles, and clear routes.",
    },
    { icon: Sparkles, t: "Comfort", d: "Clean AC cabs with generous legroom and luggage space." },
    {
      icon: Wallet,
      t: "Affordable Rates",
      d: "Transparent per-km pricing with no hidden charges.",
    },
  ];
  return (
    <>
      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">
              About Us
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
              Driven by trust, powered by care.
            </h1>
            <p className="mt-4 text-primary-foreground/85 leading-relaxed">
              Bihar Cab is a Patna-based taxi service dedicated to making every journey safe,
              punctual and comfortable — whether you're commuting across the city, heading to the
              airport, or planning an outstation trip across Bihar.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-elegant border border-white/20">
            <img
              src={IMG.innovaFront}
              alt="Bihar Cab Innova Crysta"
              className="w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
          <div className="grid h-12 w-12 place-items-center rounded-xl gradient-accent text-accent-foreground">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
          <p className="mt-2 text-muted-foreground">
            To deliver dependable, affordable and premium taxi service to every corner of Bihar —
            one honest ride at a time.
          </p>
        </div>
        <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
          <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
            <Eye className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
          <p className="mt-2 text-muted-foreground">
            To be Bihar's most-loved cab brand — trusted for punctuality, comfort and customer-first
            service.
          </p>
        </div>
      </section>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">
              What we stand for
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Core Values</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full gradient-accent" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl bg-card p-6 border border-border shadow-card hover:-translate-y-1 transition"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <img
            src={IMG.ertigaHero}
            alt="Ertiga cab"
            className="rounded-3xl object-cover h-64 w-full shadow-card"
          />
          <img
            src={IMG.xl6Front}
            alt="XL6 cab"
            className="rounded-3xl object-cover h-64 w-full shadow-card"
          />
          <img
            src={IMG.xcentFront}
            alt="Sedan cab"
            className="rounded-3xl object-cover h-64 w-full shadow-card"
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full gradient-accent px-6 py-3 font-semibold text-accent-foreground shadow-card"
          >
            Book your ride
          </Link>
        </div>
      </section>
    </>
  );
}
