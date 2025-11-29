"use client";

import { personalInfo } from "@/data/personal";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1 className="heading-primary mb-4 animate-slide-up">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="heading-secondary text-foreground mb-6 animate-slide-up">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={() => {
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-muted-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
