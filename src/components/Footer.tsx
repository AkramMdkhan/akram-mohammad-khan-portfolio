import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

type Social = {
    name: string;
    href: string;
    icon: IconType;
};

// ✏️ EDIT: use the same profile links as in your Hero
const socials: Social[] = [
    { name: "GitHub", href: "https://github.com/AkramMdKhan", icon: FaGithub },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/akrammdkhan",
        icon: FaLinkedinIn,
    },
];
// ✏️ END OF EDIT AREA

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
                    {/* brand */}
                    <div className="text-center md:text-left">
                        <Link
                            href="/#Home"
                            className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl"
                        >
                            Akram Mohammad Khan.
                        </Link>
                        <p className="mt-2 max-w-xs text-sm text-slate-400">
                            MERN Stack Developer building fast, responsive web apps.
                        </p>
                    </div>

                    {/* socials */}
                    <div className="flex items-center gap-3">
                        {socials.map(({ name, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* bottom bar */}
                <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
                    © {year} Akram Mohammad Khan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}