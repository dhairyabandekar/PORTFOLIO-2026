import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="border-b border-hairline">
        <Container className="py-20 sm:py-28 lg:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="eyebrow">
              <span className="text-ochre-deep">01</span>
              <span className="mx-2.5 text-hairline-strong">/</span>
              About
            </p>

            <h1 className="mt-6 max-w-5xl text-title">
              I build things that live between{" "}
              <span className="text-bone">logic</span> and experience.
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Introduction */}
      <section>
        <Container className="py-section">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <p className="eyebrow">A little about me</p>

              <div className="mt-6 h-px w-12 bg-ochre" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="space-y-6 text-base leading-[1.8] text-ash sm:text-lg"
            >
              <p>
                I'm <span className="text-bone">Dhairya Bandekar</span>, a
                Computer Science graduate who enjoys turning ideas into
                functional, thoughtful digital experiences.
              </p>

              <p>
                My work sits primarily around{" "}
                <span className="text-bone">
                  full-stack web development
                </span>
                , with a focus on the MERN stack, JavaScript and modern
                frontend development. I enjoy understanding how a product
                works from the interface all the way to the backend.
              </p>

              <p>
                Beyond development, I'm also interested in{" "}
                <span className="text-bone">
                  leadership, collaboration and problem-solving
                </span>
                . Through technical projects and leadership experiences, I've
                developed an appreciation for taking ownership, working with
                people and continuously learning while building meaningful
                products.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What I Do */}
      <section className="border-y border-hairline bg-ink-raised">
        <Container className="py-section">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="eyebrow">
                <span className="text-ochre-deep">02</span>
                <span className="mx-2.5 text-hairline-strong">/</span>
                What I do
              </p>

              <h2 className="mt-5 max-w-sm text-title">
                From idea to product.
              </h2>
            </div>

            <div className="divide-y divide-hairline border-y border-hairline">
              <Service
                number="01"
                title="Frontend Development"
                description="Building responsive and intuitive interfaces with React, JavaScript, Tailwind CSS and a strong focus on usability."
              />

              <Service
                number="02"
                title="Full-Stack Development"
                description="Developing end-to-end applications using MongoDB, Express, React and Node.js, from user interfaces to APIs and databases."
              />

              <Service
                number="03"
                title="Problem Solving"
                description="Approaching challenges with structured thinking, breaking complex problems into manageable and practical solutions."
              />

              <Service
                number="04"
                title="Leadership & Collaboration"
                description="Taking ownership, working effectively with people and contributing to ideas through collaboration, communication and leadership."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Snapshot */}
      <section>
        <Container className="py-section">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="eyebrow">
                <span className="text-ochre-deep">03</span>
                <span className="mx-2.5 text-hairline-strong">/</span>
                Snapshot
              </p>

              <h2 className="mt-5 text-title">Currently building.</h2>
            </div>

            <div className="grid border-t border-hairline sm:grid-cols-2">
              <SnapshotItem
                label="Focus"
                value="Full-Stack Development"
              />

              <SnapshotItem
                label="Stack"
                value="MERN + Tailwind CSS"
              />

              <SnapshotItem
                label="Exploring"
                value="AI & Agentic Systems"
              />

              <SnapshotItem
                label="Based in"
                value="Mumbai, India"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-hairline">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Let's build something</p>

              <h2 className="mt-5 text-title">
                Have an idea worth{" "}
                <span className="text-bone">building?</span>
              </h2>
            </div>

            <Button to="/contact" variant="outline" size="lg">
              Contact Me
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Service({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-4 py-8 sm:grid-cols-[60px_0.8fr_1.2fr] sm:gap-6"
    >
      <span className="font-mono text-xs text-ochre-deep">{number}</span>

      <h3 className="text-xl text-bone">{title}</h3>

      <p className="max-w-lg text-sm leading-relaxed text-ash">
        {description}
      </p>
    </motion.div>
  );
}

function SnapshotItem({ label, value }) {
  return (
    <div className="border-b border-hairline py-7 sm:pr-8">
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-base text-bone">{value}</p>
    </div>
  );
}

export default About;