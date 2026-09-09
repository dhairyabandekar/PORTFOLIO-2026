import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  FileText,
} from "lucide-react";

import { contact } from "../config/site";

const contactLinks = [
  {
    label: "Email",
    value: "Let's talk",
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: contact.github,
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: contact.linkedin,
    icon: BriefcaseBusiness,
  },
];

function Contact() {
  return (
    <section className="relative py-section">
      <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-8 lg:px-12">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">
            <span className="text-ochre">07</span>

            <span className="mx-2.5 text-hairline-strong">
              /
            </span>

            Contact
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <h1 className="text-title">
                Let's build something
                <span className="block text-bone">
                  worth exploring.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-ash sm:text-base">
                I'm always interested in new opportunities,
                collaborations and conversations around web development,
                AI and technology.
              </p>
            </div>

            <div className="lg:pb-1">
              <p className="eyebrow">
                Currently
              </p>

              <p className="mt-3 max-w-sm text-sm leading-7 text-bone">
                Open to opportunities where I can build, learn and
                contribute to meaningful products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* MAIN CONTACT AREA */}

        <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT — MAIN EMAIL CTA */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex min-h-[24rem] flex-col justify-between bg-ink p-7 sm:p-10"
          >
            <div>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ochre">
                Start a conversation
              </span>

              <h2 className="mt-6 max-w-2xl text-3xl text-bone sm:text-4xl">
                Have an idea,
                <span className="block text-ochre">
                  opportunity or project?
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-ash">
                Whether it's a role, collaboration or simply a
                conversation about technology, feel free to reach out.
              </p>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="mt-12 flex w-fit items-center gap-3 border-b border-ochre pb-3 font-mono text-xs uppercase tracking-[0.14em] text-bone transition-colors duration-300 hover:text-ochre"
            >
              Send me an email

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* RIGHT — LINKS */}

          <div className="bg-ink">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    item.label === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex min-h-[8rem] items-center justify-between border-b border-hairline p-7 transition-colors duration-300 last:border-b-0 hover:bg-ink-raised sm:p-8"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-11 w-11 items-center justify-center border border-hairline-strong text-ash transition-all duration-300 group-hover:border-ochre group-hover:text-ochre">
                      <Icon
                        size={19}
                        strokeWidth={1.4}
                      />
                    </div>

                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-ash">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm text-bone">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="text-ash transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ochre"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* RESUME */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="eyebrow">
              Resume
            </p>

            <p className="mt-3 text-sm leading-7 text-ash">
              Want a quick overview of my experience,
              skills and projects?
            </p>
          </div>

          <a
            href={contact.resume}
            download
            className="group inline-flex w-fit items-center gap-3 border border-hairline-strong px-5 py-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone transition-all duration-300 hover:border-ochre hover:text-ochre"
          >
            <FileText
              size={16}
              strokeWidth={1.4}
            />

            Download Resume

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* FOOT NOTE */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 border-t border-hairline pt-6"
        >
          <div className="flex flex-col justify-between gap-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ash sm:flex-row">
            <span>
              Based in Mumbai, India
            </span>

            <span>
              Available for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;