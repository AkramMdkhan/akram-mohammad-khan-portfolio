import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const HOME_LIMIT = 6;

export default function Projects() {
    const homeProjects = projects.slice(0, HOME_LIMIT);
    const hasMore = projects.length > HOME_LIMIT;

    return (
        <section id="projects" className="relative bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
                {/* heading */}
                <div className="mb-10 text-center md:mb-14">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                        What I have built
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        My{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {homeProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                {/* shows only when there are more than 6 projects */}
                {hasMore && (
                    <div className="mt-10 text-center md:mt-14">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/30"
                        >
                            View All Projects
                            <FiArrowRight />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}