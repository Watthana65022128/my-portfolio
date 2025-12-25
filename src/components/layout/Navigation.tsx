"use client";

import { useState } from "react";
import { navItems } from "@/data/personal";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm tracking-wide group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background/80 backdrop-blur-sm md:hidden transition-all duration-300 ease-smooth z-40",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav
          className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl m-4 shadow-2xl shadow-primary/5"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col p-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className="block text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
