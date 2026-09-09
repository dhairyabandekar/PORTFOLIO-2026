import { motion } from "framer-motion";
import Container from "../components/ui/Container";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["JavaScript", "Java"],
  },
  {
    number: "02",
    title: "Frontend",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "React Router",
      "Tailwind CSS",
      "Axios",
    ],
  },
  {
    number: "03",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Bcrypt.js",
    ],
  },
  {
    number: "04",
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
    ],
  },
  {
    number: "05",
    title: "Fundamentals",
    skills: [
      "DSA",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    number: "06",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MongoDB Atlas",
      "Netlify",
      "Render",
      "Vercel",
      "ImageKit",
    ],
  },
];

function Skills() {
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
              <span className="text-ochre-deep">02</span>
              <span className="mx-2.5 text-hairline-strong">/</span>
              Skills
            </p>

            <h1 className="mt-6 max-w-4xl text-title">
              Tools for turning{" "}
              <span className="text-bone">ideas into systems.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-ash">
              A growing toolkit built around full-stack development, problem
              solving and exploring intelligent applications.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Skill Grid */}
      <section>
        <Container className="py-section">
          <div className="grid border-t border-hairline lg:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-hairline py-10 lg:even:border-l lg:even:pl-10 lg:odd:pr-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-ochre-deep">
                    {group.number}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                    {group.skills.length} skills
                  </span>
                </div>

                <h2 className="mt-8 text-2xl text-bone transition-colors duration-300 group-hover:text-ochre">
                  {group.title}
                </h2>

                <div className="mt-8 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-hairline-strong px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ash transition-all duration-300 hover:border-ochre hover:text-ochre"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-y border-hairline bg-ink-raised">
        <Container className="py-section">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="eyebrow">
                <span className="text-ochre-deep">03</span>
                <span className="mx-2.5 text-hairline-strong">/</span>
                Approach
              </p>

              <h2 className="mt-5 text-title">
                Technology is the tool.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-[1.8] text-ash sm:text-lg">
              <p>
                I don't want to simply collect technologies. I focus on
                understanding <span className="text-bone">why</span> a
                technology is useful and where it fits into a larger system.
              </p>

              <p>
                From designing a React interface to building APIs and working
                with databases, I enjoy moving between different layers of a
                product and connecting them together.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom statement */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="eyebrow">Always learning</p>

            <p className="mt-6 font-display text-3xl leading-tight tracking-tight text-bone sm:text-4xl lg:text-5xl">
              Currently exploring{" "}
              <span className="text-ochre">AI, agentic systems</span> and
              better ways to build digital products.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Skills;