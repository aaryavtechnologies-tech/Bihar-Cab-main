import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, MapPinned, MessageCircle } from "lucide-react";
import { ADDRESS, GBP_URL, INSTAGRAM_URL, PHONE, quickWa, telLink } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="mt-20 gradient-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center justify-start">
            <Logo variant="header" className="text-primary-foreground" />
          </div>
          <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
            Reliable taxi service across Bihar — local rides, outstation trips, and airport
            transfers with clean vehicles and professional drivers.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/fleet", "Fleet"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent" />
              <a href={telLink}>{PHONE}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Follow</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-xs"
            >
              <MapPinned className="h-4 w-4" />
              Google
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-xs"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={quickWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-xs"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/70">
        © 2026 Bihar Cab. All rights reserved.
      </div>
    </footer>
  );
}
