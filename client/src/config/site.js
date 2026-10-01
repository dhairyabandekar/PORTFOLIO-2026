import resumePdf from "../assets/RESUME_DHAIRYA.pdf";

export const person = {
  name: "Dhairya Bandekar",
};

/** Routes rendered by the router AND listed in the navbar / footer. */
export const navRoutes = [
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/education", label: "Education" },
  { path: "/highlights", label: "Highlights" },
  { path: "/contact", label: "Contact" },
];

/** Home is a route but not a nav item — the wordmark links to it. */
export const homeRoute = { path: "/", label: "Home" };

export const allRoutes = [homeRoute, ...navRoutes];

export const contact = {
  email: "dhairyabandekar@gmail.com",
  github: "https://github.com/dhairyabandekar",
  linkedin: "https://www.linkedin.com/in/dhairya-bandekar-709bb9257/",
  resume: resumePdf,
};

/**
 * The route slug shown beside the wordmark in the navbar.
 * `/` becomes `/home` so the pairing always reads as a path.
 */
export function routeSlug(pathname) {
  if (pathname === "/") return "/home";
  const match = allRoutes.find((route) => route.path === pathname);
  return match ? match.path : pathname;
}
