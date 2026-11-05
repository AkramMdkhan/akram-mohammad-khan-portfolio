import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
    title: "All Projects | Akram Mohammad Khan",
    description: "All the projects built by Akram Mohammad Khan.",
};

export default function AllProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-24">
                {/* back link */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                    <FiArrowLeft />
                    Back to Home
                </Link>

                {/* heading */}
                <div className="mb-10 mt-6 text-center md:mb-14">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                        What I have built
                    </p>
                    <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        All{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}