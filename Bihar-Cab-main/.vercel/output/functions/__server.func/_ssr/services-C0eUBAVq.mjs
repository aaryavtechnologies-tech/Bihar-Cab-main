import { c as service_hyundai_default, d as service_wedding_default, l as service_innova_default, r as IMG, s as service_ertiga_default, u as service_wagonr_default } from "./site-CgkB5E3N.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Briefcase, E as Car, _ as MapPin, c as Siren, d as Repeat, f as Plane, r as Users, x as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C0eUBAVq.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		icon: Car,
		title: "Local Rental",
		desc: "Hourly and full-day rentals across Patna and nearby cities. Ideal for shopping, sightseeing and errands.",
		img: service_wagonr_default
	},
	{
		icon: Plane,
		title: "Airport Transfer",
		desc: "Punctual pickup and drop for Patna Airport with flight-time tracking and clean cabs.",
		img: service_innova_default
	},
	{
		icon: MapPin,
		title: "Outstation One Way",
		desc: "Comfortable one-way journeys to any city in Bihar or neighbouring states.",
		img: IMG.xl6Front
	},
	{
		icon: Repeat,
		title: "Round Trip",
		desc: "Return trips with waiting time — perfect for weekend getaways.",
		img: IMG.ertigaHero
	},
	{
		icon: Heart,
		title: "Wedding Cab",
		desc: "Beautifully prepared cars for weddings, receptions and family functions.",
		img: service_wedding_default
	},
	{
		icon: Briefcase,
		title: "Corporate Cab",
		desc: "Reliable business travel with monthly billing and on-time pickups.",
		img: service_hyundai_default
	},
	{
		icon: Users,
		title: "Family Trips",
		desc: "Spacious MUVs like Ertiga, XL6 and Innova for family vacations.",
		img: service_ertiga_default
	},
	{
		icon: Siren,
		title: "Emergency Taxi",
		desc: "24×7 cab support for hospital, station and last-minute travel needs.",
		img: IMG.xcentRear
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 md:py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-accent font-semibold",
					children: "Our Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl md:text-5xl font-extrabold",
					children: "Complete Taxi Solutions for Every Trip"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl mx-auto text-primary-foreground/85",
					children: "From quick city hops to long outstation journeys, weddings and corporate travel — Bihar Cab has you covered."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 space-y-14",
		children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `grid gap-8 md:grid-cols-2 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl border border-border shadow-card bg-muted/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.img,
					alt: s.title,
					loading: "lazy",
					className: "w-full h-72 md:h-96 object-contain hover:scale-105 transition duration-500"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-xl gradient-accent text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl md:text-3xl font-extrabold",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground leading-relaxed",
					children: s.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-6 inline-flex rounded-full gradient-hero px-5 py-3 font-semibold text-primary-foreground shadow-card",
					children: ["Book ", s.title]
				})
			] })]
		}, s.title))
	})] });
}
//#endregion
export { Services as component };
