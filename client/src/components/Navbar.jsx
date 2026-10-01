import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "./ui/Button";
import Container from "./ui/Container";
import FilmGrain from "./ui/FilmGrain";

import {
  contact,
  navRoutes,
  person,
  routeSlug,
} from "../config/site";

const navLabel =
  "font-mono uppercase transition-colors duration-300 ease-editorial";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const slug = routeSlug(pathname);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const onPopState = () => {
      setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-hidden bg-ink">
      <div className="relative w-full max-w-full border-b border-hairline">
        <Container className="w-full max-w-full overflow-hidden">
          <div className="flex h-14 w-full min-w-0 max-w-full items-center justify-between gap-2 lg:h-16">

            {/* LEFT */}
            <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden sm:gap-4">
              <Link
                to="/"
                onClick={closeMenu}
                className="shrink truncate font-display text-[0.85rem] font-medium tracking-[-0.01em] text-bone transition-colors duration-300 hover:text-ochre sm:text-base"
              >
                {person.name}
              </Link>

              <span
                aria-hidden="true"
                className="hidden h-3.5 w-px shrink-0 bg-hairline-strong min-[380px]:block"
              />

              <span className="hidden min-w-0 truncate font-mono text-[0.625rem] tracking-[0.06em] text-ochre min-[380px]:block sm:text-[0.6875rem]">
                {slug}
              </span>
            </div>

            {/* DESKTOP NAV */}
            <nav
              aria-label="Primary"
              className="hidden h-full shrink-0 lg:block"
            >
              <ul className="flex h-full items-stretch gap-x-4 xl:gap-x-7">
                {navRoutes.map((route) => (
                  <li
                    key={route.path}
                    className="h-full"
                  >
                    <NavLink
                      to={route.path}
                      className={({ isActive }) =>
                        `relative flex h-full items-center text-[0.65rem] tracking-[0.11em] xl:text-[0.6875rem] xl:tracking-[0.14em] ${navLabel} ${
                          isActive
                            ? "text-ochre"
                            : "text-ash hover:text-bone"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {route.label}

                          {isActive && (
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 -bottom-px mx-auto h-[2px] w-3.5 bg-ochre"
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT */}
            <div className="flex shrink-0 items-center gap-2">
              <Button
                href={contact.resume}
                target="_blank"
                rel="noreferrer"
                size="sm"
                className="hidden sm:inline-flex"
              >
                RESUME
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 shrink-0 items-center justify-center text-bone transition-colors duration-300 hover:text-ochre lg:hidden"
              >
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* MOBILE NAV */}
      <div
        id="mobile-nav"
        className={`grid w-full max-w-[100vw] overflow-hidden transition-[grid-template-rows,visibility] duration-300 ease-editorial lg:hidden ${
          menuOpen
            ? "visible grid-rows-[1fr]"
            : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="min-w-0 overflow-hidden">
          <nav
            aria-label="Primary, mobile"
            className="w-full max-w-full border-b border-hairline bg-ink-raised"
          >
            <Container className="w-full max-w-full">
              <ul className="w-full max-w-full py-2 sm:py-3">
                {navRoutes.map((route, index) => (
                  <li
                    key={route.path}
                    className="w-full max-w-full border-b border-hairline last:border-b-0"
                  >
                    <NavLink
                      to={route.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex w-full min-w-0 items-baseline gap-4 py-3.5 text-xs tracking-[0.14em] ${navLabel} ${
                          isActive
                            ? "text-ochre"
                            : "text-bone"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            aria-hidden="true"
                            className={`shrink-0 font-mono text-[0.625rem] tracking-normal ${
                              isActive
                                ? "text-ochre"
                                : "text-ash"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="min-w-0 break-words">
                            {route.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="pb-5 pt-3 sm:hidden">
                <Button
                  href={contact.resume}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  onClick={closeMenu}
                >
                  Résumé
                </Button>
              </div>
            </Container>
          </nav>
        </div>
      </div>

      <FilmGrain className="pointer-events-none z-10" />
    </header>
  );
}

export default Navbar;