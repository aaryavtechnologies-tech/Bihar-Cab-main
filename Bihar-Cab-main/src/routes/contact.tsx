import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ADDRESS, GBP_URL, INSTAGRAM_URL, IMG, PHONE, quickWa, telLink, waLink } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Instagram, MapPinned, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Taxi — Contact Bihar Cab | 9430509122" },
      {
        name: "description",
        content:
          "Book your taxi with Bihar Cab. Fill the form to send your booking directly on WhatsApp, or call 9430509122 for instant service across Bihar.",
      },
      { property: "og:title", content: "Book Bihar Cab" },
      {
        property: "og:description",
        content: "Send booking details on WhatsApp — instant confirmation.",
      },
      { property: "og:image", content: IMG.ertigaHero },
      { name: "twitter:image", content: IMG.ertigaHero },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  mobile: z
    .string()
    .trim()
    .regex(/^[+0-9\s-]{7,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  pickup: z.string().trim().min(2, "Pickup location required").max(120),
  destination: z.string().trim().min(2, "Destination required").max(120),
  date: z.string().min(1, "Select travel date"),
  time: z.string().min(1, "Select travel time"),
  vehicle: z.string().min(1, "Choose a vehicle"),
  message: z.string().max(500).optional().or(z.literal("")),
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    vehicle: "Swift Dzire",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = result.data;
    const text = `🚖 Bihar Cab Booking Inquiry\n\nName: ${d.name}\nMobile: ${d.mobile}\nEmail: ${d.email || "-"}\nPickup Location: ${d.pickup}\nDestination: ${d.destination}\nTravel Date: ${d.date}\nTravel Time: ${d.time}\nVehicle: ${d.vehicle}\nMessage: ${d.message || "-"}\n\nPlease contact me regarding this booking.`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 text-center">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">
            Contact & Booking
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Book Your Ride in Seconds</h1>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
            Fill the form — we'll confirm your booking instantly on WhatsApp.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-5">
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl bg-card border border-border shadow-card p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold">Booking Details</h2>
          <p className="text-sm text-muted-foreground">
            Your details are sent securely to WhatsApp.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              label="Full Name"
              name="name"
              value={form.name}
              onChange={set}
              err={errors.name}
            />
            <Field
              label="Mobile Number"
              name="mobile"
              value={form.mobile}
              onChange={set}
              err={errors.mobile}
            />
            <Field
              label="Email (optional)"
              name="email"
              type="email"
              value={form.email}
              onChange={set}
              err={errors.email}
            />
            <Select
              label="Vehicle Type"
              name="vehicle"
              value={form.vehicle}
              onChange={set}
              err={errors.vehicle}
              options={["Swift Dzire", "Ertiga", "XL6", "Innova Crysta"]}
            />
            <Field
              label="Pickup Location"
              name="pickup"
              value={form.pickup}
              onChange={set}
              err={errors.pickup}
            />
            <Field
              label="Destination"
              name="destination"
              value={form.destination}
              onChange={set}
              err={errors.destination}
            />
            <Field
              label="Travel Date"
              name="date"
              type="date"
              value={form.date}
              onChange={set}
              err={errors.date}
            />
            <Field
              label="Travel Time"
              name="time"
              type="time"
              value={form.time}
              onChange={set}
              err={errors.time}
            />
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Any specific requirements?"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-elegant hover:opacity-95"
          >
            <Send className="h-5 w-5" /> Send Booking on WhatsApp
          </button>
        </form>
        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-3xl overflow-hidden border border-border shadow-card">
            <img src={IMG.xcentFront} alt="Bihar Cab sedan" className="w-full h-56 object-cover" />
          </div>
          <div className="rounded-3xl bg-card border border-border p-6 shadow-card space-y-4">
            <h3 className="text-lg font-bold">Reach us directly</h3>
            <a
              href={telLink}
              className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3 hover:bg-secondary transition"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-hero text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Call</div>
                <div className="font-semibold">{PHONE}</div>
              </div>
            </a>
            <a
              href={quickWa}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3 hover:bg-secondary transition"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">Chat with us</div>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-xl bg-secondary/60 p-3">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-accent text-accent-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Address</div>
                <div className="text-sm">{ADDRESS}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={GBP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium hover:bg-secondary"
              >
                <MapPinned className="h-4 w-4" />
                Google Business
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  err,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (k: string, v: string) => void;
  err?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
      />
      {err && <p className="mt-1 text-xs text-destructive">{err}</p>}
    </div>
  );
}
function Select({
  label,
  name,
  value,
  onChange,
  err,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (k: string, v: string) => void;
  err?: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {err && <p className="mt-1 text-xs text-destructive">{err}</p>}
    </div>
  );
}
