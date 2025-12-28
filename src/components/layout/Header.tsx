"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import ThemeToggle from "../ui/ThemeToggle";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down past 50px, show when scrolling up
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setHidden(true);
        } else {
          // Scrolling up
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
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
          : "bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0"
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
