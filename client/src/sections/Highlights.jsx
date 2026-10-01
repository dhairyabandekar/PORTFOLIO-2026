import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Student Council Leadership",
    subtitle: "Social Media Head",
    organization: "UMIT Student Council",
    period: "2024 — 2025",
    icon: Users,
    description:
      "Led the social media presence for the Student Council, managing digital communication, content planning and outreach across platforms.",
    tags: [
      "Social Media",
      "Content Strategy",
      "Leadership",
      "Outreach",
    ],
  },
  {
    number: "02",
    title: "Research & AI",
    subtitle: "DermaClust",
    organization: "Deep Learning Research Project",
    period: "2025 — 2026",
    icon: BookOpen,
    description:
      "Developed a deep learning-based skincare recommendation system combining image segmentation and ingredient analysis.",
    tags: [
      "Deep Learning",
      "U-Net",
      "BERT",
      "Computer Vision",
    ],
  },
  {
    number: "03",
    title: "GIS & Remote Sensing",
    subtitle: "India Space Lab Internship",
    organization: "Terrain Derivatives from DEM Data",
    period: "2026",
    icon: Compass,
    description:
      "Generated terrain derivatives including contours, slope, aspect and hillshade from DEM satellite data using GIS tools.",
    tags: [
      "QGIS",
      "Remote Sensing",
      "DEM",
      "Geospatial Analysis",
    ],
  },
];

function Highlights() {
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
            <span className="text-ochre">06</span>
            <span className="mx-2.5 text-hairline-strong">/</span>
            Highlights
          </p>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-title">
              Beyond the code.
              <span className="block text-bone">
                Experiences that shaped my perspective.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-ash">
              A selection of experiences across leadership, research,
              technology and exploration that have contributed to how
              I approach problems and build new things.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.article
                key={highlight.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[30rem] bg-ink p-7 sm:p-8 lg:p-9"
              >
                {/* Background number */}
                <span
                  className="pointer-events-none absolute right-5 top-3 select-none font-display text-[7rem] leading-none text-bone/[0.025]"
                  aria-hidden="true"
                >
                  {highlight.number}
                </span>

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-hairline-strong text-ochre transition-all duration-500 group-hover:border-ochre group-hover:bg-ochre group-hover:text-ink">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ash">
                    {highlight.period}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-12">
                  <p className="eyebrow text-ochre">
                    {highlight.subtitle}
                  </p>

                  <h3 className="mt-4 text-2xl text-bone sm:text-3xl">
                    {highlight.title}
                  </h3>

                  <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ash">
                    {highlight.organization}
                  </p>

                  <p className="mt-7 text-sm leading-7 text-ash">
                    {highlight.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-8 left-7 right-7 sm:left-8 sm:right-8 lg:left-9 lg:right-9">
                  <div className="mb-5 h-px w-full bg-hairline" />

                  <div className="flex flex-wrap gap-2">
                    {highlight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-ash"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.4}
                      className="text-ash transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ochre"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 border-t border-hairline pt-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <Sparkles
                size={17}
                strokeWidth={1.4}
                className="text-ochre"
              />

              <p className="max-w-2xl text-sm leading-7 text-ash">
                I enjoy exploring ideas beyond my primary development
                work — from AI research and geospatial technology to
                leadership and digital communication.
              </p>
            </div>

            <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-ochre">
              Always exploring →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Highlights;