"use client";

import { motion, type Variants } from "framer-motion";
import { HeroSearch } from "@/components/HeroSearch";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease } },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto w-full flex flex-col items-start px-5 sm:px-8 md:px-12 pt-41 pb-10 max-w-[1400px]"
    >
      {/* Eyebrow */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="h-[2px] w-8 sm:w-10 bg-[#D4A24C]" />
        <span className="text-[#D4A24C] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase">
          Discover India&apos;s Spiritual Heritage
        </span>
      </motion.div>

      {/* Headline — each line rises up from behind a mask */}
      <h1 className="font-heading text-[2.25rem] leading-[1.12] sm:text-5xl lg:text-[4.25rem] font-bold tracking-tight text-white max-w-4xl">
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span variants={lineReveal} className="block">
            Every Temple
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span variants={lineReveal} className="block text-[#D4A24C]">
            Has a Story
          </motion.span>
        </span>
      </h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/95 max-w-xl font-light leading-relaxed"
      >
        Explore the most profound, ancient, and majestic temples across India. A digital
        encyclopedia of timeless devotion and architectural brilliance.
      </motion.p>

      {/* Search */}
      <motion.div variants={fadeUp} className="mt-7 sm:mt-8 w-full max-w-2xl">
        <HeroSearch />
      </motion.div>
    </motion.div>
  );
}
