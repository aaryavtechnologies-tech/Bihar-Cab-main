import { r as __toESM } from "../_runtime.mjs";
import { a as PHONE, f as telLink, i as INSTAGRAM_URL, n as GBP_URL, o as quickWa, r as IMG, t as ADDRESS } from "./site-CgkB5E3N.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as MapPin, g as MapPinned, h as Menu, k as ArrowUp, m as MessageCircle, p as Phone, t as X, y as Instagram } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BEttcBs2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dz-tZWaM.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function Logo({ className = "", variant = "full" }) {
	const gold = "#c5a059";
	if (variant === "header") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 200",
			className: "h-10 w-10 shrink-0",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 30 70 A 75 75 0 0 1 170 70",
					stroke: gold,
					strokeWidth: "5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 50 155 A 75 75 0 0 0 150 155",
					stroke: "currentColor",
					strokeWidth: "5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "76",
					y: "52",
					fill: "currentColor",
					fontSize: "34",
					fontWeight: "900",
					fontFamily: "Outfit, sans-serif",
					textAnchor: "middle",
					children: "B"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "116",
					y: "52",
					fill: gold,
					fontSize: "34",
					fontWeight: "900",
					fontFamily: "Outfit, sans-serif",
					textAnchor: "middle",
					children: "C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 35 105 C 50 100, 70 92, 90 86 C 105 82, 125 82, 140 87 C 152 91, 160 97, 165 105 C 145 103, 125 101, 100 101 C 75 101, 55 105, 35 105 Z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 90 87 C 102 83, 120 83, 132 87 C 122 86, 102 86, 90 87 Z",
					fill: gold
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-lg font-black leading-none tracking-wider uppercase flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground",
					children: "BIHAR"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1",
					style: { color: gold },
					children: "CAB"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[8px] font-bold tracking-[0.2em] uppercase mt-0.5 text-muted-foreground",
				children: "Safe Journey, Every Time"
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-col items-center text-center ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 200",
			className: "h-28 w-28",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 30 70 A 75 75 0 0 1 170 70",
					stroke: gold,
					strokeWidth: "4",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 50 155 A 75 75 0 0 0 150 155",
					stroke: "currentColor",
					strokeWidth: "4",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "78",
					y: "52",
					fill: "currentColor",
					fontSize: "34",
					fontWeight: "900",
					fontFamily: "Outfit, sans-serif",
					textAnchor: "middle",
					children: "B"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "118",
					y: "52",
					fill: gold,
					fontSize: "34",
					fontWeight: "900",
					fontFamily: "Outfit, sans-serif",
					textAnchor: "middle",
					children: "C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 35 105 C 50 100, 70 92, 90 86 C 105 82, 125 82, 140 87 C 152 91, 160 97, 165 105 C 145 103, 125 101, 100 101 C 75 101, 55 105, 35 105 Z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 90 87 C 102 83, 120 83, 132 87 C 122 86, 102 86, 90 87 Z",
					fill: gold
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "100",
					y: "130",
					fontSize: "18",
					fontWeight: "900",
					fontFamily: "Outfit, sans-serif",
					letterSpacing: "1",
					textAnchor: "middle",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", {
							fill: "currentColor",
							children: "BIHAR"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", {
							fill: gold,
							children: "CAB"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "100",
					y: "146",
					fontSize: "5",
					fontWeight: "700",
					fontFamily: "Outfit, sans-serif",
					letterSpacing: "1.2",
					fill: "currentColor",
					textAnchor: "middle",
					children: "SAFE JOURNEY, EVERY TIME"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "33",
					y1: "144",
					x2: "52",
					y2: "144",
					stroke: gold,
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "148",
					y1: "144",
					x2: "167",
					y2: "144",
					stroke: gold,
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 77 172 C 77 169.5, 80 168.5, 81.5 168.5 C 83 168.5, 86 169.5, 86 172 C 86 175, 81.5 178, 81.5 178 C 81.5 178, 77 175, 77 172 Z",
					fill: gold
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "81.5",
					cy: "172",
					r: "1.5",
					fill: "white"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "110",
					y: "175",
					fontSize: "8",
					fontWeight: "800",
					fontFamily: "Outfit, sans-serif",
					letterSpacing: "2",
					fill: "currentColor",
					textAnchor: "middle",
					children: "PATNA, BIHAR"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "45",
					y1: "172.5",
					x2: "70",
					y2: "172.5",
					stroke: gold,
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "130",
					y1: "172.5",
					x2: "155",
					y2: "172.5",
					stroke: gold,
					strokeWidth: "1"
				})
			]
		})
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/fleet",
		label: "Fleet"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 w-full glass-card border-0 border-b border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: "header" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						activeProps: { className: "text-primary bg-secondary" },
						className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: telLink,
							className: "hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hidden sm:inline-flex items-center rounded-full gradient-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card hover:opacity-90 transition",
							children: "Book Now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "md:hidden rounded-full p-2 hover:bg-secondary",
							onClick: () => setOpen(!open),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col p-3 gap-1",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 text-center rounded-full gradient-accent px-4 py-2 font-semibold text-accent-foreground",
					children: "Book Now"
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 gradient-hero text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						variant: "header",
						className: "text-primary-foreground"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-primary-foreground/80 leading-relaxed",
					children: "Reliable taxi service across Bihar — local rides, outstation trips, and airport transfers with clean vehicles and professional drivers."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-accent",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-primary-foreground/85",
					children: [
						["/", "Home"],
						["/about", "About"],
						["/services", "Services"],
						["/fleet", "Fleet"],
						["/contact", "Contact"]
					].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "hover:text-accent transition",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-accent",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-primary-foreground/85",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: telLink,
							children: PHONE
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ADDRESS })]
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-accent",
					children: "Follow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: GBP_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, { className: "h-4 w-4" }), "Google"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), "Instagram"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: quickWa,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 py-5 text-center text-xs text-primary-foreground/70",
			children: "© 2026 Bihar Cab. All rights reserved."
		})]
	});
}
function FloatingButtons() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: quickWa,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "WhatsApp",
			className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-float hover:scale-105 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: telLink,
			"aria-label": "Call",
			className: "fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full gradient-hero text-primary-foreground shadow-elegant hover:scale-105 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6" })
		}),
		show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Back to top",
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			className: "fixed bottom-5 left-5 z-50 grid h-11 w-11 place-items-center rounded-full gradient-accent text-accent-foreground shadow-card hover:scale-105 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
		})
	] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bihar Cab — Reliable Taxi Service in Patna, Bihar" },
			{
				name: "description",
				content: "Bihar Cab offers reliable local, outstation & airport taxi service in Patna. Book Swift Dzire, Ertiga, XL6 & Innova Crysta 24×7. Call 9430509122."
			},
			{
				name: "keywords",
				content: "Bihar Cab, taxi in Patna, Patna to airport cab, outstation taxi Bihar, Innova Crysta rental, Ertiga cab, Swift Dzire taxi, wedding car Patna"
			},
			{
				name: "author",
				content: "Bihar Cab"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Bihar Cab"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingButtons, {})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-AF24q7hj.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Bihar Cab — Taxi Service in Patna | Local, Outstation & Airport" },
			{
				name: "description",
				content: "Book reliable taxis across Bihar with Bihar Cab. Local city rides, outstation, airport transfers. Swift Dzire ₹12/km, Ertiga ₹15/km, Innova ₹18/km. 24×7."
			},
			{
				property: "og:title",
				content: "Bihar Cab — Reliable Taxi Service in Patna"
			},
			{
				property: "og:description",
				content: "Local, outstation & airport cabs in Bihar. Clean vehicles, pro drivers, 24×7 booking."
			},
			{
				property: "og:image",
				content: IMG.ertigaHero
			},
			{
				name: "twitter:image",
				content: IMG.ertigaHero
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "TaxiService",
				name: "Bihar Cab",
				telephone: "+91-9430509122",
				areaServed: "Bihar, India",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Hanuman Path, East Patel Nagar, Adarsh Colony, North Shastri Nagar",
					addressLocality: "Patna",
					addressRegion: "Bihar",
					postalCode: "800023",
					addressCountry: "IN"
				},
				url: "/"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-CAIrXweT.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Bihar Cab — Trusted Taxi Service in Patna" },
		{
			name: "description",
			content: "Bihar Cab is a customer-first taxi service in Patna offering safe, comfortable and affordable rides across Bihar with professional drivers."
		},
		{
			property: "og:title",
			content: "About Bihar Cab"
		},
		{
			property: "og:description",
			content: "Learn about our mission, vision and why thousands trust Bihar Cab."
		},
		{
			property: "og:image",
			content: IMG.innovaFront
		},
		{
			name: "twitter:image",
			content: IMG.innovaFront
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-BDbuRkIk.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Book a Taxi — Contact Bihar Cab | 9430509122" },
		{
			name: "description",
			content: "Book your taxi with Bihar Cab. Fill the form to send your booking directly on WhatsApp, or call 9430509122 for instant service across Bihar."
		},
		{
			property: "og:title",
			content: "Book Bihar Cab"
		},
		{
			property: "og:description",
			content: "Send booking details on WhatsApp — instant confirmation."
		},
		{
			property: "og:image",
			content: IMG.ertigaHero
		},
		{
			name: "twitter:image",
			content: IMG.ertigaHero
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./fleet-DjojM_PN.mjs");
var Route$3 = createFileRoute("/fleet")({
	head: () => ({ meta: [
		{ title: "Our Fleet — Dzire, Ertiga, XL6, Innova Crysta | Bihar Cab" },
		{
			name: "description",
			content: "Choose from our premium fleet — Swift Dzire, Ertiga, XL6 and Innova Crysta. AC, comfortable seating and transparent per-km pricing."
		},
		{
			property: "og:title",
			content: "Bihar Cab Fleet"
		},
		{
			property: "og:description",
			content: "Dzire, Ertiga, XL6 and Innova Crysta — clean, well-maintained cabs."
		},
		{
			property: "og:image",
			content: IMG.xl6Front
		},
		{
			name: "twitter:image",
			content: IMG.xl6Front
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./gallery-3axKTW5A.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Vehicle Gallery — Bihar Cab" }, {
		name: "description",
		content: "View our complete fleet of well-maintained, clean, and comfortable cabs."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-C0eUBAVq.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Taxi Services — Local, Outstation, Airport & More | Bihar Cab" },
		{
			name: "description",
			content: "Explore Bihar Cab services: local rental, airport transfer, outstation, round trip, wedding cab, corporate travel, family trips and emergency taxi."
		},
		{
			property: "og:title",
			content: "Bihar Cab Services"
		},
		{
			property: "og:description",
			content: "Complete taxi solutions across Bihar."
		},
		{
			property: "og:image",
			content: IMG.wedding
		},
		{
			name: "twitter:image",
			content: IMG.wedding
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var BASE_URL = "";
var Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/services",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/fleet",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.9"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	FleetRoute: Route$3.update({
		id: "/fleet",
		path: "/fleet",
		getParentRoute: () => Route$7
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$7
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$7
	}),
	SitemapDotxmlRoute: Route.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
