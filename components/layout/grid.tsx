import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface GridProps {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};

export enum SectionType {
  HERO = "HERO",
  RECTANGLE = "RECTANGLE",
  SQUARE = "SQUARE",
  FULL_WIDTH = "FULL_WIDTH",
}

export interface SectionProps {
  children: ReactNode;
  sectionType: SectionType;
}

export const Section = ({ sectionType, children }: SectionProps) => {
  const variants = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn({
        "row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square":
          sectionType === SectionType.HERO,
        "aspect-[2] sm:col-span-2 px-1 pb-2":
          sectionType === SectionType.RECTANGLE,
        "aspect-square px-1 pb-2": sectionType === SectionType.SQUARE,
        "row-span-2 px-1 pb-2 sm:col-span-4":
          sectionType === SectionType.FULL_WIDTH,
      })}
    >
      {sectionType === SectionType.HERO ? (
        <div className={"h-full w-full"}>{children}</div>
      ) : (
        children
      )}
    </motion.div>
  );
};
