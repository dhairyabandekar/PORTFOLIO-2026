import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    period: "2022 — 2026",
    degree: "Bachelor of Technology",
    specialization: "Computer Science & Technology",
    institution: "Usha Mittal Institute of Technology",
    university: "SNDT Women's University",
    location: "Mumbai, Maharashtra",
    score: "CGPA 7.9 / 10",
    description:
      "Built a strong foundation in computer science while working on software development, AI/ML and full-stack projects.",
    focus: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management Systems",
      "Artificial Intelligence & Machine Learning",
      "Software Engineering",
    ],
  },
];

function Education() {
  return (
    <section className="relative py-section">
      <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-8 lg:px-12">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">
            <span className="text-ochre">05</span>

            <span className="mx-2.5 text-hairline-strong">
              /
            </span>

            Education
          </p>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-title">
              Built on curiosity.
              <span className="block text-bone">
                Strengthened through practice.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-ash">
              My academic journey in Computer Science & Technology,
              supported by hands-on projects and continuous exploration
              of modern technologies.
            </p>
          </div>
        </motion.div>

        {/* Education Card */}

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 overflow-hidden border border-hairline"
        >
          {/* Decorative number */}

          <div
            className="pointer-events-none absolute right-6 top-0 select-none font-display text-[8rem] leading-none text-bone/[0.025] sm:text-[12rem]"
            aria-hidden="true"
          >
            26
          </div>

          <div className="grid lg:grid-cols-[0.28fr_0.72fr]">
            {/* Left information */}

            <div className="border-b border-hairline p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center gap-3">
                <GraduationCap
                  size={20}
                  strokeWidth={1.4}
                  className="text-ochre"
                />

                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ash">
                  Academic Record
                </span>
              </div>

              <p className="mt-10 font-mono text-sm uppercase tracking-[0.12em] text-ochre">
                2022 — 2026
              </p>

              <div className="mt-8 border-t border-hairline pt-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-ash">
                  Academic Performance
                </p>

                <p className="mt-3 font-display text-2xl text-bone">
                  CGPA 7.9
                  <span className="text-ash"> / 10</span>
                </p>
              </div>
            </div>

            {/* Main information */}

            <div className="relative p-6 sm:p-8 lg:p-10">
              <p className="eyebrow text-ochre">
                Bachelor of Technology
              </p>

              <h3 className="mt-5 max-w-3xl text-3xl text-bone sm:text-4xl">
                Computer Science
                <span className="block text-ochre">
                  & Technology
                </span>
              </h3>

              <div className="mt-8">
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-bone">
                  Usha Mittal Institute of Technology
                </p>

                <p className="mt-2 text-sm text-ash">
                  SNDT Women's University
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.13em] text-ash">
                <MapPin
                  size={14}
                  strokeWidth={1.5}
                />

                Mumbai, Maharashtra
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-ash">
                Built a strong foundation in computer science while
                developing practical experience through full-stack
                applications, AI/ML projects and continuous learning.
              </p>

              {/* Areas of focus */}

              <div className="mt-10">
                <p className="eyebrow">
                  Areas of Focus
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {education[0].focus.map((item) => (
                    <span
                      key={item}
                      className="border border-hairline-strong px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ash transition-colors duration-300 hover:border-ochre hover:text-ochre"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Education;