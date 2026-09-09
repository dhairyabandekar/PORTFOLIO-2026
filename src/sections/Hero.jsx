import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import FilmGrain from "../components/ui/FilmGrain";
import { contact } from "../config/site";

import characterOne from "../assets/hero-character-1.png";
import characterTwo from "../assets/hero-character-2.png";
import characterThree from "../assets/hero-character-3.png";

const characters = [
  { image: characterOne },
  { image: characterTwo },
  { image: characterThree },
];

function Hero() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) =>
      current === characters.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setActive((current) =>
      current === 0 ? characters.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full max-w-full overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      <FilmGrain />

      <Container className="relative z-10 w-full max-w-full py-8 sm:py-12 lg:min-h-[calc(100vh-4rem)] lg:py-16">
        
        {/* ONE COLUMN ON MOBILE — TWO COLUMNS ONLY ON LARGE SCREENS */}
        <div className="grid w-full max-w-full grid-cols-1 gap-10 overflow-hidden lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full max-w-full min-w-0 overflow-hidden">

            {/* EYEBROW */}
            <div className="flex w-full flex-wrap items-center gap-2">
              <span className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-ochre">
                00
              </span>

              <span className="shrink-0 font-mono text-[10px] text-hairline-strong">
                /
              </span>

              <span className="min-w-0 break-words font-mono text-[10px] uppercase tracking-[0.08em] text-ash sm:tracking-[0.12em]">
                Computer Science Graduate
              </span>
            </div>

            {/* NAME */}
            <h1
              id="hero-heading"
              className="mt-5 w-full max-w-full"
            >
              <span className="block break-words font-display text-[clamp(3rem,14vw,7rem)] leading-[0.9] tracking-[-0.04em] text-ochre">
                Dhairya
              </span>

              <span className="block break-words font-display text-[clamp(3rem,14vw,7rem)] leading-[0.9] tracking-[-0.04em] text-bone">
                Bandekar
              </span>
            </h1>

            {/* ROLE */}
            <div className="mt-6 flex w-full flex-wrap items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-ochre sm:w-16" />

              <span className="min-w-0 break-words font-mono text-[10px] uppercase tracking-[0.1em] text-ash sm:tracking-[0.16em]">
                Developer / Builder
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-6 w-full max-w-full space-y-4">
              <p className="w-full max-w-xl break-words text-[15px] leading-7 text-bone sm:text-base sm:leading-8 lg:text-lg">
                I build thoughtful digital experiences with modern web
                technologies, with a focus on creating functional and
                intuitive full-stack applications.
              </p>

              <p className="w-full max-w-lg break-words text-sm leading-7 text-ash">
                Computer Science graduate focused on full-stack development,
                MERN applications, problem solving, leadership and
                collaboration.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                to="/projects"
                variant="solid"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                View Projects
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </Button>

              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                Contact Me
              </Button>

              <Button
                href={contact.resume}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                Resume
              </Button>
            </div>
          </div>

          {/* ================= CHARACTER ================= */}
          <div className="flex w-full max-w-full min-w-0 flex-col items-center justify-center overflow-hidden">

            {/* CHARACTER STAGE */}
            <div className="relative h-[360px] w-full max-w-[340px] sm:h-[480px] sm:max-w-[440px] lg:h-[600px] lg:max-w-[520px]">

              {/* CIRCLE */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hairline"
              />

              {/* IMAGE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.img
                    src={characters[active].image}
                    alt="3D character illustration"
                    className="block h-full w-full max-w-full object-contain"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* CONTROLS */}
              <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous character"
                  className="flex h-9 w-9 items-center justify-center border border-hairline-strong text-bone transition-colors hover:border-ochre hover:text-ochre"
                >
                  <ChevronUp size={16} strokeWidth={1.5} />
                </button>

                <div className="flex flex-col items-center gap-2">
                  {characters.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Show character ${index + 1}`}
                      className="flex h-5 items-center justify-center"
                    >
                      <span
                        className={`block transition-all duration-300 ${
                          index === active
                            ? "h-5 w-[2px] bg-ochre"
                            : "h-3 w-px bg-hairline-strong"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next character"
                  className="flex h-9 w-9 items-center justify-center border border-hairline-strong text-bone transition-colors hover:border-ochre hover:text-ochre"
                >
                  <ChevronDown size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;