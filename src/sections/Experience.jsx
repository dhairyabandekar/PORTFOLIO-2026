import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 — 2026",
    role: "Frontend Development Intern",
    company: "SKTECHUB",
    type: "Remote Internship",
    description:
      "Worked on frontend development projects, building responsive and interactive user interfaces using modern web technologies.",

    highlights: [
      "Built responsive user interfaces with React and modern JavaScript.",
      "Worked with reusable components and structured frontend architecture.",
      "Focused on responsive design and improving overall user experience.",
    ],

    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },

  {
    period: "2024",
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    type: "Remote Internship",
    description:
      "Completed hands-on web development projects focused on interactive interfaces and practical JavaScript implementation.",

    highlights: [
      "Built interactive web applications using HTML, CSS and JavaScript.",
      "Developed a weather application using an external API.",
      "Created a stopwatch application with interactive controls.",
      "Implemented responsive navigation and scroll-based interactions.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
    ],
  },

  {
    period: "Previous Experience",
    role: "Sales Professional",
    company: "Education Industry",
    type: "1.5 Years Experience",
    description:
      "Worked in the education industry with responsibilities involving communication, client interaction and sales.",

    highlights: [
      "Communicated with prospective students and clients.",
      "Handled sales-related interactions and follow-ups.",
      "Developed communication, presentation and relationship-building skills.",
    ],

    technologies: [
      "Communication",
      "Sales",
      "Client Relations",
    ],
  },
];

function Experience() {
  return (
    <section className="relative py-section">
      <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-8 lg:px-12">

        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">
            <span className="text-ochre">04</span>

            <span className="mx-2.5 text-hairline-strong">
              /
            </span>

            Experience
          </p>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-title">
              Experience built through
              <span className="block text-bone">
                learning and shipping.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-ash">
              A combination of development experience and professional
              experience that has shaped how I approach technology,
              communication and problem solving.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            EXPERIENCE LIST
        ============================================================ */}

        <div className="mt-16 border-t border-hairline">

          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-8 border-b border-hairline py-10 transition-colors duration-500 hover:bg-ink-raised/40 lg:grid-cols-[0.25fr_0.75fr]"
            >

              {/* LEFT — PERIOD */}

              <div className="flex flex-col gap-4">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ochre">
                  {experience.period}
                </span>

                <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ash">
                  {experience.type}
                </span>
              </div>

              {/* RIGHT — EXPERIENCE */}

              <div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div>
                    <h3 className="text-2xl text-ochre sm:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bone">
                      {experience.company}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    className="text-ash transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ochre"
                  />
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-ash">
                  {experience.description}
                </p>

                {/* HIGHLIGHTS */}

                <ul className="mt-7 grid gap-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-bone"
                    >
                      <span className="mt-3 h-px w-5 shrink-0 bg-ochre" />

                      <span>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* TECHNOLOGIES */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-hairline-strong px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ash transition-colors duration-300 hover:border-ochre hover:text-ochre"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;