import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { Car, Plane, MapPin, Heart, Briefcase, Users, Siren, Repeat } from "lucide-react";
import serviceErtiga from "@/assets/service-ertiga.jpg";
import serviceHyundai from "@/assets/service-hyundai.png";
import serviceInnova from "@/assets/service-innova.jpg";
import serviceWedding from "@/assets/service-wedding.png";
import serviceWagonr from "@/assets/service-wagonr.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Taxi Services — Local, Outstation, Airport & More | Bihar Cab" },
      {
        name: "description",
        content:
          "Explore Bihar Cab services: local rental, airport transfer, outstation, round trip, wedding cab, corporate travel, family trips and emergency taxi.",
      },
      { property: "og:title", content: "Bihar Cab Services" },
      { property: "og:description", content: "Complete taxi solutions across Bihar." },
      { property: "og:image", content: IMG.wedding },
      { name: "twitter:image", content: IMG.wedding },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Car,
    title: "Local Rental",
    desc: "Hourly and full-day rentals across Patna and nearby cities. Ideal for shopping, sightseeing and errands.",
    img: serviceWagonr,
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    desc: "Punctual pickup and drop for Patna Airport with flight-time tracking and clean cabs.",
    img: serviceInnova,
  },
  {
    icon: MapPin,
    title: "Outstation One Way",
    desc: "Comfortable one-way journeys to any city in Bihar or neighbouring states.",
    img: IMG.xl6Front,
  },
  {
    icon: Repeat,
    title: "Round Trip",
    desc: "Return trips with waiting time — perfect for weekend getaways.",
    img: IMG.ertigaHero,
  },
  {
    icon: Heart,
    title: "Wedding Cab",
    desc: "Beautifully prepared cars for weddings, receptions and family functions.",
    img: serviceWedding,
  },
  {
    icon: Briefcase,
    title: "Corporate Cab",
    desc: "Reliable business travel with monthly billing and on-time pickups.",
    img: serviceHyundai,
  },
  {
    icon: Users,
    title: "Family Trips",
    desc: "Spacious MUVs like Ertiga, XL6 and Innova for family vacations.",
    img: serviceErtiga,
  },
  {
    icon: Siren,
    title: "Emergency Taxi",
    desc: "24×7 cab support for hospital, station and last-minute travel needs.",
    img: IMG.xcentRear,
  },
];

function Services() {
  return (
    <>
      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 text-center">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">
            Our Services
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Complete Taxi Solutions for Every Trip
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
            From quick city hops to long outstation journeys, weddings and corporate travel — Bihar
            Cab has you covered.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-14">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-3xl border border-border shadow-card bg-muted/10">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-72 md:h-96 object-contain hover:scale-105 transition duration-500"
              />
            </div>
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-accent text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full gradient-hero px-5 py-3 font-semibold text-primary-foreground shadow-card"
              >
                Book {s.title}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
