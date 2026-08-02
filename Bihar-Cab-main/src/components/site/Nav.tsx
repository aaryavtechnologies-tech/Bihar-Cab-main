import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { telLink } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full glass-card border-0 border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <Logo variant="header" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full gradient-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card hover:opacity-90 transition"
          >
            Book Now
          </Link>
          <button
            className="md:hidden rounded-full p-2 hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-3 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full gradient-accent px-4 py-2 font-semibold text-accent-foreground"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
