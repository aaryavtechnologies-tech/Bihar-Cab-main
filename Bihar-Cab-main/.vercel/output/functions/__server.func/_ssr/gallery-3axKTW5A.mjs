import { c as service_hyundai_default, d as service_wedding_default, l as service_innova_default, r as IMG, s as service_ertiga_default, u as service_wagonr_default } from "./site-CgkB5E3N.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-3axKTW5A.js
var import_jsx_runtime = require_jsx_runtime();
var galleryImages = [
	service_wagonr_default,
	service_innova_default,
	service_wedding_default,
	service_hyundai_default,
	service_ertiga_default,
	IMG.ertigaHero
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 md:py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-accent font-semibold",
					children: "Gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl md:text-5xl font-extrabold",
					children: "Our Vehicle Gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl mx-auto text-primary-foreground/85",
					children: "Take a look at our complete fleet of clean, well-maintained vehicles ready for your next trip."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: galleryImages.map((imgSrc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl border border-border shadow-card bg-muted/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imgSrc,
					alt: `Vehicle ${i + 1}`,
					loading: "lazy",
					className: "w-full h-64 md:h-80 object-contain hover:scale-105 transition duration-500"
				})
			}, i))
		})
	})] });
}
//#endregion
export { Gallery as component };
