import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FiLayout, FiServer, FiTool } from "react-icons/fi";

type Skill = {
  name: string;
  icon: IconType;
  color: string; // Tailwind text color class
};

type Category = {
  title: string;
  icon: IconType;
  skills: Skill[];
};

// ✏️ EDIT: keep only the skills you really know
const categories: Category[] = [
  {
    title: "Frontend",
    icon: FiLayout,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38BDF8]" },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#5FA04E]" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ],
  },
  {
    title: "Tools",
    icon: FiTool,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
    ],
  },
];
// ✏️ END OF EDIT AREA

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* heading */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
            What I work with
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        {/* category cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-400/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                  <category.icon />
                </span>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-2 py-4 text-center transition hover:-translate-y-1 hover:border-cyan-400/50"
                  >
                    <skill.icon
                      className={`text-3xl transition group-hover:scale-110 ${skill.color}`}
                    />
                    <span className="text-xs font-medium text-slate-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}