"use client";

import type { IconType } from "react-icons";
import { motion, useReducedMotion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

type FloatingItem = {
  icon: IconType;
  color: string; // Tailwind text color class
  position: string; // Tailwind position classes
  size: string; // Tailwind text size class
  duration: number; // seconds for one float cycle
  delay: number;
  hideOnMobile?: boolean;
};

const items: FloatingItem[] = [
  {
    icon: FaReact,
    color: "text-[#61DAFB]",
    position: "left-[4%] top-[14%]",
    size: "text-4xl sm:text-5xl",
    duration: 7,
    delay: 0,
  },
  {
    icon: FaNodeJs,
    color: "text-[#5FA04E]",
    position: "right-[5%] top-[22%]",
    size: "text-4xl sm:text-5xl",
    duration: 8,
    delay: 1,
  },
  {
    icon: SiMongodb,
    color: "text-[#47A248]",
    position: "left-[7%] top-[48%]",
    size: "text-3xl sm:text-4xl",
    duration: 9,
    delay: 0.5,
  },
  {
    icon: SiNextdotjs,
    color: "text-white",
    position: "right-[8%] top-[56%]",
    size: "text-3xl sm:text-4xl",
    duration: 7.5,
    delay: 1.5,
  },
  {
    icon: SiTypescript,
    color: "text-[#3178C6]",
    position: "left-[3%] top-[76%]",
    size: "text-3xl sm:text-4xl",
    duration: 8.5,
    delay: 2,
  },
  {
    icon: SiTailwindcss,
    color: "text-[#38BDF8]",
    position: "right-[4%] top-[80%]",
    size: "text-3xl sm:text-4xl",
    duration: 9.5,
    delay: 0.8,
  },
  {
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
    position: "left-[12%] top-[32%]",
    size: "text-3xl",
    duration: 10,
    delay: 1.2,
    hideOnMobile: true,
  },
  {
    icon: FaGitAlt,
    color: "text-[#F05032]",
    position: "right-[13%] top-[40%]",
    size: "text-3xl",
    duration: 8,
    delay: 2.5,
    hideOnMobile: true,
  },
  {
    icon: FaHtml5,
    color: "text-[#E34F26]",
    position: "left-[14%] top-[64%]",
    size: "text-3xl",
    duration: 9,
    delay: 0.3,
    hideOnMobile: true,
  },
  {
    icon: FaCss3Alt,
    color: "text-[#1572B6]",
    position: "right-[14%] top-[10%]",
    size: "text-3xl",
    duration: 7,
    delay: 1.8,
    hideOnMobile: true,
  },
];

export default function FloatingIcons() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className={`absolute opacity-[0.16] ${item.position} ${item.size} ${item.color} ${
            item.hideOnMobile ? "hidden md:block" : ""
          }`}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -28, 0], rotate: [0, 8, -8, 0] }
          }
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon />
        </motion.span>
      ))}
    </div>
  );
}