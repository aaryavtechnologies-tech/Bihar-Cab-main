import { r as IMG } from "./site-CgkB5E3N.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as IndianRupee, r as Users, s as Snowflake, v as Luggage } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fleet-DjojM_PN.js
var import_jsx_runtime = require_jsx_runtime();
var vehicles = [
	{
		name: "Swift Dzire",
		img: IMG.dzire,
		capacity: "4 + 1",
		luggage: "2 Bags",
		rate: "12",
		tag: "Sedan"
	},
	{
		name: "Ertiga",
		img: IMG.ertiga1,
		capacity: "6 + 1",
		luggage: "3 Bags",
		rate: "15",
		tag: "MUV"
	},
	{
		name: "XL6",
		img: IMG.xl6Front,
		capacity: "6 + 1",
		luggage: "3 Bags",
		rate: "15",
		tag: "Premium MUV"
	},
	{
		name: "Innova Crysta",
		img: IMG.innovaFront,
		capacity: "6 + 1",
		luggage: "4 Bags",
		rate: "18",
		tag: "Premium"
	}
];
function Fleet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 md:py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-accent font-semibold",
					children: "Our Fleet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl md:text-5xl font-extrabold",
					children: "Comfortable Cars for Every Journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl mx-auto text-primary-foreground/85",
					children: "All our vehicles are AC, regularly serviced and driven by professional chauffeurs."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2",
		children: vehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/10] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: v.img,
					alt: `${v.name} taxi`,
					loading: "lazy",
					className: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-full gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground",
					children: v.tag
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold",
							children: v.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 rounded-full gradient-hero px-3 py-1 text-sm font-semibold text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3.5 w-3.5" }),
								v.rate,
								"/KM"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Minimum 200 KM Rate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-foreground",
							children: ["₹", Number(v.rate) * 200]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-3 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
								label: "Capacity",
								value: v.capacity
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { className: "h-4 w-4" }),
								label: "AC",
								value: "Yes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luggage, { className: "h-4 w-4" }),
								label: "Luggage",
								value: v.luggage
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex w-full justify-center rounded-full gradient-accent px-6 py-3 font-semibold text-accent-foreground shadow-card",
						children: ["Book ", v.name]
					})
				]
			})]
		}, v.name))
	})] });
}
function Info({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-secondary/60 p-3 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-8 w-8 place-items-center rounded-full gradient-hero text-primary-foreground",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-xs text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold",
				children: value
			})
		]
	});
}
//#endregion
export { Fleet as component };
