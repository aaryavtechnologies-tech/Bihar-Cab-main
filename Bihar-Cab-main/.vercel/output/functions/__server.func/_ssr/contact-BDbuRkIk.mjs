import { r as __toESM } from "../_runtime.mjs";
import { a as PHONE, f as telLink, i as INSTAGRAM_URL, n as GBP_URL, o as quickWa, p as waLink, r as IMG, t as ADDRESS } from "./site-CgkB5E3N.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as MapPin, g as MapPinned, m as MessageCircle, p as Phone, u as Send, y as Instagram } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BDbuRkIk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Enter your full name").max(80),
	mobile: stringType().trim().regex(/^[+0-9\s-]{7,15}$/, "Enter a valid mobile number"),
	email: stringType().trim().email("Invalid email").max(120).optional().or(literalType("")),
	pickup: stringType().trim().min(2, "Pickup location required").max(120),
	destination: stringType().trim().min(2, "Destination required").max(120),
	date: stringType().min(1, "Select travel date"),
	time: stringType().min(1, "Select travel time"),
	vehicle: stringType().min(1, "Choose a vehicle"),
	message: stringType().max(500).optional().or(literalType(""))
});
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		mobile: "",
		email: "",
		pickup: "",
		destination: "",
		date: "",
		time: "",
		vehicle: "Swift Dzire",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = (e) => {
		e.preventDefault();
		const result = schema.safeParse(form);
		if (!result.success) {
			const errs = {};
			result.error.issues.forEach((i) => {
				errs[i.path[0]] = i.message;
			});
			setErrors(errs);
			return;
		}
		setErrors({});
		const d = result.data;
		const text = `🚖 Bihar Cab Booking Inquiry\n\nName: ${d.name}\nMobile: ${d.mobile}\nEmail: ${d.email || "-"}\nPickup Location: ${d.pickup}\nDestination: ${d.destination}\nTravel Date: ${d.date}\nTravel Time: ${d.time}\nVehicle: ${d.vehicle}\nMessage: ${d.message || "-"}\n\nPlease contact me regarding this booking.`;
		window.open(waLink(text), "_blank", "noopener,noreferrer");
	};
	const set = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 md:py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-accent font-semibold",
					children: "Contact & Booking"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl md:text-5xl font-extrabold",
					children: "Book Your Ride in Seconds"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl mx-auto text-primary-foreground/85",
					children: "Fill the form — we'll confirm your booking instantly on WhatsApp."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "lg:col-span-3 rounded-3xl bg-card border border-border shadow-card p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Booking Details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Your details are sent securely to WhatsApp."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							name: "name",
							value: form.name,
							onChange: set,
							err: errors.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Mobile Number",
							name: "mobile",
							value: form.mobile,
							onChange: set,
							err: errors.mobile
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email (optional)",
							name: "email",
							type: "email",
							value: form.email,
							onChange: set,
							err: errors.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Vehicle Type",
							name: "vehicle",
							value: form.vehicle,
							onChange: set,
							err: errors.vehicle,
							options: [
								"Swift Dzire",
								"Ertiga",
								"XL6",
								"Innova Crysta"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Pickup Location",
							name: "pickup",
							value: form.pickup,
							onChange: set,
							err: errors.pickup
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Destination",
							name: "destination",
							value: form.destination,
							onChange: set,
							err: errors.destination
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Travel Date",
							name: "date",
							type: "date",
							value: form.date,
							onChange: set,
							err: errors.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Travel Time",
							name: "time",
							type: "time",
							value: form.time,
							onChange: set,
							err: errors.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								value: form.message,
								onChange: (e) => set("message", e.target.value),
								className: "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring",
								placeholder: "Any specific requirements?"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-elegant hover:opacity-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" }), " Send Booking on WhatsApp"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-2 space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl overflow-hidden border border-border shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.xcentFront,
					alt: "Bihar Cab sedan",
					className: "w-full h-56 object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-card border border-border p-6 shadow-card space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Reach us directly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: telLink,
						className: "flex items-center gap-3 rounded-xl bg-secondary/60 p-3 hover:bg-secondary transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-full gradient-hero text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Call"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: PHONE
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: quickWa,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-3 rounded-xl bg-secondary/60 p-3 hover:bg-secondary transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: "Chat with us"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 rounded-xl bg-secondary/60 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-full gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: ADDRESS
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: GBP_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, { className: "h-4 w-4" }), "Google Business"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), "Instagram"]
						})]
					})
				]
			})]
		})]
	})] });
}
function Field({ label, name, value, onChange, err, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-medium",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(name, e.target.value),
			className: "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
		}),
		err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: err
		})
	] });
}
function Select({ label, name, value, onChange, err, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-medium",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(name, e.target.value),
			className: "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))
		}),
		err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: err
		})
	] });
}
//#endregion
export { Contact as component };
