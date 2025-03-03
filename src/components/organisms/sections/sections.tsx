"use client";

import { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface IPropsSections {
  components: React.ComponentType[];
}

export function Sections({ components }: IPropsSections) {
  // Create refs for each section
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {components.map((Component, index) => (
        <section
          key={index}
          ref={(el: HTMLDivElement | null) => {
            if (el) {
              sectionRefs.current[index] = el;
            }
          }}
          className={`group w-full flex flex-col items-center justify-center relative  ${
            index === components.length - 1
              ? "h-[calc(100vh-52px)] pt-32"
              : "h-screen pt-28"
          }`}
        >
          <Component />

          {/* Navigation Buttons - Visible on section hover */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scrollToSection((index - 1 + 4) % 4)}
              className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scrollToSection((index + 1) % 4)}
              className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </button>
          </div>
        </section>
      ))}
    </>
  );
}
