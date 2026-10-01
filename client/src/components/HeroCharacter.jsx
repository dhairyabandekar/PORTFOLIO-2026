import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import characterOne from "../assets/hero-character-1.png";
import characterTwo from "../assets/hero-character-2.png";
import characterThree from "../assets/hero-character-3.png";

const characters = [
  {
    image: characterOne,
  },
  {
    image: characterTwo,
  },
  {
    image: characterThree,
  },
];

function HeroCharacter() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);

    setActive((current) =>
      current === characters.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setDirection(-1);

    setActive((current) =>
      current === 0 ? characters.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[650px]">

      {/* Character */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 40 : -40,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -40 : 40,
              scale: 0.97,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.img
              src={characters[active].image}
              alt="3D character illustration"
              className="h-full w-full object-contain"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right controls */}
      <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-4">

        {/* Previous */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous character"
          className="flex h-10 w-10 items-center justify-center border border-hairline-strong text-bone transition-all duration-300 hover:border-ochre hover:text-ochre"
        >
          <ChevronUp
            size={17}
            strokeWidth={1.5}
          />
        </button>

        {/* Progress indicators */}
        <div className="flex flex-col items-center gap-2">
          {characters.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > active ? 1 : -1);
                setActive(index);
              }}
              aria-label={`Show character ${index + 1}`}
              className="group flex items-center justify-center py-1"
            >
              <span
                className={`block transition-all duration-300 ${
                  index === active
                    ? "h-8 w-[2px] bg-ochre"
                    : "h-4 w-px bg-hairline-strong group-hover:bg-ash"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="Next character"
          className="flex h-10 w-10 items-center justify-center border border-hairline-strong text-bone transition-all duration-300 hover:border-ochre hover:text-ochre"
        >
          <ChevronDown
            size={17}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-[4.25rem] top-1/2 hidden h-40 w-px -translate-y-1/2 bg-hairline lg:block" />
    </div>
  );
}

export default HeroCharacter;