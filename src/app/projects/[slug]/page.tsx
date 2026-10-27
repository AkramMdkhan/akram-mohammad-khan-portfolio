import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    FiAlertTriangle,
    FiArrowLeft,
    FiCpu,
    FiExternalLink,
    FiGithub,
    FiTrendingUp,
} from "react-icons/fi";
import { getProject, projects } from "@/data/projects";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return { title: "Project not found" };
    }

    return {
        title: `${project.name} | Akram Mohammad Khan`,
        description: project.shortDescription,
    };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    const hasLive = project.liveUrl !== "#";
    const hasGithub = project.githubUrl !== "#";

    return (
        <section className="relative bg-slate-950">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-16">
                {/* back link */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                    <FiArrowLeft />
                    Back to projects
                </Link>

                {/* title */}
                <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-5xl">
                    {project.name}
                </h1>
                <p className="mt-3 max-w-2xl text-slate-300">
                    {project.shortDescription}
                </p>

                {/* image */}
                <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-slate-800">
                    <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className="object-cover object-top"
                    />
                </div>

                {/* buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                    {hasLive ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-500/30"
                        >
                            <FiExternalLink />
                            Live Project
                        </a>
                    ) : (
                        <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-500">
                            <FiExternalLink />
                            Live link coming soon
                        </span>
                    )}

                    {hasGithub ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <FiGithub />
                            GitHub Repository
                        </a>
                    ) : (
                        <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-500">
                            <FiGithub />
                            GitHub link coming soon
                        </span>
                    )}
                </div>

                {/* description */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white">About this project</h2>
                    <p className="mt-3 leading-relaxed text-slate-300">
                        {project.description}
                    </p>
                </div>

                {/* tech stack */}
                <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                    <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                        <FiCpu className="text-cyan-400" />
                        Main Technology Stack
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* challenges + improvements */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                            <FiAlertTriangle className="text-amber-400" />
                            Challenges Faced
                        </h2>
                        <ul className="mt-4 space-y-3">
                            {project.challenges.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 text-sm leading-relaxed text-slate-300"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                            <FiTrendingUp className="text-emerald-400" />
                            Future Plans
                        </h2>
                        <ul className="mt-4 space-y-3">
                            {project.improvements.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 text-sm leading-relaxed text-slate-300"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}