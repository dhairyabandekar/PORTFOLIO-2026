import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import FilmGrain from "./ui/FilmGrain";
import { contact, navRoutes, person } from "../config/site";

const elsewhere = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
];

function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-hairline bg-ink">
      <FilmGrain />

      <Container className="relative">
        {/* --- Upper footer --- */}
        <div className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-12">
          
          {/* Left */}
          <div className="flex flex-col justify-between gap-7">
            <div>
              <p className="eyebrow">Portfolio</p>

              <p className="mt-3 font-display text-title text-ochre">
                {person.name}
              </p>
            </div>

            <div>
              <p className="eyebrow">Email</p>

              <a
                href={`mailto:${contact.email}`}
                className="link-quiet mt-2 inline-block font-mono text-sm"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-8">
            
            {/* Navigation */}
            <nav aria-label="Footer">
              <p className="eyebrow">Index</p>

              <ul className="mt-4 space-y-2">
                {navRoutes.map((route, index) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="group flex items-baseline gap-3 font-mono text-xs tracking-[0.04em] text-ash transition-colors duration-300 ease-editorial hover:text-ochre"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[0.625rem] text-ochre-deep transition-colors duration-300 group-hover:text-ochre"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social links */}
            <div>
              <p className="eyebrow">Elsewhere</p>

              <ul className="mt-4 space-y-2">
                {elsewhere.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.04em] text-ash transition-colors duration-300 ease-editorial hover:text-ochre"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={12}
                        aria-hidden="true"
                        className="transition-transform duration-300 ease-editorial group-hover:-translate-y-px group-hover:translate-x-px"
                      />
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href={contact.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.04em] text-ash transition-colors duration-300 ease-editorial hover:text-ochre"
                  >
                    Resume

                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-editorial group-hover:-translate-y-px group-hover:translate-x-px"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Bottom colophon --- */}
        <div className="flex flex-col gap-2 border-t border-hairline py-4 font-mono text-[0.625rem] tracking-[0.08em] text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {person.name}</p>

          <p className="text-ochre-deep">
            All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;