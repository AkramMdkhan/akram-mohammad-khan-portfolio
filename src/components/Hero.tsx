"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";

type Social = {
  name: string;
  href: string;
  icon: IconType;
};

type Stat = {
  value: string;
  label: string;
};

type OrbitItem = {
  name: string;
  icon: IconType;
  color: string; // Tailwind text color class
};

// ✏️ KEEP YOUR REAL LINKS HERE (replace your-username)
const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/AkramMdKhan", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/akrammdkhan",
    icon: FaLinkedinIn,
  },
];
// ✏️ END OF EDIT AREA

const stats: Stat[] = [
  { value: "MERN", label: "Core Stack" },
  { value: "Next.js", label: "Framework" },
  { value: "Tailwind", label: "Styling" },
];

const orbitItems: OrbitItem[] = [
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#5FA04E]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38BDF8]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
];

const ORBIT_SECONDS = 36; // bigger number = slower orbit

// animation settings
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      {/* background glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: text card */}
          <div>
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur sm:p-8"
            >
              <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300 sm:text-sm">
                Hi, I&apos;m Akram Mohammad Khan
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Full Stack
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <div className="mt-4 h-1 w-16 rounded bg-gradient-to-r from-cyan-400 to-emerald-400" />

              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                I build Full Stack, fast &amp; responsive web apps with{" "}
                <span className="font-semibold text-cyan-400">
                  MongoDB, Express, React and Node.js
                </span>{" "}
                — from clean user interfaces to scalable APIs. Let&apos;s turn
                your idea into a{" "}
                <span className="font-semibold text-emerald-400">
                  working product
                </span>
                .
              </p>
            </motion.div>

            {/* buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-500/30"
              >
                <FiDownload />
                Download Resume/CV
              </a>

              <div className="flex items-center gap-3">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: circular photo with orbiting tech icons */}
          <motion.div
            variants={popIn}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[420px]"
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-cyan-400/50 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 shadow-[0_0_70px_rgba(34,211,238,0.35)]">
              <Image
                src="/akram.png"
                alt="Akram Mohammad Khan"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="origin-bottom scale-110 object-contain object-bottom"
              />
            </div>

            {/* orbit path (static dashed ring) */}
            <div className="pointer-events-none absolute inset-[-7%] rounded-full border border-dashed border-cyan-400/25" />

            {/* rotating orbit */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[-7%]"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: ORBIT_SECONDS,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {orbitItems.map((item, index) => {
                const angle =
                  (index / orbitItems.length) * 2 * Math.PI - Math.PI / 2;
                const left = (50 + 50 * Math.cos(angle)).toFixed(2);
                const top = (50 + 50 * Math.sin(angle)).toFixed(2);

                return (
                  <div
                    key={item.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    {/* counter-rotate so the icon stays upright */}
                    <motion.span
                      title={item.name}
                      animate={reduceMotion ? undefined : { rotate: -360 }}
                      transition={{
                        duration: ORBIT_SECONDS,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-lg shadow-[0_0_18px_rgba(34,211,238,0.3)] sm:h-11 sm:w-11 sm:text-xl ${item.color}`}
                    >
                      <item.icon />
                    </motion.span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* stats cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-slate-900/60 py-6 text-center transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="text-2xl font-bold text-cyan-400">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

