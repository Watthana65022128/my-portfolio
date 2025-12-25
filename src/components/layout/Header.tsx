"use client";

import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ThemeToggle from "../ui/ThemeToggle";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-gradient hover:opacity-80 transition-opacity duration-200"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </a>

          {/* Navigation and Theme Toggle */}
          <div className="flex items-center gap-4">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
