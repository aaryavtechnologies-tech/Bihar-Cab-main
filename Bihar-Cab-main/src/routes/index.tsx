import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, PHONE, quickWa, telLink, waLink } from "@/lib/site";
import {
  Phone,
  MessageCircle,
  Car,
  Plane,
  MapPin,
  Users,
  Briefcase,
  Heart,
  Building2,
  Sparkles,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Wallet,
  CheckCircle2,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bihar Cab — Taxi Service in Patna | Local, Outstation & Airport" },
      {
        name: "description",
        content:
          "Book reliable taxis across Bihar with Bihar Cab. Local city rides, outstation, airport transfers. Swift Dzire ₹12/km, Ertiga ₹15/km, Innova ₹18/km. 24×7.",
      },
      { property: "og:title", content: "Bihar Cab — Reliable Taxi Service in Patna" },
      {
        property: "og:description",
        content:
          "Local, outstation & airport cabs in Bihar. Clean vehicles, pro drivers, 24×7 booking.",
      },
      { property: "og:image", content: IMG.ertigaHero },
      { name: "twitter:image", content: IMG.ertigaHero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Bihar Cab",
          telephone: "+91-9430509122",
          areaServed: "Bihar, India",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hanuman Path, East Patel Nagar, Adarsh Colony, North Shastri Nagar",
            addressLocality: "Patna",
            addressRegion: "Bihar",
            postalCode: "800023",
            addressCountry: "IN",
          },
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Car, title: "Local City Rental", desc: "Hourly & daily city rides across Patna." },
  { icon: MapPin, title: "Outstation One Way", desc: "Comfortable one-way trips across Bihar." },
  { icon: MapPin, title: "Round Trip", desc: "Return journeys with flexible schedules." },
  { icon: Plane, title: "Airport Pickup", desc: "On-time pickups from Patna Airport." },
  { icon: Plane, title: "Airport Drop", desc: "Stress-free drops for early flights." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Reliable cabs for business travel." },
  { icon: Users, title: "Family Trips", desc: "Spacious rides for family vacations." },
  { icon: Heart, title: "Wedding Transport", desc: "Decorated cars for special days." },
];

const reasons = [
  { icon: BadgeCheck, t: "Professional Drivers" },
  { icon: Sparkles, t: "Clean Vehicles" },
  { icon: Wallet, t: "Affordable Pricing" },
  { icon: Clock, t: "24×7 Service" },
  { icon: CheckCircle2, t: "Instant Booking" },
  { icon: ShieldCheck, t: "Safe Journey" },
  { icon: Clock, t: "On-Time Pickup" },
  { icon: Car, t: "Comfortable Ride" },
];

const fleet = [
  { name: "Swift Dzire", rate: "₹12/KM", img: IMG.dzire, tag: "Sedan" },
  { name: "Ertiga / XL6", rate: "₹15/KM", img: IMG.ertiga1, tag: "MUV" },
  { name: "Innova Crysta", rate: "₹18/KM", img: IMG.innovaFront, tag: "Premium" },
];

const testimonials = [
  {
    name: "Rahul K.",
    text: "Booked for a Patna–Gaya round trip. Driver was polite, car spotless. Highly recommend Bihar Cab!",
  },
  {
    name: "Priya S.",
    text: "On-time airport pickup even at 4am. Fair pricing and comfortable Ertiga. Will book again.",
  },
  {
    name: "Amit R.",
    text: "Used their Innova Crysta for a family wedding. Everything was smooth and premium.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent border border-white/15">
              <Sparkles className="h-3.5 w-3.5" /> Trusted Cab Service in Bihar
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Reliable Taxi Service <span className="text-accent">Across Bihar</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/85">
              Local City Rides • Outstation Trips • Airport Transfers
              <br />
              Safe, Comfortable & Affordable Travel — 24×7.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 font-semibold text-accent-foreground shadow-elegant hover:opacity-90 transition"
              >
                Book Now
              </Link>
              <a
                href={quickWa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-card hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 font-semibold text-primary-foreground hover:bg-white/20 transition"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["10K+", "Happy Rides"],
                ["4.9★", "Rating"],
                ["24/7", "Available"],
              ].map(([n, l]) => (
                <div key={l} className="glass-card rounded-2xl p-3 text-center">
                  <div className="text-2xl font-bold text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gradient-accent opacity-30 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant border border-white/20">
              <img
                src={IMG.ertigaHero}
                alt="Bihar Cab premium Ertiga taxi in Patna"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-full gradient-accent">
                <ShieldCheck className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Verified Drivers</div>
                <div className="text-xs text-muted-foreground">Safe & background checked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section title="Our Services" kicker="What we offer">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-card p-6 border border-border shadow-card hover:-translate-y-1 hover:shadow-elegant transition"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground group-hover:scale-110 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why */}
      <Section title="Why Choose Bihar Cab" kicker="Our promise" tone="muted">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {reasons.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="rounded-2xl glass-card p-5 text-center hover:-translate-y-1 transition shadow-card"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full gradient-accent text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-3 text-sm font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Fleet */}
      <Section title="Our Fleet" kicker="Choose your ride">
        <div className="grid gap-6 md:grid-cols-3">
          {fleet.map((f) => (
            <div
              key={f.name}
              className="group overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={f.img}
                  alt={`${f.name} taxi`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 rounded-full gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {f.tag}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">Starts {f.rate}</p>
                </div>
                <Link
                  to="/contact"
                  className="rounded-full gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Steps */}
      <Section title="How Booking Works" kicker="4 simple steps" tone="muted">
        <div className="grid gap-6 md:grid-cols-4">
          {["Choose Trip", "Fill Booking Form", "Confirm on WhatsApp", "Enjoy Your Ride"].map(
            (s, i) => (
              <div
                key={s}
                className="relative rounded-2xl bg-card p-6 shadow-card border border-border"
              >
                <div className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full gradient-accent text-accent-foreground font-bold text-sm shadow-card">
                  {i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{s}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Quick, transparent and reliable — from pickup to drop.
                </p>
              </div>
            ),
          )}
        </div>
      </Section>

      {/* Reviews */}
      <Section title="What Customers Say" kicker="Reviews">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl bg-card border border-border p-6 shadow-card">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">“{t.text}”</p>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 shadow-elegant">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,white,transparent_50%)]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Need a Cab Today?</h2>
              <p className="mt-2 text-primary-foreground/85">
                Talk to us now — instant confirmation on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 font-semibold text-accent-foreground shadow-card"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={quickWa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-card"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  kicker,
  children,
  tone,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
  tone?: "muted";
}) {
  return (
    <section className={tone === "muted" ? "bg-secondary/50" : ""}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          {kicker && (
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              {kicker}
            </div>
          )}
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">{title}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full gradient-accent" />
        </div>
        {children}
      </div>
    </section>
  );
}
