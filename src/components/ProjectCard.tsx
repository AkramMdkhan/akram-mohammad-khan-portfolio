import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 transition hover:-translate-y-1 hover:border-cyan-400/50">
            {/* image */}
            <div className="relative aspect-video overflow-hidden bg-slate-800">
                <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                    {project.shortDescription}
                </p>

                {/* tech chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* button */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/30"
                >
                    View More / Details
                    <FiArrowRight />
                </Link>
            </div>
        </article>
    );
}