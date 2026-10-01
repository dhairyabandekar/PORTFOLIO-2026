import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import Container from "../components/ui/Container";

const projects = [
  {
    number: "01",
    title: "DermaClust",
    type: "AI / Machine Learning",
    description:
      "An intelligent skincare analysis system combining deep-learning based skin concern detection with ingredient analysis and product recommendations.",
    stack: [
      "Python",
      "TensorFlow",
      "U-Net",
      "EfficientNet",
      "BERT",
      "Streamlit",
    ],
    features: [
      "Skin concern segmentation",
      "Ingredient analysis",
      "Cosine-similarity recommendations",
      "Interactive Streamlit interface",
    ],
    github: "#",
    live: "#",
    visual: "DERMACLUST",
  },
  {
    number: "02",
    title: "Authentication System",
    type: "Full-Stack / MERN",
    description:
      "A full-stack authentication application with secure user registration, login and protected profile functionality.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
    ],
    features: [
      "User registration & login",
      "JWT authentication",
      "Protected routes",
      "MongoDB persistence",
    ],
    github: "#",
    live: "#",
    visual: "AUTH / SYSTEM",
  },
  {
    number: "03",
    title: "Post App",
    type: "Full-Stack / MERN",
    description:
      "A MERN social posting application where authenticated users can create image-based posts and explore a shared feed.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "ImageKit",
    ],
    features: [
      "Image upload",
      "Create posts",
      "Shared feed",
      "MVC backend architecture",
    ],
    github: "#",
    live: "#",
    visual: "POST / APP",
  },
  {
    number: "04",
    title: "Cook Book",
    type: "Frontend / Full-Stack",
    description:
      "A recipe discovery experience built around searching, filtering and exploring recipes through a clean responsive interface.",
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
    ],
    features: [
      "Recipe discovery",
      "Multi-category filters",
      "Recipe detail pages",
      "Responsive interface",
    ],
    github: "#",
    live: "#",
    visual: "COOK / BOOK",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const previousProject = () => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setDirection(1);
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const project = projects[activeIndex];

  return (
    <main>
      {/* Header */}
      <section className="border-b border-hairline">
        <Container className="py-20 sm:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="eyebrow">
              <span className="text-ochre-deep">03</span>

              <span className="mx-2.5 text-hairline-strong">
                /
              </span>

              Selected Projects
            </p>

            <h1 className="mt-6 max-w-5xl text-title">
              Things I've{" "}
              <span className="text-bone">designed, built</span>{" "}
              and explored.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-ash">
              A selection of projects spanning full-stack
              development, artificial intelligence and product
              experimentation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Project Deck */}
      <section>
        <Container className="py-section">
          {/* Controls */}
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Project index</p>

              <p className="mt-2 font-mono text-sm text-bone">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-ash">/</span>
                {String(projects.length).padStart(2, "0")}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center border border-hairline-strong text-bone transition-colors duration-300 hover:border-ochre hover:text-ochre"
              >
                <ArrowLeft size={17} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center border border-hairline-strong text-bone transition-colors duration-300 hover:border-ochre hover:text-ochre"
              >
                <ArrowRight size={17} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Deck */}
          <div className="relative">
            {/* Back card 02 */}
            <div
              className="absolute inset-x-6 top-6 h-full border border-hairline bg-ink-raised opacity-30 sm:inset-x-12"
              aria-hidden="true"
            />

            {/* Back card 01 */}
            <div
              className="absolute inset-x-3 top-3 h-full border border-hairline bg-ink-raised opacity-60 sm:inset-x-6"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={project.title}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    x: dir > 0 ? 60 : -60,
                    rotate: dir > 0 ? 1 : -1,
                  }),
                  center: {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    x: dir > 0 ? -60 : 60,
                    rotate: dir > 0 ? -1 : 1,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative border border-hairline-strong bg-ink"
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  {/* Visual */}
                  <div className="relative min-h-[200px] overflow-hidden border-b border-hairline bg-ink-raised sm:min-h-[240px] lg:min-h-[300px] lg:border-b-0 lg:border-r">
                    <ProjectVisual project={project} />

                    <div className="absolute left-6 top-6">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ash">
                        Visual / {project.number}
                      </span>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="flex flex-col p-4 sm:p-5 lg:p-6">                    <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="eyebrow">
                        {project.type}
                      </p>

                      <span className="font-mono text-xs text-ochre-deep">
                        {project.number}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl text-bone sm:text-2xl">
                      {project.title}
                    </h2>

                    <div className="mt-6 h-px w-12 bg-ochre" />

                    <p className="mt-4 max-w-lg text-xs leading-[1.65] text-ash sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                    {/* Stack */}
                    <div className="mt-5">
                      <p className="eyebrow">Technology</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((technology) => (
                          <span
                            key={technology}
                            className="border border-hairline-strong px-2.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-ash"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-10">
                      <p className="eyebrow">Key features</p>

                      <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
                        {project.features.map(
                          (feature, index) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 py-2 text-xs text-ash"
                            >
                              <span className="font-mono text-[0.625rem] text-ochre-deep">
                                {String(index + 1).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex flex-wrap gap-4 pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-bone transition-colors hover:text-ochre"
                      >
                        <GitBranch
                          size={15}
                          strokeWidth={1.5}
                        />
                        GitHub
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-bone transition-colors hover:text-ochre"
                      >
                        Live Demo
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Project navigation */}
          <div className="mt-14 grid border-t border-hairline sm:grid-cols-4">
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setDirection(
                    index > activeIndex ? 1 : -1
                  );
                  setActiveIndex(index);
                }}
                className={`border-b border-hairline py-5 text-left transition-colors sm:px-4 ${index === activeIndex
                    ? "text-ochre"
                    : "text-ash hover:text-bone"
                  }`}
              >
                <span className="font-mono text-[0.625rem]">
                  {item.number}
                </span>

                <p className="mt-1 font-display text-sm">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f2f0eb 1px, transparent 1px),
            linear-gradient(to bottom, #f2f0eb 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* large project number */}
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-[7rem] leading-none text-bone/[0.025] sm:text-[9rem]"
        aria-hidden="true"
      >
        {project.number}
      </span>

      {/* Temporary visual */}
      <div className="relative px-8 text-center">
        <motion.div
          key={project.visual}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-ochre-deep">
            Selected work
          </p>

          <p className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-bone sm:text-6xl">
            {project.visual}
          </p>

          <div className="mx-auto mt-7 h-px w-16 bg-ochre" />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;