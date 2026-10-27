import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

type ContactItem = {
    label: string;
    value: string;
    href: string;
    icon: IconType;
    hint: string;
    external?: boolean;
};


const email = "akrammdkhan10@gmail.com";
const phone = "+8801777427310";
const whatsapp = "+8801777427310"; 


const whatsappDigits = whatsapp.replace(/\D/g, "");

const items: ContactItem[] = [
    {
        label: "Email",
        value: email,
        href: `mailto:${email}`,
        icon: FiMail,
        hint: "Send me an email",
    },
    {
        label: "Phone",
        value: phone,
        href: `tel:${phone.replace(/\s/g, "")}`,
        icon: FiPhone,
        hint: "Call me directly",
    },
    ...(whatsappDigits
        ? [
            {
                label: "WhatsApp",
                value: whatsapp,
                href: `https://wa.me/${whatsappDigits}`,
                icon: FaWhatsapp,
                hint: "Message me on WhatsApp",
                external: true,
            },
        ]
        : []),
];

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-slate-950">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />

            <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
                {/* heading */}
                <div className="mb-10 text-center md:mb-14">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                        Let&apos;s work together
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Get In{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-slate-300">
                        Have a project, an idea or a question? Reach out directly and I will
                        get back to you as soon as I can.
                    </p>
                </div>

                {/* contact cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {items.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            {...(item.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            className="group flex flex-col items-center rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400/50"
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:bg-cyan-400/20">
                                <item.icon />
                            </span>
                            <h3 className="mt-4 text-lg font-bold text-white">
                                {item.label}
                            </h3>
                            <p className="mt-1 break-all text-sm text-slate-300">
                                {item.value}
                            </p>
                            <span className="mt-3 text-xs font-medium text-cyan-400">
                                {item.hint}
                            </span>
                        </a>
                    ))}
                </div>

                {/* main button */}
                <div className="mt-10 text-center">
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-8 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-500/30"
                    >
                        <FiMail />
                        Send Me an Email
                    </a>
                </div>
            </div>
        </section>
    );
}