"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { Landmark, MapPin, CalendarDays, Camera, Users, type LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

type Stat = {
  icon: LucideIcon;
  target: number;
  suffix: string;
  label: string;
  border: string;
};

const stats: Stat[] = [
  { icon: Landmark, target: 1500, suffix: "+", label: "Temples", border: "border-r border-white/10" },
  { icon: MapPin, target: 28, suffix: "", label: "States & UTs", border: "sm:border-r border-white/10" },
  { icon: CalendarDays, target: 5000, suffix: "+", label: "Years of Heritage", border: "border-r border-white/10" },
  { icon: Camera, target: 10000, suffix: "+", label: "Photos & Stories", border: "md:border-r border-white/10" },
  { icon: Users, target: 1, suffix: "M+", label: "Devotees & Explorers", border: "col-span-2 sm:col-span-1" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v).toLocaleString("en-US"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 1.8, ease });
    return controls.stop;
  }, [inView, target, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function HeroStats() {
  return (
    <div className="relative z-20 px-4 sm:px-6 md:px-8 pb-8 sm:pb-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-3 gap-y-3 sm:gap-4 py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 rounded-2xl bg-black/25 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        {stats.map(({ icon: Icon, target, suffix, label, border }) => (
          <motion.div
            key={label}
            variants={item}
            className={`flex flex-col items-center justify-center text-center gap-1 ${border}`}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4A24C]" strokeWidth={1.5} />
            <div>
              <div className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white leading-none">
                <CountUp target={target} suffix={suffix} />
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-white/70 font-medium tracking-wide mt-1">
                {label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
