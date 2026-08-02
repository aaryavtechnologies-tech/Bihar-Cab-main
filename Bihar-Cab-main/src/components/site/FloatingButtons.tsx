import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { quickWa, telLink } from "@/lib/site";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href={quickWa}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-float hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={telLink}
        aria-label="Call"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full gradient-hero text-primary-foreground shadow-elegant hover:scale-105 transition"
      >
        <Phone className="h-6 w-6" />
      </a>
      {show && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-50 grid h-11 w-11 place-items-center rounded-full gradient-accent text-accent-foreground shadow-card hover:scale-105 transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
