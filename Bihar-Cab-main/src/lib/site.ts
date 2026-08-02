import serviceErtiga from "@/assets/service-ertiga.jpg";
import serviceHyundai from "@/assets/service-hyundai.png";
import serviceInnova from "@/assets/service-innova.jpg";
import serviceWedding from "@/assets/service-wedding.png";
import serviceWagonr from "@/assets/service-wagonr.jpg";
import heroNew from "@/assets/hero-new.jpg";

const getAssetUrl = (url: string) => {
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `https://6f66f4fc-ebe2-4175-a710-8e8b326ad3f1.lovableproject.com${url}`;
  }
  return url;
};

export const IMG = {
  dzire: serviceHyundai,
  innovaFront: serviceInnova,
  wedding: serviceWedding,
  ertiga1: serviceErtiga,
  ertiga2: serviceErtiga,
  xl6Front: serviceErtiga,
  xcentFront: serviceWagonr,
  xcentRear: serviceWagonr,
  xl6Rear: serviceErtiga,
  ertigaHero: heroNew,
};

export const PHONE = "9430509122";
export const PHONE_INTL = "919430509122";
export const ADDRESS =
  "Hanuman Path, East Patel Nagar, Adarsh Colony, North Shastri Nagar, Patna, Bihar 800023";
export const GBP_URL = "https://share.google/0Kvb46jjn7UCoNTBk";
export const INSTAGRAM_URL = "https://www.instagram.com/biha_cab9811?igsh=Ym94czRkbnN4cGl4";

export const waLink = (text: string) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:+${PHONE_INTL}`;

export const quickWa = waLink("🚖 Bihar Cab — Hi, I'd like to book a cab. Please share details.");
