"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

type NavLink = {
  name: string;
  id: string; // matches the section id on the page
};

const links: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("home");
  const pathname = usePathname();

  // clicking the logo: scroll to top on the home page, or go home from other pages
  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  }

  // watch which section is in the middle of the screen
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // which link looks active
  const currentId =
    pathname === "/"
      ? activeId
      : pathname.startsWith("/projects")
        ? "projects"
        : "";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl"
        >
          Akram Mohammad Khan.
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = currentId === link.id;

            return (
              <li key={link.id} className="relative">
                <Link
                  href={`/#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </Link>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-gradient-to-r from-cyan-400 to-emerald-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-slate-950 px-4 py-3 md:hidden">
          {links.map((link) => {
            const isActive = currentId === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}