"use client";
import React, { JSX, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const lastProgress = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - lastProgress.current;
      lastProgress.current = current;

      if (current < 0.05) {
        setVisible(true); // Always visible at top
      } else {
        setVisible(direction < 0); // Show if scrolling up
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-6 sm:top-8 inset-x-0 mx-auto rounded-full shadow-lg z-[5000] px-6 py-3 bg-[#D1F2EB] backdrop-blur-sm border border-[#b8e0d9] items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-[#2C736A] hover:text-[#1E4D46] transition-colors duration-200"
            )}
          >
            <span className="block sm:hidden text-xl p-2 bg-white/80 rounded-full">
              {navItem.icon}
            </span>
            <span className="hidden sm:block text-sm font-medium px-4 py-2 hover:bg-button/50 rounded-full transition-all duration-200">
              {navItem.name}
            </span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};