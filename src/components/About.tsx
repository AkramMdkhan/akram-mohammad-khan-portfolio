import type { IconType } from "react-icons";
import { FiCode, FiHeart, FiSmile, FiTarget } from "react-icons/fi";

type Box = {
    title: string;
    text: string;
    icon: IconType;
};

// ✏️ EDIT THIS PART WITH YOUR REAL DETAILS
const journey: Box = {
    title: "My Programming Journey",
    icon: FiCode,
    text: "I started learning web development out of curiosity and quickly fell in love with building things people can use. I began with HTML, CSS and JavaScript, then moved to the MERN stack to build complete full stack apps. Today I build Full Stack responsive websites and web applications with React, Typescript, Next.js, Node.js and MongoDB, and I keep learning something new every week.",
};

const workILove: Box = {
    title: "Work I Enjoy",
    icon: FiTarget,
    text: "I enjoy turning ideas and designs into clean, fast and responsive interfaces, and building the APIs and databases behind them. Solving real problems for real users is what motivates me most.",
};

const personality: Box = {
    title: "My Personality",
    icon: FiSmile,
    text: "Curious, disciplined and always improving. I like clear communication, honest feedback and delivering work on time.",
};

const hobbies: string[] = ["Cricket", "Fitness", "Problem Solving", "Gaming", "Exploring new tech", "Music", "Soccer"];
// ✏️ END OF EDIT AREA

export default function About() {
    return (
        <section id="about" className="relative bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
                {/* heading */}
                <div className="mb-10 text-center md:mb-14">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                        Get to know me
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        About{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                </div>

                {/* bento grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* big journey box */}
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-emerald-500/10 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 sm:col-span-2 sm:p-8 lg:row-span-2">
                        <journey.icon className="text-3xl text-cyan-400" />
                        <h3 className="mt-4 text-xl font-bold text-white">
                            {journey.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                            {journey.text}
                        </p>
                    </div>

                    {/* stat: main stack */}
                    <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400/50">
                        <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-4xl font-extrabold text-transparent">
                            MERN
                        </div>
                        <p className="mt-1 text-sm text-slate-400">Main stack</p>
                    </div>

                    {/* stat: framework */}
                    <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400/50">
                        <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-4xl font-extrabold text-transparent">
                            Next.js
                        </div>
                        <p className="mt-1 text-sm text-slate-400">Favourite framework</p>
                    </div>

                    {/* work I enjoy */}
                    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 sm:col-span-2">
                        <workILove.icon className="text-2xl text-cyan-400" />
                        <h3 className="mt-3 text-lg font-bold text-white">
                            {workILove.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {workILove.text}
                        </p>
                    </div>

                    {/* personality */}
                    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 sm:col-span-1 lg:col-span-2">
                        <personality.icon className="text-2xl text-cyan-400" />
                        <h3 className="mt-3 text-lg font-bold text-white">
                            {personality.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {personality.text}
                        </p>
                    </div>

                    {/* hobbies */}
                    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 sm:col-span-1 lg:col-span-2">
                        <FiHeart className="text-2xl text-cyan-400" />
                        <h3 className="mt-3 text-lg font-bold text-white">
                            Hobbies &amp; Interests
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {hobbies.map((hobby) => (
                                <span
                                    key={hobby}
                                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                                >
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}